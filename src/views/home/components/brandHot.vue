<comment>
/* # 组件注释
* 模块描述：品牌热榜
*/
</comment>
<template>
<div class="brand-hot">
  <div class="title-top">
    <div class="title">
      <img src="../img/hot.png" alt="">
      <span>品牌热榜</span>
    </div>
    <h1>查看所有品牌</h1>
  </div>

  <div class="brand-logo">
    <img src="../img/puket.png" alt="" v-for="i in 8" :key="i">
  </div>


</div>
</template>

<script>
export default {
  name: "brandHot"
}
</script>

<style scoped lang="scss">
.brand-hot{
  width: 100%;
  height: 314px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  .title-top{
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    border-bottom: 1px solid #F0F0F0;
    .title{
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 15px;
        height: 23px;
        margin-right: 10px;
      }
    }
    > h1 {
      cursor: pointer;
      font-size: 14px;
      color: $main-color;
    }


  }

  .brand-logo{
    flex: 1;
    padding: 30px 0 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    //justify-content: center;
    img{
      width: 16.7%;
      height: 110px;
      border: 1px solid #F2F2F2;
      margin: 0  0 1px -1px;
    }
  }
}

</style>