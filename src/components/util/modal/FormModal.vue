<template>
  <HeaderBodyFooterModal v-bind:closeButtonText="'Cancel'" v-bind:title="title" v-on:closeModal="$emit('closeModal')">
    <div class="inputFields" slot="body">
      <div v-for="(input,key) in formData" v-bind:key="key">
        <h4 class="inputDisplayText">{{input.displayText !=null ? input.displayText : key}}</h4>
        <input v-on:input="clearError(key)" v-on:keyup.enter="submit" v-bind:type="input.type == 'text' || input.type == 'number' ? 'text' : input.type" v-model="input.value" v-bind:min="input.min" v-bind:max="input.max">
        <h6 class="inputError" v-if="input.error">{{input.error}}</h6>
      </div>
    </div>
    <button slot="footerButtons" class="FooterButton addButton" v-on:click="submit">{{submitButtonText}}</button>
  </HeaderBodyFooterModal>
</template>

<script>
import HeaderBodyFooterModal from './HeaderBodyFooterModal.vue';

export default {
  name: 'FormModal',
  components: {
    HeaderBodyFooterModal,
  },
  props: {
    title: String,
    inputFields: Array,
    submitButtonText: {
      default: 'Submit',
      type: String,
    },
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
        const isInputEmpty = this.isInputEmpty(input);
        if (
          isInputEmpty &&
          input.required === true
        ) {
          this.formData[key].error = 'This field is required';
          error = true;
        } else if (input.type === 'number' && !isInputEmpty && Number.isNaN(+input.value)) {
          this.formData[key].error = 'This field must be a number';
          error = true;
        } else if (
          !isInputEmpty &&
          input.min !== undefined &&
          parseInt(input.value, 10) < input.min
        ) {
          this.formData[key].error = `This field has a minimum value of ${
            input.min
          }`;
          error = true;
        } else if (
          !isInputEmpty &&
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
            default:
              inputValues[key] = value;
          }
        });
        this.$emit('formSuccess', inputValues);
      }
    },
    clearError(key) {
      this.formData[key].error = '';
    },
    isInputEmpty(input) {
      return input.value === undefined || input.value.length === 0;
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
