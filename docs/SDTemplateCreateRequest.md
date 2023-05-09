# StardustCoreSdk.SDTemplateCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the template (ex. Bronze Axe) | 
**cap** | **String** | u96 Number as String (ex. 200000000)  | 
**contractType** | **String** | The type of custom contract to use for this template. Default will use a shared contract. | [optional] 
**type** | **String** | FT is a currency where every instance is the same, NFT is where every token instance differes (ex. FT) | 
**ownerAddress** | **String** | Blockchain address to set as owner of the custom contract. Required if contractType is set. | [optional] 
**props** | [**SDTemplateCreateRequestProps**](SDTemplateCreateRequestProps.md) |  | 
**publicContractMetadata** | **Object** | Returned to marketplaces as contract metadata | [optional] 
**symbol** | **String** | For ERC20 contracts, this is the ticker symbol | [optional] 



## Enum: ContractTypeEnum


* `internal-mint` (value: `"internal-mint"`)

* `ERC721` (value: `"ERC721"`)

* `ERC20` (value: `"ERC20"`)





## Enum: TypeEnum


* `FT` (value: `"FT"`)

* `NFT` (value: `"NFT"`)




