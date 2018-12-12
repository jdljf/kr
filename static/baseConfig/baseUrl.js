var baseJSON=[{
    baseUrl:'http://192.168.1.50:8008/api'
}];
function SetBaseUrl(){
    return baseJSON[0].baseUrl;
}
export default{
    SetBaseUrl
}