'use strict';

const http = require('http');

function crack(route, handle){
  function onRequest(req, res){
    
  }
  http.createServer(onRequest).listen(8008, ()=>{console.log('Server started on BOOB (*)(*)')})
}

exports.crack = crack;
