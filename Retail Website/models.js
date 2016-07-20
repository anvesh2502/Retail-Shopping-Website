var mongoose=require('mongoose');
var _ = require('underscore');


module.exports=function(wagner)
{
mongoose.connect('mongodb://localhost:27017/test');

var Category=mongoose.model('Category',require('./schema/category'),'categories');
var Product=mongoose.model('Product',require('./schema/product'),'products');


var models= {
	Category:Category,
	Product:Product
};

_.each(models,function(value,key){

	wagner.factory(key,function(){

		return value;

	});


});

return models;


};
