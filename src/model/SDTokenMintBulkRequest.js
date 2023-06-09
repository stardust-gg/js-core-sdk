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
import SDTokenMintBulkTokenObject from './SDTokenMintBulkTokenObject';

/**
 * The SDTokenMintBulkRequest model module.
 * @module model/SDTokenMintBulkRequest
 * @version 0.0.3
 */
class SDTokenMintBulkRequest {
    /**
     * Constructs a new <code>SDTokenMintBulkRequest</code>.
     * @alias module:model/SDTokenMintBulkRequest
     * @param playerId {String} The player ID that was returned from player/create
     * @param tokenObjects {Array.<module:model/SDTokenMintBulkTokenObject>} array of Token objects
     */
    constructor(playerId, tokenObjects) { 
        
        SDTokenMintBulkRequest.initialize(this, playerId, tokenObjects);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, playerId, tokenObjects) { 
        obj['playerId'] = playerId;
        obj['tokenObjects'] = tokenObjects;
    }

    /**
     * Constructs a <code>SDTokenMintBulkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTokenMintBulkRequest} obj Optional instance to populate.
     * @return {module:model/SDTokenMintBulkRequest} The populated <code>SDTokenMintBulkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTokenMintBulkRequest();

            if (data.hasOwnProperty('playerId')) {
                obj['playerId'] = ApiClient.convertToType(data['playerId'], 'String');
            }
            if (data.hasOwnProperty('tokenObjects')) {
                obj['tokenObjects'] = ApiClient.convertToType(data['tokenObjects'], [SDTokenMintBulkTokenObject]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDTokenMintBulkRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTokenMintBulkRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDTokenMintBulkRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
                SDTokenMintBulkTokenObject.validateJSON(item);
            };
        }

        return true;
    }


}

SDTokenMintBulkRequest.RequiredProperties = ["playerId", "tokenObjects"];

/**
 * The player ID that was returned from player/create
 * @member {String} playerId
 */
SDTokenMintBulkRequest.prototype['playerId'] = undefined;

/**
 * array of Token objects
 * @member {Array.<module:model/SDTokenMintBulkTokenObject>} tokenObjects
 */
SDTokenMintBulkRequest.prototype['tokenObjects'] = undefined;






export default SDTokenMintBulkRequest;

