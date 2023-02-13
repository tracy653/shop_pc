<comment>
/* # 组件注释
* 模块描述： 单个商品详情
*/
</comment>
<template>
<div class="product-details">
  <div class="commodity-purchase">
    <div class="product-intro">
      <div class="preview-wrap">
        <div class="exhibit-area">
          <img src="" alt="">
        </div>

        <div class="be-shown">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
        </div>
      </div>

      <div class="option-configuration">
        <p class="product-name">
          NIVEA 奶油 250ml 尼维亚奶油浓缩配方皮肤柔软、保湿和光滑
          NIVEA 奶油 250ml 尼维亚奶油浓缩配方皮肤柔软、保湿和光滑
        </p>

        <div class="star-info">
          <div class="level">
            <i class="iconfont icon-star" v-for="i in 5" :key="i"></i>
            5.0
          </div>
          <em>|</em>
          <div>984 <span>条评论</span> </div>
          <em>|</em>
          <div>1.3k <span>销量</span></div>
        </div>

        <div class="discount-area">
          <span>$34.34</span>
          <h3>$30.54</h3>
          <p>享受34%折扣</p>
        </div>

        <div class="options">
          <div class="options-key">
            <div>销售方</div>
            <div>优惠券</div>
            <div>数量</div>
            <div class="specification">规格</div>
            <div>配送到</div>
          </div>
          <div class="options-val">
            <div class="seller-name">
              <span>Jimd shop</span>
              <p>卖家信息</p>
            </div>

            <div class="coupons">
              <div>减¥45.45</div>
              <div>减¥45.45</div>
              <div class="disabled">减¥45.45</div>
              <span>不使用</span>
            </div>

            <div class="quantity">
              <div class="number">
                <p @click="minusQuantity()">-</p>
                <input type="text" :value="buyQuantity">
                <p @click="addQuantity">+</p>
              </div>
              <span>(库存 100)</span>
            </div>

            <div class="sku-type">
              <div class="active-sku">234ml</div>
              <div>234ml</div>
            </div>

            <div class="delivery-area">曼谷 普拉纳贡</div>
          </div>
        </div>

        <div class="operating">
          <div class="shopping-cart">
            <img src="" alt="">
            <span>添加到购物车</span>
          </div>
          <div class="buy">立即购物</div>
          
          <div class="collection">
            <img src="../../assets/img/favorite.png" alt="">
            <span>收藏</span>
          </div>

          <div class="compare">
            <img src="../../assets/img/addCompare.png" alt="">
            <span>加入比较</span>
          </div>

        </div>
      </div>

    </div>
    <div class="share-tips">
      <div class="share">
        <span>分享</span>
        <img src="../../assets/img/share1.png" alt="">
        <img src="../../assets/img/share2.png" alt="">
        <img src="../../assets/img/share3.png" alt="">
        <img src="../../assets/img/share4.png" alt="">
      </div>
      <div class="tips">
        <span>100%正品保障</span>
        <span>非偏远地区 免费配送</span>
        <span>15天无忧退换货</span>
      </div>
    </div>

  </div>

  <div class="shop-info">
    <div class="shopkeeper">
      <img src="./img/disabledCoupon.png" alt="">
      <div class="name-contact">
        <h3>Nivea官方店</h3>
        <div class="state">
          <p></p>
          当前在线
        </div>
        <div class="contact">联系买家</div>
      </div>

    </div>

    <div class="info">
      <div>
        <div class="top">
          关注数量 <span>667k</span>
        </div>
        <div>
          所有者
          <span>Jimdh shop</span>
        </div>
      </div>

      <div>
        <div class="top">
          产品数量 <span>667</span>
        </div>
        <div>
          加入时间 <span>2021-02-12</span>
        </div>
      </div>

      <div>
        <div class="top">
          好评度 <span>97%</span>
        </div>
        <div class="store-level">
          店铺星级
          <div class="star">
            <i class="iconfont icon-star" v-for="i in 5" :key="i"></i>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div class="commodity-overview">
    <div class="left-area">
      <div class="filter-search">
        <div class="internal-search">
          <img src="../../assets/img/shopLogo.png" alt="">
          <span>店内搜索</span>
        </div>
        <div class="search-input">
          <input type="text" placeholder="关键字">
          <span class="search-btn">搜索</span>
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

    <div class="right-area">
      <div class="detailed-comments">
        <div :class="item.type === activeContent ? 'active-content': ''"
             @click="switchContent(item)"
             v-for="item in contentTab" :key="item.type">
          <span>{{item.title}}</span>
          <p v-if="item.type === activeContent"></p>
        </div>
      </div>

      <div class="details-content" v-if="activeContent===1">
        富文本详情显示
      </div>
      <div class="comment-content" v-else>
        <div class="praise-wrap">
          <div class="praise">
            <div class="praise-index">
              <h4>好评度</h4>
              <span>97%</span>
            </div>

            <ul class="label-wrap">
              <li v-for="i in 8" :key="i">味道好闻445</li>
            </ul>
          </div>
        </div>

        <div class="personal-review">
          <div class="item-review" v-for="i in 4" :key="i">
            <div class="item-name">
              <img src="../../assets/img/favorite.png" alt="">
              <span>会飞的花</span>
            </div>

            <div class="overview">
              <span class="time">2021-12-12 18:12</span>
              <p class="text">
                ของถึงรวดเร็วมาก ชอบผลิตภัณฑ์ของนีเวียอยู่แล้ว  ทั้งครีมทาตัวทาหน้า ทุกอย่างของนีเวียชอบมาก
                เคยเปลี่ยนใช้ไปใช้ตัวอื่นแต่สุดท้ายก็กลับมาหานีเวียเหมือนเดิม  ชอบมากๆๆค่ะ  ได้โค้ดส่วนลด แล้วก็ส่งฟรีอีกด้วย
                แนะนำเลยดีจริงๆๆๆ❤️❤️❤️❤️❤️☺️☺️💕💕
              </p>

              <div class="praise-picture">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="../../assets/img/favorite.png" alt="">
              </div>

              <div class="merchant-reply">
                <h1>商家回复</h1>
                <p>
                  ทางร้าน nivea_official_store ขอขอบพระคุณคุณลูกค้าสำหรับการรีวิวและความไว้วางใจที่เลือกซื้อสินค้ากับ
                  ทางร้านของเรานะครับ คุณลูกค้าสามารถกดติดตามร้านค้าเอาไว้เพื่อไม่ให้พลาดข่าวสารและโปรโมชั่นพิเศษจากทางร้า
                  นได้เลยครับ
                </p>
              </div>
            </div>

            <div class="thumbs-up">
              <i class="iconfont icon-dianzan"></i>
              <span>21</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "productDetails",
  data(){
    return{
      buyQuantity:2,
      contentTab:[
        {title:'产品描述',type:1},
        {title:`评论（${10}万+）`,type:2},
      ],
      activeContent:1
    }
  },
  methods:{
    switchContent(item){
      this.activeContent = item.type
    },
    minusQuantity(){
      this.buyQuantity--
    },
    addQuantity(){
      this.buyQuantity++
    }
  }
}
</script>

