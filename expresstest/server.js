const path = require('path')
const express = require('express')

const app = express()

const resolve = folder => path.resolve(__dirname, folder)

const serve = path => express.static(resolve(path), {
  maxAge: 0
})

const subApp = express()
subApp.get('/', (r, q) => {
  console.info(subApp.mountpath)
  q.end("Admin HomePage")
})
console.info(__dirname + '/public')
app.use('/admin', subApp)
app.use('/dist', express.static(__dirname + '/dist'))
app.use('/public',serve('public'))

app.get('/', (r, q) => {
  q.send('Hello world!')
})
app.listen(3000)
