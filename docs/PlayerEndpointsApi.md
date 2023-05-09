# StardustCoreSdk.PlayerEndpointsApi

All URIs are relative to *https://core-api.stardust.gg/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playerCountGet**](PlayerEndpointsApi.md#playerCountGet) | **GET** /player/count | Get Player Count
[**playerCreatePost**](PlayerEndpointsApi.md#playerCreatePost) | **POST** /player/create | Create Player
[**playerGetAllGet**](PlayerEndpointsApi.md#playerGetAllGet) | **GET** /player/get-all | Get All Players
[**playerGetGet**](PlayerEndpointsApi.md#playerGetGet) | **GET** /player/get | Get Player
[**playerGetIdGet**](PlayerEndpointsApi.md#playerGetIdGet) | **GET** /player/get-id | Get Player ID
[**playerGetIdsGet**](PlayerEndpointsApi.md#playerGetIdsGet) | **GET** /player/get-ids | Get All Player IDs
[**playerGetInventoryGet**](PlayerEndpointsApi.md#playerGetInventoryGet) | **GET** /player/get-inventory | Get Player Inventory
[**playerMutatePut**](PlayerEndpointsApi.md#playerMutatePut) | **PUT** /player/mutate | Mutate Player
[**playerRemoveDelete**](PlayerEndpointsApi.md#playerRemoveDelete) | **DELETE** /player/remove | Remove Player
[**playerWalletGetGet**](PlayerEndpointsApi.md#playerWalletGetGet) | **GET** /player/wallet-get | Get Player Wallet
[**playerWithdrawPost**](PlayerEndpointsApi.md#playerWithdrawPost) | **POST** /player/withdraw | Withdraw From Player



## playerCountGet

> SDPlayerCountResponse playerCountGet()

Get Player Count

Get Player count within a game

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
apiInstance.playerCountGet((error, data, response) => {
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

[**SDPlayerCountResponse**](SDPlayerCountResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playerCreatePost

> SDPlayerCreateResponse playerCreatePost(sDPlayerCreateRequest)

Create Player

Create a Player for a game. Returns their player id which can be used to reference them later in Stardust&#39;s system

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
let sDPlayerCreateRequest = new StardustCoreSdk.SDPlayerCreateRequest(); // SDPlayerCreateRequest | 
apiInstance.playerCreatePost(sDPlayerCreateRequest, (error, data, response) => {
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
 **sDPlayerCreateRequest** | [**SDPlayerCreateRequest**](SDPlayerCreateRequest.md)|  | 

### Return type

[**SDPlayerCreateResponse**](SDPlayerCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## playerGetAllGet

> [SDPlayerGetAllResponse] playerGetAllGet(opts)

Get All Players

Get the List of All Players in Game

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
let opts = {
  'start': "start_example", // String | position in list
  'filter': "filter_example", // String | Find a substring within the Player unique ID field
  'limit': "limit_example" // String | maximum items returned in list
};
apiInstance.playerGetAllGet(opts, (error, data, response) => {
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
 **start** | **String**| position in list | [optional] 
 **filter** | **String**| Find a substring within the Player unique ID field | [optional] 
 **limit** | **String**| maximum items returned in list | [optional] 

### Return type

[**[SDPlayerGetAllResponse]**](SDPlayerGetAllResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playerGetGet

> SDPlayerGetResponse playerGetGet(playerId)

Get Player

Get Details of a Player Within a Game

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
let playerId = "playerId_example"; // String | Player id
apiInstance.playerGetGet(playerId, (error, data, response) => {
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
 **playerId** | **String**| Player id | 

### Return type

[**SDPlayerGetResponse**](SDPlayerGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playerGetIdGet

> SDPlayerGetIdResponse playerGetIdGet(uniqueId)

Get Player ID

Get a Player&#39;s ID via their Unique ID

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
let uniqueId = "uniqueId_example"; // String | Player's Unique ID
apiInstance.playerGetIdGet(uniqueId, (error, data, response) => {
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
 **uniqueId** | **String**| Player&#39;s Unique ID | 

### Return type

[**SDPlayerGetIdResponse**](SDPlayerGetIdResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playerGetIdsGet

> [SDPlayerGetIdsResponse] playerGetIdsGet()

Get All Player IDs

Get All Player IDs for a Given Game

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
apiInstance.playerGetIdsGet((error, data, response) => {
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

[**[SDPlayerGetIdsResponse]**](SDPlayerGetIdsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playerGetInventoryGet

> [SDPlayerGetInventoryResponse] playerGetInventoryGet(playerId, opts)

Get Player Inventory

Get a players inventory and all the items it holds

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
let playerId = "playerId_example"; // String | Player id
let opts = {
  'start': "start_example", // String | position in list
  'tokenIds': "tokenIds_example", // String | Comma-Separated String of token ids (ex. '3589, 3580')
  'limit': "limit_example" // String | maximum items returned in list
};
apiInstance.playerGetInventoryGet(playerId, opts, (error, data, response) => {
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
 **playerId** | **String**| Player id | 
 **start** | **String**| position in list | [optional] 
 **tokenIds** | **String**| Comma-Separated String of token ids (ex. &#39;3589, 3580&#39;) | [optional] 
 **limit** | **String**| maximum items returned in list | [optional] 

### Return type

[**[SDPlayerGetInventoryResponse]**](SDPlayerGetInventoryResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playerMutatePut

> Object playerMutatePut(sDPlayerMutateRequest)

Mutate Player

Change player data

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
let sDPlayerMutateRequest = new StardustCoreSdk.SDPlayerMutateRequest(); // SDPlayerMutateRequest | 
apiInstance.playerMutatePut(sDPlayerMutateRequest, (error, data, response) => {
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
 **sDPlayerMutateRequest** | [**SDPlayerMutateRequest**](SDPlayerMutateRequest.md)|  | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## playerRemoveDelete

> Object playerRemoveDelete(playerId)

Remove Player

Removes (hides) a player from your game. This is not permanent.

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
let playerId = "playerId_example"; // String | Player Id returned from player/create a UUID, i.e. 802760b0-2bb5-4fba-9237-895ed02cf8d8
apiInstance.playerRemoveDelete(playerId, (error, data, response) => {
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
 **playerId** | **String**| Player Id returned from player/create a UUID, i.e. 802760b0-2bb5-4fba-9237-895ed02cf8d8 | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playerWalletGetGet

> SDPlayerWalletGetResponse playerWalletGetGet(playerId)

Get Player Wallet

Get player&#39;s wallet within a game

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
let playerId = "playerId_example"; // String | Player id
apiInstance.playerWalletGetGet(playerId, (error, data, response) => {
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
 **playerId** | **String**| Player id | 

### Return type

[**SDPlayerWalletGetResponse**](SDPlayerWalletGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playerWithdrawPost

> Object playerWithdrawPost(sDPlayerWithdrawRequest)

Withdraw From Player

Withdraw a Player&#39;s Tokens from their Stardust Wallet

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.PlayerEndpointsApi();
let sDPlayerWithdrawRequest = new StardustCoreSdk.SDPlayerWithdrawRequest(); // SDPlayerWithdrawRequest | 
apiInstance.playerWithdrawPost(sDPlayerWithdrawRequest, (error, data, response) => {
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
 **sDPlayerWithdrawRequest** | [**SDPlayerWithdrawRequest**](SDPlayerWithdrawRequest.md)|  | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

