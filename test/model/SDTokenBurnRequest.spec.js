/**
 * Stardust API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2023-05-08T04:33:59Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StardustCoreSdk);
  }
}(this, function(expect, StardustCoreSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new StardustCoreSdk.SDTokenBurnRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SDTokenBurnRequest', function() {
    it('should create an instance of SDTokenBurnRequest', function() {
      // uncomment below and update the code to test SDTokenBurnRequest
      //var instance = new StardustCoreSdk.SDTokenBurnRequest();
      //expect(instance).to.be.a(StardustCoreSdk.SDTokenBurnRequest);
    });

    it('should have the property playerId (base name: "playerId")', function() {
      // uncomment below and update the code to test the property playerId
      //var instance = new StardustCoreSdk.SDTokenBurnRequest();
      //expect(instance).to.be();
    });

    it('should have the property tokenObjects (base name: "tokenObjects")', function() {
      // uncomment below and update the code to test the property tokenObjects
      //var instance = new StardustCoreSdk.SDTokenBurnRequest();
      //expect(instance).to.be();
    });

  });

}));
