<template>
  <div style="height:100%;width:100%;">
    
     <div class="toolbars" hidden>
       
      <b>修改模式：</b>
      <button v-on:click="changeMode('DESIGN')">设置为设计模式</button>
      <button v-on:click="changeMode('EDITOR')">设置为编辑模式</button>
      <button v-on:click="changeMode('STRICT')">设置为严格（表单）模式</button>
      <button v-on:click="changeMode('READONLY')">设置为只读模式</button>
      <button v-on:click="getMode()">获取当前模式</button>
      <br>
      <b>内部方法：</b>
      <button v-on:click="importXML()">导入xml</button>
      <button v-on:click="exportXML()">导出xml</button>
       <button v-on:click="downloadXML()">下载xml</button>
       <button v-on:click="getHTML()">获取编辑器内容</button>
       <button class="setContent" v-on:click="setHTML()">设置编辑器内容</button><input class="setContent-inp" ref="setContentInp" type="text" v-model="txthtml" placeholder="请输入html内容">
       <br>
       <b>拖拽已有控件：</b>
       <span title="支持拖拽" class="dragstart" draggable="true" html="%3Cspan%20class%3D%22krcd-ctrl%22%20krcd-type%3D%22text%22%20krcd-right%3D%22.%22%20id%3D%22abc%22%20krcd-model%3D%22%257B%2522mode%2522%253A%2522EDITOR%2522%252C%2522notdel%2522%253A0%252C%2522strictverify%2522%253A0%252C%2522verify%2522%253A%2522%255E%255B0-9%255D*%2524%2522%252C%2522required%2522%253A0%252C%2522desc%2522%253A%2522%25E6%2595%25B4%25E6%2595%25B0%25E6%258E%25A7%25E4%25BB%25B6%2522%252C%2522remotedata%2522%253A%257B%2522url%2522%253A%2522%252Fdata%252Fjson1.json%2522%252C%2522method%2522%253A%2522get%2522%252C%2522data%2522%253A%257B%2522name%2522%253A%2522tl%2522%257D%257D%257D%22%0A%20%20%20%20%20%20%20%20%20%20contenteditable%3D%22false%22%3E%3Cspan%20class%3D%22krcd-value%22%20krcd-left%3D%22%5B%22%20krcd-right%3D%22%5D%22%20contenteditable%3D%22false%22%20%3E%E6%95%B4%E6%95%B0%E6%8E%A7%E4%BB%B6%3C%2Fspan%3E%0A%20%20%20%20%20%20%3C%2Fspan%3E" v-on:dragstart="drag($event)" >
          <span class="krcd-ctrl" krcd-type="text" krcd-right="." id="abc" krcd-model="%7B%22mode%22%3A%22EDITOR%22%2C%22notdel%22%3A0%2C%22strictverify%22%3A0%2C%22verify%22%3A%22%5E%5B0-9%5D*%24%22%2C%22required%22%3A0%2C%22desc%22%3A%22%E6%95%B4%E6%95%B0%E6%8E%A7%E4%BB%B6%22%2C%22remotedata%22%3A%7B%22url%22%3A%22%2Fdata%2Fjson1.json%22%2C%22method%22%3A%22get%22%2C%22data%22%3A%7B%22name%22%3A%22tl%22%7D%7D%7D"
          contenteditable="false"><span class="krcd-value" krcd-left="[" krcd-right="]" contenteditable="false" >整数控件</span>
      </span>
       </span>
      <span  title="支持拖拽" class="dragstart" draggable="true" v-on:dragstart="drag($event)" html="%3Cspan%20class%3D%22krcd-ctrl%22%20krcd-value%3D'%5B%7B%20%22label%22%3A%20%22%E6%84%9F%E8%A7%89%E5%BE%88%E5%A5%BD%22%2C%20%22value%22%3A%201%20%7D%5D'%20krcd-type%3D%22select%22%20krcd-updatetime%3D%222018-5-3%2014%3A13%3A02%22%20krcd-right%3D%22.%22%20id%3D%22abc-select4%22%20krcd-model%3D%22%257B%2522mode%2522%253A%2522EDITOR%2522%252C%2522notdel%2522%253A0%252C%2522strictverify%2522%253A0%252C%2522required%2522%253A0%252C%2522multi%2522%253A1%252C%2522desc%2522%253A%2522%25E6%2584%259F%25E8%25A7%2589%2522%252C%2522bindingdata%2522%253A%255B%257B%2522label%2522%253A%2522%25E6%2584%259F%25E8%25A7%2589%25E5%25BE%2588%25E5%25A5%25BD1%2522%252C%2522value%2522%253A1%257D%252C%257B%2522label%2522%253A%2522%25E6%2584%259F%25E8%25A7%2589%25E4%25B8%2580%25E8%2588%25AC1%2522%252C%2522value%2522%253A2%257D%252C%257B%2522label%2522%253A%2522%25E6%2597%25A0%25E6%2584%259F%25E8%25A7%25891%2522%252C%2522value%2522%253A3%257D%252C%257B%2522label%2522%253A%2522%25E6%2584%259F%25E8%25A7%2589%25E7%25B3%259F%25E7%25B3%25951%2522%252C%2522value%2522%253A4%257D%255D%257D%22%0A%20%20%20%20%20%20%20%20%20%20contenteditable%3D%22false%22%3E%3Cspan%20class%3D%22krcd-value%22%20krcd-left%3D%22%5B%22%20krcd-right%3D%22%5D%22%20contenteditable%3D%22false%22%20%3E%E4%B8%8B%E6%8B%89%E6%8E%A7%E4%BB%B6%3C%2Fspan%3E%3C%2Fspan%3E" ><span class="krcd-ctrl" krcd-value='[{ "label": "感觉很好", "value": 1 }]' krcd-type="select" krcd-updatetime="2018-5-3 14:13:02" krcd-right="." id="abc-select4" krcd-model="%7B%22mode%22%3A%22EDITOR%22%2C%22notdel%22%3A0%2C%22strictverify%22%3A0%2C%22required%22%3A0%2C%22multi%22%3A1%2C%22desc%22%3A%22%E6%84%9F%E8%A7%89%22%2C%22bindingdata%22%3A%5B%7B%22label%22%3A%22%E6%84%9F%E8%A7%89%E5%BE%88%E5%A5%BD1%22%2C%22value%22%3A1%7D%2C%7B%22label%22%3A%22%E6%84%9F%E8%A7%89%E4%B8%80%E8%88%AC1%22%2C%22value%22%3A2%7D%2C%7B%22label%22%3A%22%E6%97%A0%E6%84%9F%E8%A7%891%22%2C%22value%22%3A3%7D%2C%7B%22label%22%3A%22%E6%84%9F%E8%A7%89%E7%B3%9F%E7%B3%951%22%2C%22value%22%3A4%7D%5D%7D"
          contenteditable="false"><span class="krcd-value" krcd-left="[" krcd-right="]" contenteditable="false" >下拉控件</span></span>
          </span>
      
    </div>
    <!-- <div class="toolbars"></div> -->
    <!-- <button @click="testSet()">设置按钮</button> -->
    <!-- <button @click="getTds()">获取编辑器的td</button> -->
    <div style="margin:0 auto;width:100%;height:100%;">
      <krcd-editor ref="krcdEditor"></krcd-editor>
    </div>
    <div  style="margin:20px auto;width:1200px" hidden>
      <h2>模式介绍：</h2>
      <p>
          1.  设计模式 DESIGN 设计模板<br>
          2.  编辑模式 EDITOR 普通编辑模式（固定 label 控件，只允许对区域控件、非只读控件操作），该模式下的 toolbar 只能对控件里面的元素起作用，对 label 不起作用-》【只对label做限制】<br>
          3.  严格模式 STRICT （只允许对文档段及控件修改-》门诊），执行严格模板。也就是表单模式<br>
          4.  只读模式 READONLY（所有）<br>
