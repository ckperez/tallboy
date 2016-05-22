# tallboy
JS Framework / Express-style router   
Ready-made routing for projects using the most common RESTful verbs:  
        ```GET, POST, PUT, PATCH, DELETE.```  

## Installation  
```shell
npm install tallboy
```

## Basic Usage 
### Require in node's http module  
```javascript
var http = require('http');  
```  
### Require the tallboy framework into your project  
```javascript
var Tallboy = require('tallboy');  //tallboy is a router constructor
```  
### Instantiate your own Tallboy router  
```javascript
var yourRouterName = new Tallboy();  
```  

## Examples  
### Adding your own route into the framework:  
```javascript
YourRouterName.get('/tutorial/:id', function(req, res) {  
```

### Writing a header and client response for your routes:  
```javascript
        {'Content-Type': 'text/html'}  

        res.write('text');  
})  
```
### Creating a server instance with your tallboy routes:   
```javascript
http.createServer(YourRouterName.route()).listen(8008), function() {  
    console.log('Server started on port 8008');  
    });
```
