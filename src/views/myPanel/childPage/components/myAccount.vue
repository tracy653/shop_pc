<template>
  <div class="my-account">
    <h1>我的账户</h1>

    <ul>
      <li>
        <span class="title-number">99</span>
        <span>货品收藏</span>
      </li>
      <li>
        <span class="title-number">99</span>
        <span>我的优惠券</span>
      </li>
      <li>
        <span class="title-number">99</span>
        <span>喜欢的博客</span>
      </li>
      <li>
        <span class="title-number">99</span>
        <span>浏览历史</span>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "myAccount"
}
</script>

<style scoped lang="scss">
.my-account {
  h1{
    font-size: 20px;
    color: #333333;
  }
  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    margin-top: 20px;
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 14px;
      width: 23%;
      height: 120px;
      background: linear-gradient(180deg, #F6412D 0%, #FE6233 100%);
      font-size: 14px;
      line-height: 30px;
      color: #FFFFFF;
      .title-number{
        font-size: 26px;
      }
      span{
        width: 80%;
        text-align: center;
      }
    }

  }

}
</style>