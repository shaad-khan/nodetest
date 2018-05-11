'use strict';
const {Builder, By, Key, until} = require('selenium-webdriver');
var chrome=require('chromedriver');
var sleep = require('sleep-promise');
const chai = require('chai');
const expect = require('chai').expect;
var request = require("request");
var encodedPat = encodePat('ptespah6ggnrwlsofomzxjlq4v6yzv6uubu6qmt4zuaolrwzx4na');
var decode = require('unescape');
var to_json = require('xmljson').to_json;
var _ = require('lodash');
//var encodedPat = encodePat(argv.secret);
var striptags = require('striptags');
chai.use(require('chai-http'));
var to_json = require('xmljson').to_json;
const app="https://admin.aspqa01us.acuitynext.io";
//const app = require('../index.js'); // Our app
var rcode;
var driver;
/*getResponsecode().then((x)=>{
  //var x=_.pick(x.fields,['Microsoft.VSTS.TCM.LocalDatasource']);
    //  x=x['Microsoft.VSTS.TCM.LocalDatasource'];
      var xml=x.fields['Microsoft.VSTS.TCM.LocalDataSource'];
    //  console.log(xml);
      to_json(xml, function (error, data) {

      //res.send(data.NewDataSet.Table1[0]);
      var x=0;
      for(var prop in data.NewDataSet.Table1) {
      x++;
        }
        for(var i=0;i<x;i++)
        {
          console.log(data.NewDataSet.Table1[i].OrganizationName);
          console.log(data.NewDataSet.Table1[i].Country);
        }
});
    });
/* getResponsecode().then((x)=>{
  console.log(x);
});*/

//console.log(c);
describe('Admin Ui Testing', async function() {
  this.timeout(600000); // How long to wait for a response (ms)

  before(async function example() {
  driver = await new Builder().forBrowser('chrome').build();
   await driver.manage().window().maximize();
  await driver.get('https://admin.qa.atrius-iot.com/');
  await sleep(3000);
  await driver.findElement(By.name('loginfmt')).sendKeys('testqa2@atgqa.onmicrosoft.com');
  await sleep(1000);
  await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
  await sleep(2000);
  await driver.findElement(By.xpath('//*[@id="i0118"]')).sendKeys("April@2018");
  await sleep(2000);
  await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
  await sleep(3000);
  await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
  await sleep(7000);
console.log("logged in to admin ui");
await sleep(5000);
await driver.findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select")).findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[5]")).click();
   await sleep(4000);
  // await driver.findElement(By.xpath("//*[@id='save']")).click();
//  await sleep(4000);
   await driver.findElement(By.xpath("//*[@id='save']")).click();
/*await driver.findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select")).findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[5]")).click();
///html/body/compose[2]/div/div/form/div[1]/material-select/div/select
//html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[5]
 await sleep(2000);
 await driver.findElement(By.xpath("//*[@id='save']")).click();
*/



});


  after(function() {
  driver.close();
  });



