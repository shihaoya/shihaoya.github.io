<template>
  <el-aside class="aside-box">
    <el-scrollbar style="height: 100%;">
      <nav-list-header/>
      <nav-list-content/>
      <nav-list-footer/>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import NavListHeader from '@/components/BaseNavList/NavListHeader'
import NavListContent from '@/components/BaseNavList/NavListContent'
import NavListFooter from '@/components/BaseNavList/NavListFooter'
export default {
  name: 'BaseNavList',
  components: {
    NavListHeader,
    NavListContent,
    NavListFooter,
  },
}
</script>

<style scoped lang="less">
.aside-box {
  position: relative;
  height: 100%;
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  background-color: #172C3C;
  color: #eee;
}
</style>