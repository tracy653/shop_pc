<comment>
/* # 组件注释
* 模块描述： 我的面板-通知中心
*/
</comment>
<template>
  <div class="notify-center">
    <h1>通知中心</h1>
    <div class="notify-content">
      <template v-if="true">
        <ul>
          <li v-for="i in 5" :key="i">
            <div class="left">
              <div>您的订单343434已经确认</div>
              <span>deengk 4334043 10:34pm</span>
            </div>
            <p>查看详情</p>
          </li>
        </ul>
        <div class="mod-page-wrap">
          <div class="mod-before"> <i class="iconfont icon-xiajiantou-copy"></i> </div>
          <div>1</div>
          <div class="mod-active-page">2</div>
          <div>3</div>
          <div>4</div>
          <div class="mod-after"> <i class="iconfont icon-xiajiantou-copy-copy"></i> </div>
        </div>
      </template>
      <template v-else>
        <noData class="no-data"></noData>
      </template>
    </div>
  </div>
</template>

<script>
import noData from "../../../components/noData/noData";
export default {
  name: "notifyCenter",
  components:{
    noData
  }
}
</script>

<style scoped lang="scss">
.notify-center {
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  h1 {
    font-size: 20px;
    color: $main-color;
    margin-bottom: 30px;
  }
  .notify-content{
    flex: 1;
    display: flex;
    //align-items: center;
    justify-content: space-between;
    flex-direction: column;
    ul{
      li{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #F0F0F0;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #333333;
        padding: 8px 0;
        .left{
          height: 100%;
          width: 80%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          >span{
            color: #A3A3A3;
          }
        }
        p{
          color: $main-color;
          cursor: pointer;
        }

      }

    }
  }
  .no-data{
    margin-top: 50px;
  }
}

</style>