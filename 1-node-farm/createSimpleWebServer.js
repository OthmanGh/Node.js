// Import the built-in 'fs' module to work with the file system
const fs = require('fs');
// Import the built-in 'http' module to create an HTTP server
const http = require('http');
// Import the built-in 'url' module to analyze URLs
const url = require('url');

//////////////////////////////////
// Files: (No code related to files is present in the provided code)

//////////////////////////////////
//! Server Setup
// The callback function executes each time a request hits the server
const server = http.createServer((request, response) => {
  // Log the requested URL
  console.log(request.url);

  // Extract the pathname from the requested URL
  const pathName = request.url;

  // Simple routing based on the pathname
  if (pathName === '/' || pathName === '/overview') {
    // Send the response for the overview route
    response.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    // Send the response for the product route
    response.end('This is PRODUCT');
  } else {
    // Handle 404 Not Found
    response.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    response.end('<h1>Page Not Found!</h1>');
  }
});

// Listen to requests on port 8000 and IP address 127.0.0.1
// The callback function (optional) runs when the server is successfully started
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});

// Routing: Implementing different actions for different URLs
