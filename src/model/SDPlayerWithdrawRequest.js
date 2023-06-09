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
import SDPlayerWithdrawObject from './SDPlayerWithdrawObject';

/**
 * The SDPlayerWithdrawRequest model module.
 * @module model/SDPlayerWithdrawRequest
 * @version 0.0.3
 */
class SDPlayerWithdrawRequest {
    /**
     * Constructs a new <code>SDPlayerWithdrawRequest</code>.
     * @alias module:model/SDPlayerWithdrawRequest
     * @param address {String} Blockchain Address
     * @param playerId {String} The Player's id, can be found with Player/getId(s). Also returned from player/create (ex. CzySggxVQz51jciGRFDY7d5BER2fav6TNEnPGjusPJPd)
     * @param tokenObjects {Array.<module:model/SDPlayerWithdrawObject>} array of Token objects
     */
    constructor(address, playerId, tokenObjects) { 
        
        SDPlayerWithdrawRequest.initialize(this, address, playerId, tokenObjects);
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
     * Constructs a <code>SDPlayerWithdrawRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDPlayerWithdrawRequest} obj Optional instance to populate.
     * @return {module:model/SDPlayerWithdrawRequest} The populated <code>SDPlayerWithdrawRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDPlayerWithdrawRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('playerId')) {
                obj['playerId'] = ApiClient.convertToType(data['playerId'], 'String');
            }
            if (data.hasOwnProperty('tokenObjects')) {
                obj['tokenObjects'] = ApiClient.convertToType(data['tokenObjects'], [SDPlayerWithdrawObject]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDPlayerWithdrawRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDPlayerWithdrawRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDPlayerWithdrawRequest.RequiredProperties) {
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
                SDPlayerWithdrawObject.validateJSON(item);
            };
        }

        return true;
    }


}

SDPlayerWithdrawRequest.RequiredProperties = ["address", "playerId", "tokenObjects"];

/**
 * Blockchain Address
 * @member {String} address
 */
SDPlayerWithdrawRequest.prototype['address'] = undefined;

/**
 * The Player's id, can be found with Player/getId(s). Also returned from player/create (ex. CzySggxVQz51jciGRFDY7d5BER2fav6TNEnPGjusPJPd)
 * @member {String} playerId
 */
SDPlayerWithdrawRequest.prototype['playerId'] = undefined;

/**
 * array of Token objects
 * @member {Array.<module:model/SDPlayerWithdrawObject>} tokenObjects
 */
SDPlayerWithdrawRequest.prototype['tokenObjects'] = undefined;






export default SDPlayerWithdrawRequest;

