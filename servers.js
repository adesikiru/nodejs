const http = require('http')
const server = http.createServer(function (req, res) {
  console.log(req.headers)
  console.log(res)
})
server.listen(3003)
