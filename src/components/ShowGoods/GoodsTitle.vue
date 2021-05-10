<template>
  <div class="goods-title flex-center">
    <span>商品图片</span>
    <span>商品名</span>
    <span>商品描述</span>
    <span>商品科目</span>
    <span>商品种类</span>
    <span>进价</span>
    <span>售价</span>
    <span>库存</span>
    <span>操作</span>
  </div>
</template>

<script>
export default {
  name: "GoodsTitle",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
.goods-title{
  width: 100%;
  height: 10%;
  background-color: rgb(114,123,131);
  color: white;
  justify-content: space-around;
}
</style>