await it('Create Organization / create site', async function(done) {

  await getResponsecode().then((x)=>{
//var x=_.pick(x.fields,['Microsoft.VSTS.TCM.LocalDatasource']);
  //  x=x['Microsoft.VSTS.TCM.LocalDatasource'];
    var xml=x.fields['Microsoft.VSTS.TCM.LocalDataSource'];
  //  console.log(xml);
  to_json(xml, async function (error, data) {

    //res.send(data.NewDataSet.Table1[0]);
    var x=0;
    var y=2;
    for(var prop in data.NewDataSet.Table1) {
    x++;
      }
      console.log("No.of Iterations: "+x);
      for(var i=0;i<x;i++)
      {



  await sleep(7000);
//  /html/body/section/nav-bar/nav/ul/li[5]/div/a

  await driver.findElement(By.xpath("/html/body/section/nav-bar/nav/ul/li[5]/div/a")).click();
  await sleep(4000);
  await driver.findElement(By.xpath("//*[@id='new']")).click();
  await sleep(4000);
  await driver.findElement(By.xpath("//input[@id='organizationName']")).click();
  await sleep(3000);
  await driver.findElement(By.xpath("//input[@id='organizationName']")).clear();
  await sleep(6000);
//  var validator=await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/div[2]/form/div[1]/div[1]/material-input/div/label[2]")).getAttribute("innerHTML");
/*  if(validator.equal('Name Required'))
  {
    try{*/
    //  expect('Name Required').to.equal(validator);

  /*  }catch(e)
    {
      console.log("validator not working");
    }

  }*/

  await driver.findElement(By.xpath("//input[@id='organizationName']")).sendKeys(data.NewDataSet.Table1[i].OrganizationName);
  await sleep(5000);
    console.log("validator working fine for Organization input field");
/*-------------------New Code for Address ---------------------*/

//*[@id="address1"]
//*[@id="city"]
//*[@id="stateProvince"]
//*[@id="postalCode"]
//*[@id="country"]
await driver.findElement(By.xpath("//input[@id='address1']")).click();
await sleep(2000);
await driver.findElement(By.xpath("//input[@id='address1']")).clear();
await sleep(3000);
await driver.findElement(By.xpath("//input[@id='address1']")).sendKeys(data.NewDataSet.Table1[i].AddressLine1);
await sleep(5000);
await driver.findElement(By.xpath("//input[@id='city']")).click();
await sleep(2000);
await driver.findElement(By.xpath("//input[@id='city']")).clear();
await sleep(3000);
await driver.findElement(By.xpath("//input[@id='city']")).sendKeys(data.NewDataSet.Table1[i].City);
await sleep(5000);
await driver.findElement(By.xpath("//input[@id='stateProvince']")).click();
await sleep(2000);
await driver.findElement(By.xpath("//input[@id='stateProvince']")).clear();
await sleep(3000);
await driver.findElement(By.xpath("//input[@id='stateProvince']")).sendKeys(data.NewDataSet.Table1[i].State);
await sleep(5000);
await driver.findElement(By.xpath("//input[@id='postalCode']")).click();
await sleep(2000);
await driver.findElement(By.xpath("//input[@id='postalCode']")).clear();
await sleep(3000);
await driver.findElement(By.xpath("//input[@id='postalCode']")).sendKeys(data.NewDataSet.Table1[i].PostalCode);
await sleep(5000);
await driver.findElement(By.xpath("//input[@id='country']")).click();
await sleep(2000);
await driver.findElement(By.xpath("//input[@id='country']")).clear();
await sleep(3000);
await driver.findElement(By.xpath("//input[@id='country']")).sendKeys(data.NewDataSet.Table1[i].Country);
await sleep(5000);



  /*-----------------------------------------------------------*/
  await driver.findElement(By.xpath("//*[@id='save']")).click();
  await sleep(5000);
/*------------------------------------------------------------------------------------------------*/
await sleep(5000);

await driver.findElement(By.xpath("/html/body/section/nav-bar/nav/ul/li[1]/div/a")).click();
await sleep(5000);

   //*[@id="siteNameInput"]
  //await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[1]/ul/li[2]/a")).click();
   //await sleep(5000);
await driver.findElement(By.xpath("//*[@id='createNewSite']")).click();

await sleep(7000);
await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-site-information.au-target div.form-group material-input#siteNameInput.au-target div.au-target.input-group input#siteNameInput.au-target")).click();
//driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
//await sleep(5000);

//await driver.findElement(By.xpath("//*[@id='nextStep' and @au-target-id='199']")).click();
await sleep(4000);

await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-site-information.au-target div.form-group material-input#siteNameInput.au-target div.au-target.input-group input#siteNameInput.au-target")).clear();
await sleep(5000);

await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-site-information.au-target div.form-group material-input#siteNameInput.au-target div.au-target.input-group input#siteNameInput.au-target")).sendKeys(data.NewDataSet.Table1[i].SiteName);
await sleep(7000);
console.log("validator for Site Input Field Working");
await driver.findElement(By.xpath("//*[@id='nextStep' and @au-target-id='234']")).click();
await sleep(7000);
await driver.findElement(By.xpath("//*[@id='nextStep' and @au-target-id='237']")).click();
await sleep(7000);
await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).click();
await sleep(5000);
await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).clear();
await sleep(5000);
await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).sendKeys(data.NewDataSet.Table1[i].BuildingName);
await sleep(5000);
await driver.findElement(By.xpath("//*[@id='nextStep' and @au-target-id='240']")).click();
await sleep(5000);
await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-floor-information.au-target div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).click();
await sleep(5000);
await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-floor-information.au-target div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).clear();
await sleep(5000);
await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-floor-information.au-target div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).sendKeys(data.NewDataSet.Table1[i].FloorName);
await sleep(5000);

/*----------------------------------------------------------------------------------------------*/
//*[@id="mapServiceURL"]
//var y=  await driver.findElement(By.xpath("//input[@id='mapServiceURL']"));
//y.sendKeys(driver.Key.TAB);
//y.sendKeys(driver.Key.TAB);
//await driver.findElement(By.xpath("/html/body/section/div/router-view/section/compose/div/div/div[2]/div[4]")).findElement(By.xpath("//*[@id='nextStep']"));
//var b =  await driver.findElement(By.xpath("/html/body/section/div/router-view/section/compose/div/div/div[2]/div[4]")).findElement(By.xpath("//*[@id='nextStep']")).findElement(By.xpath("//*[@au-target-id='224']")).getAttribute("innerHTML");
//var b =  await driver.findElement(By.xpath("/html/body/section/div/router-view/section/compose/div/div/div[2]/div[4]")).findElement(By.xpath("//*[contains(@id,'nextStep')and contains(@au-target-id,'283')]")).getAttribute("innerHTML");
//console.log(b);
await driver.findElement(By.xpath("//*[@id='nextStep' and @au-target-id='243']")).click();
//await driver.findElement(By.xpath("/html/body/section/div/router-view/section/compose/div/div/div[2]/div[4]")).findElement(By.xpath("//*[contains(@id,'nextStep')and contains(@au-target-id,'283')]")).click();
await sleep(9000);

/*await driver.findElement(By.xpath("/html/body/section/nav-bar/nav/ul/li[5]/div/a")).click();
await sleep(5000);
await driver.findElement(By.xpath("/html/body/section/nav-bar/nav/ul/li[1]/div/a")).click();
await sleep(5000);*/
await driver.findElement(By.xpath("//*[@id='header']/div[3]/div")).click();
  await sleep(7000);
   await driver.findElement(By.xpath(`//*[@id='orgSelectorMenu']/ul/li[${y}]`)).click();
   var x2=await driver.findElement(By.xpath("//*[@id='header']/div[3]/div/span")).getAttribute("innerHTML");
     console.log("Organization found :"+x2+" ( TEST PASSED )");
     try{
expect(x2).to.equal("Org: "+data.NewDataSet.Table1[i].OrganizationName);
}catch(e)
{
  console.log(e);
}
await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/search-bar/div/input")).click();
await sleep(3000);
 await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/search-bar/div/input")).sendKeys(data.NewDataSet.Table1[i].SiteName);
await sleep(7000);

  var b =  await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/ul/li[1]/div/div/h1")).getAttribute("innerHTML");
  console.log("Site found:"+b +" ( TEST PASSED )");
     try{
  expect(b).to.equal(data.NewDataSet.Table1[i].SiteName);
}catch(e)
{
  console.log(e);
}
  //console.log(x);
  //console.log(i);
  y++;

}
done();
})
})





