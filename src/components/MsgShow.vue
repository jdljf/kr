<template>
    <el-popover 
      placement="left" 
      width="400" 
      trigger="manual"      
      v-model="visible">
      <div v-html="htmlContent"></div>
      <!-- <el-button slot="reference"></el-button> -->
    </el-popover>
</template>



<script>
  export default {
    name: 'MsgShow',
    data() {
      return {
          
      };
    },
    props: {
      visible: Boolean,
      showHide: Function,
      htmlContent: String,
    }
  };

</script>

<style scoped>
.show-html{
    flex: 1;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
}
</style>
