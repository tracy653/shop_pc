<comment>
/* # 组件注释
* 模块描述： 我的面板-地址管理
*/
</comment>
<template>
  <div class="address-manage">
    <myAccount></myAccount>
    <div class="content-details">
      <h2>地址管理</h2>
      <div class="personal-data">
        <div class="data-left">
          <div class="item">
            <h3>收货人</h3>
            <input type="text" value="" placeholder="设置收货人姓名">
          </div>
          <div class="item item-email">
            <h3>国家</h3>
            <div class="email">
              <input type="text" value="" placeholder="设置收货国家">
            </div>
          </div>

          <div class="item item-sex">
            <h3>省、区、邮政编码*</h3>
            <div class="delivery-address">
              <div>省<i class="iconfont icon-xiajiantou"></i></div>
              <div>区<i class="iconfont icon-xiajiantou"></i></div>
              <div>邮政编码<i class="iconfont icon-xiajiantou"></i></div>
            </div>
          </div>
        </div>
        <div class="data-right">
          <div class="item address-list">
            <div class="my-btn">我的地址集</div>
          </div>
          <div class="item">
            <h3>收货电话</h3>
            <input type="text" value="" placeholder="设置一个用于收货的电话">
          </div>
          <div class="item">
            <h3>街道、门牌</h3>
            <input type="text" value="" placeholder="填写街道、门牌号、收货点等">
          </div>
        </div>
      </div>

      <div class="default-address">
        <p class="mod-choose-circle mod-selected-circle"></p>
        设为默认地址
      </div>
      <div class="mod-submit-btn set-btn">添加到地址集</div>

      <div class="address-list">
        <h3>我的地址集</h3>
        <ul class="item-wrap">
          <li>
            <div class="item">
              <h4>收货人</h4>
              <div class="item-set">
                <p>makdfjdkf</p>
                <div class="default-address">默认地址</div>
              </div>
            </div>

            <div class="item">
              <h4>邮政编码</h4>
              <p>107100</p>
            </div>

            <div class="item">
              <h4>国家</h4>
              <p>Thindfdf</p>
            </div>

            <div class="item">
              <h4>收货电话</h4>
              <p>+454545454</p>
            </div>

            <div class="item">
              <h4>详细地址</h4>
              <p>+321 ซอย วังหลัง แขวงศิริราช เขตบางกอกน้อย กรุงเทพมหานคร
                10700 321 ซอย วังหลัง Siri Rat, Bangkok Noi, Bangkok 10700, Thailand</p>
            </div>

          </li>
          <li>
            <div class="item">
              <h4>收货人</h4>
              <div class="item-set">
                <p>makdfjdkf</p>
<!--                <div class="default-address">默认地址</div>-->
                <div class="set-address">
                  <i class="iconfont icon-bianji" @click="showSetAddress=!showSetAddress"></i>
                  <div class="set-pup" v-if="showSetAddress">
                    <span>设为默认</span>
                    <p>删除这个地址</p>
                    <div class="triangle"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <h4>邮政编码</h4>
              <p>107100</p>
            </div>

            <div class="item">
              <h4>国家</h4>
              <p>Thindfdf</p>
            </div>

            <div class="item">
              <h4>收货电话</h4>
              <p>+454545454</p>
            </div>

            <div class="item">
              <h4>详细地址</h4>
              <p>+321 ซอย วังหลัง แขวงศิริราช เขตบางกอกน้อย กรุงเทพมหานคร
                10700 321 ซอย วังหลัง Siri Rat, Bangkok Noi, Bangkok 10700, Thailand</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import myAccount from "./components/myAccount";

export default {
  name: "addressManage",
  data() {
    return {
      showSetAddress:false
    }
  },
  components: {
    myAccount,
  }
}
</script>

<style scoped lang="scss">
.address-manage {
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

    .default-address {
      color: #A3A3A3;
      font-size: 14px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .set-btn{
      margin-top: 50px;
    }

    .address-list{
      margin-top: 30px;
      >h3{
        color: #333333;
        font-size: 20px;
      }
      ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
        li{
          width: 420px;
          min-height: 200px;
          background: #FFFFFF;
          border: 1.4px solid #F7562C;
          border-radius: 14px;
          margin-bottom: 20px;
          padding: 20px;
          font-size: 14px;
          color: #A3A3A3;
          .item{
            display: flex;
            line-height: 18px;
            margin-bottom: 10px;
            >h4{
              width: 20%;
              padding-right: 10px;
            }
            >p{
              flex: 1;
              color: #333333;

            }
            .item-set{
              display: flex;
              flex: 1;
              justify-content: space-between;
              color: #333333;
              .default-address{
                color: $main-color;
              }
              .set-address{
                position: relative;
                >i{
                  color: $main-color;
                  font-size: 30px;
                }
                .set-pup{
                  position: absolute;
                  top: 27px;
                  right: -7px;
                  width: 136px;
                  height: 104px;
                  background: #FFFFFF;
                  border: 1px solid #E0E0E0;
                  border-radius: 14px;
                  padding: 20px;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  color: #757575;
                  moz-user-select: -moz-none;
                  -moz-user-select: none;
                  -o-user-select:none;
                  -khtml-user-select:none;
                  -webkit-user-select:none;
                  -ms-user-select:none;
                  user-select:none;

                  >p{
                    color: $main-color;
                    cursor: pointer;
                  }
                  .triangle{
                    position: absolute;
                    top:-20px;
                    right:13px;
                    width:0px;
                    height:0px;
                    border:10px solid transparent;
                    border-bottom:10px solid #E0E0E0;
                    margin-left:10px;
                    pointer-events: none;
                  }
                  .triangle:after{
                    content:"";
                    display:block;
                    width:0px;
                    height:0px;
                    border:10px solid transparent;
                    border-bottom:10px solid white;
                    position:relative;
                    top:-9px;
                    left:-10px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

</style>