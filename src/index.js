/**
 * Stardust API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2023-05-08T04:33:59Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Error from './model/Error';
import SDGameGetResponse from './model/SDGameGetResponse';
import SDGameGetResponseFeesInner from './model/SDGameGetResponseFeesInner';
import SDGameMutateRequest from './model/SDGameMutateRequest';
import SDHealthResponse from './model/SDHealthResponse';
import SDOrderBuyRequest from './model/SDOrderBuyRequest';
import SDOrderCancelRequest from './model/SDOrderCancelRequest';
import SDOrderCancelResponse from './model/SDOrderCancelResponse';
import SDOrderCreateRequest from './model/SDOrderCreateRequest';
import SDOrderCreateResponse from './model/SDOrderCreateResponse';
import SDOrderCreateTokens from './model/SDOrderCreateTokens';
import SDOrderGetAllResponse from './model/SDOrderGetAllResponse';
import SDOrderGetAllResponseTokensRequestedInner from './model/SDOrderGetAllResponseTokensRequestedInner';
import SDOrderGetResponse from './model/SDOrderGetResponse';
import SDPlayerCountResponse from './model/SDPlayerCountResponse';
import SDPlayerCreateJWTObject from './model/SDPlayerCreateJWTObject';
import SDPlayerCreateRequest from './model/SDPlayerCreateRequest';
import SDPlayerCreateResponse from './model/SDPlayerCreateResponse';
import SDPlayerGetAllResponse from './model/SDPlayerGetAllResponse';
import SDPlayerGetIdResponse from './model/SDPlayerGetIdResponse';
import SDPlayerGetIdsResponse from './model/SDPlayerGetIdsResponse';
import SDPlayerGetInventoryResponse from './model/SDPlayerGetInventoryResponse';
import SDPlayerGetResponse from './model/SDPlayerGetResponse';
import SDPlayerMutateRequest from './model/SDPlayerMutateRequest';
import SDPlayerWalletGetResponse from './model/SDPlayerWalletGetResponse';
import SDPlayerWalletGetResponseWalletInner from './model/SDPlayerWalletGetResponseWalletInner';
import SDPlayerWalletGetResponseWalletInnerMoniesInner from './model/SDPlayerWalletGetResponseWalletInnerMoniesInner';
import SDPlayerWithdrawObject from './model/SDPlayerWithdrawObject';
import SDPlayerWithdrawRequest from './model/SDPlayerWithdrawRequest';
import SDTemplateCountResponse from './model/SDTemplateCountResponse';
import SDTemplateCreateBulk from './model/SDTemplateCreateBulk';
import SDTemplateCreateBulkProps from './model/SDTemplateCreateBulkProps';
import SDTemplateCreateRequest from './model/SDTemplateCreateRequest';
import SDTemplateCreateRequestProps from './model/SDTemplateCreateRequestProps';
import SDTemplateCreateResponse from './model/SDTemplateCreateResponse';
import SDTemplateGetAllResponse from './model/SDTemplateGetAllResponse';
import SDTemplateGetAllResponseProps from './model/SDTemplateGetAllResponseProps';
import SDTemplateGetResponse from './model/SDTemplateGetResponse';
import SDTemplateGetTokensResponse from './model/SDTemplateGetTokensResponse';
import SDTemplateGetTokensResponsePlayer from './model/SDTemplateGetTokensResponsePlayer';
import SDTemplateGetTokensResponseToken from './model/SDTemplateGetTokensResponseToken';
import SDTemplateGetTokensResponseTokenProps from './model/SDTemplateGetTokensResponseTokenProps';
import SDTemplateMutateRequest from './model/SDTemplateMutateRequest';
import SDTokenBurnRequest from './model/SDTokenBurnRequest';
import SDTokenBurnRequestTokenObjectsInner from './model/SDTokenBurnRequestTokenObjectsInner';
import SDTokenGetResponse from './model/SDTokenGetResponse';
import SDTokenMintBulkRequest from './model/SDTokenMintBulkRequest';
import SDTokenMintBulkTokenObject from './model/SDTokenMintBulkTokenObject';
import SDTokenMintBulkTokenObjectProps from './model/SDTokenMintBulkTokenObjectProps';
import SDTokenMutateRequest from './model/SDTokenMutateRequest';
import SDTokenTransferRequest from './model/SDTokenTransferRequest';
import SDTokenWithdrawObject from './model/SDTokenWithdrawObject';
import SDTokenWithdrawRequest from './model/SDTokenWithdrawRequest';
import GameEndpointsApi from './api/GameEndpointsApi';
import HealthEndpointsApi from './api/HealthEndpointsApi';
import OrderEndpointsApi from './api/OrderEndpointsApi';
import PlayerEndpointsApi from './api/PlayerEndpointsApi';
import TemplateEndpointsApi from './api/TemplateEndpointsApi';
import TokenEndpointsApi from './api/TokenEndpointsApi';


/**
* The Javascript library for the Stardust Core API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var StardustCoreSdk = require('index'); // See note below*.
* var xxxSvc = new StardustCoreSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new StardustCoreSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new StardustCoreSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new StardustCoreSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.3
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The SDGameGetResponse model constructor.
     * @property {module:model/SDGameGetResponse}
     */
    SDGameGetResponse,

    /**
     * The SDGameGetResponseFeesInner model constructor.
     * @property {module:model/SDGameGetResponseFeesInner}
     */
    SDGameGetResponseFeesInner,

    /**
     * The SDGameMutateRequest model constructor.
     * @property {module:model/SDGameMutateRequest}
     */
    SDGameMutateRequest,

    /**
     * The SDHealthResponse model constructor.
     * @property {module:model/SDHealthResponse}
     */
    SDHealthResponse,

    /**
     * The SDOrderBuyRequest model constructor.
     * @property {module:model/SDOrderBuyRequest}
     */
    SDOrderBuyRequest,

    /**
     * The SDOrderCancelRequest model constructor.
     * @property {module:model/SDOrderCancelRequest}
     */
    SDOrderCancelRequest,

    /**
     * The SDOrderCancelResponse model constructor.
     * @property {module:model/SDOrderCancelResponse}
     */
    SDOrderCancelResponse,

    /**
     * The SDOrderCreateRequest model constructor.
     * @property {module:model/SDOrderCreateRequest}
     */
    SDOrderCreateRequest,

    /**
     * The SDOrderCreateResponse model constructor.
     * @property {module:model/SDOrderCreateResponse}
     */
    SDOrderCreateResponse,

    /**
     * The SDOrderCreateTokens model constructor.
     * @property {module:model/SDOrderCreateTokens}
     */
    SDOrderCreateTokens,

    /**
     * The SDOrderGetAllResponse model constructor.
     * @property {module:model/SDOrderGetAllResponse}
     */
    SDOrderGetAllResponse,

    /**
     * The SDOrderGetAllResponseTokensRequestedInner model constructor.
     * @property {module:model/SDOrderGetAllResponseTokensRequestedInner}
     */
    SDOrderGetAllResponseTokensRequestedInner,

    /**
     * The SDOrderGetResponse model constructor.
     * @property {module:model/SDOrderGetResponse}
     */
    SDOrderGetResponse,

    /**
     * The SDPlayerCountResponse model constructor.
     * @property {module:model/SDPlayerCountResponse}
     */
    SDPlayerCountResponse,

    /**
     * The SDPlayerCreateJWTObject model constructor.
     * @property {module:model/SDPlayerCreateJWTObject}
     */
    SDPlayerCreateJWTObject,

    /**
     * The SDPlayerCreateRequest model constructor.
     * @property {module:model/SDPlayerCreateRequest}
     */
    SDPlayerCreateRequest,

    /**
     * The SDPlayerCreateResponse model constructor.
     * @property {module:model/SDPlayerCreateResponse}
     */
    SDPlayerCreateResponse,

    /**
     * The SDPlayerGetAllResponse model constructor.
     * @property {module:model/SDPlayerGetAllResponse}
     */
    SDPlayerGetAllResponse,

    /**
     * The SDPlayerGetIdResponse model constructor.
     * @property {module:model/SDPlayerGetIdResponse}
     */
    SDPlayerGetIdResponse,

    /**
     * The SDPlayerGetIdsResponse model constructor.
     * @property {module:model/SDPlayerGetIdsResponse}
     */
    SDPlayerGetIdsResponse,

    /**
     * The SDPlayerGetInventoryResponse model constructor.
     * @property {module:model/SDPlayerGetInventoryResponse}
     */
    SDPlayerGetInventoryResponse,

    /**
     * The SDPlayerGetResponse model constructor.
     * @property {module:model/SDPlayerGetResponse}
     */
    SDPlayerGetResponse,

    /**
     * The SDPlayerMutateRequest model constructor.
     * @property {module:model/SDPlayerMutateRequest}
     */
    SDPlayerMutateRequest,

    /**
     * The SDPlayerWalletGetResponse model constructor.
     * @property {module:model/SDPlayerWalletGetResponse}
     */
    SDPlayerWalletGetResponse,

    /**
     * The SDPlayerWalletGetResponseWalletInner model constructor.
     * @property {module:model/SDPlayerWalletGetResponseWalletInner}
     */
    SDPlayerWalletGetResponseWalletInner,

    /**
     * The SDPlayerWalletGetResponseWalletInnerMoniesInner model constructor.
     * @property {module:model/SDPlayerWalletGetResponseWalletInnerMoniesInner}
     */
    SDPlayerWalletGetResponseWalletInnerMoniesInner,

    /**
     * The SDPlayerWithdrawObject model constructor.
     * @property {module:model/SDPlayerWithdrawObject}
     */
    SDPlayerWithdrawObject,

    /**
     * The SDPlayerWithdrawRequest model constructor.
     * @property {module:model/SDPlayerWithdrawRequest}
     */
    SDPlayerWithdrawRequest,

    /**
     * The SDTemplateCountResponse model constructor.
     * @property {module:model/SDTemplateCountResponse}
     */
    SDTemplateCountResponse,

    /**
     * The SDTemplateCreateBulk model constructor.
     * @property {module:model/SDTemplateCreateBulk}
     */
    SDTemplateCreateBulk,

    /**
     * The SDTemplateCreateBulkProps model constructor.
     * @property {module:model/SDTemplateCreateBulkProps}
     */
    SDTemplateCreateBulkProps,

    /**
     * The SDTemplateCreateRequest model constructor.
     * @property {module:model/SDTemplateCreateRequest}
     */
    SDTemplateCreateRequest,

    /**
     * The SDTemplateCreateRequestProps model constructor.
     * @property {module:model/SDTemplateCreateRequestProps}
     */
    SDTemplateCreateRequestProps,

    /**
     * The SDTemplateCreateResponse model constructor.
     * @property {module:model/SDTemplateCreateResponse}
     */
    SDTemplateCreateResponse,

    /**
     * The SDTemplateGetAllResponse model constructor.
     * @property {module:model/SDTemplateGetAllResponse}
     */
    SDTemplateGetAllResponse,

    /**
     * The SDTemplateGetAllResponseProps model constructor.
     * @property {module:model/SDTemplateGetAllResponseProps}
     */
    SDTemplateGetAllResponseProps,

    /**
     * The SDTemplateGetResponse model constructor.
     * @property {module:model/SDTemplateGetResponse}
     */
    SDTemplateGetResponse,

    /**
     * The SDTemplateGetTokensResponse model constructor.
     * @property {module:model/SDTemplateGetTokensResponse}
     */
    SDTemplateGetTokensResponse,

    /**
     * The SDTemplateGetTokensResponsePlayer model constructor.
     * @property {module:model/SDTemplateGetTokensResponsePlayer}
     */
    SDTemplateGetTokensResponsePlayer,

    /**
     * The SDTemplateGetTokensResponseToken model constructor.
     * @property {module:model/SDTemplateGetTokensResponseToken}
     */
    SDTemplateGetTokensResponseToken,

    /**
     * The SDTemplateGetTokensResponseTokenProps model constructor.
     * @property {module:model/SDTemplateGetTokensResponseTokenProps}
     */
    SDTemplateGetTokensResponseTokenProps,

    /**
     * The SDTemplateMutateRequest model constructor.
     * @property {module:model/SDTemplateMutateRequest}
     */
    SDTemplateMutateRequest,

    /**
     * The SDTokenBurnRequest model constructor.
     * @property {module:model/SDTokenBurnRequest}
     */
    SDTokenBurnRequest,

    /**
     * The SDTokenBurnRequestTokenObjectsInner model constructor.
     * @property {module:model/SDTokenBurnRequestTokenObjectsInner}
     */
    SDTokenBurnRequestTokenObjectsInner,

    /**
     * The SDTokenGetResponse model constructor.
     * @property {module:model/SDTokenGetResponse}
     */
    SDTokenGetResponse,

    /**
     * The SDTokenMintBulkRequest model constructor.
     * @property {module:model/SDTokenMintBulkRequest}
     */
    SDTokenMintBulkRequest,

    /**
     * The SDTokenMintBulkTokenObject model constructor.
     * @property {module:model/SDTokenMintBulkTokenObject}
     */
    SDTokenMintBulkTokenObject,

    /**
     * The SDTokenMintBulkTokenObjectProps model constructor.
     * @property {module:model/SDTokenMintBulkTokenObjectProps}
     */
    SDTokenMintBulkTokenObjectProps,

    /**
     * The SDTokenMutateRequest model constructor.
     * @property {module:model/SDTokenMutateRequest}
     */
    SDTokenMutateRequest,

    /**
     * The SDTokenTransferRequest model constructor.
     * @property {module:model/SDTokenTransferRequest}
     */
    SDTokenTransferRequest,

    /**
     * The SDTokenWithdrawObject model constructor.
     * @property {module:model/SDTokenWithdrawObject}
     */
    SDTokenWithdrawObject,

    /**
     * The SDTokenWithdrawRequest model constructor.
     * @property {module:model/SDTokenWithdrawRequest}
     */
    SDTokenWithdrawRequest,

    /**
    * The GameEndpointsApi service constructor.
    * @property {module:api/GameEndpointsApi}
    */
    GameEndpointsApi,

    /**
    * The HealthEndpointsApi service constructor.
    * @property {module:api/HealthEndpointsApi}
    */
    HealthEndpointsApi,

    /**
    * The OrderEndpointsApi service constructor.
    * @property {module:api/OrderEndpointsApi}
    */
    OrderEndpointsApi,

    /**
    * The PlayerEndpointsApi service constructor.
    * @property {module:api/PlayerEndpointsApi}
    */
    PlayerEndpointsApi,

    /**
    * The TemplateEndpointsApi service constructor.
    * @property {module:api/TemplateEndpointsApi}
    */
    TemplateEndpointsApi,

    /**
    * The TokenEndpointsApi service constructor.
    * @property {module:api/TokenEndpointsApi}
    */
    TokenEndpointsApi
};
