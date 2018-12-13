<template>
  <el-popover placement="right" width="400" trigger="click" popper-class="show-msg">
    <el-table :data="gridData">
      <el-table-column width="150" property="date" label="日期"></el-table-column>
      <el-table-column width="100" property="name" label="姓名"></el-table-column>
      <el-table-column width="300" property="address" label="地址"></el-table-column>
    </el-table>
    <el-button slot="reference" style="padding:5px 0px;">
      <slot></slot>
    </el-button>
  </el-popover>
</template>

<script>
  export default {
    name: "PatMsg",
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    }
  };

</script>

<style>
.el-popper.show-msg{
  margin: 10px 0 0 18px;
}
</style>
