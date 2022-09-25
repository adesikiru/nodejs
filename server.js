const http = require('http')
/* const home = require('./index.html'); */
const server = http.createServer((req, res) => {
  console.log(req)
  res.setHeader('Content-Type', 'text/html')
  res.write(`<html>
    <head><title>node.js</title></head>
    <body>
    <h1>fuck</h1></body>
    
    </html>`)
  /* process.exit(); */
})
server.listen(3000)
