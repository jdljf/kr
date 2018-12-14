<template>  
  <div class="widget-container">
    <el-header style="height: 30px;
      box-sizing: border-box;
      background-color: #409EFF;
      color: #F2F6FC;
      line-height: 30px;
      font-size: 13px;
      text-align: left;
      padding: 0px 12px;"><i class="el-icon-menu"></i>&nbsp;&nbsp;列表</el-header>
    <slot></slot>
      <ul v-if="type!=='pat-list'" class='content'>
        <li class='content-item'  v-for="(item,index) in list" :key="index" :index="index" content="item.content?item.content:''" @click="todo(fun,item.content,item.styleString)">
          <span class="left">{{item.id}}</span>
          <span class="right">{{item.name}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
const btnStyle = {
        "margin": "0 4px 0"
      }

export default {
  name: 'Widgets',
  props: {
    list: Array,   // 通过props传入
    fun: Function,
    type: String
  },
  data() {
    return {
      
    };
  },
  mounted(){
    
  },
  methods: {
    // 一个函数的包装
    todo(fun,args,styleString){
      return fun(args,styleString) // 返回该函数的运行
    }
  }   
};
</script>

<style scoped>

.widget-container{
  height:100%;
  display: flex;
  overflow:hidden;
  flex-direction: column;
}

.title{
    height: 29px;
    background-color: #F1F1F1;
    border-bottom: #d4d4d4 1px solid;
    margin: 0;
    font-family: ff-tisa-web-pro-1, ff-tisa-web-pro-2, "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 13px;
    line-height: 29px;
}

.content{
  display: flex;
  flex-direction: column;
  font-size: 13px;
}

.content .content-item{
  flex-basis: 28px;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  padding: 8px;
  border-bottom: 1px solid #e5e5e5;
  background: #f7f7f7
}

.content .content-item .right{
  flex-grow: 1;
  text-align: left;
  padding-left: 12px;
}
</style>


