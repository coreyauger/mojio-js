// Generated by CoffeeScript 1.6.3
(function() {
  var MojioModel, Product,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MojioModel = require('./MojioModel');

  module.exports = Product = (function(_super) {
    __extends(Product, _super);

    Product.prototype._schema = {
      "Type": "Integer",
      "AppId": "String",
      "Name": "String",
      "Description": "String",
      "Shipping": "Boolean",
      "Taxable": "Boolean",
      "Price": "Float",
      "Discontinued": "Boolean",
      "OwnerId": "String",
      "CreationDate": "String",
      "_id": "String",
      "_deleted": "Boolean"
    };

    Product.prototype._resource = 'Products';

    Product.prototype._model = 'Product';

    function Product(json) {
      Product.__super__.constructor.call(this, json);
    }

    Product.prototype.observe = function(children, callback) {
      if (children == null) {
        children = null;
      }
      return callback(null, null);
    };

    Product.prototype.storage = function(property, value, callback) {
      return callback(null, null);
    };

    Product.prototype.statistic = function(expression, callback) {
      return callback(null, null);
    };

    Product._resource = 'Products';

    Product._model = 'Product';

    Product.resource = function() {
      return Product._resource;
    };

    Product.model = function() {
      return Product._model;
    };

    return Product;

  })(MojioModel);

}).call(this);

/*
//@ sourceMappingURL=Product.map
*/