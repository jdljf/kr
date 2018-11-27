// 共用方法
const timestampToTime = (timestamp)=> {
    // 将获取的数字都转为2位数
    let change2 = (n) =>{
        if(n<10){
            return '0'+ n
        }else{
            return n
        }        
    }
    let date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = change2((date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)) + '-';
    let D = change2(date.getDate()) + ' ';
    let h = change2(date.getHours()) + ':';
    let m = change2(date.getMinutes()) + ':';
    let s = change2(date.getSeconds());
    return Y+M+D+h+m+s;
}

const nowtime = ()=> timestampToTime(Math.round(new Date().getTime()/1000)) // 获取现在时间

export default{
    timestampToTime,
    nowtime
}