<style scoped lang="scss">
.product-details{
  .commodity-purchase{
    width: 100%;
    min-height: 629px;
    background: #FFFFFF;
    border-radius: 14px;
    .product-intro{
      display: flex;
      justify-content: space-between;
      height: 587px;
      .preview-wrap{
        width: 470px;
        .exhibit-area{
          width: 470px;
          height: 440px;
          border-radius: 14px;
          background: #55a532;
          >img{
            width: 100%;
            height: 100%;
          }
        }
        .be-shown{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 20px 0 27px;
          padding: 0 9px;
          >img{
            width: 100px;
            height: 100px;
            border: 1.4px solid #F7562C;
            border-radius: 7px;
          }
        }
      }

      .option-configuration{
        flex: 1;
        font-size: 14px;
        color: #A3A3A3;
        padding: 30px 40px 0;
        .product-name{
          color: #333333;
          font-size: 20px;
          line-height: 22px;
        }
        .star-info{
          display: flex;
          margin: 10px 0 20px;
          align-items: center;
          font-size: 16px;
          color: #333333;
          .level{
            i{
              color: #FFA100;
            }
          }
          em{
            color: #A3A3A3;
            margin: 0 5px;
          }
          span{
            color: #A3A3A3;
          }
        }

        .discount-area{
          height: 80px;
          padding: 0 40px;
          display: flex;
          align-items: center;
          background: #F3F3F3;
          border-radius: 14px;
          color: $main-color;
          span{
            font-size: 20px;
            color: #A3A3A3;
          }
          h3{
            margin: 0 20px 0 36px;
            font-size: 28px;
          }
          p{
            font-size: 14px;
          }
        }

        .options{
          display: flex;
          //align-items: center;
          padding-left: 40px;
          margin: 15px 0 77px;
          .options-key{
            width: 20%;
            font-size: 14px;
            color: #A3A3A3;
            .specification{
              margin: 20px 0;

            }

            >div{
              display: flex;
              align-items: center;
              height: 35px;
            }
          }
          .options-val{
            flex: 1;
            >div{
              display: flex;
              align-items: center;
              height: 35px;
            }
            .seller-name{
              color: #757575;
              font-size: 12px;
              display: flex;
              >p{
                color: $main-color;
                margin-left: 20px;
              }
            }

            .coupons{
              display: flex;
              >div{
                cursor: default;
                background-image: url("./img/coupon.png");
                background-size: cover;
                margin-right: 10px;
                height: 22px;
                color: #fff;
                min-width: 66px;
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .disabled{
                background-image: url("./img/disabledCoupon.png");
              }
            }

            .quantity{
              display: flex;
              .number{
                width: 117px;
                height: 30px;
                background: #FFFFFF;
                border: 1px solid #E0E0E0;
                border-radius: 4px;
                margin-right: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                >input{
                  width: 49px;
                  padding: 0 10px;
                  text-align: center;
                  color: $main-color;
                }
                >p{
                  cursor: default;
                  height: 100%;
                  width: 33px;
                  text-align: center;
                  line-height: 30px;
                  border-right: 1px solid #E0E0E0;
                  color: #A3A3A3;
                  &:nth-child(3){
                    border-right: none;
                    border-left: 1px solid #E0E0E0;
                  }
                }
              }
            }

            .sku-type{
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              margin: 20px 0;
              >div{
                min-width: 70px;
                height: 30px;
                margin-right: 10px;
                background: #FFFFFF;
                border: 1px solid #E0E0E0;
                border-radius: 4px;
                text-align: center;
                line-height: 30px;
                color: #A3A3A3;
                cursor: default;
              }
              .active-sku{
                border: 1.4px solid #F7562C;
                color: #333333;
              }
            }

            .delivery-area{
              font-size: 14px;
              color: #A3A3A3;
            }
          }
        }

        .operating{
          display: flex;
          align-items: center;
          font-size: 16px;
          moz-user-select: -moz-none;
          -moz-user-select: none;
          -o-user-select:none;
          -khtml-user-select:none;
          -webkit-user-select:none;
          -ms-user-select:none;
          user-select:none;

          .shopping-cart{
            width: 200px;
            height: 50px;
            background: #FFFFFF;
            border: 1px solid #F7562C;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 31px;
            margin-right: 20px;
            cursor: default;
            color: $main-color;

            >img{
              width: 30px;
              height: 30px;
            }
          }
          .buy{
            width: 140px;
            height: 50px;
            background: #F7562C;
            border-radius: 7px;
            color: #fff;
            padding: 0 10px;
            line-height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: default;
          }

          .collection{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 12px;
            color: $main-color;
            margin: 0 42px 0 41px;
            >img{
              width: 24px;
              height: 24.8px;
              margin-bottom: 5px;
            }

          }
          .compare{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 12px;
            color: $main-color;
            >img{
              width: 24px;
              height: 24px;
              margin-bottom: 5px;
            }
          }
        }
      }
    }

    .share-tips{
      height: 42px;
      display: flex;
      align-items: center;
      //justify-content: space-between;
      border-top: 1px solid #E0E0E0;
      padding: 0 20px;
      >div{
        width: 45%;
      }
      .share{
        display: flex;
        align-items: center;
        color: #A3A3A3;
        >span{
          margin-right: 20px;
        }
        img{
          width: 16px;
          height: auto;
          margin-right: 16px;
        }

      }
      .tips{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
        >span{
          font-size: 14px;
          color: $main-color;
        }
      }
    }
  }
  .shop-info{
    margin: 20px 0;
    width: 100%;
    height: 140px;
    background: #FFFFFF;
    border-radius: 14px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    .shopkeeper{
      width: 291px;
      border-right: 1px solid #F0F0F0;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      padding: 15px;
      >img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 19px;

      }
      .name-contact{
        color: #333333;
        font-size: 18px;
        .state{
          font-size: 14px;
          color: #858585;
          display: flex;
          margin: 10px 0 19px;
          align-items: center;
          //justify-content: center;
          >p{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #0ABB75;
            margin-right: 5px;
          }

        }

        .contact{
          width: 90px;
          height: 24px;
          background: #FFFFFF;
          border: 1px solid #F6412D;
          border-radius: 6px;
          color: $main-color;
          line-height: 16px;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
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
    .info{
      flex: 1;
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: space-between;
      color: #858585;
      font-size: 14px;
      >div{
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        width: 32%;


        span{
          margin-left: 10px;
          color: $main-color;
        }
        .top{
          margin-bottom: 23px;
        }
      }
      .store-level{
        display: flex;
        align-items: center;
        justify-content: center;
        .star{
          margin-left: 10px;

          i{
            color: #FFA707;
          }
        }

      }
    }
  }

  .commodity-overview{
    width: 100%;
    min-height: 300px;
    background: #FFFFFF;
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    .left-area{
      width: 241px;
      border-right: 1px solid #F0F0F0;
      .filter-search{
        padding: 30px 20px 40px 30px;
        font-size: 14px;
        color: $main-color;
        .internal-search{
          display: flex;
          align-items: center;
          >img{
            width: 21.3px;
            height: 21.3px;
            margin-right: 8px;
          }

        }

        .search-input{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 11px 0 20px 26px;
          input{
            width: 127px;
            height: 28px;
            background: #FFFFFF;
            border: 1px solid #E0E0E0;
            border-radius: 6px;
            padding-left: 8px;
            color: #A3A3A3;
            font-size: 12px;
          }
          .search-btn{
            cursor: pointer;
            moz-user-select: -moz-none;
            -moz-user-select: none;
            -o-user-select:none;
            -khtml-user-select:none;
            -webkit-user-select:none;
            -ms-user-select:none;
            user-select:none;

          }
        }

        .filter-options {
          color: #A3A3A3;
          font-size: 14px;
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
              color: #757575;
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

    .right-area{
      flex: 1;
      .detailed-comments{
        height: 74px;
        padding: 24px 0 0 60px;
        border-bottom: 1px solid #F0F0F0;
        display: flex;
        align-items: center;
        color: #757575;
        font-size: 18px;
        >div{
          position: relative;
          margin-right: 30px;
          cursor: pointer;
          moz-user-select: -moz-none;
          -moz-user-select: none;
          -o-user-select:none;
          -khtml-user-select:none;
          -webkit-user-select:none;
          -ms-user-select:none;
          user-select:none;
        }
        .active-content{
          color: $main-color;
          >p{
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 4px;
            background: #F7562C;
            border-radius: 27px;
          }
        }
      }

      .details-content{
        padding: 30px 50px;
        color: red;
      }
      .comment-content{
        .praise-wrap{
          padding: 17px 30px;
          .praise{
            width: 100%;
            min-height: 102px;
            border: 1px solid #F0F0F0;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .praise-index{
              width: 160px;
              text-align: center;
              font-size: 30px;
              color: $main-color;
              >h4{
                color: #858585;
                font-size: 14px;
                margin-bottom: 8px;
              }
            }
            .label-wrap{
              flex: 1;
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              padding: 20px 10px 10px;
              >li{
                width: 100px;
                height: 26px;
                background: #FFFFFF;
                border: 1px solid #E0E0E0;
                border-radius: 4px;
                text-align: center;
                line-height: 26px;
                margin: 0 10px 10px 0;
                color: #858585;
                cursor: default;
              }
            }
          }
        }
        .personal-review{
          padding: 17px 0;
          .item-review{
            border-bottom: 1px solid #F0F0F0;
            margin-bottom: 30px;
            color: #757575;
            font-size: 14px;
            .item-name{
              display: flex;
              align-items: center;
              padding: 0 30px;

              >img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 10px;
              }
            }

            .overview{
              padding: 5px 77px 30px;
              .text{
                margin-top: 20px;
                line-height: 22px;
              }
              .praise-picture{
                display: flex;
                align-items: center;
                margin: 10px 0;
                flex-wrap: wrap;
                >img{
                  width: 100px;
                  height: 100px;
                  margin: 0 10px 10px 0;
                  border-radius: 7px;

                }
              }

              .merchant-reply{
                width: 799px;
                min-height: 110px;
                background: #F3F3F3;
                border-radius: 7px;
                padding: 10px 20px 5px;
                font-size: 14px;
                color: $main-color;
                >p{
                  margin-top: 10px;
                  color: #757575;
                  font-size: 16px;
                  line-height: 22px;
                }
              }
            }
            .thumbs-up{
              padding: 0 30px;
              display: flex;
              align-items: center;
              margin-bottom: 10px;
              i{
                color: $main-color;
                font-size: 20px;
                margin-right: 10px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}

</style>