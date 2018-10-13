<template>
  <div class="column-container">
    <div class="column-content">
      <h3 class="column-name">{{name}}</h3>
      <div class="stories">
        <Story v-for="story in stories" v-bind:key="story.id" v-bind:id="story.id" v-bind:title="story.title" v-bind:points="story.points" v-bind:moveable="!lastColumn"  v-on:moveStory="onMoveStory"/>
      </div>
    </div>
  </div>
</template>

<script>
import Story from './Story.vue';

export default {
  name: 'Column',
  props: {
    name: String,
    stories: Array,
    lastColumn: Boolean,
    id: Number,
  },
  components: {
    Story,
  },
  methods: {
    onMoveStory(id) {
      const index = this.stories.findIndex(obj => obj.id === id);
      if (index !== -1) {
        this.$emit('moveStory', index, this.id);
      }
    },
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
