<template>
  <el-container class="container">
    <el-tag :type="chosedIndex===index?'':'info'" size="medium" :key="index" v-for="(tag,index) in dynamicTags" :disable-transitions="false" ref="tag">
      <span  @click="choseChange(index)">{{tag}}</span>
    </el-tag>
    <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="mini" 
      @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
    </el-input>
    <el-button type="success" v-else-if="btnVisible" class="button-new-tag" size="small" @click="showInput">自定义</el-button>
    <el-button type="success" v-else class="button-new-tag" size="small" @click="editInput">修改</el-button>
  </el-container>
</template>


<style>
  .el-tag+.el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 28px;
    line-height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;    
  }

  .input-new-tag>input {
    height: 24px;
    line-height: 22px;
  }

</style>

<script>
  export default {
    name: 'Tag',
    props:{
      returnDataFun: Function  // 返回数据
    },
    data() {
      return {
        dynamicTags: ['系统标签1', '系统标签2', '系统标签3'],
        dataLen: null,
        chosedIndex: null,
        inputVisible: false,
        btnVisible: true,
        inputValue: ''
      };
    },
    created(){
        this.dataLen = this.dynamicTags.length;   // 将系统标签长度存起来
    },
    computed:{
        // // 选中的内容
        // themeId: function(){
        //     // 顺带返回数据
        //   return this.dynamicTags[chosedIndex]
        // }
    },
    methods: {
    //   // 删除功能
    //   handleClose(tag) {
    //     this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    //   },

      choseChange(index){
        // debugger
        // console.log(this)
        // console.log(this.$refs.tag[[index]].type)
        // this.$refs.tag[index].type = "";
        this.chosedIndex = index;
        this.returnDataFun(index) // 返回index
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
        this.btnVisible = false;
      },

      // 修改
      editInput() {    
        if(this.dataLen!==this.dynamicTags.length){
          this.dynamicTags=[...this.dynamicTags.slice(0,-1)]
        }
        this.inputVisible = true; 
        // this.handleInputConfirm();        
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          console.log(this.dataLen)
          if(this.dataLen===this.dynamicTags.length){
            this.dynamicTags.push(inputValue);
            this.chosedIndex = this.dynamicTags.length-1;  // 自动选中自定义的
          }else{
            console.log(this.dynamicTags)
            this.dynamicTags=[...this.dynamicTags.slice(0,-1),inputValue]            
          }       
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }

</script>

<style scoped>
.container{
  height: 40px;
  display: flex;
  align-items: center;
}
</style>

