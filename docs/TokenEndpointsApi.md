# StardustCoreSdk.TokenEndpointsApi

All URIs are relative to *https://core-api.stardust.gg/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenBurnPost**](TokenEndpointsApi.md#tokenBurnPost) | **POST** /token/burn | Burn Token
[**tokenGetGet**](TokenEndpointsApi.md#tokenGetGet) | **GET** /token/get | Get Token
[**tokenMintBulkPost**](TokenEndpointsApi.md#tokenMintBulkPost) | **POST** /token/mint-bulk | Mint Tokens
[**tokenMutatePut**](TokenEndpointsApi.md#tokenMutatePut) | **PUT** /token/mutate | Mutate Token
[**tokenPropsRemoveDelete**](TokenEndpointsApi.md#tokenPropsRemoveDelete) | **DELETE** /token/props-remove | Remove Token Property
[**tokenTransferPost**](TokenEndpointsApi.md#tokenTransferPost) | **POST** /token/transfer | Transfer Tokens
[**tokenWithdrawPost**](TokenEndpointsApi.md#tokenWithdrawPost) | **POST** /token/withdraw | Withdraw Token



## tokenBurnPost

> Object tokenBurnPost(sDTokenBurnRequest)

Burn Token

Burns token on-chain. Cannot be reversed.

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TokenEndpointsApi();
let sDTokenBurnRequest = new StardustCoreSdk.SDTokenBurnRequest(); // SDTokenBurnRequest | 
apiInstance.tokenBurnPost(sDTokenBurnRequest, (error, data, response) => {
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
 **sDTokenBurnRequest** | [**SDTokenBurnRequest**](SDTokenBurnRequest.md)|  | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tokenGetGet

> [SDTokenGetResponse] tokenGetGet(tokenIds)

Get Token

Some of the details of this token are based upon the Template that it was created from (using token/mint)

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TokenEndpointsApi();
let tokenIds = "tokenIds_example"; // String | Stringify Array of token ids (ex. '[3589, 3580]')
apiInstance.tokenGetGet(tokenIds, (error, data, response) => {
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
 **tokenIds** | **String**| Stringify Array of token ids (ex. &#39;[3589, 3580]&#39;) | 

### Return type

[**[SDTokenGetResponse]**](SDTokenGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokenMintBulkPost

> [Number] tokenMintBulkPost(sDTokenMintBulkRequest)

Mint Tokens

Mint tokens to a player

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TokenEndpointsApi();
let sDTokenMintBulkRequest = new StardustCoreSdk.SDTokenMintBulkRequest(); // SDTokenMintBulkRequest | 
apiInstance.tokenMintBulkPost(sDTokenMintBulkRequest, (error, data, response) => {
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
 **sDTokenMintBulkRequest** | [**SDTokenMintBulkRequest**](SDTokenMintBulkRequest.md)|  | 

### Return type

**[Number]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tokenMutatePut

> Object tokenMutatePut(sDTokenMutateRequest)

Mutate Token

Mutates a Property of a Token

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TokenEndpointsApi();
let sDTokenMutateRequest = new StardustCoreSdk.SDTokenMutateRequest(); // SDTokenMutateRequest | 
apiInstance.tokenMutatePut(sDTokenMutateRequest, (error, data, response) => {
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
 **sDTokenMutateRequest** | [**SDTokenMutateRequest**](SDTokenMutateRequest.md)|  | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tokenPropsRemoveDelete

> Object tokenPropsRemoveDelete(tokenId, props)

Remove Token Property

Removes a Tokens Property from Your Game

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TokenEndpointsApi();
let tokenId = "tokenId_example"; // String | Token Id returned from token/create (ex. 5)
let props = "props_example"; // String | Stringify Array of token mutable property names ex: '[\"exp\", \"health\"]' }
apiInstance.tokenPropsRemoveDelete(tokenId, props, (error, data, response) => {
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
 **tokenId** | **String**| Token Id returned from token/create (ex. 5) | 
 **props** | **String**| Stringify Array of token mutable property names ex: &#39;[\&quot;exp\&quot;, \&quot;health\&quot;]&#39; } | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokenTransferPost

> Object tokenTransferPost(sDTokenTransferRequest)

Transfer Tokens

Use this Endpoint to Facilitate Moving Tokens from one Player to Another

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TokenEndpointsApi();
let sDTokenTransferRequest = new StardustCoreSdk.SDTokenTransferRequest(); // SDTokenTransferRequest | 
apiInstance.tokenTransferPost(sDTokenTransferRequest, (error, data, response) => {
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
 **sDTokenTransferRequest** | [**SDTokenTransferRequest**](SDTokenTransferRequest.md)|  | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tokenWithdrawPost

> Object tokenWithdrawPost(sDTokenWithdrawRequest)

Withdraw Token

Withdraw tokens from a Stardust Wallet

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TokenEndpointsApi();
let sDTokenWithdrawRequest = new StardustCoreSdk.SDTokenWithdrawRequest(); // SDTokenWithdrawRequest | 
apiInstance.tokenWithdrawPost(sDTokenWithdrawRequest, (error, data, response) => {
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
 **sDTokenWithdrawRequest** | [**SDTokenWithdrawRequest**](SDTokenWithdrawRequest.md)|  | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

