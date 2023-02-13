<template>
  <div class="user-info">
    <myAccount></myAccount>
    <div class="content-details">
      <h2>用户资料</h2>
      <div class="personal-data">
        <div class="data-left">
          <div class="item">
            <h3>用户名</h3>
            <input type="text" value="usder3443443">
          </div>
          <div class="item item-email">
              <h3>电子邮件</h3>
              <div class="email">
                <input type="text" value="12323@qq.com">
                <span>修改</span>
              </div>
          </div>

          <div class="item item-sex">
            <h3>性别</h3>
            <div class="email">
              <div>男</div>
              <i class="iconfont icon-xiajiantou"></i>
            </div>
          </div>
        </div>
        <div class="data-right">
          <div class="item">
            <h3>收货姓名</h3>
            <input type="text" value="" placeholder="设置一个用于收货的姓名">
          </div>
          <div class="item">
            <h3>电话号码</h3>
            <input type="text" value="" placeholder="添加电话号码">
          </div>
          <div class="item">
            <h3>出生日期</h3>
            <span>1990-09-08</span>
          </div>
        </div>
      </div>
      <div class="set-avatar">
        <h4>设置头像</h4>
        <div class="upload-area">
          <img src="" alt="">
          <div class="hint">
            <p>文件大小: 最大4M</p>
            <p>支持的格式: JPG；PNG；BMP</p>
          </div>
        </div>
        <div class="choose-btn">选择图像</div>
      </div>
      <div class="mod-submit-btn">提交修改</div>
    </div>
  </div>
</template>

<script>
import myAccount from "./components/myAccount";

export default {
  name: "userInfo",
  components: {
    myAccount
  }
}
</script>

<style scoped lang="scss">
.user-info {
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

      div {
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
        .item-email,.item-sex{
          .email{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
              color: $main-color;
              cursor: pointer;
            }
          }

        }
      }

      .data-left {

      }

    }

    .set-avatar{
      font-size: 14px;
      color: #333333;
      width: 50%;
      .upload-area{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        padding-left: 30px;
        img{
          width: 128px;
          height: 128px;
          //border: 1px solid #F2F2F2;
          border-radius: 50%;

        }
        .hint{
          color: #A3A3A3;
          line-height: 20px;
        }
      }
      .choose-btn{
        width: 100px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        border-radius: 6px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        margin: 25px 0 0 40px;
        cursor: pointer;
      }

    }
  }
}

</style>