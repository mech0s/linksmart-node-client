/**
 * LinkSmart Thing Directory
 * API documetnation of the [LinkSmart Thing Directory](https://github.com/linksmart/thing-directory)
 *
 * The version of the OpenAPI document: 1.0.0-beta.22
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
    factory(root.expect, root.LinkSmartThingDirectory);
  }
}(this, function(expect, LinkSmartThingDirectory) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LinkSmartThingDirectory.SearchApi();
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

  describe('SearchApi', function() {
    describe('searchJsonpathGet', function() {
      it('should call searchJsonpathGet successfully', function(done) {
        //uncomment below and update the code to test searchJsonpathGet
        //instance.searchJsonpathGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchXpathGet', function() {
      it('should call searchXpathGet successfully', function(done) {
        //uncomment below and update the code to test searchXpathGet
        //instance.searchXpathGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));