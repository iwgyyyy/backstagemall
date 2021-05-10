<template>
  <div class="take-over">
    <div class="addgoods">
      <!-- 基本信息 -->
      <el-select v-model="goods.selfType" placeholder="请选择商品类型" style="position:absolute;top:5%;left:15%;">
        <el-option label="宠物" value="宠物"></el-option>
        <el-option label="宠物用品" value="宠物用品"></el-option>
        <el-option label="周边" value="周边"></el-option>
      </el-select>
      <!-- 商品名称 -->
      <el-input 
      placeholder="请输入商品名称" 
      v-model="goods.name" 
      style="position:absolute;top:5%;left:55%;">
      </el-input>
      <!-- 科目 -->
      <el-input 
      placeholder="请输入商品的科目" 
      v-model="goods.subject" 
      style="position:absolute;top:17.5%;left:15%;">
      </el-input>
      <!-- 种类 -->
      <el-input 
      placeholder="请输入商品的种类" 
      v-model="goods.selfClass" 
      style="position:absolute;top:30%;left:15%;">
      </el-input>
      <el-input 
      placeholder="进价" 
      type="tel"
      v-model="goods.purchaseCost" 
      style="position:absolute;top:17.5%;left:55%;">
      </el-input>
      <el-input 
      placeholder="售价" 
      v-model="goods.price" 
      type="tel"
      style="position:absolute;top:30%;left:55%;">
      </el-input>
      <span style="position:absolute;top:44%;left:55%;font-size:15px">进货数量:</span>
      <el-input-number 
      v-model="goods.stock" 
      :min="1" 
      label="进货数量"
      class="addgoods-number">
      </el-input-number>
      <!-- 描述文字 -->
      <el-input 
      placeholder="为商品添加一些描述文字..." 
      v-model="goods.decscription" 
      type='textarea'
      style="position:absolute;top:42.5%;left:15%;width:400px;">
      </el-input>
      <span style="position:absolute;top:30%;left:83%;font-size:15px">上传展示图片</span>
      <!-- 上传展示图片 -->
      <div class="addgoods-showImage">
        <el-upload
          ref='showImage'
          class="avatar-uploader"
          action="http://localhost:3000/backFormImages"
          :show-file-list="false"
          :on-success="handleShowImage"
          :before-upload="handleBeforeShowImage"
          :on-change="showPicture">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <!-- 上传详情图片 -->
      <div class="addgoods-detailsImages">
        <el-upload
          ref='detailsImages'
          action="http://localhost:3000/backFormImages"
          :multiple='true'
          :on-success="handleDetailsImages"
          :before-upload="handleBeforeDetalisImages"
          list-type="picture">
          <el-button size="small" type="primary">点击上传详情图片</el-button> 
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
      </div>
      <!-- 宠物补充信息 -->
      <div v-show="goods.selfType=='宠物'" class="supplementMessage">
        <el-input placeholder="请输入年龄" v-model="goods.age" type="tel"></el-input>
        <el-radio-group v-model="goods.sex">
          <el-radio label="公"></el-radio>
          <el-radio label="母"></el-radio>
        </el-radio-group>
        </div>
      <!-- 宠物用品补充信息 -->
      <div v-show="goods.selfType=='宠物用品'" class="supplementMessage">
        <el-input type='textarea' v-model="goods.notice" placeholder="注意事项或使用方法等"></el-input>
      </div>
      <!-- 周边的用料等 -->
      <div v-show="goods.selfType=='周边'" class="supplementMessage">
        <el-input type='textarea' v-model="goods.material" placeholder="用料等信息"></el-input>
      </div>
      <!-- 提交重置按钮 -->
    </div>
    <div class="flex-center addgoods-button">
      <el-button type="primary" @click="saveGoodsMessage">保存</el-button>
      <el-button type="info" @click="resetData">重置</el-button>
    </div>
  </div>
  
  
</template>

