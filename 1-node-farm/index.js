// Import the built-in 'fs' module to work with the file system
const fs = require('fs');

// Read the contents of the 'input.txt' file synchronously using 'readFileSync'
// 'utf-8' specifies the encoding of the file content
const textIn = fs.readFileSync('./1-node-farm/txt/input.txt', 'utf-8');
console.log('Content of input.txt:', textIn);

// Create a new string with additional information about avocados and the current timestamp
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${new Date().toDateString()}`;

// Write the new string to the 'output.txt' file synchronously using 'writeFileSync'
fs.writeFileSync('./1-node-farm/txt/output.txt', textOut);
console.log(
  'File written successfully. Check output.txt for the updated content.'
);
