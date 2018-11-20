<template>
  <div class="krcd-root">
    <div class="left-wrap">
        <h1>病历列表</h1>
        <div class="bl-content">
          
        </div>
    </div>
    <div class="my-editor" ref="editor" id="editor" :style="{ width:width, height:height }" style="box-shadow: 0 0 0 1px #d1d1d1, 0 0 3px 1px #ccc;flex:1;">
               
    </div>
  </div>
</template>
<script>
import "../../static/krcdEditor/krcd.config.js?t=88";
import "../../static/krcdEditor/ueditor/themes/default/css/ueditor.min.css";
import "../../static/krcdEditor/ueditor/ueditor.all.min.js";
import "../../static/krcdEditor/ueditor/lang/zh-cn/zh-cn.js";
import "../../static/krcdEditor/js/krcd-ie8-design.js";

export default {
  name: "krcdEditor",
  components: {},
  props: {
    //编辑器的宽高取决于编辑器渲染节点本身的宽高
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "calc(100%-144px)"
    }
  },
  data() {
    return {
      krcd: null,
      pageConfig: [
        {
          name: "A3",
          width: 1123,
          height: 1588,
          top: 72,
          right: 72,
          bottom: 72,
          left: 72
        },
        {
          name: "A4",
          width: 794,
          height: 1123,
          top: 72,
          right: 72,
          bottom: 72,
          left: 72
        },
        {
          name: "A5",
          width: 561.5,
          height: 794,
          top: 72,
          right: 72,
          bottom: 72,
          left: 72
        }
      ],
      checkSize: {}
    };
  },
  methods: {
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
    dddd() {
      var div = document.createElement("div");
      div.innerHTML = `<span id="gj" krcd-right="." krcd-type="checkbox" class="krcd-ctrl"  contenteditable="false">
  <span contenteditable="true" krcd-left="[" krcd-right="]"  class="krcd-value">
  </span>
</span>`;
      div = div.firstElementChild;
      var thisCtr = this.krcd.getControlByEl(div);
      console.log(thisCtr);
      this.krcd.getControlByEl(div).setValue([
        {
          label: "感觉很好",
          value: 1
        },
        {
          label: "感觉一般",
          value: 2
        }
      ]);
      this.krcd.insertControl(div, {
        mode: "EDITOR", //当前模式
        notdel: 0, //不许删除
        strictverify: 0, //强制校验
        desc: "感觉", //描述
        bindingdata: [
          //绑定数据
          {
            label: "感觉很好",
            value: 1
          },
          {
            label: "感觉一般",
            value: 2
          }
        ],
        remotedata: {
          //krcd v4的异步请求采用目前主流的axios，remotedata为发起异步请求时的配置项目
          url: "", //这里建议配置初始化KRCD时options中的ctrl_remote_handle一起用，因为存在你设置模板跟你打开模板时当前路径不一致的情况，导致如果用相对路径会出错的情况（如果用绝对路径也会存在换一家医院实施所有模板都需要改的情况）。故所有控件中的异步请求数据在发起请求前都会调用options.ctrl_remote_handle方法进行处理（也可以加一些权限控制）
          method: "get",
          headers: {},
          data: {}
        }
      });
    },
    setHTML(html) {
      this.krcd.html(html);
    }
  },
  created() {
    console.log("krcd components created.");
  },
  mounted() {
    //alert('新增扩展toolbar示例，详见krcdEditor.vue组件!');
    console.log(UE.getEditor("editor"));
    var that = this;
    this.krcd = new KRCD({
      el: this.$refs.editor,
      iframe_css_src: null, //string/Array数组 扩展css
      iframe_js_src: null, //string/Array数组 扩展js
      page_start_num: 6, //页面起始页//默认为1
      print: {
        resettingPrint(opt, viewDom) {}, //默认重置（包括首次设置）打印页面前触发。优先级高于render系列函数
        resetedPrint(opt, viewDom) {}, //默认重置（包括首次设置）打印页面后触发。优先级高于render系列函数
        renderHeader(index, page) {
          return `<div style="line-height:55px;background:red;border:1px solid yellow;">这里是header</div>`;
        }, //返回要渲染的页眉。默认从零开始
        renderFooter(index, page) {
          return `<div style="line-height:35px;background:blue;border:1px solid green;"><center>第${index +
            1}页<center></div>`;
        }, //返回要渲染的页脚。默认从零开始
        renderedHeader(index, count, page, header) {}, //渲染后
        renderedFooter(index, count, page, footer) {}, //渲染后
        scale: 2, //放大比例，默认2倍，越大越清晰，相应的渲染也更慢
        autoPrint: true, //是否默认打开pdfviewer即执行打印操作
        isDownload: false, //是否下载，如果为true，则不再打开pdfviewer页面
        fileName: "KRCD 测试打印", //如果isDownload=true时的pdf文件下载名称
        pageMode: "A4", //页面模式:A3|A4|A5 ……
        width: 794, //以下默认值
        height: 1123,
        top: 72,
        right: 72,
        bottom: 72,
        left: 72,
        printMode: "normal", //打印模式：normal|neat|revise|comment
        ctrlMode: "normal", //控件模式：normal|hidden|remove
        printDirection: "vertical", //打印方向 vertical|horizontal
        printCssUrl: null, //打印的样式表，可以是string，也可以是array
        printJsUrl: null //打印的js，可以是string，也可以是array
      },
      user: {
        //主要用于修订
        name: "krcd", //必须有name，用来判断是否是本人修改
        displayname: "KRCD默认用户56465465465" //支持扩展，但displayname 为必有项
      },
      ctrl_remote_handle: function(data) {
        //这里可以处理url，对url进行再加工。比如重置data.url值
        //data.url='static/krcdEditor/'+data.url;
        return data;
      },
      default_open_toolbar: "krcd-toolbar-editor", //默认打开的toolbar的集合，如果不填，默认使用第一个集合
      toolbars: [
        {
          name: "krcd-toolbar-file",
          title: "文件",
          items: [
            {
              name: "krcd-toolbar-file-file",
              title: "文件管理",
              items: [
                {
                  name: "openxml",
                  title: "打开XML"
                },
                {
                  name: "importxml",
                  title: "下载XML"
                }
              ]
            },
            {
              name: "test",
              title: "测试扩展",
              items: [
                {
                  name: "tt",
                  title: "字符扩展", //这里是扩展toolbar，扩展有两种方式：方式一：
                  render: function() {
                    return `<div class="panel-content-ctrl" title="字符扩展"  onclick="alert('字符扩展')">
            <div class="krcd-icon krcd-icon-openxml" style="width: 40px; height: 32px; float: none;"></div>
            <div style="text-align: center;">字符扩展</div>
          </div>`;
                  }
                },
                {
                  name: "tt2",
                  title: "对象扩展", //方式二：（推荐）
                  render: function() {
                    let div = document.createElement("div");
                    div.innerHTML = `<div class="panel-content-ctrl" title="对象扩展" >
            <div class="krcd-icon krcd-icon-openxml" style="width: 40px; height: 32px; float: none;"></div>
            <div style="text-align: center;">对象扩展</div>
          </div>`;
                    div = div.firstElementChild;
                    div.addEventListener("click", function() {
                      that.dddd();
                    });
                    return div;
                  }
                }
              ]
            }
          ]
        },
        {
          name: "krcd-toolbar-mykuozhang",
          title: "我的扩展",
          items: [
            {
              name: "krcd-toolbar-file-file",
              title: "测试我的扩展",
              items: [
                {
                  name: "fontfamily",
                  title: "字体"
                },
                {
                  name: "horizontal",
                  title: "分隔线"
                }
              ]
            }
          ]
        },
        {
          name: "krcd-toolbar-editor",
          title: "编辑",
          items: [
            {
              name: "krcd-toolbar-editor-history",
              title: "历史记录",
              items: [
                {
                  name: "drafts",
                  title: "草稿箱"
                },
                {
                  name: "undo",
                  title: "撤销"
                },
                "|",
                {
                  name: "redo",
                  title: "恢复"
                }
              ]
            },
            {
              name: "krcd-toolbar-editor-clipboard",
              title: "剪切板",
              items: [
                {
                  name: "paste",
                  title: "粘贴"
                },
                {
                  name: "copy",
                  title: "复制"
                },
                "|",
                {
                  name: "cut",
                  title: "剪切"
                }
              ]
            },
            {
              name: "krcd-toolbar-editor-fonts",
              title: "字体",
              items: [
                {
                  name: "fontfamily",
                  title: "字体"
                },
                {
                  name: "removeformat",
                  title: "清除格式"
                },
                {
                  name: "autotypeset",
                  title: "自动格式化"
                },
                {
                  name: "formatmatch",
                  title: "格式刷"
                },
                "|",
                {
                  name: "fontsize",
                  title: "字号"
                },
                {
                  name: "upsize",
                  title: "增大字体"
                },
                {
                  name: "downsize",
                  title: "缩小字体"
                },
                {
                  name: "subscript",
                  title: "上标"
                },
                {
                  name: "superscript",
                  title: "下标"
                },
                {
                  name: "bold",
                  title: "加粗"
                },
                {
                  name: "italic",
                  title: "倾斜"
                },
                {
                  name: "underline",
                  title: "下划线"
                },
                {
                  name: "strikethrough",
                  title: "删除线"
                },
                {
                  name: "forecolor",
                  title: "文字颜色"
                },
                {
                  name: "backcolor",
                  title: "背景颜色"
                },
                {
                  name: "horizontal",
                  title: "分隔线"
                }
              ]
            },
            {
              name: "krcd-toolbar-editor-paragraphs",
              title: "段落",
              items: [
                {
                  name: "justifyleft",
                  title: "向左对齐"
                },
                {
                  name: "justifycenter",
                  title: "居中对齐"
                },
                {
                  name: "justifyright",
                  title: "向右对齐"
                },
                {
                  name: "justifyjustify",
                  title: "两端对齐"
                },
                {
                  name: "blockquote",
                  title: "引用"
                },
                {
                  name: "blockindent",
                  title: "增加缩进"
                },
                {
                  name: "blockoutdent",
                  title: "减小缩进"
                },
                "|",
                {
                  name: "unorderedlist",
                  title: "无序编号"
                },
                {
                  name: "orderedlist",
                  title: "有序编号"
                },
                {
                  name: "rowspacingtop",
                  title: "段前距"
                },
                {
                  name: "rowspacingbottom",
                  title: "段后距"
                },
                {
                  name: "lineheight",
                  title: "行高"
                }
              ]
            }
          ]
        },
        {
          name: "krcd-toolbar-insert",
          title: "插入",
          items: [
            {
              name: "krcd-toolbar-insert-pagebreak",
              title: "分页符",
              items: [
                {
                  name: "pagebreak",
                  title: "分页符"
                }
              ]
            },
            {
              name: "krcd-toolbar-insert-spechars",
              title: "字符",
              items: [
                {
                  name: "spechars",
                  title: "字符"
                }
              ]
            },
            {
              name: "krcd-toolbar-insert-links",
              title: "链接",
              items: [
                {
                  name: "insertlink",
                  title: "添加链接"
                },
                "|",
                {
                  name: "unlink",
                  title: "取消链接"
                }
              ]
            },
            {
              name: "krcd-toolbar-insert-images",
              title: "图片",
              items: [
                {
                  name: "insertimage",
                  title: "图片管理"
                },
                {
                  name: "simpleupload",
                  title: "插入"
                },
                {
                  name: "emotion",
                  title: "表情"
                },
                {
                  name: "vectordiagram",
                  title: "矢量图"
                },
                "|",
                {
                  name: "snapscreen",
                  title: "截屏"
                },
                {
                  name: "scrawl",
                  title: "涂鸦"
                },
                {
                  name: "horizontal",
                  title: "分隔线"
                }
              ]
            },
            {
              name: "krcd-toolbar-insert-map",
              title: "地图",
              items: [
                {
                  name: "map",
                  title: "地图"
                }
              ]
            },
            {
              name: "krcd-toolbar-insert-insertcode",
              title: "代码",
              items: [
                {
                  name: "insertcode",
                  title: "代码"
                }
              ]
            },
            {
              name: "krcd-toolbar-insert-table",
              title: "表格",
              items: [
                {
                  name: "inserttable",
                  title: "表格"
                }
              ]
            },
            {
              name: "krcd-toolbar-insert-kityformula",
              title: "公式",
              items: [
                {
                  name: "kityformula",
                  title: "公式"
                }
              ]
            },
            {
              name: "krcd-toolbar-insert-blockcomment",
              title: "批注",
              items: [
                {
                  name: "blockcomment",
                  title: "批注"
                }
              ]
            }
          ]
        },
        {
          name: "krcd-toolbar-table",
          title: "表格",
          items: [
            {
              name: "krcd-toolbar-table-table",
              title: "表格",
              items: [
                {
                  name: "inserttable",
                  title: "插入表格"
                },
                {
                  name: "deletetable",
                  title: "删除表格"
                },
                {
                  name: "insertrow",
                  title: "插入行"
                },
                {
                  name: "insertcol",
                  title: "插入列"
                },
                "|",
                {
                  name: "deleterow",
                  title: "删除行"
                },
                {
                  name: "deletecol",
                  title: "删除列"
                }
              ]
            },
            {
              name: "krcd-toolbar-table-merge",
              title: "合并单元格",
              items: [
                {
                  name: "mergecells",
                  title: "合并单元格"
                },
                {
                  name: "mergedown",
                  title: "向下合并单元格"
                },
                {
                  name: "mergeright",
                  title: "向右合并单元格"
                },
                "|",
                {
                  name: "splittocells",
                  title: "拆分单元格"
                },
                {
                  name: "splittocols",
                  title: "单元格拆分成列"
                },
                {
                  name: "splittorows",
                  title: "单元格拆分成行"
                }
              ]
            },
            {
              name: "krcd-toolbar-table-alignmerge",
              title: "对齐方向",
              items: [
                {
                  name: "valign-top",
                  title: "顶端对齐"
                },
                {
                  name: "valign-middle",
                  title: "垂直居中"
                },
                {
                  name: "valign-bottom",
                  title: "底端对齐"
                },
                "|",
                {
                  name: "align-left",
                  title: "左对齐"
                },
                {
                  name: "align-center",
                  title: "居中"
                },
                {
                  name: "align-right",
                  title: "右对齐"
                }
              ]
            },
            {
              name: "krcd-toolbar-table-style",
              title: "表格线样式",
              items: [
                {
                  name: "tablestyle",
                  title: "表格样式",
                  items: [
                    {
                      title: "隐藏表格线",
                      name: "tb-hide" //这里是具体的样式
                    },
                    {
                      title: "设为实线",
                      name: "tb-solid"
                    },
                    {
                      title: "设为虚线",
                      name: "tb-dotted"
                    }
                  ]
                },
                {
                  name: "tablelowerframeline",
                  title: "下框线"
                },
                {
                  name: "tableupperframeline",
                  title: "上框线"
                },
                {
                  name: "tableleftframeline",
                  title: "左框线"
                },
                {
                  name: "tablerightframeline",
                  title: "右框线"
                },
                {
                  name: "tablenoborder",
                  title: "无框线"
                },
                "|",
                {
                  name: "tableinternaltransverseline",
                  title: "内部横线"
                },
                {
                  name: "tableinternalverticalline",
                  title: "内部竖线"
                },
                {
                  name: "tableinsideborder",
                  title: "内部框线"
                },
                {
                  name: "tablelateralframeline",
                  title: "外侧框线"
                },
                {
                  name: "tableallframelines",
                  title: "所有框线"
                }
              ]
            }
          ]
        },
        {
          name: "krcd-toolbar-views",
          title: "视图",
          items: [
            {
              name: "krcd-toolbar-views-directory",
              title: "目录",
              items: [
                {
                  name: "directory",
                  title: "显示目录"
                }
              ]
            },
            {
              name: "krcd-toolbar-views-comment",
              title: "批注",
              items: [
                {
                  name: "showcomment",
                  title: "显示批注"
                }
              ]
            },
            {
              name: "krcd-toolbar-views-revise",
              title: "修订",
              items: [
                {
                  name: "revise",
                  title: "修订"
                }
              ]
            },
            {
              name: "krcd-toolbar-views-preview",
              title: "预览文档",
              items: [
                {
                  name: "preview",
                  title: "预览文档"
                }
              ]
            }
          ]
        },
        {
          name: "krcd-toolbar-tools",
          title: "工具",
          items: [
            {
              name: "krcd-toolbar-tools-drafts",
              title: "草稿箱",
              items: [
                {
                  name: "drafts",
                  title: "草稿箱"
                }
              ]
            },
            {
              name: "krcd-toolbar-tools-print",
              title: "打印",
              items: [
                {
                  name: "print",
                  title: "普通打印"
                },
                {
                  name: "seniorprint",
                  title: "高级打印"
                }
              ]
            },
            {
              name: "krcd-toolbar-tools-search",
              title: "搜索",
              items: [
                {
                  name: "searchreplace",
                  title: "查找替换"
                }
              ]
            },
            {
              name: "krcd-toolbar-tools-wordcount",
              title: "字数统计",
              items: [
                {
                  name: "wordcount",
                  title: "字数统计"
                }
              ]
            }
          ]
        },
        {
          name: "krcd-toolbar-controls",
          title: "病历控件",
          items: [
            {
              name: "krcd-toolbar-controls-krcdtemplate",
              title: "控件库",
              items: [
                {
                  name: "krcdtemplate",
                  title: "控件库"
                }
              ]
            },
            {
              name: "krcd-toolbar-controls-controls",
              title: "新增控件",
              items: [
                {
                  name: "krcdctrllabel",
                  title: "标签控件"
                },
                {
                  name: "krcdctrltext",
                  title: "单行文本"
                },
                {
                  name: "krcdctrlsection",
                  title: "文档段"
                },
                {
                  name: "krcdctrlsummary",
                  title: "文档节"
                },
                "|",
                {
                  name: "krcdctrlselect",
                  title: "下拉选择"
                },
                {
                  name: "krcdctrldate",
                  title: "日期控件"
                },
                {
                  name: "krcdctrlradio",
                  title: "单选框"
                },
                {
                  name: "krcdctrlcbx",
                  title: "复选框"
                }
              ]
            },
            {
              name: "krcd-toolbar-controls-krcdmode",
              title: "模式设置",
              items: [
                {
                  name: "krcdmode",
                  title: "模式设置"
                }
              ]
            }
          ]
        },
        //扩展
        {
          name: "krcd-toolbar-editorSize",
          title: "选择大小",
          items: [
            {
              name: "krcd-toolbar-editorSize-sizeWrap",
              title: "尺寸大小",
              items: [
                {
                  name: "editor-size",
                  title: "编辑大小",
                  render: function() {
                    var div = document.createElement("div");
                    div.innerHTML = `<div class="panel-content-ctrl" title="尺寸">
                                    <select class="size-select" style="width:50px;height:27px;border-radius: 4px;margin-bottom: 5px;"><option>A3</option><option selected>A4</option><option>A5</option></select>
                                    <div style="text-align: center;">尺寸</div>
                                    </div>`;
                    console.log($(div));
                    $(div)
                      .find(".size-select")
                      .on("change", function(e) {
                        that.checkSize =
                          that.pageConfig[
                            $(this)
                              .find("option:selected")
                              .index()
                          ];
                        $(
                          ".krcd-editor-outer,.krcd-editor-inner,.krcd-editor-pager,.edui-editor.edui-default,.edui-editor-iframeholder.edui-default"
                        ).width(that.checkSize.width);
                      });
                    return div;
                  }
                }
              ]
            }
          ]
        }
      ]
    });
    console.log(this.krcd);
    this.krcd.addListener("ready", function() {
      console.log("krcd 初始化完成！");
    });
    this.krcd.addListener("headerfooteropen", function() {
      console.log(this);
      console.log("design headerfooteropen ok!");
    });

    this.krcd.addListener("beforerender", function() {
      console.log("beforerender ok!");
    });
    this.krcd.addListener("rendered", function() {
      console.log(arguments);
      console.log("rendered ok!");
    });
    this.krcd.addListener("click", function() {
      console.log(arguments);
      console.log("click ok!");
    });
    this.krcd.addListener("valuechange", function() {
      console.log(arguments);
      console.log("valuechange ok!");
    });

    this.krcd.addListener("contentchange", function() {
      console.log("contentchange ok!");
    });
    console.log(window);
    //todo 这里可以尝试调用this.krcd的各种方法
    console.log(window.baidu.editor.getEditor("editor"));
    console.log(window.$EDITORUI.edui1.editor);
    console.log(window.$EDITORUI["edui75"].editor);
    var ue = window.$EDITORUI["edui151"].editor;

    // console.log(ue.getContent());
  },
  beforeDestroy() {
    this.krcd.__ue__.destroy();
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
.krcd-root {
  display: flex;
  height: 100%;
  width: 100%;
}
.left-wrap {
  width: 300px;
  height: 100%;
  border: 1px solid #ccc;
}
.left-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.left-wrap h1 {
  height: 29px;
  font-size: 14px;
  line-height: 29px;
  padding: 0 10px;
  background: #f1f1f1;
}
.left-wrap .bl-content {
  flex: 1;
  overflow-y: auto;
}
</style>

