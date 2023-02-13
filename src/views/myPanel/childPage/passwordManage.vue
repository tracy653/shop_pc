<comment>
/* # 组件注释
* 模块描述： 我的面板-密码管理
*/
</comment>
<template>
  <div class="password-manage">
    <myAccount></myAccount>
    <div class="content-details">
      <h2>密码管理</h2>
      <div class="personal-data">
        <div class="data-left">
          <!--  首次设置密码        -->
          <template v-if="true">
            <div class="item">
              <h3>新密码</h3>
              <input type="text" value="" placeholder="设置您的密码">
            </div>
            <div class="item item-email">
              <h3>确认密码</h3>
              <div class="email">
                <input type="text" value="" placeholder="确认您的密码">
              </div>
            </div>
          </template>
          <!--  修改密码        -->
          <template v-else>
            <div class="item">
              <h3>旧密码</h3>
              <input type="text" value="" placeholder="输入您的旧密码">
            </div>
            <div class="item item-email">
              <h3>设置新密码</h3>
              <div class="email">
                <input type="text" value="" placeholder="设置一个新的密码">
              </div>
            </div>
            <div class="item item-email">
              <h3>确认新密码</h3>
              <div class="email">
                <input type="text" value="" placeholder="确认新密码">
              </div>
            </div>
          </template>
          <div class="item item-email">
            <h3>验证码*</h3>
            <div class="email">
              <input type="text" value="" placeholder="请输入您的验证码">
              <span>发送验证码</span>
            </div>
          </div>

        </div>
      </div>
      <div class="mod-submit-btn">提交修改</div>
    </div>

    <!--  首次设置密码弹框-->
    <publicPopup v-if="showFirstPwdPopup">
      <div class="mod-popup-hint-wrap">
        <h3>请在设置密码之前，先添加电话号码</h3>
        <div class="mod-set-btn" @click="showFirstPwdPopup=false">前往设置</div>
      </div>
    </publicPopup>
  </div>

</template>

<script>
import myAccount from "./components/myAccount";
import publicPopup from "../../../components/PublicPopup/publicPopup";

export default {
  name: "passwordManage",
  data(){
    return{
      showFirstPwdPopup:true
    }
  },
  components: {
    myAccount,
    publicPopup

  }
}
</script>

<style scoped lang="scss">
.password-manage {
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
        }
        .item-email, .item-sex {
          .email {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
              color: $main-color;
              cursor: pointer;
            }
          }

          .delivery-address {
            width: 100%;
            display: flex;
            //align-items: center;
            > div {
              margin-right: 30px;
              color: #A3A3A3;
              cursor: pointer;
            }
          }

        }

        .address-list {
          border-bottom: none;
          display: flex;
          align-items: flex-end;

          .my-btn {
            width: 180px;
            height: 36px;
            border: 1px solid #F7562C;
            border-radius: 7px;
            font-size: 14px;
            color: $main-color;
            text-align: center;
            line-height: 36px;
            cursor: pointer;
          }
        }
      }
    }

  }

}
</style>