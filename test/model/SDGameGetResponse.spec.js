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
    instance = new StardustCoreSdk.SDGameGetResponse();
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

  describe('SDGameGetResponse', function() {
    it('should create an instance of SDGameGetResponse', function() {
      // uncomment below and update the code to test SDGameGetResponse
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be.a(StardustCoreSdk.SDGameGetResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property desc (base name: "desc")', function() {
      // uncomment below and update the code to test the property desc
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property bucketName (base name: "bucketName")', function() {
      // uncomment below and update the code to test the property bucketName
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property news (base name: "news")', function() {
      // uncomment below and update the code to test the property news
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property fees (base name: "fees")', function() {
      // uncomment below and update the code to test the property fees
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property props (base name: "props")', function() {
      // uncomment below and update the code to test the property props
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property testMode (base name: "testMode")', function() {
      // uncomment below and update the code to test the property testMode
      //var instance = new StardustCoreSdk.SDGameGetResponse();
      //expect(instance).to.be();
    });

  });

}));
