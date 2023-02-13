<template>
  <div class="index-wrapper">
    <div class="component-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
}
</script>

<style scoped lang="scss">
.index-wrapper {
  width: 100%;
  height: 100%;
  //background: $dark-background-color;
  background-color: $main-bg;
  //padding-bottom: 1.1rem;
  //overflow-y: auto;
  .component-wrapper{
    height: 100%;
    overflow: hidden;
  }
}
</style>
