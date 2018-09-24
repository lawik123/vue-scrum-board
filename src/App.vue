<template>
  <div id="app">
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import BoardsOverview from './components/BoardsOverview.vue';

export default {
  name: 'app',
  components: {
    BoardsOverview,
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
