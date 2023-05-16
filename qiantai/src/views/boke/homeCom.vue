<template>
    <div class="mainApp">
        <div class="dis">
            <div class="discon">
                <div class="img"></div>
                <div class="title">宏任务和微任务</div>
                <div class="time">上传时间：2022-03-04</div>
            </div>
            <div class="discon">
                <div class="img1"></div>
                <div class="title">异步编程</div>
                <div class="time">上传时间：2022-10-04</div>
            </div>
            <div class="discon">
                <div class="img2"></div>
                <div class="title">Node.Js简介&安装</div>
                <div class="time">上传时间：2022-09-14</div>
            </div>
            <div class="discon">
                <div class="img3"></div>
                <div class="title">JQuery</div>
                <div class="time">上传时间：2022-07-04</div>
            </div>
            <div class="discon">
                <div class="img4"></div>
                <div class="title">DOM</div>
                <div class="time">上传时间：2022-03-14</div>
            </div>
            <div class="discon">
                <div class="img5"></div>
                <div class="title">JavaScript基础视频教程</div>
                <div class="time">上传时间：2022-04-23</div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped lang="scss">
.mainApp {
    width: 100%;

    .dis {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;

        .discon {
            width: 30%;
            margin-top: 40px;

            .img {
                width: 100%;
                height: 250px;
                background-image: url(../../assets/side/home1.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .img1 {
                width: 100%;
                height: 250px;
                background-image: url(../../assets/side/home2.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .img2 {
                width: 100%;
                height: 250px;
                background-image: url(../../assets/side/home3.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .img3 {
                width: 100%;
                height: 250px;
                background-image: url(../../assets/side/home4.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .img4 {
                width: 100%;
                height: 250px;
                background-image: url(../../assets/side/home5.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .img5 {
                width: 100%;
                height: 250px;
                background-image: url(../../assets/side/home6.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .title {
                font-size: 30px;
                margin-top: 20px;
            }

            .time {
                font-size: 20px;
                margin-top: 10px;
            }
        }
    }

}
</style>