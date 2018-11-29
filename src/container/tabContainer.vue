<template>
    <el-tabs type="border-card">
        <el-tab-pane>
            <!-- slot 属性可以自定义标签内容而不像下面那些那样 -->
            <span slot="label"><i class="el-icon-tickets"></i>模版</span> 
            <Template :list="templatelist" :fun="templatefun"  :savetemple="savetemplefun" :savewidget="savewidgetfun" :ajaxtemple="ajaxtemple" :back2font="back2font"/>
            <!-- 这里就是内容部分 -->
        </el-tab-pane>
        <el-tab-pane label="组件">
            <!-- <Tree :list="patlist"></Tree> -->
            <Template :list="widgetlist" :fun="widgetfun" :savetemple="savetemplefun" :savewidget="savewidgetfun" :ajaxtemple="ajaxtemple" :back2font="back2font"/>
        </el-tab-pane>    
    </el-tabs>
</template>

<script>
import Widgets from '../components/Widgets';
import Template from '../components/Template';
import Tree from '../components/Tree';


export default {
    data(){
        return{

        }
    },
    components:{
        Widgets,
        Template,
        Tree
    },
    // 设置来纯粹做传递属性的
    props:{
        widgetlist: Array,
        widgetfun: Function,
        templatelist: Array,
        templatefun: Function,        
        patlist: Array,
        savetemplefun: Function,  
        savewidgetfun: Function,
        ajaxtemple: Function,  
        back2font: Function
    },
    mounted(){
        console.log(this.savetemplefun)
    }
}
</script>

<style scoped>
.el-icon-date{
    padding: 0 8px 0 0;
}
</style>

