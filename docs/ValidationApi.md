# LinkSmartThingDirectory.ValidationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validationGet**](ValidationApi.md#validationGet) | **GET** /validation | Retrieves the validation result for a given Thing Description



## validationGet

> ValidationResult validationGet()

Retrieves the validation result for a given Thing Description

The Thing Description should be provided as JSON in the request body.&lt;br&gt; Note: This is currently not supported using Swagger UI. 

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

let apiInstance = new LinkSmartThingDirectory.ValidationApi();
apiInstance.validationGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ValidationResult**](ValidationResult.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/ld+json

