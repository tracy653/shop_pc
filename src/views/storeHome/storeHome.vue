<comment>
/* # 组件注释
* 模块描述： 店铺首页中心
*/
</comment>
<template>
  <div class="store-home">
    <div class="store-tab">
      <div class="store-name">
        <img src="" alt="">
        <span>Nives 官方店</span>
      </div>

      <div class="store-classify">
        <div v-for="(item,index) in classifyTab"
             :class="index == 0 ? 'active': ''"
             :key="index" @click="switchTab(item)">
          {{ item.title }}
          <p v-if="index==0"></p>
        </div>
      </div>
    </div>
    <div class="category-wrap">
      <div class="filter-tab">
        <div class="store-info">
          <div class="info-item">
            <div class="item-key">主营范围</div>
            <div class="item-value">nivea专卖 护肤 美妆</div>
          </div>

          <div class="info-item">
            <div class="item-key">店铺星级</div>
            <div class="item-value">
              <i class="iconfont icon-star" v-for="i in 5" :key="i"></i>
            </div>
          </div>

          <div class="info-item">
            <div class="item-key">所有者</div>
            <div class="item-value2">
              <img src="../../assets/img/shopLogo.png" alt="">
              Jimmy’s Shop
            </div>
          </div>

          <div class="info-item">
            <div class="item-key">产品数量</div>
            <div class="item-value">343</div>
          </div>

          <div class="info-item">
            <div class="item-key">加入时间</div>
            <div class="item-value">2021-01-21</div>
          </div>

          <div class="collection">
            <div>收藏店铺</div>
            <div class="contact-seller">联系卖家</div>
          </div>
        </div>
        <div class="filter-options">
          <div class="filter-top">
            <div class="top-title">
              <i class="iconfont icon-filter"></i>
              <h1>搜索过滤器</h1>
            </div>
            <div class="clear">清除</div>
          </div>
          <div class="options-type">
            <h2>活动与促销</h2>
            <div class="options">
              <p class="p-active"></p>
              <span>最新上架</span>
            </div>
            <div class="options">
              <p></p>
              <span>热销产品</span>
            </div>
            <div class="options">
              <p></p>
              <span>优惠促销</span>
            </div>
          </div>

          <div class="options-type">
            <h2>价格范围</h2>
            <div class="price-range">
              <input type="text" placeholder="最小"> -
              <input type="text" placeholder="最大">
            </div>
          </div>
        </div>

        <!--     推荐排行    -->
        <div class="recommended-ranking">
          <div class="ranking-tab">
            <div class="active-ranking">店长推荐</div>
            <div>畅销排行</div>
          </div>
          <ul class="ranking-goods">
            <li>
              <img src="" alt="">
              <p>
                馥绿德雅（RENE FURTERER）
                赋活焕能控油洗发露600ml....
              </p>
              <span class="goods-price mod-highlight">$565.56</span>
            </li>
            <li>
              <img src="" alt="">
              <p>
                馥绿德雅（RENE FURTERER）
                赋活焕能控油洗发露600ml....
              </p>
              <span class="goods-price mod-highlight">$565.56</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="commodity-wrap">
        <div class="banner">

        </div>
        <storeProduceModal title="店铺首页"></storeProduceModal>
        <storeProduceModal title="最新上架"></storeProduceModal>
      </div>
    </div>
  </div>
</template>

<script>
import storeProduceModal from "./components/storeProduceModal";

export default {
  name: "storeHome",
  data() {
    return {
      classifyTab: [
        {title: '店铺首页',},
        {title: '店铺首页',},
        {title: '店铺首页',},
        {title: '店铺首页',},
        // {title:'店铺首页',},
        {title: '店铺首页',},
        {title: '店铺首页',},
        {title: '店铺首页',},
        {title: '女士美妆',},
      ]
    }
  },
  components: {storeProduceModal},
  methods: {
    switchTab() {

    }
  }
}
</script>