<br><br><br><br>
      </p>
    </div>
  </div>
</template>
<script>
import krcdEditor from "../container/krcdContainer";
import { ajax } from "../common";
import $ from 'jquery';
export default {
  components: {
    krcdEditor
  },
  data() {
    return {
      txthtml: ""
    };
  },
  methods: {
    execCommand(cmd) {
      this.$refs.krcdEditor.execCommand(cmd);
    },
    drag(evt) {
      evt.dataTransfer.effectAllowed = "move";
      //evt.dataTransfer.setDragImage(evt.target, 0, 0);
      evt.dataTransfer.clearData();
      const html = decodeURIComponent(evt.target.getAttribute("html"));
      evt.dataTransfer.setData("Text", html);
    },
    changeMode(mode) {
      this.$refs.krcdEditor.mode(mode);
    },
    getMode() {
      alert(this.$refs.krcdEditor.mode());
    },
    getHTML() {
      alert(this.$refs.krcdEditor.getHTML());
    },
    setHTML() {
      // this.$refs.setContentInp.value】
      this.$refs.krcdEditor.setHTML(this.$refs.setContentInp.value);
    },
    importXML() {
      const xml = `<?xml version="1.0" encoding="UTF-8"?><table border="" cellspacing="" cellpadding=""><tr><th>Header</th></tr><tr><td>Data</td></tr></table>`;
      this.$refs.krcdEditor.krcd.importXML();
    },
    exportXML() {
      alert(this.$refs.krcdEditor.krcd.exportXML());
    },
    downloadXML() {
      this.$refs.krcdEditor.krcd.downloadXML();
    },
    testSet() {
      // console.log(baidu);
      // this.$refs.krcdEditor.dddd();
      this.$refs.krcdEditor.krcd.exportXML();
      this.$refs.krcdEditor.krcd.getJSON();
      // var getControls=JSON.parse(sessionStorage.control_arr);
      // console.log(getControls)
      // document.execCommand("insertHTML","false",'<h1>插入插入插入</h1>')

      // document.execCommand("insertHTML","false",'<h1>asdasasdsa</h1>')
    }
  },
  mounted() {
    // var data = {
    //   ClusA: "001",
    //   PageIndex: 1,
    //   PageSize: 30
    // };
    // ajax.post("/clus/GetAllComb", data).then(r => {
    //   console.log(r);
    // });
    $(".krcd-editor")
      .parent()
      .width("100%");
  }
};
</script>
<style scoped>
.toolbars {
  line-height: 30px;
  margin-bottom: 20px;
}
.toolbars button {
  margin-left: 10px;
}
.dragstart {
  margin-left: 15px;
  cursor: move;
}
.dragstart:hover {
  border: 1px solid rgb(142, 243, 182);
}
</style>

