<template>
  <div>
    <h1 v-if="boardsData.boards.length == 0" class="welcomeMessage">Hello, please start by creating your first board!</h1>
    <h1 v-else class="welcomeMessage">Hello, please select or create a board!</h1>
    <div class="boardsContainer">
      <BoardItem v-for="board in boardsData.boards" v-bind:key="board.id" v-bind:id="board.id" v-bind:name="board.name" v-on:boardClick="navigateToBoard"/>
    </div>
    <FloatingActionButton v-bind:clickHandler="toggleModal">+</FloatingActionButton>
    <FormModal v-if="showModal" v-on:formSuccess="onFormSuccess" v-bind:title="'Add a new board'" v-bind:submitButtonText="'add'" v-on:closeModal="toggleModal" v-bind:inputFields="[{id:'boardName', displayText: 'Board name', type: 'text', required: true}]">
    </FormModal>
  </div>
</template>

<script>
import FloatingActionButton from '../util/FloatingActionButton.vue';
import FormModal from '../util/modal/FormModal.vue';
import BoardItem from './BoardItem.vue';

export default {
  name: 'BoardsOverview',
  components: {
    FloatingActionButton,
    FormModal,
    BoardItem,
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
    navigateToBoard(id) {
      console.log(id);
      const index = this.boardsData.boards.findIndex(obj => obj.id === id);
      if (index !== -1) {
        this.$router.push({ name: 'board', params: { board: this.boardsData.boards[index] } });
      }
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
</style>
