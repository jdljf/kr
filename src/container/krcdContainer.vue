<template>
  <el-container style="height: 100%;" class="krcd-root height-ful" v-loading.fullscreen.lock="fullscreenLoading">
    <el-container>
      <el-aside @mouseover="showHideLeft" @mouseout="showHideLeft" :style="`width:${leftTreeWidth};position: relative; overflow:unset;border:none;border-right: 1px solid rgb(220, 223, 230);transition: width 10s;box-shadow: 2px 0 8px #409eff1c;z-index: 1;${leftOtherStyle};`">
        <div class="showBtnLeft showBtnLittle" @click="showHideLeft" @mouseover="longer" @mouseout="shorter">
          <!-- <span>展开收起</span> -->
        </div>

        <!-- <div @mouseout="showHideLeft('hide')">       -->
        <Widgets :fun="patlistOnoff" type="pat-list" :list="patlist">
          <Tree v-if="templateTag.length!==0" :list="patlist" :templateTag="templateTag"></Tree>
        </Widgets>
        <!-- </div>        -->
      </el-aside>
      <div class="tools" v-show="toolsShow">
        <NavMenu class="tools-btn" :addCtrl="addCtrl" :toolStyle="toolStyle" :toolBtns="toolBtns" contenteditable="false"
          :self="self" />
        <!-- <Tools class="tools-btn" :addCtrl="addCtrl" :toolStyle="toolStyle" :toolBtns="toolBtns" contenteditable="false" />   -->
      </div>
      <el-container style="overflow: hidden;" class="left-tree">
        <el-container>

          <el-aside style="width:auto;display: flex;">
            <FileList :imgsArr="imgsArr" :getPatMsg="getPatMsg">
              <!-- 病人信息和文档信息 -->
            </FileList>
          </el-aside>

          <div class="editor-box" ref="editor" id="editor" :style="{ width:width }"></div>

        </el-container>

        <el-footer style="z-index: 999;height: 42px;padding: 5px;background-color: white;border: 1px solid rgb(220, 223, 230);">
          <el-row style="display:flex;justify-content: flex-end;">
            <!--1. DESIGN 设计模式；
                2. EDITOR 编辑模式；
                3. STRICT 严格模式（表单模式）；
                4. READONLY 只读模式； -->
            <el-tooltip v-for="(item,index) in modelsData" :key="index" class="item" effect="dark" :content="item.tip"
              placement="top">
              <el-button size="mini" round @click="mode(modelsData,index)" :type="item.type" ref="modstyle">{{item.name}}</el-button>
            </el-tooltip>
          </el-row>
        </el-footer>
      </el-container>
      <el-aside @mouseover="showHideRight" @mouseout="showHideRight" :style="`width:${rightTreeWidth};position: relative;overflow:unset;transition: width 10s;display:flex;flex-direction:column;box-shadow:-2px 0 8px #409eff1c;z-index: 1;${rightOtherStyle};`">
        <!-- 为了隐藏而用 -->
        <!-- <div @mouseout="showHideRight('hide')"> -->

        <div class="showBtnRight showBtnLittle" @click="showHideRight" @mouseover="longer" @mouseout="shorter">
          <!-- <span>展开收起</span> -->
        </div>

        <el-header style="height: 30px;
                box-sizing: border-box;
                background-color: #409EFF;
                color: #F2F6FC;
                line-height: 30px;
                font-size: 13px;
                text-align: left;
                padding: 0px 12px;"></el-header>
        <div class="widget-list">
          <el-header style="height:auto;padding:8px;border: 1px solid #dcdfe6;border-bottom:none;border-top:none;background-color:#ffffff">
            <div class="nav-tools">
              <!-- <el-button type="primary" size="mini" plain @click="()=>inputName(saveHtmlContent)">文档存模版</el-button> -->
              <el-button type="primary" size="mini" plain @click="()=>inputName(saveHtmlContent)">文档存模版</el-button>
              <el-button v-show="this.saveAble==='ctrlAble'" type="success" size="mini" plain @click="commitShow.OnOff=true">保存动态模版</el-button>
              <el-button type="warning" size="mini" plain @click="()=>inputName(saveHtmlContent)">分享</el-button>
              <!-- 这里是保存模版用的隐藏按钮 -->
              <CommitTable :commitShow="commitShow" :returnCommitData="returnCommitData" />
            </div>
          </el-header>
          <!-- <Widgets :list="widgetlist" :fun="insert"/> -->
          <!-- <Models :list="widgetlist" :fun="insert"/> -->
          <tabContainer :tabsArray="tabsArray" :templeCtrl="templeCtrl" :ctrlist="ctrlist" :ctrlfun="insertDynamicWidget"
            :templatelist="templatelist" :widgetlist="widgetlist" :patlist="patlist" :widgetfun="insert" :templatefun="replaceFun"
            :savetemplefun="()=>inputName(saveHtmlContent)" :savewidgetfun="()=>inputName(saveHtmlContent)"
            :savectrlfun="()=>inputName(saveHtmlContent)" :ajaxtemple="ajaxFunTemp" :back2font="back2font"
            :getHtmlContent="getHtmlContent">
          </tabContainer>
        </div>

        <!-- </div> -->
      </el-aside>

    </el-container>
  </el-container>
