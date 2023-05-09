# StardustCoreSdk.OrderEndpointsApi

All URIs are relative to *https://core-api.stardust.gg/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderBuyPost**](OrderEndpointsApi.md#orderBuyPost) | **POST** /order/buy | Buy Order
[**orderCancelDelete**](OrderEndpointsApi.md#orderCancelDelete) | **DELETE** /order/cancel | Cancel Order
[**orderCreatePost**](OrderEndpointsApi.md#orderCreatePost) | **POST** /order/create | Create Order
[**orderGetAllGet**](OrderEndpointsApi.md#orderGetAllGet) | **GET** /order/get-all | Get All Orders
[**orderGetGet**](OrderEndpointsApi.md#orderGetGet) | **GET** /order/get | Get Order



## orderBuyPost

> Object orderBuyPost(sDOrderBuyRequest)

Buy Order

Buy a Order

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.OrderEndpointsApi();
let sDOrderBuyRequest = new StardustCoreSdk.SDOrderBuyRequest(); // SDOrderBuyRequest | 
apiInstance.orderBuyPost(sDOrderBuyRequest, (error, data, response) => {
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
 **sDOrderBuyRequest** | [**SDOrderBuyRequest**](SDOrderBuyRequest.md)|  | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderCancelDelete

> Object orderCancelDelete(orderId)

Cancel Order

Cancels a Order

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.OrderEndpointsApi();
let orderId = "orderId_example"; // String | Order Id unsigned 32 bit integer
apiInstance.orderCancelDelete(orderId, (error, data, response) => {
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
 **orderId** | **String**| Order Id unsigned 32 bit integer | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderCreatePost

> SDOrderCreateResponse orderCreatePost(sDOrderCreateRequest)

Create Order

Adds a New Order

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.OrderEndpointsApi();
let sDOrderCreateRequest = new StardustCoreSdk.SDOrderCreateRequest(); // SDOrderCreateRequest | 
apiInstance.orderCreatePost(sDOrderCreateRequest, (error, data, response) => {
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
 **sDOrderCreateRequest** | [**SDOrderCreateRequest**](SDOrderCreateRequest.md)|  | 

### Return type

[**SDOrderCreateResponse**](SDOrderCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderGetAllGet

> [SDOrderGetAllResponse] orderGetAllGet(start, limit, opts)

Get All Orders

Get the List of Game Orders

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.OrderEndpointsApi();
let start = "start_example"; // String | position in list
let limit = "limit_example"; // String | maximum templates returned in list
let opts = {
  'playerId': "playerId_example", // String | A Games PlayerId to filter by player
  'status': "status_example" // String | State of the order to filter. Default is offer. ('offer', 'accepted', 'cancelled')
};
apiInstance.orderGetAllGet(start, limit, opts, (error, data, response) => {
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
 **start** | **String**| position in list | 
 **limit** | **String**| maximum templates returned in list | 
 **playerId** | **String**| A Games PlayerId to filter by player | [optional] 
 **status** | **String**| State of the order to filter. Default is offer. (&#39;offer&#39;, &#39;accepted&#39;, &#39;cancelled&#39;) | [optional] 

### Return type

[**[SDOrderGetAllResponse]**](SDOrderGetAllResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderGetGet

> SDOrderGetResponse orderGetGet(orderId)

Get Order

Get a Game Order

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.OrderEndpointsApi();
let orderId = "orderId_example"; // String | An Order ID
apiInstance.orderGetGet(orderId, (error, data, response) => {
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
 **orderId** | **String**| An Order ID | 

### Return type

[**SDOrderGetResponse**](SDOrderGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

