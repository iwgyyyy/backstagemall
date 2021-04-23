<template>
  <div class="login flex-center">
    <img src="../assets/Login/background.jpg" alt="#">
    <div class="login-box card flex-y-center">
      <img src="../assets/Login/logo.svg" alt="#">
      <span class="login-text">Sign in to backstage</span>
      <input class="login-input" type="text" placeholder="请输入账号">
      <input class="login-input" style="top:53%" type="text" placeholder="请输入密码">
      <el-button class="login-button" type='primary' @click="signIn">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    signIn(){
      this.$router.push('/main')
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
.login-text{
  font-size: 20px;
  position: absolute;
  top:15%;
  transform: translateX(15%);
}
.login-input{
  position: absolute;
  top:35%;
}
.login-button{
  position: absolute;
  top: 75%;
  width: 280px;
}
</style>