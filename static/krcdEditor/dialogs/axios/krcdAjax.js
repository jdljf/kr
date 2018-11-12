function ajaxFun(obj) {
  var callback = $.ajax({
    url: 'http://kpjkglwxgl.krmanager.com/api' + obj.url,
    type: obj.method || "post",
    data: obj.data,
    dataType: 'json',
    beforeSend: function (request) {
      request.setRequestHeader("X-CSRF-TOKEN", window.csrf);
    },
  });
  callback.then = function (res) {
    callback.done(res);
    return callback;
  };
  callback.catch = function (rej) {
    callback.fail(rej);
    return callback;
  }
  return callback;
}

// function ajaxFun(obj) {
//   var callback=function(){}
//   $.ajax({
//     url: 'http://kpjkglwxgl.krmanager.com/api' + obj.url,
//     type: obj.method || "post",
//     data: obj.data,
//     dataType: 'json',
//     beforeSend: function (request) {
//       request.setRequestHeader("X-CSRF-TOKEN", window.csrf);
//       ajaxFun.before = function (be) {
//         console.log("before")
//       };
//     },
//     success:function(r){
//         ajaxFun.then = function (r) {
//             console.log(r)
//           }
//     },
//     error:function(e){
//         ajaxFun.catch = function (e) {
//             console.log(e)
//           }
//     },
//     complate:function(c){
//         ajaxFun.complate = function (c) {
//             console.log("complate");
//           }
//     }
//   })
// }
// function aaa(){
//     var objs={
//         b(){
//             console.log(this)
//         },
//         e(){
//             console.log(this)
//         }
//     }
// }
// aaa().objs.b()

var krcdAjax = {
  get(url) {
    return ajaxFun({
      type: 'get',
      url: url
    })
  },
  post(url, data) {
    return ajaxFun({
      type: 'post',
      url: url,
      data: data
    })
  }
}
