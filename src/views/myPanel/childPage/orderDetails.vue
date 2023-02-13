<comment>
/* # 组件注释
* 模块描述： 我的面板-购买历史-订单详情
*/
</comment>
<template>
  <div class="order-details">
    <div class="order-number">订单ID: 20221119-23550240</div>
    <div class="order-content">
      <div class="details-top">
        <div class="data-left">
          <div class="item">
            <h3>指令码</h3>
            <span>20212-215455</span>
          </div>
          <div class="item">
            <h3>客户</h3>
            <span>张三</span>
          </div>
          <div class="item">
            <h3>电子邮件</h3>
            <span>123456@qq.com</span>
          </div>
          <div class="item">
            <h3>支付方式</h3>
            <span>电子钱包</span>
          </div>
        </div>
        <div class="data-right">
          <div class="item">
            <h3>订单日期</h3>
            <span>2022-11-19 23:54:99</span>
          </div>
          <div class="item">
            <h3>订单状态</h3>
            <span class="mod-highlight">支付</span>
          </div>
          <div class="item">
            <h3>订单总额</h3>
            <span class="mod-highlight">$554.25</span>
          </div>
          <div class="item">
            <h3>送货方式</h3>
            <span>平价运费</span>
          </div>
        </div>
      </div>
      <div class="attach">
        <h3>送货地址</h3>
        <span>美国芝加哥aded51p</span>
      </div>

      <div class="attach">
        <h3>附加信息</h3>
        <span>无</span>
      </div>

      <div class="details-bottom">
        <h1>订单细节</h1>
        <ul>
          <li>
            <p>#</p>
            <p>产品</p>
            <p>变化</p>
            <p>数量</p>
            <p>交付类型</p>
            <p>价格</p>
            <p>审查</p>
          </li>
          <li v-for="i in 4" :key="i">
            <div>{{ i }}</div>
            <div>nivea男士洁面乳</div>
            <div>无</div>
            <div>{{i}}</div>
            <div>送货上门</div>
            <div class="mod-highlight">$15.15</div>
            <div class="">
              <span class="review">审查</span>
            </div>
          </li>
        </ul>


        <div class="order-tracking">
          <h4>订单跟踪</h4>
          <ul class="logistics-info">
            <li class="item-info" v-for="i in 5" :key="i">
              <img src="" alt="">
              <span class="time">2012-12-05 15:12:33</span>
              <p>您的订单配送中</p>
            </li>

            <div class="expand-more">展开更多</div>
          </ul>
        </div>

        <h1>供方确认订单</h1>
        <div class="confirm-info">
          <div class="data-left">
            <div class="item">
              <h3>小计</h3>
              <span class="mod-highlight">$0.12</span>

            </div>
            <div class="item">
              <h3>税费</h3>
              <span class="mod-highlight">$0.12</span>

            </div>
          </div>
          <div class="data-right">
            <div class="item">
              <h3>运费</h3>
              <span class="mod-highlight">$0.12</span>

            </div>
            <div class="item">
              <h3>优惠券</h3>
              <span class="mod-highlight">$0.12</span>
            </div>
          </div>
        </div>
        <div class="count mod-highlight">总计：$415.02</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderDetails",
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
.order-details {
  .order-number {
    padding: 30px 40px 10px;
    border-bottom: 1px solid #F0F0F0;
    font-size: 20px;
    color: $main-color;
  }

  .order-content {
    padding: 30px 40px;
    .details-top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      >div {
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
          color: #333333;
        }
      }
    }
    .attach{
      height: 50px;
      width: 100%;
      padding: 4px 0;
      color: #333333;
      border-bottom: 1px solid #E0E0E0;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin-bottom: 20px;

    }

    .details-bottom{
      margin-top: 30px;
      h1{
        color: $main-color;
        font-size: 18px;
      }
      >ul{
        margin: 20px 0 30px;
        li{
          display: flex;
          align-items: center;
          height: 48px;
          border-bottom: 1px solid #F0F0F0;
          &:nth-child(1){
            border-bottom: none;
          }
          >p{
            line-height: 15px;
            color: #A3A3A3;
            font-size: 12px;
            width: 15%;
            text-align: center;
            &:nth-child(1){
              width: 5%;
              text-align: left;
            }
          }
          >div{
            line-height: 15px;
            color: #A3A3A3;
            font-size: 12px;
            width: 15%;
            text-align: center;
            &:nth-child(1){
              width: 5%;
              text-align: left;
            }
            &:nth-child(7){
              justify-content: center;
              display: flex;
              align-items: center;
            }
            .review{
              cursor: default;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 60%;
              height: 30px;
              background: #F7562C;
              border-radius: 6px;
              line-height: 15px;
              color: #fff;
              font-size: 14px;
            }

          }


        }
      }

      .order-tracking{
        margin-bottom: 20px;
        >h4{
          color: $main-color;
          font-size: 18px;
          margin-bottom: 20px;
        }
        .logistics-info{
          .item-info{
            color: #757575;
            border-bottom: 1px solid #F0F0F0;
            display: flex;
            align-items: center;
            height: 40px;
            .time{
              margin: 0 30px 0 10px;
            }

            >img{
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: red;
            }

          }

          .expand-more{
            text-align: center;
            line-height: 40px;
            color: $main-color;
            cursor: pointer;
            moz-user-select: -moz-none;
            -moz-user-select: none;
            -o-user-select:none;
            -khtml-user-select:none;
            -webkit-user-select:none;
            -ms-user-select:none;
            user-select:none;

          }
        }
      }
    }

    .confirm-info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      >div {
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
          color: #333333;
        }
      }

    }

    .count{
      text-align: right;
    }


  }

}

</style>