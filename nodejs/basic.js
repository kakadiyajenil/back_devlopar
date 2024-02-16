const fs = require("fs");

const { add, product } = require("./basic.js");
const { METHODS } = require("http");
// const (product} = require('./basic.js);

console.log(add(5,3));

// synchronous and Asynchronously method

// Asynchronous Method
fs.open('abc.txt', (err, data)=>{
    if(err){
        console.log('Failed to open file');
    }
    else 
    console.log('File open Sucessfully');
})

//Synronous Method
fs.openSync('abc.txt');
console.log('File open Sucessfully');

// Read method
let t1 = performance.now();
console.log('product is: ',product(5,3));
fs.readFile('abc.txt', 'utf-8', (err, data)=>{
    if(err)
    console.log('Filed to read File');
 else
 console.log(data);
});

let data = fs.readFileSync('abc.txt', 'utf-8');
console.log(data);
console.log('Addition is: ',add(15,13));
let t2 = performance.now();
console.log('Time Diffrence is: ',t2-t1);

// Write Method
let txt = `#include <stdio.h>
int main(){
    printf("welcome to skillqode");
    printf("Learning Nodejs");
}`;

fs.WritaFile("basic.c",txt, (err, data) =>{
    if (err) console.log("Filed to write file");
    else console.log("File Written Sucessfully");

});

fs.writeFileSync("hello.c", txt);
console.log("File written Sucessfully");

//Append METHOD
// let txt = `// good morning`;
