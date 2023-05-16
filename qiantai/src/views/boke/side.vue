<template>
    <div class="side">
        <div class="title">分类</div>
        <div class="img img1">
            React
            <div class="span">5</div>
        </div>
        <div class="img img2">
            Node.js
            <div class="span">20</div>
        </div>
        <div class="img img3">
            JavaScript
            <div class="span">31</div>
        </div>
        <div class="title">最新</div>
        <div class="list" v-for="(item,index) in list" :key="index">
            <div class="left">
                <div class="left-blue" :class="'left-blue-'+index">{{ item.tap }}</div>
                <div class="left-content">{{ item.title }}</div>
                <div class="left-time">
                    <el-icon><Clock /></el-icon>
                    <span>{{ item.time }}</span>
                </div>
            </div>
            <div class="list-img">
                <img :src="item.img" >
                <div class="red">{{ index }}</div>
            </div>
        </div>
        <div>
            <el-carousel :interval="1000" arrow="always">
                <el-carousel-item v-for="item in imgList" :key="item">
                    <img :src="item">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup>
    import side1 from '@/assets/side/side1.jpg'
    import side2 from '@/assets/side/side2.jpeg'
    import side3 from '@/assets/side/side3.png'
    import side4 from '@/assets/side/side4.jpeg'
    import side5 from '@/assets/side/side5.jpeg'
    import side6 from '@/assets/side/side6.png'
    const list = [
        {
            tap:'前端工具',
            title:'Git简介',
            time:'2022年11月21日',
            img:side4
        },
        {
            tap:'前端工具',
            title:'打包工具',
            time:'2022年11月18日',
            img:side5
        },
        {
            tap:'NODE.JS',
            title:'包管理器',
            time:'2022年10月21日',
            img:side6
        }
    ]
    const imgList = [side1,side2,side3]
</script>

<style scoped lang="scss">
    .side{
        padding: 30px 50px;
        overflow: scroll;
        height: 100%;
    }
    .title{
        padding: 20px 0;
        border-bottom: 1px solid #eee;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    .img{
        width: 100%;
        height: 60px;
        border-radius: 10px;
        color: #fff;
        font-weight: 500px;
        line-height: 60px;
        padding: 0 20px;
        position: relative;
        margin: 15px 0;
        background-position: center center;
        background-repeat: no-repeat;
        .span{
            position: absolute;
            top: 50%;
            right: 20px;
            margin-top: -15px;
            background-color: #fff;
            border-radius: 45%;
            height: 30px;
            line-height: 30px;
            color: #aaa !important;
            padding: 0 10px;
        }
    }
    .img1{
        background-image: url('@/assets/side/side1.jpg');
        background-size: 100% 300%;
    }
    .img2{
        background-image: url('@/assets/side/side2.jpeg');
        background-size: 100% 350%;
    }
    .img3{
        background-image: url('@/assets/side/side3.png');
        background-size: 100% 300%;
        margin-bottom: 20px;
    }
    .list{
        width: 100%;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        .left{
            .left-blue{
                background-color: #4e9fce;
                width: 80px;
                height: 25px;
                color: #fff;
                font-size: 12px;
                text-align: center;
                line-height: 25px;
                border-radius: 5px;
            }
            .left-blue-2{
                background-color: #dd9933;
            }
            .left-content{
                font-size: 16px;
                font-weight: 600;
                margin: 10px 0;
            }
            .left-time{
                color: #aaa;
                font-size: 10px;
                .el-icon{
                    font-size: 12px;
                }
            }
        }
        .list-img{
            position: relative;
            width: 100px;
            height: 100px;
            img{
                width: 100px;
                height: 100px;
                border-radius: 10px;
            }
            .red{
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
    .el-carousel,.el-carousel__item{
        height: 400px;
        border-radius: 10px;
        img{
            height: 100%;
            object-fit: cover;
        }
    }
</style>