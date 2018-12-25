
<template>
  <!--row-click 参数是row, event, column-->
  <!-- :data="list" :data中的filter筛选是搜索的关键-->
    <div>
       <!-- <MsgShow :htmlContent="templatehtmlContent" :visible="visible"></MsgShow>  -->
       <el-table  
        ref="navTable" 
        :data="list.filter(data => !search || data.name!=null&&data.name.toLowerCase().includes(search.toLowerCase()))"          
        :highlight-current-row='true'
        @current-change="currentChange"
        empty-text="<暂无数据>"
        @selection-change="handleSelectionChange"
        size="small"
        @row-click="show"
        @row-dblclick="callback"
        >
        <!-- @cell-mouse-enter="show" -->
        <!-- @cell-mouse-leave="hide" -->
            
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
              width="150">
              <template slot-scope="scope" >
                <div slot="reference" class="name-wrapper">
                  <i class="el-icon-document"></i>
                  <span style="margin-left: 10px;color:#303133">{{ scope.row.name }}</span>
                </div>
              </template>
            </el-table-column>
            <!-- <el-table-column
              label="权限分配"
              width="20">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p style="width:300px;height:300px;overflow:auto;"><img style="width:100%;height:auto;" :src="scope.row.canvas" alt="图片"></p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.tag }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column> -->
            <el-table-column label="操作" width="146">
              <!-- 标题处改为input -->
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <template slot-scope="scope">
                <!-- <el-button
                  size="mini"
                  type="danger"
                  v-if="templeCtrl"
                  @click.stop="callback(scope.row)">打开</el-button> -->
                <el-button
                  v-if="templeCtrl"
                  size="mini"
                  @click.stop="handleEdit(scope.$index, scope.row)">保存</el-button>
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
import MsgShow from '@/components/MsgShow';
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
        index: Number,
        getClickHtmlContent: Function,
        changeVisible: Function,
        setHTML:Function
    },
    components:{
      // MsgShow
    },
    data() {
      return {
        search: '',
        multipleSelection: [],
        share: 'index', // 这个就是共享的开怪
        chosedrowIndex: null,
        clickRow: null,
      }
    },
    updated(){
      this.$refs.navTable.setCurrentRow(this.list[this.chosedrowIndex]);
    },
    methods: { 
      show(row, event, column){
        if(row!==this.clickRow){          
          this.changeVisible(1);
          this.getClickHtmlContent(row.name, row.content); // 将当前的html存起来
          this.clickRow = row;
        }else{
          this.changeVisible(0);
          this.getClickHtmlContent(row.name, row.content); // 将当前的html存起来
          this.clickRow = null;
        }
      },
      showHide(row, column, cell, event){
        this.getClickHtmlContent(row.content); // 将当前的html存起来
        // console.log("展示")
        this.changeVisible();
      },
      hide(row, column, cell, event){
        this.changeVisible(0);
        // this.getClickHtmlContent(row.content); // 将当前的html存起来
        // console.log("隐藏")
       
      },
      // 绑定到表格选项变化时触发记录下来选中哪些
      handleSelectionChange(val) {
        this.multipleSelection = val;        
        console.log(val)
      },

      // 点击分享按钮呈现可选的框
      showSelectShare(){    
        this.share= 'selection'
        // this.$set(this.tableType,'share', !this.tableType.share)
        
        // this.$forceUpdate()
      },
      
      // 点击的点亮并变化时触发的事件
      currentChange(currentRow, oldCurrentRow){  
        // debugger      
        // this.chosedrowIndex = currentRow; // 但是当点选替换的时候，它会取消点亮
      },

      
      handleEdit(index, row) {
        console.log(index, row);
        // 修改已选中的行数
        this.chosedrowIndex = index;
        
        // 改成保存导入
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

        const updatecommit = (url,value)=>{
            // 获取数据
            const docContent = this.getHtmlContent();
            const updateData = {
                "templateName": value,
                "code": value,
                "htmlContent": docContent.htmlContent,
                "lastModifierUserId": 0,
                "id": row.index   // 这是后端的数据
            }                      
            this.ajaxtemple(url, updateData,"模版数据更新成功", ()=>{
                this.list.splice(index,1,{...this.list[index],...this.back2font(updateData)})   
              }

            );
        }
        
        // replaceWarn('模版',updatecommit) 
        switch(this.index){
              case 0:
                replaceWarn('文档模版', (value)=>updatecommit('/DocumentTemplate/Update', value))
                break
              case 1:
                replaceWarn('段落模版', (value)=>updatecommit('/ParagraphTemplate/Update', value))
                break
              case 2:
                replaceWarn('动态模版', (value)=>updatecommit('/ElementTemplate/Update', value))
                break
        }

        
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
                    todo()  // 传入tab的编号
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

        console.log(this.index)
        // DocumentTemplate、ElementTemplate、ParagraphTemplate
        const delcommit = (url)=>{
            // 删除TODO
            // console.log(row.index)
            // 这里只是改变了临时的list数据，还需要改变local中的数据            
            
            this.ajaxtemple(url, {
                "deleterUserId": 0,
                "id": row.index
              },
              "模版删除成功",
              ()=>{
                this.list.splice(index,1) // 改变当前数据
                this.hide() // 隐藏预览
                this.setHTML('')  // 重置页面数据
                }

            );
        }
        // 判断运行的函数
        switch(this.index){
              case 0:
                delWarn('文档模版', ()=>delcommit('/DocumentTemplate/Delete'))
                break
              case 1:
                delWarn('段落模版', ()=>delcommit('/ParagraphTemplate/Delete'))
                break
              case 2:
                delWarn('动态模版', ()=>delcommit('/ElementTemplate/Delete'))
                break
        }
      },
      // 一个函数的包装
      todo(fun,args,styleString,command){
        // console.log(this)
        return fun(args,styleString,command) // 返回该函数的运行
      },
      // 设置选中的行
      setCurrent(row) {
        // debugger
        this.$refs.navTable.setCurrentRow(row);
      },
      callback(row,event){  
        
        this.changeVisible(0);
        this.clickRow = null;

        this.getClickHtmlContent(row.content); // 将当前的html存起来

        // 事件函数直接在这里设置这几个函数就可以读取了，不需要自己传入。
        // 填好对应参数即可
        this.todo(this.fun,row.content,row.styleString,row.command)
        
      }
    }
  }
</script>

<style>
/* 为了覆盖框架默认的样式 */
.el-table .cell {
  display: flex;
}
.name-wrapper{
  height: 45px;
  display: flex;
  align-items: center;
}

</style>
