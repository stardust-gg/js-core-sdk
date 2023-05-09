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
    instance = new StardustCoreSdk.SDTemplateGetTokensResponseTokenProps();
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

  describe('SDTemplateGetTokensResponseTokenProps', function() {
    it('should create an instance of SDTemplateGetTokensResponseTokenProps', function() {
      // uncomment below and update the code to test SDTemplateGetTokensResponseTokenProps
      //var instance = new StardustCoreSdk.SDTemplateGetTokensResponseTokenProps();
      //expect(instance).to.be.a(StardustCoreSdk.SDTemplateGetTokensResponseTokenProps);
    });

    it('should have the property immutable (base name: "immutable")', function() {
      // uncomment below and update the code to test the property immutable
      //var instance = new StardustCoreSdk.SDTemplateGetTokensResponseTokenProps();
      //expect(instance).to.be();
    });

    it('should have the property mutable (base name: "mutable")', function() {
      // uncomment below and update the code to test the property mutable
      //var instance = new StardustCoreSdk.SDTemplateGetTokensResponseTokenProps();
      //expect(instance).to.be();
    });

    it('should have the property inherited (base name: "inherited")', function() {
      // uncomment below and update the code to test the property inherited
      //var instance = new StardustCoreSdk.SDTemplateGetTokensResponseTokenProps();
      //expect(instance).to.be();
    });

  });

}));