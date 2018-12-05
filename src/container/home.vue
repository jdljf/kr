<template>  
  <el-container style="height: 100%; border: 1px solid #eee">    
        <el-header class="el-header"  style="height: 32px;">我是标题</el-header>
        <el-main>
            <krcdContainer/>
        </el-main>
  </el-container>
</template>

<script>
import krcdContainer from './krcdContainer'
import {ajax} from '../common'

import Clipboard from 'clipboard'; // 引入插件，用于获取选中文本来复制


import funs from '../common/funs'

export default {
  name: 'HomeBox',
  components:{
    krcdContainer
  },
  props: {
    
  },
  data(){
      return{
     
      
      }
  },
  methods:{
      
  }
}


</script>

<style>
.el-header {
    background-color: #409EFF;
    color: #fff;
    line-height: 32x;   
  }
  .el-main{
      padding:0
  }
</style>

