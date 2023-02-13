<comment>
/* # 组件注释
* 模块描述： 注册开店
*/
</comment>
<template>
  <div class="register-shop">
    <div class="fill-information">
      <h1>注册开店</h1>
      <!-- 个人信息-->
      <h2>个人信息</h2>
      <div class="item">
        <h3>用户名</h3>
        <input type="text" value="" placeholder="您的真实姓名">
      </div>
      <div class="item item-email">
        <h3>电子邮件*</h3>
        <div class="email">
          <input type="text" value="12323@qq.com">
<!--          <span>修改</span>-->
        </div>
      </div>
      <div class="item">
        <h3>商户号密码</h3>
        <input type="text" value="" placeholder="设置卖家登录密码">
      </div>
      <div class="item">
        <h3>确认密码</h3>
        <input type="text" value="" placeholder="确认卖家登录密码">
      </div>

      <!--店铺信息-->
      <h2>店铺信息</h2>
      <div class="item">
        <h3>店名</h3>
        <input type="text" value="" placeholder="设置店铺名称">
      </div>
      <div class="item">
        <h3>店名</h3>
        <input type="text" value="" placeholder="店铺地址">
      </div>
      <div class="item item-sex">
        <h3>经营类别</h3>
        <div class="email">
          <div>女装与时尚</div>
          <i class="iconfont icon-xiajiantou"></i>
        </div>
      </div>
      <div class="item">
        <h3>邀请码</h3>
        <input type="text" value="" placeholder="输入邀请人码 可选">
      </div>

      <div class="confirm-wrap">
        <div class="register-btn">提交注册</div>
        <div class="login-btn">登陆卖家端</div>
      </div>

    </div>

    <div class="document-submission">
      <div class="item">
        <h3>身份证或ID号</h3>
        <input type="text" value="" placeholder="身份证或ID号">
      </div>

      <ul class="id-certificate">
        <li>
          <h4>身份证正面</h4>
          <div class="id-photo">
            <img src="../../assets/img/uploadPhoto.png" alt="">
            <div class="select-certificate">选择图像</div>
          </div>
        </li>

        <li>
          <h4>身份证正面</h4>
          <div class="id-photo">
            <img src="../../assets/img/uploadPhoto.png" alt="">
            <div class="select-certificate">选择图像</div>
          </div>
        </li>
      </ul>
      <p class="hint">文件大小: 最大4MB 支持的格式: .JPG; .PNG; .BMP</p>

      <div class="avatar-shop">
        <h5>设置店铺头像</h5>
        <div class="upload">
          <img src="" alt="">
          <div class="select-img">选择图像</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "registerShop",

}
</script>

<style scoped lang="scss">
.register-shop {
  min-height: 574px;
  background: #FFFFFF;
  border-radius: 14px;
  padding: 30px 40px 50px;
  display: flex;
  justify-content: space-between;

  > div {
    width: 46%;
    font-size: 14px;
    color: #333333;
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

    }
  }

  .fill-information {
    > h1 {
      color: #333333;
      font-size: 20px;
    }

    > h2 {
      font-size: 18px;
      color: #F7562C;
      margin: 20px 0;
    }
    .confirm-wrap{
      margin-top: 50px;
      display: flex;
      align-items: center;
      //justify-content: space-between;
      font-size: 16px;
      cursor: default;
      moz-user-select: -moz-none;
      -moz-user-select: none;
      -o-user-select:none;
      -khtml-user-select:none;
      -webkit-user-select:none;
      -ms-user-select:none;
      user-select:none;

      .register-btn{
        width: 301px;
        height: 50px;
        background: #F7562C;
        border-radius: 7px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        margin-right: 20px;
      }
      .login-btn{
        width: 177px;
        height: 50px;
        background: #FFFFFF;
        border: 1px solid #F7562C;
        border-radius: 7px;
        line-height: 50px;
        text-align: center;
        color: $main-color;

      }
    }
  }

  .document-submission{
    padding-top: 78px;

    .id-certificate{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      font-size: 14px;
      color: #333333;
      >li{
        .id-photo{
          width: 240px;
          height: 150px;
          background: #FFFFFF;
          border: 1px solid #E0E0E0;
          border-radius: 7px;
          margin: 15px 0 10px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          >img{
            width: 40px;
            height: 36px;
          }
          .select-certificate{
            height: 30px;
            text-align: center;
            line-height: 30px;
            padding: 0 10px;
            background: #FFFFFF;
            border: 1px solid #E0E0E0;
            border-radius: 6px;
            margin-top: 17px;
            font-size: 14px;
            cursor: default;
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
    .hint{
      font-size: 14px;
      color: #A3A3A3;
      text-align: center;
    }

    .avatar-shop{
      font-size: 14px;
      color: #333333;
      margin-top: 64px;
      .upload{
        margin-top: 14px;
        margin-left: 60px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 130px;
        >img{
          width: 128px;
          height: 128px;
          border-radius: 50%;
        }
        .select-img{
          padding: 5px 8px;
          margin-top: 20px;
          line-height: 16px;
          width: 100px;
          min-height: 30px;
          background: #FFFFFF;
          border: 1px solid #E0E0E0;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: default;
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
}
</style>