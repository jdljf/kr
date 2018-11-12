import axios from 'axios';


var settings = {
  baseURL: 'http://kpjkglwxgl.krmanager.com/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
}

function request(method,url,data,options={}){
    return axios({
        method,
        url,
        data,
        baseURL:options.baseURL||settings.baseURL,
        headers:options.headers||settings.headers,
        crossDomain: true,
        withCredentials:options.withCredentials!==false,
    })
}


export const ajax={
    setbaseURL(baseURL){
        settings.baseURL=baseURL
    },
    get(url,options){
        return request("get",url,null,options);
    },
    post(url,data,options){
        return request("post",url,data,options);
    },
    delete(url,data,options){
        return request("delete",url,data,options);
    },
    put(url,data,options){
        return request("put",url,data,options);
    },
}
