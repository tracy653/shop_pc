<comment>
/* # 组件注释
* 模块描述： 我的面板-我的钱包
*/
</comment>
<template>
<div class="my-wallet">
  <h1>我的钱包</h1>
  <div class="amount-wrap">
    <div class="amount-left">
      <div class="title">
        <img src="../img/walletWhite.png" alt="">
        <span>钱包余额</span>
      </div>

      <div class="money">
        <span v-if="showMoney">$1212.12</span>
        <span v-else>$******.**</span>
        <img src="../img/showEye.png" alt="" @click="switchShow()" v-if="showMoney">
        <img src="../img/hideEye.png" alt="" @click="switchShow()" v-else>
      </div>

    </div>
    <div class="amount-right">
      <ul>
        <li @click="showRechargePopup=true">
          <img src="../img/amount1.png" alt="">
          <span>充值钱包</span>
        </li>
        <li @click="showWithdrawPopup = true">
          <img src="../img/amount2.png" alt="">
          <span>余额提现</span>
        </li>
        <li>
          <img src="../img/amount3.png" alt="">
          <span>账单明细</span>
        </li>
      </ul>

      <ul>
        <li>
          <img src="../img/amount4.png" alt="">
          <span>提取日志</span>
        </li>
        <li>
          <img src="../img/amount5.png" alt="">
          <span>充值日志</span>
        </li>
        <li>
          <img src="../img/amount6.png" alt="">
          <span>绑定USDT</span>
        </li>
      </ul>
    </div>
  </div>


  <div class="account-records">
    <h2>最近交易记录</h2>
    <ul>
      <template v-if="true">
        <li>
          <p>时间</p>
          <p>方向</p>
          <p>数量</p>
          <p>金额</p>
          <p>支付方式</p>
          <p>状态</p>
        </li>
        <li v-for="i in 4" :key="i">
          <div>2012-45-45 25:12:15</div>
          <div>充值</div>
          <div>+100.00</div>
          <div class="mod-highlight">+$12.10</div>
          <div>USDT-ERC20</div>
          <div class="">
            <span class="state">批准</span>
          </div>
        </li>
      </template>
      <template v-else>
        <noData class="no-data"></noData>
      </template>
    </ul>

  </div>
<!--  充值弹框-->
  <publicPopup v-if="showRechargePopup">
    <div class="mod-popup">
      <div class="mod-popup-title">充值</div>
      <div class="mod-popup-content">
        <ul class="mod-popup-ul">
          <li>
            <div class="mod-li-item">
              <span>支付主网*</span>
              <div class="mod-select-mainnet">
                <span>USDT-TRC20</span>
                <i class="iconfont icon-xiajiantou"></i>
              </div>
            </div>
            <div class="mod-li-item">
              <span>金额*</span>
              <input type="text" placeholder="请输入充值金额">
            </div>
            <div class="mod-li-item">
              <span>汇率</span>
              <p class="mod-p">当前不可用</p>
            </div>
            <div class="mod-li-item">
              <span>美元</span>
              <p class="mod-p">当前不可用</p>
            </div>
          </li>
          <li>
            <div class="mod-li-item">
              <span>地址*</span>
              <p>Tskdfjksdfjksdjkfjsdsffsd</p>
            </div>
            <div class="mod-li-upload">
              <div class="mod-upload-title">转账成功图片</div>
              <div class="mod-upload-area">
                <div class="mod-upload-img">
                  <img src="../img/uploadLogo.png" alt="" class="default-img" v-if="true">
                  <img src="" alt="" v-else>
                </div>
                <div class="mod-upload-hint">
                  <p>文件大小: 最大4MB</p>
                  <p>支持的格式: .JPG; .PNG; .BMP</p>
                  <div class="mod-choose-img">选择图像</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="mod-popup-btn">
          <div class="mod-popup-submit">提交</div>
          <div @click="showRechargePopup = false">取消</div>
        </div>
      </div>
    </div>
  </publicPopup>

  <!--  提现弹框-->
  <publicPopup v-if="showWithdrawPopup">
    <div class="mod-popup">
      <div class="mod-popup-title">提款</div>
      <div class="mod-popup-content">
        <ul class="mod-popup-ul">
          <li>
            <div class="mod-li-item">
              <span>提款主网*</span>
              <div class="mod-select-mainnet">
                <span>USDT-TRC20</span>
                <i class="iconfont icon-xiajiantou"></i>
              </div>
            </div>
            <div class="mod-li-item">
              <span>提款金额*</span>
              <input type="text" placeholder="请输入充值金额">
            </div>
          </li>
          <li>
            <div class="mod-li-item">
              <span>提款地址*</span>
              <p>Tskdfjksdfjksdjkfjsdsffsd</p>
            </div>
          </li>
        </ul>
        <div class="mod-popup-btn">
          <div class="mod-popup-submit">提交</div>
          <div @click="showWithdrawPopup = false">取消</div>
        </div>
      </div>
    </div>
  </publicPopup>
</div>
</template>

<script>
import noData from "../../../components/noData/noData";
import publicPopup from "../../../components/PublicPopup/publicPopup";
export default {
  name: "myWallet",
  data(){
    return{
      showMoney:true,
      showRechargePopup:false,
      showWithdrawPopup:false,
    }
  },
  methods:{
    switchShow(){
      this.showMoney = !this.showMoney
    }
  },
  components:{
    noData,
    publicPopup
  }
}
</script>

<style scoped lang="scss">
.my-wallet{
  padding: 30px;

  h1{
    font-size: 20px;
    color: #333333;
  }

  .amount-wrap{
    margin: 20px 0 40px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .amount-left{
      padding: 21px 0;
      height: 100%;
      width: 42%;
      border-radius: 14px;
      font-size: 16px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      background-image: url("../img/amountBg.png");
      background-size: cover;
      >div{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .title{

        img{
          width: 22px;
          height: 21px;
          margin-right: 8px;
        }
      }
      .money{
        height: 30px;
        img{
          width: 18.8px;
          height: 13.3px;
          margin-left: 8px;
          &:nth-child(2){
            width: 18.8px;
            height: 13.3px;
          }
        }
      }

    }
    .amount-right{
      height: 100%;
      width: 55%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      ul{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >li{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 31%;
          height: 50px;
          padding: 0 20px 0 5px;
          background: #FFFFFF;
          border: 1.4px solid #F94A2F;
          border-radius: 14px;
          font-size: 14px;
          color: $main-color;
          line-height: 16px;
          cursor: default;
          img{
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }

  .account-records {
    >h2 {
      font-size: 18px;
      color: $main-color;
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
          width: 16%;
          text-align: center;
        }
        >div{
          line-height: 15px;
          color: #757575;
          font-size: 12px;
          width: 16%;
          text-align: center;
          &:nth-child(6){
            justify-content: center;
            display: flex;
            align-items: center;
          }
          .state{
            cursor: default;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40%;
            height: 30px;
            border-radius: 6px;
            line-height: 15px;
            color: #fff;
            font-size: 14px;
            border: 1px solid #0ABB75;
            color: #0ABB75;
          }

        }


      }

      .no-data{
        margin-top: 80px;
      }
    }
  }
}

</style>