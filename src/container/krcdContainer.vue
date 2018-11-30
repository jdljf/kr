<script>
import Tools from '../components/Tools'
import Widgets from '../components/Widgets'
import krcdEditor from '../components/krcdEditor'
import Tree from '../components/Tree'
import Models from '../components/Template'
import NavMenu from '../components/NavMenu'
import {ajax} from '../common'


import funs from '../common/funs'

import tabContainer from './tabContainer'

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
      Tree,
      Models,
      tabContainer,
      NavMenu
  },
  data() {
    return {  
      /* 初始化数据 */
      inSection: false,   // 聚焦点是否在文档段
      tarEl: null,   // 每次点击获取的DOM对象
      tarType: null,  // 每次点击获取的TYPE_NAME
      self: this,    // 让this.self可以引用this
      iframeWin: null,  // 将iframe下的window对象
      krcd: null,   // krcd
      on: {'opacity':'1'},
      off: {'opacity':'0','width':'0','height':'0'},
      onOff: {'opacity':'0','width':'0','height':'0'}, // 工具条显示隐藏开关      
      toolStyle: {},    // 初始化工具条样式

      // 模版类型
      templateTag:[
        {
          id: "0",
          title: "住院病案首页"
        },
        {
          id: "1",
          title: "病程记录"
        },
        {
          id: "2",
          title: "入院记录"
        },
        {
          id: "4",
          title: "24小时内入出院记录"
        },
      ],
      // 组件类型（归属于哪种表）
      widgetTag:[
        {
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
      toolBtns: null,
      
      // 工具条所有可用按钮数组
      arrBtns: [{
          name: '文本', 
          type: 'TEXT',
          iconCls: 'el-icon-edit',
          // 预留每个类型的字典
          dic: [
            {
              group: "文本字典1", // 分组名
              groupItems: [
                  { 
                    name:'默认字典', 
                    content: `<span class="krcd-ctrl" krcd-type="text" krcd-right="." id="krcd-text-default" style=";padding-left:4px;display:inline-block;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px" contenteditable="false" krcd-model="%7B%22mode%22%3A%22EDITOR%22%2C%22notdel%22%3A0%2C%22strictverify%22%3A0%2C%22verify%22%3A%22%22%2C%22required%22%3A0%2C%22desc%22%3A%22%E6%96%87%E6%9C%AC%E8%BE%93%E5%85%A5%22%7D"><span class="krcd-value" krcd-left="[" krcd-right="]" contenteditable="true" title="文本输入">文本输入</span></span>` ,
                    date: "2018-11-25 21:04:10",
                  }
                ]  // 组项目
            },
          ]
        },
        {
          name: '下拉', 
          type: 'SELECT',
          iconCls: 'el-icon-location',
           dic: [
            {
              group: "下拉字典1", // 分组名
              groupItems: [
                  { 
                    name:'下拉1', 
                    content: `<span class="krcd-ctrl" contenteditable="false" krcd-type="select" id="krcd-select-default" style=";padding-left:4px;display:inline-block;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px" krcd-model="%7B%22mode%22%3A%22EDITOR%22%2C%22notdel%22%3A0%2C%22strictverify%22%3A0%2C%22required%22%3A0%2C%22multi%22%3A0%2C%22desc%22%3A%22%E6%80%A7%E5%88%AB%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E7%94%B7%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E5%A5%B3%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E6%9C%AA%E7%9F%A5%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D" krcd-value="" krcd-isloadasyncdata="true" bindingdata="[{&quot;value&quot;:&quot;1&quot;,&quot;label&quot;:&quot;男&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;2&quot;,&quot;label&quot;:&quot;女&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;3&quot;,&quot;label&quot;:&quot;未知&quot;,&quot;selected&quot;:0}]" krcd-updatetime="2018-11-26T10:22:28.332Z"><span contenteditable="true" class="krcd-value krcd-select" title="性别">性别</span></span>`
                  },
                  { 
                    name:'下拉2', 
                    content: `<span class="krcd-ctrl" contenteditable="false" krcd-type="select" id="krcd-select-default" style=";padding-left:4px;display:inline-block;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px" krcd-model="%7B%22mode%22%3A%22EDITOR%22%2C%22notdel%22%3A0%2C%22strictverify%22%3A0%2C%22required%22%3A0%2C%22multi%22%3A0%2C%22desc%22%3A%22%E5%B2%97%E4%BD%8D%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E5%8C%BB%E7%94%9F%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E6%8A%A4%E5%A3%AB%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E6%9C%AA%E7%9F%A5%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D" krcd-value="" krcd-isloadasyncdata="true" bindingdata="[{&quot;value&quot;:&quot;1&quot;,&quot;label&quot;:&quot;医生&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;2&quot;,&quot;label&quot;:&quot;护士&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;3&quot;,&quot;label&quot;:&quot;未知&quot;,&quot;selected&quot;:0}]" krcd-updatetime="2018-11-26T10:45:22.721Z"><span contenteditable="true" class="krcd-value krcd-select" title="岗位">岗位</span></span>`
                  },
                ]  // 组项目
            },
          ]
        },
        {
          name: '单选', 
          type: 'RADIO',
          iconCls: 'el-icon-more-outline',
          dic:[
            {
              group: "单选字典1", // 分组名
              groupItems: [
                  { 
                    name:'病人的感觉', 
                    content: `<span id="krcd-radio-default" style=";padding-left:4px;display:inline-block;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px" krcd-right="." krcd-type="radio" class="krcd-ctrl" contenteditable="false" krcd-model="%7B%22mode%22%3A%22EDITOR%22%2C%22notdel%22%3A0%2C%22strictverify%22%3A0%2C%22desc%22%3A%22%E7%97%85%E4%BA%BA%E7%9A%84%E6%84%9F%E8%A7%89%22%2C%22required%22%3A0%2C%22multi%22%3A1%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E6%84%9F%E8%A7%89%E5%BE%88%E5%A5%BD%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E6%84%9F%E8%A7%89%E4%B8%80%E8%88%AC%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E6%97%A0%E6%84%9F%E8%A7%89%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%224%22%2C%22label%22%3A%22%E6%84%9F%E8%A7%89%E7%B3%9F%E7%B3%95%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D" krcd-value="" krcd-isloadasyncdata="true" bindingdata="%5B%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E6%84%9F%E8%A7%89%E5%BE%88%E5%A5%BD%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E6%84%9F%E8%A7%89%E4%B8%80%E8%88%AC%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E6%97%A0%E6%84%9F%E8%A7%89%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%224%22%2C%22label%22%3A%22%E6%84%9F%E8%A7%89%E7%B3%9F%E7%B3%95%22%2C%22selected%22%3A0%7D%5D" krcd-updatetime="2018-11-26T11:13:43.578Z"><span contenteditable="true" krcd-left="[" krcd-right="]" class="krcd-value"><label contenteditable="false"><input name="radio_84da6b15" type="radio" value="%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E6%84%9F%E8%A7%89%E5%BE%88%E5%A5%BD%22%2C%22selected%22%3A0%7D">感觉很好</label><label contenteditable="false"><input name="radio_84da6b15" type="radio" value="%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E6%84%9F%E8%A7%89%E4%B8%80%E8%88%AC%22%2C%22selected%22%3A0%7D">感觉一般</label><label contenteditable="false"><input name="radio_84da6b15" type="radio" value="%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E6%97%A0%E6%84%9F%E8%A7%89%22%2C%22selected%22%3A0%7D">无感觉</label><label contenteditable="false"><input name="radio_84da6b15" type="radio" value="%7B%22value%22%3A%224%22%2C%22label%22%3A%22%E6%84%9F%E8%A7%89%E7%B3%9F%E7%B3%95%22%2C%22selected%22%3A0%7D">感觉糟糕</label></span></span>`
                  },
                  { 
                    name:'费用类型', 
                    content: `<span id="krcd-radio-default" style=";padding-left:4px;display:inline-block;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px" krcd-right="." krcd-type="radio" class="krcd-ctrl" contenteditable="false" krcd-model="%7B%22mode%22%3A%22EDITOR%22%2C%22notdel%22%3A0%2C%22strictverify%22%3A0%2C%22desc%22%3A%22%E8%B4%B9%E7%94%A8%E7%B1%BB%E5%9E%8B%22%2C%22required%22%3A0%2C%22multi%22%3A1%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E8%87%AA%E8%B4%B9%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E7%A4%BE%E4%BF%9D%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E8%AE%B0%E8%B4%A6%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%224%22%2C%22label%22%3A%22%E5%85%B6%E4%BB%96%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D" krcd-value="" krcd-isloadasyncdata="true" bindingdata="%5B%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E8%87%AA%E8%B4%B9%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E7%A4%BE%E4%BF%9D%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E8%AE%B0%E8%B4%A6%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%224%22%2C%22label%22%3A%22%E5%85%B6%E4%BB%96%22%2C%22selected%22%3A0%7D%5D" krcd-updatetime="2018-11-26T11:20:35.048Z"><span contenteditable="true" krcd-left="[" krcd-right="]" class="krcd-value" title="病人的感觉"><label contenteditable="false"><input name="radio_7d923459" type="radio" value="%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E8%87%AA%E8%B4%B9%22%2C%22selected%22%3A0%7D">自费</label><label contenteditable="false"><input name="radio_7d923459" type="radio" value="%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E7%A4%BE%E4%BF%9D%22%2C%22selected%22%3A0%7D">社保</label><label contenteditable="false"><input name="radio_7d923459" type="radio" value="%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E8%AE%B0%E8%B4%A6%22%2C%22selected%22%3A0%7D">记账</label><label contenteditable="false"><input name="radio_7d923459" type="radio" value="%7B%22value%22%3A%224%22%2C%22label%22%3A%22%E5%85%B6%E4%BB%96%22%2C%22selected%22%3A0%7D">其他</label></span></span>`
                  },
                ]  // 组项目
            },
          ]
        },
        {
          name: '复选', 
          type: 'CHECKBOX',
          iconCls: 'el-icon-more',
          dic:[
            {
              group: "复选字典1", // 分组名
              groupItems: [
                  { 
                    name:'缴费方式', 
                    content: `<span id="krcd-checkbox-default" style=";padding-left:4px;display:inline-block;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px" krcd-right="." krcd-type="checkbox" class="krcd-ctrl" contenteditable="false" krcd-model="%7B%22mode%22%3A%22EDITOR%22%2C%22notdel%22%3A0%2C%22strictverify%22%3A0%2C%22desc%22%3A%22%E7%BC%B4%E8%B4%B9%E6%96%B9%E5%BC%8F%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E7%8E%B0%E9%87%91%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E9%93%B6%E8%81%94%E5%8D%A1%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E6%94%AF%E4%BB%98%E5%AE%9D%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%224%22%2C%22label%22%3A%22%E5%BE%AE%E4%BF%A1%22%2C%22selected%22%3A0%7D%5D%2C%22required%22%3A0%2C%22remotedata%22%3Anull%7D" krcd-value="" krcd-isloadasyncdata="true" bindingdata="%5B%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E7%8E%B0%E9%87%91%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E9%93%B6%E8%81%94%E5%8D%A1%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E6%94%AF%E4%BB%98%E5%AE%9D%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%224%22%2C%22label%22%3A%22%E5%BE%AE%E4%BF%A1%22%2C%22selected%22%3A0%7D%5D" krcd-updatetime="2018-11-26T11:30:17.773Z"><span contenteditable="true" krcd-left="[" krcd-right="]" class="krcd-value" title="多选框"><label contenteditable="false"><input type="checkbox" value="%7B%22value%22%3A%221%22%2C%22label%22%3A%22%E7%8E%B0%E9%87%91%22%2C%22selected%22%3A0%7D">现金</label><label contenteditable="false"><input type="checkbox" value="%7B%22value%22%3A%222%22%2C%22label%22%3A%22%E9%93%B6%E8%81%94%E5%8D%A1%22%2C%22selected%22%3A0%7D">银联卡</label><label contenteditable="false"><input type="checkbox" value="%7B%22value%22%3A%223%22%2C%22label%22%3A%22%E6%94%AF%E4%BB%98%E5%AE%9D%22%2C%22selected%22%3A0%7D">支付宝</label><label contenteditable="false"><input type="checkbox" value="%7B%22value%22%3A%224%22%2C%22label%22%3A%22%E5%BE%AE%E4%BF%A1%22%2C%22selected%22%3A0%7D">微信</label></span></span>`
                  },
                  
                ]  // 组项目
            },

          ]
        },
        {
          name: '日历', 
          type: 'DATE',
          iconCls: 'el-icon-date',
          dic:[
             {
              group: "日历字典1", // 分组名
              groupItems: [
                  { 
                    name:'日历', 
                    content: `<span class="krcd-ctrl" id="krcd-date-default" style=";padding-left:4px;display:inline-block;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px" krcd-type="date" krcd-model="%7B%22mode%22%3A%22EDITOR%22%2C%22notdel%22%3A0%2C%22strictverify%22%3A0%2C%22required%22%3A0%2C%22desc%22%3A%22%E6%97%A5%E6%9C%9F%E6%8E%A7%E4%BB%B6%22%2C%22defvalue%22%3A%222018-11-26%2012%3A00%3A00%22%2C%22format%22%3A%22%7Byyyy%7D-%7BMM%7D-%7Bdd%7D%20%7Bhh%7D%3A%7Bmm%7D%3A%7Bss%7D%22%2C%22min%22%3A%22%22%2C%22max%22%3A%22%22%7D" contenteditable="false"><span class="krcd-value flatpickr-input" contenteditable="true" krcd-left="[" krcd-right="]" title="日期控件">2018-11-26 19:33:31</span><div class="flatpickr-calendar hasTime animate showTimeInput arrowTop" tabindex="-1" style="top: 65.4688px; left: 15.957px; right: auto;"><div class="flatpickr-months"><span class="flatpickr-prev-month"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path></svg></span><div class="flatpickr-month"><div class="flatpickr-current-month"><span class="cur-month">十一月 </span><div class="numInputWrapper"><input class="numInput cur-year" type="text" pattern="\d*" tabindex="-1" aria-label="Year"><span class="arrowUp"></span><span class="arrowDown"></span></div></div></div><span class="flatpickr-next-month"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path></svg></span></div><div class="flatpickr-innerContainer"><div class="flatpickr-rContainer"><div class="flatpickr-weekdays"><div class="flatpickr-weekdaycontainer"><span class="flatpickr-weekday">周日</span><span class="flatpickr-weekday">周一</span><span class="flatpickr-weekday">周二</span><span class="flatpickr-weekday">周三</span><span class="flatpickr-weekday">周四</span><span class="flatpickr-weekday">周五</span><span class="flatpickr-weekday">周六</span></div></div><div class="flatpickr-days" tabindex="-1"><div class="dayContainer"><span class="flatpickr-day prevMonthDay" aria-label="十月 28, 2018" tabindex="-1">28</span><span class="flatpickr-day prevMonthDay" aria-label="十月 29, 2018" tabindex="-1">29</span><span class="flatpickr-day prevMonthDay" aria-label="十月 30, 2018" tabindex="-1">30</span><span class="flatpickr-day prevMonthDay" aria-label="十月 31, 2018" tabindex="-1">31</span><span class="flatpickr-day " aria-label="十一月 1, 2018" tabindex="-1">1</span><span class="flatpickr-day " aria-label="十一月 2, 2018" tabindex="-1">2</span><span class="flatpickr-day " aria-label="十一月 3, 2018" tabindex="-1">3</span><span class="flatpickr-day " aria-label="十一月 4, 2018" tabindex="-1">4</span><span class="flatpickr-day " aria-label="十一月 5, 2018" tabindex="-1">5</span><span class="flatpickr-day " aria-label="十一月 6, 2018" tabindex="-1">6</span><span class="flatpickr-day " aria-label="十一月 7, 2018" tabindex="-1">7</span><span class="flatpickr-day " aria-label="十一月 8, 2018" tabindex="-1">8</span><span class="flatpickr-day " aria-label="十一月 9, 2018" tabindex="-1">9</span><span class="flatpickr-day " aria-label="十一月 10, 2018" tabindex="-1">10</span><span class="flatpickr-day " aria-label="十一月 11, 2018" tabindex="-1">11</span><span class="flatpickr-day " aria-label="十一月 12, 2018" tabindex="-1">12</span><span class="flatpickr-day " aria-label="十一月 13, 2018" tabindex="-1">13</span><span class="flatpickr-day " aria-label="十一月 14, 2018" tabindex="-1">14</span><span class="flatpickr-day " aria-label="十一月 15, 2018" tabindex="-1">15</span><span class="flatpickr-day " aria-label="十一月 16, 2018" tabindex="-1">16</span><span class="flatpickr-day " aria-label="十一月 17, 2018" tabindex="-1">17</span><span class="flatpickr-day " aria-label="十一月 18, 2018" tabindex="-1">18</span><span class="flatpickr-day " aria-label="十一月 19, 2018" tabindex="-1">19</span><span class="flatpickr-day " aria-label="十一月 20, 2018" tabindex="-1">20</span><span class="flatpickr-day " aria-label="十一月 21, 2018" tabindex="-1">21</span><span class="flatpickr-day " aria-label="十一月 22, 2018" tabindex="-1">22</span><span class="flatpickr-day " aria-label="十一月 23, 2018" tabindex="-1">23</span><span class="flatpickr-day " aria-label="十一月 24, 2018" tabindex="-1">24</span><span class="flatpickr-day " aria-label="十一月 25, 2018" tabindex="-1">25</span><span class="flatpickr-day today selected" aria-label="十一月 26, 2018" aria-current="date" tabindex="-1">26</span><span class="flatpickr-day " aria-label="十一月 27, 2018" tabindex="-1">27</span><span class="flatpickr-day " aria-label="十一月 28, 2018" tabindex="-1">28</span><span class="flatpickr-day " aria-label="十一月 29, 2018" tabindex="-1">29</span><span class="flatpickr-day " aria-label="十一月 30, 2018" tabindex="-1">30</span><span class="flatpickr-day nextMonthDay" aria-label="十二月 1, 2018" tabindex="-1">1</span><span class="flatpickr-day nextMonthDay" aria-label="十二月 2, 2018" tabindex="-1">2</span><span class="flatpickr-day nextMonthDay" aria-label="十二月 3, 2018" tabindex="-1">3</span><span class="flatpickr-day nextMonthDay" aria-label="十二月 4, 2018" tabindex="-1">4</span><span class="flatpickr-day nextMonthDay" aria-label="十二月 5, 2018" tabindex="-1">5</span><span class="flatpickr-day nextMonthDay" aria-label="十二月 6, 2018" tabindex="-1">6</span><span class="flatpickr-day nextMonthDay" aria-label="十二月 7, 2018" tabindex="-1">7</span><span class="flatpickr-day nextMonthDay" aria-label="十二月 8, 2018" tabindex="-1">8</span></div></div></div></div><div class="flatpickr-time time24hr hasSeconds" tabindex="-1"><div class="numInputWrapper"><input class="numInput flatpickr-hour" type="text" pattern="\d*" tabindex="-1" data-step="1" data-min="0" data-max="23"><span class="arrowUp"></span><span class="arrowDown"></span></div><span class="flatpickr-time-separator">:</span><div class="numInputWrapper"><input class="numInput flatpickr-minute" type="text" pattern="\d*" tabindex="-1" data-step="1" data-min="0" data-max="59"><span class="arrowUp"></span><span class="arrowDown"></span></div><span class="flatpickr-time-separator">:</span><div class="numInputWrapper"><input class="numInput flatpickr-second" type="text" pattern="\d*" data-step="1" data-min="0" data-max="59"><span class="arrowUp"></span><span class="arrowDown"></span></div></div><div class="flatpickr-confirm visible lightTheme"><div class="left">清除</div><div class="center">今天</div><div class="right" tabindex="-1">确定 <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="17" viewBox="0 0 17 17"> <g> </g> <path d="M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z" fill="#000000"></path> </svg></div></div></div></span>`
                  },
                  
                ]  // 组项目
            },

          ]
        },
        {
          name: '文档段', 
          type: 'SECTION',
          iconCls: 'el-icon-news',
          dic:[
            {
              group: "文档段字典", // 分组名
              groupItems: [
                  { 
                    name:'文档段', 
                    content: `<div class="krcd-ctrl krcd-section" contenteditable="false" krcd-type="section" id="krcd-section-default" style="display:inline-block;background-color: #006ffc14;border-width: 1px;border-style: solid;border-color: #006ffc7d;width: 92%;height: 90%;box-sizing: border-box;" krcd-isloadasyncdata="false" krcd-model="%7B%22mode%22%3A%22EDITOR%22%2C%22originalmode%22%3A%22EDITOR%22%2C%22desc%22%3A%22%22%7D"><p contenteditable="true" class="krcd-value"><br></p></div>`
                  },
                  
                ]  // 组项目
            },

          ]
        },
        {
          name: '存控件', 
          type: 'WIDGET',
          iconCls: 'el-icon-document',
          dic:[]
        }],

      // 从localStorage中取组件数据存起来
      widgetlist: localStorage.getItem('widget')?
                    JSON.parse(localStorage.getItem('widget'))&&JSON.parse(localStorage.getItem('widget')).length!==0?
                        JSON.parse(localStorage.getItem('widget')):
                        []:
                    []
      ,

      // 从localStorage中取模版数据存起来
      templatelist: []
      // localStorage.getItem('template')?
      //               JSON.parse(localStorage.getItem('template'))&&JSON.parse(localStorage.getItem('template')).length!==0?
      //                   JSON.parse(localStorage.getItem('template')):
      //                   []:
      //               [],
      ,

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

      /**
       * 0、模版插入替换
       * params {string} content   模版/控件/字典的innerHTML内容
       * params {string} styleString  head>style标签中的样式文本
       */
      replaceFun: (content,styleString)=>{
          const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document; // 获取iframe中的document

          // 确保初始化时没有聚焦导致不能倒入模版
          // innerDoc.getElementsByClassName('krcd-tmp-content-value')[0].focus();

          // innerDoc.getElementsByClassName('krcd-tmp-content-value')[0].innerHTML='';
          // this.krcd.execCommand('inserthtml',content);  // 聚焦点插入内容

          innerDoc.getElementsByClassName('krcd-tmp-root')[0].innerHTML = content
      },

      // 提示输入模版名称弹窗
      inputName:(fun)=>{
        this.$prompt('请输入模版名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[0-9a-zA-Z\u2E80-\u9FFF]{2,10}$/,  // 自己写的
          inputErrorMessage: '模版名必须大于2不得超过9个字符'
        }).then(({ value }) => {
          this.$message({
            // type: 'success',
            message: value  + '  模版，正在保存...' 
          });
          fun(value);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },


      getHtmlContent:()=>{
          const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document;  // 通过这样来获取iframe中的document
          let htmlContent = innerDoc.getElementsByClassName('krcd-tmp-root')[0].innerHTML;  // 获取对应的innerHTML  

          const headStyleString = (()=>{
            const arr = innerDoc.querySelectorAll('style[stylename]');
            const newArr = []
            for(let i=0, len=arr.length;i<len;i++){
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
      saveHtmlContent: (val)=>{

        const docContent = this.getHtmlContent()
        console.log(docContent)

        const newItem = {
            name: val,
            id: '',  // 因为是模版所以不设置了
            styleString: docContent.headStyleString,// style标签中的样式存起来插到模版对应的style标签中  
            content: docContent.htmlContent,
            scope: '全院',
            discribe: '描述', // 描述
            tag: docContent.tag, // 模版类型
            // date: funs.nowtime(),          // 应该以后台返回数据为准
        }

        // 将原来的转为接口的格式
        const postData = this.font2back(newItem)

        this.ajaxTemplate('Save',postData,`${val}模版，保存成功`,()=>{            
            this.templatelist.push(newItem);
        });
        
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
            // innerDoc.getElementsByClassName('krcd-tmp-root')[0].innerHTML = content

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

      ajaxTemplate: (type,content,successMsg,sucessFun)=>{ 
        ajax.post(
          `/DocumentTemplate/${type}`,
          JSON.stringify(content)                            
        ).then((res)=>{
          this.saveSuccess(successMsg)  
          sucessFun()
          console.log(res)
        }).catch((err)=>{
          console.log(err)
          this.saveError('请查看控制台错误')
        })
      },  
      
    }
  },
  methods: {
    
    // 调出编辑的弹窗
    editWin(type){
      console.log(window)
      switch(type){
        case "文本":
            // 弹出窗
            window.$EDITORUI["edui93"]._edit();


      }
      console.log(window.$EDITORUI["edui93"]._edit)
      window.$EDITORUI["edui93"]._edit()
    },
    

    // $EDITORUI["edui93"]._edit()   // 这是文本

    // $EDITORUI["edui93"]._delete()
    
    // $EDITORUI["edui118"]._edit()  // 这是下拉

//     <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
//     <img src="img_w3slogo.gif" draggable="true" ondragstart="drag(event)" id="drag1" width="88" height="31"></div>
// <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

//     // 利用H5的draggable="true"来拖动控件
//     function allowDrop(ev)
// {
// 	ev.preventDefault();
// }

// function drag(ev)
// {
// 	ev.dataTransfer.setData("Text",ev.target.id);
// }

// function drop(ev)
// {
// 	ev.preventDefault();
// 	var data=ev.dataTransfer.getData("Text");
// 	ev.target.appendChild(document.getElementById(data));
// }
    
    
    // 保存成功函数
    saveError(msg) {
        this.$message({
          message: '抱歉，保存'+msg+'模版失败！',
          type: 'error'
        });
      },
    
     // 保存成功函数
    saveSuccess(msg) {
        this.$message({
          message: '恭喜你，保存'+msg+'模版成功！',
          type: 'success'
        });
      },

    // 去除字符串头尾空格
    strTrim(str) {
      return str.replace(/^\s+|\s+$/gm,'');
    },    

    // 数据值转换为后端的
    font2back(newItem){
      return{
          "code": newItem.id,   // 组件id
          "discribe": newItem.discribe,  // 描述
          "deptCode": newItem.scope,
          "creatorUserId": 0,     // 可以默认0
          "templateName": newItem.name,
          "htmlContent": newItem.content,
          "styleContent": newItem.styleString,
          "id": newItem.index!==0?newItem.index:0,       // 可以默认0
          "tag": newItem.tag  
      }
    },

    back2font(newItem){      
      return{
          id: newItem.code,   // 组件id
          discribe: newItem.discribe,  // 描述
          scope: newItem.deptCode,
          "creatorUserId": 0,     // 可以默认0
          name: newItem.templateName,
          content: newItem.htmlContent,
          styleContent: newItem.styleString,
          index: newItem.id,  // 将后台的顺序存到index中
          tag: newItem.tag
      }
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
          name: target.id,
          id: target.id,
          styleString: headStyleString,// style标签中的样式存起来插到模版对应的style标签中  
          content: htmlContent,
          scope: '全院',
          discribe: '描述', // 描述
          date: funs.nowtime(),  //  存起来保存时间
      }
      
      // 将模版push到widgetlist数组中
      this.widgetlist.push(newItem);

      // 保存到localStorage
      // localStorage.setItem('widget',JSON.stringify(this.widgetlist))

      // this.saveSuccess('组件');
      
      return callback() 
    },  
    
    // // 保存真整页内容为模版
    // saveHtmlContent(itemName="哈哈哈哈", callback=()=>{}){

    //   const innerDoc = document.getElementsByTagName('iframe')[1].contentWindow.document;  // 通过这样来获取iframe中的document
    //   let htmlContent = innerDoc.getElementsByClassName('krcd-tmp-content-value')[0].innerHTML;  // 获取对应的innerHTML  
    //   // let htmlContent = this.getHTML()
    //   console.log(htmlContent)
    //   // console.log(innerDoc.querySelectorAll('style[stylename]'))

    //   const headStyleString = (()=>{
    //     const arr = innerDoc.querySelectorAll('style[stylename]');
    //     const newArr = []
    //     for(let i=0, len=arr.length;i<len;i++){
    //       newArr.push(this.strTrim(arr[i].innerHTML))
    //     }
    //     return newArr.join('')
    //   })()  
      
    //   const newItem = {
    //       name: itemName,
    //       id: '',  // 因为是模版所以不设置了
    //       styleString: headStyleString,// style标签中的样式存起来插到模版对应的style标签中  
    //       content: htmlContent,
    //       scope: '全院',
    //       date: funs.nowtime(),          
    //   }

    //   // 将原来的转为接口的格式
    //   const postData = this.font2back(newItem)

    //   this.templatelist.push(newItem);

    //   // 设置localStorage
    //   localStorage.setItem('template',JSON.stringify(this.templatelist))

    //   this.ajaxTemplate(content);
      
    //   return callback(JSON.stringify(postData))
    // },     

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
            "notdel": 0,//是否不许删除，默认0位可以删除
            "strictverify": 0,//是否强制校验（不符合要求既不允许输入），默认为0不强制校验
            "verify": "",//验证输入是否符合要求，可自己定义表达式
            "required": 0,//是否必填
            "desc": "文本输入",//控件描述值
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

      /* 创建控制器（装饰了一下原来的DOM元素）*/
      let newDiv = this.krcd.createCtrl(div, defOpt?defOpt:{
          "mode":"EDITOR",//当前模式
          "notdel":0,//是否可以删除
          "strictverify":0,//是否强制校验
          "required":0,//是否必填
          "desc":"日期控件",//描述
          "defvalue":funs.timestampToTime(Math.round(new Date().getTime()/1000)),//默认值
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
              'ctrlStyle': ''
              // `${ctrlStyle}
              // ;display:inline-block;position:relative;padding:4px;margin-top:20px;background-color:#006ffc14;border-width:1px;border-style:solid;border-color:#006ffc7d;margin-top:4px;box-sizing:border-box
              // `
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
      this.onOff = {...this.off}
    },

    // 插入Section区域控件（文档段）
    addSection(newDiv,domSet={ctrlId:null, ctrlName:null,ctrlStyle:null}){           
      let div = document.createElement('div');     
      div.innerHTML = `<div class="krcd-ctrl krcd-section" contenteditable="false" krcd-type="section" id=${domSet.ctrlId?domSet.ctrlId:'ctrl-section'} style=${domSet.ctrlStyle ? domSet.ctrlStyle: null} krcd-isloadasyncdata="false"><p contenteditable="true" class="krcd-value"></p></div>`
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

  // 侦查templatelist
   watch: {
    //  侦查templist保存local
    templatelist: function (newTemplatelist, oldTemplatelist) {
      console.log('存local')
      localStorage.setItem("template",JSON.stringify(newTemplatelist.map(this.font2back)))  // 这样就要改变读取时的问题
      console.log(newTemplatelist)
    }
  },

  mounted() {   
    console.log(funs)
    
    let self = this;

    // // 为什么不能这样？！
    // let content = {
    //       "deptCode": "",
    //       "creatorUserId": 0,
    //        "id": 0
    //    }
    
    // this.ajaxTemplate('GetList', content ,()=>{
    //     console.log('成功了！',typeof res.data.data) 

    //     const templataData = res.data.data;
        
    //     // 后端数组转为前端数组
    //     const templateArr = templataData.map(this.back2font)        
    //     // 修改templatelist的数据
    //     this.templatelist = [ ...templateArr]
    //      });

    ajax.post(
      '/DocumentTemplate/GetList',
       {
          "deptCode": "",
          "creatorUserId": 0,
           "id": 0
       }).then((res)=>{
        console.log('成功了！',typeof res.data.data) 

        const templataData = res.data.data;
        
        // 后端数组转为前端数组
        const templateArr = templataData.map(this.back2font)       

        // 修改templatelist的数据
        this.templatelist.push(...templateArr)  // 需要保留原来this.templatelist的引用
         }).catch((err)=>{
         console.log(err)
    })
    
    // 点击聚焦
    this.krcd.addListener('click', function(event) {

       console.log(arguments);

      // 获取ifame中的window
      self.iframeWin = document.getElementsByTagName('iframe')[1].contentWindow

      let e = event || window.event;    
      
      self.tarEl = arguments[0].target;  // 获取点中的对象
      
      self.onOff = {...this.on}   // 点击让工具条显示

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

      if(arguments[0].target.tagName==="P"){ 
          console.log(arguments[0].target)
          // 用replaceChild来将当前节点替换。
          let content = arguments[0].target.innerHTML;
          const newNode = self.iframeWin.document.createElement("div");
          newNode.innHTML =  content
          newNode.style="display:inline-block;width:100%;contenteditable=true;" // 保证原来p的整行且居中
          
          arguments[0].target.parentNode.replaceChild(newNode,arguments[0].target)
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
         self.onOff = {...this.off}
      }

      // 根据点击对象的坐标给组件传值来定位
      const getPositon = ()=>{
        let editorX = document.querySelector('.krcd-editor-inner').offsetLeft
        let editorY = document.querySelector('.krcd-editor-inner').offsetTop
        let scrTop = document.querySelector('.krcd-editor').scrollTop   // 滚动的高度
        let toolsH = document.querySelector('.krcd-toolbars').offsetHeight
        console.log(document.querySelector('.tools-btn'))
        let toolbtnW = document.querySelector('.tools-btn').offsetWidth
        let toolbtnH = document.querySelector('.tools-btn').offsetHeightd

        console.log(document.body.scrollTop)

        console.log(scrTop)
        console.log(editorY)

        // alert(toolbtnH)

        // 设定工具条的样式
        const sources = {
          "flex": 1,
          "display": "flex",
          "align-items": "center",
          "flex-direction": "column",  // 改变column再扩展字典
          "line-height": "30px",
          "background-color": "white",        
          // "padding": "4px",
          'position': 'absolute',
          // 'width': '72px',
          // 'height': 56*6 + 'px',
          'left': editorX + arguments[0].clientX + 
                toolbtnW + 144 +
                'px',
          // 'top': toolsH + editorY + arguments[0].clientY - scrTop + 55*2 +  // 为了要输入的时候不要被影响到
          //       // toolbtnH + 
          //       'px',  
          'top': arguments[0].clientY - scrTop > (arguments[0].screenY*2/3) ? editorY + arguments[0].clientY - scrTop - 55 - toolsH +  // 为了要输入的时候不要被影响到
                // toolbtnH + 
                'px':toolsH + editorY + arguments[0].clientY - scrTop + 55*2 +  // 为了要输入的时候不要被影响到
          //       // toolbtnH + 
                'px'                
                ,   
          // 'border':"1px solid #d3d3d3",
          // 'height':'30px',
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
