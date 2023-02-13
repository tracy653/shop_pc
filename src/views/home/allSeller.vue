<template>
<div class="all-seller">
  <div class="title-top">
    <div class="title">
      <img src="./img/hot.png" alt="">
      <span>所有卖家</span>
    </div>
  </div>

  <div class="content-wrap">
    <div class="store-filter">
      <div class="filter-options">
        <div class="filter-top">
          <div class="top-title">
            <i class="iconfont icon-filter"></i>
            <h1>搜索过滤器</h1>
          </div>
          <div class="clear">清除</div>
        </div>
        <div class="options-type">
          <h2>店铺所在地</h2>
          <div class="options">
            <p class="mod-choose-circle mod-selected-circle"></p>
            <span>大陆-</span>
          </div>
          <div class="options">
            <p class="mod-choose-circle"></p>
            <span>港澳台</span>
          </div>
          <div class="options">
            <p class="mod-choose-circle"></p>
            <span>海外</span>
          </div>
        </div>

        <div class="options-type">
          <h2>店铺类型</h2>
          <div class="options">
            <p class="mod-choose-circle mod-selected-circle"></p>
            <span>星级首选</span>
          </div>
          <div class="options">
            <p class="mod-choose-circle"></p>
            <span>个人商铺</span>
          </div>
          <div class="options">
            <p class="mod-choose-circle"></p>
            <span>新开商铺</span>
          </div>
        </div>

        <div class="options-type">
          <h2>价格范围</h2>
          <div class="price-range">
            <input type="text" placeholder="最小"> -
            <input type="text" placeholder="最大">
          </div>

        </div>

        <div class="options-type">
          <h2>星级</h2>
          <div class="star-rating" v-for="i in 5" :key="i">
            <p :class="i===1?'star-active':''"></p>
            <div class="star">
              <i class="iconfont icon-star" v-for="k in 5" :key="k"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="store-list">
      <ul class="store">
        <li v-for="i in 24" :key="i">
          <div class="item-logo">
            <img src="./img/storeLogo.png" alt="">
            <div class="visit" @click="visitStore()">访问店铺</div>
          </div>
          <div class="item-info">
            <div class="category">
              <h1>Electroware</h1>
              <span>Eled/apple</span>
              <div class="star">
                <i class="iconfont icon-star"></i>
                <i class="iconfont icon-star"></i>
                <i class="iconfont icon-star"></i>
              </div>
            </div>
            <div class="shop-logo">
              <img src="../../assets/img/shopLogo.png" alt="">
              <span>Jimmys shop</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="show-more" @click="showMoreShop()">显示更多</div>

      <noData :hint="'没有满足当前条件的店铺'" class="no-data" v-if="showNoData"></noData>
    </div>
  </div>
</div>
</template>

<script>
import noData from "../../components/noData/noData";
export default {
  name: "allSeller",
  data(){
    return{
      showNoData:false
    }
  },
  methods:{
    visitStore(){
      this.$router.push('/storeHome')
    },
    showMoreShop(){

    }
  },
  components:{
    noData
  }
}
</script>

<style scoped lang="scss">
.all-seller{
  width: 100%;
  min-height: 580px;
  padding: 0 20px;
  background: #FFFFFF;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  .title-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    border-bottom: 1px solid #F0F0F0;
    color: #757575;
    .title{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      img{
        width: 15px;
        height: 23px;
        margin-right: 10px;
      }
    }
  }

  .content-wrap{
    display: flex;
    justify-content: space-between;
    .store-filter{
      width: 241px;
      height: 100%;
      border-right: 1px solid #F0F0F0;
      .filter-options{
        color: #A3A3A3;
        font-size: 14px;
        padding: 20px 20px 50px 10px;
        .filter-top{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          .top-title{
            display: flex;
            align-items: center;
            color: $main-color;
            h1{
              margin-left: 5px;
            }
          }
          .clear{
            cursor: pointer;
          }
        }

        .options-type{
          margin-top: 15px;
          >h2{
            margin-left: 24px;
            color: $main-color;
          }

          .options{
            display: flex;
            align-items: center;
            margin: 11px 0;
            cursor: pointer;
          }

          .price-range{
            width: 159px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 11px 0 0 25px;

            >input{
              width: 45%;
              height: 100%;
              border-radius: 6px;
              border: 1px solid #E0E0E0;
              text-align: center;
              padding: 0 5px;


            }

          }

          .star-rating{
            margin: 11px 0 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
            >p{
              position: relative;
              margin-right: 7px;
              width: 16px;
              height: 16px;
              border: 1px solid #E0E0E0;
              border-radius: 50%;
            }
            .star-active{
              border: 1px solid $main-color;
              &:after {
                content: " ";
                position: absolute;
                width: 9.8px;
                height: 9.8px;
                border-radius: 50%;
                background: $main-color;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
              }
            }
            .star{
              i{
                margin: 0 1px;
                color: #FFA100;
              }

            }
            &:nth-child(3){
              i{
                &:nth-child(5){
                  color: #E0E0E0;
                }
              }
            }
            &:nth-child(4){
              i{
                &:nth-child(n+4){
                  color: #E0E0E0;
                }
              }
            }
            &:nth-child(5){
              i{
                &:nth-child(n+3){
                  color: #E0E0E0;
                }
              }
            }
            &:nth-child(6){
              i{
                &:nth-child(n+2){
                  color: #E0E0E0;
                }
              }
            }
          }
        }
      }


    }
    .store-list{
      flex: 1;
      padding: 20px 0 0 20px;
      .store{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
          width: 32%;
          height: 122px;
          background: #FFFFFF;
          box-shadow: 0px 0.924752px 10.1723px rgba(0, 0, 0, 0.09);
          border-radius: 14px;
          padding: 11px 20px;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          //justify-content: space-between;
          .item-logo{
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            margin-right: 20px;
            img{
              width: 60px;
              height: 60px;
            }
            .visit{
              cursor: pointer;
              width: 100px;
              height: 24px;
              background: linear-gradient(180deg, #F6412D 0%, #FE6233 100%);
              border-radius: 6px;
              text-align: center;
              line-height: 24px;
              font-size: 14px;
              color: #fff;
            }
          }

          .item-info{
            display: flex;
            //align-items: center;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            flex: 1;
            .category{
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              color: #333;
              font-size: 16px;
              width: 105px;
              overflow:hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              >h1{
                width: 130px;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              >span{
                margin: 3px 0 9px;
                font-size: 12px;
                color: #858585;
                width: 105px;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .star{
                color: #FFA707;
                display: flex;
              }
            }

            .shop-logo{
              display: flex;
              align-items: center;
              color: #858585;
              font-size: 12px;
              img{
                width: 20px;
                height: 20px;
              }
              >span{
                width: 105px;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }

            }

          }

        }
      }

      .show-more{
        width: 100%;
        text-align: center;
        //line-height: 30px;
        font-size: 16px;
        color: #A3A3A3;
        cursor: pointer;
        padding-bottom: 18px;
      }

      .no-data{
        margin-top: 70px;
      }

    }
  }

}

</style>