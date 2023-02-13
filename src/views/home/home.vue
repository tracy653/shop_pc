<comment>
/* # 组件注释
* 模块描述： home：首页框
*/
</comment>
<template>
<div class="home-wrapper">
  <myHead></myHead>
  <div class="main-content">
    <router-view></router-view>
  </div>
  <myFooter></myFooter>
</div>
</template>

<script>
import myHead from "../components/myHead";
import myFooter from "../components/myFooter";
export default {
  name: "home",
  components:{
    myHead,
    myFooter
  }
}
</script>

<style scoped lang="scss">
.home-wrapper{
  height: 100%;
  overflow: auto;
  .main-content{
    width: 1200px;
    margin:206px auto 0;
    min-height: 600px;
    padding-bottom: 50px;
    /*padding: 0 12% 50px;*/
  }
}

</style>
