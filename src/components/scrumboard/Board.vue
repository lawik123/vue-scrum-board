<template>
  <div class="board">
    <h2 class="boardName">
      <span v-on:click="navigateToBoards">&larr;</span> {{board.name}}</h2>
    <div class="columns">
      <Column v-for="(column, index) in board.columns" v-bind:key="column.id" v-bind:name="column.name" v-bind:id="column.id" v-bind:stories="column.stories" v-bind:lastColumn="index === (board.columns.length - 1)" v-on:moveStory="onMoveStory" />
    </div>
    <FloatingActionButton v-bind:clickHandler="toggleModal">+</FloatingActionButton>
    <FormModal v-if="showModal" v-on:formSuccess="onFormSuccess" v-bind:title="'Add a new Story'" v-bind:submitButtonText="'Add'" v-on:closeModal="toggleModal" v-bind:inputFields="[{id:'title', type: 'text', required: true}, {id:'points', type: 'number', required: true, min: 0 }]">
    </FormModal>
  </div>
</template>

<script>
import Column from './Column.vue';
import FloatingActionButton from '../util/FloatingActionButton.vue';
import FormModal from '../util/modal/FormModal.vue';

export default {
  name: 'Board',
  components: {
    Column,
    FloatingActionButton,
    FormModal,
  },
  props: {
    board: Object,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    onMoveStory(index, columnId) {
      const columnIndex = this.board.columns.findIndex(obj => obj.id === columnId);
      if (columnIndex !== -1 && columnIndex !== (this.board.columns.length - 1)) {
        const story = this.board.columns[columnIndex].stories[index];
        this.board.columns[columnIndex].stories.splice(index, 1);
        this.board.columns[columnIndex + 1].stories.push(story);
      }
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    onFormSuccess(values) {
      this.board.columns[0].stories.push({ id: this.board.storyIdCounter += 1, title: values.title, points: values.points });
      this.toggleModal();
    },
    navigateToBoards() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.boardName {
  white-space: nowrap;
  margin: 0 0 5px 0;
  overflow-x: auto;
}

.boardName span {
  user-select: none;
  cursor: pointer;
}

.board {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.columns {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: flex-start;
  flex: 1;
}
</style>
