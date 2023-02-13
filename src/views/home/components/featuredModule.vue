<comment>
/* # 组件注释
* 模块描述：精选店铺组件
*/
</comment>
<template>
  <div class="featured-module">
    <div class="title-top">
      <div class="title">
        <img src="../img/hot.png" alt="">
        <span>精选店铺</span>
      </div>
      <h1>查看所有精选卖家</h1>
    </div>
    <div class="seller-wrap">
      <img src="../img/featured.png" alt="">
      <ul class="store">
        <li>
          <div class="li-item">
            <div class="item-logo">
              <img src="../img/storeLogo.png" alt="">
              <div class="visit">访问店铺</div>
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
                <img src="../../../assets/img/shopLogo.png" alt="">
                <span>Jimmys shop</span>
              </div>
            </div>

          </div>
          <div class="li-item">
            <div class="item-logo">
              <img src="../img/storeLogo.png" alt="">
              <div class="visit">访问店铺</div>
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
                <img src="../../../assets/img/shopLogo.png" alt="">
                <span>Jimmys shop</span>
              </div>
            </div>

          </div>
        </li>
        <li>
          <div class="li-item">
            <div class="item-logo">
              <img src="../img/storeLogo.png" alt="">
              <div class="visit">访问店铺</div>
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
                <img src="../../../assets/img/shopLogo.png" alt="">
                <span>Jimmys shop</span>
              </div>
            </div>

          </div>
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "featuredModule"
}
</script>

<style scoped lang="scss">
.featured-module{
  width: 100%;
  height: 348px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  .title-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    border-bottom: 1px solid #F0F0F0;
    .title{
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 15px;
        height: 23px;
        margin-right: 10px;
      }
    }
    > h1 {
      cursor: pointer;
      font-size: 14px;
      color: $main-color;
    }


  }

  .seller-wrap{
    flex: 1;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >img{
      width: 210px;
      height: 274px;
      border-radius: 14px;
      margin-right: 18px;
    }
    .store{
      flex: 1;
      height: 274px;
      display: flex;
      align-items: center;

      li{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 290px;
        margin-right: 20px;
        .li-item{
          width: 100%;
          height: 122px;
          background: #FFFFFF;
          box-shadow: 0px 0.924752px 10.1723px rgba(0, 0, 0, 0.09);
          border-radius: 14px;
          padding: 11px 20px;
          display: flex;
          align-items: center;
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
              width: 130px;
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
                width: 130px;
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
                width: 130px;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }

            }

          }
          
        }
      }


    }





  }

}

</style>