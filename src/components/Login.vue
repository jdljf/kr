<template>
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="loginForm">
        <el-form-item label="用户名" prop="user">
            <el-input v-model.number="loginForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="loginForm.pass" autocomplete="off" :disabled="passdisable"></el-input>
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>


<script>
// import Router from 'vue-router'
  export default {
    name: "Login",
   
    data() {
        // 用户名验证
      var checkUser = (rule, value, callback) => {
        this.passdisable = true;
        if (!value) {          
          return callback(new Error('用户名不能为空'));
        }

        // setTimeout(() => {
           // 判断是不是不含中文
          if (new RegExp(/[\u4e00-\u9fa5]/).test(value)) {
            callback(new Error('用户名不支持中文字符'));
          } else if(new RegExp(/\s/).test(value)){
            callback(new Error('用户名不支持空格'));
          } else if(new RegExp(/[^\x00-\xff]/).test(value)){
            callback(new Error('用户名不支持双字节字符'));
          } else if(new RegExp(/^[1-9^\d#\$\*\+@!%\^&-=]/).test(value)){
            callback(new Error('用户名必须非数字或特殊符号开头'))
          } else{
            this.passdisable = false;
            callback();
          }
        // }, 0);
      };

      // 密码验证的方法
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginForm.pass !== '') {
            // validateField 对部分表单字段进行校验的方法
            // this.$refs.loginForm.validateField('rightpass');  // 这里是验证与再输入时是否相符的             
          }
          callback();
        }
      };
      
      
      return {
        passdisable: true,

        // 这里是数据
        loginForm: {
          user: '',
          pass: '',          
          // 验证用的数组
          rightpass: {
            "kremr":'0000' 
          }         
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],          
          user: [
            { validator: checkUser, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {       
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {   
          if (valid){  // 当值验证true
            if(this.loginForm.rightpass[this.loginForm.user]===this.loginForm.pass){
              console.log('登录成功');  
              this.$router.push({ path: `/home` })
              return true;
            }
            this.$message.error('抱歉您输入密码不正确');
            this.loginForm.pass = '';
            this.$refs[formName].clearValidate('pass')  // 清空指定pass的验证结果            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


<style scoped>
.loginForm{
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 80px 10px 20px ;
  background-color: rgba(255, 255, 255, 0.9); 
}
</style>
