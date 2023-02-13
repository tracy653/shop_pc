<comment>
  /* # 组件注释
  * 模块描述： login
  */
</comment>
<template>
  <div class="login-wrapper">
<!--    <myHead></myHead>-->
    <div class="content">
        <div class="left">
          <img src="./img/login_img.png" alt="">
          <h2>欢迎再次回到Shopee!</h2>
          <p>正品低价保证</p>
        </div>
        <div class="right">
          <div class="role-tab">
            <span>选择角色</span>
            <ul>
              <li class="active">卖家</li>
              <li>买家</li>
            </ul>
          </div>
<!--          <p class="tips">您可使用手机号或邮箱注册</p>-->
          <div class="box">
            <ul class="type-tab">
              <li :class="{'active':typeIndex === index}" v-for="(item,index) in typeTab"
                  :key="index" @click="changeTab(index)">
                <i class="iconfont" :class="item.icon"></i>
                {{item.text}}
              </li>
            </ul>
            <div class="form">
              <div class="item phone" v-if="typeIndex===0">
                <el-input
                        v-model="form.userName"
                        placeholder="输入手机号" clearable>
                  <template #prepend>
                    <el-select v-model="form.flagValue" prefix-icon="Lock"
                              @change="changeSelect"
                               popper-class="login-select">
                      <template #prefix><i class="iconfont icon-Call"></i></template>
                      <el-option-group label="选择国家或地区" >
                        <el-option label="+22" value="2" >
                          <img src="./img/china.png" alt="">
                          <span>+22</span>
                        </el-option>
                        <el-option label="+21" value="1" >
                          <img src="./img/china.png" alt="">
                          <span>+21</span>
                        </el-option>
                        <el-option label="+23" value="3" >
                          <img src="./img/china.png" alt="">
                          <span>+23</span>
                        </el-option>
                      </el-option-group>
                    </el-select>
                  </template>
                </el-input>
              </div>
              <div class="item email"  v-if="typeIndex===1">
                <el-input v-model="form.email" type="text"
                          placeholder="输入邮箱" clearable>
                  <template #prefix><i class="iconfont icon-Message"></i></template>
                </el-input>
              </div>
              <div class="item">
                <el-input v-model="form.passWord" type="password"
                          placeholder="输入密码" show-password clearable >
                  <template #prefix><i class="iconfont icon-password"></i></template>
                </el-input>
              </div>
              <p class="forget">忘记密码?</p>
              <span class="btn">注册</span>
              <p class="tips">
                还没账号？<router-link to="/register">注册</router-link>
              </p>
            </div>
          </div>
        </div>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
  // import myHead from "../components/myHead";
  import myFooter from "../components/myFooter";
  export default {
    name: 'login',
    data() {
      return {
        form:{
          userName:'',
          passWord:'',
          email:'',
          flagValue:'+22',

        },

        typeTab:[
          {text:'phone',icon:'icon-Call'},
          {text:'Email',icon:'icon-Message'},
        ],
        typeIndex:0,

      }
    },
    components: {
      myFooter,
      // myHead
    },
    watch: {},
    methods: {
      changeTab(index){
        this.typeIndex = index;
        this.form.passWord = this.form.userName = this.form.email = '';
      },
      changeSelect(val){
        console.log(val,'国旗');

      }
    },
    computed: {},
    created() {
    },
    mounted() {
    },
  }
</script>

<style scoped lang="scss">
.login-wrapper{
  background:#fbf3f6;
  color:#333;
  min-height:646px;
  .content{
    width:1200px;
    margin:0 auto 56px;
    display:flex;
    justify-content: space-around;
    .left{
      /*margin-right: 170px;*/
      margin-top: 126px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2{
        font-size: 26px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #333333;
        margin-top: 42px;
      }
      p{
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.5px;
        color: #666666;
        margin-top: 10px;
      }

    }
    .right{
      margin-top: 33px;
      .role-tab{
        display: flex;
        align-items: center;
        justify-content: end;
        span{
          margin-right: 10px;
          color:#666666;
          font-size:14px;
        }
        &>ul{
          display: flex;
          border:1px #F7562C solid;
          border-radius: 50px;
          overflow: hidden;
          li{
            min-width:70px;
            height:30px;
            line-height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            color:#F7562C;
            font-size:16px;
            cursor: pointer;
            &.active{
              background: #F7562C;
              color:#fff;
            }
          }
        }
      }
      .box{
        width:400px;
        margin-top: 27px;
        min-height: 500px;
        padding:40px 30px;
        background: #FFFFFF;
        box-shadow: 0px -1px 9px rgba(252, 87, 49, 0.1);
        border-radius: 14px;
        .type-tab{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          li{
            width: 121px;
            height: 42px;
            text-align: center;
            line-height: 42px;
            background: #FFFFFF;
            border: 1.16667px solid #E0E0E0;
            border-radius: 7px;
            color: #858585;
            font-size:19px;
            cursor: pointer;
            .iconfont{
              font-size: 20px;
            }
            &:first-child{
              margin-right: 18px;
            }
            &.active{
              background: #666666;
              color:#fff;
            }
          }
        }
        .form{
          .item{
            margin-bottom: 20px;
            &.phone{
              margin-left: -1px;
              &:first-child{
                :deep(.el-input){
                  .el-input__wrapper{
                    border-left: none;
                    .el-select__icon{
                      color:#333;
                      font-size: 16px;
                    }
                  }
                  .el-input-group__prepend{
                    border-left:1px #b4b4b4 solid;
                    border-radius: 7px;
                    box-shadow: none;
                  }
                  .el-input__inner{
                    color:#333;

                  }
                }

              }
            }


            :deep(.el-input){
              height:56px;
              font-size:16px;
              .el-input__wrapper{
                box-shadow: none;
                border:1px #b4b4b4 solid;
                flex:1;

                &:focus,&.is-focus{
                  border:1px #409eff solid;
                }
              }
              .el-input__wrapper,.el-input-group__prepend{
                background: none;
              }
              .el-select .el-input__wrapper{
                color:#333;
                border-right:none;
                position: relative;
                &:after{
                  content: '';
                  width:0.5px;
                  height:30px;
                  background: #b4b4b4;
                  position: absolute;
                  top:13px;
                  right:0;
                }

              }
              .el-select{
                width:115px;
              }
              .el-icon{
                font-size:20px;
              }
            }
            .pr-icon{
              position: absolute;
              left:20px;
              font-size:20px;
            }

          }
        }
        .code-box{
          :deep(.el-input-group__append){
            width:130px;
            background: #f7562c;
            box-shadow: none;
            color:#fff;
            cursor: pointer;
            font-size: 16px;
            padding: 0;
            opacity: 0.95;
            &:hover{
              opacity: 1;
            }
            span{
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;

            }
          }
        }

        .forget{
          text-align: right;
          color:#FF6A6A;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
        .btn{
          margin-top: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          color:#fff;
          font-size:20px;
          height: 52px;
          background: linear-gradient(180deg, #F6412D 0%, #FE6233 100%);
          border-radius: 7px;
        }
        .tips{
          text-align: center;
          margin-top: 30px;
          span,a{
            color:#F7562C;
            cursor: pointer;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }

      .tips{
        color:#666666;
        font-size:14px;
        text-align: right;

      }
      .agreement{
        color:#666;
        span{
          color:#FF6A6A;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
