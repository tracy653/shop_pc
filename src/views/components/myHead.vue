<template>
  <div class="my-head-wrap">
    <div class="my-head">
      <div class="head-top">
        <div class="top-left">
          <div class="lang-btn">
           <!-- <img src="" alt="">
            <span>English</span>
            <i class="iconfont icon-xiajiantou"></i>
-->
            <lang></lang>
          </div>
          <div class="dollar">
            <span>U.S.Dollar $ </span>
            <i class="iconfont icon-xiajiantou"></i>
          </div>
          <div class="register-shop" @click="$router.push('/registerShop')">
            <img src="../../assets/img/shopWhite.png" alt="">
            <span>注册您的商店</span>
          </div>
        </div>
        <div class="top-right">
          <div class="information" v-if="isLogin">
            <div class="message" @click="$router.push('/panelInfo/notifyCenter')">
              <i class="iconfont icon-xiaoxi">
                <em>5</em>
              </i>
              <span>消息</span>
            </div>
            <div @click="$router.push('/panelInfo/myWallet')">余额：$599.90</div>
            |
            <div @click="$router.push('/panelInfo')">我的面板</div>
            ｜
            <div>注销</div>

          </div>
          <!--未登陆-->
          <div class="register-login" v-else>
            <div>注册</div>
            ｜
            <div>登陆</div>
          </div>
        </div>

      </div>
      <div class="head-under">
        <div class="shop-sign">
          <img src="../home/img/Shopee.png" alt="">
        </div>
        <div class="under-center">
          <div class="search">
            <input type="text" placeholder="搜索产品，品牌，商店">
            <div class="btn"><i class="iconfont icon-sousuo"></i></div>
          </div>
          <div class="fast-info">
            <span>学习用品</span>
            <span>服装</span>
            <span>背包</span>
            <span>Apple</span>
          </div>
        </div>
        <div class="under-right">
          <div>
            <img src="../home/img/shoppingCart.png" alt="">
            <span>购物车</span>
          </div>
          <div>
            <img src="../home/img/collection.png" alt="">
            <span>收藏</span>
          </div>
          <div>
            <img src="../home/img/contrast.png" alt="">
            <span>比较</span>
          </div>
        </div>

      </div>
    </div>

    <div class="classify">
      <div v-for="item in classifyTab" :key="item.type"
           :class="item.url===currentPath ? 'active' :''" @click="switchTab(item)">
        {{item.title}}
        <p v-if="item.url===currentPath"></p>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapMutations, mapState} from "vuex";
  import lang from "../../components/lang/lang";
  export default {
    name: "myHead",
    data() {
      return {
        isLogin: true,
        classifyTab: [
          {title: '首页', type: 1, url: '/'},
          {title: '所有品牌', type: 2, url: '/allBrands'},
          {title: '所有类别', type: 3, url: '/allCategory'},
          {title: '所有卖家', type: 4, url: '/allSeller'},
          {title: '博客', type: 5, url: '/blog'},
        ]
      }
    },
    computed: {
      ...mapState([
        'currentPath'
      ])
    },
    methods: {
      ...mapMutations({
        setData: 'SET_DATA'
      }),
      switchTab(item) {
        this.setData({key: 'currentPath', value: item.url});
        this.$router.push(item.url);
      }
    },
    components:{
      lang
    }
  }
</script>

<style scoped lang="scss">
  .my-head-wrap {
    position: fixed;
    width: 100%;
    height: 176px;
    left: 0;
    top: 0;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.19);
    border-radius: 0px 0px 14px 14px;
    z-index: 1000;

    .my-head {
      width: 100%;
      height: 120px;
      display: flex;
      //align-items: center;
      justify-content: space-between;
      flex-direction: column;
      background: linear-gradient(180deg, #F7432E 0%, #FE6233 100%);
      border-radius: 0px 0px 14px 14px;

      .head-top {
        height: 40px;
        //padding: 0 360px;
        padding: 0 12%;
        border: 1px solid #FF765A;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .top-left {
          cursor: pointer;
          font-size: 12px;
          display: flex;
          align-items: center;

          > div {
            display: flex;
            align-items: center;
            justify-content: center;

            > span {
              margin: 0 4px;
            }
          }



          .dollar {
            margin: 0 15px;
          }

          .register-shop {
            img {
              width: 15px;
              height: 15px;
            }
          }

        }

        .top-right {
          height: 100%;
          cursor: pointer;

          .information {
            height: 100%;
            display: flex;
            align-items: center;

            > div {
              margin: 0 8px;
            }

            .message {
              height: 100%;
              background: #fff;
              min-width: 80px;
              color: $main-color;
              display: flex;
              align-items: center;
              justify-content: center;

              i {
                position: relative;
                margin-right: 5px;
                font-size: 18px;

                em {
                  position: absolute;
                  right: -2px;
                  width: 12px;
                  height: 12px;
                  top: -6px;
                  background: #E62E04;
                  border-radius: 50%;
                  font-size: 8px;
                  text-align: center;
                  line-height: 12px;
                  color: #fff;
                }
              }
            }

          }

          .register-login {
            font-size: 14px;
            display: flex;
            align-items: center;

            > div {
              margin: 0 13px;
            }
          }

        }
      }

      .head-under {
        flex: 1;
        padding: 0 12%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .shop-sign {
          img {
            width: 156px;
            height: 50px;
          }
        }

        .under-center {
          height: 100%;
          width: 56%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          padding: 17px 0 6px;

          .search {
            height: 40px;
            width: 100%;
            background: #FFFFFF;
            padding: 0 1px 0 20px;
            box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.09);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            input {
              width: 60%;
            }

            .btn {
              width: 48px;
              height: 38px;
              background: linear-gradient(180deg, #F6422D 0%, #FE6233 100%);
              box-shadow: 0px 1px 10px rgba(247, 86, 44, 0.06);
              border-radius: 0px 14px 14px 0px;
              display: flex;
              align-items: center;
              justify-content: center;

              i {
                font-size: 25px;
              }
            }
          }

          .fast-info {
            font-size: 12px;
            padding-left: 15px;
            cursor: pointer;

            span {
              margin: 0 5px;
            }

          }
        }

        .under-right {
          width: 180px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          font-size: 12px;

          > div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            max-width: 70px;
            height: 100%;

            span {
              width: 100%;
              margin-top: 5px;
              word-wrap: break-word;
              word-break: normal;
              text-align: center;
            }

            &:nth-child(1) {
              img {
                width: 23.13px;
                height: 22.62px;
              }
            }

            &:nth-child(2) {
              img {
                width: 25px;
                height: 24px;
              }
            }

            &:nth-child(3) {
              img {
                width: 24px;
                height: 24px;
              }
            }

          }

        }


      }
    }

    .classify {
      width: 100%;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #757575;

      > div {
        position: relative;
        margin: 0 16px;
        cursor: pointer;

        p {
          position: absolute;
          bottom: -16px;
          left: 50%;
          width: 80px;
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
</style>
