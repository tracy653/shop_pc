<template>
  <router-view></router-view>
  <customerService></customerService>
</template>

<script>
import { mapMutations } from 'vuex';
import customerService from "./components/customerService/customerService";
export default {
  name: 'App',
  methods:{
    ...mapMutations({
      setData:'SET_DATA'
    })
  },
  components:{
    customerService
  },
  created() {
    this.setData({ key: 'currentPath', value: this.$route.path });
  },
  watch:{
    '$route.path'(newVal,oldVal){
      this.setData({ key: 'currentPath', value: newVal });
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: PingFangSC-Semibold, PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  /*min-height: 100vh;*/
  background: #ffffff;
  height: 100%;
  color: #fff;
}
</style>
