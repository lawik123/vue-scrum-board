<template>
  <div v-bind:style="{'cursor': moveable ? 'pointer' : 'normal'}" v-on:click="move()" class="story">
    <div class="story-details">
      <h6>{{story.id}}</h6>
      <h4>{{story.title}}</h4>
      <h5>{{story.points}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'story',
  props: {
    story: Object,
    moveable: Boolean,
  },
  methods: {
    move() {
      if (this.moveable) {
        this.$emit('moveStory', this.story.id);
      }
    },
  },
};
</script>

<style>
.story {
  background-color: #fff;
  padding: 6px 8px 2px;
  margin-bottom: 8px;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
}
.story-details {
  margin: 0 0 4px;
  word-break: break-word;
  overflow: hidden;
}

.story-details h4, .story-details h6 {
  margin: 0 0 4px;
}

.story-details h5{
  float: right;
  margin: 0;
}
</style>
