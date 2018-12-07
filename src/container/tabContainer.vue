<template>
    <el-tabs type="border-card">
        <el-tab-pane style="padding:0">
            <!-- slot 属性可以自定义标签内容而不像下面那些那样 -->
            <span slot="label"><i class="el-icon-document"></i>  文档模版<i class="circle circle-template">{{templatelist.length}}</i></span> 
            <Template :list="templatelist" :fun="templatefun" :savetemple="savetemplefun" :savewidget="savewidgetfun" :savectrl="savectrlfun" :ajaxtemple="ajaxtemple" :back2font="back2font" :getHtmlContent="getHtmlContent"/>
            <!-- 这里就是内容部分 -->
        </el-tab-pane>
        <el-tab-pane style="padding:0">
            <span slot="label"><i class="el-icon-tickets"></i>  段落模版<i class="circle circle-widget">{{widgetlist.length}}</i></span> 
            <Template :list="widgetlist" :fun="widgetfun" :savetemple="savetemplefun" :savewidget="savewidgetfun" :savectrl="savectrlfun" :ajaxtemple="ajaxtemple" :back2font="back2font" :getHtmlContent="getHtmlContent"/>
        </el-tab-pane>   
        <el-tab-pane style="padding:0">            
            <span slot="label"><i class="el-icon-edit-outline"></i>  元素（动态）模版<i class="circle circle-ctrl">{{ctrlist.length}}</i></span> 
            <Template :list="ctrlist" :fun="ctrlfun" :savetemple="savetemplefun" :savewidget="savewidgetfun" :savectrl="savectrlfun" :ajaxtemple="ajaxtemple" :back2font="back2font" :getHtmlContent="getHtmlContent"/>
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
        ctrlist: Array,   
        ctrlfun: Function, 
        patlist: Array,
        savetemplefun: Function,  
        savewidgetfun: Function,
        savectrlfun: Function,
        ajaxtemple: Function,  
        back2font: Function,
        getHtmlContent: Function
    },
    mounted(){        
       
    },
    methods:{
        
    }
}
</script>

<style scoped>
.el-icon-date{
    padding: 0 8px 0 0;
}
.circle{
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    font-size: 13px;
    text-align: center;
    border-radius: 50%;    
    vertical-align: middle;
    color:#F2F6FC;
    margin-left: 8px;
    margin-bottom: 2px;
}

.circle-ctrl{
    background-color: #67C23A;
}

.circle-template{
    background-color: #409EFF;
}

.circle-widget{
    background-color: #E6A23C;
}
</style>

