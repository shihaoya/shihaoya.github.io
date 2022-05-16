<template>
  <el-container id="app">
    <base-nav-list/>
    <router-view></router-view>
  </el-container>
</template>

<script>
import BaseNavList from '@/components/BaseNavList'
export default {
  name: 'App',
  components: {
    BaseNavList
  }
}
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