<style scoped lang="scss">
.store-home {
  width: 100%;
  min-height: 400px;
  background: #FFFFFF;
  border-radius: 14px;
  //padding: 0 20px 0;

  .store-tab {
    height: 74px;
    border-bottom: 1px solid #F0F0F0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0;


    .store-name {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #333333;
      width: 241px;

      img {
        width: 40px;
        height: 40px;
        margin-right: 16px;
        border-radius: 50%;
      }

    }

    .store-classify {
      flex: 1;
      font-size: 16px;
      color: #757575;
      display: flex;
      align-items: center;
      justify-content: center;

      > div {
        position: relative;
        margin: 0 16px;
        cursor: pointer;

        p {
          position: absolute;
          bottom: -16px;
          left: 50%;
          width: 100%;
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

  .category-wrap {
    display: flex;
    justify-content: space-between;

    .filter-tab {
      width: 241px;
      border-right: 1px solid #F0F0F0;

      .store-info {
        min-height: 220px;
        //padding: 30px 0 20px;
        color: #A3A3A3;
        font-size: 14px;
        border-bottom: 1px solid #F0F0F0;
        padding: 30px 20px 20px;
        .info-item {
          display: flex;
          //align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: #858585;
          margin-bottom: 10px;
          line-height: 15px;

          .item-key {
            width: 60px;
          }

          .item-value {
            flex: 1;
            padding-left: 20px;
            display: flex;
          }

          .item-value2 {
            flex: 1;
            padding-left: 20px;
            display: flex;
            align-items: center;

            > img {
              width: 15px;
              height: 15px;
              margin-right: 8px;
            }
          }

        }

        .collection {
          display: flex;
          align-items: center;
          margin-top: 30px;

          > div {
            cursor: pointer;
            width: 90px;
            min-height: 24px;
            background: $main-color;
            border-radius: 6px;
            text-align: center;
            line-height: 24px;
            font-size: 14px;
            color: #fff;
          }

          .contact-seller {
            margin-left: 10px;
            color: $main-color;
            background: #fff;
            border: 1px solid $main-color;

          }

        }
      }

      .filter-options {
        color: #A3A3A3;
        font-size: 14px;
        //padding: 20px 20px 50px 10px;
        padding: 20px 20px 30px;
        .filter-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;

          .top-title {
            display: flex;
            align-items: center;
            color: $main-color;

            h1 {
              margin-left: 5px;
            }
          }

          .clear {
            cursor: pointer;
          }
        }

        .options-type {
          margin-top: 15px;

          > h2 {
            margin-left: 24px;
            color: $main-color;
          }

          .options {
            display: flex;
            align-items: center;
            margin: 11px 0;
            cursor: pointer;

            > p {
              position: relative;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              border: 1px solid #E0E0E0;
              margin-right: 7px;
            }

            .p-active {
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

          .price-range {
            width: 159px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 11px 0 0 25px;

            > input {
              width: 45%;
              height: 100%;
              border-radius: 6px;
              border: 1px solid #E0E0E0;
              text-align: center;
              padding: 0 5px;


            }

          }
        }

      }

      /*推荐排行*/
      .recommended-ranking{
        .ranking-tab{
          display: flex;
          align-items: center;
          justify-content: space-between;
          >div{
            width: 50%;
            height: 41px;
            line-height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #F5F5F5;
            font-size: 16px;
            color: #A3A3A3;
            cursor: default;
            moz-user-select: -moz-none;
            -moz-user-select: none;
            -o-user-select:none;
            -khtml-user-select:none;
            -webkit-user-select:none;
            -ms-user-select:none;
            user-select:none;
          }
          .active-ranking{
            background: #F7562C;
            color: #fff;
          }

        }

        .ranking-goods{
          padding: 20px;
          >li{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 20px;
            >img{
              width: 181px;
              height: 181px;
              border-radius: 10px;
            }
            >p{
              margin: 10px 0 6px;
              width: 181px;
              font-size: 12px;
              line-height: 16px;
              color: #757575;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .goods-price{
              width: 181px;
              text-align: right;

            }

          }
        }
      }
    }

    .commodity-wrap {
      flex: 1;
      padding: 20px 0 20px 20px;
      .banner {
        width: 100%;
        background: red;
        height: 240px;
        border-radius: 14px;
      }
    }
  }


}

</style>