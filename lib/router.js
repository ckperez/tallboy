'use strict';

const Router = module.exports = function(){
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
};

Router.prototype.get = function () {
  this.routes.GET[url] = cb;
  return this;
};

Router.prototype.post = function () {
  this.routes.POST[url] = cb;
  return this;
};

Router.prototype.put = function () {
  this.routes.PUT[url] = cb;
  return this;
};

Router.prototype.patch = function () {
  this.routes.PATCH[url] = cb;
  return this;
};

Router.prototype.delete = function () {
  this.routes.DELETE[url] = cb;
  return this;
};

Router.prototype.route = function () {
  var routes = this.routes;
  return function(req, res) {
    if (typeof routes[req.method][req.url] === 'function')
      return routes[req.method][req.url](req, res);
    res.writeHead(404);
    res.write('not found');
    res.end();

  };
};
