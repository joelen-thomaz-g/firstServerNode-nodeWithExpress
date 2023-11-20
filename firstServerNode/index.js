const http = require('node:http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello, World');
})

server.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
})