'use strict';

const Tallboy = module.exports = function(){
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
};

Tallboy.prototype.get = function () {
  this.routes.GET[url] = cb;
  return this;
};

Tallboy.prototype.post = function () {
  this.routes.POST[url] = cb;
  return this;
};

Tallboy.prototype.put = function () {
  this.routes.PUT[url] = cb;
  return this;
};

Tallboy.prototype.patch = function () {
  this.routes.PATCH[url] = cb;
  return this;
};

Tallboy.prototype.delete = function () {
  this.routes.DELETE[url] = cb;
  return this;
};

Tallboy.prototype.route = function () {
  var routes = this.routes;
  return function(req, res) {
    if (typeof routes[req.method][req.url] === 'function')
      return routes[req.method][req.url](req, res);
    res.writeHead(404);
    res.write('not found');
    res.end();

  };
};
