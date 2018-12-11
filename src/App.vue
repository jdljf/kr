<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./assets/css/css-reset.css";
html,body{padding: 0;margin: 0;border: 0;height:100%;width:100%;}
#app{
  height:100%;
  width:100%;
  overflow: hidden;
}
.ctrls-leftWrap{
  height:600px;
  box-sizing: border-box;
}
.edui-for-paste{
  display: none;
}
</style>
