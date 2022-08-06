# LinkSmartThingDirectory.EventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsGet**](EventsApi.md#eventsGet) | **GET** /events | Subscribe to all events
[**eventsTypeGet**](EventsApi.md#eventsTypeGet) | **GET** /events/{type} | Subscribe to specific events



## eventsGet

> [EventsGet200ResponseInner] eventsGet(opts)

Subscribe to all events

This API uses the [Server-Sent Events (SSE)](https://www.w3.org/TR/eventsource/) protocol.

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

let apiInstance = new LinkSmartThingDirectory.EventsApi();
let opts = {
  'diff': true // Boolean | Include changed TD attributes inside events payload
};
apiInstance.eventsGet(opts, (error, data, response) => {
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
 **diff** | **Boolean**| Include changed TD attributes inside events payload | [optional] 

### Return type

[**[EventsGet200ResponseInner]**](EventsGet200ResponseInner.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream, application/json, application/ld+json


## eventsTypeGet

> [EventsGet200ResponseInner] eventsTypeGet(type, opts)

Subscribe to specific events

This API uses the [Server-Sent Events (SSE)](https://www.w3.org/TR/eventsource/) protocol.

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

let apiInstance = new LinkSmartThingDirectory.EventsApi();
let type = "type_example"; // String | Event type
let opts = {
  'diff': true // Boolean | Include changed TD attributes inside events payload
};
apiInstance.eventsTypeGet(type, opts, (error, data, response) => {
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
 **type** | **String**| Event type | 
 **diff** | **Boolean**| Include changed TD attributes inside events payload | [optional] 

### Return type

[**[EventsGet200ResponseInner]**](EventsGet200ResponseInner.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream, application/json, application/ld+json

