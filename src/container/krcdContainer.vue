<script>
  import Tools from '../components/Tools'
  import Widgets from '../components/Widgets'
  import krcdEditor from '../components/krcdEditor'
  import Tree from '../components/Tree'
  import Models from '../components/Template'
  import NavMenu from '../components/NavMenu'
  import CommitTable from '../components/CommitTable'
  import FileList from '../components/FileList'
  import {
    ajax
  } from '../common'

  import funs from '../common/funs'
  import tabContainer from './tabContainer'

  // import '../assets/js/jquery-1.7.2.min.js';
  // import '../assets/js/jquery.jrumble.1.3.min.js';

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
    components: {
      FileList,
      Tools,
      Widgets,
      krcdEditor,
      Tree,
      Models,
      tabContainer,
      NavMenu,
      CommitTable
    },
    computed: {
      // // 这是控制工具栏开关的
      // onOff: function(){
      //   let temp = this.onOffStatus;
      //   this.onOffStatus = !temp
      //   return !temp 
      //   // this.inCtrl===true?{'opacity':'0','width':'0','height':'0'}:{'opacity':'1'}   // 在控件中并且不是section内控件的都会隐藏工具        
      // },
      // 工具栏展示状态
      toolBtns: function () {
        switch (this.saveAble) {
          case 'ctrlAble':
            return []
            // [...this.arrBtns.slice(this.arrBtns.length-1)]
            break
          case 'sectionAble':
            const newTools = [...this.arrBtns.slice(0, this.arrBtns.length - 3)];
            newTools.push(this.arrBtns[this.arrBtns.length - 2])
            return newTools
            break
          case 'normal':
            return [...this.arrBtns.slice(1, this.arrBtns.length - 2)]
            break
          default:
            return []
            // [...this.arrBtns.slice(0, this.arrBtns.length-2)]
            break
        }
      },
      arrBtns: function () {
        // console.log(this.selectedHtml)
        return this.arrBtnsFun(this)
      }
    },
    data() {
      return {
        tabsArray: [{
            clsType: 'template',
            iconCls: 'el-icon-document',
            name: '文档模版',
            list: "templatelist",
            fun: "templatefun",
          },
          {
            clsType: 'widget',
            iconCls: 'el-icon-tickets',
            name: '段落模版',
            list: "widgetlist",
            fun: "widgetfun",
          },
          {
            clsType: 'ctrl',
            iconCls: 'el-icon-edit-outline',
            name: '元素（动态）模版',
            list: "ctrlist",
            fun: "ctrlfun",
          }
        ],

        // tab子页的呈现
        // tabshow:{
        //   templatelist: true,
        //   widgetlist: true,
        //   ctrllist: true,
        // },
        fullscreenLoading: true, // true时显示loading
        leftTreeWidth: 0, // 左方收起展开
        rightTreeWidth: 0, // 左方收起展开
        templeCtrl: false, // 整个模版的编辑和删除的控制
        toolsShow: false, // 工具的隐藏
        /**
         * 切换模式的数据
         * 1. DESIGN 设计模式；
           2. EDITOR 编辑模式；
           3. STRICT 严格模式（表单模式）；
           4. READONLY 只读模式；
         */
        modelsData: [{
            name: 'DESIGN',
            tip: '设计模式',
            type: '',
          },
          {
            name: 'EDITOR',
            tip: '编辑模式',
            type: '',
          },
          {
            name: 'STRICT',
            tip: '严格模式（表单模式）',
            type: '',
          },
          {
            name: 'READONLY',
            tip: '只读模式',
            type: '',
          },
        ],

        /* 初始化数据 */
        commitShow: {
          OnOff: false
        }, // 给初始化弹窗保存动态模版用的
        saveDynamicData: null,

        // 返回提交数据的函数
        returnCommitData: (data) => {
          this.saveDynamicData = { ...data
          };
          this.saveCtrl2Widget(this.saveDynamicData)
        },

        selectedText: '', // 用来存储选中文字的数据
        selectedHtml: '',
        saveAble: null, // 保存允许状态。 只允许ctrlAble和sectionAble
        notInSectionCtrl: false,
        inSectionCtrl: false,
        inCtrl: false, // 聚焦点是否在非文档的控件中
        inSection: false, // 聚焦点是否在文档段
        tarEl: null, // 每次点击获取的DOM对象
        tarCtrl: null, // 每次点击获取的控件
        self: this, // 让this.self可以引用this
        iframeWin: null, // 将iframe下的window对象
        krcd: null, // krcd
        onOffStatus: true,
        toolStyle: {}, // 初始化工具条样式

        // 模版类型
        templateTag: [],
        
        // [{
        //     id: "0",
        //     title: "住院病案首页"
        //   },
        //   {
        //     id: "1",
        //     title: "病程记录"
        //   },
        //   {
        //     id: "2",
        //     title: "入院记录"
        //   },
        //   {
        //     id: "4",
        //     title: "24小时内入出院记录"
        //   },
        // ],
        // 组件类型（归属于哪种表）
        widgetTag: [{
            id: "0",
            title: "获得性免疫缺陷综合征(HIV)"
          },
          {
            id: "1",
            title: "肿瘤（tumour）"
          },
          {
            id: "2",
            title: "帕金森病（Parkinson’s disease，PD）"
          },
          {
            id: "4",
            title: "肌萎缩侧索硬化（ALS）"
          },

        ],

        // 初始化工具条按钮数组
        // toolBtns: null,

        // 工具条所有可用按钮数组
        arrBtnsFun: (self) => {
          return [
            // 暂时不要它
            {
              name: '粘贴',
              type: 'PASTE',
              iconCls: 'el-icon-refresh',
              // 预留每个类型的字典
              dic: [

              ]
            },
            {
              name: '文本',
              type: 'TEXT',
              iconCls: 'el-icon-edit',
              // 预留每个类型的字典
              dic: [{
                group: "粘贴嵌套模块", // 分组名
                groupItems: [{
                  name: self.selectedText !== '' ? self.selectedText : "（没内容）",
                  // content: '['+ self.createText({ctrlId:null,ctrlStyle:null}, null, self.selectedHtml).show +']',
                  obj: self.createText({
                    ctrlId: null,
                    ctrlStyle: null
                  }, null, self.selectedText),
                  date: "",
                }] // 组项目
              }, ]
            },
            {
              name: '下拉',
              type: 'SELECT',
              iconCls: 'el-icon-location',
              dic: [{
                group: "粘贴嵌套模块", // 分组名
                groupItems: [{
                  name: self.selectedText !== '' ? self.selectedText : "（没内容）",
                  // content: '['+ self.createSelect({ctrlId:null,ctrlStyle:null}, null, self.selectedHtml).show +']',
                  obj: self.createSelect({
                    ctrlId: null,
                    ctrlStyle: null
                  }, null, self.selectedText),
                  date: "",
                }] // 组项目
              }, ]
            },
            {
              name: '单选',
              type: 'RADIO',
              iconCls: 'el-icon-more-outline',
              dic: [{
                group: "粘贴嵌套模块", // 分组名
                groupItems: [{
                  name: self.selectedText !== '' ? self.selectedText : "（没内容）",
                  // content: '['+ self.createRadio({ctrlId:null,ctrlStyle:null}, null, self.selectedHtml).show +']',
                  obj: self.createRadio({
                    ctrlId: null,
                    ctrlStyle: null
                  }, null, self.selectedText),
                  date: "",
                }] // 组项目
              }, ]
            },
            {
              name: '复选',
              type: 'CHECKBOX',
              iconCls: 'el-icon-more',
              dic: [{
                group: "粘贴嵌套模块", // 分组名
                groupItems: [{
                  name: self.selectedText !== '' ? self.selectedText : "（没内容）",
                  // content: '['+ self.createCheckbox({ctrlId:null,ctrlStyle:null}, null, self.selectedHtml).show +']',
                  obj: self.createCheckbox({
                    ctrlId: null,
                    ctrlStyle: null
                  }, null, self.selectedText),
                  date: "",
                }] // 组项目
              }, ]
            },
            {
              name: '日历',
              type: 'DATE',
              iconCls: 'el-icon-date',
              dic: [{
                  group: "粘贴嵌套模块", // 分组名
                  groupItems: [{
                    name: self.selectedText !== '' ? self.selectedText : "（没内容）",
                    // content: '['+ self.createDate({ctrlId:null,ctrlStyle:null}, null, self.selectedHtml).show +']',
                    obj: self.createDate({
                      ctrlId: null,
                      ctrlStyle: null
                    }, null, self.selectedText),
                    date: "",
                  }] // 组项目
                },

              ]
            },
            {
              name: '文档段',
              type: 'SECTION',
              iconCls: 'el-icon-news',
              dic: [{
                  group: "粘贴嵌套模块", // 分组名
                  groupItems: [{
                    name: self.selectedHtml !== '' ? self.selectedHtml : "（没内容）",
                    // content: '['+ self.createDate({ctrlId:null,ctrlStyle:null}, null, self.selectedHtml).show +']',
                    obj: self.createSection({
                      'ctrlName': self.selectedHtml !== '' ? self.selectedHtml : "（没内容）",
                      'ctrlId': null,
                      'ctrlStyle': 'border-bottom-width:1px;border-right-width:10px;border-left-width:10px;border-top-width:1px;border-style:solid;border-color:#006ffc7d;padding-left:10px;padding-right:10px;',
                      // `${ctrlStyle}
                      // ;display:inline-block;position:relative;padding:4px;margin-top:20px;background-color:#006ffc14;border-width:1px;border-style:solid;border-color:#006ffc7d;margin-top:4px;box-sizing:border-box
                      // `
                    }, null,self.selectedHtml),
                    date: "",
                  }] // 组项目
                },]
            },
            {
              name: '存文档段模版',
              type: 'WIDGET',
              iconCls: 'el-icon-document',
              dic: []
            },
            {
              name: '存元素模版',
              type: 'CTRLS',
              iconCls: 'el-icon-news',
              dic: []
            }
          ]
        },

        // 从localStorage中取组件数据存起来
        widgetlist: localStorage.getItem('widget') ?
          JSON.parse(localStorage.getItem('widget')) && JSON.parse(localStorage.getItem('widget')).length !== 0 ?
          JSON.parse(localStorage.getItem('widget')) : [] : [],

        // 模版列表
        templatelist: [],

        ctrlist: localStorage.getItem('ctrlist') ?
          JSON.parse(localStorage.getItem('ctrlist')) && JSON.parse(localStorage.getItem('ctrlist')).length !== 0 ?
          JSON.parse(localStorage.getItem('ctrlist')) : [] : [],

        // 左方病人的共有列表格式（暂时就这样）
        patlist: [{
            name: '康软人1',
            id: 111
          },
          {
            name: '康软人2',
            id: 222
          },
          {
            name: '康软人3',
            id: 333
          },
          {
            name: '康软人4',
            id: 444,
            count: 1
          } // 这个为了子元素编号来设定的count
        ]
        ,
        patlistOnoff: (event) => {
          const e = event || window.event;
          alert(`你点击的是：第${+e.currentTarget.getAttribute('index')+1}个病人`)
        },

        /**
         * 0、模版插入替换
         * params {string} content   模版/控件/字典的innerHTML内容
         * params {string} styleString  head>style标签中的样式文本
         */
        replaceFun: (content, styleString) => {
          console.log(this)
          const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document; // 获取iframe中的document

          // 确保初始化时没有聚焦导致不能倒入模版
          // innerDoc.getElementsByClassName('krcd-tmp-content-value')[0].focus();

          // innerDoc.getElementsByClassName('krcd-tmp-content-value')[0].innerHTML='';
          // this.krcd.execCommand('inserthtml',content);  // 聚焦点插入内容
          // debugger
          // innerDoc.getElementsByClassName('krcd-tmp-root')[0].innerHTML = content;
          // console.log(this.$refs.setContentInp)

          // console.log(this.$parent.$refs.setContentInp.value)

          // 这是index.vue中绑定到对应的input的value中了，所以需要对它进行辅助。
          this.$parent.$refs.setContentInp.value=content
          
          this.krcd.html(content);
          
        },

        // 提示输入模版名称弹窗
        inputName: (fun) => {
          this.$prompt('请输入模版名', '保存模版', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /^[0-9a-zA-Z\u2E80-\u9FFF]{2,10}$/, // 自己写的
            inputErrorMessage: '模版名必须大于2不得超过9个字符'
          }).then(({
            value
          }) => {
            this.$message({
              // type: 'success',
              message: value + '  模版，正在保存...'
            });
            fun(value);
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        },

        // 获取整个文档的html
        getHtmlContent: () => {
          const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document; // 通过这样来获取iframe中的document
          let htmlContent = innerDoc.getElementsByClassName('krcd-tmp-root')[0].innerHTML; // 获取对应的innerHTML  

          const headStyleString = (() => {
            const arr = innerDoc.querySelectorAll('style[stylename]');
            const newArr = []
            for (let i = 0, len = arr.length; i < len; i++) {
              newArr.push(this.strTrim(arr[i].innerHTML))
            }
            return newArr.join('')
          })()
          return {
            htmlContent,
            headStyleString
          }
        },

        // 保存真整页内容为模版
        saveHtmlContent: (val) => {

          const docContent = this.getHtmlContent()
          console.log(docContent)

          const newItem = {
            name: val,
            id: '', // 因为是模版所以不设置了
            styleString: docContent.headStyleString, // style标签中的样式存起来插到模版对应的style标签中  
            content: docContent.htmlContent,
            scope: '全院',
            discribe: '描述', // 描述
            tag: docContent.tag, // 模版类型
            // date: funs.nowtime(),          // 应该以后台返回数据为准
          }

          // 将原来的转为接口的格式
          const postData = this.font2back(newItem)

          this.ajaxFunTemp('/DocumentTemplate/Save', postData, `${val}模版，保存成功`, () => {
            this.templatelist.push(newItem);
          });

        },


        /* 初始化的函数对象 */

        /**
         * 1、控件插入
         * params {string} content   模版/控件/字典的innerHTML内容
         * params {string} styleString  head>style标签中的样式文本
         */
        insert: (content, styleString) => {
          if (this.inSection === false) {
            const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document; // 获取iframe中的document

            // 确保初始化时没有聚焦导致不能倒入模版            
            innerDoc.getElementsByClassName('krcd-tmp-content-value')[0].focus();

            // 所有有stylename的属性的style标签，并最后一个中增加样式
            const headStyle = document.createElement('style');
            headStyle.innerHTML = styleString; // head中加入style
            if (innerDoc.querySelectorAll('style[stylename]').length != 0) { // 当拥有stylename属性的标签时
              let len = innerDoc.querySelectorAll('style[stylename]').length;
              innerDoc.querySelectorAll('style[stylename]')[len - 1].innerHTML = styleString;
            } else { // 当不拥有时插入对应dom
              innerDoc.getElementsByTagName('head')[0].appendChild(headStyle);
            }

            this.krcd.execCommand('inserthtml', content); // 聚焦点插入内容
            // innerDoc.getElementsByClassName('krcd-tmp-root')[0].innerHTML = content

          } else {
            alert("请在【文档段】以外插入控件")
          }

        },
        
        /**
         * 1-1、动态组件插入，只支持text
         * params {string} ctrlId  模版/控件/字典的innerHTML内容
         * params {string} idName  head>style标签中的样式文本
         * 
         */
        insertDynamicWidget: (content, styleString, command)=>{   
            console.log(this)    
            console.log(command)     
            this.commandGetResult(
              command,
              // "select [name] from PATIENTINFO where id = 599651",
              (res)=>{
                const newDiv = this.createText({ctrlId: null,ctrlStyle: null}, null, res.data)  // 创建text
                this.krcd.insertControl(
                  newDiv.newDiv.getCtrlElement(), //  获取会对应的Element
                  newDiv.newDiv.getOpt() //  获取会对应的opt
                )
              }
            )          
        },

        /**
         * 2、根据控制器id和控件的id命名来获取对应的样式
         * params {string} ctrlId  模版/控件/字典的innerHTML内容
         * params {string} idName  head>style标签中的样式文本
         */
        styleTag: (ctrlId, idName) => {
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
        styleSection: (ctrlId, idName) => {
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

        // 请求接口
        ajaxFunTemp: (type, content, successMsg, sucessFun=()=>{}) => {
          console.log(content)
          return ajax.post(
            `${type}`,
            JSON.stringify(content)
          ).then((res) => {
            this.saveSuccess(successMsg)
            sucessFun(res)
            console.log(res)
            return res  // 返回函数的返回值
          }).catch((err) => {
            console.log(err)
            this.saveError('请查看控制台错误')
            return []
          })
        },

        // 需要整合的数据（动态模版的数据结构）
        /**
         * id  后台自动生成
         * Code  元素id存到这里
         * ElementDesc  元素描述
         * HtmlContent  元素的html内容
         * IsDynamic  是动态元素
         * Command  查数据库命令内容
         * TypeId   类型id（术语那个表类型中）
         */
        dynamicTemplate: (ElementDesc, TypeId) => {
          return {
            ElementDesc: ElementDesc,
            TypeId: TypeId,
            type: TEXT,
            isDynamic: true, // 是动态元素
          }
        }

      }
    },
    methods: {

      // 展开收起
      showHideLeft(over) {
        if (over === 'show') {
          this.leftTreeWidth = 'auto';
        } else if (over === 'hide') {
          this.leftTreeWidth = 0;
        } else {
          if (this.leftTreeWidth === 0) {
            this.leftTreeWidth = 'auto';
          } else if (this.leftTreeWidth === 'auto') {
            this.leftTreeWidth = 0;
          }
        }

      },

      showHideRight(over) {
        if (over === 'show') {
          this.rightTreeWidth = 'auto';
        } else if (over === 'hide') {
          this.rightTreeWidth = 0;
        } else {
          if (this.rightTreeWidth === 0) {
            this.rightTreeWidth = 'auto';
          } else if (this.rightTreeWidth === 'auto') {
            this.rightTreeWidth = 0;
          }
        }
      },

      // 调出编辑的弹窗
      editWin(type) {
        console.log(window)
        switch (type) {
          case "文本":
            // 弹出窗
            window.$EDITORUI["edui93"]._edit();


        }
        console.log(window.$EDITORUI["edui93"]._edit)
        window.$EDITORUI["edui93"]._edit()
      },

      // 保存成功函数
      saveError(msg) {
        this.$message({
          message: '抱歉，保存' + msg + '模版失败！',
          type: 'error'
        });
      },

      // 保存成功函数
      saveSuccess(msg) {
        this.$message({
          message: '恭喜你，保存' + msg + '模版成功！',
          type: 'success'
        });
      },

      // 去除字符串头尾空格
      strTrim(str) {
        return str.replace(/^\s+|\s+$/gm, '');
      },

      // 数据值转换为后端的
      font2back(newItem) {
        return {
          "code": newItem.id, // 组件id
          "discribe": newItem.discribe, // 描述
          "deptCode": newItem.scope,
          "creatorUserId": 0, // 可以默认0
          "templateName": newItem.name,
          "htmlContent": newItem.content,
          "styleContent": newItem.styleString,
          "id": newItem.index !== 0 ? newItem.index : 0, // 可以默认0
          "tag": newItem.tag,
          'elementDesc': newItem.describe,
          'command': newItem.command,
          'typeId': newItem.classified,
        }
      },

      back2font(newItem) {
        return {
          id: newItem.code, // 组件id
          discribe: newItem.discribe || newItem.elementDesc, // 描述
          scope: newItem.deptCode,
          "creatorUserId": 0, // 可以默认0
          name: newItem.templateName,
          content: newItem.htmlContent,
          styleContent: newItem.styleString,
          index: newItem.id, // 将后台的顺序存到index中
          tag: newItem.tag,
          command: newItem.command,
          classified: newItem.typeId,
        }
      },

      // 保存文档段为控件
      saveSection2Widget(itemName = "文档段模版", callback = () => {}) {
        let target;
        if (this.tarEl.className.indexOf('krcd-value') !== -1 && this.tarEl.parentNode.className.indexOf(
            'krcd-ctrl krcd-section') !== -1) {
          target = this.tarEl.parentNode
        } else if (this.tarEl.className.indexOf('krcd-ctrl krcd-section') !== -1) {
          target = this.tarEl
        }
        const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document;

        // 克隆dom内容，移动到临时创建的div
        const newDOM = innerDoc.createElement('div');
        const cloneTaget = target.cloneNode(true);
        newDOM.appendChild(cloneTaget);
        let htmlContent = newDOM.innerHTML;

        // 获取style标签中样式函数
        const headStyleString = (() => {
          const arr = innerDoc.querySelectorAll(`style[stylename]`);
          const newArr = []
          for (let i = 0, len = arr.length; i < len; i++) {
            newArr.push(this.strTrim(arr[i].innerHTML))
          }
          return newArr.join('')
        })()

        // 创建需要存到模版的对象
        const newItem = {
          name: target.id,
          id: target.id,
          styleString: headStyleString, // style标签中的样式存起来插到模版对应的style标签中  
          content: htmlContent,
          scope: '全院',
          discribe: '描述', // 描述
          date: funs.nowtime(), //  存起来保存时间
        }

        // 将模版push到widgetlist数组中
        this.widgetlist.push(newItem);

        // 保存到localStorage
        localStorage.setItem('widget', JSON.stringify(this.widgetlist))

        // this.saveSuccess('组件');

        // 将原来的转为接口的格式
        const postData = this.font2back(newItem)

        this.ajaxFunTemp('/DocumentTemplate/Save', postData, `${val}模版，保存成功`, () => {
          this.templatelist.push(newItem);
        });

        return callback()
      },

      // 保存元素模版(作为动态模版)
      saveCtrl2Widget(inputInfo = {}, callback = () => {}) {
        let target;
        if (this.tarEl.className.indexOf('krcd-value') !== -1 && this.tarEl.parentNode.className.indexOf('krcd-ctrl') !==
          -1) {
          target = this.tarEl.parentNode
        } else if (this.tarEl.className.indexOf('krcd-ctrl') !== -1) {
          target = this.tarEl
        }
        const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document;

        // 克隆dom内容，移动到临时创建的div
        const newDOM = innerDoc.createElement('div');
        const cloneTaget = target.cloneNode(true);
        newDOM.appendChild(cloneTaget);
        let htmlContent = newDOM.innerHTML;

        // 获取style标签中样式函数
        const headStyleString = (() => {
          const arr = innerDoc.querySelectorAll(`style[stylename]`);
          const newArr = []
          for (let i = 0, len = arr.length; i < len; i++) {
            newArr.push(this.strTrim(arr[i].innerHTML))
          }
          return newArr.join('')
        })()

        // 传入的数据是

        /**
         *
          describe:'',
          command: '',
          classified: ''  , // 归属于
         */

        // 需要整合的数据（动态模版的数据结构）
        /**
         * id  后台自动生成
         * Code  元素id存到这里
         * ElementDesc  元素描述
         * HtmlContent  元素的html内容
         * IsDynamic  是动态元素
         * Command  查数据库命令内容
         * TypeId   类型id（术语那个表类型中）
         */
        console.log(target)

        // 创建需要存到模版的对象
        const newItem = {
          index: 0,
          name: target.id,
          describe: inputInfo.describe,
          command: inputInfo.command,
          classified: inputInfo.classified,
          htmlContent: htmlContent,
          styleContent: headStyleString, // style标签中的样式存起来插到模版对应的style标签中      
        }
        console.log(newItem)

        // 将模版push到widgetlist数组中
        this.ctrlist.push(newItem);

        // 保存到localStorage
        localStorage.setItem('ctrlist', JSON.stringify(this.ctrlist))

        
        this.commitShow.OnOff = false

        return callback()
      },

      
      /**
       * 动态模版获得动态数据方法
       * command{String}
       */
      commandGetResult(command, sucessFun){
        /**
         * 对接接口的内容, 每次根据数据来得到结果
         *  {
              "elementType": "string",
              "command": "select [name] from PATIENTINFO where id = '599651'"
            }
         **/

          const postData = {
            "elementType": "string",
            "command": command,
          }
          
          this.ajaxFunModel(
            '/ElementTemplate/ExecCommandForText', postData, `成功获取动态数据`, (res)=>{
              sucessFun(res) // 成功的函数调用
            }
          )
        
      },

      /************************
       * 以下为每个工具栏中的方法
       ***************************/

      /**
       * 创建控件text
       */
      createText(domSet = {
        ctrlId: null,
        ctrlStyle: null
      }, defOpt, desc) {
        let div = document.createElement('span');
        div.innerHTML =
          `<span class="krcd-ctrl" krcd-type="text" krcd-right="." id=${domSet.ctrlId?domSet.ctrlId:'ctrl-text'} style=${domSet.ctrlStyle?domSet.ctrlStyle:null} contenteditable="false" ><span class="krcd-value" krcd-left="[" krcd-right="]" contenteditable="true"></span></span>`;
        div = div.firstElementChild;
        let newDiv = this.krcd.createCtrl(div, defOpt ? defOpt : {
          "mode": "EDITOR", //控件状态。EDITOR编辑;READONLY只读
          "notdel": 0, //是否不许删除，默认0位可以删除
          "strictverify": 0, //是否强制校验（不符合要求既不允许输入），默认为0不强制校验
          "verify": "", //验证输入是否符合要求，可自己定义表达式
          "required": 0, //是否必填
          "desc": desc.length !== 0 ? desc : "文本", //控件描述值
        })
        return {
          newDiv,
          show: newDiv.getValueElement().parentNode.innerHTML // 为模版展示用, 取出生成的html
        }
      },

      // 增加select
      createSelect(domSet = {
        ctrlId: null,
        ctrlStyle: null
      }, defOpt, desc) {
        let div = document.createElement('span');
        div.innerHTML =
          `<span class="krcd-ctrl" contenteditable="false" krcd-type="select" id=${domSet.ctrlId?domSet.ctrlId:'ctrl-select'} style=${domSet.ctrlStyle?domSet.ctrlStyle:null}><span contenteditable="true" class="krcd-value"></span></span>`; // 这里有个bug，内部标签不能用p要用span
        div = div.firstElementChild;
        const bindingdata = desc.length !== 0 ? [ //默认绑定数据。
            {
              'label': desc,
              'value': '0'
            },
          ] :
          [ //默认绑定数据。
            {
              'label': '默认值',
              'value': '0'
            },
            {
              'label': '男',
              'value': '1'
            },
            {
              'label': '女',
              'value': '2'
            },
            {
              'label': '未知',
              'value': '3'
            }
          ];
        let newDiv = this.krcd.createCtrl(div, defOpt ? defOpt : {
          "mode": "EDITOR", //控件状态。EDITOR编辑;READONLY只读
          "notdel": 0, //不许删除
          "strictverify": 0, //强制校验
          "required": 0, //是否必填
          "multi": 0, //是否多选，默认0为单选，1为多选
          "desc": desc.length !== 0 ? desc : "下拉", //描述值
          "bindingdata": bindingdata,
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
        desc.length !== 0 ? newDiv.setValue([{
          'label': desc,
          'value': '0'
        }]) : newDiv.setValue([{
          'label': '默认值',
          'value': '0'
        }]);
        // newDiv.setValue(encodeURIComponent(JSON.stringify(bindingdata[0])));
        console.log(newDiv)
        console.log(newDiv.getCtrlElement())

        return {
          newDiv,
          show: newDiv.getValueElement().parentNode.innerHTML, // 为模版展示用, 取出生成的html          
        }
      },
      // 增加点选
      createRadio(domSet = {
        ctrlId: null,
        ctrlStyle: null
      }, defOpt, desc) {

        console.log(arguments)

        let div = document.createElement('span');
        div.innerHTML =
          `<span id=${domSet.ctrlId?domSet.ctrlId:'ctrl-radio'} style=${domSet.ctrlStyle?domSet.ctrlStyle:null} krcd-right="." krcd-type="radio" class="krcd-ctrl"  contenteditable="false" ><span contenteditable="true" krcd-left="[" krcd-right="]"  class="krcd-value"></span></span>`
        div = div.firstElementChild;
        let newDiv = this.krcd.createCtrl(div, defOpt ? defOpt : {
          "mode": "EDITOR", //当前模式
          "notdel": 0, //不许删除
          "strictverify": 0, //强制校验
          "desc": desc.length !== 0 ? desc : "单选", //描述值
          "required": 0, // 必须的
          "strictverify": 0, // 严格模式
          "multi": 1,
          "bindingdata": desc.length !== 0 ? [{
              "value": "0",
              "label": desc,
              "selected": 0
            }] :
            [{
                "value": "0",
                "label": "默认单选",
                "selected": 0
              },
              {
                "value": "1",
                "label": "感觉很好",
                "selected": 0
              },
              {
                "value": "2",
                "label": "感觉一般",
                "selected": 0
              },
              {
                "value": "3",
                "label": "无感觉",
                "selected": 0
              },
              {
                "value": "4",
                "label": "感觉糟糕",
                "selected": 0
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







        console.log(newDiv.getCtrlElement())
        newDiv.refreshData([true])

        if (desc.length !== 0) {
          newDiv.setValue({
            "value": "0",
            "label": desc,
            "selected": 0
          })
        } else {
          newDiv.setValue({
            "value": "0",
            "label": "默认单选",
            "selected": 0
          }) // 设置默认值但是貌似不成功
        }

        console.log(newDiv.getCtrlElement())

        return {
          newDiv,
          show: newDiv.getValueElement().parentNode.innerHTML // 为模版展示用, 取出生成的html
        }
      },

      createCheckbox(domSet = {
        ctrlId: null,
        ctrlStyle: null
      }, defOpt, desc) {
        let div = document.createElement('span');
        div.innerHTML =
          `<span id=${domSet.ctrlId?domSet.ctrlId:'ctrl-checkbox'} style=${domSet.ctrlStyle?domSet.ctrlStyle:null} krcd-right="." krcd-type="checkbox" class="krcd-ctrl"  contenteditable="false"><span contenteditable="true" krcd-left="[" krcd-right="]"  class="krcd-value"></span></span>`
        div = div.firstElementChild;
        let newDiv = this.krcd.createCtrl(div, defOpt ? defOpt : {
          "mode": "EDITOR", //当前模式
          "notdel": 0, //不许删除
          "strictverify": 0, //强制校验
          "desc": desc.length !== 0 ? desc : "多选", //描述
          "bindingdata": [ //绑定数据
            {
              "label": "感觉很好",
              "value": 1
            },
            {
              "label": "感觉一般",
              "value": 2
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
        newDiv.setValue([{
            "label": "感觉很好",
            "value": 1
          },
          {
            "label": "感觉一般",
            "value": 2
          }
        ])
        return {
          newDiv,
          show: newDiv.getValueElement().parentNode.innerHTML // 为模版展示用, 取出生成的html
        }
      },

      // Date控件
      /**
       * params1{object}: domSet
       *   |- ctrlId : 控件id / string
       *   |- ctrlStyle : 控件样式 / string
       * 
       * params2{object}: defOpt  (不传入即按照默认值)
       */
      createDate(domSet = {
        ctrlId: null,
        ctrlStyle: null
      }, defOpt, desc) {
        let div = document.createElement('span');
        div.innerHTML =
          `<span class="krcd-ctrl" id=${domSet.ctrlId?domSet.ctrlId:'ctrl-date'} style=${domSet.ctrlStyle?domSet.ctrlStyle:null} krcd-type="date"><span class="krcd-value" contenteditable="true" krcd-left="[" krcd-right="]"></span></span>`
        div = div.firstElementChild;

        /* 创建控制器（装饰了一下原来的DOM元素）*/
        let newDiv = this.krcd.createCtrl(div, defOpt ? defOpt : {
          "mode": "EDITOR", //当前模式
          "notdel": 0, //是否可以删除
          "strictverify": 0, //是否强制校验
          "required": 0, //是否必填
          "desc": desc.length !== 0 ? desc : "日历", //描述
          "defvalue": funs.timestampToTime(Math.round(new Date().getTime() / 1000)), //默认值
          "format": "{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}", //格式化要求。必须以大括号包裹。
          "min": "", //最小日期
          "max": "" //最大日期
        })

        // let tempDiv = document.createElement('div');
        // tempDiv.appendChild(newDiv);
        return {
          newDiv,
          show: newDiv.getValueElement().parentNode.innerHTML // 为模版展示用, 取出生成的html
        }
      },

      /**
       * 获取选中字体的方法来调出工具栏并用函数插进去对应控件
       * 获取text和html
       */
      selectText(iframeObj) {
        if (iframeObj.document.selection) {

          let selectionObj = iframeObj.document.selection;
          let rangeObj = selectionObj.createRange();
          let selectedText = rangeObj.text;
          let selectedHtml = rangeObj.htmlText;

          //ie浏览器
          return {
            selectedText,
            selectedHtml,
            selectedDOM: rangeObj
          }

        } else if (iframeObj.getSelection) { // 以免出现错误，所以先判断大于0
          //标准浏览器

          let selectionObj = iframeObj.getSelection();
          let selectedText = selectionObj.toString();
          console.log(selectionObj)
          let rangeObj = selectionObj.getRangeAt(0);
          let docFragment = rangeObj.cloneContents();
          let tempDiv = document.createElement("div");
          tempDiv.appendChild(docFragment);
          let selectedHtml = tempDiv.innerHTML;

          return {
            selectedText,
            selectedHtml,
            selectedDOM: tempDiv
          }
        }
      },


      /**
       * 专门做插入控件之用
       * params1{object}: newDiv（基本来自createDate）
       */
      addCtrl(type, ctrlName, ctrlId = '', ctrlStyle = '', Opt = null, paste = false) {

        // // 获取选中的文字
        // function selectText() {
        //   if (document.Selection) {
        //     //ie浏览器
        //     return document.selection.createRange().text;
        //   } else {
        //     //标准浏览器
        //     return window.getSelection().toString();
        //   }
        // }

        // let selResult = selectText();
        if (selResult.length !== 0) {
          // alert(selResult)
        }

        let domSet = {
          'ctrlName': ctrlName,
          'ctrlId': ctrlId,
          'ctrlStyle': `${ctrlStyle};padding-left:4px;display:inline-block;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px` // 为了before伪类定位用
        }
        // 判断
        let newDiv;
        // let selectedHtml = this.selectedHtml;
        // let selectedText = this.selectedText;
        let selectedHtml = paste ? this.selectedHtml : '';
        let selectedText = paste ? this.selectedText : '';
        switch (type) {
          case "PASTE":
            this.krcd.execCommand('inserthtml', selectedHtml).newDiv;
            break
          case "DATE":
            newDiv = this.createDate(domSet, Opt, selectedText).newDiv
            break
          case "SELECT":
            newDiv = this.createSelect(domSet, Opt, selectedText).newDiv
            break
          case "RADIO":
            newDiv = this.createRadio(domSet, Opt, selectedText).newDiv
            break
          case "CHECKBOX":
            newDiv = this.createCheckbox(domSet, Opt, selectedText).newDiv
            break
          case "TEXT":
            newDiv = this.createText(domSet, Opt, selectedText).newDiv
            break
          case "SECTION":
            // this.addSection([], {
            //   'ctrlName': ctrlName,
            //   'ctrlId': ctrlId,
            //   'ctrlStyle': 'border-bottom-width:1px;border-right-width:10px;border-left-width:10px;border-top-width:1px;border-style:solid;border-color:#006ffc7d;padding-left:10px;padding-right:10px;',
            //   'selectedText': this.selectedHtml
            //   // `${ctrlStyle}
            //   // ;display:inline-block;position:relative;padding:4px;margin-top:20px;background-color:#006ffc14;border-width:1px;border-style:solid;border-color:#006ffc7d;margin-top:4px;box-sizing:border-box
            //   // `
            // })
            newDiv = this.createSection({
              'ctrlName': ctrlName,
              'ctrlId': ctrlId,
              'ctrlStyle': 'border-bottom-width:1px;border-right-width:10px;border-left-width:10px;border-top-width:1px;border-style:solid;border-color:#006ffc7d;padding-left:10px;padding-right:10px;',
              // `${ctrlStyle}
              // ;display:inline-block;position:relative;padding:4px;margin-top:20px;background-color:#006ffc14;border-width:1px;border-style:solid;border-color:#006ffc7d;margin-top:4px;box-sizing:border-box
              // `
            }, Opt, selectedHtml).newDiv
            break
          case 'WIDGET':
            if (this.inSection === true) {
              this.saveSection2Widget()
            } else {
              alert('请点击文档段')
            }
            break
          case 'CTRLS':
            if (this.inCtrl === true) {
              this.saveCtrl2Widget()
            } else {
              alert('请点击元素')
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
        if (type !== "SECTION") {
          styleDOM.innerHTML = this.styleTag(ctrlId, ctrlName) + ctrlStyle;
        } else {
          styleDOM.innerHTML = this.styleSection(ctrlId, ctrlName) + ctrlStyle;
        }
        headerTag.appendChild(styleDOM);

        if (type !== "WIDGET" && type !== "CTRLS" && type !== "PASTE") {
          this.krcd.insertControl(
            newDiv.getCtrlElement(), //  获取会对应的Element
            newDiv.getOpt() //  获取会对应的opt
          )

          // const ele = this.krcd.getControlByEl(newDiv.getCtrlElement());

          // ele.setValue(newDiv.getOpt().bindingdata[0])

          // console.log(newDiv.getOpt().bindingdata[0])
        }


        // console.log(newDiv.getCtrlElement())

        // 插入后隐藏工具条
        // this.onOff = {...this.off}  
        this.saveAble = null; // 有一个渐变的的问题

      },

      // 创建Section
      createSection(domSet = {
        ctrlId: null,
        ctrlName: null,
        ctrlStyle: null,
      },defOpt,selectedHtml) {
        let div = document.createElement('div');
        div.innerHTML =
          `<div class="krcd-ctrl krcd-section" contenteditable="false" krcd-type="section" id=${domSet.ctrlId?domSet.ctrlId:'ctrl-section'} style=${domSet.ctrlStyle ? domSet.ctrlStyle: ''} krcd-isloadasyncdata="false"><div contenteditable="true" class="krcd-value" style="padding-left:5px;padding-right:5px;"></div></div>`
        div = div.firstElementChild;

        let newDiv = this.krcd.createCtrl(div, defOpt ? defOpt : {
          "mode":"EDITOR",//当前模式
          "originalmode":"EDITOR",//原始模式
          "desc": selectedHtml ? selectedHtml: '', //描述
        })

        console.log(selectedHtml)
        console.log(newDiv.getValueElement().parentNode)
        
        return {
          newDiv,
          show: selectedHtml, 
          // newDiv.getValueElement().parentNode.innerHTML // 为模版展示用, 取出生成的html
        }
      },

      // 插入Section区域控件（文档段）
      // addSection(newDiv, domSet = {
      //   ctrlId: null,
      //   ctrlName: null,
      //   ctrlStyle: null,
      //   selectedText: null
      // }) {
      //   let div = document.createElement('div');
      //   div.innerHTML =
      //     `<div class="krcd-ctrl krcd-section" contenteditable="false" krcd-type="section" id=${domSet.ctrlId?domSet.ctrlId:'ctrl-section'} style=${domSet.ctrlStyle ? domSet.ctrlStyle: ''} krcd-isloadasyncdata="false"><p contenteditable="true" class="krcd-value" style="padding-left:5px;padding-right:5px;">${domSet.selectedText}</p></div>`
      //   div = div.firstElementChild;

      //   let sp;
      //   if (newDiv) {
      //     sp = document.createElement('div');
      //     // 遍历数组控件，返回dom
      //     newDiv.forEach(item => {
      //       sp.appendChild(item.getCtrlElement());
      //     })
      //     console.log(sp)
      //   }

      //   // 插入控制器
      //   this.krcd.insertControl(div, {
      //       "mode": "EDITOR", //当前模式
      //       "originalmode": "EDITOR", //原始模式
      //       "desc": sp ? sp.innerHTML : '', //描述
      //     } //区域控件有时会随着当前业务的要求而进行模式的变更，在控件被渲染时默认将mode与originalmode进行同步。originalmode的存在也是为了方便区域控件模式重置)
      //   )
      // },


      execCommand() {
        return this.krcd.execCommand.apply(this.krcd, arguments);
      },

      mode(opt, i) {
        if (!!opt[i].name) {
          this.krcd.mode(opt[i].name);

          // 切换type
          for (let j = 0, len = opt.length; j < len; j++) {
            opt[j].type = '';
          }
          opt[i].type = "primary";

          // 初始化所有的tabshow
          // let tabshowkeyArr = Object.keys(this.tabshow);
          // tabshowkeyArr.forEach((key)=>{
          //   this.tabshow[key] = true;
          // })

          // 扩展功能的模式限制
          switch (opt[i].name) {
            case "DESIGN":
              this.toolsShow = true;
              this.templeCtrl = true;
              break
            case "EDITOR":
              this.toolsShow = true;
              this.templeCtrl = true;
              break
            case "STRICT":
              this.toolsShow = false;
              this.templeCtrl = false;
              // this.tabshow.templatelist = false; 
              break
            case "READONLY":
              this.toolsShow = false;
              this.templeCtrl = false;
              // this.tabshow.templatelist = false; 
              break
            default:
              this.toolsShow = false;
              this.templeCtrl = false;
          }

          // 弹出右侧的提示消息
          this.$notify({
            title: `【${opt[i].name}】`,
            message: `当前模式切换为“${opt[i].tip}”`,
            type: 'success',
            position: 'top-left',
            duration: 1500,
          });
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
    beforeCreate() {
      console.log('krcd components created.');
      // debugger
      let self = this;
      async function asyncGetTemp(self) {   
          await ajax.post(
              '/ParagraphTheme/GetList', 
              ''
              ).then((res) => {
              console.log('成功了！', res.data.data)
              // 转换一下数据
              const newArr = res.data.data.map(function(item){            
                  return {...item,name: item['theme'],children:[],id: item['id'],hasChild:(Math.random()>0.5)?true:false,count:1 }
              })
              self.templateTag.push(...newArr)
              console.log(self.templateTag)
            }).catch((err) => {
              console.log(err)
            })
      }
    
     asyncGetTemp(self);
      

      /**
       * 请求模版数据
       */
      ajax.post(
        '/DocumentTemplate/GetList', {
          "deptCode": "",
          "creatorUserId": 0,
          "id": 0
        }).then((res) => {
        console.log('成功了！', typeof res.data.data)

        const templataData = res.data.data;

        // 后端数组转为前端数组
        const templateArr = templataData.map(this.back2font)

        // 修改templatelist的数据
        self.templatelist.push(...templateArr) // 需要保留原来this.templatelist的引用
      }).catch((err) => {
        console.log(err)
      })

      // // 为什么不能这样？！
      // 应该是因为this.ajaxFunTemp还没加载出来，所以无效
      // const content = {
      //       "deptCode": "",
      //       "creatorUserId": 0,
      //        "id": 0
      //    }

      // this.ajaxFunTemp('GetList', content ,()=>{
      //     console.log('成功了！',typeof res.data.data) 

      //     const templataData = res.data.data;

      //     // 后端数组转为前端数组
      //     const templateArr = templataData.map(this.back2font)  

      //     // 修改templatelist的数据
      //     this.templatelist.push(...templateArr)
      // });
    },

    created(){
      console.log(this.templatelist)

      // 屏蔽右键，防止外层window的bug
      document.oncontextmenu = function(){
          event.returnValue = false;
      }
      // 或者直接返回整个事件
      document.oncontextmenu = function(){
          return false;
      }
    },
    beforeMount() {

    },

    beforeUpdate() {
      // console.log(document.getElementsByTagName('iframe'))
    },

    // 侦查templatelist
    watch: {
      //  侦查templist保存local
      templatelist: function (newTemplatelist, oldTemplatelist) {
        console.log('存local')
        localStorage.setItem("template", JSON.stringify(newTemplatelist.map(this.font2back))) // 这样就要改变读取时的问题
        console.log(newTemplatelist)
      },
      widgetlist: function (newWidgetlist, oldWidgetlist) {
        console.log('存local')
        localStorage.setItem("widgetlist", JSON.stringify(newWidgetlist.map(this.font2back))) // 这样就要改变读取时的问题
        console.log(newWidgetlist)
      },
      ctrlist: function (newCtrlist, oldCtrlist) {
        console.log('存local')
        localStorage.setItem("ctrlist", JSON.stringify(newCtrlist.map(this.font2back))) // 这样就要改变读取时的问题
        console.log(newCtrlist)
      },
      modelsData: function (newModelsData, oldModelsData) {
        return newModelsData
      },

      tabshow: function (newtabshow, oldtabshow) {
        return newtabshow
      },
      templateTag: function (newTemplateTag, oldTemplateTag) {
        return newTemplateTag
      },
    },

    mounted() {
      console.log(funs)
      console.log(this.$refs.modstyle[0].$el)
      

      const self = this;
      
      
      /**
       * 点击编辑区获取聚焦的控制
       */

      // 点击聚焦
      this.krcd.addListener('click', function (event) {

        console.log(arguments);
        // 获取ifame中的window
        self.iframeWin = document.getElementsByTagName('iframe')[1].contentWindow;
        
        const e = event || window.event;
        self.tarEl = arguments[0].target; // 获取点中的对象
        console.log(self.tarEl)
        self.tarCtrl = arguments[1]; //  控件类型名           self.tarCtrl.TYPE_NAME对应的是就是组件

        // 判断点击的控件是否在section中，并控制工具条呈现的功能
        if (arguments[1] !== null) {

          // inSection或inCtrl 的情况
          if (arguments[1]['TYPE_NAME'] !== 'section') {

            // 情况1: inCtrl
            self.inCtrl = true; // 为了显示与否服务
            self.inSection = false; // 是否在section中

            self.saveAble = 'ctrlAble'; // 调整工具栏用的

            // 情况2: inSectionCtrl,在情况1下的一种特殊情况
            for (let i = 0, arr = arguments[0].path, len = arr.length; i < len; i++) {
              if (arr[i].className === "krcd-ctrl krcd-section") {
                self.saveAble = 'sectionAble';
                return // 跳出循环
              }
            }

          } else {
            self.inCtrl = false; // 为了显示与否服务
            self.inSection = true; // 是否在section中

            self.saveAble = 'sectionAble'; // 调整工具栏用的

          }
        } else if (arguments[1] === null) {
          self.inCtrl = false;
          self.inSection = false;
          self.saveAble = 'normal';

          // 回复原始状态的工具栏

          // self.toolBtns = self.arrBtns.slice(0, self.arrBtns.length-1)
        }

        // // 当点中的元素是p但又是插入section的时候
        // if(arguments[0].target.tagName==="P"){ 
        //     console.log(arguments[0].target)
        //     // 用replaceChild来将当前节点替换。
        //     let content = arguments[0].target.innerHTML;
        //     const newNode = self.iframeWin.document.createElement("div");
        //     newNode.innHTML =  content
        //     newNode.style="display:inline-block;width:100%;contenteditable=true;" // 保证原来p的整行且居中

        //     arguments[0].target.parentNode.replaceChild(newNode,arguments[0].target)
        //   }

        // 选择空白处自动聚焦
        if (arguments[0].path[0].className === "krcd-tmp-content") {

          // 定位div(contenteditable = "true")聚焦点到最后的函数
          function po_Last_Div(obj, docObj) {
            if (window.getSelection) { //ie11 10 9 ff safari  
              // obj.focus(); //解决ff不获取焦点无法定位问题              // 这里会让我的直接到元素的位置处
              var range = docObj.getSelection(); //创建range
              range.selectAllChildren(obj); //range 选择obj下所有子内容
              range.collapseToEnd(); //光标移至最后
            } else if (document.selection) { //ie10 9 8 7 6 5
              var range = document.selection.createRange(); //创建选择对象
              //var range = docObj.body.createTextRange();
              range.moveToElementText(obj); //range定位到obj
              range.collapse(false); //光标移至最后
              range.select();
            }
          }

          const editDOM = arguments[0].path[0].querySelector('.krcd-tmp-content-value');
          const len = editDOM.length;

          // 初始化的时候只有一个p
          if (editDOM.querySelectorAll('p').length === 1 && !editDOM.querySelector('p').className) {
            editDOM.removeChild(editDOM.querySelector('p'))
          }

          // 聚焦到最后
          po_Last_Div(editDOM, self.iframeWin)


          // }else if (arguments[1]!==null&&arguments[1]['TYPE_NAME']!=='section'){      // 选中文档段中控件时隐藏工具条
          //   //  self.onOff = {...this.off}
          // }else if(arguments[0].target.className==="krcd-ctrl krcd-section"&&arguments[1]['TYPE_NAME']!=='section'){
          //   if(arguments[0].target.querySelectorAll('p').length === 1 && !arguments[0].target.querySelector('p').className){
          //     arguments[0].target.removeChild(arguments[0].target.querySelector('p'))
          //   }
          //   po_Last_Div(arguments[0].target.querySelector('p'), arguments[0].target)
        }

        /**
         * 这是为工具栏定位用
         */
        // 根据点击对象的坐标给组件传值来定位
        const getPositon = () => {
          let editorX = document.querySelector('.krcd-editor-inner').offsetLeft
          let editorY = document.querySelector('.krcd-editor-inner').offsetTop
          let scrTop = document.querySelector('.krcd-editor').scrollTop // 滚动的高度
          let toolsH = document.querySelector('.krcd-toolbars').offsetHeight
          console.log(document.querySelector('.tools-btn'))
          let toolbtnW = document.querySelector('.tools-btn').offsetWidth
          let toolbtnH = document.querySelector('.tools-btn').offsetHeightd

          // 设定工具条的样式
          const sources = {
            "flex": 1,
            "display": "flex",
            "align-items": "center",
            "flex-direction": "column", // 改变column再扩展字典
            "line-height": "30px",
            "background-color": "white",
            'position': 'absolute',
            'left': editorX + arguments[0].clientX +
              toolbtnW + 144 +
              'px',
            // 'top': toolsH + editorY + arguments[0].clientY - scrTop + 55*2 +  // 为了要输入的时候不要被影响到
            //       // toolbtnH + 
            //       'px',  
            'top': arguments[0].clientY - scrTop > (arguments[0].screenY * 1 / 2) ? editorY + arguments[0].clientY -
              scrTop - 55 * 2 - toolsH + // 为了要输入的时候不要被影响到
              // toolbtnH + 
              'px' : toolsH + editorY + arguments[0].clientY - scrTop + 55 * 2 + // 为了要输入的时候不要被影响到
              //       // toolbtnH + 
              'px',
            "margin-top": "-30px",
            'z-index': '1005',
            'box-shadow': '1px 1px 4px #00000033'
          }

          // 改变工具条数据
          self.toolStyle = {
            ...self.toolStyle,
            ...sources
          }
        }

        // 每次点击都重新定位工具条
        getPositon()

        // 点中初始化时的p不能编辑，所以赋予它可编辑的属性
        // if (arguments[0].path[0].attributes.length === 0 && arguments[1] !== null && arguments[1]['TYPE_NAME'] ===
        //   'section') {
        //   arguments[0].path[0].setAttribute("contenteditable", "true");
        //   arguments[0].path[0].className = 'krcd-value';
        //   arguments[0].path[0].focus();
        // }

        

      });

      this.krcd.addListener("ready", function () {
        console.log("krcd 初始化完成！");

       
        // 根据屏幕变化
        window.onresize = function () {
          console.log(window.innerWidth)
          if (window.innerWidth <= 900) {
            self.leftTreeWidth = 0;
            self.rightTreeWidth = 0;
            console.log("屏幕太小了")
          } else if (window.innerWidth <= 1680) {
            console.log("屏幕还算可以")
            self.leftTreeWidth = 'auto';
            self.rightTreeWidth = 0;
          } else {
            console.log("屏幕够大了")
            self.leftTreeWidth = 'auto';
            self.rightTreeWidth = 'auto';
          }
        }

        // loading的控制
        setTimeout(function () {
          self.fullscreenLoading = false
          window.onresize(); // 初始化一次 

          //  console.log(self.insertDynamicWidget())

          // 默认设定为设计模式
          self.mode(self.modelsData, 0);

          /***
           * 给编辑器增加鼠标抬起事件
           */
          // 获取ifame中的window
          const editor = document.getElementsByTagName('iframe')[1].contentWindow;
          editor.onmouseup = function(){
            console.log("鼠标抬起了")
            // 输出点击时获取的数据
            let selText = self.selectText(document.getElementsByTagName('iframe')[1].contentWindow).selectedText;
            let selHtml = self.selectText(document.getElementsByTagName('iframe')[1].contentWindow).selectedHtml;
            let selectedDOM = self.selectText(document.getElementsByTagName('iframe')[1].contentWindow).selectedDOM;

            console.log(selectedDOM)

            console.log(selHtml)

            // 防止被无聊的点击覆盖了
            self.selectedText = selText.length !== 0 ? selHtml : self.selectedText;
            self.selectedHtml = selHtml.length !== 0 && selHtml.indexOf('krcd-ctrl krcd-section') === -1 ? selHtml : self.selectedHtml;
            // self.selectedDOM = 

            // if()
          }

          
        }, 1500)





      });

     


    },
    beforeDestroy() {
      this.krcd.__ue__.destroy();
    },
  };

</script>

<style>
/* jimmyFok's CSS style */
.krcd-section::before{
  content: "我是标签"
}
.krcd-root{
  display: flex;
  flex-direction: row;
}

.editor-box{
  display: flex;
  flex-direction: column;
}
.height-ful{
  height: 100%;
}

.nav-tools{
  display: flex;
  flex-direction: flex-start;
  align-items: center
}

.nav-tools>*{
  padding:8px;
}

.left-tree{
  position: relative;
}

.showBtnLeft{
  display: inline-block;
  position: absolute;
  background-color: #ffffff;
  border: 10px solid #65B1FF;
  color: #F2F6FC;
  left: 0;
  top: 50%;
  margin-top: -50px;
  width: 24px;
  height: 100px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.showBtnRight{
  display: inline-block;
  position: absolute;
  background-color: #ffffff;
  border: 10px solid #65B1FF;
  color: #F2F6FC;
  right: 0;  
  top: 50%;
  margin-top: -50px;
  width: 24px;
  height: 100px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  z-index: 1000;
  display: flex;
  align-items: center;  
}

/*
* 改造右方保证表格隐藏滚动
*/
.widget-list{
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.el-tabs--border-card>.el-tabs__content{
  padding: 0;
  box-shadow: 0px 2px 8px #409eff1c;
  z-index: 1;
}

.el-tabs--border-card, .el-tabs__content, .el-tabs__content>.el-tab-pane, .el-tabs__content>.el-tab-pane>div, .el-tabs__content>.el-tab-pane>div>div{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.el-tabs__content>.el-tab-pane>div>div>.el-table__header-wrapper{
  flex-shrink: 0;
}

.el-table__body-wrapper{
  overflow: auto
}
</style>
