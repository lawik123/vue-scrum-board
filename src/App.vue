<template>
  <div id="app">
    <board v-bind:board="board" />
  </div>
</template>

<script>
import board from './components/scrumboard/board.vue';

export default {
  name: 'app',
  components: {
    board,
  },
  data() {
    return {
      board: {
        storyIdCounter: 0,
        name: 'First Board',
        columns: [{ name: 'To-Do', stories: [], id: 1 }, { name: 'Doing', stories: [], id: 2 }, { name: 'Testing', stories: [], id: 3 }, { name: 'Done', stories: [], id: 4 }],
      },
    };
  },
  mounted() {
    if (localStorage.getItem('board')) {
      this.board = JSON.parse(localStorage.getItem('board'));
    }
  },
  watch: {
    board: {
      handler() {
        localStorage.setItem('board', JSON.stringify(this.board));
      },
      deep: true,
    },
  },
};
</script>

<style>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
html,
body {
  height: 100%;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 7px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: rgba(128, 128, 128, 0.2);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  width: 5px;
  background: grey;
  border-radius: 10px;
}
/* End Scrollbar */
</style>
