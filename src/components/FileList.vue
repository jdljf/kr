<template>
    <el-container>
        <el-header style="height: 30px;
            box-sizing: border-box;
            background-color: #409EFF;
            color: #F2F6FC;
            line-height: 30px;
            font-size: 13px;
            text-align: left;
            padding: 0px 12px;"></el-header>
        <el-main>
            <!-- <el-row>
                <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                    <img src="~examples/assets/images/hamburger.png" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row> -->
            <slot></slot>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "FileList",
    data() {
        return {
        currentDate: new Date()
        };
    }
    
}
</script>

