'use strict'

const express = require('express')
const http = require('http')
const path = require('path')

const BASE = path.resolve(__dirname, '../.dev')

const routes = require('../config/static-routes')

const server = express()

server.use(express.static(BASE))

routes.forEach((route) => {
  server.get(route, (req, res) => {
    const reactAppPath = require.resolve('../.server/main')
    delete require.cache[reactAppPath]
    require(reactAppPath).default(route, (err, html) => {
      if (err) { return res.send(`<h1 style="color:red">${err.message}</h1>\n<p>${err.stack}</p>`) }
      res.send(html)
    })
  })
})

module.exports = (callback) => (
  http.createServer(server).listen(8080, callback)
)
