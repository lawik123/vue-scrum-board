<template>
    <BaseModal v-on:closeModal="$emit('closeModal')">
        <div class="modal-header">
            <h3>
                {{title}}
            </h3>
            <button v-on:click="$emit('closeModal')">×</button>
        </div>

        <div class="modal-body">
            <slot name="body">
            </slot>
        </div>

        <div class="modal-footer">
            <button class="FooterButton closeButton" v-on:click="$emit('closeModal')">{{closeButtonText}}</button>
            <slot name="footerButtons">
            </slot>
        </div>
    </BaseModal>
</template>

<script>
import BaseModal from './BaseModal.vue';

export default {
  name: 'HeaderBodyFooterModal',
  components: {
    BaseModal,
  },
  props: {
    title: String,
    closeButtonText: {
      default: 'Close',
      type: String,
    },
  },
};
</script>

<style>
.modal-header, .modal-body, .modal-footer {
  padding: 16px;
}

.modal-header {
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
}

.modal-header h3 {
  margin: 0;
  color: #000;
  font-weight: bolder;
}

.modal-header button {
  background-color: transparent;
  border: none;
  float: right;
  overflow: hidden;
  padding: 0;
  font-size: 1.17em;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
}
.modal-header button:focus {
  outline: none;
}

.modal-footer{
    display: flex;
    justify-content: flex-end;
}

.modal-footer button{
    color: #00897B;
    font-weight: bold;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 3px;
}
.modal-footer button:focus{
    outline:none;
}

.modal-footer>:not(:first-child){
    margin-left:2px;
}

.modal-footer>:not(:last-child){
    margin-right:2px;
}
</style>
