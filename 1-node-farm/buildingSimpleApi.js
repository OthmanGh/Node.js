const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('hello from Overview !!');
  } else if (pathName === '/product') {
    res.end('hello from Product !!');
  } else if (pathName === '/api') {
    console.log(dataObj);
    res.writeHead(200, { 'Content-Title': 'application/json' });
    res.end(`${data}`);
  } else {
    res.writeHead(404, {
      'Content-text': 'text/html',
    });
    res.end(`<h1>404 error Page Not Found !!</h1>`);
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Start listenining to coming requests');
});
