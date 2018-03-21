'use strict';

const chai = require('chai');
const expect = require('chai').expect;
var request = require("request");
var encodedPat = encodePat('72cwherppis2lgz5gjcrahj6bunq5g5fhfdslkawzy6ie2lk24wa');
var decode = require('unescape');
var _ = require('lodash');

var striptags = require('striptags');
chai.use(require('chai-http'));
var to_json = require('xmljson').to_json;
const app="https://admin.aspqa01us.acuitynext.io";
//const app = require('../index.js'); // Our app
var rcode;



describe('API endpoint', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  before(async function() {
await getResponsecode().then((data)=>{
  rcode=data.split(":");
  rcode=rcode[1];
});
  });

  after(function() {

  });

  it('should return all values', function() {
    return chai.request(app)
      .get('/api/v1/buildings/1').set({'atr-subscription-key':'fa734f6a8f544f6c99e462de74e689eb','atr-partner-id':'F8920659-D3AF-4823-90C0-276C48FA9DFD','atr-request-source':'_qa','Accept':'application/json'})
      .then(function(res) {
        try {
       //console.log("here"+rcode);
        expect(res).to.have.status(rcode);
        expect(res).to.be.json;
        expect(res.body).to.be.a('Array');
      }
      catch (err) {
  req(err.message);
  //console.log(er);
  throw err
}
        //expect(res.body[0].id).to.be.an('integer');
      })
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


function req(x)
{
var encodedPat = encodePat('ptespah6ggnrwlsofomzxjlq4v6yzv6uubu6qmt4zuaolrwzx4na');
  var options = {
     method: 'PATCH',
     headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json-patch+json'},
     //url: "https://testshaad.visualstudio.com/defaultcollection/nodetest/_apis/wit/workitems/$Bug?api-version=1.0",
url: "https://ablcode.visualstudio.com/QualityAssurance/_apis/wit/workitems/$Bug?api-version=1.0",
     body:  [{
      "op": "add",
      "path": "/fields/System.Title",
      "value": x,
    }],
    json:true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body._links.html.href);
  });
}
function encodePat(pat) {
   var b = new Buffer(':' + pat);
   var s = b.toString('base64');

   return s;
}

function getResponsecode()
{
  var encodedPat = encodePat('ptespah6ggnrwlsofomzxjlq4v6yzv6uubu6qmt4zuaolrwzx4na');
  var res="";
  var options = {
     method: 'GET',
     headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json-patch+json'},
   //url:"https://testshaad.visualstudio.com/nodetest/_apis/wit/workitems/19?fields=Microsoft.VSTS.TCM.Steps&api-version=4.1-preview",
    url:"https://ablcode.visualstudio.com/QualityAssurance/_apis/wit/workitems/139092?fields=Microsoft.VSTS.TCM.Steps&api-version=4.1-preview",
     //url: "https://ablcode.visualstudio.com/QualityAssurance/_apis/wit/workitems/139092?api-version=1.0",
    /* body:  [{
      "op": "add",
      "path": "/fields/System.Title",
      "value": "JavaScript implementation for Microsoft Account",
    }],*/
    json:true
  };
 return new Promise(function(resolve, reject) {
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var x=_.pick(body.fields,['Microsoft.VSTS.TCM.Steps']);
    x=x['Microsoft.VSTS.TCM.Steps'];
    x=decode(x);

    x=x.replace("<DIV>;",'');
    x=x.replace("</DIV>;",'');
    x=x.replace("<p>;",'');
    x=x.replace("</p>;",'');
    x=x.replace("&nbsp;",'');
    x=x.replace("<DIV><p>","");
    x=x.replace("</p></DIV>","");

  //  var y='<steps id="0" last="2"><step id="2" type="ActionStep"><parameterizedString isformatted="true">response:200</parameterizedString><parameterizedString isformatted="true"></parameterizedString><description/></step></steps>';
    resolve(x);
})
}).then((res)=>{
  return new Promise(function(resolve, reject) {
    to_json(res, function (error, data) {
    var  r=data.steps.step.parameterizedString[0].P;
    if(r==null)
  {
    r=data.steps.step.parameterizedString[0].DIV.P;
  }
      resolve(r);
    })
})
}).then((data)=>{
  return data;
})
}
