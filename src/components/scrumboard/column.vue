<template>
  <div class="column-container">
    <div class="column-content">
      <h3 class="column-name">{{name}}</h3>
      <div class="stories">
        <story v-for="story in stories" v-bind:key="story.id" v-bind:story="story" />
      </div>
    </div>
  </div>
</template>

<script>
import story from './story.vue';

export default {
  name: 'column',
  props: {
    name: String,
    stories: Array,
  },
  components: {
    story,
  },
};
</script>

<style>
.stories {
  overflow-y: auto;
  margin: 0 4px;
  padding: 0 4px;
}
.column-content {
  max-height: 100%;
  background-color: #dfe3e6;
  display: flex;
  flex-direction: column;
  width: 275px;
  border-radius: 3px;
}
.column-name {
  min-height: 40px;
  padding: 10px 8px 8px;
  margin: 0;
}

.column-container {
  margin: 0 10px 10px 0;
}
</style>
