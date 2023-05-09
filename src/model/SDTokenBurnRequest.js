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
 * The SDTokenBurnRequest model module.
 * @module model/SDTokenBurnRequest
 * @version 0.0.3
 */
class SDTokenBurnRequest {
    /**
     * Constructs a new <code>SDTokenBurnRequest</code>.
     * @alias module:model/SDTokenBurnRequest
     * @param playerId {String} The Player's id, can be found with Player/getId(s). (ex. CzySggxVQz51jciGRFDY7d5BER2fav6TNEnPGjusPJPd)
     * @param tokenObjects {Array.<module:model/SDTokenBurnRequestTokenObjectsInner>} An an array of objects to burn (ex. [{tokenId: 5, amount: \"6\"}])
     */
    constructor(playerId, tokenObjects) { 
        
        SDTokenBurnRequest.initialize(this, playerId, tokenObjects);
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
     * Constructs a <code>SDTokenBurnRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTokenBurnRequest} obj Optional instance to populate.
     * @return {module:model/SDTokenBurnRequest} The populated <code>SDTokenBurnRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTokenBurnRequest();

            if (data.hasOwnProperty('playerId')) {
                obj['playerId'] = ApiClient.convertToType(data['playerId'], 'String');
            }
            if (data.hasOwnProperty('tokenObjects')) {
                obj['tokenObjects'] = ApiClient.convertToType(data['tokenObjects'], [SDTokenBurnRequestTokenObjectsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDTokenBurnRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTokenBurnRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDTokenBurnRequest.RequiredProperties) {
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
                SDTokenBurnRequestTokenObjectsInner.validateJSON(item);
            };
        }

        return true;
    }


}

SDTokenBurnRequest.RequiredProperties = ["playerId", "tokenObjects"];

/**
 * The Player's id, can be found with Player/getId(s). (ex. CzySggxVQz51jciGRFDY7d5BER2fav6TNEnPGjusPJPd)
 * @member {String} playerId
 */
SDTokenBurnRequest.prototype['playerId'] = undefined;

/**
 * An an array of objects to burn (ex. [{tokenId: 5, amount: \"6\"}])
 * @member {Array.<module:model/SDTokenBurnRequestTokenObjectsInner>} tokenObjects
 */
SDTokenBurnRequest.prototype['tokenObjects'] = undefined;






export default SDTokenBurnRequest;
