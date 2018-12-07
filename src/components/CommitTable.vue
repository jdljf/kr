<template>
    <el-dialog title="动态模版保存" :visible.sync="commitShow.OnOff" :show-close="true" >
        <el-form :model="saveForm" status-icon :rules="rules" ref="saveForm" label-width="200px" class="demo-saveForm">            
            <el-form-item label="描述" prop="describe" label-width="100px">
                <el-input v-model.trim="saveForm.describe"></el-input>
            </el-form-item>
            <el-form-item label="命令" prop="command" label-width="100px">
                <el-input v-model.trim="saveForm.command"></el-input>
            </el-form-item>
            <el-form-item label="归属表格" prop="classified" label-width="100px">
                <el-select v-model="saveForm.classified" placeholder="请选择表格类型" style="width:100%;">
                    <el-option v-for="(item,index) in docmentTypes" :key="index" :label="item.typeName" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label-width="0">
                <el-button type="primary" @click="submitForm('saveForm')">提交</el-button>
                <el-button @click="resetForm('saveForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>


<script>
  export default {
    name: 'CommitTable',
    props:{
      commitShow: Object,   // 参数传入来控制是否展开
      returnCommitData: Function  //  函数返回数据，传入data，返回父级
    },
    data() {
      var checkCommand = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('命令不能为空'));
        }  
        callback();     
      };
      var checkDescribe = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('描述不能为空'));
        }  
        callback();  
      };
      var checkClassified = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('归属的表格必选'));
        }   
        callback();
      };
      return {
        // dialogFormVisible: this.commitShow, // 用于显示隐藏
        // 这里应该从病人列表中的文档相关的接口来取
        docmentTypes:[
            {
                id: 1, 
                typeName: "病案首页",
                isSingle: true
            }
            ,
            {
                id: 2, 
                typeName: "24小时入院记录",
                isSingle: false
            }
            ,
        ]
        ,  
        saveForm: {
          describe:'',
          command: '',
          classified: ''  , // 归属于
        },
        rules: {
          describe: [
            { validator: checkDescribe, trigger: 'blur' }
          ],
          command: [
            { validator: checkCommand, trigger: 'blur' }
          ],
          classified: [
            { validator: checkClassified, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => { 
          if (valid) {
            this.returnCommitData(this.saveForm)  // 将整个数据传给父级
            this.$notify({
              title: '成功',
              message: '已成功保存一份新的数据',
              type: 'success',
              duration: 3000 // 测定延时时间              
            });
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
          this.resetForm('saveForm')
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },      
    },   
  }
</script>