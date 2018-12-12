
<template>
    <!-- 树形图，show-checkbox属性能让组件可选择 -->
    <div class='tree-box'>
        <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText"
            class='input-box'
            >
        </el-input>
        <!-- <el-button @click="change">方式简单看了附近卡斯蒂略附近的</el-button> -->
        <div class="tree">
          <keep-alive>
          <el-tree            
            :props="treeProps"
            :load="loadNode"
            lazy
            show-checkbox
            default-expand-all
            @check-change="handleCheckChange"
            @node-click="handleNodeClick"
            :filter-node-method="filterNode"
            :data='list'
            :accordion="true"            
            ref='list'
            >
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ node.label }}</span>
              <span>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => append(data)">
                  Append
                </el-button>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => remove(node, data)">
                  Delete
                </el-button>
              </span>
            </span>
          </el-tree>    
          </keep-alive>
        </div>
    </div>    
</template>

<script>
  let id = 0;
  export default {
    name: 'Tree',
    data() {
      // props属性绑定的数据就是设定树形节点标签的。label是当前节点标签标题，而children就是子节点，一直嵌套就能一直延伸树状图
      return { 
        filterText: '',   // 与input双向绑定了
        treeProps: {
          label: 'name',
          children: 'zones',
          
        },   
        treeData:[]
      };
    },   
    props:{
        list: Array,  // 传入病人列表
        templateTag: Array,
    },    
    // vue观察的函数
    watch: {
      // 对filterText进行观察
      filterText(val) {
        this.$refs.list.filter(val);  // 要对tree设定ref和:filter-node-method="filterNode"才能过滤
      },       
      templateTag: function(value,old){
        return value
      }

    },
    created(){
      console.log(this.templateTag)
      console.log(this.list)
      console.log(this.templateTag)
      // 必须组合一个tree对象让增加删除有数据可操作
      // const temp = this.templateTag;  
      // this.treeData = this.list.map(element => {
      //   return {...element, 'children':[...temp]}
      // });    
      // console.log(this.treeData)
      // let that = this
      // console.log(that.templateTag)
      // this.treeData = this.list.map(function(element){
      //     return {...element, 'children':[...that.templateTag]}
      //   });    
      // console.log(this.treeData)
    },
    computed:{
      // treeData: function(){
      //   let that = this
      //   const aaa = this.list.map(function(element){
      //     return {...element, 'children':[...that.templateTag]}
      //   });    
      //   console.log(aaa)
      //   return aaa
      // }      
    },
    mounted(){
      // 改变默认的属性
      console.log(this.treeData)
      // this.$refs.list.store.defaultExpandAll=true
    } ,
    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      change(){
        debugger
        this.treeData.push({name: 'sdsad2',id :23,childre:[]})
      },

       /* 自定义树节点，用于底层文件数量部分 */
       // 添加树节点
    //    append(data) {
    //     const newChild = { id: id++, name: 'testtest', children: [] };
    //     if (!data.children) {
    //       this.$set(data, 'children', []);
    //     }
    //     data.children.push(newChild);
    //   },
    //   // 移除树节点
    //   remove(node, data) {
    //     const parent = node.parent;
    //     const children = parent.data.children || parent.data;
    //     const index = children.findIndex(d => d.id === data.id);
    //     children.splice(index, 1);
    //   },
    //   // 渲染自定义工具栏
    //   renderContent(h, { node, data, store }) {
    //     return (
    //       <span class="custom-tree-node">
    //         <span>{node.label}</span>
    //         <span>
    //           <el-button size="mini" type="text" on-click={ () => this.append(data) }>新建</el-button>
    //           <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
    //         </span>
    //       </span>);
    //   },

      // 搜索匹配函数
      filterNode(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1 ;  // 这里要设定监控data中的那个字段，例子中用label而我的是name
      },

      // 选择checkbox时的函数
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      // 点击节点的函数
      handleNodeClick(data) {
        console.log(data);
        // alert(`你点击的是${data.name}`) 
        console.log(this.$refs.list.store.defaultExpandAll)

        // // 改变默认的属性
        // this.$refs.list.store.defaultExpandAll=true
      },

      // 加载节点函数，绑定load属性，加载时绑定对应树状数据
      // node应该是标签定的属性，resolve是解析数据加载的
      loadNode(node, resolve) {  
        if (node.level === 0) {
          console.log(this.list)
          return resolve(this.list);  // 这里count自定义为1作为编号
        }  
        console.log(this.templateTag instanceof Array)   
        if (node.level === 1) {
          // 这里无效
          console.log(this.templateTag)
          return resolve(this.templateTag)
          
          // 这里有效
          // return resolve(this.treeData);  // 这里count自定义为1作为编号
        }
        // 子节点大于3层后必然范围空节点
        if (node.level > 3) return resolve([]);
        
        // 随机判断有没有child和数量
        var hasChild;
        if (node.data.name === '24小时内入出院记录') {
          hasChild = true;
        } else if (node.data.name !== '24小时内入出院记录') {
          hasChild = false;
        } 
        // else {
        //   hasChild = Math.random() > 0.5;
        // }

        // 函数内的data就是子中的数据？之前的data是返回到标签属性中的data
        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: node.data.name + node.data.count++, id: id++, 
            }, {
              name: node.data.name + node.data.count++, id: id++, 
            }];
          } else {
            data = [];
          }
          console.log(data)
          resolve(data);
        }, 500);    

        
        console.log(this.list)    

        
      }
      
    }
  };
</script>

<style scoped>
    .tree-box{
        width: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    .tree{
        width: 100%;
        flex-grow:1;
        overflow: auto;
        padding-right: 20px;
        box-sizing: border-box;
        padding-bottom: 8px;
    }
    .input-box{
        box-sizing: border-box;
        width: 100%;
        padding: 8px;
        flex-shrink: 0
    }
    /* 自定义工具样式 */
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
</style>
