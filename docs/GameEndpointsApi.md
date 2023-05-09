# StardustCoreSdk.GameEndpointsApi

All URIs are relative to *https://core-api.stardust.gg/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameGetGet**](GameEndpointsApi.md#gameGetGet) | **GET** /game/get | Get Game
[**gameMutatePut**](GameEndpointsApi.md#gameMutatePut) | **PUT** /game/mutate | Mutate Game



## gameGetGet

> SDGameGetResponse gameGetGet()

Get Game

Get the Details of Your Game

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.GameEndpointsApi();
apiInstance.gameGetGet((error, data, response) => {
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

[**SDGameGetResponse**](SDGameGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameMutatePut

> Object gameMutatePut(sDGameMutateRequest)

Mutate Game

Change a games data

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.GameEndpointsApi();
let sDGameMutateRequest = new StardustCoreSdk.SDGameMutateRequest(); // SDGameMutateRequest | 
apiInstance.gameMutatePut(sDGameMutateRequest, (error, data, response) => {
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
 **sDGameMutateRequest** | [**SDGameMutateRequest**](SDGameMutateRequest.md)|  | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