</template>

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

  const face01 = require('../assets/img/face01.jpeg');
  const face02 = require('../assets/img/face02.jpeg');

  export default {
    name: 'krcdContainer',
    extends: krcdEditor,
    beforeCreate() {
      // console.log('krcd components created.');

      let self = this;
      async function asyncGetTemp(self) {
        await ajax.post(
          '/ParagraphTheme/GetList',
          ''
        ).then((res) => {
          console.log('成功了！', res.data.data)
          // 转换一下数据
          const newArr = res.data.data.map(function (item) {
            return { ...item,
              name: item['theme'],
              children: [],
              id: item['id'],
              hasChild: (Math.random() > 0.5) ? true : false,
              count: 1
            }
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

    },

    created() {
      console.log(this.templatelist)

      // 屏蔽右键，防止外层window的bug
      document.oncontextmenu = function () {
        event.returnValue = false;
      }
      // 或者直接返回整个事件
      document.oncontextmenu = function () {
        return false;
      }
    },

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
            this.toolsShow = false;
            return []
            // [...this.arrBtns.slice(this.arrBtns.length-1)]
            break
          case 'sectionAble':
            this.toolsShow = true;
            const newTools = [...this.arrBtns.slice(1, this.arrBtns.length - 3)];
            newTools.push(this.arrBtns[this.arrBtns.length - 2])
            return newTools
            break
          case 'normal':
            this.toolsShow = true;
            return [...this.arrBtns.slice(1, this.arrBtns.length - 2)]
            break
          default:
            this.toolsShow = false;
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
        imgsArr: [
          face01,
          face02
        ],
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

        fullscreenLoading: true, // true时显示loading
        args: null, // 点击获得的arguments
        isMouseOver: false, // 判断用什么事件驱动展示工具栏
        leftTreeWidth: 0, // 左方收起展开
        rightTreeWidth: 0, // 左方收起展开
        leftOtherStyle: '', // 附带的左工具样式
        rightOtherStyle: '', // 附带的右工具样式
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
        fenGeXian: null,
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
        iframeWin: () => {
          return document.getElementsByTagName('iframe')[1].contentWindow
        }, // 将iframe下的window对象
        krcd: null, // krcd
        onOffStatus: true,
        toolStyle: {}, // 初始化工具条样式

        // 模版类型
        templateTag: [],

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
              name: '关闭',
              type: 'CLOSE',
              iconCls: 'el-icon-close',
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
                  name: self.selectedText !== '' ? self.selectedText : "（没内容）",
                  // content: '['+ self.createDate({ctrlId:null,ctrlStyle:null}, null, self.selectedHtml).show +']',
                  obj: self.createSection({
                    'ctrlName': self.selectedHtml !== '' ? self.selectedHtml : "（没内容）",
                    'ctrlId': null,
                    'ctrlStyle': 'border-bottom-width:1px;border-right-width:10px;border-left-width:10px;border-top-width:1px;border-style:solid;border-color:#006ffc7d;padding-left:10px;padding-right:10px;',
                    // `${ctrlStyle}
                    // ;display:inline-block;position:relative;padding:4px;margin-top:20px;background-color:#006ffc14;border-width:1px;border-style:solid;border-color:#006ffc7d;margin-top:4px;box-sizing:border-box
                    // `
                  }, null, self.selectedHtml),
                  date: "",
                }] // 组项目
              }, ]
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
        ],
        patlistOnoff: (event) => {
          const e = event || window.event;
          alert(`你点击的是：第${+e.currentTarget.getAttribute('index')+1}个病人`)
        },

        docSplit: (doc, content) => {
          const div = doc.createElement('div');
          div.innerHTML = content;
          let contentValue = div.getElementsByClassName("krcd-tmp-content-value")[0];
          let headerValue = div.getElementsByClassName("krcd-tmp-header-value")[0];
          let footerValue = div.getElementsByClassName("krcd-tmp-footer-value")[0];

          return {
            contentValue,
            headerValue,
            footerValue
          }
        },

        /**
         * 0、模版插入替换
         * params {string} content   模版/控件/字典的innerHTML内容
         * params {string} styleString  head>style标签中的样式文本
         */
        replaceFun: (content, styleString) => {

          const docThreePart = this.docSplit(this.iframeWin.document, content);
          // this.$parent.$refs.setContentInp.value = docThreePart.contentValue.innerHTML;     // 这里改变内容的事件里面已经有了。

          // 这里清空了再插入，但是页面会出问题。。。 因为一直都是那个文档，每次的插入都会影响了页面数，而不会重置，所以要用this.krcd.html好了。
          // this.iframeWin.document.querySelector('.krcd-tmp-content-value').innerHTML = '';
          // this.poLastDiv(this.iframeWin.document.querySelector('.krcd-tmp-content-value'), this.iframeWin)          
          // this.krcd.execCommand('inserthtml', docThreePart.contentValue?docThreePart.contentValue.innerHTML:'');

          // 清空文档并重新创建文档，保证文档页码没问题。
          this.krcd.html(''); // 这个会影响当前的iframeWin，之后的操作需要重新获取。

          const iframeWin = document.getElementsByTagName('iframe')[1].contentWindow;

          this.iframeWin = iframeWin; // 替换现有的iframeWin

          this.poLastDiv(iframeWin.document.querySelector('.krcd-tmp-content-value'), iframeWin) // 重新聚焦到最后 
          this.krcd.execCommand('inserthtml', docThreePart.contentValue ? docThreePart.contentValue.innerHTML : '');

          let headerValue = iframeWin.document.getElementsByClassName("krcd-tmp-header-value")[0];
          let footerValue = iframeWin.document.getElementsByClassName("krcd-tmp-footer-value")[0];

          headerValue.innerHTML = docThreePart.headerValue ? docThreePart.headerValue.innerHTML : ''; // 页头
          footerValue.innerHTML = docThreePart.footerValue ? docThreePart.footerValue.innerHTML : ''; // 页脚

          // 把页头和页脚保存到数据中
          this.headerValue = headerValue.innerHTML;
          this.footerValue = footerValue.innerHTML;

        },

        headerValue: "",
        footerValue: "",

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
          let htmlContent = innerDoc.getElementsByClassName('krcd-tmp-root')[0].innerHTML; // 获取对应内容的innerHTML（content中的内容）

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
            this.insertStyle('stylename', innerDoc, styleString);

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
        insertDynamicWidget: (content, styleString, command) => {
          console.log(this)
          console.log(command)
          this.commandGetResult(
            command,
            // "select [name] from PATIENTINFO where id = 599651",
            (res) => {
              const newDiv = this.createText({
                ctrlId: null,
                ctrlStyle: null
              }, null, res.data) // 创建text
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
        ajaxFunTemp: (type, content, successMsg, sucessFun = () => {}) => {
          console.log(content)
          return ajax.post(
            `${type}`,
            JSON.stringify(content)
          ).then((res) => {
            this.saveSuccess(successMsg)
            sucessFun(res)
            console.log(res)
            return res // 返回函数的返回值
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

      // 插入样式的方法
      insertStyle(type, innerDoc, styleString) {
        const headStyle = document.createElement('style');
        headStyle.innerHTML = styleString; // head中加入style

        if (type === 'stylename') {
          if (innerDoc.querySelectorAll('style[stylename]').length !== 0) { // 当拥有stylename属性的标签时
            let len = innerDoc.querySelectorAll('style[stylename]').length;
            innerDoc.querySelectorAll('style[stylename]')[len - 1].innerHTML += styleString;
          } else {
            headStyle.setAttribute('stylename', 'stylename');
            innerDoc.getElementsByTagName('head')[0].appendChild(headStyle);
          }
        } else if (type === 'modename') {
          if (innerDoc.querySelectorAll('style[modename]').length !== 0) { // 当拥有stylename属性的style标签时
            let len = innerDoc.querySelectorAll('style[modename]').length;
            innerDoc.querySelectorAll('style[modename]')[len - 1].innerHTML = styleString;
          } else {
            headStyle.setAttribute('modename', 'modename')
            innerDoc.getElementsByTagName('head')[0].appendChild(headStyle);
          }
        } else { // 当不拥有时插入对应dom
          innerDoc.getElementsByTagName('head')[0].appendChild(headStyle);
        }
      },

      // 点击列表项目
      getPatMsg(patId, fileTheme) {
        // AJAX请求对应的表格
        console.log("点击文档读取数据")
      },

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

      longer(e) {
        e.target.style =
          `
          background-color: #ffffff;
          border: 10px solid #65B1FF;
          width: 24px
         `
        //  if(this.isMouseOver){
        //    e.target.click()
        // }
      },

      shorter(e) {
        e.target.style = `
          border: 0;
          width: 6px;
          background-color: #65B1FF;
        `
        // if(this.isMouseOver){
        //   e.target.parentNodeclassName.indexOf('showBtnRight')===-1?this.showHideLeft():this.showHideRight()
        // }
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
      commandGetResult(command, sucessFun) {
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
          '/ElementTemplate/ExecCommandForText', postData, `成功获取动态数据`, (res) => {
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
        console.log(desc)
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
        ] : [ //默认绑定数据。
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
          }] : [{
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
          "bindingdata": desc.length !== 0 ? [{
            "value": "0",
            "label": desc,
            "selected": 0
          }] : [ //绑定数据
            {
              "label": "默认值",
              "value": 0
            },
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
      selectText(iframeObj, self) {
        // debugger
        console.log(arguments[0])
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

          let selectionObj = iframeObj.getSelection()
          // debugger
          console.log(selectionObj)
          let selectedText = selectionObj.toString();
          let rangeObj = selectionObj.getRangeAt(0);
          // console.log(rangObj)
          let docFragment = rangeObj.cloneContents();
          let tempDiv = document.createElement("div");
          tempDiv.appendChild(docFragment);
          let selectedHtml = tempDiv.innerHTML;
          selectedText = tempDiv.innerText.trim(); // 为了能呈现，去前后空格
          console.log(selectedText)

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

        let domSet = {
          'ctrlName': ctrlName,
          'ctrlId': ctrlId,
          'ctrlStyle': `${ctrlStyle};padding-left:4px;display:inline-block;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px` // 为了before伪类定位用
        }
        // 判断
        let newDiv;

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
          case 'CLOSE':
            this.saveAble = null
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

        if (type !== "WIDGET" && type !== "CTRLS" && type !== "PASTE" && type !== "CLOSE") {
          console.log(newDiv)
          this.krcd.insertControl(
            newDiv.getCtrlElement(), //  获取会对应的Element
            newDiv.getOpt() //  获取会对应的opt
          )
        }
        // 插入后隐藏工具条
        // this.onOff = {...this.off}  
        this.saveAble = null; // 有一个渐变的的问题

      },

      // 创建Section
      createSection(domSet = {
        ctrlId: null,
        ctrlName: null,
        ctrlStyle: null,
      }, defOpt, selectedHtml) {
        let div = document.createElement('div');
        div.innerHTML =
          `<div class="krcd-ctrl krcd-section" contenteditable="false" krcd-type="section" id=${domSet.ctrlId?domSet.ctrlId:'ctrl-section'} style=${domSet.ctrlStyle ? domSet.ctrlStyle: ''} krcd-isloadasyncdata="false"><div contenteditable="true" class="krcd-value" style="padding-left:5px;padding-right:5px;"></div></div>`
        div = div.firstElementChild;

        let newDiv = this.krcd.createCtrl(div, defOpt ? defOpt : {
          "mode": "EDITOR", //当前模式
          "originalmode": "EDITOR", //原始模式
          "desc": selectedHtml ? selectedHtml : '', //描述
        })

        return {
          newDiv,
          show: newDiv.getValueElement().parentNode.innerHTML,
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

          const modeStyleDef = () => {
            return `
              .krcd-ctrl{
                display: inline;
                background-color: #F0F8FF;
              }.krcd-ctrl:after{
                color: red;
                content: attr(krcd-right);
                font-weight: bold;
                position: relative;
                bottom: -2px;
              }.krcd-ctrl>.krcd-value:before,.krcd-ctrl>.krcd-revise>.krcd-value-revise:before {
                color: #0000ff;
                padding-right: 3px;
                content: attr(krcd-left);
              }.krcd-ctrl>.krcd-value:after,.krcd-ctrl>.krcd-revise>.krcd-value-revise:after {
                color: #0000ff;
                padding-left: 3px;
                content: attr(krcd-right);
              }
          `
          }
          // 当前需要修改的样式
          const modeStyle = () => {
            return `
              .krcd-ctrl{
                display: inline;
                background-color: transparent;
              }.krcd-ctrl:after{
                color: red;
                content: '';
                font-weight: bold;
                position: relative;
                bottom: -2px;
              }.krcd-ctrl>.krcd-value:before,.krcd-ctrl>.krcd-revise>.krcd-value-revise:before {
                color: #0000ff;
                padding-right: 3px;
                content: ''
              }.krcd-ctrl>.krcd-value:after,.krcd-ctrl>.krcd-revise>.krcd-value-revise:after {
                color: #0000ff;
                padding-left: 3px;
                content: '';
              };
          `
          }

          /** 
           * 创建含modename属性的style标签。管理mode相关样式
           */
          const addModeStyle = function (insertStyle, modeStyle) {
            const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document; // 获取iframe中的document
            let headerTag = innerDoc.getElementsByTagName('head')[0];
            let styleDOM = innerDoc.createElement('style');

            console.log(typeof insertStyle)
            insertStyle('modename', innerDoc, modeStyle);
          }

          // 扩展功能的模式限制
          switch (opt[i].name) {
            case "DESIGN":
              this.toolsShow = true;
              this.templeCtrl = true;
              this.fenGeXian.addEventListener("click", this.addHorizontal);
              this.fenGeXian.className = 'panel-content-ctrl';
              addModeStyle(this.insertStyle, modeStyleDef())
              break
            case "EDITOR":
              this.toolsShow = true;
              this.templeCtrl = true;
              this.fenGeXian.addEventListener("click", this.addHorizontal);
              this.fenGeXian.className = 'panel-content-ctrl';
              addModeStyle(this.insertStyle, modeStyleDef())
              break
            case "STRICT":
              this.toolsShow = false;
              this.templeCtrl = false;
              this.fenGeXian.removeEventListener("click", this.addHorizontal);
              this.fenGeXian.className = 'panel-content-ctrl ctrl-disabled';
              // this.tabshow.templatelist = false; 
              addModeStyle(this.insertStyle, modeStyleDef())
              break
            case "READONLY":
              this.toolsShow = false;
              this.templeCtrl = false;
              this.fenGeXian.removeEventListener("click", this.addHorizontal);
              this.fenGeXian.className = 'panel-content-ctrl ctrl-disabled';
              // this.tabshow.templatelist = false; 
              // 插对应的模版样式
              addModeStyle(this.insertStyle, modeStyle())
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
      /**
       * 工具栏定位
       */
      // 根据点击对象的坐标给组件传值来定位
      getPositon() {
        let editorX = document.querySelector('.krcd-editor-inner').offsetLeft
        let editorY = document.querySelector('.krcd-editor-inner').offsetTop
        let scrTop = document.querySelector('.krcd-editor').scrollTop // 滚动的高度
        let toolsH = document.querySelector('.krcd-toolbars').offsetHeight
        console.log(document.querySelector('.tools-btn'))
        let toolbtnW = document.querySelector('.tools-btn').offsetWidth
        let toolbtnH = document.querySelector('.tools-btn').offsetHeight
        let listW = document.querySelector('.widget-container').offsetWidth
        let fileListW = document.querySelector('.list-main').offsetWidth
        // debugger
        // 设定工具条的样式
        const sources = {
          "flex": 1,
          "display": "flex",
          "align-items": "center",
          "flex-direction": "column", // 改变column再扩展字典
          "line-height": "30px",
          "background-color": "white",
          'position': 'absolute',
          'left': editorX + this.args[0].clientX +
            // (toolbtnW===0?65:toolbtnW)/2 + // 因为原来就是0，所以不应该是这个值
            listW +
            fileListW + // 新增的左边list的距离
            'px',
          // 'top': toolsH + editorY + arguments[0].clientY - scrTop + 55*2 +  // 为了要输入的时候不要被影响到
          //       // toolbtnH + 
          //       'px',  
          'top': this.args[0].clientY - scrTop > (this.args[0].screenY * 1 / 2) ? editorY + this.args[0].clientY -
            scrTop - 55 * 2 - toolsH + // 为了要输入的时候不要被影响到
            // toolbtnH + 
            'px' : toolsH + editorY + this.args[0].clientY - scrTop + 55 * 2 + // 为了要输入的时候不要被影响到
            //       // toolbtnH + 
            'px',
          "margin-top": "-30px",
          'z-index': '1005',
          'box-shadow': '1px 1px 4px #00000033'
        }

        // 改变工具条数据
        this.toolStyle = {
          ...this.toolStyle,
          ...sources
        }
      },
      getHTML() {
        return this.krcd.html();
      },
      setHTML(html) {
        this.krcd.html(html);
      },

      // 定位div(contenteditable = "true")聚焦点到最后的函数
      poLastDiv(obj, docObj) {
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
        // self.iframeWin = document.getElementsByTagName('iframe')[1].contentWindow;

        const e = event || window.event;
        self.args = arguments; // 获取点中的对象
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

        // 选择空白处自动聚焦
        if (arguments[0].path[0].className === "krcd-tmp-content") {

          const editDOM = arguments[0].path[0].querySelector('.krcd-tmp-content-value');
          const len = editDOM.length;

          // 初始化的时候只有一个p
          if (editDOM.querySelectorAll('p').length === 1 && !editDOM.querySelector('p').className) {
            editDOM.removeChild(editDOM.querySelector('p'))
          }

          // 聚焦到最后
          self.poLastDiv(editDOM, self.iframeWin)

        }

        // 工具栏定位
        self.getPositon()

      });

      this.krcd.addListener("ready", function () {
        console.log("krcd 初始化完成！");

        self.iframeWin = document.getElementsByTagName('iframe')[1].contentWindow;

        // 根据屏幕变化
        window.onresize = function () {
          console.log(window.innerWidth)
          if (window.innerWidth <= 900) {
            self.leftTreeWidth = 0;
            self.rightTreeWidth = 0;
            self.leftOtherStyle = 'position:absolute;left:0;bottom: 0;top: 0;overflow: unset;z-index:1000;';
            self.rightOtherStyle = 'position:absolute;right:0;bottom: 0;top: 0;overflow: unset;z-index:1000;'
            // 设定为浮动打开还是不浮动打开
            self.isMouseOver = true;
            console.log("屏幕太小了")
          } else if (window.innerWidth <= 1680) {
            console.log("屏幕还算可以")
            self.leftTreeWidth = 'auto';
            self.rightTreeWidth = 0;
            self.leftOtherStyle = '';
            self.rightOtherStyle = 'position:absolute;right:0;bottom: 0;top: 0;overflow: unset;z-index:1000;';
            // 设定为浮动打开还是不浮动打开
            self.isMouseOver = true;
          } else {
            console.log("屏幕够大了")
            self.leftTreeWidth = 'auto';
            self.rightTreeWidth = 'auto';
            // 设定为浮动打开还是不浮动打开
            self.isMouseOver = false;
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
          console.log(editor)
          editor.onmousedown = function (e) {
            e = e || window.event;
            // e.preventDefault();
            // debugger

            // console.log(self.args)

            // 判断是否有onmouseup
            let mouseuped = false;
            this.onmouseup = function () {
              mouseuped = true; 
              // return             
              // console.log("抬起了")
            }
            if (!mouseuped) {
              this.onmousemove = function (e) {  // 可能是因为onmouseover是不包含子dom的，改用move；但是连带一个问题，第一个点击的过程中第一个点击的不是window时也不会触发
                // 要拿的是mouseover的event，mouseup是没有的
                let _this = this;
                e = e || window.event;
                console.log("经过")
                // console.log("抬起的对象",e)
                // console.log("抬起的对象",this)
                console.log("移动到的对象",e.target)
            
                this.onmouseup = function (e) {
                 
                  console.log(this.onmousemove)
                  // console.log("鼠标抬起了")      
                  e = e || window.event;
                  console.log("抬起的对象",e.target)

                  // debugger

                  // 输出点击时获取的数据
                  let getSelected = self.selectText(document.getElementsByTagName('iframe')[1].contentWindow,self);

                  let selText = getSelected.selectedText;
                  let selHtml = getSelected.selectedHtml;
                  let selectedDOM = getSelected.selectedDOM;

                  // console.log(selectedDOM)

                  // console.log(selHtml)

                  // 防止被无聊的点击覆盖了
                  self.selectedText = (selText.length !== 0 && selHtml.indexOf('krcd-ctrl krcd-section') ===-1 )? selText : self.selectedText;  // 原来这里写错了selHtml所以一直两个都是selHtml
                  self.selectedHtml = (selHtml.length !== 0 && selHtml.indexOf('krcd-ctrl krcd-section') ===
                    -1 )? selHtml : self.selectedHtml;
                  // debugger

                 

                  self.getPositon() // 工具栏定位
                   
                }
                
                
                // 必须清楚之前的事件
                _this.onmousemove = null;
              }
            }else{
              this.onmousemove = null;
            }

          }


         

        }, 1500)

        // 将改变内容的监听放到加载后
        this.addListener("contentchange", function () {
          console.log("内容改变了");
          console.log(self.$parent.$refs)

          console.log(self)
          // debugger

          const docThreePart = self.docSplit(self.iframeWin.document, self.getHtmlContent().htmlContent);

          self.$parent.$refs.setContentInp.value = docThreePart.contentValue.innerHTML; // 保证v-model最新的
          console.log(self.$parent.$refs.setContentInp.value);

          // 为了保证清空时取消保留原来页眉页脚的数据，以及确认后清空。
          const iframeWin = document.getElementsByTagName('iframe')[1].contentWindow;
          self.iframeWin = iframeWin;

          let headerValue = self.iframeWin.document.getElementsByClassName("krcd-tmp-header-value")[0];
          let footerValue = self.iframeWin.document.getElementsByClassName("krcd-tmp-footer-value")[0];


          if (self.$parent.$refs.setContentInp.value === '') {
            headerValue.innerHTML = '<p><br></p>'; // 页头
            footerValue.innerHTML = '<p><br></p>'; // 页脚
          } else {
            headerValue.innerHTML = self.headerValue; // 页头
            footerValue.innerHTML = self.footerValue; // 页脚
          }


        });

      });




    },


    beforeDestroy() {
      this.krcd.__ue__.destroy();
    },
  };

</script>

<style>
  /* jimmyFok's CSS style */
  .krcd-section::before {
    content: "我是标签"
  }

  .krcd-root {
    display: flex;
    flex-direction: row;
  }

  .editor-box {
    display: flex;
    flex-direction: column;
  }

  .nav-tools {
    display: flex;
    flex-direction: flex-start;
    align-items: center
  }

  .nav-tools>* {
    padding: 8px;
  }

  .left-tree {
    position: relative;
  }

  .showBtnLeft {
    display: inline-block;
    position: absolute;
    color: #F2F6FC;
    left: 100%;
    top: 88px;
    margin-top: -45px;

    height: 85px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    z-index: 1000;
    display: flex;
    align-items: center;
    border: 0;
    width: 8px;
    background-color: #65B1FF;
    box-shadow: rgba(64, 158, 255, 0.11) 2px 0px 8px;
    z-index: 1;
    /* background-color: #ffffff;
  border: 10px solid #65B1FF;
  width: 24px; */
  }

  .showBtnRight {
    display: inline-block;
    position: absolute;
    right: 100%;
    top: 88px;
    margin-top: -45px;
    width: 24px;
    height: 85px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    z-index: 1000;
    display: flex;
    align-items: center;
    border: 0;
    width: 8px;
    background-color: #65B1FF;
    box-shadow: rgba(64, 158, 255, 0.11) -2px 0px 8px;
    z-index: 1;
    /* background-color: #ffffff;
  border: 10px solid #65B1FF;
  width: 24px; */
  }

  /* .showBtnLittle{
  border: 0;
  width: 6px;
  background: #65B1FF;
} */

  /*
* 改造右方保证表格隐藏滚动
*/
  .widget-list {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .el-tabs--border-card>.el-tabs__content {
    padding: 0;
  }

  .el-tabs--border-card,
  .el-tabs__content,
  .el-tabs__content>.el-tab-pane,
  .el-tabs__content>.el-tab-pane>div,
  .el-tabs__content>.el-tab-pane>div>div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .el-tabs__content>.el-tab-pane>div>div>.el-table__header-wrapper {
    flex-shrink: 0;
    box-shadow: 0px 2px 8px #409eff1c;
    z-index: 1;
  }

  .el-table__body-wrapper {
    overflow: auto
  }

  .editor-box>div:nth-child(2) {
    flex-grow: 1;
    overflow: auto
  }

</style>
