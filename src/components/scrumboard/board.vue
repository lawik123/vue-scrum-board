<template>
  <div class="board">
    <h2 class="boardName">{{board.name}}</h2>
    <div class="columns">
      <column v-for="column in board.columns" v-bind:key="column.id" v-bind:name="column.name" v-bind:stories="column.stories" />
    </div>
  </div>
</template>

<script>
import column from './column.vue';

export default {
  name: 'board',
  components: {
    column,
  },
  props: {
    board: Object,
  },
};
</script>

<style>
.boardName {
  white-space: nowrap;
  margin: 0 0 5px 0;
  overflow-x: auto;
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
  height: 100%;
  flex: 1;
}
</style>
