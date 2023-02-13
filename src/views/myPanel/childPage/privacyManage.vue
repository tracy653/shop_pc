<comment>
/* # 组件注释
* 模块描述： 我的面板-隐私设置
*/
</comment>
<template>
  <div class="privacy-manage">
    <myAccount></myAccount>
    <div class="content-details">
      <h2>隐私设置</h2>
      <div class="personal-data">
        <div class="data-left">
          <div class="item">
            <h3>广告推送</h3>
            <div class="item-text">
              <input type="text" value="" placeholder="将向您推送一些热门产品推荐和新闻">
              <p class="mod-choose-square mod-selected-square"></p>
            </div>
          </div>
          <div class="item">
            <h3>将您的信息分享给我们的关联公司</h3>
            <div class="item-text">
              <input type="text" value="" placeholder="开启以允许我们将您的信息分享给我们的关联公司">
              <p class="mod-choose-square mod-selected-square"></p>
            </div>
          </div>
          <div class="item">
            <h3>在顶栏显示我的余额</h3>
            <div class="item-text">
              <input type="text" value="" placeholder="开启或关闭顶栏余额显示">
              <p class="mod-choose-square"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myAccount from "./components/myAccount";

export default {
  name: "privacyManage",
  components: {
    myAccount
  }
}
</script>

<style scoped lang="scss">
.privacy-manage {
  padding: 30px 40px;

  .content-details {
    color: #333333;
    font-size: 14px;
    margin-top: 20px;

    h2 {
      font-size: 18px;
      color: #F7562C;
    }
    .personal-data {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0 5px;

      > div {
        width: 48%;

        .item {
          height: 50px;
          width: 100%;
          display: flex;
          padding: 4px 0;
          justify-content: space-between;
          flex-direction: column;
          margin-bottom: 20px;
          border-bottom: 1px solid #E0E0E0;
          .item-text{
            display: flex;
            align-items: center;
            justify-content: space-between;
            >input{
              flex: 1;
            }
          }

        }
      }
    }


  }
}

</style>