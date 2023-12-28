// Import the built-in 'fs' module to work with the file system
const fs = require('fs');

// takes 3 arguments : path, encoding file, callback function
// this kind of format known as call Back Hell
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    // console.log(data2);
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      //console.log(data3);
      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
        console.log('Your file has been written ');
      });
    });
  });
});
console.log('Will read File!');
