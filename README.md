# tallboy
JS Framework / Express-style router  
Routing using RESTful API, GET, POST, PUT, PATCH, DELETE methods.  

#How to Insatll

To install tallboy you will need to install the npm module.

npm install tallboy


# Basic Usage  

- To use tallboy you will need to require in both tallboy and http.

var http = require('http');

var Router = require('./router.js');  

##How to use the Router

- To create a router you make a new constructor and give it a variable name. Normal variable nameing rules apply when selcting a variable

var YourRouterName = new Router();  

- Router must also use http.createServer to complete router.

var YourRouterName = new Router();

http.createServer(onRequest).listen(8008, ()=>{console.log('Server started on port 8008')})
}

##How to use REST methods GET/POST/PUT/PATCH/DELETE

    YourRouterName.get('/tutorial/:id', function(req, res) {

  - write a header {'Content-Type': 'text/html'}  

    res.write('text');  
    })  


Developers:
Chris P, Dan S, Drew F, Vic B
