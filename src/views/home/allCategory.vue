<template>
<div class="all-category">
  <div class="title-top">
    <div class="title">
      <img src="./img/hot.png" alt="">
      <span>所有类别</span>
    </div>
  </div>

  <div class="category-wrap">
    <div class="filter-tab">
      <ul class="classification">
        <li v-for="(item,index) in classification"
            :key="index" :class="index===0?'active':''">
          <em class="iconfont icon-triangle24" v-if="index===0"></em>
          <img :src="item.icon" alt="">
          <span>{{item.title}}</span>
        </li>
        <div class="more">更多 <i class="iconfont icon-xiajiantou"></i></div>
      </ul>
      <div class="filter-options">
        <div class="filter-top">
          <div class="top-title">
            <i class="iconfont icon-filter"></i>
            <h1>搜索过滤器</h1>
          </div>
          <div class="clear">清除</div>
        </div>
        <div class="options-type">
          <h2>发货地</h2>
          <div class="options">
            <p class="p-active"></p>
            <span>大陆</span>
          </div>
          <div class="options">
            <p></p>
            <span>港澳台</span>
          </div>
          <div class="options">
            <p></p>
            <span>海外</span>
          </div>
        </div>

        <div class="options-type">
          <h2>店铺类型</h2>
          <div class="options">
            <p class="p-active"></p>
            <span>星级首选</span>
          </div>
          <div class="options">
            <p></p>
            <span>个人商铺</span>
          </div>
          <div class="options">
            <p></p>
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
    <div class="commodity-wrap">
      <ul class="">
        <li v-for="i in num" :key="i">
          <div class="shop-info">
            <h2>HUAWEI p60</h2>
            <img src="" alt="">
            <p>HUAWEI P50  | True-Form Dual-Matrix Camera | 6.5”True-Chroma Display | 66W SuperCharge</p>
            <div class="operate" v-if="false">
              <div>
                <img src="./img/shoppingCart.png" alt="">
              </div>
              <div>
                <img src="./img/collection.png" alt="">
              </div>
              <div>
                <img src="./img/contrast.png" alt="">
              </div>
            </div>
          </div>
          <div class="price">$999.00</div>
        </li>
      </ul>

      <div class="show-more" @click="showMoreGoods()">显示更多</div>
      <noData :hint="'没有满足当前条件的商品或店铺'" class="no-data" v-if="showNoData"></noData>
    </div>
  </div>
</div>
</template>

<script>
import noData from "../../components/noData/noData";
export default {
  name: "allCategory",
  data(){
    return{
      num:16,
      classification:[
        {title:'男士时装',icon:require('../../assets/img/shopLogo.png'),type:1},
        {title:'男士时装',icon:require('../../assets/img/shopLogo.png'),type:1},
        {title:'男士时装',icon:require('../../assets/img/shopLogo.png'),type:1},
        {title:'男士时装',icon:require('../../assets/img/shopLogo.png'),type:1},
        {title:'男士时装',icon:require('../../assets/img/shopLogo.png'),type:1},
        {title:'男士时装',icon:require('../../assets/img/shopLogo.png'),type:1},
        {title:'男士时装',icon:require('../../assets/img/shopLogo.png'),type:1},
        {title:'男士时装',icon:require('../../assets/img/shopLogo.png'),type:1},
      ],
      showNoData:false
    }
  },
  methods:{
    showMoreGoods(){
      this.num= this.num+8
    },
  },
  components:{
    noData
  }
}
</script>

<style scoped lang="scss">
.all-category{

  min-height: 800px;
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
  .category-wrap{
    display: flex;
    //align-items: center;
    justify-content: space-between;
    //flex: 1;
    .filter-tab{
      width: 241px;
      //height: 100%;
      border-right: 1px solid #F0F0F0;
      .classification{
        min-height: 300px;
        padding: 20px 0;
        color: #A3A3A3;
        font-size: 14px;
        border-bottom: 1px solid #F0F0F0;
        >li{
          position: relative;
          display: flex;
          margin-bottom: 16px;
          align-items: center;
          cursor: pointer;
          padding-left: 10px;
          em{
            position: absolute;
            left: -6px;
            top: -1px;
            font-size: 20px;
          }
          img{
            width: 20px;
            height: 20px;
            margin-right: 6px;
          }
        }
        .active{
          color: $main-color;
        }
        .more{
          width: 100%;
          cursor: pointer;
          padding-left: 35px;
        }

      }
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
            >p{
              position: relative;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              border: 1px solid #E0E0E0;
              margin-right: 7px;
            }
            .p-active{
              border: 1px solid $main-color;
              &:after {
                content: " ";
                position: absolute;
                display: inline-block;
                width: 6px;
                height: 3px;
                border-width: 0 0 2px 2px;
                overflow: hidden;
                border-color: $main-color;
                border-style: solid;
                -webkit-transform: rotate(-50deg);
                transform: rotate(-50deg);
                left: 3.5px;
                top: 4px;
              }
            }
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
    .commodity-wrap{
      flex: 1;

      ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 20px 20px 20px 40px;
        >li{
          width: 23%;
          min-height: 274px;
          background: #FFFFFF;
          box-shadow: 0px 0.924752px 10.1723px rgba(0, 0, 0, 0.09);
          border-radius: 14px;
          //margin-right: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          margin-bottom: 20px;

          .shop-info{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: #333333;
            font-size: 12px;
            padding: 10px 20px;
            h2{
              font-size: 16px;
            }
            img{
              width: 100px;
              height: 120px;
              margin: 7px 0 6px;
            }
            p{
              line-height: 14px;
            }
            .operate{
              position: absolute;
              right: 8px;
              top: 20px;
              >div{
                width: 28px;
                height: 28px;
                background: #F7562C;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 5px;
                >img{
                  width: 14px;
                  height: 14px;
                }
              }

            }
          }

          .price{
            width: 100%;
            padding: 0 20px;
            border-top: 1px solid #F0F0F0;
            height: 44px;
            color: $main-color;
            font-size: 16px;
            line-height: 44px;

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
