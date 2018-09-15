<template>
<div id="overlay" onclick="off()">
    <div class="spinner"></div>
</div>

</template>

<script>
export default {
  name: 'spinner',
};
</script>

<style>
.spinner {
  border: 8px solid rgba(128, 128, 128, 0.2);
  border-top: 8px solid grey;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#overlay {
  position: absolute;
    top:0px;
    left:0px;
    width: 100%;
    height: 100%;
    background:  transparent;
    opacity: .5;
}
</style>
