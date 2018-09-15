<template>
    <div class="story">
        <h5 class="story-details">
            {{story.id}}
            {{story.title}}
            {{story.points}}
        </h5>
    </div>
</template>

<script>
export default {
  name: 'story',
  props: {
    story: Object,
  },
};
</script>

<style>
.story {
  background-color: #fff;
  min-height: 20px;
  padding: 6px 8px 2px;
  margin-bottom: 8px;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
}
.story-details {
  margin: 0 0 4px;
  word-break: break-word;
}
</style>
