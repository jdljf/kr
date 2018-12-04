<template>  
  <el-container class="home-box">
      
    <el-aside class="widget-list">
      <!-- <button @click="editWin">sdfdsfds</button> -->
      <Widgets :fun="patlistOnoff" type="pat-list" :list="patlist">
          <Tree :list="patlist"></Tree>
      </Widgets>      
    </el-aside>
    
    <el-container>
        <el-header></el-header>
        <el-main>
            <krcdContainer/>
        </el-main>
    </el-container>
    
  </el-container>
</template>

<script>
import Widgets from '../components/Widgets'
import krcdContainer from './krcdContainer'
import Tree from '../components/Tree'
import {ajax} from '../common'

import Clipboard from 'clipboard'; // 引入插件，用于获取选中文本来复制


import funs from '../common/funs'

import tabContainer from './tabContainer'

export default {
  name: 'Home',
  extends: krcdContainer,
  props: {
    
  },
}


</script>
