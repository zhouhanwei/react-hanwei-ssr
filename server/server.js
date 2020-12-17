import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom";

import Routers from '../src/webRouter/index';
// import App from '../src/App'
// import App2 from '../src/App2'
import { Provider } from 'react-redux'
import { getServerStore } from '../src/store'

const PORT = 8089
const app = express()

app.use(express.static(path.resolve(__dirname, '../build'), {index:"root"}))
app.use(express.static(path.resolve(__dirname, '../src')))

//设置build以后的文件路径 项目上线用
app.use((req, res, next) => {
    console.log(req.url)
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