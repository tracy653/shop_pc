<comment>
  /* # 组件注释
  * 模块描述： payment
  */
</comment>
<template>
  <div class="payment-wrapper">
    <div class="content">
      <div class="payment-first" style="display: none">
        <div class="time-line">
          <el-timeline>
            <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    hide-timestamp="true"
                    :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
        <div class="main" >
          <div class="address-box">
            <p>更多地址</p>
            <ul>
              <li class="active">
                <div class="top">
                  <h2>
                    <span>Malkupp</span>
                    <p>+66 23 222 222</p>
                    <p>Thailand</p>
                  </h2>
                  <em>默认地址</em>
                </div>
                <div class="bottom">
                  <p>321 ซอย วังหลัง แขวงศิริราช เขตบางกอกน้อย กรุงเทพมหานคร 10700 321 ซอย วังหลัง Siri Rat, Bangkok Noi, Bangkok 10700, Thailand</p>
                </div>
              </li>
              <li>
                <div class="top">
                  <h2>
                    <span>Malkupp</span>
                    <p>+66 23 222 222</p>
                    <p>Thailand</p>
                  </h2>
                  <em>默认地址</em>
                </div>
                <div class="bottom">
                  <p>321 ซอย วังหลัง แขวงศิริราช เขตบางกอกน้อย กรุงเทพมหานคร 10700 321 ซอย วังหลัง Siri Rat, Bangkok Noi, Bangkok 10700, Thailand</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="goods-box">
            <ul class="goods-item">
              <li>
                <div class="left">
                  <div class="goods-img">
                    <img src="" alt="">
                  </div>
                  <div class="goods-info">
                    <h2>NIVEA 奶油尼维亚奶油浓缩配方皮肤柔软、保湿和光滑 NIVEA 奶油....</h2>
                    <p>$121.98</p>
                  </div>
                </div>
                <div class="right">
                  <p class="goods-num">1件</p>
                  <p class="capacity">126ml</p>
                  <div class="delivery-method">
                    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                      <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value" />
                    </el-select>
                  </div>
                  <span class="del-goods">删除此件</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="delivery-box">
            <div class="top">
              <ul>
                <li>
                  <span>使用折扣券</span>
                  <el-input v-model="input2" placeholder="输入折扣券码">
                    <template #append>验证有效性</template>
                  </el-input>
                </li>
                <li>
                  <span>使用现金抵用券</span>
                  <el-input v-model="input2" placeholder="输入优惠券码 现金券码">
                    <template #append>验证有效性</template>
                  </el-input>
                </li>
              </ul>
            </div>
            <div class="bottom">
              <ul  class="goods-detail">
                <li>
                  <span>小计</span>
                  <div>
                    <em>$2323.23</em>
                    <p>$2323.23(已使用8折 折扣券)</p>
                  </div>
                </li>
                <li>
                  <span>运费</span>
                  <div>
                    <p>$0.00</p>
                  </div>
                </li>
                <li>
                  <span>税费</span>
                  <div>
                    <p>$0.00</p>
                  </div>
                </li>
                <li>
                  <span>优惠券</span>
                  <div>
                    <p>$0.00</p>
                  </div>
                </li>
              </ul>
              <div class="goods-total">
                <span>数量：3件</span>
                <span>支付总计：$223.23</span>
              </div>
              <div class="extra-info">
                <p>额外备注的信息</p>
                <el-input
                        v-model="textarea"
                        maxlength="300"
                        placeholder="给店家备注的信息"
                        show-word-limit
                        rows="5"
                        type="textarea" />
              </div>
            </div>
          </div>
          <div class="paying-box">
            <div class="pay-way">
              <p>选择支付方式</p>
              <el-radio-group v-model="radio1" class="pay-radio">
                <el-radio label="1" size="large">
                  <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
                  <p>USDT-TRC20</p>
                </el-radio>
                <el-radio label="2" size="large">
                  <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
                  <p>USDT-TRC20</p>
                </el-radio>
                <el-radio label="3" size="large">
                  <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
                  <p>USDT-TRC20</p>
                </el-radio>
                <el-radio label="3" size="large">
                  <p>钱包余额 <span>$595.70</span></p>
                </el-radio>

              </el-radio-group>
            </div>
            <div class="pay-id">
              <p>交易ID*</p>
              <input type="text" placeholder="输入交易ID码 必填">
            </div>
            <div class="pay-img">
              <p>转账成功图片</p>
              <div class="pay-upload">
                <div class="img">
                  <el-upload
                          class="avatar-uploader"
                          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                  </el-upload>
                </div>
                <div class="text">
                  <p>文件大小：最大4MB</p>
                  <p>支持的格式：.JPG; .png; .BMP</p>
                  <span>选择图像</span>
                </div>
              </div>
            </div>
            <p class="pay-terms">
              <el-checkbox v-model="checked2">同意我们的条款和服务</el-checkbox>
            </p>
            <p class="pay-btn">确认支付 $721.20</p>
          </div>
          <div class="go-back">
            <i class="iconfont icon-jiantou_xiangzuo"></i>
            <span>回到商户</span>
          </div>
        </div>
      </div>
      <div class="payment-done">
        <div class="pay-state">
          <div>
            <i class="iconfont icon-star success"></i>
            <h2>感谢您的订单</h2>
          </div>
          <p>以下摘要 已同步发送到您 <span>1234567890@qq.com</span> 的邮箱中以备查阅</p>
        </div>
        <div class="pay-info">
          <ul class="goods-detail">
            <li>
              <h2>指令码</h2>
              <p>202323232323</p>
            </li>
            <li>
              <h2>订单日期</h2>
              <p>2022-11-19 23:55:21</p>
            </li>
            <li>
              <h2>客户</h2>
              <p>张三</p>
            </li>
            <li>
              <h2>订单状态</h2>
              <p class="active">交付</p>
            </li>
            <li>
              <h2>电子邮件</h2>
              <p>cury369@163.com</p>
            </li>
            <li>
              <h2>订单总额</h2>
              <p class="active">$232.20</p>
            </li>
            <li>
              <h2>支付方式</h2>
              <p>钱包</p>
            </li>
            <li>
              <h2>送货方式</h2>
              <p>平价运费</p>
            </li>
            <li>
              <h2>送货地址</h2>
              <p>ahsdla, Berat, 12812, Albania</p>
            </li>
            <li>
              <h2>附加信息</h2>
              <p>无</p>
            </li>
          </ul>
        </div>
        <div class="goods-view">
          <h2>订单ID: 20221119-23550240</h2>
          <ul class="goods-item">
            <li>
              <div class="left">
                <div class="goods-img">
                  <img src="" alt="">
                </div>
                <div class="goods-info">
                  <h2>NIVEA 奶油尼维亚奶油浓缩配方皮肤柔软、保湿和光滑 NIVEA 奶油....</h2>
                </div>
              </div>
              <div class="right">
                <p class="goods-num">1件</p>
                <p class="capacity">126ml</p>
                <p class="price">$232.23</p>
              </div>
            </li>
            <li>
              <div class="left">
                <div class="goods-img">
                  <img src="" alt="">
                </div>
                <div class="goods-info">
                  <h2>NIVEA 奶油尼维亚奶油浓缩配方皮肤柔软、保湿和光滑 NIVEA 奶油....</h2>
                </div>
              </div>
              <div class="right">
                <p class="goods-num">1件</p>
                <p class="capacity">126ml</p>
                <p class="price">$232.23</p>
              </div>
            </li>
            <li>
              <div class="left">
                <div class="goods-img">
                  <img src="" alt="">
                </div>
                <div class="goods-info">
                  <h2>NIVEA 奶油尼维亚奶油浓缩配方皮肤柔软、保湿和光滑 NIVEA 奶油....</h2>
                </div>
              </div>
              <div class="right">
                <p class="goods-num">1件</p>
                <p class="capacity">126ml</p>
                <p class="price">$232.23</p>
              </div>
            </li>
          </ul>
          <ul class="goods-detail">
            <li>
              <span>小计</span>
              <div>
                <p>$2323.23(已使用8折 折扣券)</p>
              </div>
            </li>
            <li>
              <span>运费</span>
              <div>
                <p>$0.00</p>
              </div>
            </li>
            <li>
              <span>税费</span>
              <div>
                <p>$0.00</p>
              </div>
            </li>
            <li>
              <span>优惠券</span>
              <div>
                <p>$0.00</p>
              </div>
            </li>
          </ul>
          <div class="goods-total">
            <span>数量：3件</span>
            <span>支付总计：$223.23</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'payment',
    data() {
      return {
        activities:[
          {
            content: '确认地址',
            timestamp: '2018-04-15',
          },
          {
            content: '确认货品',
            timestamp: '2018-04-13',
          },
          {
            content: '交付信息',
            timestamp: '2018-04-11',
          },
          {
            content: '付款',
            timestamp: '2018-04-11',
          },
        ]
      }
    },
    components: {},
    watch: {},
    methods: {},
    computed: {},
    created() {
    },
    mounted() {
    },
  }
