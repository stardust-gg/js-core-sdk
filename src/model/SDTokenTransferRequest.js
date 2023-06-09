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

import ApiClient from '../ApiClient';
import SDTokenBurnRequestTokenObjectsInner from './SDTokenBurnRequestTokenObjectsInner';

/**
 * The SDTokenTransferRequest model module.
 * @module model/SDTokenTransferRequest
 * @version 0.0.3
 */
class SDTokenTransferRequest {
    /**
     * Constructs a new <code>SDTokenTransferRequest</code>.
     * @alias module:model/SDTokenTransferRequest
     * @param fromPlayerId {String} The Player's id, can be found with Player/getId(s). (ex. CzySggxVQz51jciGRFDY7d5BER2fav6TNEnPGjusPJPd)
     * @param toPlayerId {String} The Player's id, can be found with Player/getId(s). (ex. 53ywNSVp46QpiA6S86DLLfeKVfjcSAFxHR2L9j8tnte2)
     * @param tokenObjects {Array.<module:model/SDTokenBurnRequestTokenObjectsInner>} An array of objects of which tokens to transfer (ex. [{tokenId: 5, amount: \"3\"}])
     */
    constructor(fromPlayerId, toPlayerId, tokenObjects) { 
        
        SDTokenTransferRequest.initialize(this, fromPlayerId, toPlayerId, tokenObjects);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fromPlayerId, toPlayerId, tokenObjects) { 
        obj['fromPlayerId'] = fromPlayerId;
        obj['toPlayerId'] = toPlayerId;
        obj['tokenObjects'] = tokenObjects;
    }

    /**
     * Constructs a <code>SDTokenTransferRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTokenTransferRequest} obj Optional instance to populate.
     * @return {module:model/SDTokenTransferRequest} The populated <code>SDTokenTransferRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTokenTransferRequest();

            if (data.hasOwnProperty('fromPlayerId')) {
                obj['fromPlayerId'] = ApiClient.convertToType(data['fromPlayerId'], 'String');
            }
            if (data.hasOwnProperty('toPlayerId')) {
                obj['toPlayerId'] = ApiClient.convertToType(data['toPlayerId'], 'String');
            }
            if (data.hasOwnProperty('tokenObjects')) {
                obj['tokenObjects'] = ApiClient.convertToType(data['tokenObjects'], [SDTokenBurnRequestTokenObjectsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDTokenTransferRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTokenTransferRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDTokenTransferRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fromPlayerId'] && !(typeof data['fromPlayerId'] === 'string' || data['fromPlayerId'] instanceof String)) {
            throw new Error("Expected the field `fromPlayerId` to be a primitive type in the JSON string but got " + data['fromPlayerId']);
        }
        // ensure the json data is a string
        if (data['toPlayerId'] && !(typeof data['toPlayerId'] === 'string' || data['toPlayerId'] instanceof String)) {
            throw new Error("Expected the field `toPlayerId` to be a primitive type in the JSON string but got " + data['toPlayerId']);
        }
        if (data['tokenObjects']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tokenObjects'])) {
                throw new Error("Expected the field `tokenObjects` to be an array in the JSON data but got " + data['tokenObjects']);
            }
            // validate the optional field `tokenObjects` (array)
            for (const item of data['tokenObjects']) {
                SDTokenBurnRequestTokenObjectsInner.validateJSON(item);
            };
        }

        return true;
    }


}

SDTokenTransferRequest.RequiredProperties = ["fromPlayerId", "toPlayerId", "tokenObjects"];

/**
 * The Player's id, can be found with Player/getId(s). (ex. CzySggxVQz51jciGRFDY7d5BER2fav6TNEnPGjusPJPd)
 * @member {String} fromPlayerId
 */
SDTokenTransferRequest.prototype['fromPlayerId'] = undefined;

/**
 * The Player's id, can be found with Player/getId(s). (ex. 53ywNSVp46QpiA6S86DLLfeKVfjcSAFxHR2L9j8tnte2)
 * @member {String} toPlayerId
 */
SDTokenTransferRequest.prototype['toPlayerId'] = undefined;

/**
 * An array of objects of which tokens to transfer (ex. [{tokenId: 5, amount: \"3\"}])
 * @member {Array.<module:model/SDTokenBurnRequestTokenObjectsInner>} tokenObjects
 */
SDTokenTransferRequest.prototype['tokenObjects'] = undefined;






export default SDTokenTransferRequest;

