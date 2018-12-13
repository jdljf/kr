<template>
  <el-container style="flex-grow:1;display:flex">
    <el-header style="height: 30px;
            box-sizing: border-box;
            background-color: #409EFF;
            color: #F2F6FC;
            line-height: 30px;
            font-size: 13px;
            text-align: left;
            padding: 0px 12px;"></el-header>
    <el-main class="list-main">
      <el-row class="list-row">
        <el-col :span="24" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px', display:'flex', flexDirection: 'row', width:'180px', height:'80px', flexShrink: 0 }">
            <img :src="imgsArr[0]" class="image">
            <div class="list-msg">
              <span class="pat-name">患者姓名患者姓名患者姓名</span>
              <div class="bottom clearfix">
                <div class="pat-msg">
                  <span class="shade"></span>
                  <span>女 28岁sdklfjdsklfjdskljfdslkfjdslkfjdlk</span>
                </div>
                <el-button type="text" class="button" @click="changeShow">
                  <PatMsg>
                    <i :class="showHide?'el-icon-arrow-left':'el-icon-arrow-right'"></i>
                  </PatMsg>
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <slot></slot>

      <FilesTable></FilesTable>
    </el-main>
  </el-container>
</template>

<script>
  import PatMsg from './PatMsg'
  import FilesTable from './FilesTable'

  export default {
    name: "FileList",
    components: {
      PatMsg,
      FilesTable
    },
    data() {
      return {
        showHide: false, // 用来记录病人详细信息是否完全展示
      };
    },
    props: {
      imgsArr: Array,
    },
    methods: {
      changeShow() {
        this.showHide = !this.showHide
      }
    }

  }

</script>

<style scoped>
  .list-main {
    padding: 0;
    border-right: 1px solid rgb(220, 223, 230);

  }

  .list-row {
    padding: 12px 12px 4px 12px;
    flex-grow: 1;
    overflow: auto;
  }

  .list-msg {
    padding: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    overflow: hidden;
  }

  .pat-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
    color: #303133;
    padding: 12px;
    text-align: left;
  }

  .pat-msg {
    flex-grow: 1;
    font-size: 13px;
    color: #999;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: row;
    padding-bottom: 8px;
    padding-right: 8px;
    overflow: hidden;
    position: relative;
  }

  .pat-msg>span {
    word-break: break-all;
    line-height: 16px;
    text-align: left;
  }

  .shade {
    height: 16px;
    width: 100%;
    background: linear-gradient(top, #ffffff91 30%, #ffffff 70%);
    position: absolute;
    bottom: 0;
  }

  .image {
    height: 80px;
    width: 60px;
    padding: 8px 0 8px 8px;
    box-sizing: border-box;
    flex-shrink: 0
  }

  .bottom {
    display: flex;
    padding: 0 8px 0 12px;
    flex-direction: row;
    flex-grow: 1;
  }

  .button {
    padding: 0;
    margin: 4px 0 12px;
  }

</style>
