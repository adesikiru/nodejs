const http = require('http');
const home = require('index.html');
const server = http.createServer((req, res) => {
    /* console.log(req); */
    process.exit();
});
server.listen(3000);