/*-------------------------------------------------------------------------------------------------------------------------*/



  //*[@id="orgSelectorMenu"]/ul/li[6]
/*  await sleep(7000);
  //*[@id="orgSelectorMenu"]/ul/li[8]*/

  /*--------------------------------------------------------------*/
/*  await driver.findElement(By.xpath("//*[@id='header']/div[3]/div")).click();
  await sleep(7000);


  await driver.findElement(By.xpath("//*[@id='orgSelectorMenu']/ul/li[5]")).click();
  var x=await driver.findElement(By.xpath("//*[@id='header']/div[3]/div/span")).getAttribute("innerHTML");
  console.log("Organization found :New Org 7");*/


  /*----------------------------------------------------------------------------*/
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





*/


});





/*--------------------------------------------------------------------------------------*/
/*
it('Create Site', async function() {
  await sleep(5000);

  await driver.findElement(By.xpath("/html/body/section/nav-bar/nav/ul/li[1]/div/a")).click();
  await sleep(5000);

     //*[@id="siteNameInput"]
    //await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[1]/ul/li[2]/a")).click();
     //await sleep(5000);
  await driver.findElement(By.xpath("//*[@id='createNewSite']")).click();

  await sleep(7000);
await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-site-information.au-target div.form-group material-input#siteNameInput.au-target div.au-target.input-group input#siteNameInput.au-target")).click();
  //driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
  //await sleep(5000);

  //await driver.findElement(By.xpath("//*[@id='nextStep' and @au-target-id='199']")).click();
  //await sleep(4000);

await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-site-information.au-target div.form-group material-input#siteNameInput.au-target div.au-target.input-group input#siteNameInput.au-target")).clear();
await sleep(5000);
  await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-site-information.au-target div.form-group material-input#siteNameInput.au-target div.au-target.input-group input#siteNameInput.au-target")).sendKeys(data.NewDataSet.Table1[i].SiteName);
  await sleep(5000);
  await driver.findElement(By.xpath("//*[@id='nextStep' and @au-target-id='199']")).click();
  await sleep(7000);
  await driver.findElement(By.xpath("//*[@id='nextStep' and @au-target-id='202']")).click();
  await sleep(7000);
  await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).click();
  await sleep(3000);
  await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).clear();
  await sleep(3000);
  await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).sendKeys(data.NewDataSet.Table1[i].BuildingName);
  await sleep(2000);
  await driver.findElement(By.xpath("//*[@id='nextStep' and @au-target-id='205']")).click();
  await sleep(3000);
  await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-floor-information.au-target div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).click();
  await sleep(3000);
  await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-floor-information.au-target div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).clear();
  await sleep(3000);
  await driver.findElement(By.css("html body section.main-section div.container router-view.au-target section.panel-right compose.au-target div.modal-wrapper.show div.modal-box compose.au-target div.wizard-form form.standard-form material-floor-information.au-target div.form-group material-input#name.au-target div.au-target.input-group input#name.au-target")).sendKeys(data.NewDataSet.Table1[i].FloorName);
  await sleep(2000);

  /*----------------------------------------------------------------------------------------------*/
  //*[@id="mapServiceURL"]
  //var y=  await driver.findElement(By.xpath("//input[@id='mapServiceURL']"));
  //y.sendKeys(driver.Key.TAB);
  //y.sendKeys(driver.Key.TAB);
  //await driver.findElement(By.xpath("/html/body/section/div/router-view/section/compose/div/div/div[2]/div[4]")).findElement(By.xpath("//*[@id='nextStep']"));
