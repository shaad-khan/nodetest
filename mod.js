'use strict';
const {Builder, By, Key, until} = require('selenium-webdriver');
var chrome=require('chromedriver');
var sleep = require('sleep-promise');
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
var driver;


describe('Admin Ui Testing', function() {
  this.timeout(600000); // How long to wait for a response (ms)

  before(async function example() {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://admin.qa.atrius-iot.com/');
  await sleep(3000);
  await driver.findElement(By.name('loginfmt')).sendKeys('testqa3@atgqa.onmicrosoft.com');
  await sleep(1000);
  await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
  await sleep(2000);
  await driver.findElement(By.xpath('//*[@id="i0118"]')).sendKeys("April@2018");
  await sleep(2000);
  await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
  await sleep(3000);
  await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
  await sleep(7000);
console.log("logged in to sso");
await sleep(3000);
await driver.findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select")).findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[3]")).click();
await sleep(4000);
await driver.findElement(By.xpath("//*[@id='save']")).click();
await sleep(4000);
await driver.findElement(By.xpath("//*[@id='save']")).click();
await sleep(7000);
/*await driver.findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select")).findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[5]")).click();
///html/body/compose[2]/div/div/form/div[1]/material-select/div/select
//html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[5]
 await sleep(2000);
 await driver.findElement(By.xpath("//*[@id='save']")).click();
*/
});


  after(function() {
//driver.close();
  });

  /*it('Test Creating new building', async function() {
    await sleep(3000);
    await driver.findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select")).findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[3]")).click();
   await sleep(4000);
   await driver.findElement(By.xpath("//*[@id='save']")).click();
  await sleep(4000);
   await driver.findElement(By.xpath("//*[@id='save']")).click();
   await sleep(7000);
   await driver.wait(until.elementLocated(By.xpath("/html/body/section/div/router-view/aside/ul/li[7]/div/div/h1")));
     await sleep(3000);
  await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/ul/li[7]/div/div/h1")).click();
  await sleep(7000);
  await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[1]/ul/li[2]/a")).click();
  await sleep(7000);
  await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/div/div[2]/ul/li[2]/a/i")).click();
  await sleep(7000);
  await driver.findElement(By.xpath("//*[@id='createNewBuilding']")).click();
  await sleep(4000);
  await driver.findElement(By.xpath("//input[@id='name']")).click();
    await sleep(4000);

    await driver.findElement(By.xpath("//input[@id='name']")).clear();
  // await driver.findElement(By.xpath("//*[@id='name']")).sendKeys(driver.Key.BACK_SPACE);
  //  await sleep(4000);
    //JavascriptExecutor jse = (JavascriptExecutor) driver;
    //*[@id="name"]
  //await driver.findElement(By.xpath("//*[@id='name']")).sendKeys('');
  await sleep(4000);
  //await driver.executeScript("document.getElementById('name').value='new value'");
  await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("tech park 1");
  await sleep(7000);
  //*[@id="save"]
await driver.findElement(By.xpath("//*[@id='save']")).click();
await sleep(3000);
await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/div/div[2]/router-view/search-bar/div/input")).click();
await sleep(4000);
await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/div/div[2]/router-view/search-bar/div/input")).sendKeys("tech park 1");
await sleep(4000);

var x=await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/div/div[2]/router-view/div[2]/table/tbody/tr/td[2]")).getAttribute("innerHTML");
console.log("value"+x);

//*[@id="name"]
  //*[@id="createNewBuilding"]

//  await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[1]/ul/li[2]/a")).click();
///html/body/section/div/router-view/section/div[2]/router-view/div[1]/ul/li[3]/a


//await sleep(7000);

       //console.log("here"+rcode);
        /*expect(res).to.have.status(rcode);
        expect(res).to.be.json;
        expect(res.body).to.be.a('Array');*/
  /*      var query = driver.findElements(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/div[1]/ul"));

query.then((e)=>
{
  //console.log(JSON.stringify(e));
e.map(function (elem) {
        elem.getText().then((x)=>{
          console.log(x);
          if(x=="organization")
          {
            //expect(x).to.equal("organization");
          }
        });
});

        //expect(res.body[0].id).to.be.an('integer');
      })
      await sleep(7000);
   await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/div[1]/ul/li[3]/a")).click();
  await sleep(7000);
  var o;
 await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/compose[3]/div/div/form/div[1]/div/material-select/div/select")).findElement(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/compose[3]/div/div/form/div[1]/div/material-select/div/select/option[1]")).click();
  var element = await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/compose[3]/div/div/form/div[1]/div/material-select/div/select"));
var res=await element.getAttribute('value').then(function(selected) {
    return selected;
});
  console.log(res);

expect(1).to.equal(2);

//done();



});*/

