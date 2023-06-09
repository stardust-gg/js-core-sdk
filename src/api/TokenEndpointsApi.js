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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import SDTokenBurnRequest from '../model/SDTokenBurnRequest';
import SDTokenGetResponse from '../model/SDTokenGetResponse';
import SDTokenMintBulkRequest from '../model/SDTokenMintBulkRequest';
import SDTokenMutateRequest from '../model/SDTokenMutateRequest';
import SDTokenTransferRequest from '../model/SDTokenTransferRequest';
import SDTokenWithdrawRequest from '../model/SDTokenWithdrawRequest';

/**
* TokenEndpoints service.
* @module api/TokenEndpointsApi
* @version 0.0.3
*/
export default class TokenEndpointsApi {

    /**
    * Constructs a new TokenEndpointsApi. 
    * @alias module:api/TokenEndpointsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the tokenBurnPost operation.
     * @callback module:api/TokenEndpointsApi~tokenBurnPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Burn Token
     * Burns token on-chain. Cannot be reversed.
     * @param {module:model/SDTokenBurnRequest} sDTokenBurnRequest 
     * @param {module:api/TokenEndpointsApi~tokenBurnPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    tokenBurnPost(sDTokenBurnRequest, callback) {
      let postBody = sDTokenBurnRequest;
      // verify the required parameter 'sDTokenBurnRequest' is set
      if (sDTokenBurnRequest === undefined || sDTokenBurnRequest === null) {
        throw new Error("Missing the required parameter 'sDTokenBurnRequest' when calling tokenBurnPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/token/burn', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tokenGetGet operation.
     * @callback module:api/TokenEndpointsApi~tokenGetGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SDTokenGetResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Token
     * Some of the details of this token are based upon the Template that it was created from (using token/mint)
     * @param {String} tokenIds Stringify Array of token ids (ex. '[3589, 3580]')
     * @param {module:api/TokenEndpointsApi~tokenGetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SDTokenGetResponse>}
     */
    tokenGetGet(tokenIds, callback) {
      let postBody = null;
      // verify the required parameter 'tokenIds' is set
      if (tokenIds === undefined || tokenIds === null) {
        throw new Error("Missing the required parameter 'tokenIds' when calling tokenGetGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'tokenIds': tokenIds
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SDTokenGetResponse];
      return this.apiClient.callApi(
        '/token/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tokenMintBulkPost operation.
     * @callback module:api/TokenEndpointsApi~tokenMintBulkPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Number>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mint Tokens
     * Mint tokens to a player
     * @param {module:model/SDTokenMintBulkRequest} sDTokenMintBulkRequest 
     * @param {module:api/TokenEndpointsApi~tokenMintBulkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Number>}
     */
    tokenMintBulkPost(sDTokenMintBulkRequest, callback) {
      let postBody = sDTokenMintBulkRequest;
      // verify the required parameter 'sDTokenMintBulkRequest' is set
      if (sDTokenMintBulkRequest === undefined || sDTokenMintBulkRequest === null) {
        throw new Error("Missing the required parameter 'sDTokenMintBulkRequest' when calling tokenMintBulkPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ['Number'];
      return this.apiClient.callApi(
        '/token/mint-bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tokenMutatePut operation.
     * @callback module:api/TokenEndpointsApi~tokenMutatePutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mutate Token
     * Mutates a Property of a Token
     * @param {module:model/SDTokenMutateRequest} sDTokenMutateRequest 
     * @param {module:api/TokenEndpointsApi~tokenMutatePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    tokenMutatePut(sDTokenMutateRequest, callback) {
      let postBody = sDTokenMutateRequest;
      // verify the required parameter 'sDTokenMutateRequest' is set
      if (sDTokenMutateRequest === undefined || sDTokenMutateRequest === null) {
        throw new Error("Missing the required parameter 'sDTokenMutateRequest' when calling tokenMutatePut");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/token/mutate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tokenPropsRemoveDelete operation.
     * @callback module:api/TokenEndpointsApi~tokenPropsRemoveDeleteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Token Property
     * Removes a Tokens Property from Your Game
     * @param {String} tokenId Token Id returned from token/create (ex. 5)
     * @param {String} props Stringify Array of token mutable property names ex: '[\"exp\", \"health\"]' }
     * @param {module:api/TokenEndpointsApi~tokenPropsRemoveDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    tokenPropsRemoveDelete(tokenId, props, callback) {
      let postBody = null;
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling tokenPropsRemoveDelete");
      }
      // verify the required parameter 'props' is set
      if (props === undefined || props === null) {
        throw new Error("Missing the required parameter 'props' when calling tokenPropsRemoveDelete");
      }

      let pathParams = {
      };
      let queryParams = {
        'tokenId': tokenId,
        'props': props
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/token/props-remove', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tokenTransferPost operation.
     * @callback module:api/TokenEndpointsApi~tokenTransferPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer Tokens
     * Use this Endpoint to Facilitate Moving Tokens from one Player to Another
     * @param {module:model/SDTokenTransferRequest} sDTokenTransferRequest 
     * @param {module:api/TokenEndpointsApi~tokenTransferPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    tokenTransferPost(sDTokenTransferRequest, callback) {
      let postBody = sDTokenTransferRequest;
      // verify the required parameter 'sDTokenTransferRequest' is set
      if (sDTokenTransferRequest === undefined || sDTokenTransferRequest === null) {
        throw new Error("Missing the required parameter 'sDTokenTransferRequest' when calling tokenTransferPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/token/transfer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tokenWithdrawPost operation.
     * @callback module:api/TokenEndpointsApi~tokenWithdrawPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Withdraw Token
     * Withdraw tokens from a Stardust Wallet
     * @param {module:model/SDTokenWithdrawRequest} sDTokenWithdrawRequest 
     * @param {module:api/TokenEndpointsApi~tokenWithdrawPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    tokenWithdrawPost(sDTokenWithdrawRequest, callback) {
      let postBody = sDTokenWithdrawRequest;
      // verify the required parameter 'sDTokenWithdrawRequest' is set
      if (sDTokenWithdrawRequest === undefined || sDTokenWithdrawRequest === null) {
        throw new Error("Missing the required parameter 'sDTokenWithdrawRequest' when calling tokenWithdrawPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/token/withdraw', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
