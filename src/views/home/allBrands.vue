<comment>
/* # 组件注释
* 模块描述： allBrands：所有品牌
*/
</comment>
<template>
  <div class="all-brands">
    <div class="content">
      <div class="title-top">
        <div class="title">
          <img src="./img/hot.png" alt="">
          <span>所有品牌</span>
        </div>
      </div>
      <div class="brand-list">
        <img src="./img/puket.png" alt="" v-for="i in 28" :key="i">
      </div>
      <div class="check-more">显示更多</div>
    </div>
    <div class="exhibition"></div>
  </div>
</template>

<script>
export default {
  name: "allBrands"
}
</script>

<style scoped lang="scss">
.all-brands {
  .content {
    width: 100%;
    min-height: 300px;
    background: #FFFFFF;
    border-radius: 14px;
    margin-bottom: 30px;
    padding: 0 20px 20px;

    .title-top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      border-bottom: 1px solid #F0F0F0;
      color: #757575;
      .title{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        img{
          width: 15px;
          height: 23px;
          margin-right: 10px;
        }
      }
    }
    .brand-list{
      padding: 20px 10px 10px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      >img{
        width:calc(100% /5.7);
        height: 110px;
        border: 1px solid #F2F2F2;
        margin: 0 30px 20px 0;
        &:nth-child(5n){
          margin: 0 0 20px 0;
        }
      }

    }

    .check-more{
      text-align: center;
      font-size: 16px;
      color: #A3A3A3;
      cursor: pointer;
    }



  }
  .exhibition{
    width: 100%;
    height: 400px;
    //background: #FD5C32;
    border-radius: 14px;
    background-image: url("./img/section.png");
    background-size: cover;

  }
}
</style>