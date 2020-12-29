import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom";

import Routers from '../src/webRouter/index';
// import App from '../src/App'
// import App2 from '../src/App2'
import { Provider } from 'react-redux';
import { getServerStore } from '../src/store';

// 获取天气预报
import cheerio from "cheerio";
const request = require('request');

const PORT = 3000
const app = express()

app.use(express.static(path.resolve(__dirname, '../build'), {index:"root"}))
app.use(express.static(path.resolve(__dirname, '../src')))

app.use("/get_weather", function (req, res, next) {
    console.log(23432)
    // 获取天气预报
    request('https://tianqi.moji.com/weather/china/jiangsu/jianhu-county', function (err, response, body) {
        if (!err && response.statusCode == 200) {
            const $ = cheerio.load(body);
            //图标
            let icon = $('.wea_weather span img').attr('src');
            //天气
            let weather = $('.wea_weather b').text();
            //温度
            let temperature = $('.wea_weather em').text();
            //提示
            let tips = $('.wea_tips em').text();
            // address
            let address = $('.search_default').text();
            res.json({
                code: 200,
                data: {
                    icon, weather,  temperature, tips, address
                }
            })
        } else {
            res.json({
                code: "-1",
                data: null,
            })
        }
    })
})

//设置build以后的文件路径 项目上线用
app.use((req, res, next) => {
    const context = {}
    let store = getServerStore()
    let HTML = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}>
                <Routers/>
            </StaticRouter>
        </Provider>
    )
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }
        return res.send(
            data.replace(
                '{{root}}',
                `${HTML}`
            )
        )
    })
})


// ..
app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`)
})