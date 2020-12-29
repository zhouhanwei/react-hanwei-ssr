import Https from "../http/index";

// 获取天气
export  function getWeather(params = {}) {
    return new Https({
        url: "/get_weather",
        data: params || {},
        method: "get",
        transer: 1,
        isQuery: false,  // 是否queryString
    }).getResults()
}