<template>
  <div class="main card">
    <aside class="main-bar">
      <Navigation></Navigation>
    </aside>
    <div class="main-show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation/Navigation'
export default {
  name: "App",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  components:{
    Navigation
  }
};
</script>

<style>
.main{
  position: fixed;
  left: 50%;
  top: 2%;
  width: 1600px;
  height: 900px;
  transform: translateX(-50%);
  display: flex;
}
.main-bar{
  width: 20%;
  height: 100%;
}
.main-show{
  width: 80%;
  height: 100%;
}
</style>
