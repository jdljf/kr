<template>
  <el-button type="text" @click="open2()">提示删除的按钮</el-button>
</template>

<script>
  export default {
    data(){
        return{
            // 删除警告
            delWarn: (title)=>{
                // window DOM的方法confirm
                this.$confirm(`此操作将永久删除${title?(该+title):""}, 是否继续?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
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
                },
            editBox: ()=>{
                this.$prompt('请输入邮箱', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        // 规定匹配模式
                        inputPattern: /^[0-9a-zA-Z]+$/,
                        // 输入的错误信息
                        inputErrorMessage: '控件id必须是英文与数字的组合'
                    }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: value + '保存成功'
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });       
                });
            }
        }
    }
}
      