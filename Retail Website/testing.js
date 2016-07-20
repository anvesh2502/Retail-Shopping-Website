var assert = require('assert');
var express = require('express');
var superagent = require('superagent');
var wagner = require('wagner-core');
var status = require('http-status');


var URL_ROOT = 'http://localhost:3000';
var app = express();

// Bootstrap server
models = require('./models')(wagner);
app.use(require('./api')(wagner));

server = app.listen(3000);

// Make Category model available in tests
Category = models.Category;
Product=models.Product;


var URL_ROOT = 'http://localhost:3000';
var PRODUCT_ID = '000000000000000000000001';

  

// Test 1 : Loading a product by id 
var PRODUCT_ID = '000000000000000000000001';
    var product = 
    {
      name: 'LG G4',
      _id: PRODUCT_ID,
      price:
      {
        amount: 300,
        currency: 'USD'
      }
    };

Product.create(product,function(error,doc){

  assert.ifError(error);

  

});       