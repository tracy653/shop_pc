<comment>
  /* # 组件注释
  * 模块描述： lang
  */
</comment>
<template>
  <div class="lang-wrapper">
    <el-dropdown popper-class="lang-dropdown" @command="handleCommand" placement="top-start">
      <span class="el-dropdown-link">
        <img src="" alt="">
        {{itemData ?  itemData.text : 'sss'}}
        <el-icon class="el-icon--right">
          <arrow-down/>
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(item,index) in langList"  :command="item" :key="index">
            <img src="" alt="">
            <span>{{item.text}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
   <!-- <el-select v-model="langValue"
               @change="changeSelect"
               popper-class="lang-select">
      <template #prefix>
        <img src="" alt="">
        <span>{{langValue}}</span>
      </template>
      <el-option-group label="" >
        <el-option label="+22" value="2" >
          <img src="./img/china.png" alt="">
          <span>+22</span>
        </el-option>
        <el-option label="+21" value="1" >
          <img src="./img/china.png" alt="">
          <span>+21</span>
        </el-option>
        <el-option label="+23" value="3" >
          <img src="./img/china.png" alt="">
          <span>+23</span>
        </el-option>
      </el-option-group>
    </el-select>-->
  </div>
</template>

<script>
  export default {
    name: 'lang',
    data() {
      return {
        langValue:'',
        langList:[
          {text:'中文',icon:'1',value:'cn'},
          {text:'英文',icon:'1',value:'cn'},
        ],
        itemData:null,

      }
    },
    components: {},
    watch: {},
    methods: {
      handleCommand(val){
        console.log(val,'sssss');
        this.itemData = val;
      },
      changeSelect(val){
        console.log(val,'国旗');

      }
    },
    computed: {},
    created() {
    },
    mounted() {
    },
  }
</script>

<style scoped lang="scss">
.lang-wrapper{
  color:#fff;
  :deep(.el-dropdown){
    color:#fff;
    .el-dropdown-link{
      display: flex;
      align-items: center;
      img{
        width:25px;
        height:25px;
        border:1px #fff solid;
        margin-right: 7px;
        border-radius: 50%;
      }
    }
  }


}
</style>