<script>
import axios from 'axios'
export default {
  name: "AddGoods",
  created() {},
  data() {
    return {
      goods:{
        selfType:'宠物',
        selfClass:'',
        subject:'',
        purchaseCost:'',
        price:'',
        stock:1,
        decscription:'',
        name:'',
        age:'',
        sex:'公',
        notice:'',
        material:'',
      },
      // 显示展示图片的地址
      imageUrl:'',
      // 详情图片地址
      fileList: [],
      // 展示图片地址
      file:''
    };
  },
  props: {},
  methods: {
    // 展示图片上传成功时的狗子函数
    handleShowImage(res){
      this.file=res
    },
    handleDetailsImages(res){
      this.fileList.push(res)
    },
    //将展示图片显示至页面 
    showPicture(file,fileList){
      this.$refs.showImage.uploadFiles.pop()
      this.$refs.showImage.uploadFiles[0]=file
      this.imageUrl=URL.createObjectURL(file.raw)
    },
    // 判断详情图片的上传种类
    handleBeforeDetalisImages(){
      let detailsImages=this.$refs.detailsImages.uploadFiles
      for(let i in detailsImages){
        if(detailsImages[i].raw.type!=='image/jpeg'&&detailsImages[i].raw.type!=='image/png'){
          this.$message.error('详情图片只能是JPG或PNG格式')
          return false
        }
      }
      return true
    },
    // 判断展示页面的上传种类
    handleBeforeShowImage(){
      let showImage=this.$refs.showImage.uploadFiles
      if(showImage[0].raw.type!=='image/jpeg'&&showImage[0].raw.type!=='image/png'){
        this.$message.error('展示图片只能是JPG或PNG格式')
        return false
      }
      return true
    },
    // 判断商品种类
    checkSubject(){
      if(this.goods.subject==''){
        this.$message.error('商品种类不能为空')
        return false
      }
      return true
    },
    // 判断商品科目
    checkSelfClass(){
      if(this.goods.selfClass==''){
        this.$message.error('商品科目不能为空')
        return false
      }
      return true
    },
    // 判断商品名称
    checkName(){
      if(this.goods.name==''){
        this.$message.error('商品名称不能为空')
        return false
      }
      return true
    },
    // 判断商品描述信息
    checkDecscription(){
      if(this.goods.decscription==''){
        this.$message.error('商品描述信息不能为空')
        return false
      }
      return true
    },
    // 判断进价
    checkPurchaseCost(){
      if(!parseFloat(this.goods.purchaseCost)){
        this.goods.purchaseCost=''
        this.$message.error('请输入正确的进价数字')
        return false
      }
      return true
    },
    // 判断售价
    checkPrice(){
      if(!parseFloat(this.goods.price)){
        this.goods.price=''
        this.$message.error('请输入正确的售价数字')
        return false
      }
      return true
    },
    // 判断宠物年龄
    checkAge(){
      if(this.goods.age==''){
        this.$message.error('宠物年龄不能为空')
        return false
      }
      return true
    },
    // 判断注意事项
    checkNotice(){
      if(this.goods.notice==''){
        this.$message.error('注意事项不能为空')
        return false
      }
      return true
    },
    // 判断用料
    checkMaterial(){
      if(this.goods.material==''){
        this.$message.error('用料等信息不能为空')
        return false
      }
      return true
    },
    // 检查图片
    checkImages(){
      let showImage=this.$refs.showImage.uploadFiles,
          detailsImages=this.$refs.detailsImages.uploadFiles
      if(showImage.length==0){
          this.$message.error('请上传展示图片')
          return false
      }         
      if(detailsImages==0){
          this.$message.error('请上传详情图片')
          return false
      }
      return true
    },
    // 验证所有信息
    checkAll(){
      let baseFlag=this.checkSubject()&&this.checkSelfClass()&&this.checkName()&&this.checkDecscription()&&this.checkPurchaseCost()&&this.checkPrice()
      let hiddenFlag=false
      if(this.goods.selfType=='宠物')
        hiddenFlag=this.checkAge()
      if(this.goods.selfType=='宠物用品')
        hiddenFlag=this.checkNotice()
      if(this.goods.selfType=='周边')
        hiddenFlag=this.checkMaterial()
      let imageFlag=this.checkImages()
      return baseFlag&&hiddenFlag&&imageFlag
    },
    // 保存信息
    saveGoodsMessage(){ 
      // 传递表单数据
      this.goods.showPictureAddress=this.file
      this.goods.detailPictureAddress=this.fileList
      if(this.checkAll()){
        axios({
          method:'post',
          baseURL:'http://localhost:3000',
          url: '/backForm',
          data: {
            data:this.goods
          }
        }).then(res=>{
          console.log("res.data=",res.data);
          this.$message.success("保存数据成功")
          this.resetData()
        }).catch(err=>{
          console.log(err);
          this.$message.error('保存数据失败')
          this.resetData()
        })
      }
    },
    // 重置信息
    resetData(){
      for(let i of Object.keys(this.goods)){
        if(i=='selfType') this.goods[i]='宠物'
        else if(i=='sex') this.goods[i]='公'
        else if(i=='stock') this.goods[i]=1
        else this.goods[i]=''
      }
      this.$refs.showImage.clearFiles()
      this.$refs.detailsImages.clearFiles()
      this.fileList=[]
      this.file=''
      this.imageUrl=''
    },
  },
  watch:{
    'goods.selfType':{
      handler(){
        if(this.goods.selfType!=='宠物') {
        this.goods.age=''
        this.goods.sex='公'
      }
      if(this.goods.selfType!=='宠物用品')
        this.goods.notice=''
      if(this.goods.selfType!=='周边')
        this.goods.material=''
      },
      immediate:true  //表示组件一创建就开始监听事件
    },
  }
};
</script>

<style>
@import url('../../assets/css/addgoods.css');
</style>