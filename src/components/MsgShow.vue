<template>
    <el-popover 
      width="auto"
      placement="left" 
      trigger="manual"      
      v-model="visible"
      popper-class="pop-style"
      >
      预览模版：<el-tag>{{htmlContent}}</el-tag>
      <!-- <el-button size="mini">导入</el-button> -->
    </el-popover>
</template>

<script>
  export default {
    name: 'MsgShow',
    data() {
      return {
          popoverstyle: `
            width:auto;
          `
      };
    },
    props: {
      visible: Boolean,
      showHide: Function,
      htmlContent: String,
    }
  };

</script>

<style>
.model{
  display:flex;
  align-items: center;
}
.el-popover.pop-style{
  box-sizing: border-box;
  z-index: 1111;
  position: absolute;
  left: 208px;
  right: 0px;
  top: 144px;
  height: 60px;
  background-color: rgb(255, 255, 255);
  overflow: auto;
  margin: 12px;
}
</style>
