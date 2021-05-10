<template>
  <div class="goods-card take-over flex-center">
      <img 
      style="width:100px;height:100px;margin-left:2%;"
      :src="require('D:/Project/thpetsmall/public/goodsImages/'+goods.showPictureAddress)" 
      alt="#">
      <div  class="goods-overflow-div flex-center">
        {{goods.name}}
      </div>
      <div class="goods-overflow-div flex-center">
        {{goods.decscription}}
      </div>
      <span style="margin:0 auto 0 2%">
        {{goods.subject}}
      </span>
      <span style="margin:0 auto 0 2%">
        {{goods.selfClass}}
      </span>
      <span style="margin:0 auto 0 2%">
        {{goods.purchaseCost}}￥
      </span>
      <span style="margin:0 auto 0 2%"> 
        {{goods.price}}￥
      </span>
      <span style="margin:0 auto 0 2%">
        {{goods.stock}}
      </span>
      <div style="width:7%;height:100%;justify-content:space-evenly" class="flex-y-center">
        <!-- 修改商品信息按钮 -->
        <el-button 
        type="primary" 
        icon="el-icon-edit" 
        @click="changeGoodsMessage"
        circle></el-button>
        <!-- 删除商品信息按钮 -->
        <el-button 
        type="danger" 
        icon="el-icon-delete" 
        style="margin:0"
        @click="deleteGoods"
        circle></el-button>
      </div>
  </div>
  <el-dialog title="修改商品信息" v-model="changeGoodsMessageFlag">
    <div class="flex-y-center new-goods-message-form">
      <span class="goodsmessageform-span">
        <span>商品名称: </span>
        <input v-model="newGoodsMessage.name" style="width:400px;position:absolute;left:15%">
      </span>
      <span class="goodsmessageform-span">
        <span>商品描述: </span>
        <input v-model="newGoodsMessage.decscription" style="width:400px;position:absolute;left:15%">
      </span>
      <span class="goodsmessageform-span">
        <span>售价: </span>
        <input v-model="newGoodsMessage.price" style="width:100px;position:absolute;left:15%">
      </span>
      <span class="goodsmessageform-span">
        <span>库存数量: </span>
        <input v-model="newGoodsMessage.stock" style="width:100px;position:absolute;left:15%">
      </span>
      <div style="margin-left:25%;width:100%">
        <el-button type="primary" style="margin-right:10%" @click="saveGoodsMessage">保存</el-button>
        <el-button type="info" @click="cancel">取消</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import axios from 'axios'
export default {
  name: "GoodsCard",
  emits: ["flushAllGoods"],//使用前需声明
  created() {},
  data() {
    return {
      changeGoodsMessageFlag:false,
      newGoodsMessage:{
        name:'',
        decscription:'',
        price:'',
        stock:''
      }
    };
  },
  props: {
    goods:{
      type:Object
    }
  },
  methods: {
    // 刷新页面
    flushAllGoods(){
      this.$emit('flushAllGoods')
    },
    // 修改商品数据
    changeGoodsMessage(){
      this.changeGoodsMessageFlag=true
    },
    // 删除商品
    deleteGoods(){
      this.$confirm('确定要删除该商品吗？删除之后商品不可恢复','删除商品',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'error'
      }).then(()=>{
        // 向后台发送数据 请求删除该商品
        axios({
          method:'post',
          baseURL:'http://localhost:3000',
          url: '/deleteGoods',
          data: {
            id:this.goods['_id']
          }
        }).then(res=>{
          if(res.status==200){
            this.$message.success('删除成功！')
            this.flushAllGoods()
          }else{
            this.$message.error('删除失败...')
          }
        })
      }).catch(()=>{
        this.$message.info('已取消')
      })
    },
    // 取消页面
    cancel(){
      this.changeGoodsMessageFlag=false
    },
    // 保存信息
    saveGoodsMessage(){
      let {name,decscription,price,stock}=this.newGoodsMessage
      if(!parseFloat(price)){
        this.$message.warning('价格格式错误')
        return 
      }
      if(!parseInt(stock)){
        this.$message.warning('库存数量格式错误')
        return 
      }
      price=parseFloat(price)
      stock=parseInt(stock)
      this.$confirm('您确定要修改吗','修改商品',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(()=>{
        // 验证成功后发送请求
        axios({
          method:'post',
          baseURL:'http://localhost:3000',
          url: '/changeGoodsMessage',
          data: {
            id:this.goods['_id'],
            name,decscription,price,stock
          }
        }).then(res=>{
          if(res.status==200){
            this.$message.success('修改成功')
            this.flushAllGoods()
            this.changeGoodsMessageFlag=false
          }else{
            this.$message.error("修改失败....")
          }
        })
      }).catch(()=>{
        this.$message.info('已取消')
      })
    }
  },
  watch:{
    changeGoodsMessageFlag(currentValue){
      if(currentValue){
        for(let i in this.goods){
          this.newGoodsMessage[i]=this.goods[i]
        }
      }
    }
  }
};
</script>

<style>
.goods-card{
  width: 100%;
  height: 120px;
  background-color: yellowgreen;
  border:1px solid rgba(0,0,0,0.05);
  box-sizing: border-box;
  background-color: rgb(240,240,240);
}
.goods-overflow-div{
  margin:0 auto 0 2%;
  width:8%;
  height:100%;
  font-size: 14px;
  overflow-y: hidden;
}
.new-goods-message-form{
  width:100%;
  height:350px;
  padding-left: 10%;
  justify-content:space-evenly;
  align-items:start  
}
.goodsmessageform-span{
  width: 80%;
  display: flex;
  font-size: 15px;
  align-items: center;
  position: relative;
}
</style>