/*it('Create Organization', async function() {
  await sleep(5000);
//  /html/body/section/nav-bar/nav/ul/li[5]/div/a
  await driver.findElement(By.xpath("/html/body/section/nav-bar/nav/ul/li[5]/div/a")).click();
  await sleep(4000);
  await driver.findElement(By.xpath("//*[@id='new']")).click();
  await sleep(4000);
  await driver.findElement(By.xpath("//input[@id='organizationName']")).click();
    await sleep(2000);
  await driver.findElement(By.xpath("//input[@id='organizationName']")).clear();
  await sleep(3000);
  await driver.findElement(By.xpath("//input[@id='organizationName']")).sendKeys("New Org 3");
  await sleep(5000);
  await driver.findElement(By.xpath("//*[@id='save']")).click();
  await sleep(5000);
  var x=await driver.findElement(By.xpath("//*[@id='header']/div[3]/div/span")).getAttribute("innerHTML");
  console.log("Organization found :"+x);
  /*await driver.findElement(By.xpath("//*[@id='nextStep']")).click();
  await sleep(3000);
  await driver.findElement(By.xpath("//input[@id='name']")).click();
  await sleep(3000);
  await driver.findElement(By.xpath("//input[@id='name']")).clear();
  await sleep(3000);
  await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("New Test Building");
  await sleep(2000);
  await driver.findElement(By.xpath("//*[@id='nextStep']")).click();
  await sleep(3000);
  await driver.findElement(By.xpath("//input[@id='name']")).click();
  await sleep(3000);
  await driver.findElement(By.xpath("//input[@id='name']")).clear();
  await sleep(3000);
  await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("New Floor Test");
  await sleep(2000);
  await driver.findElement(By.xpath("//*[@id='nextStep']")).click();
  await sleep(3000);
  await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/search-bar/div/input")).click();
  await sleep(4000);
  await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/search-bar/div/input")).sendKeys("New Test Site");
  await sleep(4000);
//*[@id="header"]/div[3]/div/span
  var x=await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/ul/li[1]/div/div/h1")).getAttribute("innerHTML");
  console.log("site found :"+x);








});*/





/*--------------------------------------------------------------------------------------*/

it('Create Site', async function() {
  await sleep(5000);
  await driver.findElement(By.xpath("/html/body/section/nav-bar/nav/ul/li[1]/div/a")).click();
  await sleep(5000);
  await driver.findElement(By.xpath("//*[@id='createNewSite']")).click();
 await sleep(5000);
  //*[@id="siteNameInput"]
  await driver.findElement(By.xpath("//input[@id='siteNameInput']")).click();
  await sleep(4000);
  await driver.findElement(By.xpath("//input[@id='siteNameInput']")).clear();
  await sleep(3000);
  await driver.findElement(By.xpath("//input[@id='siteNameInput']")).sendKeys("New Test Site");
  await sleep(5000);
  await driver.findElement(By.xpath("//*[@id='nextStep']")).click();
  await sleep(5000);
  await driver.findElement(By.xpath("//*[@id='nextStep']")).click();
  await sleep(5000);
  await driver.findElement(By.xpath("//input[@id='name']")).click();
  await sleep(5000);
  await driver.findElement(By.xpath("//input[@id='name']")).clear();
  await sleep(5000);
  await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("New Test Building");
  await sleep(5000);
  await driver.findElement(By.xpath("//*[@id='nextStep']")).click();
  await sleep(5000);
  await driver.findElement(By.xpath("//input[@id='name']")).click();
  await sleep(5000);
  await driver.findElement(By.xpath("//input[@id='name']")).clear();
  await sleep(5000);
  await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("New Floor Test");
  await sleep(5000);
  await driver.findElement(By.xpath("//*[@id='nextStep']")).click();
  await sleep(5000);
  await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/search-bar/div/input")).click();
  await sleep(4000);
  await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/search-bar/div/input")).sendKeys("New Test Site");
  await sleep(4000);

  var x=await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/ul/li[1]/div/div/h1")).getAttribute("innerHTML");
  console.log("site found :"+x);







});
















/*---------------------------------------------------------------------------------*/




  // GET - Invalid path
/*  it('should return Not Found', function() {
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
    // url: "https://testshaad.visualstudio.com/defaultcollection/nodetest/_apis/wit/workitems/$Bug?api-version=1.0",
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
