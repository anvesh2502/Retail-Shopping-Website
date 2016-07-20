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
User=models.User;


var URL_ROOT = 'http://localhost:3000';
var PRODUCT_ID = '000000000000000000000001';

  

// Test 1 : Loading a product by id 
   var categories = [
      { _id: 'Electronics' },
      { _id: 'Phones', parent: 'Electronics' },
      { _id: 'Laptops', parent: 'Electronics' },
      { _id: 'Bacon' }
    ];

    var products = [
      {
        name: 'LG G4',
        category: { _id: 'Phones', ancestors: ['Electronics', 'Phones'] },
        price: {
          amount: 300,
          currency: 'USD'
        }
      },
      {
        _id: PRODUCT_ID,
        name: 'Asus Zenbook Prime',
        category: { _id: 'Laptops', ancestors: ['Electronics', 'Laptops'] },
        price: {
          amount: 2000,
          currency: 'USD'
        }
      },
      {
        name: 'Flying Pigs Farm Pasture Raised Pork Bacon',
        category: { _id: 'Bacon', ancestors: ['Bacon'] },
        price: {
          amount: 20,
          currency: 'USD'
        }
      }
    ];

    var users = [{
      profile: {
        username: 'vkarpov15',
        picture: 'http://pbs.twimg.com/profile_images/550304223036854272/Wwmwuh2t.png'
      },
      data: {
        oauth: 'invalid',
        cart: []
      }
    }];

    Category.create(categories, function(error) {
      assert.ifError(error);
      Product.create(products, function(error) {
        assert.ifError(error);
        User.create(users, function(error) {
          assert.ifError(error);
   //       done();
        });
      });
    });
  

 