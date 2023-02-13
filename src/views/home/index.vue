<template>
  <div class="index-wrap">
    <!--    轮播-->
    <div class="swipe-box">
      <img src="" alt="">
<!--            <swiper-->
<!--                :slides-per-view="1.1"-->
<!--                :slides-per-group="1"-->
<!--                :space-between="10"-->
<!--                :pagination="{ clickable: true }"-->
<!--                :observer="true"-->
<!--                :loop="true"-->
<!--                :centered-slides="true"-->
<!--                :autoplay="{ delay: 10000, disableOnInteraction: true }"-->
<!--                @swiper="onSwiper"-->
<!--                v-if="getBanners.length > 0"-->
<!--            >-->
<!--                <swiperSlide v-for="(item,index) in getBanners"-->
<!--                             class="swiper-item"-->
<!--                             @click="jumpTo(item)"-->
<!--                             :key="index"-->
<!--                >-->
<!--                  <img :src="item.img" alt="">-->
<!--                </swiperSlide>-->
<!--            </swiper>-->
<!--      <img src="" alt="">-->
    </div>
    <!--    商品分类-->
    <div class="categories">
      <div class="classify-top">
        <div class="classify-title">
          <img src="./img/classify.png" alt="">
          <span>商品分类</span>
        </div>
        <h1>查看所有</h1>
      </div>
      <div class="classify-bottom">

      </div>

    </div>

    <div class="advertising-space">
      <img src="./img/bbb.png" alt="">
    </div>

    <!--   商品模块 -->
    <productModule></productModule>
    <div class="advertising-space">
      <img src="./img/bbb.png" alt="">
    </div>
    <productModule></productModule>
    <productModule></productModule>
    <featuredModule></featuredModule>
    <brandHot></brandHot>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue/swiper-vue.js';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import commonImage from '../../../components/common-image/common-image';

// SwiperCore.use([Navigation, Pagination, Autoplay]);

import productModule from "./components/productModule";
import featuredModule from "./components/featuredModule";
import brandHot from "./components/brandHot";
export default {
  name: "index",
  data(){
    return{
      getBanners:[
        {img:require('../../assets/img/uploadPhoto.png')},
        {img:require('../../assets/img/uploadPhoto.png')},
        {img:require('../../assets/img/uploadPhoto.png')},
        {img:require('../../assets/img/uploadPhoto.png')},
      ]
    }
  },
  methods:{
    jumpTo(){

    }
  },
  setup() {
    // const useSwiper = () => {};
    // const onSwiper = swiper => {
    //   console.log(swiper, 'swiper===swiper');
    //   useSwiper.prototype.swiper = swiper;
    // };
    // return {
    //   useSwiper: new useSwiper(),
    //   onSwiper,
    //   modules: [Pagination],
    // };
  },
  components: {
    productModule,
    featuredModule,
    brandHot,

    // Swiper,
    // SwiperSlide,
  }
}
</script>

<style scoped lang="scss">
.index-wrap {
  color: red;

  .swipe-box {
    margin-bottom: 30px;

    > img {
      width: 100%;
      height: 400px;
      background: red;
      border-radius: 14px;
    }

  }

  .categories {
    width: 100%;
    height: 170px;
    background: #FFFFFF;
    border-radius: 14px;
    padding: 0 24px;
    margin-bottom: 30px;

    .classify-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      border-bottom: 1px solid #F0F0F0;

      .classify-title {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #757575;
        font-size: 16px;

        > img {
          width: 17px;
          height: 19px;
          margin-right: 12px;
        }
      }

      > h1 {
        cursor: pointer;
        font-size: 14px;
        color: $main-color;
      }
    }
  }

  .advertising-space {
    width: 100%;
    height: 109px;
    //margin: 30px 0;
    border-radius: 14px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 14px;
    }
  }

}
</style>