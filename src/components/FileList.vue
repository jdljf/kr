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
        <el-main style="padding:12px">
            <el-row>
                <el-col :span="24" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px', display:'flex', flexDirection: 'row', width:'180px', height:'80px', flexShrink: 0 }">
                        <img :src="imgsArr[0]" class="image" style="height:80px">
                        <div style="padding: 12px;flex-grow:1;">
                            <span style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">患者01患者01</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
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
    },
    props:{
        imgsArr: Array,
    }
    
}
</script>

