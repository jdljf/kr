<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <!-- <span contenteditable="false" :style="toolStyle">
            <span 
                v-for="(item,index) in toolBtns"
                :key="index"         
                :index="index"
                :style="item.type==='WIDGET'?widgetBtnStyle:btnStyle" 
                @click="addCtrl(item.type,item.name, `krcd-${item.type.toLowerCase()}-${index}`)"
                readonly="readonly"
            >{{item.name}}</span>
        </span> -->
        <el-menu default-active="1-4-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu>
    </div>
</template>

<style>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    name: 'NavMenu',
    data() {
      return {
        isCollapse: true,  // 设置是否折叠
        btnStyle: btnStyle,
        widgetBtnStyle: widgetBtnStyle
      };
    },
    props: {
      addCtrl: Function,  // 通过props传入
      showHide: Boolean,
      toolStyle: Object,
      toolBtns: Array,    // 工具的数组
    },  
    methods: {
      // 点击展开函数
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      // 点击收起函数
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>