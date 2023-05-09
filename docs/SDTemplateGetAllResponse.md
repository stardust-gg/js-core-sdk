# StardustCoreSdk.SDTemplateGetAllResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gameId** | **Number** | Game ID Number (unsigned 32 bit integer) | 
**id** | **Number** |  | 
**cap** | **String** | u96 Number as String, min: 0, max: 39614081257132168796771975167 | 
**contractType** | **String** | The type of custom contract bieng used for this template. | [optional] 
**totalSupply** | **String** | u96 Number as String, min: 0, max: 39614081257132168796771975167 | 
**name** | **String** | The name of the template | 
**type** | **String** |  | 
**props** | [**SDTemplateGetAllResponseProps**](SDTemplateGetAllResponseProps.md) |  | 
**publicContractMetadata** | **Object** | Returned to marketplaces as contract metadata | [optional] 
**publicTokenMetadata** | **Object** | Inherited by tokens, and returned to marketplaces as token metadata | [optional] 



## Enum: ContractTypeEnum


* `ERC721` (value: `"ERC721"`)

* `internal-mint` (value: `"internal-mint"`)

* `external-no-mint` (value: `"external-no-mint"`)





## Enum: TypeEnum


* `FT` (value: `"FT"`)

* `NFT` (value: `"NFT"`)




