<template>
    <el-tabs type="border-card">
        <el-tab-pane style="padding:0" v-for="(item,index) in tabsArray" :key="index">
            <!-- slot 属性可以自定义标签内容而不像下面那些那样 -->
            <span slot="label">
                <i class="el-icon-document"></i>
                <span class="title">{{item.name}}</span>
                <i :class="`circle circle-${item.clsType}`">
                    <span>{{returnProps(item.list).length}}</span>
                </i>
            </span>             
            <Template
                    :index="index"
                    :templeCtrl="templeCtrl" 
                    :list="returnProps(item.list)"
                    :fun="returnProps(item.fun)"   
                    :savetemple="savetemplefun" 
                    :savewidget="savewidgetfun" 
                    :savectrl="savectrlfun" 
                    :ajaxtemple="ajaxtemple" 
                    :back2font="back2font" 
                    :getHtmlContent="getHtmlContent"
                    :getClickHtmlContent="getClickHtmlContent"  
                    :changeVisible="changeVisible"
                    >
                <!-- :templatehtmlContent="templatehtmlContent" -->
            </Template>
           
            <!-- 这里就是内容部分 -->
        </el-tab-pane>
        <!-- <el-tab-pane style="padding:0" v-show="tabshow.widgetlist">
            <span slot="label">
                <i class="el-icon-tickets"></i>  段落模版<i class="circle circle-widget">{{widgetlist.length}}</i>
            </span> 
            <Template 
                :templeCtrl="templeCtrl" 
                :list="widgetlist" 
                :fun="widgetfun" 
                :savetemple="savetemplefun" 
                :savewidget="savewidgetfun" 
                :savectrl="savectrlfun" 
                :ajaxtemple="ajaxtemple" 
                :back2font="back2font" 
                :getHtmlContent="getHtmlContent"/>
        </el-tab-pane>   
        <el-tab-pane style="padding:0" v-show="tabshow.ctrllist">            
            <span slot="label">
                <i class="el-icon-edit-outline"></i>  元素（动态）模版<i class="circle circle-ctrl">{{ctrlist.length}}</i>
            </span> 
            <Template 
                :templeCtrl="templeCtrl" 
                :list="ctrlist" 
                :fun="ctrlfun" 
                :savetemple="savetemplefun" 
                :savewidget="savewidgetfun" 
                :savectrl="savectrlfun" 
                :ajaxtemple="ajaxtemple" 
                :back2font="back2font" 
                :getHtmlContent="getHtmlContent"/>
        </el-tab-pane>             -->
    </el-tabs>
</template>

<script>
import Widgets from '../components/Widgets';
import Template from '../components/Template';
import Tree from '../components/Tree';

export default {
    data(){
        return{
            htmlContent: '',
            returnProps:function(key){
                return this[key]
            },
            
        }
    },
    components:{
        Widgets,
        Template,
        Tree,
    },
    // 设置来纯粹做传递属性的
    props:{
        templeCtrl: Boolean,
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
        getHtmlContent: Function,
        tabsArray: Array,
        getClickHtmlContent: Function,
        templatehtmlContent: String, 
        changeVisible:Function
    },
    mounted(){        
        // debugger
    //    console.log(this);
    },
    computed:{
        
    },
    methods:{
        
    }
}
</script>

<style scoped>

.title{
    padding-right: 9px;
}

.el-icon-date{
    padding: 0 8px 0 0;
}
.circle{
    display: inline-block;
    /* width: 18px; */
    height: 18px;
    line-height: 18px;
    font-size: 13px;
    text-align: center;
    /* border-radius: 50%;     */
    vertical-align: middle;
    color:#F2F6FC;
    margin-left: 8px;
    margin-bottom: 2px;
    position: relative;
}

.circle>span{
    z-index: 1;
    position: relative;
}

.circle::before{
    content: " ";
    width: 18px;
    height: 18px;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    position: absolute;
    left: 0;
    margin-left: -9px;
    /* background-color: #409EFF; */
}

.circle::after{
    content: " ";
    width: 18px;
    height: 18px;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    position: absolute;
    right: 0;
    margin-right: -9px;    
    /* background-color: #409EFF; */
}

.circle-ctrl,.circle-ctrl::after,.circle-ctrl::before{
    background-color: #67C23A;
}

.circle-template,.circle-template::after,.circle-template::before{
    background-color: #409EFF;
}

.circle-widget,.circle-widget::after,.circle-widget::before{
    background-color: #E6A23C;
}
</style>

