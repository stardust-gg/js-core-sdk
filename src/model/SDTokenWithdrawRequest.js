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
import SDTokenWithdrawObject from './SDTokenWithdrawObject';

/**
 * The SDTokenWithdrawRequest model module.
 * @module model/SDTokenWithdrawRequest
 * @version 0.0.3
 */
class SDTokenWithdrawRequest {
    /**
     * Constructs a new <code>SDTokenWithdrawRequest</code>.
     * @alias module:model/SDTokenWithdrawRequest
     * @param address {String} External (non-custodial) blockchain wallet address
     * @param playerId {String} The Player's id, can be found with Player/getId(s) in uuid format. Also returned from player/create (ex. XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX)
     * @param tokenObjects {Array.<module:model/SDTokenWithdrawObject>} Array of Token objects
     */
    constructor(address, playerId, tokenObjects) { 
        
        SDTokenWithdrawRequest.initialize(this, address, playerId, tokenObjects);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, playerId, tokenObjects) { 
        obj['address'] = address;
        obj['playerId'] = playerId;
        obj['tokenObjects'] = tokenObjects;
    }

    /**
     * Constructs a <code>SDTokenWithdrawRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTokenWithdrawRequest} obj Optional instance to populate.
     * @return {module:model/SDTokenWithdrawRequest} The populated <code>SDTokenWithdrawRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTokenWithdrawRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('playerId')) {
                obj['playerId'] = ApiClient.convertToType(data['playerId'], 'String');
            }
            if (data.hasOwnProperty('tokenObjects')) {
                obj['tokenObjects'] = ApiClient.convertToType(data['tokenObjects'], [SDTokenWithdrawObject]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDTokenWithdrawRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTokenWithdrawRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDTokenWithdrawRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['playerId'] && !(typeof data['playerId'] === 'string' || data['playerId'] instanceof String)) {
            throw new Error("Expected the field `playerId` to be a primitive type in the JSON string but got " + data['playerId']);
        }
        if (data['tokenObjects']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tokenObjects'])) {
                throw new Error("Expected the field `tokenObjects` to be an array in the JSON data but got " + data['tokenObjects']);
            }
            // validate the optional field `tokenObjects` (array)
            for (const item of data['tokenObjects']) {
                SDTokenWithdrawObject.validateJSON(item);
            };
        }

        return true;
    }


}

SDTokenWithdrawRequest.RequiredProperties = ["address", "playerId", "tokenObjects"];

/**
 * External (non-custodial) blockchain wallet address
 * @member {String} address
 */
SDTokenWithdrawRequest.prototype['address'] = undefined;

/**
 * The Player's id, can be found with Player/getId(s) in uuid format. Also returned from player/create (ex. XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX)
 * @member {String} playerId
 */
SDTokenWithdrawRequest.prototype['playerId'] = undefined;

/**
 * Array of Token objects
 * @member {Array.<module:model/SDTokenWithdrawObject>} tokenObjects
 */
SDTokenWithdrawRequest.prototype['tokenObjects'] = undefined;






export default SDTokenWithdrawRequest;

