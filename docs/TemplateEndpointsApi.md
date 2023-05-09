# StardustCoreSdk.TemplateEndpointsApi

All URIs are relative to *https://core-api.stardust.gg/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templateCountGet**](TemplateEndpointsApi.md#templateCountGet) | **GET** /template/count | Get Template Count
[**templateCreatePost**](TemplateEndpointsApi.md#templateCreatePost) | **POST** /template/create | Create Template
[**templateGetAllGet**](TemplateEndpointsApi.md#templateGetAllGet) | **GET** /template/get-all | Get All Templates
[**templateGetGet**](TemplateEndpointsApi.md#templateGetGet) | **GET** /template/get | Get Template
[**templateGetTokensGet**](TemplateEndpointsApi.md#templateGetTokensGet) | **GET** /template/get-tokens | Get Template Tokens
[**templateMutatePut**](TemplateEndpointsApi.md#templateMutatePut) | **PUT** /template/mutate | Mutate Template
[**templatePropsRemoveDelete**](TemplateEndpointsApi.md#templatePropsRemoveDelete) | **DELETE** /template/props-remove | Remove Template Property
[**templateRemoveDelete**](TemplateEndpointsApi.md#templateRemoveDelete) | **DELETE** /template/remove | Remove Template



## templateCountGet

> SDTemplateCountResponse templateCountGet(opts)

Get Template Count

Get a Template&#39;s Count Within a Game

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TemplateEndpointsApi();
let opts = {
  'filter': "filter_example" // String | Find a substring within the Template name field
};
apiInstance.templateCountGet(opts, (error, data, response) => {
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
 **filter** | **String**| Find a substring within the Template name field | [optional] 

### Return type

[**SDTemplateCountResponse**](SDTemplateCountResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateCreatePost

> SDTemplateCreateResponse templateCreatePost(sDTemplateCreateRequest)

Create Template

Adds a New Token Template that lets Players Acquire that Token using the Token/Mint Endpoint

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TemplateEndpointsApi();
let sDTemplateCreateRequest = new StardustCoreSdk.SDTemplateCreateRequest(); // SDTemplateCreateRequest | 
apiInstance.templateCreatePost(sDTemplateCreateRequest, (error, data, response) => {
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
 **sDTemplateCreateRequest** | [**SDTemplateCreateRequest**](SDTemplateCreateRequest.md)|  | 

### Return type

[**SDTemplateCreateResponse**](SDTemplateCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## templateGetAllGet

> [SDTemplateGetAllResponse] templateGetAllGet(start, limit, opts)

Get All Templates

Get All of the Templates Within a Game

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TemplateEndpointsApi();
let start = "start_example"; // String | position in list
let limit = "limit_example"; // String | maximum templates returned in list
let opts = {
  'filter': "filter_example" // String | Find a substring within the Template name field
};
apiInstance.templateGetAllGet(start, limit, opts, (error, data, response) => {
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
 **filter** | **String**| Find a substring within the Template name field | [optional] 

### Return type

[**[SDTemplateGetAllResponse]**](SDTemplateGetAllResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateGetGet

> SDTemplateGetResponse templateGetGet(templateId)

Get Template

Get the Details of a Template

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TemplateEndpointsApi();
let templateId = "templateId_example"; // String | Template Id such as 3589)
apiInstance.templateGetGet(templateId, (error, data, response) => {
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
 **templateId** | **String**| Template Id such as 3589) | 

### Return type

[**SDTemplateGetResponse**](SDTemplateGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateGetTokensGet

> [SDTemplateGetTokensResponse] templateGetTokensGet(templateId, opts)

Get Template Tokens

Get a List of All Minted Tokens from a Given Template

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TemplateEndpointsApi();
let templateId = "templateId_example"; // String | The ID of the Template
let opts = {
  'start': "start_example", // String | position in list
  'limit': "limit_example", // String | maximum templates returned in list
  'includeDeleted': "includeDeleted_example" // String | If true tokens from deleted players are included in the response
};
apiInstance.templateGetTokensGet(templateId, opts, (error, data, response) => {
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
 **templateId** | **String**| The ID of the Template | 
 **start** | **String**| position in list | [optional] 
 **limit** | **String**| maximum templates returned in list | [optional] 
 **includeDeleted** | **String**| If true tokens from deleted players are included in the response | [optional] 

### Return type

[**[SDTemplateGetTokensResponse]**](SDTemplateGetTokensResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateMutatePut

> Object templateMutatePut(sDTemplateMutateRequest)

Mutate Template

Mutates a Property of a Template, Which in Turn will Affect the Inherited Property on All of the Tokens Created from this Template (via token/mint)

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TemplateEndpointsApi();
let sDTemplateMutateRequest = new StardustCoreSdk.SDTemplateMutateRequest(); // SDTemplateMutateRequest | 
apiInstance.templateMutatePut(sDTemplateMutateRequest, (error, data, response) => {
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
 **sDTemplateMutateRequest** | [**SDTemplateMutateRequest**](SDTemplateMutateRequest.md)|  | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## templatePropsRemoveDelete

> Object templatePropsRemoveDelete(templateId, props)

Remove Template Property

Removes a Templates Property from Your Game

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TemplateEndpointsApi();
let templateId = "templateId_example"; // String | Template Id returned from template/create (ex. 5)
let props = "props_example"; // String | Stringify Array of template mutable property names ex: '[\"exp\", \"health\"]' }
apiInstance.templatePropsRemoveDelete(templateId, props, (error, data, response) => {
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
 **templateId** | **String**| Template Id returned from template/create (ex. 5) | 
 **props** | **String**| Stringify Array of template mutable property names ex: &#39;[\&quot;exp\&quot;, \&quot;health\&quot;]&#39; } | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templateRemoveDelete

> Object templateRemoveDelete(templateId)

Remove Template

Removes a Template from Your Game. If Players have Instances of this Template from the token/mint Command, Their Tokens will NOT be Removed

### Example

```javascript
import StardustCoreSdk from 'stardust-core-sdk';
let defaultClient = StardustCoreSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new StardustCoreSdk.TemplateEndpointsApi();
let templateId = "templateId_example"; // String | Template Id returned from template/create (ex. 5)
apiInstance.templateRemoveDelete(templateId, (error, data, response) => {
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
 **templateId** | **String**| Template Id returned from template/create (ex. 5) | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

