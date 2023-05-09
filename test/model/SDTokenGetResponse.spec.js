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
    instance = new StardustCoreSdk.SDTokenGetResponse();
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

  describe('SDTokenGetResponse', function() {
    it('should create an instance of SDTokenGetResponse', function() {
      // uncomment below and update the code to test SDTokenGetResponse
      //var instance = new StardustCoreSdk.SDTokenGetResponse();
      //expect(instance).to.be.a(StardustCoreSdk.SDTokenGetResponse);
    });

    it('should have the property gameId (base name: "gameId")', function() {
      // uncomment below and update the code to test the property gameId
      //var instance = new StardustCoreSdk.SDTokenGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "templateId")', function() {
      // uncomment below and update the code to test the property templateId
      //var instance = new StardustCoreSdk.SDTokenGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new StardustCoreSdk.SDTokenGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new StardustCoreSdk.SDTokenGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property flags (base name: "flags")', function() {
      // uncomment below and update the code to test the property flags
      //var instance = new StardustCoreSdk.SDTokenGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property props (base name: "props")', function() {
      // uncomment below and update the code to test the property props
      //var instance = new StardustCoreSdk.SDTokenGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new StardustCoreSdk.SDTokenGetResponse();
      //expect(instance).to.be();
    });

    it('should have the property publicMetadata (base name: "publicMetadata")', function() {
      // uncomment below and update the code to test the property publicMetadata
      //var instance = new StardustCoreSdk.SDTokenGetResponse();
      //expect(instance).to.be();
    });

  });

}));