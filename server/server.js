import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom";

import Routers from '../src/webRouter/index';
// import App from '../src/App'
// import App2 from '../src/App2'

const PORT = 8080
const app = express()


app.use(express.static(path.resolve(__dirname, '../build')))
app.use(express.static(path.resolve(__dirname, '../src')))

//设置build以后的文件路径 项目上线用
app.use((req, res, next) => {
    console.log(req.url)
    const context = {}
    const frontComponents = ReactDOMServer.renderToString(
        <StaticRouter
            location={req.url}
            context={context}>
            <Routers/>
        </StaticRouter>
    )
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${frontComponents}</div>`
            )
        )
    })
})

// ..
app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`)
})