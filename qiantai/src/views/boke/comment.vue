<template>
    <div class="mainApp">
        <el-divider />
        <div class="pinglun">在此评论:</div>
        <el-form size="large" ref="formRef" :model="dataForm" label-width="60px" class="demo-ruleForm">
            <el-form-item label="评论：" prop="content">
                <el-input :rows="4" type="textarea" v-model="dataForm.content" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(formRef)">发表评论</el-button>
                <el-button @click="resetForm(formRef)">清空评论</el-button>
            </el-form-item>
        </el-form>
        <div v-for="(item, index) in dataList" :key="index">
            <el-divider />
            <el-descriptions size="large">
                <el-descriptions-item label="发表用户：">{{ item.founder }}</el-descriptions-item>
                <el-descriptions-item label="发表时间：">{{ item.time }}</el-descriptions-item>
                <el-descriptions-item label=""></el-descriptions-item>
                <el-descriptions-item label="发表内容：">{{ item.content }}</el-descriptions-item>
            </el-descriptions>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import { listComment, addComment } from "@/api/bk/comment";
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()

const formRef = ref()

const dataForm = reactive({
    content: '',
    time: '2023-05-16',
    founder: 'admin',
})
const dataList = ref()
onMounted(() => {
    queryList()
})
const queryList = () => {
    listComment({
        pageSize: 999
    }).then((res) => {
        dataList.value = res.rows
    })
}
const submitForm = (formEl) => {
    dataForm.time = getCurrentTime()
    dataForm.founder = userStore.name
    addComment(dataForm).then(() => {
        ElMessage({
            message: '发表成功',
            type: 'success',
        })
        queryList()
        dataForm.content = ''
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
function getCurrentTime() {
    var date = new Date();//当前时间
    var month = zeroFill(date.getMonth() + 1);//月
    var day = zeroFill(date.getDate());//日
    var hour = zeroFill(date.getHours());//时
    var minute = zeroFill(date.getMinutes());//分
    var second = zeroFill(date.getSeconds());//秒

    //当前时间
    var curTime = date.getFullYear() + "-" + month + "-" + day
        + " " + hour + ":" + minute + ":" + second;

    return curTime;
}
/**
 * 补零
 */
function zeroFill(i) {
    if (i >= 0 && i <= 9) {
        return "0" + i;
    } else {
        return i;
    }
}
</script>

<style scoped lang="scss">
.mainApp {
    width: 100%;

    .pinglun {
        font-size: 40px;
        margin-bottom: 20px;
    }
}
</style>