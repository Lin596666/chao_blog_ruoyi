<template>
    <div class="mainApp">
        <div v-for="(item, index) in dataList" :key="index">
            <el-divider />
            <div class="title">{{ item.title }}</div>
            <div class="contenta">{{ item.contenta }}</div>
            <div class="contentb">{{ item.contentb }}</div>
        </div>
    </div>
</template>
<script setup>
import { listHtmlcss } from "@/api/bk/htmlcss";
import { onMounted } from "vue";

const dataList = ref()

onMounted(() => {
    listHtmlcss({
        pageSize: 999,
    }).then((res) => {
        dataList.value = res.rows
    })
})
</script>

<style scoped lang="scss">
.mainApp {
    width: 100%;

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