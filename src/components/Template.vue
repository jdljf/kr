
<template>
  <!--row-click 参数是row, event, column-->
  <!-- :data="list" :data中的filter筛选是搜索的关键-->
  <div>
       <!-- 
      <div class="nav-tools">
        <el-button type="primary" size="mini" plain @click="savetemple">文档存模版</el-button>
        <el-button type="success" size="mini" plain @click="savewidget">文档存模版</el-button>
        <el-button type="warning" size="mini" plain @click="showSelectShare">分享</el-button>
      </div>      
      -->
      <el-table  
        ref="navTable" 
        style="width: 100%;"
        :data="list.filter(data => !search || data.name!=null&&data.name.toLowerCase().includes(search.toLowerCase()))"  
        @row-click="callback"
        :highlight-current-row='true'
        empty-text="<暂无数据>"
        @selection-change="handleSelectionChange"
        size="small"
        > 
            <!-- 这是多选 -->
            <el-table-column
              label="序号"              
              type="selection"
              width="40">    
            </el-table-column>

            <el-table-column
              label="序号"              
              type="index"
               width="50">    
            </el-table-column>

            <!-- <el-table-column
              label="最新编辑日期"
              width="130">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column> -->

            <el-table-column
              label="模版名称"
              width="130">
              <template slot-scope="scope" >
                <div slot="reference" class="name-wrapper">
                  <i class="el-icon-document"></i>
                  <span style="margin-left: 10px;color:#303133">{{ scope.row.name }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="权限分配"
              width="80">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <!-- <p>模版类型: {{ scope.row.tag}}</p> -->
                  <p>描述: {{ scope.row.title }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.tag }}</el-tag>
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
                  v-if="templeCtrl"
                  size="mini"
                  @click.stop="handleEdit(scope.$index, scope.row)">导入</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  v-if="templeCtrl"
                  @click.stop="handleDelete(scope.$index, scope.row)"><i class='el-icon-delete'></i></el-button>
              </template>
            </el-table-column>

            <!-- <el-table-column              
              type="expand"
              width="32">    
              <template slot-scope="scope">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="模版名称">
                    <span style="color:#409EFF;">{{ scope.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="模版类型">
                    <span style="color:#409EFF;">{{ scope.row.discribe }}</span>
                  </el-form-item>
                  <el-form-item label="模版描述">
                    <span style="color:#409EFF;">{{ scope.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="所有者">
                    <span style="color:#409EFF;">{{ scope.row.creatorUserId }}</span>
                  </el-form-item>
                  <el-form-item label="创建时间">
                    <span style="color:#409EFF;">{{ scope.row.createTime }}</span>
                  </el-form-item>
                  <el-form-item label="修改时间">
                    <span style="color:#409EFF;">{{ scope.row.lastedTime }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
             -->
          </el-table>
  </div>
  
  
    
</template>

<script>
import funs from '../common/funs';
// import {ajax} from '../common'

// 模版的组件
  export default {
    name: "Template",   
    props:{
        templeCtrl: Boolean,
        list: Array,
        fun: Function,
        savetemple: Function,  
        savewidget: Function, 
        savectrl: Function,   
        ajaxtemple: Function,
        back2font: Function,
        getHtmlContent: Function,
    },
    data() {
      return {
        search: '',
        multipleSelection: [],
        share: 'index' // 这个就是共享的开怪
      }
    },
    mounted(){
      console.log("template",this.savetemple)
      console.log(this.list)
    },
    methods: { 

      // 绑定到表格选项变化时触发记录下来选中哪些
      handleSelectionChange(val) {
        this.multipleSelection = val;
        
        console.log(this.multipleSelection)
      },

      // 点击分享按钮呈现可选的框
      showSelectShare(){     
        console.log("sfdsa") 
        this.share= 'selection'
        // this.$set(this.tableType,'share', !this.tableType.share)
        
        this.$forceUpdate()
      },

      
      handleEdit(index, row) {
        console.log(index, row);
        // 改成保存导入
        // 删除警告
        const replaceWarn= (title,todo)=>{
                this.$prompt(`当前模版 “ ${row.name?row.name:' '} ” ，请输入新的模版名称`, '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        // 规定匹配模式
                        inputPattern: /^[0-9a-zA-Z\u2E80-\u9FFF]{2,23}$/,
                        // 输入的错误信息
                        inputErrorMessage: '名称范围2-10位',
                        // input的初始值
                        inputValue: row.name?row.name:' '
                    }).then(({ value }) => {
                        // // 修改名称
                        // this.list[index].name = value;
                        // // 但是也需要更新一下编辑的时间
                        // this.list[index].date = funs.nowtime();
                        
                        // ajax对接删除之后再重新读回来
                        // this.ajaxtemple('Delete',)

                        todo(value);
                        this.$message({
                            type: 'success',
                            message: '控件名称 “ ' + value + ' ” ，保存成功'
                        });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消'
                    });       
                });
        }

        const updatecommit = (value)=>{
            // 获取数据
            const docContent = this.getHtmlContent();
            const updateData = {
                "templateName": value,
                "htmlContent": docContent.htmlContent,
                "lastModifierUserId": 0,
                "id": row.index   // 这是后端的数据
            }          
            
            this.ajaxtemple('/DocumentTemplate/Update', updateData,"模版数据更新成功", ()=>this.list.splice(index,1,{...this.list[index],...this.back2font(updateData)})
            );
        }
        
        replaceWarn('模版',updatecommit) 
        
      },
      handleDelete(index, row) {
        console.log(index, row); // row就是该行对象
        console.log(this);

        // 删除警告
        const delWarn= (title,todo)=>{
                // window DOM的方法confirm
                this.$confirm(`此操作将永久删除${title}?`, '提示', {        
                    confirmButtonText: '确认提交',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log(this)
                    todo()
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                      })
                  }).catch(() => {
                      this.$message({
                          type: 'info',
                          message: '已取消删除'
                      });          
                  });
                }

        const delcommit = ()=>{
            // 删除TODO
            console.log(row.index)
             // 这里只是改变了临时的list数据，还需要改变local中的数据            
            
            this.ajaxtemple('/DocumentTemplate/Delete', {
                "deleterUserId": 0,
                "id": row.index
              },
              "模版删除成功",
              ()=>this.list.splice(index,1)
            );
        }

        delWarn('模版',delcommit)
       
      },
      // 一个函数的包装
      todo(fun,args,styleString,command){
        // console.log(this)
        return fun(args,styleString,command) // 返回该函数的运行
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      callback(row, event, column) {
        console.log(row)  // 改行的元素
        console.log(event)
        console.log(column)
        // 事件函数直接在这里设置这几个函数就可以读取了，不需要自己传入。
        // 填好对应参数即可
        this.todo(this.fun,row.content,row.styleString,row.command)

        console.log(this.$refs)
        // debugger
        // this.$refs.navTable.$children[0].type="index" // 单向数据流的问题

        // refs绑定好对应的对象就可以运用它的方法(这个会与上面的函数有冲突)
        // this.$refs.navTable.toggleRowExpansion(row)  // 没有设定第二参数就会toggle
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
