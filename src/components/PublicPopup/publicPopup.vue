<template>
<div class="public-popup">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "PublicPopup"
}
</script>

<style scoped lang="scss">
.public-popup{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>