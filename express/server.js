const express = require('express');
const server = express();            // server cerate
const path = require('path');

server.get('/', (req, res)=> {
    res.end('Welcome to Express.js');
});
server.get('/user',(req, res)=> {
    res,end('Welcome to user');
});
server.get('/product',(req, res)=> {
    res,end('Welcome to product');
});
server.post('/', (req,res)=>{
    res.send('Post Method');
});
server.get('/',(req, res)=>{
    res.end('Welcome to Express.js');
});
server.put('/', (req, res)=>{
    res.status(400).json({message: 'Put Method call'});
});
server.patch('/', (req, res)=>{
    res.sendFile(path.json(__dirname, 'abc.txt'));
});
server.delete('/', (req, res)=>{
    res.sendStatus(201);
});
server.listen(7171, ()=>{
    console.log(`Server start at http://localhost:7171`);
})

