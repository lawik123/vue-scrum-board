<template>
  <div id="app">
    <board v-bind:board="board" />
  </div>
</template>

<script>
import board from './components/board.vue';

export default {
  name: 'app',
  components: {
    board,
  },
  data() {
    return {
      board: {
        columns: [
          {
            name: 'todo',
            stories: [
              { id: 1, title: 'test', points: 5 },
              { id: 2, title: 'test', points: 5 },
            ],
          },
          {
            name: 'doing',
            stories: [
              { id: 3, title: 'test', points: 5 },
              { id: 4, title: 'test', points: 5 },
              { id: 5, title: 'test', points: 5 },
            ],
          },
          { name: 'done', stories: [{ id: 6, title: 'test', points: 5 }] },
          {
            name: 'extra',
            stories: [
              { id: 7, title: 'test', points: 5 },
              { id: 8, title: 'test', points: 5 },
              { id: 9, title: 'test', points: 5 },
              { id: 10, title: 'test', points: 5 },
              { id: 11, title: 'test', points: 5 },
              { id: 12, title: 'test', points: 5 },
              { id: 13, title: 'test', points: 5 },
              { id: 14, title: 'test', points: 5 },
              { id: 15, title: 'test', points: 5 },
              { id: 16, title: 'test', points: 5 },
              { id: 18, title: 'test', points: 5 },
              { id: 19, title: 'test', points: 5 },
              { id: 20, title: 'test', points: 5 },
              { id: 21, title: 'test', points: 5 },
              { id: 22, title: 'test', points: 5 },
              { id: 23, title: 'test', points: 5 },
            ],
          },
          { name: 'extra', stories: [{ id: 24, title: 'test', points: 5 }] },
          { name: 'extra', stories: [{ id: 25, title: 'test', points: 5 }] },
          { name: 'extra', stories: [{ id: 26, title: 'test', points: 5 }] },
          { name: 'extra', stories: [{ id: 27, title: 'test', points: 5 }] },
        ],
      },
    };
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
