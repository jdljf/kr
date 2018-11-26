
<template>
  <!--row-click 参数是row, event, column-->
  <!-- :data="list" :data中的filter筛选是搜索的关键-->
  <el-table   
    style="width: 100%;"
    :data="list.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    @row-click="callback"
    >
          
        <el-table-column
          label="最新编辑日期"
          width="130">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="模版名称"
          width="150">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>模版: {{ scope.row.name }}</p>
              <p>归属: {{ scope.row.scope }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="146">
          <!-- 标题处改为input -->
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  
    
</template>

<script>
import funs from '../common/funs';

// 模版的组件
  export default {
    name: "Models",   
    props:{
        list: Array,
        fun: Function,
    },
    data() {
      return {
        search: ''       
      }
    },
    mounted(){
        // console.log(this.list)
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        // 编辑TODO
         const editWarn= ()=>{
                this.$prompt(`当前模版 “ ${row.name} ” ，请输入新的模版名称`, '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        // 规定匹配模式
                        inputPattern: /^[\u4E00-\u9FA5a-zA-Z0-9_]+$/,
                        // 输入的错误信息
                        inputErrorMessage: '控件名称不能含由空格或特殊符号'
                    }).then(({ value }) => {
                        // 修改名称
                        this.list[index].name = value;
                        // 但是也需要更新一下编辑的时间
                        this.list[index].date = funs.nowtime();

                        localStorage.setItem('moban',JSON.stringify(this.list))
                        this.$message({
                            type: 'success',
                            message: '控件名称 “ ' + value + ' ” ，保存成功'
                        });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });       
                });
         }
         editWarn()
        
      },
      handleDelete(index, row) {
        console.log(index, row); // row就是该行对象

        // 删除警告
        const delWarn= (title,todo)=>{
                // window DOM的方法confirm
                this.$confirm(`此操作将永久删除${title?('                                                                                                                                                                                                                             该'+title):""}, 是否继续?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    todo();
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
                }

        const delcommit = ()=>{
            // 删除TODO
            this.list.splice(row,1) // 这里只是改变了临时的list数据，还需要改变local中的数据
            localStorage.setItem('moban',JSON.stringify(this.list))
        }

        delWarn('模版',delcommit)
       
      },
      // 一个函数的包装
      todo(fun,args,styleString){
        return fun(args,styleString) // 返回该函数的运行
      },
      callback(row, event, column) {
        console.log(row)  // 改行的元素
        console.log(event)
        console.log(column)
        // 事件函数直接在这里设置这几个函数就可以读取了，不需要自己传入。
        // 填好对应参数即可
        this.todo(this.fun,row.content,row.styleString)
      }
    }
  }
</script>

<style>
/* 为了覆盖框架默认的样式 */
.el-table .cell {
  display: flex;
}
</style>
