<template>
  <el-menu :default-active="$route.path"
           background-color="#172C3C"
           active-text-color="#ffef62"
           text-color="#eee"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
           router>
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="/communicate">
      <template slot="title">
        <i class="el-icon-message"></i>
        <span slot="title">交流</span>
      </template>
      <el-menu-item index="/communicate/chat"><i class="el-icon-chat-line-round"></i>聊天室</el-menu-item>
      <el-menu-item index="/communicate/blog"><i class="el-icon-s-comment"></i>博客</el-menu-item>
    </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'NavListContent',
  methods: {
    handleOpen() {

    },
    handleClose() {

    },
  }
}
</script>

<style scoped lang="less">
.el-menu {
  border-right: none;
}
</style>