// htpp module
const http = require('http');

const server = http.createServer((req, res)=> {
    res.end('Welcome to local server....');
}); //server create

server.listen(5476,()=>{

    console.log('Server Start at port 5476');
});