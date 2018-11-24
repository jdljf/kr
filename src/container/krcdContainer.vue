<script>
import Tools from '../components/Tools'
import Widgets from '../components/Widgets'
import krcdEditor from '../components/krcdEditor'
import Tree from '../components/Tree'

export default {
  name: 'krcdContainer',
  extends: krcdEditor,
  props: {
    //编辑器的宽高取决于编辑器渲染节点本身的宽高
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    display: {
      type: String,
      default: 'flex',
    },    
  },
  components:{
      Tools,
      Widgets,
      krcdEditor,
      Tree
  },
  data() {
    return {  
      /* 初始化数据 */
      inSection: false,   // 聚焦点是否在文档段
      tarEl: null,   // 每次点击获取的DOM对象
      tarType: null,  // 每次点击获取的TYPE_NAME
      self: null,    // 让this.self可以引用this
      iframeWin: null,  // 将iframe下的window对象
      krcd: null,   // krcd
      onOff: {'opacity':'0','width':'0','height':'0'}, // 工具条显示隐藏开关      
      toolStyle: {},    // 初始化工具条样式

      // 初始化工具条按钮数组
      toolBtns: null,
      
      // 工具条所有可用按钮数组
      arrBtns: [{
          name: '文本', 
          type: 'TEXT'
        },
        {
          name: '下拉', 
          type: 'SELECT'
        },
        {
          name: '单选', 
          type: 'RADIO'
        },
        {
          name: '复选', 
          type: 'CHECKBOX'
        },
        {
          name: '📅', 
          type: 'DATE'
        },
        {
          name: '文档段', 
          type: 'SECTION'
        },
        {
          name: '存控件', 
          type: 'WIDGET'
        }],

      // 从localStorage中取模版数据存起来
      widgetlist: localStorage.getItem('moban')?
                    JSON.parse(localStorage.getItem('moban'))&&JSON.parse(localStorage.getItem('moban')).length!==0?
                        JSON.parse(localStorage.getItem('moban')):
                        []:
                    [],

      // 左方病人的共有列表格式（暂时就这样）
      patlist:[
              { name: '康软人1',id: 1 }, 
              { name: '康软人2',id: 2 }, 
              { name: '康软人3',id: 3 }, 
              { name: '康软人4',id: 4, count: 1 } // 这个为了子元素编号来设定的count
            ],    
      
      patlistOnoff: (event)=>{
        const e = event || window.event;
        alert(`你点击的是：第${+e.currentTarget.getAttribute('index')+1}个病人`)        
      },

      
      /* 初始化的函数对象 */

      /**
       * 1、控件插入
       * params {string} content   模版/控件/字典的innerHTML内容
       * params {string} styleString  head>style标签中的样式文本
       */
      insert: (content,styleString)=>{
        if(this.inSection===false){            
            const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document; // 获取iframe中的document
            
            // 确保初始化时没有聚焦导致不能倒入模版
            innerDoc.getElementsByClassName('krcd-tmp-content-value')[0].focus();

            // 所有有stylename的属性的style标签，并最后一个中增加样式
            const headStyle = document.createElement('style'); 
            headStyle.innerHTML = styleString;   // head中加入style
            if(innerDoc.querySelectorAll('style[stylename]').length!=0){   // 当拥有stylename属性的标签时
              let len = innerDoc.querySelectorAll('style[stylename]').length;
              innerDoc.querySelectorAll('style[stylename]')[len-1].innerHTML = styleString;
            }else{   // 当不拥有时插入对应dom
              innerDoc.getElementsByTagName('head')[0].appendChild(headStyle);
            }

            this.krcd.execCommand('inserthtml',content);  // 聚焦点插入内容

        }else{
            alert("请在【文档段】以外插入控件")
        }
        
      },

      /**
       * 2、根据控制器id和控件的id命名来获取对应的样式
       * params {string} ctrlId  模版/控件/字典的innerHTML内容
       * params {string} idName  head>style标签中的样式文本
       */
      styleTag: (ctrlId,idName)=>{
        return ''
        // `#${ctrlId}>*:nth-child(1){
        //       position: relative;
        //     }#${ctrlId}>*:nth-child(1)::before {
        //       text-indent: 5px;
        //       display: block;
        //       content: "${idName}";
        //       position: absolute;
        //       left: -40px;
        //       top: 0;
        //       line-height:20px;
        //       background-color: #ff000080;
        //       color: white;
        //       font-size: 12px;      
        //       text-align: center;        
        //       border-bottom-left-radius: 10px;
        //       border-top-left-radius: 10px;
        //     }`
      },
      
      /**
       * 3、section的有点特殊用法跟styleTag的一样
       * params {string} ctrlId  模版/控件/字典的innerHTML内容
       * params {string} idName  head>style标签中的样式文本
       */
      styleSection: (ctrlId,idName)=>{
        // 因为不想用relative所以改为在子元素加
        // 不知道为什么有分号分割的样式字符串会有问题
        return ""
        // `#${ctrlId}>*:nth-child(1){
        //       position: relative;
        //     }#${ctrlId}>*:nth-child(1)::before {
        //       padding: 0 4px;
        //       display: block;
        //       content: "${idName}";
        //       position: absolute;
        //       left: -5px;
        //       top: -28px;
        //       line-height:20px;
        //       background-color: #006bff80;
        //       color: white;
        //       font-size: 12px;         
        //       border-top-right-radius: 4px;
        //       border-top-left-radius: 4px;
        //     }`
      },
      
    }
  },
  methods: {    

    // 去除字符串头尾空格
    strTrim(str) {
      return str.replace(/^\s+|\s+$/gm,'');
    },

    // 保存文档段为控件
    saveSection2Widget(itemName="哈哈哈哈", callback=()=>{}){     
      let target;
      if(this.tarEl.className ==='krcd-value'&&this.tarEl.parentNode.className==='krcd-ctrl krcd-section'){
          target = this.tarEl.parentNode
      }else if(this.tarEl.className==='krcd-ctrl krcd-section'){
          target = this.tarEl
      }     
      const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document; 

      // 克隆dom内容，移动到临时创建的div
      const newDOM = innerDoc.createElement('div');  
      const cloneTaget = target.cloneNode(true);
      newDOM.appendChild(cloneTaget); 
      let htmlContent = newDOM.innerHTML; 

      // 获取style标签中样式函数
      const headStyleString = (()=>{
        const arr = innerDoc.querySelectorAll(`style[stylename]`); 
        const newArr = []
        for(let i=0, len=arr.length;i<len;i++){
          newArr.push(this.strTrim(arr[i].innerHTML))
        }
        return newArr.join('')
      })()  
      
      // 创建需要存到模版的对象
      const newItem = {
          name: '文档段' + target.id,
          id: target.id,
          styleString: headStyleString,// style标签中的样式存起来插到模版对应的style标签中  
          content: htmlContent
      }

      // 将模版push到widgetlist数组中
      this.widgetlist.push(newItem);

      // 保存到localStorage
      localStorage.setItem('moban',JSON.stringify(this.widgetlist))
      
      return callback() 
    },  

    // 保存真整页内容为模版
    saveHtmlContent(itemName="哈哈哈哈", callback=()=>{}){

      const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document;  // 通过这样来获取iframe中的document
      let htmlContent = innerDoc.getElementsByClassName('krcd-tmp-content-value')[0].innerHTML;  // 获取对应的innerHTML    
      // console.log(innerDoc.querySelectorAll('style[stylename]'))

      const headStyleString = (()=>{
        const arr = innerDoc.querySelectorAll('style[stylename]');
        const newArr = []
        for(let i=0, len=arr.length;i<len;i++){
          newArr.push(this.strTrim(arr[i].innerHTML))
        }
        return newArr.join('')
      })()  
      
      const newItem = {
          name: itemName,
          // id: 1111,
          styleString: headStyleString,// style标签中的样式存起来插到模版对应的style标签中  
          content: htmlContent
      }
      this.widgetlist.push(newItem);

      // 设置localStorage
      localStorage.setItem('moban',JSON.stringify(this.widgetlist))
      
      return callback()
    },     

    /************************
     * 以下为每个工具栏中的方法
     ***************************/

    /**
     * 创建控件text
     */
    createText(domSet={ctrlId:null,ctrlStyle:null}, defOpt){
        let div = document.createElement('span');
        div.innerHTML = `<span class="krcd-ctrl" krcd-type="text" krcd-right="." id=${domSet.ctrlId?domSet.ctrlId:'ctrl-text'} style=${domSet.ctrlStyle?domSet.ctrlStyle:null} contenteditable="false" ><span class="krcd-value" krcd-left="[" krcd-right="]" contenteditable="true" ></span></span>`;
        div = div.firstElementChild; 
        let newDiv = this.krcd.createCtrl(div, defOpt?defOpt:{
            "mode":"EDITOR",//控件状态。EDITOR编辑;READONLY只读
            "notdel":0,//是否不许删除，默认0位可以删除
            "strictverify":0,//是否强制校验（不符合要求既不允许输入），默认为0不强制校验
            "verify":"",//验证输入是否符合要求，可自己定义表达式
            "required":0,//是否必填
            "desc":"文本输入",//控件描述值
        })
        return newDiv
    },

    // 增加select
    createSelect(domSet={ctrlId:null,ctrlStyle:null}, defOpt){
        let div = document.createElement('span');
        div.innerHTML = `<span class="krcd-ctrl" contenteditable="false" krcd-type="select" id=${domSet.ctrlId?domSet.ctrlId:'ctrl-select'} style=${domSet.ctrlStyle?domSet.ctrlStyle:null}><span contenteditable="true" class="krcd-value"></span></span>`;  // 这里有个bug，内部标签不能用p要用span
        div = div.firstElementChild; 
        let newDiv = this.krcd.createCtrl(div, defOpt?defOpt:{
            "mode":"EDITOR",//控件状态。EDITOR编辑;READONLY只读
            "notdel":0,//不许删除
            "strictverify":0,//强制校验
            "required":0,//是否必填
            "multi":0,//是否多选，默认0为单选，1为多选
            "desc":"性别",//描述值
            "bindingdata":[//默认绑定数据。
              {label:'男',value:'1'},
              {label:'女',value:'2'},
              {label:'未知',value:'3'}
            ],
            // 下放注释预留请求接口用的

            //bindingdata和remotedata为二选一，如果remotedata存在的话则优先取remotedata值。
            // "remotedata":{//krcd v4的异步请求采用目前主流的axios，remotedata为发起异步请求时的配置项目
            //     "url": "",//这里建议配置初始化KRCD时options中的ctrl_remote_handle一起用，因为存在你设置模板跟你打开模板时当前路径不一致的情况，导致如果用相对路径会出错的情况（如果用绝对路径也会存在换一家医院实施所有模板都需要改的情况）。故所有控件中的异步请求数据在发起请求前都会调用options.ctrl_remote_handle方法进行处理（也可以加一些权限控制）
            //     "method":"get",
            //     "headers":{
            //     },
            //     "data": urldata.data
            // }
        })
      
      newDiv.refreshData([true])
      
      // 设置默认值
      newDiv.setValue([{label:'男',value:'1'}])
     
      return newDiv
    },
    // 增加点选
    createRadio(domSet={ctrlId:null,ctrlStyle:null}, defOpt){
      let div = document.createElement('span');   
      div.innerHTML = `<span id=${domSet.ctrlId?domSet.ctrlId:'ctrl-radio'} style=${domSet.ctrlStyle?domSet.ctrlStyle:null} krcd-right="." krcd-type="radio" class="krcd-ctrl"  contenteditable="false"><span contenteditable="true" krcd-left="[" krcd-right="]"  class="krcd-value"></span></span>`
      div = div.firstElementChild;
      let newDiv = this.krcd.createCtrl(div, defOpt?defOpt:{
          "mode":"EDITOR",//当前模式
          "notdel":0,//不许删除
          "strictverify":0,//强制校验
          "desc":"",//描述
          "required": 0, // 必须的
          "strictverify": 0,  // 严格模式
          "multi": 1,          
          "bindingdata": [
            { "value":"1","label":"感觉很好","selected":0 },
            { "value":"2","label":"感觉一般","selected":0 }, 
            { "value":"3","label":"无感觉","selected":0}, 
            { "value":"4","label":"感觉糟糕","selected":0 }
          ],
          // "remotedata":{//krcd v4的异步请求采用目前主流的axios，remotedata为发起异步请求时的配置项目
          //     "url":"",//这里建议配置初始化KRCD时options中的ctrl_remote_handle一起用，因为存在你设置模板跟你打开模板时当前路径不一致的情况，导致如果用相对路径会出错的情况（如果用绝对路径也会存在换一家医院实施所有模板都需要改的情况）。故所有控件中的异步请求数据在发起请求前都会调用options.ctrl_remote_handle方法进行处理（也可以加一些权限控制）
          //     "method":"get",
          //     "headers":{
          //     },
          //     "data":{                
          //     }
          // }
      })

      newDiv.refreshData([true]) 

      newDiv.setValue({ "label": "感觉很好", "value": 1 }) // 设置默认值但是貌似不成功

      return newDiv
    },

    createCheckbox(domSet={ctrlId:null,ctrlStyle:null}, defOpt){
      let div = document.createElement('span');  
      div.innerHTML = `<span id=${domSet.ctrlId?domSet.ctrlId:'ctrl-checkbox'} style=${domSet.ctrlStyle?domSet.ctrlStyle:null} krcd-right="." krcd-type="checkbox" class="krcd-ctrl"  contenteditable="false"><span contenteditable="true" krcd-left="[" krcd-right="]"  class="krcd-value"></span></span>`
      div = div.firstElementChild;
      let newDiv = this.krcd.createCtrl(div, defOpt?defOpt:{
                "mode":"EDITOR",//当前模式
                "notdel":0,//不许删除
                "strictverify":0,//强制校验
                "desc":'多选框',//描述
                "bindingdata":[//绑定数据
                    {
                        "label":"感觉很好",
                        "value":1
                    },
                    {
                        "label":"感觉一般",
                        "value":2
                    }
                ],
                // "remotedata":{//krcd v4的异步请求采用目前主流的axios，remotedata为发起异步请求时的配置项目
                //     "url":"",//这里建议配置初始化KRCD时options中的ctrl_remote_handle一起用，因为存在你设置模板跟你打开模板时当前路径不一致的情况，导致如果用相对路径会出错的情况（如果用绝对路径也会存在换一家医院实施所有模板都需要改的情况）。故所有控件中的异步请求数据在发起请求前都会调用options.ctrl_remote_handle方法进行处理（也可以加一些权限控制）
                //     "method":"get",
                //     "headers":{
                //     },
                //     "data":{
                //     }
                // }
            })
      newDiv.refreshData([true]);
      newDiv.setValue([
              {
                  "label":"感觉很好",
                  "value":1
              },
              {
                  "label":"感觉一般",
                  "value":2
              }
          ])
      return newDiv
    },

    // Date控件
    /**
     * params1{object}: domSet
     *   |- ctrlId : 控件id / string
     *   |- ctrlStyle : 控件样式 / string
     * 
     * params2{object}: defOpt  (不传入即按照默认值)
     */
    createDate(domSet={ctrlId:null,ctrlStyle:null}, defOpt){
      let div = document.createElement('span');      
      div.innerHTML = `<span class="krcd-ctrl" id=${domSet.ctrlId?domSet.ctrlId:'ctrl-date'} style=${domSet.ctrlStyle?domSet.ctrlStyle:null} krcd-type="date"><span class="krcd-value" contenteditable="true" krcd-left="[" krcd-right="]"></span></span>`     
      div = div.firstElementChild;      

      // 时间戳转时间函数
      function timestampToTime(timestamp) {
        let date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        return Y+M+D+h+m+s;
      }       

      /* 创建控制器（装饰了一下原来的DOM元素）*/
      let newDiv = this.krcd.createCtrl(div, defOpt?defOpt:{
          "mode":"EDITOR",//当前模式
          "notdel":0,//是否可以删除
          "strictverify":0,//是否强制校验
          "required":0,//是否必填
          "desc":"日期控件",//描述
          "defvalue":timestampToTime(Math.round(new Date().getTime()/1000)),//默认值
          "format":"{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}",//格式化要求。必须以大括号包裹。
          "min":"",//最小日期
          "max":""//最大日期
      })
       
      return newDiv 
    },

    /**
     * 专门做插入控件之用
     * params1{object}: newDiv（基本来自createDate）
     */
    addCtrl(type, ctrlName, ctrlId='', ctrlStyle='', Opt=null){          
     
      let domSet = {
        'ctrlName': ctrlName,
        'ctrlId': ctrlId,
        'ctrlStyle': `${ctrlStyle};padding-left:4px;display:inline-block;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px`  // 为了before伪类定位用
      }
      // 判断
      let newDiv;  
      switch(type){
        case "DATE":
            newDiv=this.createDate(domSet,Opt)
            break
        case "SELECT":
            newDiv=this.createSelect(domSet,Opt)
            break
        case "RADIO":
            newDiv=this.createRadio(domSet,Opt)
            break
        case "CHECKBOX":
            newDiv=this.createCheckbox(domSet,Opt)
            break
        case "TEXT":
            newDiv=this.createText(domSet,Opt)
            break
        case "SECTION":
            this.addSection([],{
              'ctrlName': ctrlName,
              'ctrlId': ctrlId,
              'ctrlStyle': `${ctrlStyle};position:relative;padding:4px;margin-top:20px;background-color:#006ffc14;border-width:1px;border-style:solid;border-color:#006ffc7d;margin-top:4px;box-sizing:border-box`
              })           
            break
        case 'WIDGET':
            if(this.inSection===true){
              this.saveSection2Widget()
            }else{
              alert('请点击文档段')
            }            
            break            
        default:
            alert('请选择正确的type')
            return
      }

      // 每次插入都附带上对应的的样式
      let headerTag = this.iframeWin.document.getElementsByTagName('head')[0];   
      let styleDOM = this.iframeWin.document.createElement('style');
      styleDOM.setAttribute("stylename", ctrlId)
      if(type!=="SECTION"){
        styleDOM.innerHTML = this.styleTag(ctrlId, ctrlName) + ctrlStyle;
      }else{
        styleDOM.innerHTML = this.styleSection(ctrlId, ctrlName) + ctrlStyle;
      }
      headerTag.appendChild(styleDOM);

      
      if(type !== "SECTION"&&type !== "WIDGET"){
        this.krcd.insertControl(
          newDiv.getCtrlElement(),  //  获取会对应的Element
          newDiv.getOpt()     //  获取会对应的opt
        )
      }
      
      // 插入后隐藏工具条
      this.onOff = {'opacity':'0'}
    },

    // 插入Section区域控件（文档段）
    addSection(newDiv,domSet={ctrlId:null, ctrlName:null,ctrlStyle:null}){           
      let div = document.createElement('div');     
      div.innerHTML = `
         <div class="krcd-ctrl krcd-section" contenteditable="false" krcd-type="section" id=${domSet.ctrlId?domSet.ctrlId:'ctrl-section'} style=${domSet.ctrlStyle ? domSet.ctrlStyle: null} krcd-isloadasyncdata="false"><p contenteditable="true" class="krcd-value"></p></div>
        `
      div = div.firstElementChild; 
     
      let sp;
      if(newDiv){
          sp = document.createElement('div');
          // 遍历数组控件，返回dom
          newDiv.forEach(item => {
            sp.appendChild(item.getCtrlElement());
          })
          console.log(sp)
      }      

      // 插入控制器
      this.krcd.insertControl(div,{
          "mode":"EDITOR",//当前模式
          "originalmode":"EDITOR",//原始模式
          "desc": sp ? sp.innerHTML:'',//描述
        }//区域控件有时会随着当前业务的要求而进行模式的变更，在控件被渲染时默认将mode与originalmode进行同步。originalmode的存在也是为了方便区域控件模式重置)
      )
    },


    execCommand() {
      return this.krcd.execCommand.apply(this.krcd, arguments);
    },
    mode(mode) {
      if (!!mode) {
        this.krcd.mode(mode);
      } else {
        return this.krcd.mode();
      }
    },
    getHTML() {
      return this.krcd.html();
    },
    setHTML(html) {
      this.krcd.html(html);
    },

    
  },
  created() {
    console.log('krcd components created.');
    
  },
  beforeUpdate(){
      // console.log(document.getElementsByTagName('iframe'))
  },
  mounted() {   
    
    let self = this;
    
    // 点击聚焦
    this.krcd.addListener('click', function(event) {

       console.log(arguments);

      // 获取ifame中的window
      self.iframeWin = document.getElementsByTagName('iframe')[1].contentWindow

      let e = event || window.event;    
      
      self.tarEl = arguments[0].target;  // 获取点中的对象
      
      self.onOff = {'opacity':'1'}   // 点击让工具条显示

      // 判断点击的控件是否在section中，并控制工具条呈现的功能
      if(arguments[1]!==null){  
        if(arguments[1]['TYPE_NAME']==='section'){  
          self.inSection = true;
          // 切割成这样，不显示插入文档段
          // console.log('找到有section')
          self.toolBtns = self.arrBtns.slice(0,self.arrBtns.length-2);  
          self.toolBtns.push(self.arrBtns[self.arrBtns.length-1]); 
        }else{       
          for(let i=0, arr = arguments[0].path, len = arr.length;i<len;i++){
              if(arr[i].className==="krcd-ctrl krcd-section"){   
                console.log('找到有section')
                self.inSection = true
                self.toolBtns = self.arrBtns.slice(0,self.arrBtns.length-2);  
                self.toolBtns.push(self.arrBtns[self.arrBtns.length-1]);   
                return  // 跳出循环
              }                                
          }
          self.inSection = false
          self.toolBtns = self.arrBtns.slice(0, self.arrBtns.length-1)   
        }            
      }else if(arguments[1]===null){
        self.inSection = false        
        self.toolBtns = self.arrBtns.slice(0, self.arrBtns.length-1)
      }

      // 选择空白处自动聚焦
      if(arguments[0].path[0].className==="krcd-tmp-content"){  

        // 定位div(contenteditable = "true")聚焦点到最后的函数
        function po_Last_Div(obj, docObj) {   
            if (window.getSelection) {//ie11 10 9 ff safari  
                // obj.focus(); //解决ff不获取焦点无法定位问题              // 这里会让我的直接到元素的位置处
                var range = docObj.getSelection();//创建range
                range.selectAllChildren(obj);//range 选择obj下所有子内容
                range.collapseToEnd();//光标移至最后
            }
            else if ( document.selection) {//ie10 9 8 7 6 5
                var range = document.selection.createRange();//创建选择对象
                //var range = docObj.body.createTextRange();
                range.moveToElementText(obj);//range定位到obj
                range.collapse(false);//光标移至最后
                range.select();
            }
        }        
      const editDOM = arguments[0].path[0].querySelector('.krcd-tmp-content-value');
      const len = editDOM.length;
      
      if(editDOM.querySelectorAll('p').length === 1 && !editDOM.querySelector('p').className){
          editDOM.removeChild(editDOM.querySelector('p'))
      }
        
      // 聚焦到最后
      po_Last_Div(editDOM, self.iframeWin)
        

      }else if (arguments[1]!==null&&arguments[1]['TYPE_NAME']!=='section'){      // 选中文档段中控件时隐藏工具条
         self.onOff = {'opacity':'0'}  
      }

      // 根据点击对象的坐标给组件传值来定位
      const getPositon = ()=>{
        let editorX = document.querySelector('.krcd-editor-inner').offsetLeft
        let editorY = document.querySelector('.krcd-editor-inner').offsetTop
        let toolsH = document.querySelector('.krcd-toolbars').offsetHeight
        console.log(document.querySelector('.tools-btn'))
        let toolbtnW = document.querySelector('.tools-btn').offsetWidth
        let toolbtnH = document.querySelector('.tools-btn').offsetHeight

        // 设定工具条的样式
        const sources = {
          "flex": 1,
          "display": "flex",
          "align-items": "center",
          "flex-direction": "row", 
          "background-color": "white",        
          "padding": "4px",
          'position': 'absolute',
          'left': editorX + arguments[0].clientX + toolbtnW + 'px',
          'top': toolsH + editorY + arguments[0].clientY + toolbtnH + 'px',   
          'border':"1px solid #d3d3d3",
          'height':'30px',
          "margin-top": "-30px",
          'z-index': '1005',
          'box-shadow': '1px 1px 4px #00000033'
        }

        // 改变工具条数据
        self.toolStyle = {
          ...self.toolStyle, ...sources
        }     
      }

      // 每次点击都重新定位工具条
      getPositon()      

      // 点中初始化时的p不能编辑，所以赋予它可编辑的属性
      if(arguments[0].path[0].attributes.length===0&& arguments[1]!==null&& arguments[1]['TYPE_NAME']==='section'){         
        arguments[0].path[0].setAttribute("contenteditable","true");
        arguments[0].path[0].className = 'krcd-value';
        arguments[0].path[0].focus();
      }
    });
    
    
  },
  beforeDestroy() {
    this.krcd.__ue__.destroy();
  },
};
</script>
