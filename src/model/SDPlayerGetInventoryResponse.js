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

/**
 * The SDPlayerGetInventoryResponse model module.
 * @module model/SDPlayerGetInventoryResponse
 * @version 0.0.3
 */
class SDPlayerGetInventoryResponse {
    /**
     * Constructs a new <code>SDPlayerGetInventoryResponse</code>.
     * This is the data output json model
     * @alias module:model/SDPlayerGetInventoryResponse
     * @param tokenId {Number} Token ID
     * @param amount {String} u64 Number as String, min: 0, max: 9223372036854775807
     */
    constructor(tokenId, amount) { 
        
        SDPlayerGetInventoryResponse.initialize(this, tokenId, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenId, amount) { 
        obj['tokenId'] = tokenId;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>SDPlayerGetInventoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDPlayerGetInventoryResponse} obj Optional instance to populate.
     * @return {module:model/SDPlayerGetInventoryResponse} The populated <code>SDPlayerGetInventoryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDPlayerGetInventoryResponse();

            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDPlayerGetInventoryResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDPlayerGetInventoryResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDPlayerGetInventoryResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

SDPlayerGetInventoryResponse.RequiredProperties = ["tokenId", "amount"];

/**
 * Token ID
 * @member {Number} tokenId
 */
SDPlayerGetInventoryResponse.prototype['tokenId'] = undefined;

/**
 * u64 Number as String, min: 0, max: 9223372036854775807
 * @member {String} amount
 */
SDPlayerGetInventoryResponse.prototype['amount'] = undefined;






export default SDPlayerGetInventoryResponse;

