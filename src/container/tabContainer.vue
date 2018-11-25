<template>
    <el-tabs type="border-card">
        <el-tab-pane>
            <!-- slot 属性可以自定义标签内容而不像下面那些那样 -->
            <span slot="label"><i class="el-icon-tickets"></i>模版</span> 
            <Template :list="list" :fun="fun"/>
            <!-- 这里就是内容部分 -->
        </el-tab-pane>
        <el-tab-pane label="组件">
            <Template :list="list" :fun="fun"/>
        </el-tab-pane>    
    </el-tabs>
</template>

<script>
import Widgets from '../components/Widgets';
import Template from '../components/Template';

export default {
    data(){
        return{

        }
    },
    components:{
        Widgets,
        Template
    },
    // 设置来纯粹做传递属性的
    props:{
        list: Array,
        fun: Function
    }
}
</script>

<style scoped>
.el-icon-date{
    padding: 0 8px 0 0;
}
</style>

