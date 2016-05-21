'use strict';
const http = require('http');
const Router = require(__dirname + '/router');



function crack(route){
  function onRequest(req, res){
  }
  http.createServer(onRequest).listen(8008, ()=>{console.log('Server started on BOOB (*)(*)')})
}

exports.crack = crack;
