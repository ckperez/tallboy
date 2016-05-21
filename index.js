'use strict';

const server = require(__dirname + '/lib/server.js');
const router = require(__dirname + '/lib/router.js');

var handle = {};

handle['/'] = requestHandlers.crack;

server.crack(router.route, handle);
