<!-- TODO(maybe): turn the form section of this component into a seperate component -->
<template>
  <headerBodyFooterModal v-bind:closeButtonText="'Cancel'" v-bind:title="title" v-on:closeModal="$emit('closeModal')">
    <div class="inputFields" slot="body">
      <div v-for="(input,key) in formData" v-bind:key="key">
        <h4 class="inputDisplayText">{{input.displayText !=null ? input.displayText : key}}</h4>
        <input v-on:input="clearError(key)" v-on:keyup.enter="submit" v-bind:type="input.type == 'text' || input.type == 'number' ? 'text' : input.type" v-model="input.value" v-bind:min="input.min" v-bind:max="input.max">
        <h6 class="inputError" v-if="input.error">{{input.error}}</h6>
      </div>
    </div>
    <button slot="footerButtons" class="FooterButton addButton" v-on:click="submit">{{submitButtonText}}</button>
  </headerBodyFooterModal>
</template>

<script>
import headerBodyFooterModal from './headerBodyFooterModal.vue';

export default {
  name: 'formModal',
  components: {
    headerBodyFooterModal,
  },
  props: {
    title: String,
    inputFields: Array,
    submitButtonText: {
      default: 'Submit',
      type: String,
    },
    submitFunction: Function,
  },
  data() {
    return {
      formData: {},
    };
  },
  created() {
    for (let i = 0; i < this.inputFields.length; i += 1) {
      const input = this.inputFields[i];
      this.$set(this.formData, input.id, {
        type: input.type,
        displayText: input.displayText,
        required: input.required,
        min: input.min,
        max: input.max,
        error: '',
        value: '',
      });
    }
  },
  methods: {
    submit() {
      let error = false;
      Object.keys(this.formData).forEach((key) => {
        this.formData[key].error = '';
      });
      Object.keys(this.formData).forEach((key) => {
        const input = this.formData[key];
        // TODO: Format this section
        if (
          (input.value === undefined || input.value.length === 0) &&
          input.required === true
        ) {
          this.formData[key].error = 'This field is required';
          error = true;
        } else if (input.type === 'number' && (input.value !== undefined || input.value.length > 0) && Number.isNaN(+input.value)) {
          this.formData[key].error = 'This field must be a number';
          error = true;
        } else if (
          (input.value !== undefined || input.value.length > 0) &&
          input.min !== undefined &&
          parseInt(input.value, 10) < input.min
        ) {
          this.formData[key].error = `This field has a minimum value of ${
            input.min
          }`;
          error = true;
        } else if (
          (input.value !== undefined || input.value.length > 0) &&
          input.max !== undefined &&
          parseInt(input.value, 10) > input.min
        ) {
          this.formData[key].error = `This field has a maximum value of ${
            input.min
          }`;
          error = true;
        }
      });
      if (!error) {
        const inputValues = {};
        Object.keys(this.formData).forEach((key) => {
          const { type, value } = this.formData[key];
          switch (type) {
            case 'number':
              inputValues[key] = +value;
              break;
            case 'text':
              inputValues[key] = value;
              break;
            default:
              inputValues[key] = value; // TODO: Throw some kind of error?
          }
        });
        this.$emit('formSuccess', inputValues);
      }
    },
    clearError(key) {
      this.formData[key].error = '';
    },
  },
};
</script>

<style>
.inputFields input[type="text"],
.inputFields input[type="number"] {
  width: 100%;
  border: none;
  border-bottom: 2px solid grey;
}
.inputFields input[type="text"]:focus,
.inputFields input[type="number"]:focus {
  outline: none;
  border-bottom-color: #00897b;
}
.inputDisplayText {
  margin: 0;
  text-transform: capitalize;
}
.inputFields > :not(:first-child) {
  margin-top: 15px;
}

.inputFields > :not(:last-child) {
  margin-bottom: 15px;
}

.inputError {
  color: red;
  margin: 5px 0 0;
}
</style>