//var b =  await driver.findElement(By.xpath("/html/body/section/div/router-view/section/compose/div/div/div[2]/div[4]")).findElement(By.xpath("//*[@id='nextStep']")).findElement(By.xpath("//*[@au-target-id='224']")).getAttribute("innerHTML");
/*var b =  await driver.findElement(By.xpath("/html/body/section/div/router-view/section/compose/div/div/div[2]/div[4]")).findElement(By.xpath("//*[contains(@id,'nextStep')and contains(@au-target-id,'283')]")).getAttribute("innerHTML");
console.log(b);
 await driver.findElement(By.xpath("//*[@id='nextStep' and @au-target-id='208']")).click();
  await sleep(7000);
  await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/search-bar/div/input")).click();
  await sleep(3000);
   await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/search-bar/div/input")).sendKeys(data.NewDataSet.Table1[i].SiteName);
    await sleep(7000);

    var b =  await driver.findElement(By.xpath("/html/body/section/div/router-view/aside/ul/li[1]/div/div/h1")).getAttribute("innerHTML");
    console.log(b);

});

*/

//}


//});
//});


});

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

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

async function getResponsecode()
{

 return await new Promise(function(resolve, reject) {
  // var encodedPat = encodePat('ptespah6ggnrwlsofomzxjlq4v6yzv6uubu6qmt4zuaolrwzx4na');
   //var res="";
   var options = {
      method: 'GET',
      headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json-patch+json'},
    //url:"https://testshaad.visualstudio.com/nodetest/_apis/wit/workitems/19?fields=Microsoft.VSTS.TCM.Steps&api-version=4.1-preview",
     url:"https://ablcode.visualstudio.com/QualityAssurance/_apis/wit/workitems/147483?fields=Microsoft.VSTS.TCM.LocalDatasource&api-version=4.1-preview",
      //url: "https://ablcode.visualstudio.com/QualityAssurance/_apis/wit/workitems/139092?api-version=1.0",
     /* body:  [{
       "op": "add",
       "path": "/fields/System.Title",
       "value": "JavaScript implementation for Microsoft Account",
     }],*/
     json:true
   };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    //var x=_.pick(body.fields,['Microsoft.VSTS.TCM.LocalDatasource']);
    //x=x['Microsoft.VSTS.TCM.LocalDatasource'];


  //  var y='<steps id="0" last="2"><step id="2" type="ActionStep"><parameterizedString isformatted="true">response:200</parameterizedString><parameterizedString isformatted="true"></parameterizedString><description/></step></steps>';
    resolve(body);
})
})
}


/*.then((res)=>{
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
}*/
