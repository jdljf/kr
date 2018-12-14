<template>
  <el-table
    size="mini"
    :data="tableData2"
    style="width:207px"
    :fit="false"
    @row-click="rowClick"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="icon"
      label=""
      width="32">      
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="91">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="84">
    </el-table-column>    
  </el-table>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (row.state===1) {
          return 'warning-row';
        } else if  (row.state===2)  {
          return 'success-row';
        }
        return '';
      },

      rowClick(row, event, column) {
        // console.log(row)  // 改行的元素
        // console.log(event)
        // console.log(column)
        
        // this.getPatMsg(patId,fileTheme)
        this.getPatMsg()

      }
    },
    props:{
        getPatMsg: Function,
    },
    data() {
      return {
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          icon: <i class="el-icon-loading"></i>,
          state: 0,  // 0代表默认, 1代表warning, 2代表sucess
        }, {
          date: '2016-05-04',
          name: '王小虎',
          icon: <i class="el-icon-loading"></i>,
          state: 0, 
        }, {
          date: '2016-05-01',
          name: '王小虎',
          icon: <i class="el-icon-loading"></i>,
          state: 1, 
        }, {
          date: '2016-05-03',
          name: '王小虎',
          icon: <i class="el-icon-loading"></i>,
          state: 0, 
        }],

        // 警告行的index
        warningIndex:[
            1
        ]
        ,
        // 警告行的index
        successIndex:[
            3
        ]
      }
    }
  }
</script>


<style scoped>
.el-table th>.cell{
    text-align: center;
}
    
</style>
