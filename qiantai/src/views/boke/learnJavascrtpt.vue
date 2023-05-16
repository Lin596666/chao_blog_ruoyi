<template>
    <div class="mainApp">
        <div class="img"></div>
        <el-tag style="margin-top: 20px;" class="ml-2" type="warning" size="large" effect="dark"> JavaScript</el-tag>
        <div v-for="(item, index) in dataList" :key="index">
            <el-divider />
            <div class="title">{{ item.title }}</div>
            <div class="contenta">{{ item.contenta }}</div>
            <div class="contentb">{{ item.contentb }}</div>
        </div>
        <el-divider />
        <el-tag style="margin-top: 20px;" class="ml-2" type="warning" size="large" effect="dark">学习资源</el-tag>
        <div v-for="(item, index) in dataValue" :key="index">
            <el-divider />
            <div class="title" style="font-size: 50px; margin-bottom: 20px;">{{ item.title }}</div>
            <a @click="routeLink(item)" class="contenta">链接：{{ item.videourl }}</a>
            <div class="contentb">提取码：{{ item.password }}</div>
        </div>
        <div>
            <homeCom />
        </div>
        <div style="margin-top: 60px;">
            <comment />
        </div>
    </div>
</template>
<script setup>
import homeCom from './homeCom.vue';
import { listJavascript } from "@/api/bk/javascript";
import { listVideo } from "@/api/bk/video";
import { onMounted } from "vue";
import comment from "./comment.vue";

const dataList = ref()
const dataValue = ref()

onMounted(() => {
    listJavascript({
        pageSize: 999,
    }).then((res) => {
        dataList.value = res.rows
    })
    listVideo({
        pageSize: 999,
    }).then((res) => {
        dataValue.value = res.rows
    })
})
const routeLink = (e) => {
    window.open(e.videourl)
}
</script>

<style scoped lang="scss">
.mainApp {
    width: 100%;

    .img {
        width: 100%;
        height: 700px;
        background-image: url(../../assets/side/javascript.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .title {
        font-size: 40px;
        margin-top: 30px;
    }

    .contenta {
        font-size: 24px;
        margin-top: 30px;
    }

    .contentb {
        font-size: 24px;
        margin-top: 30px;
    }
}
</style>