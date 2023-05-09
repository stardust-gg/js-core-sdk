# StardustCoreSdk.HealthEndpointsApi

All URIs are relative to *https://core-api.stardust.gg/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthGet**](HealthEndpointsApi.md#healthGet) | **GET** /health | Get Health



## healthGet

> SDHealthResponse healthGet()

Get Health

Get system health info

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';

let apiInstance = new StardustCoreSdk.HealthEndpointsApi();
apiInstance.healthGet((error, data, response) => {
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

[**SDHealthResponse**](SDHealthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

