<template>
<div class="no-data">
  <img src="../../assets/img/noData.png" alt="">
  <span>{{hint}}</span>
</div>
</template>

<script>
export default {
  name: "noData",
  data(){
    return{

    }
  },
  props:{
    hint: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style scoped lang="scss">
.no-data{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  color: #666666;
  img{
    width: 77px;
    height: 70px;
    margin-bottom: 16px;
  }

}

</style>