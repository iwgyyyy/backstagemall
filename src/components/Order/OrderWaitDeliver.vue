<template>
  <!-- 待发货的订单 -->
  <div class="take-over">
    <!-- 订单头字段 -->
    <Order-title></Order-title>
    <!-- 订单 -->
    <div class="order-show" v-show='!isEmpty' v-loading='order_list.length==0'>
      <Order-card
      v-for="item in order_list"
      :key="item['_id']"
      :order="item"
      @flushWaitForDeliverOrder="getAllWaitForDeliverOrder"
      ></Order-card>
    </div>
    <el-empty
    class="order-show"
    description="没有找到未发货的订单"
    v-show="isEmpty"
    ></el-empty>
  </div>
</template>

<script>
import axios from 'axios';
import OrderCard from './OrderCard'
import OrderTitle from './OrderTitle'
export default {
  name: "OrderWaitDeliver",
  created() {
    this.getAllWaitForDeliverOrder()
  },
  data() {
    return {
      order_list:[],
      isEmpty:false
    };
  },
  props: {},
  methods: {
    // 得到所有未发货的订单
    getAllWaitForDeliverOrder(){
      axios({
        method:'post',
        baseURL:'http://localhost:3000',
        url: '/getAllWaitForDeliverOrder',
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