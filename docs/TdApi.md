# LinkSmartThingDirectory.TdApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tdGet**](TdApi.md#tdGet) | **GET** /td | Retrieves paginated list of Thing Descriptions
[**tdIdDelete**](TdApi.md#tdIdDelete) | **DELETE** /td/{id} | Deletes the Thing Description
[**tdIdGet**](TdApi.md#tdIdGet) | **GET** /td/{id} | Retrieves a Thing Description
[**tdIdPatch**](TdApi.md#tdIdPatch) | **PATCH** /td/{id} | Patch a Thing Description
[**tdIdPut**](TdApi.md#tdIdPut) | **PUT** /td/{id} | Creates a new Thing Description with the provided ID, or updates an existing one
[**tdPost**](TdApi.md#tdPost) | **POST** /td | Creates new Thing Description with system-generated ID



## tdGet

> ThingDescriptionPage tdGet(opts)

Retrieves paginated list of Thing Descriptions

The query languages, described [here](https://github.com/linksmart/thing-directory/wiki/Query-Language), can be used to filter results and fetch parts of Thing Descriptions.

### Example

```javascript
import LinkSmartThingDirectory from 'link_smart_thing_directory';
let defaultClient = LinkSmartThingDirectory.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LinkSmartThingDirectory.TdApi();
let opts = {
  'page': 3.4, // Number | Page number in the pagination
  'perPage': 3.4, // Number | Number of entries per page
  'jsonpath': "jsonpath_example", // String | JSONPath expression for fetching specific items. E.g. `$[?(@.title=='Kitchen Lamp')].properties`
  'xpath': "xpath_example" // String | xPath 3.0 expression for fetching specific items. E.g. `//_*[title='Kitchen Lamp']/properties`
};
apiInstance.tdGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number in the pagination | [optional] 
 **perPage** | **Number**| Number of entries per page | [optional] 
 **jsonpath** | **String**| JSONPath expression for fetching specific items. E.g. &#x60;$[?(@.title&#x3D;&#x3D;&#39;Kitchen Lamp&#39;)].properties&#x60; | [optional] 
 **xpath** | **String**| xPath 3.0 expression for fetching specific items. E.g. &#x60;//_*[title&#x3D;&#39;Kitchen Lamp&#39;]/properties&#x60; | [optional] 

### Return type

[**ThingDescriptionPage**](ThingDescriptionPage.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json


## tdIdDelete

> tdIdDelete(id)

Deletes the Thing Description

### Example

```javascript
import LinkSmartThingDirectory from 'link_smart_thing_directory';
let defaultClient = LinkSmartThingDirectory.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LinkSmartThingDirectory.TdApi();
let id = "id_example"; // String | ID of the Thing Description
apiInstance.tdIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Thing Description | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/ld+json


## tdIdGet

> Object tdIdGet(id)

Retrieves a Thing Description

### Example

```javascript
import LinkSmartThingDirectory from 'link_smart_thing_directory';
let defaultClient = LinkSmartThingDirectory.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LinkSmartThingDirectory.TdApi();
let id = urn:example:1234; // String | ID of the Thing Description
apiInstance.tdIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Thing Description | 

### Return type

**Object**

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json


## tdIdPatch

> tdIdPatch(id, body)

Patch a Thing Description

The patch document must be based on RFC7396 JSON Merge Patch

### Example

```javascript
import LinkSmartThingDirectory from 'link_smart_thing_directory';
let defaultClient = LinkSmartThingDirectory.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LinkSmartThingDirectory.TdApi();
let id = urn:example:1234; // String | ID of the Thing Description
let body = {key: null}; // Object | The Thing Description object
apiInstance.tdIdPatch(id, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Thing Description | 
 **body** | **Object**| The Thing Description object | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/json, application/ld+json


## tdIdPut

> tdIdPut(id, body)

Creates a new Thing Description with the provided ID, or updates an existing one

The &#x60;id&#x60; in the path is the resource id and must match the one in Thing Description.&lt;br&gt; For creating a TD without user-defined &#x60;id&#x60;, use the &#x60;POST&#x60; method. 

### Example

```javascript
import LinkSmartThingDirectory from 'link_smart_thing_directory';
let defaultClient = LinkSmartThingDirectory.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LinkSmartThingDirectory.TdApi();
let id = urn:example:1234; // String | ID of the Thing Description
let body = {key: null}; // Object | The Thing Description object
apiInstance.tdIdPut(id, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Thing Description | 
 **body** | **Object**| The Thing Description object | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/ld+json
- **Accept**: application/json, application/ld+json


## tdPost

> tdPost(body)

Creates new Thing Description with system-generated ID

This is to create a TD and receive a unique system-generated &#x60;id&#x60; in response.&lt;br&gt; The server rejects the request if there is an &#x60;id&#x60; in the body.&lt;br&gt; For creating a TD with user-defined &#x60;id&#x60;, use the &#x60;PUT&#x60; method. 

### Example

```javascript
import LinkSmartThingDirectory from 'link_smart_thing_directory';
let defaultClient = LinkSmartThingDirectory.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LinkSmartThingDirectory.TdApi();
let body = {key: null}; // Object | Thing Description to be created
apiInstance.tdPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| Thing Description to be created | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/ld+json
- **Accept**: application/json, application/ld+json

