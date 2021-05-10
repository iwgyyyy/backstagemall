<template>
  <div class="login flex-center">
    <img src="../assets/Login/background.jpg" alt="#">
    <div class="login-box card flex-y-center">
      <img src="../assets/Login/logo.svg" alt="#">
      <span class="login-text">Sign in to backstage</span>
      <!-- 账号框 -->
      <input 
      class="login-input" 
      type="text" 
      id="login_account" 
      @focus="transformMessage"
      @blur="backTransformMessage"
      v-model="account">

      <span 
      :class="accountClass" 
      @click="foucsInput">
      {{accountPlaceHolder}}
      </span>
      <!-- 密码框 -->
      <input 
      class="login-input" 
      style="top:53%;" 
      type="password" 
      id="login_password" 
      @focus="transformMessage"
      @blur="backTransformMessage"
      v-model="password">

      <span 
      :class="passwordClass" 
      @click="foucsInput">
      {{passwordPlaceHolder}}
      </span>

      <el-button class="login-button" type='primary' @click="signIn">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  created() {},
  data() {
    return {
      account:"",
      password:"",
      accountPlaceHolder:"请输入账号",
      passwordPlaceHolder:"请输入密码",
      accountClass:{
        input_text:true,
        account_before_transform:true,
        account_after_transform:false
      },
      passwordClass:{
        input_text:true,
        password_before_transform:true,
        password_after_transform:false
      }
    };
  },
  props: {},
  methods: {
    signIn(){
      this.$router.push('/main')
    },
    // 当点击提示信息的事件 让对应的输入框获得焦点
    foucsInput(e){
      if(e.target.textContent==="请输入账号") 
        document.getElementById("login_account").focus()
      else 
        document.getElementById("login_password").focus()
    },
    // 输入框获得焦点事件
    transformMessage(e){
      if(e.target.id==="login_account"){
        this.accountClass.account_before_transform=false
        this.accountClass.account_after_transform=true
      }else{
        this.passwordClass.password_before_transform=false
        this.passwordClass.password_after_transform=true
      }
    },
    // 输入框失去焦点事件
    backTransformMessage(e){
      let control=e.target
      if(control.id==="login_account"){
        if(this.account===""){
          this.accountClass.account_before_transform=true
          this.accountClass.account_after_transform=false
        }
      }else{
        if(this.password===""){
          this.passwordClass.password_before_transform=true
          this.passwordClass.password_after_transform=false
        }
      }
    }
  },
};
</script>

<style>
.login{
  position: relative;
  width: 1900px;
  height: 930px;
  overflow: hidden;
}
.login-box{
  width: 420px;
  height: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(255, 255, 255, 0.9);
}
.login-box img{
  width: 45px;
  height: 45px;
  position: absolute;
  top:11%;
  transform: translateX(-250%);
}
/* 头部提示信息 */
.login-text{
  font-size: 20px;
  position: absolute;
  top:15%;
  transform: translateX(15%);
}
/* 输入框 账号和密码 */
.login-input{
  position: absolute;
  top:35%;
}
/* 登录按钮 */
.login-button{
  position: absolute;
  top: 75%;
  width: 280px;
}
/* 账号密码的提示信息 */
.input_text{
  position: absolute;
  font-size: 14px;
  left: 23%;
  color: rgba(0, 0, 0, 0.4);
  transition-duration: 500ms;
}

/* 提示信息转变前的样式 */
.account_before_transform{
  top: 37.5%;
}
.password_before_transform{
  top:55.5%;
}
/* 转变后的样式 */
.account_after_transform{
  top:30%;
  left:19%;
  font-size: 15px;
  color: rgb(0, 220, 0);
}
.password_after_transform{
  top:48%;
  color: rgb(0, 220, 0);
  font-size: 15px;
  left:19%;
}
</style>