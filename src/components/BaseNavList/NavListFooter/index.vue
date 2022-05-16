<template>
  <div class="navlist-footer">
    <p>网站已经持续运行{{ runHour }}小时</p>
  </div>
</template>

<script>
export default {
  name: 'NavListFooter',
  mounted() {
    //计算当前时间秒数，减去创建网站时，
    const date = new Date() / 1000
    this.runHour = parseInt((date - 1652684000) / 60 / 60)
  },
  data() {
    return {
      runHour: 0,
    }
  }
}
</script>

<style scoped lang="less">
.navlist-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
}
</style>