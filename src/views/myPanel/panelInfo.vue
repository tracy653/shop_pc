<comment>
/* # 组件注释
* 模块描述： 个人中心 我的面板
*/
</comment>
<template>
<div class="panel-info">
  <div class="information-options">
    <div class="user-info">
      <div class="avatar">
        <img src="../../assets/logo.png" alt="">
        <div class="relevant">
          <div class="name">
            <p>小店铺小店铺</p>
            <i class="iconfont icon-bianji"></i>
          </div>
          <div class="level">
            <img src="./img/crown.png" alt="">
            <span>普通会员</span>
          </div>
          <p class="number">439483...3443</p>
        </div>
      </div>
      <div class="e-mail">邮箱：12123232312@qq.com</div>
    </div>
    <div class="my-options">
      <div class="my-account">
        <div class="title">
          <img src="./img/account.png" alt="">
          <span>我的账户</span>
        </div>
        <h1 v-for="item in myTab"
            :class="item.url ==currentPath ? 'active' : ''"
            @click="switchTab(item)"
            :key="item.type">{{ item.title }}</h1>
      </div>
      <div v-for="item in optionsTab" class="options-item"
          :class="item.url ==currentPath ? 'active' : ''"
          @click="switchTab(item)"
          :key="item.type">
          <img :src="item.img" alt="">
          <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
  <div class="panel-wrap">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "panelInfo",
  data(){
    return{
      myTab:[
        {title:'用户资料',url:'/panelInfo/userInfo',type:1},
        {title:'地址管理',url:'/panelInfo/addressManage',type:2},
        {title:'密码管理',url:'/panelInfo/passwordManage',type:3},
        {title:'隐私设置',url:'/panelInfo/privacyManage',type:4},
        {title:'通知中心',url:'/panelInfo/notifyCenter',type:5},
      ],

      optionsTab:[
        {title:'购买历史',url:'/panelInfo/buyHistory',type:1,img:require('./img/records.png')},
        {title:'我的收藏',url:'',type:2,img:require('../../assets/img/favorite.png')},
        {title:'我的钱包',url:'/panelInfo/myWallet',type:3,img:require('./img/wallet.png')},
        {title:'支持的票',url:'',type:4,img:require('./img/vote.png')},
        {title:'管理配置文件',url:'',type:5,img:require('./img/deploy.png')},
      ]
    }
  },
  computed:{
    ...mapState([
        'currentPath'
    ])
  },
  methods:{
    switchTab(item){
      this.$router.push(item.url)

    }

  }
}
</script>

<style scoped lang="scss">
.panel-info{
  width: 100%;
  min-height:600px;
  background: #FFFFFF;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  .information-options{
    width: 261px;
    border-right: 1px solid #F0F0F0;
    .user-info{
      min-height: 146px;
      background: linear-gradient(180deg, #F6412D 0%, #FE6233 100%);
      border-radius: 14px 0px 0px 0px;
      padding: 30px 20px 10px;
      .avatar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .relevant{
          font-size: 16px;
          color: #fff;
          flex: 1;
          margin-left: 10px;
          .name{
            display: flex;
            align-items: center;
            justify-content: space-between;
            p{
              width: 80%;
              line-height: 18px;
            }
            i{
              font-size: 28px;
            }
          }
          .level{
            display: flex;
            align-items: center;
            font-size: 14px;
            >img{
              width: 17px;
              height: 17px;
            }

          }

          .number{
            margin-top: 6px;
            font-size: 12px;
            color: #F2FF5A;
          }

        }
      }
      .e-mail{
        width: 100%;
        text-align: center;
        margin-top: 15px;
        color: #FFDCD4;
        font-size: 14px;
      }
    }

    .my-options{
      padding: 20px 0 0 30px;
      font-size: 14px;
      color: #333333;
      .my-account{
        .title{
          display: flex;
          align-items: center;
          margin-bottom: 11px;
          img{
            width: 22px;
            height: 22px;
            margin-right: 5px;
          }
        }
        h1{
          margin-bottom: 15px;
          color: #A3A3A3;
          cursor: pointer;
          padding-left: 27px;
        }
        .active{
          color: $main-color;
        }
      }
      .options-item{
        display: flex;
        align-items: center;
        margin: 20px 0 22px 0;
        cursor: pointer;
        img{
          width: 19px;
          height: 19px;
          margin-right: 5px;
        }
      }
      .active{
        color: $main-color;
      }
    }
  }
  .panel-wrap{
    flex: 1;
    //background: red;
  }
}
</style>