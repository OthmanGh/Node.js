const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  res.end('Hello From Server!!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Start listenining to coming requests');
});
