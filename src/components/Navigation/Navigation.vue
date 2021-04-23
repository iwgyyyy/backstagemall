<template>
  <div class="take-over navigation">
    <el-menu 
      :router='true'
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-document"></i>
          <span>订单</span>
        </template>
        <el-menu-item-group>
          <template #title>订单项</template>
          <el-menu-item index="/main/orderwaitpaid">待支付</el-menu-item>
          <el-menu-item index="/main/orderwaitdeliver">待发货</el-menu-item>
          <el-menu-item index="/main/orderwaitreceive">待收货</el-menu-item>
          <el-menu-item index="/main/orderhistory">已完成</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-menu"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group>
          <template #title>商品项</template>
          <!-- 后续可能还要v-for循环遍历 -->
          <el-menu-item index="#">宠物</el-menu-item>
          <el-menu-item index="#">宠物用品</el-menu-item>
          <el-menu-item index="#">宠物周边</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/main/addgoods">
        <template #title>
          <i class="el-icon-circle-plus"></i>
          <span>添加商品</span> 
        </template>
      </el-menu-item>
      <el-menu-item index="#">
        <template #title>
          <i class="el-icon-s-data"></i>
          <span>查看营收</span> 
        </template>
      </el-menu-item>
      <el-menu-item index="#">
        <template #title>
          <i class="el-icon-setting"></i>
          <span>修改密码</span> 
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
.navigation{
  background-color: rgb(84,92,100);
}
</style>