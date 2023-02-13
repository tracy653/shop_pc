<template>
  <div class="store-produce-modal">
    <div class="top">
      <h1>{{title}}</h1>
      <span>查看更多</span>
    </div>
    <div class="produce-wrap">
      <ul class="">
        <li v-for="i in 4" :key="i" @click="productDetails()">
          <div class="shop-info">
            <h2>HUAWEI p60</h2>
            <img src="" alt="">
            <p>HUAWEI P50  | True-Form Dual-Matrix Camera | 6.5”True-Chroma Display | 66W SuperCharge</p>
            <div class="operate" v-if="false">
              <div>
                <img src="../../home/img/shoppingCart.png" alt="">
              </div>
              <div>
                <img src="../../home/img/collection.png" alt="">
              </div>
              <div>
                <img src="../../home/img/contrast.png" alt="">
              </div>
            </div>
          </div>
          <div class="price">$999.00</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "storeProduceModal",
  data(){
    return{}
  },
  props:{
    title:{
      type:String,
      default:'-'
    }
  },
  methods:{
    productDetails(){
      this.$router.push('/productDetails')
    }
  }
}
</script>

<style scoped lang="scss">
.store-produce-modal {
  margin: 18px 0;
  width: 100%;
  padding: 0 15px;
  .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    color:#757575;
    font-size: 16px;
    h1{
      color: $main-color;
    }
    span{
      cursor: pointer;
    }
  }
  .produce-wrap{
    width: 100%;
    ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      //padding: 20px 20px 20px 40px;
      >li{
        width: 23%;
        height: 274px;
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
  }
}

</style>