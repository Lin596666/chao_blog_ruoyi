<template>
    <div class="mainApp">
        <div class="img"></div>
        <homeCom />
        <div class="displ">
            <div style="width: 50%;">
                <el-carousel :interval="3000" arrow="always">
                    <el-carousel-item v-for="item in imgList" :key="item">
                        <img :src="item">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div style="width: 40%;">
                <div class="list" v-for="(item, index) in list" :key="index">
                    <div class="left">
                        <div class="left-blue" :class="'left-blue-' + index">{{ item.tap }}</div>
                        <div class="left-content">{{ item.title }}</div>
                        <div class="left-time">
                            <el-icon>
                                <Clock />
                            </el-icon>
                            <span>{{ item.time }}</span>
                        </div>
                    </div>
                    <div class="list-img">
                        <img :src="item.img">
                        <div class="red">{{ index }}</div>
                    </div>
                </div>
            </div>
        </div>
        <homecomm />
        <div style="height: 100px;"></div>
    </div>
</template>
<script setup>
import homeCom from './homeCom.vue';
import homecomm from './homecomm.vue'
import side1 from '@/assets/side/side1.jpg'
import side2 from '@/assets/side/side2.jpeg'
import side3 from '@/assets/side/side3.png'
import side4 from '@/assets/side/side4.jpeg'
import side5 from '@/assets/side/side5.jpeg'
import side6 from '@/assets/side/side6.png'

import home1 from '@/assets/side/home1.png'
import home2 from '@/assets/side/home2.png'
import home3 from '@/assets/side/home5.png'
const list = [
    {
        tap: '前端工具',
        title: 'Git简介',
        time: '2022年11月21日',
        img: side4
    },
    {
        tap: '前端工具',
        title: '打包工具',
        time: '2022年11月18日',
        img: side5
    },
    {
        tap: 'NODE.JS',
        title: '包管理器',
        time: '2022年10月21日',
        img: side6
    }
]
const imgList = [home1, home2, home3]
</script>

<style scoped lang="scss">
.mainApp {
    width: 100%;

    .img {
        width: 100%;
        height: 700px;
        background-image: url(../../assets/side/homeone.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .displ {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;

        .el-carousel,
        .el-carousel__item {
            height: 400px;
            border-radius: 10px;

            img {
                height: 100%;
                object-fit: cover;
            }
        }

        .list {
            width: 100%;
            padding: 20px 0;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;

            .left {
                .left-blue {
                    background-color: #4e9fce;
                    width: 80px;
                    height: 25px;
                    color: #fff;
                    font-size: 12px;
                    text-align: center;
                    line-height: 25px;
                    border-radius: 5px;
                }

                .left-blue-2 {
                    background-color: #dd9933;
                }

                .left-content {
                    font-size: 16px;
                    font-weight: 600;
                    margin: 10px 0;
                }

                .left-time {
                    color: #aaa;
                    font-size: 10px;

                    .el-icon {
                        font-size: 12px;
                    }
                }
            }

            .list-img {
                position: relative;
                width: 100px;
                height: 100px;

                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 10px;
                }

                .red {
                    background-color: red;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    color: #fff;
                    font-weight: 600;
                    border-top-left-radius: 10px;
                }
            }
        }

    }

}
</style>