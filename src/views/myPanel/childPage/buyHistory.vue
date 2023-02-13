<comment>
/* # 组件注释
* 模块描述： 我的面板-购买历史
*/
</comment>
<template>
<div class="buy-history">
  <div class="top-wrap">
    <h1>购买历史</h1>

    <div class="mod-classify">
      <div v-for="(item,index) in classifyTab"
           :class="index == 0 ? 'active': ''"
           :key="index" @click="switchTab(item)">
        {{ item.title }}
        <p v-if="index==0"></p>
      </div>
    </div>
  </div>

  <div class="history-content">
    <template v-if="true">
      <div class="order-data">
        <div class="type">
          <div>订单号</div>
          <div>日期</div>
          <div>卖家</div>
          <div>金额</div>
          <div>状态</div>
          <div>操作</div>
        </div>

        <ul>
          <li>
            <div class="mod-highlight time">2022232-3223223</div>
            <div>2021-12-12</div>
            <div>NICED官方店</div>
            <div class="mod-highlight">$23.32</div>
            <div>等待支付</div>
            <div class="operate">
              <div>付款</div>
              <div class="details" @click="toDetails()">详情</div>
            </div>
          </li>

          <li>
            <div class="mod-highlight time">2022232-3223223</div>
            <div>2021-12-12</div>
            <div>NICED官方店NICED官方店</div>
            <div class="mod-highlight">$23.32</div>
            <div class="mod-highlight">已支付</div>
            <div class="operate">
<!--              <div>付款</div>-->
              <div class="cancel">取消订单</div>
              <div class="details">详情</div>
            </div>
          </li>
          <li>
            <div class="mod-highlight time">2022232-3223223</div>
            <div>2021-12-12</div>
            <div>NICED官方店NICED官方店</div>
            <div class="mod-highlight">$23.32</div>
            <div class="mod-highlight">已完成</div>
            <div class="operate">
              <!--              <div>付款</div>-->
<!--              <div class="cancel">取消订单</div>-->
              <div class="finished">删除记录</div>
              <div class="details">详情</div>
            </div>
          </li>
        </ul>
      </div>

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
  name: "buyHistory",
  data() {
    return {
      classifyTab: [
        {title: '全部',},
        {title: '待付款',},
        {title: '待发货',},
        {title: '待收货',},
        {title: '已完成',},
        {title: '取消订单',},
        {title: '退货/退款',},
      ]
    }
  },
  components:{
    noData
  },
  methods:{
    toDetails(){
      this.$router.push('/panelInfo/orderDetails')
    },
    switchTab(){

    }
  }
}
</script>

<style scoped lang="scss">
.buy-history{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  .top-wrap{
    padding: 30px 40px 0;
    border-bottom: 1px solid #F0F0F0;
    height: 123px;
    h1 {
      font-size: 20px;
      color: $main-color;
      margin-bottom: 30px;
    }
    .store-classify {
      flex: 1;
      font-size: 16px;
      color: #757575;
      display: flex;
      align-items: center;
      justify-content: center;

      > div {
        position: relative;
        margin: 0 16px;
        cursor: pointer;

        p {
          position: absolute;
          bottom: -16px;
          left: 50%;
          width: 100%;
          height: 4px;
          transform: translate(-50%);
          background: #F7562C;
          border-radius: 27px;
        }
      }

      .active {
        color: #F7562C;
      }

    }
  }
  .history-content{
    padding: 27px 40px;
    flex: 1;
    display: flex;
    //align-items: center;
    justify-content: space-between;
    flex-direction: column;
    .order-data{
      font-size: 12px;
      color: #A3A3A3;
      .type{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        //justify-content: center;
        div{
          width: 16%;
          text-align: center;
          line-height: 15px;
        }

      }
      >ul{

        li{
          height: 36px;
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          border-bottom: 1px solid #F0F0F0;
          .time{
            text-decoration:underline
          }
          div{
            width: 16%;
            text-align: center;
            line-height: 15px;
          }
          .operate{
            display: flex;
            cursor: default;
            align-items: center;
            justify-content: space-between;
            >div{
              font-size: 12px;
              height: 30px;
              width: 45%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: $main-color;
              line-height:14px;
              color: #fff;
              border-radius: 5px;
            }
            .details{
              background: #61C1E3;
            }
            .cancel{
              background: #757575;
            }
            .finished{
              background: #C51918;
            }
          }
        }
      }

    }



  }
  .no-data{
    margin-top: 50px;
  }

}
</style>