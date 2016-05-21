'use strict';
const http = require('http');
const Router = require(__dirname + '/router');



function crack(route){
  function onRequest(req, res) {
    if(req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('success\n');
    return res.end();
    console.log(res);
  }
}
  http.createServer(onRequest).listen(8008, ()=>{console.log('Server started on BOOB (*)(*)')})
}

exports.crack = crack;
