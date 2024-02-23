const express = require('express');
const server = express();            // server cerate

server.get('/', (req, res)=> {
    res.end('Welcome to Express.js');
});
server.get('/user',(req, res)=> {
    res,end('Welcome to user');
});
server.get('/product',(req, res)=> {
    res,end('Welcome to product');
});

server.listen(7171, ()=>{
    console.log(`Server start at http://localhost:7171`);
})

