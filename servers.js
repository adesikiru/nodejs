const http = require('http')
const server = http.createServer(function (req, res) {
  console.log(req.headers, req.url, req.method)
  res.setHeader('Content-Type', 'text/html')
  res.write(`<html lang="en">`)
  res.write(`<head><meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>`)
  res.write(`<body>Ade is cool!!</body>`)
  res.write(`</html>`)
})
server.listen(3003)
