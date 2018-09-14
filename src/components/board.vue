<template>
  <div class="columns">
    <column v-for="column in board.columns" v-bind:key="column.id" v-bind:name="column.name" v-bind:stories="column.stories" />
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
.columns {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: flex-start;
  margin: 10px;
  height: 100%;
}
</style>
