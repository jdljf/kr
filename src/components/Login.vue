<template>
  <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="loginForm">
    <el-form-item label="用户名" prop="username">
      <el-input v-model.number="loginForm.username" :clearable="true" autofocus></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="loginForm.password" autocomplete="off" :clearable="true" @keydown.enter.native="submitForm('loginForm')"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      <el-button @click="resetForm('loginForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
  import {
    ajax
  } from '../common'


  export default {
    name: "Login",
    beforeDestroy() {
      // debugger
    },
    data() {
      // 用户名验证
      var checkuserName = (rule, value, callback) => {
        this.passdisable = true;
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }

        // setTimeout(() => {
        // 判断是不是不含中文
        if (new RegExp(/[\u4e00-\u9fa5]/).test(value)) {
          callback(new Error('用户名不支持中文字符'));
        } else if (new RegExp(/\s/).test(value)) {
          callback(new Error('用户名不支持空格'));
        } else if (new RegExp(/[^\x00-\xff]/).test(value)) {
          callback(new Error('用户名不支持双字节字符'));
        } else if (new RegExp(/^[1-9^\d#\$\*\+@!%\^&-=]/).test(value)) {
          callback(new Error('用户名必须非数字或特殊符号开头'))
        } else {
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
          if (this.loginForm.password !== '') {
            // validateField 对部分表单字段进行校验的方法
            // this.$refs.loginForm.validateField('rightpass');  // 这里是验证与再输入时是否相符的             
          }
          callback();
        }
      };

      console.log(this) //config.keyCodes      

      return {
        passdisable: true,

        // 这里是数据
        loginForm: {
          username: '',
          password: '',
          // 验证用的数组
          rightpass:{},
        },
        rules: {
          password: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          username: [{
            validator: this.checkUser,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      asyncAjax(callback) {
        const checkUser = async (inputJson)=>{
          await ajax.post(
            '/User/Login',
            /**
             * {
                "username": "string",
                "password": "string"
                }
             */
            JSON.stringify(inputJson) // 传json
          ).then((res) => {
            console.log('用户验证成功！', res.data.data)
            // 转换一下数据
            const newObj = {};
            newObj[inputJson["username"]] = inputJson["password"];
            this.loginForm.rightpass={...newObj};
            // 设定sessionStorage
            sessionStorage.setItem('token', res.data.data[0].token);
            if(callback){
              callback()
            }
          }).catch((err) => {
            console.log(err)
          })
        }

        // 正式请求
        checkUser({
          "username": this.loginForm.username,
          "password": this.loginForm.password
        })
      },
      submitForm(formName) {
        const _this = this;
        this.asyncAjax(()=>{
            this.$refs[formName].validate((valid) => {
                if (valid) { // 当本地验证都输入好
                  // debugger
                  if (_this.loginForm.rightpass[_this.loginForm.username] === _this.loginForm.password) {
                    console.log('登录成功');
                    _this.$router.push({
                      path: '/home'
                    })
                    _this.loginForm.password = '';
                    _this.$refs[formName].clearValidate('password') // 清空指定pass的验证结果  
                    return true;                    
                  } else{
                    _this.$message.error('抱歉您输入密码不正确');
                  }   
                } else {
                  _this.$message.error('抱歉您输入密码不正确');
                  return false;
                }                   
            })
        })
                
   
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>


<style scoped>
  .loginForm {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 80px 10px 20px;
    background-color: rgba(255, 255, 255, 0.9);
  }

</style>