</script>

<style scoped lang="scss">
.payment-wrapper{
  width:1200px;
  margin:30px auto 70px;
  min-height: 500px;
  background: #fff;
  border-radius: 14px;
  color:#333;
  .content{
    display: flex;
    .payment-first{
      padding:30px 50px;
    }

  }
  .time-line{
    width:160px;

  }
  .main{
    flex:1;
    .address-box{
      margin-bottom: 30px;
      >p{
        color:$main-color;
        text-align: right;
        margin-bottom: 10px;
        &:hover{
          text-decoration: underline;
          cursor: pointer;
        }
      }
      >ul{
        flex-wrap: wrap;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap:30px;
        grid-row-gap:20px;
        li{
          flex:1;
          min-height: 95px;
          max-height: 120px;
          background: #FFFFFF;
          border: 1px solid #E0E0E0;
          border-radius: 7px;
          padding:20px 16px 15px;
          color:#333;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          &.active{
            &:after{
              content: '';
              position: absolute;
              bottom:0;
              left:0;
              right:0;
              width:100%;
              height:4px;
              background: url("./img/address_check.png") no-repeat;
              background-size: 100% 100%;
            }
          }
          .top{
            display: flex;
            margin-bottom: 10px;
            align-items: center;
            justify-content: space-between;
            h2{
              display: flex;
              font-size: 16px;
              span{
                color:$main-color;
              }
              p{
                margin-left: 20px;
              }
            }
            em{
              font-size:14px;
              color:$main-color;
              text-align: right;
            }
          }
          .bottom{
            p{
              font-size: 14px;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
            }
          }
        }
      }
    }

    .goods-box{
      margin-bottom: 30px;

    }

    .delivery-box{
      >.top{
        margin-bottom: 20px;
        ul{
          display: flex;
          li{
            flex:1;
            span{
              font-size: 14px;
              line-height: 20px;
            }
            :deep(.el-input){
              height: 40px;
              margin-top: 5px;
              .el-input-group__append{
                background:$main-color;
                color:#fff;
                font-size: 16px;
                cursor: pointer;
                min-width: 130px;
                max-width: 170px;
                box-shadow: none;
                opacity: 0.92;
                &:hover{
                  opacity: 1;
                }
              }
            }
            &:first-child{
              margin-right: 70px;
            }
          }
        }
      }
      >.bottom{
        margin-bottom: 30px;


        .extra-info{
          p{
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 15px;
          }
        }
      }

    }

    .paying-box{
      margin-top: 20px;
      .pay-way{
        margin-bottom: 20px;
        p{
          font-size: 14px;
          line-height: 20px;
        }
        .pay-radio{
          margin-top: 20px;
          :deep(.el-radio){

            .el-radio__label{
              display: flex;
              align-items: center;
            }
            p{
              span{
                color:$main-color;
              }
            }
            img{
              width:36px;
              height:36px;
              margin-right: 10px;
              border:1px red solid;
              border-radius: 50%;
            }
          }
        }
      }
      .pay-id{
        margin-bottom: 20px;
        p{
          line-height: 20px;
          margin-bottom: 5px;
        }
        input{
          width:430px;
          height: 35px;
          line-height: 35px;
          color:#333;
          font-size: 14px;
          border-bottom:1px #F0F0F0 solid;

        }
      }
      .pay-img{
        margin-bottom: 40px;
        >p{
          line-height: 20px;
          margin-bottom: 15px;
        }
        .pay-upload{
          display: flex;
          .img{
            width: 128px;
            height: 128px;
            left: 580px;
            top: 1398px;
            border: 1px solid #F2F2F2;
            border-radius: 14px;
            margin-right: 20px;
          }
          .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            p{
              font-size: 14px;
              line-height: 20px;
              color: #A3A3A3;
            }
            span{
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              line-height: 20px;
              width: 100px;
              padding:0 10px;
              height: 30px;
              background: #FFFFFF;
              border: 1px solid #E0E0E0;
              border-radius: 6px;
              margin:15px auto 0;
              &:hover{
                cursor: pointer;
                background: $main-color;
                color:#fff;
              }
            }
          }
        }

      }
      .pay-btn{
        width: 301px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background: #F7562C;
        border-radius: 7px;
        font-size: 16px;
        color:#fff;
        margin-top: 50px;
        opacity: 0.92;
        &:hover{
          cursor: pointer;
          opacity: 1;
        }
      }
    }

    .go-back{
      margin-top: 30px;
      color:$main-color;
      .iconfont{
        margin-right: 5px;
        font-weight: 700;
      }
      &:hover{
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .payment-done{
    /*width:100%;*/
    flex:1;
    border:1px red solid;
    padding:84px 170px 50px;
    .pay-state{
      >div{
        font-size: 34px;
        line-height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;
        .iconfont{
          margin-right: 15px;
          font-size: 30px;
        }
        .success{
          color:#0ABB75;
        }
        .error{
          color:red;
        }
      }
      >p{
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        span{
          color:$main-color;
        }
      }
    }
    .pay-info{
      margin-top: 50px;
      ul.goods-detail{
        margin-bottom: 30px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 60px;
        grid-row-gap:0px;
        li{
          flex:1;
          border-bottom:1px #F0F0F0 solid;
          padding:20px 0 5px;
          &:nth-last-child(-n+2){
            width:100%;
            grid-column: 1/-1;
          }
          /*border:1px red solid;*/
          span{
            font-size: 14px;
            line-height: 20px;
          }
          p{
            margin-top: 5px;
            line-height: 20px;
            &.active{
              color:$main-color;
            }
          }
        }
      }
    }
    .goods-view{

      >h2{
        font-size: 20px;
        line-height: 28px;
        color:$main-color;
        text-align: center;
        margin:50px 0 40px;
      }
      ul.goods-item{
        margin-bottom: 50px;
        li{
          border-bottom: 1px #F0F0F0 solid;
          .goods-info{
            /*margin-right: 150px;*/
          }
          .goods-num,.capacity,.price{
            flex:1;
            /*border:1px red solid;*/
            text-align: center;
            margin-right: 20px;
          }
          .price{
            color:$main-color;
          }
        }
      }
    }
  }
  ul.goods-detail{
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 70px;
    grid-row-gap:0px;
    li{
      flex:1;
      border-bottom:1px #F0F0F0 solid;
      padding:15px 0;
      /*border:1px red solid;*/
      span{
        font-size: 14px;
        line-height: 20px;
      }
      >div{
        display: flex;
        align-items: center;
        margin-top: 5px;
        line-height: 20px;
        em{
          text-decoration-line: line-through;
          color: #A3A3A3;
          margin-right: 20px;
        }
        p{
          color:$main-color;
        }
      }
    }
  }

  ul.goods-item{
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      color:#333;
      /*margin-bottom: 20px;*/
      padding:10px 0;
      .left,.right{
        display: flex;
      }
      .goods-img{
        margin-right: 27px;
        width: 100px;
        height: 100px;
        border: 1px solid #E0E0E0;
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width:100%;
        }
      }
      .goods-info{
        width:350px;
        /*margin-right: 30px;*/
        h2{
          font-size: 14px;
          line-height: 20px;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-top: 15px;
        }
        p{
          color:$main-color;
          line-height: 20px;
          margin-top: 5px;
        }
      }
      .goods-num,.capacity{
        flex:1;
      }
      .delivery-method{
        width:125px;
        margin-right: 20px;

      }
      .del-goods{
        width: 124px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        border-radius: 7px;
        color:$main-color;
        font-size:16px;
      }
    }
  }

  .goods-total{
    text-align: right;
    margin-bottom: 30px;
    color:$main-color;
    font-size: 16px;
    line-height: 22px;
    span{
      margin-left: 30px;
    }
  }
}
</style>
