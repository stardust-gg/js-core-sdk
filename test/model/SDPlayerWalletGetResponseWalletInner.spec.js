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
    instance = new StardustCoreSdk.SDPlayerWalletGetResponseWalletInner();
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

  describe('SDPlayerWalletGetResponseWalletInner', function() {
    it('should create an instance of SDPlayerWalletGetResponseWalletInner', function() {
      // uncomment below and update the code to test SDPlayerWalletGetResponseWalletInner
      //var instance = new StardustCoreSdk.SDPlayerWalletGetResponseWalletInner();
      //expect(instance).to.be.a(StardustCoreSdk.SDPlayerWalletGetResponseWalletInner);
    });

    it('should have the property blockchain (base name: "blockchain")', function() {
      // uncomment below and update the code to test the property blockchain
      //var instance = new StardustCoreSdk.SDPlayerWalletGetResponseWalletInner();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new StardustCoreSdk.SDPlayerWalletGetResponseWalletInner();
      //expect(instance).to.be();
    });

    it('should have the property monies (base name: "monies")', function() {
      // uncomment below and update the code to test the property monies
      //var instance = new StardustCoreSdk.SDPlayerWalletGetResponseWalletInner();
      //expect(instance).to.be();
    });

  });

}));
