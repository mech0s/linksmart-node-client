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
    instance = new LinkSmartThingDirectory.ThingDescriptionPage();
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

  describe('ThingDescriptionPage', function() {
    it('should create an instance of ThingDescriptionPage', function() {
      // uncomment below and update the code to test ThingDescriptionPage
      //var instance = new LinkSmartThingDirectory.ThingDescriptionPage();
      //expect(instance).to.be.a(LinkSmartThingDirectory.ThingDescriptionPage);
    });

    it('should have the property context (base name: "@context")', function() {
      // uncomment below and update the code to test the property context
      //var instance = new LinkSmartThingDirectory.ThingDescriptionPage();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "@type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new LinkSmartThingDirectory.ThingDescriptionPage();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new LinkSmartThingDirectory.ThingDescriptionPage();
      //expect(instance).to.be();
    });

    it('should have the property page (base name: "page")', function() {
      // uncomment below and update the code to test the property page
      //var instance = new LinkSmartThingDirectory.ThingDescriptionPage();
      //expect(instance).to.be();
    });

    it('should have the property perPage (base name: "perPage")', function() {
      // uncomment below and update the code to test the property perPage
      //var instance = new LinkSmartThingDirectory.ThingDescriptionPage();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new LinkSmartThingDirectory.ThingDescriptionPage();
      //expect(instance).to.be();
    });

  });

}));
