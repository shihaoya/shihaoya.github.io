<template>
  <el-main class="page-component__scroll">
    <el-scrollbar style="height: 100%;" class="main">
      <el-backtop target=".main"></el-backtop>
      <el-row class="header">
        <el-col>
          <el-card shadow="hover">
            <h1>欢迎{{ username ? username : '您' }},来到诗豪的个人网站！</h1>
            <p>您尚未登录，点击登录</p>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="content" :gutter="gutter">
        <el-col :span="24" :md="{span:10, push: 14}">
          <el-card shadow="hover">
            当前时间
          </el-card>
          <el-card shadow="hover">
            每日语录
          </el-card>
          <el-card shadow="hover">
            <div slot="header" class="clearfix">
              <span>项目制作时间线</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="timeLine.reverse = !timeLine.reverse">
                {{ timeLine.reverse ? '降序' : '升序' }}
              </el-button>
            </div>
            <el-scrollbar style="height: 40vh;">
              <el-timeline :reverse="timeLine.reverse">
                <el-timeline-item
                    v-for="(activity, index) in timeLine.activities"
                    :key="index"
                    :timestamp="activity.timestamp">
                  {{ activity.content }}
                </el-timeline-item>
              </el-timeline>
            </el-scrollbar>
          </el-card>
        </el-col>
        <el-col :span="24" :md="{span:14, pull: 10}">
          <el-card shadow="hover" v-for="blog in blogs" :key="blog.id">
            <h2>{{ blog.title }}</h2>
            <el-divider>{{ blog.create_at }}</el-divider>
            <p>blog</p>
          </el-card>
        </el-col>
      </el-row>
    </el-scrollbar>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"><i class="el-icon-caret-top"></i></el-backtop>
  </el-main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      //实现线相关配置
      timeLine: {
        reverse: true,
        activities: [{
          content: 'Vue全家桶学习开始',
          timestamp: '2022-04-05'
        }, {
          content: 'Vue全家桶学习结束',
          timestamp: '2022-05-10'
        }, {
          content: '网课项目练习（因接口问题，中途放弃）',
          timestamp: '2022-05-11'
        }, {
          content: '多次尝试小Dome，考虑个人页面放哪些内容',
          timestamp: '2022-05-12'
        }, {
          content: '创建成功，搭建项目，制作首页',
          timestamp: '2022-05-16'
        }]
      },
      gutter: 20,
      username: 'admin',
      blogs: [
        {
          id: 1,
          title: '博客标题',
          content: '博客内容',
          create_at: '2022-1-2 12:00:00',
        },
        {
          id: 2,
          title: '博客标题',
          content: '博客内容',
          create_at: '2022-1-2 12:00:00',
        },
        {
          id: 3,
          title: '博客标题',
          content: '博客内容',
          create_at: '2022-1-2 12:00:00',
        },
        {
          id: 4,
          title: '博客标题',
          content: '博客内容',
          create_at: '2022-1-2 12:00:00',
        }, {
          id: 5,
          title: '博客标题',
          content: '博客内容',
          create_at: '2022-1-2 12:00:00',
        }
      ]
    }
  },
}
</script>

<style scoped lang="less">
.el-card {
  margin-bottom: 20px;
}

.el-scrollbar {
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  /deep/ .el-scrollbar__view {
    overflow-x: hidden;
  }
}

.el-main {
  .header {
    width: 100%;
  }

  .content {
    .el-timeline {
      .el-timeline-item {
        padding-top: 10px;
      }
    }

  }
}
</style>