<comment>
/* # 组件注释
* 模块描述： 客服组件
*/
</comment>
<template>
<div class="customer-service">
  <img src="./img/service.png" alt="">
</div>
</template>

<script>
export default {
  name: "customerService"
}
</script>

<style scoped lang="scss">
.customer-service{
  position: fixed;
  right: 20px;
  top: 50%;
  height: 56px;
  width: 56px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img{
    width: 36px;
    height: 36px;
  }
}

</style>