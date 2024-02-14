const fs = require("fs");
// Synchronously and Asynchronously method

// Asynchronpous Method
fs.open('abc.txt',(err)=> {
    if(err){
        console.log('Failed to open File');
    }
    else{
        console.log('File open Sucessfully');
    }
});

//Synronous Method 
// fs.openSync('abc.txt');
// console.log('File open Sucessfully');