'use strict';
const http = require('http');
const Router = require(__dirname + '/router');



function crack(route){
  function onRequest(req, res) {
    if(req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('get success\n');
    return res.end();
    console.log(res);
  }
  if(req.url === '/rainier' && req.method === 'POST') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('post success\n');
    return res.end();
  }
  if(req.url === '/rainier' && req.method === 'PUT') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('put success\n');
    return res.end();
  }
  if(req.url === '/rainier' && req.method === 'PATCH') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('patch success\n');
    return res.end();
  }
  if(req.url === '/rainier' && req.method === 'DELETE') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('delete success\n')
    return res.end();
  }
}
  http.createServer(onRequest).listen(8008, ()=>{console.log('Server started on BOOB (*)(*)')})
}

exports.crack = crack;
