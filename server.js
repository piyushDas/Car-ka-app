/* eslint-disable max-len */
const express = require('express')

const app = express()

const proxy = require('http-proxy-middleware')

const cors = require('cors')

const serverConfig = require('./server.config.dev')

// Get the authtoken from ct-auth cookie
let authToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmMiLCJleHAiOjE1Njk2MzkwMTgsImlhdCI6MTU2OTYyMTAxOH0.yLCfvrxDvfpgnwIzGLVlOz_w-_hkSfmO6Tm7rWmqNqVqQLyIgdj4cOL6_tJFtJg9xn59hbI_2gkTb7BZUWwJvQ'

const proxyOptions = {
  target: serverConfig.PROXY, // target host
  changeOrigin: true, // needed for virtual hosted sites
  logLevel: 'debug',
  autoRewrite: true,
  protocolRewrite: 'http',
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader(
    'Authorization',
    `Bearer ${authToken}`
    )
  }
}

app.use(cors())
/*
    add all API endpoints - without variables
    include relative paths only
*/
const gatewayProxy = proxy(
  [
   '/sellers/',
   '/ad/car',
   '/authenticate',
   '/seller'
  ],
  proxyOptions
)
app.use(gatewayProxy)

app.listen(serverConfig.PORT, serverConfig.HOST, err => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err)
    return
  }

  // eslint-disable-next-line no-console
  console.log(`Listening at http://${serverConfig.HOST}:${serverConfig.PORT}`)
})
