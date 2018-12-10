<template>
    <div :style="toolStyle">
        
        <!-- 第一层按钮 -->
        <el-menu 
            default-active="" 
            class="el-menu-vertical"            
            :collapse="isCollapse"            
            v-for="(item,index) in toolBtns"
            :key="index"
            >        
          <!-- el-submenu是含子菜单的菜单项。submenu 子菜单 -->
          <el-submenu :index="index+1+''" :hide-timeout="0" :show-timeout="0">              
              <template slot="title">
                <!-- template中可以用click, 为了点击的区域变大而用样式定位来实现-->
                <div @click="addCtrl(item.type,item.name, `krcd-${item.type.toLowerCase()}-${index}`)" style="position: absolute;left: 0;right: 0;">
                  <i :class="item.iconCls"></i>
                  <span slot="title">{{item.name}}</span>
                </div>                
              </template>

              <!-- 在空的未知 -->  <!-- 下面的高度因为有border的问题所以需要修改下 --> 
              <el-menu-item-group                    
                  v-for="(dicItem,idx) in item.dic"
                  :key="idx"
                  :style="dicStyle"
                >
                <!-- 这是分组的说明 -->
                <span slot="title">{{dicItem.group}}</span>

                <!-- gutter是间距 -->
                <el-row :gutter="12" 
                  style="padding: 8px 12px;" @click="clickItem" >
                  <el-col :span="24" v-for="(groupItem,groupIdx) in dicItem.groupItems"
                  :key="(index+1)+'-'+(groupIdx+1)"                 
                  >                   
                    <el-card shadow="hover"  style="margin-bottom:12px;" class="card-style">                      
                      <el-menu-item :index="(index+1)+'-'+(groupIdx+1)" @click="addDic(groupItem.obj)" v-html="`<span style='color:#999;padding-right:8px;'>${groupItem.name} | </span>`+groupItem.obj.show" ></el-menu-item>
                    </el-card>
                  </el-col>                  
                </el-row>

                <!-- 这是具体项 -->
                <!-- <el-menu-item   
                  v-for="(groupItem,groupIdx) in dicItem.groupItems"
                  :key="groupIdx"

                  :index="groupIdx+1+''"
                  @click="clickItem"
                  >{{groupItem.name}}
                 
                </el-menu-item> -->

              </el-menu-item-group>

              <!-- <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu> -->
          </el-submenu>
        
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
        // btnStyle: btnStyle,
        // widgetBtnStyle: widgetBtnStyle
      };
    },
    // 根据toolBtns来计算样式
    computed:{
      dicStyle:function(){
        return `
            box-sizing: border-box;
            width: 600px;
            height:${this.toolBtns.length*56-this.toolBtns.length*2+2}px;
            overflow: hidden;
            overflow-y: auto;
        `
      } 
    },
    props: {
      addCtrl: Function,  // 通过props传入
      showHide: Boolean,
      toolStyle: Object,
      toolBtns: Array,    // 工具的数组
      self: Object, // 这个就是this
    },  
    methods: {
      // 点击展开函数
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      // 点击收起函数
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // 点击
      clickItem(){
        console.log("大佬")
      },
      // 点击插入对应字典
      addDic(item){
        console.log(item)
        // 调用对应的插入方法
        // this.self.krcd.execCommand('inserthtml',item)
        // this.self.onOff = {...this.self.off};

        this.self.krcd.insertControl(
          item.newDiv.getCtrlElement(),  //  获取会对应的Element
          item.newDiv.getOpt()     //  获取会对应的opt
        )

        this.self.saveAble = null; // 改变工具的状态为默认值
      },
      
    }
  }
</script>

<style>
/* 这是用来清楚卡片的内padding */
.card-style>div{
  padding: 0  
}
</style>
