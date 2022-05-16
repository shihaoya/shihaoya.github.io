<template>
  <div class="navlist-header">
    <el-avatar :src="avatar.avatarURL"
               :size="avatar.size"
               alt="头像"
               @error="avatarLoadErr">
      <img src="./images/avatar_error.png"/>
    </el-avatar>
    <h3>暂未登录</h3>
  </div>
</template>

<script>
export default {
  name: 'NavListHeader',
  data() {
    return {
      avatar: {
        avatarURL: 'https://avatars.githubusercontent.com/u/80810176',
        size: 100,
      }
    }
  },
  methods: {
    avatarLoadErr() {
      this.$message.error('头像加载失败')
      return true
    },
  }
}
</script>

<style scoped lang="less">
.navlist-header {
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;

  .el-avatar {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
}
</style>