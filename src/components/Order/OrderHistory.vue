<template>
  <!-- 待支付的订单 -->
  <div class="take-over">
    <!-- 订单头字段 -->
    <Order-title></Order-title>
    <!-- 订单 -->
    <div class="order-show">
      <Order-card orderType='3'></Order-card>
      <Order-card orderType='3'></Order-card>
    </div>
  </div>
</template>

<script>
import OrderCard from './OrderCard'
import OrderTitle from './OrderTitle'
export default {
  name: "OrderHistory",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  components:{
    OrderTitle,
    OrderCard
  }
};
</script>

<style>

</style>