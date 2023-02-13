<comment>
/* # 组件注释
* 模块描述：商品组件
*/
</comment>
<template>
<div class="product-module">
  <div class="title-top">
    <div class="title">
      <img src="../img/hot.png" alt="">
      <span>热门商品</span>
    </div>
    <h1>查看今日上新</h1>
  </div>

  <ul class="product-wrap">
    <li @click="productDetails()">
      <div class="shop-info">
        <h2>HUAWEI p60</h2>
        <img src="" alt="">
        <p>HUAWEI P50  | True-Form Dual-Matrix Camera | 6.5”True-Chroma Display | 66W SuperCharge</p>

        <div class="operate">
          <div>
            <img src="../img/shoppingCart.png" alt="">
          </div>
          <div>
            <img src="../img/collection.png" alt="">
          </div>
          <div>
            <img src="../img/contrast.png" alt="">
          </div>
        </div>
      </div>
      <div class="price">$999.00</div>
    </li>
    <li>
      <div class="shop-info">
        <h2>HUAWEI p60</h2>
        <img src="" alt="">
        <p>HUAWEI P50  | True-Form Dual-Matrix Camera | 6.5”True-Chroma Display | 66W SuperCharge</p>

        <div class="operate">
          <div>
            <img src="../img/shoppingCart.png" alt="">
          </div>
          <div>
            <img src="../img/collection.png" alt="">
          </div>
          <div>
            <img src="../img/contrast.png" alt="">
          </div>
        </div>
      </div>
      <div class="price">$999.00</div>
    </li>
  </ul>

</div>
</template>

<script>
export default {
  name: "productModule",

  methods:{
    productDetails(){
      this.$router.push('/productDetails')
    }
  }
}
</script>

<style scoped lang="scss">
.product-module{
  width: 100%;
  height: 358px;
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

  .product-wrap{
    flex:1;
    padding: 0 8px;
    display: flex;
    align-items: center;
    >li{
      width: 204px;
      height: 274px;
      background: #FFFFFF;
      box-shadow: 0px 0.924752px 10.1723px rgba(0, 0, 0, 0.09);
      border-radius: 14px;
      margin-right: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

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
}
</style>