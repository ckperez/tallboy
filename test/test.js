'use strict';

const fs = require('fs');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
chai.use(chaiHTTP);
const request = chai.request;
const Router = require(__dirname + '/../lib/router');

const router = new Router();

const server = require(__dirname + '/../lib/server');



require('../index');

describe('Testing tallboy router', () => {
  // console.log(router.get);
  //   if(router.routes.get === '/' && req.method === 'GET') {
  //   res.writeHead(200, {'Content-Type': 'text/plain'});
  //   res.write('success\n');
  //   return res.end();
  //   console.log(res);
  // }
  it('should test our router', () => {
    expect(router.routes).to.have.property('GET');
    expect(router.routes).to.have.property('POST');
    expect(router.routes).to.have.property('PUT');
    expect(router.routes).to.have.property('DELETE');
    expect(router.routes).to.have.property('PATCH');
  });
  it('should respond with 404 to bad path', () => {
    request('localhost:8008')
    .get('/badpath')
    .end((err, res) => {
      expect(err).to.not.eql(null);
      expect(res).to.have.status(404);
      expect(res.text).to.eql('not found');
    });
  });
  it('should return a message', (done) => {
    request('localhost:8008')
    .get('/')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('success\n');
      done();
    });

  })

})
