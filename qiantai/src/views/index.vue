<template>
  <div class="app-container home">
    <div class="tabs-header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="1">博客首页</el-menu-item>
        <el-menu-item index="2">Vue视频教程版</el-menu-item>
        <el-menu-item index="3">下载早期HTML&CSS基础</el-menu-item>
        <el-menu-item index="4">Javascript基础视频教程</el-menu-item>
      </el-menu>
    </div>

    <div class="tabs-home" v-if="isShow == 1">
      <home v-if="isShow == 1" />
    </div>

    <div class="tabs-content" v-if="isShow > 1">
      <div class="content">
        <learnVue v-if="isShow == 2" />
        <learnHtml v-if="isShow == 3" />
        <learnJavascript v-if="isShow == 4" />
      </div>
      <div class="side">
        <side></side>
      </div>
    </div>
  </div>
</template>

<script setup name="Index">
import side from './boke/side.vue'
import learnVue from './boke/learnVue.vue';
import learnHtml from './boke/learnHtml.vue'
import learnJavascript from './boke/learnJavascrtpt.vue'
import home from './boke/home.vue'

const isShow = ref('1')
const activeIndex = ref('1')

const handleSelect = (key) => {
  console.log(key);
  isShow.value = key
}

</script>

<style scoped lang="scss">
.app-container {
  padding: 0;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100vw;
  height: 100%;

  .tabs-header {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .tabs-home {
    width: 70%;
    height: calc(100% - 80px);
    display: flex;
    overflow: scroll;
  }

  .tabs-content {
    width: 70%;
    height: calc(100% - 80px);
    display: flex;

    .side {
      width: 400px;
      height: 100%;
      overflow: scroll;
    }

    .content {
      flex: 1;
      overflow: scroll;
    }
  }
}
</style>

