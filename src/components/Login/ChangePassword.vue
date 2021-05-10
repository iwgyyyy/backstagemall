<template>
  <div class="take-over change-password">
    <div class="change-password-div">
      <el-input type="password" placeholder="请输入原密码" v-model="oldPassword"></el-input>
      <el-input type="password" placeholder="请输入新密码" v-model="newPassword"></el-input>
      <el-input type="password" placeholder="请再次输入密码" v-model="reNewPassword"></el-input>
      <div style="padding-left:50px">
        <el-button type="primary" style="margin-right:20px" @click="changePassword">确定</el-button>
        <el-button type="info" @click="resetData">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ChangePassword",
  created() {},
  data() {
    return {
      oldPassword:'',
      newPassword:'',
      reNewPassword:'',
    };
  },
  props: {},
  methods: {
    resetData(){
      this.oldPassword=''
      this.newPassword=''
      this.reNewPassword=''
    },
    changePassword(){
      if(this.newPassword.length<6){
        this.$message.warning('密码长度至少为六位')
        return 
      }
      if(this.newPassword!==this.reNewPassword){
        this.$message.warning('两次输入的密码不一致')
        return 
      }
      axios({
        method:'post',
        baseURL:'http://localhost:3000',
        url: '/changeAdminPassword',
        data: {
          account:this.$store.state.account,
          password:this.oldPassword,
          newPassword:this.newPassword
        }
      }).then(res=>{
        if(res.data==0){
          this.$message.error('原密码错误!')
          this.resetData()
        }else if(res.data==1){
          this.$message.success('修改成功!')
          this.resetData()
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  },
};
</script>

<style>
.change-password{
  position: relative;
  background-image: url('../../assets/Login/changePassword.jpg');
  background-size: 100% 100%;
}
.change-password-div{
  width: 30%;
  height: 50%;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background-color: rgba(240, 240, 240,0.95);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 85px;
}
.change-password-div input{
  width: 300px;
}
</style>