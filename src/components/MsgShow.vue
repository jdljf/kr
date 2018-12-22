<template>
  <div>
    <el-popover placement="right" width="400" trigger="click">
      <div v-html="htmlContent"></div>
      <!-- <el-button slot="reference">click 激活</el-button> -->
    </el-popover>
    <!-- 为了包裹别的内容预留 -->
    <slot></slot>
  </div>

</template>



<script>
  export default {
    name: 'MsgShow',
    data() {
      return {

      };
    },
    props: {
      htmlContent: String,
    }
  };

</script>
