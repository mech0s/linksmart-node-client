# LinkSmartThingDirectory.SearchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchJsonpathGet**](SearchApi.md#searchJsonpathGet) | **GET** /search/jsonpath | Query TDs with JSONPath expression
[**searchXpathGet**](SearchApi.md#searchXpathGet) | **GET** /search/xpath | Query TDs with XPath expression



## searchJsonpathGet

> [SearchJsonpathGet200ResponseInner] searchJsonpathGet(query)

Query TDs with JSONPath expression

The query languages, described [here](https://github.com/linksmart/thing-directory/wiki/Query-Language), can be used to filter results and select parts of Thing Descriptions.

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

let apiInstance = new LinkSmartThingDirectory.SearchApi();
let query = "query_example"; // String | JSONPath expression for fetching specific items. E.g. `$[?(@.title=='Kitchen Lamp')].properties`
apiInstance.searchJsonpathGet(query, (error, data, response) => {
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
 **query** | **String**| JSONPath expression for fetching specific items. E.g. &#x60;$[?(@.title&#x3D;&#x3D;&#39;Kitchen Lamp&#39;)].properties&#x60; | 

### Return type

[**[SearchJsonpathGet200ResponseInner]**](SearchJsonpathGet200ResponseInner.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/ld+json


## searchXpathGet

> [SearchJsonpathGet200ResponseInner] searchXpathGet(query)

Query TDs with XPath expression

The query languages, described [here](https://github.com/linksmart/thing-directory/wiki/Query-Language), can be used to filter results and select parts of Thing Descriptions.

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

let apiInstance = new LinkSmartThingDirectory.SearchApi();
let query = "query_example"; // String | xPath 3.0 expression for fetching specific items. E.g. `//_*[title='Kitchen Lamp']/properties`
apiInstance.searchXpathGet(query, (error, data, response) => {
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
 **query** | **String**| xPath 3.0 expression for fetching specific items. E.g. &#x60;//_*[title&#x3D;&#39;Kitchen Lamp&#39;]/properties&#x60; | 

### Return type

[**[SearchJsonpathGet200ResponseInner]**](SearchJsonpathGet200ResponseInner.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/ld+json

