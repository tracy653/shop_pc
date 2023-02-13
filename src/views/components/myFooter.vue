<template>
  <div class="my-footer">
    <div class="introduction">
      <div class="left">
        <div>
          <h1>客户服务</h1>
          <span class="active">帮助中心</span>
          <span>如何购买</span>
          <span>支付方式</span>
          <span>购物保证</span>
          <span>退货和退款</span>
          <span>申诉专员</span>
        </div>

        <div>
          <h1>关于SHOPEE</h1>
          <span>关于我们</span>
          <span>服务政策</span>
          <span>隐私政策</span>
          <span>媒体联系</span>
          <span>联盟计划条款与条件</span>
        </div>

        <div>
          <h1>我的账户</h1>
          <span>历史订单</span>
          <span>我的收藏</span>
          <span>物流和订单跟踪</span>
          <span>注销</span>
          <span class="mod-highlight" @click="$router.push('/registerShop')">注册我的商店</span>
        </div>
      </div>

      <div class="right">
        <div class="payment-cooperation">
          <h2>支付合作</h2>
          <img src="../home/img/payment.png" alt="" class="payment-img">
          <h2>关注我们</h2>
          <div class="share">
            <img src="../../assets/img/share1.png" alt="" class="following-img">
            <img src="../../assets/img/share2.png" alt="" class="following-img">
            <img src="../../assets/img/share3.png" alt="" class="following-img">
            <img src="../../assets/img/share4.png" alt="" class="following-img">
          </div>
        </div>
        <div class="download">
          <h3>下载App</h3>
          <div>
            <img src="../home/img/appStore.png" alt="">
            <img src="../home/img/googlePlay.png" alt="">
          </div>

        </div>
      </div>

    </div>
    <div class="serial-number">© 2023 Shopee. All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: "myFooter"
}
</script>

<style scoped lang="scss">
.my-footer {
  box-sizing: border-box;
  //position: absolute;
  width: 100%;
  height: 314px;
  left: 0;
  bottom: 0;
  background: #FFFFFF;
  border-top: 2px solid #FD5A32;
  color: #757575;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  .introduction{
    padding: 50px 14% 0;
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left{
      display: flex;
      justify-content: space-between;
      width: 46%;
      padding-right: 20px;
      >div{
        display: flex;
        flex-direction: column;
        h1{
          color: #212121;
          font-size: 14px;
          margin-bottom: 15px;
        }
        span{
          cursor: pointer;
          font-size: 12px;
          line-height: 25px;
        }
        .active{
          color: #F7562C;
          text-decoration: underline;

        }
      }
    }

    .right{
      width: 38%;
      font-size: 14px;
      color: #212121;
      display: flex;
      justify-content: space-between;
      .payment-cooperation{

        .payment-img{
          width: 200px;
          height: 70px;
          margin: 15px 0 20px;
        }
        .share{
         >img{
           width: 16.3px;
           height: auto;
           margin-right: 16px;
         }
        }
        .following-img{
          width: 111px;
          height: 16px;
          margin-top: 19px;
        }
      }

      .download{
        >div{
          margin-top: 15px;
          display: flex;
          >img{
            cursor: pointer;
            width: 80px;
            height: 24px;
            margin-right: 8px;
          }
        }
      }

    }

  }
  .serial-number{
    height: 37px;
    width: 100%;
    border-top: 1px solid #F0F0F0;
    font-size: 12px;
    text-align: center;
    line-height: 37px;
    color: #757575;
  }

}

</style>
