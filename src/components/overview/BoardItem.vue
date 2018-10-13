<template>
    <div class="boardItem" v-on:click="$emit('boardClick', id)">
        <h3>{{name}}</h3>
    </div>
</template>

<script>

export default {
  name: 'BoardItem',
  props: {
    id: Number,
    name: String,
  },
};
</script>

<style>
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
