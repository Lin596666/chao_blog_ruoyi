<template>
    <div class="mainApp">
        <div class="img"></div>
        <el-tag style="margin-top: 20px;" class="ml-2" type="success" size="large" effect="dark">Vue</el-tag>
        <div v-for="(item, index) in dataList" :key="index">
            <el-divider />
            <div class="title">{{ item.title }}</div>
            <div class="contenta">{{ item.content }}</div>
        </div>

        <el-tag style="margin-top: 20px;" class="ml-2" type="success" size="large" effect="dark">即将更新的内容</el-tag>
        <div v-for="(item, index) in dataContent" :key="index">
            <div v-if="item.showis == '是'" class="title" style="color: rgb(7, 236, 7);">{{ index + 1 }}. {{ item.title }}
                (完成)
            </div>
            <div v-else class="title">{{ index + 1 }}. {{ item.title }}</div>
        </div>

        <el-divider />
        <el-tag style="margin-top: 20px;" class="ml-2" type="success" size="large" effect="dark">学习资源</el-tag>
        <div v-for="(item, index) in dataValue" :key="index">
            <el-divider />
            <div class="title" style="font-size: 50px;  margin-bottom: 20px;">{{ item.title }}</div>
            <a @click="routeLink(item)" class="contenta">链接：{{ item.videourl }}</a>
            <div class="contentb">提取码：{{ item.password }}</div>
        </div>
        <div>
            <Homecomm />
        </div>
        <div style="margin-top: 60px;">
            <comment />
        </div>
    </div>
</template>
<script setup>
import homeCom from './homeCom.vue';
import { listOne } from "@/api/bk/one";
import { listContent } from "@/api/bk/content";
import { listVideo } from "@/api/bk/video";
import { onMounted } from "vue";
import comment from "./comment.vue";
import Homecomm from './homecomm.vue';

const dataList = ref()
const dataContent = ref()
const dataValue = ref()

onMounted(() => {
    listOne({
        pageSize: 999,
    }).then((res) => {
        dataList.value = res.rows
    })
    listContent({
        pageSize: 999,
    }).then((res) => {
        dataContent.value = res.rows
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
        height: 400px;
        background-image: url(../../assets/side/vue.png);
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