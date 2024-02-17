// htpp module
const http = require('http');

const server = http.createServer((req, res)=> {
    res.end('Welcome to instagram server....');
}); //server create

server.listen(2026,()=>{

    console.log('Server Start at port 2026');
});


const google = http.createServer((req, res)=> {
    res.end('Welcome to google server....');
}); //server create

google.listen(2027,()=>{

    console.log('Server Start at port 2027');
});


const snepchet = http.createServer((req, res)=> {
    res.end('Welcome to snepchet server....');
}); //server create

snepchet.listen(2028,()=>{

    console.log('Server Start at port 2028');
});


const bgmi = http.createServer((req, res)=> {
    res.end('Welcome to bgmi server....');
}); //server create

bgmi.listen(2029,()=>{

    console.log('Server Start at port 2029');
});


const Dmat = http.createServer((req, res)=> {
    res.end('Welcome to Dmat server....');
}); //server create

Dmat.listen(2030,()=>{

    console.log('Server Start at port 2030');
});