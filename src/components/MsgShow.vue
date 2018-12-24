<template>
    <el-popover 
      width="auto"
      placement="left" 
      trigger="manual"      
      v-model="visible"
      popper-class="pop-style"
      >
      <div class="model" v-html="htmlContent"></div>
      <!-- <el-button slot="reference"></el-button> -->
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
  padding: 24px;  
}
.el-popover.pop-style{
  padding:0;
  margin: 24px 16px 24px 24px;
  background-color: #ffffffd5;
  border-color: transparent;
  /* color: white; */
}
</style>
