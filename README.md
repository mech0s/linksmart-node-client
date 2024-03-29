# link_smart_thing_directory

LinkSmartThingDirectory - JavaScript client for link_smart_thing_directory
API documetnation of the [LinkSmart Thing Directory](https://github.com/linksmart/thing-directory)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0-beta.22
- Package version: 1.0.0-beta.22
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install link_smart_thing_directory --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your link_smart_thing_directory from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LinkSmartThingDirectory = require('link_smart_thing_directory');

var defaultClient = LinkSmartThingDirectory.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME'
BasicAuth.password = 'YOUR PASSWORD'
// Configure Bearer (JWT) access token for authorization: BearerAuth
var BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new LinkSmartThingDirectory.EventsApi()
var opts = {
  'diff': true // {Boolean} Include changed TD attributes inside events payload
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.eventsGet(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LinkSmartThingDirectory.EventsApi* | [**eventsGet**](docs/EventsApi.md#eventsGet) | **GET** /events | Subscribe to all events
*LinkSmartThingDirectory.EventsApi* | [**eventsTypeGet**](docs/EventsApi.md#eventsTypeGet) | **GET** /events/{type} | Subscribe to specific events
*LinkSmartThingDirectory.SearchApi* | [**searchJsonpathGet**](docs/SearchApi.md#searchJsonpathGet) | **GET** /search/jsonpath | Query TDs with JSONPath expression
*LinkSmartThingDirectory.SearchApi* | [**searchXpathGet**](docs/SearchApi.md#searchXpathGet) | **GET** /search/xpath | Query TDs with XPath expression
*LinkSmartThingDirectory.TdApi* | [**tdGet**](docs/TdApi.md#tdGet) | **GET** /td | Retrieves paginated list of Thing Descriptions
*LinkSmartThingDirectory.TdApi* | [**tdIdDelete**](docs/TdApi.md#tdIdDelete) | **DELETE** /td/{id} | Deletes the Thing Description
*LinkSmartThingDirectory.TdApi* | [**tdIdGet**](docs/TdApi.md#tdIdGet) | **GET** /td/{id} | Retrieves a Thing Description
*LinkSmartThingDirectory.TdApi* | [**tdIdPatch**](docs/TdApi.md#tdIdPatch) | **PATCH** /td/{id} | Patch a Thing Description
*LinkSmartThingDirectory.TdApi* | [**tdIdPut**](docs/TdApi.md#tdIdPut) | **PUT** /td/{id} | Creates a new Thing Description with the provided ID, or updates an existing one
*LinkSmartThingDirectory.TdApi* | [**tdPost**](docs/TdApi.md#tdPost) | **POST** /td | Creates new Thing Description with system-generated ID
*LinkSmartThingDirectory.ThingsApi* | [**thingsGet**](docs/ThingsApi.md#thingsGet) | **GET** /things | Retrieves paginated list of Thing Descriptions
*LinkSmartThingDirectory.ThingsApi* | [**thingsIdDelete**](docs/ThingsApi.md#thingsIdDelete) | **DELETE** /things/{id} | Deletes the Thing Description
*LinkSmartThingDirectory.ThingsApi* | [**thingsIdGet**](docs/ThingsApi.md#thingsIdGet) | **GET** /things/{id} | Retrieves a Thing Description
*LinkSmartThingDirectory.ThingsApi* | [**thingsIdPatch**](docs/ThingsApi.md#thingsIdPatch) | **PATCH** /things/{id} | Patch a Thing Description
*LinkSmartThingDirectory.ThingsApi* | [**thingsIdPut**](docs/ThingsApi.md#thingsIdPut) | **PUT** /things/{id} | Creates a new Thing Description with the provided ID, or updates an existing one
*LinkSmartThingDirectory.ThingsApi* | [**thingsPost**](docs/ThingsApi.md#thingsPost) | **POST** /things | Creates new Thing Description with system-generated ID
*LinkSmartThingDirectory.ValidationApi* | [**validationGet**](docs/ValidationApi.md#validationGet) | **GET** /validation | Retrieves the validation result for a given Thing Description


## Documentation for Models

 - [LinkSmartThingDirectory.ErrorResponse](docs/ErrorResponse.md)
 - [LinkSmartThingDirectory.EventsGet200ResponseInner](docs/EventsGet200ResponseInner.md)
 - [LinkSmartThingDirectory.ProblemDetails](docs/ProblemDetails.md)
 - [LinkSmartThingDirectory.SearchJsonpathGet200ResponseInner](docs/SearchJsonpathGet200ResponseInner.md)
 - [LinkSmartThingDirectory.TdGet400Response](docs/TdGet400Response.md)
 - [LinkSmartThingDirectory.ThingDescriptionPage](docs/ThingDescriptionPage.md)
 - [LinkSmartThingDirectory.ValidationError](docs/ValidationError.md)
 - [LinkSmartThingDirectory.ValidationErrorAllOf](docs/ValidationErrorAllOf.md)
 - [LinkSmartThingDirectory.ValidationErrorAllOfValidationErrors](docs/ValidationErrorAllOfValidationErrors.md)
 - [LinkSmartThingDirectory.ValidationResult](docs/ValidationResult.md)


## Documentation for Authorization



### BasicAuth

- **Type**: HTTP basic authentication



### BearerAuth

- **Type**: Bearer authentication (JWT)

