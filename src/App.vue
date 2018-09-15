<template>
  <div id="app">
    <template v-if="loading">
      <spinner/>
    </template>
    <template v-if="board.columns.length > 0">
      <board v-bind:board="board" />
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import board from './components/scrumboard/board.vue';
import spinner from './components/util/spinner.vue';

export default {
  name: 'app',
  components: {
    board,
    spinner,
  },
  data() {
    return {
      loading: true,
      board: {
        name: '',
        columns: [],
      },
    };
  },
  mounted() {
    if (localStorage.getItem('board')) {
      this.board = JSON.parse(localStorage.getItem('board'));
    }
    axios.all([
      axios.get('http://localhost:3000/boards/1/'), // TODO: replace 1 with board id from route
      axios.get('http://localhost:3000/boards/1/columns?_embed=stories'),
    ])
      .then(axios.spread((boardRes, columnsRes) => {
        const loadedBoard = boardRes.data;
        loadedBoard.columns = columnsRes.data;
        this.board = loadedBoard;
        this.loading = false;
      }));
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
