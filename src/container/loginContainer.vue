<template>
    <div class="login-box" :style="imgsrc">
        <div class="login-mid-box">            
            <div class="title-box">
                <img :src="logosrc" alt="康软LOGO">
                <div class="title">
                    <span  class="chn">康软|电子病历</span>
                    <span class="eng">H-SOFT | Electronic Medical Record</span>
                </div>                
            </div>
            <Login class="login"/>
        </div>        
    </div>
</template>



<script>
import Login from '../components/Login';

const src = require('../assets/login.png');
const logo = require('../assets/logo.png');

export default {  
    name:'loginContainer', 
    components:{
        Login 
    },
    data(){
        return{
            imgsrc: `background-image:url(${src}); background-repeat:no-repeat; background-size:120% auto;-moz-background-size:120% auto;background-position: 60% 60%`,
            logosrc: logo
        } 
    }
}
</script>


<style scoped>
@import url('../common/font/font.css');

.login-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;   
    align-items: center;
    justify-content: center; 
}

.login-mid-box{
    background-color: #ffffff;       
    border-radius: 12px; 
    overflow: hidden;
}

.title-box{ 
    flex-grow: 1;
    padding: 24px 0;
    height: 56px;       
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    
}

.title-box img{
    width: 56px;    
    padding-right: 12px;
}


.title{     
    display: flex;    
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding: 24px 0;
    letter-spacing:1px;
}

.title .chn{
    font-family: "txtsk"; 
    font-size: 28px;  
    padding-bottom: 12px;
    text-align: justify
}

.title .eng{
    font-size: 12px;  
    color: #333333;    
}
    


/* .login{
    width: 400px;
    height: 300px;
} */
</style>

