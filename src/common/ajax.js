import axios from 'axios';
import baseUrls from '../../static/baseConfig/baseUrl'


var settings = {    
    baseURL:baseUrls.SetBaseUrl(),
    // baseURL:'http://192.168.1.50:62114/api',
//   baseURL: 'http://kpjkglwxgl.krmanager.com/api',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')?sessionStorage.getItem('token'):'',
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
    request: request
}
