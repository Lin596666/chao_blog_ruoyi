<template>
    <div class="mainApp">
        <div class="dis">
            <div class="discon">
                <div class="img"></div>
                <div class="title">Strapi</div>
                <div class="time">上传时间：2022-06-08</div>
            </div>
            <div class="discon">
                <div class="img1"></div>
                <div class="title">React.Memo</div>
                <div class="time">上传时间：2022-03-13</div>
            </div>
            <div class="discon">
                <div class="img2"></div>
                <div class="title">Reducer</div>
                <div class="time">上传时间：2022-03-06</div>
            </div>
            <div class="discon">
                <div class="img3"></div>
                <div class="title">Effect</div>
                <div class="time">上传时间：2022-10-04</div>
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
            width: 23%;
            margin-top: 40px;

            .img {
                width: 100%;
                height: 200px;
                background-image: url(../../assets/side/home11.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .img1 {
                width: 100%;
                height: 200px;
                background-image: url(../../assets/side/home12.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .img2 {
                width: 100%;
                height: 200px;
                background-image: url(../../assets/side/home13.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .img3 {
                width: 100%;
                height: 200px;
                background-image: url(../../assets/side/home14.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .img4 {
                width: 100%;
                height: 200px;
                background-image: url(../../assets/side/home5.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 10px;
            }

            .img5 {
                width: 100%;
                height: 200px;
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