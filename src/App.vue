<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
/* 全局装饰 */
body{
  margin: 0;
  padding: 0;
}
.flex-center{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.flex-y-center{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}
.take-over{
  width: 100%;
  height: 100%;
}
.card{
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
}
input{
  width: 250px;
  height: 39px;
  outline: none;
  border-radius: 4px;
  border:1px solid rgba(0, 0, 0, 0.2);
  padding-left: 20px;
  font-size: 15px;
  transition-duration: 800ms;
}
input:focus{
  border:1px solid rgb(0, 120, 255);
}
/* 全局装饰结束 */
.order-show{
  height: 92%;
  overflow-y: scroll;
}
</style>
