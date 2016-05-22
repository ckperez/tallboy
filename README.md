# tallboy
JS Framework / Express-style router  
Routing using RESTful API, GET, POST, PUT, PATCH, DELETE methods.  

# Basic Usage  
var http = require('http');
var Router = require('./router.js');  

- Your routing constructor object name  
    var YourRouterName = new Router();  

    YourRouterName.get('/tutorial/:id', function(req, res) {

  - write a header {'Content-Type': 'text/html'}
    res.write('text');
    })  

- create http server calls
  http.createServer(YourRouterName.route()).listen(8008), function() {
    console.log('Server started on port 8008');
    });
