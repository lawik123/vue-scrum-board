<template>
<button class="floatingActionButton" v-on:click="clickHandler"><slot/></button>
</template>

<script>
export default {
  name: 'floatingActionButton',
  props: {
    clickHandler: Function,
  },
};
</script>

<style>
.floatingActionButton{
    position:fixed;
    bottom: 30px;
    right: 30px;
    background-color: #00897b;
    border-radius: 50px;
    width:60px;
    height: 60px;
    font-size:30px;
    text-align: center;
    border: none;
    box-shadow: 2px 2px 3px #999;
    font-weight: bolder;
    cursor:pointer;
    color: #fff;
    user-select: none;
    opacity: 0.7;
}
.floatingActionButton:focus{
    outline:0;
}
.floatingActionButton:hover{
    opacity: 1;
}

</style>
