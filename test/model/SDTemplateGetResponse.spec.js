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
    instance = new StardustCoreSdk.SDTemplateGetResponse();
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

  describe('SDTemplateGetResponse', function() {
    it('should create an instance of SDTemplateGetResponse', function() {
      // uncomment below and update the code to test SDTemplateGetResponse
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be.a(StardustCoreSdk.SDTemplateGetResponse);
    });

    it('should have the property gameId (base name: "gameId")', function() {
      // uncomment below and update the code to test the property gameId
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property cap (base name: "cap")', function() {
      // uncomment below and update the code to test the property cap
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property contractType (base name: "contractType")', function() {
      // uncomment below and update the code to test the property contractType
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalSupply (base name: "totalSupply")', function() {
      // uncomment below and update the code to test the property totalSupply
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property props (base name: "props")', function() {
      // uncomment below and update the code to test the property props
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property publicContractMetadata (base name: "publicContractMetadata")', function() {
      // uncomment below and update the code to test the property publicContractMetadata
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property publicTokenMetadata (base name: "publicTokenMetadata")', function() {
      // uncomment below and update the code to test the property publicTokenMetadata
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property fees (base name: "fees")', function() {
      // uncomment below and update the code to test the property fees
      //var instance = new StardustCoreSdk.SDTemplateGetResponse();
      //expect(instance).to.be();
    });

  });

}));
