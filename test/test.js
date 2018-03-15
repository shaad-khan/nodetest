'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));
const app="http://jsonplaceholder.typicode.com";
//const app = require('../index.js'); // Our app

describe('API endpoint', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function() {

  });

  after(function() {

  });

  // GET - List all colors
  it('should return all values', function() {
    return chai.request(app)
      .get('/posts')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        //expect(res.body[0].id).to.be.an('integer');
      });
  });

  // GET - Invalid path
  it('should return Not Found', function() {
    return chai.request(app)
      .get('/INVALID_PATH')
      .then(function(res) {
        throw new Error('Path exists!');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
      });
  });

  // POST - Add new color
  /*it('should add new color', function() {
    return chai.request()
      .post('/colors')
      .send({
        color: 'YELLOW'
      })
      .then(function(res) {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.results).to.be.an('array').that.includes(
          'YELLOW');
      });
  });

  // POST - Bad Request
  it('should return Bad Request', function() {
    return chai.request()
      .post('/colors')
      .type('form')
      .send({
        color: 'YELLOW'
      })
      .then(function(res) {
        throw new Error('Invalid content type!');
      })
      .catch(function(err) {
        expect(err).to.have.status(400);
      });
  });*/
});
