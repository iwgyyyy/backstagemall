<template>
  <div class="take-over">
    <Goods-title></Goods-title>
    <div class="showpets-body" v-show="!isEmpty" v-loading="goods_list.length==0">
      <Goods-card
      v-for="item in goods_list"
      :key="item['_id']"
      :goods="item"
      @flushAllGoods="getAllPetsGoods"
      ></Goods-card>
    </div>
    <el-empty
    class="showpets-body"
    v-show='isEmpty'
    description="没有找到宠物商品数据。。"
    ></el-empty>
  </div>
</template>

<script>
import axios from 'axios'
import GoodsTitle from './GoodsTitle'
import GoodsCard from './GoodsCard'
export default {
  name: "ShowPetsGoods",
  created() {
    this.getAllPetsGoods()
  },
  data() {
    return {
      goods_list:[],
      isEmpty:false
    };
  },
  props: {},
  methods: {
    getAllPetsGoods(){
      axios({
        method:'post',
        baseURL:'http://localhost:3000',
        url: '/getAllBackPetsGoods',
      }).then(res=>{
        this.goods_list=res.data
        if(this.goods_list.length==0){
          this.isEmpty=true
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  components:{
    GoodsTitle,
    GoodsCard
  }
};
</script>

<style>
.showpets-body{
  width: 100%;
  height: 90%;
  overflow-y: scroll;
}
</style>