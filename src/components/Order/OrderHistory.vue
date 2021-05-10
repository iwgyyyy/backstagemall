<template>
  <!-- 历史订单 -->
  <div class="take-over">
    <!-- 订单头字段 -->
    <Order-title></Order-title>
    <!-- 订单 -->
    <div class="order-show" v-show='!isEmpty' v-loading='order_list.length==0'>
      <Order-card
      v-for="item in order_list"
      :key="item['_id']"
      :order="item"
      @flushHistoryOrder="getAllHistoryOrder"
      ></Order-card>
    </div>
    <el-empty
    class="order-show"
    description="没有找到历史订单"
    v-show="isEmpty"
    ></el-empty>
  </div>
</template>

<script>
import axios from 'axios';
import OrderCard from './OrderCard'
import OrderTitle from './OrderTitle'
export default {
  name: "OrderHistory",
  created() {
    this.getAllHistoryOrder()
  },
  data() {
    return {
      order_list:[],
      isEmpty:false
    };
  },
  props: {},
  methods: {
    // 得到所有的历史订单
    getAllHistoryOrder(){
      axios({
        method:'post',
        baseURL:'http://localhost:3000',
        url:'/getAllHistoryOrder'
      }).then(res=>{
      this.order_list=res.data
        if(this.order_list.length==0){
          this.isEmpty=true
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  components:{
    OrderTitle,
    OrderCard
  }
};
</script>

<style>

</style>