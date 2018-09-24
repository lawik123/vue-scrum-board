<template>
  <div>
    <h1 v-if="boardsData.boards.length == 0" class="welcomeMessage">Hello, please start by creating your first board!</h1>
    <h1 v-else class="welcomeMessage">Hello, please select or create a board!</h1>
    <div class="boardsContainer">
      <div class="boardItem" v-for="board in boardsData.boards" v-bind:key="board.id" v-on:click="navigateToBoard(board)">
        <h3>{{board.name}}</h3>
      </div>
    </div>
    <FloatingActionButton v-bind:clickHandler="toggleModal">+</FloatingActionButton>
    <FormModal v-if="showModal" v-on:formSuccess="onFormSuccess" v-bind:title="'Add a new board'" v-bind:submitButtonText="'add'" v-on:closeModal="toggleModal" v-bind:inputFields="[{id:'boardName', displayText: 'Board name', type: 'text', required: true}]">
    </FormModal>
  </div>
</template>

<script>
import FloatingActionButton from './util/FloatingActionButton.vue';
import FormModal from './util/modal/FormModal.vue';

export default {
  name: 'BoardsOverview',
  components: {
    FloatingActionButton,
    FormModal,
  },
  data() {
    return {
      boardsData: {
        boardIdCounter: 0,
        boards: [],
      },
      showModal: false,
    };
  },
  mounted() {
    if (localStorage.getItem('boardsData')) {
      this.boardsData = JSON.parse(localStorage.getItem('boardsData'));
    }
  },
  watch: {
    boardsData: {
      handler() {
        localStorage.setItem('boardsData', JSON.stringify(this.boardsData));
      },
      deep: true,
    },
  },
  methods: {
    navigateToBoard(board) {
      this.$router.push({ name: 'board', params: { board } });
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    onFormSuccess(values) {
      this.boardsData.boards.push({
        id: this.boardsData.boardIdCounter += 1,
        storyIdCounter: 0,
        name: values.boardName,
        columns: [{ name: 'To-Do', stories: [], id: 1 }, { name: 'Doing', stories: [], id: 2 }, { name: 'Testing', stories: [], id: 3 }, { name: 'Done', stories: [], id: 4 }],
      });
      this.toggleModal();
    },
  },
};
</script>

<style>
.welcomeMessage {
  text-align: center;
}

.boardsContainer {
  width: 75%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.boardItem {
  background-color: #dfe3e6;
  border-radius: 3px;
  user-select: none;
  cursor: pointer;
  height: 100px;
  overflow-x: hidden;
  overflow-y: auto;
  flex-basis: 49%;
  word-break: break-word;
  margin-top: 10px;
  margin-bottom: 10px;
}

.boardItem h3 {
  padding: 10px;
  margin: 0;
}
</style>
