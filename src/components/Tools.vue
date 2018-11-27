<template>  
  <span contenteditable="false" :style="toolStyle">
      <!-- 为保证不会插入该标签中用了input -->
      <span 
          v-for="(item,index) in toolBtns"
          :key="index"         
          :index="index"
          :style="item.type==='WIDGET'?widgetBtnStyle:btnStyle" 
          @click="addCtrl(item.type,item.name, `krcd-${item.type.toLowerCase()}-${index}`)"
          readonly="readonly"
       >{{item.name}}</span>
  </span>
</template>

<script>
const btnStyle = {
        "margin": "0 4px 0"
      }
const widgetBtnStyle = {
        "padding": "6px",
        "background-color" : "#006bff",
        "color" : "#ffffff",
        "font-weight" : "bold",
        "border-radius" : "4px",
        "font-size" : "13px"
      }

export default {
  name: 'Tools',
  props: {
    addCtrl: Function,  // 通过props传入
    showHide: Boolean,
    toolStyle: Object,
    toolBtns: Array,    // 工具的数组
  },
  // extends: sdeEditor, // 继承自sdeEditor 
  data() {
    return {
      btnStyle: btnStyle,
      widgetBtnStyle: widgetBtnStyle
    };
  },
  mounted(){
    
  },
  methods: {
    // 赋予到自身的函数中
    // addCtrl(type){     
    //   console.log(this.add) ;
    //   ()=>this.props.addCtrl(type)
    // }
  }   
};
</script>

<style scoped>

</style>


