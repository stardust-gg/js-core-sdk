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
 * The SDPlayerCreateRequest model module.
 * @module model/SDPlayerCreateRequest
 * @version 0.0.3
 */
class SDPlayerCreateRequest {
    /**
     * Constructs a new <code>SDPlayerCreateRequest</code>.
     * @alias module:model/SDPlayerCreateRequest
     * @param uniqueId {String} Identifier for the player
     * @param userData {Object} Metadata about the player
     */
    constructor(uniqueId, userData) { 
        
        SDPlayerCreateRequest.initialize(this, uniqueId, userData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uniqueId, userData) { 
        obj['uniqueId'] = uniqueId;
        obj['userData'] = userData;
    }

    /**
     * Constructs a <code>SDPlayerCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDPlayerCreateRequest} obj Optional instance to populate.
     * @return {module:model/SDPlayerCreateRequest} The populated <code>SDPlayerCreateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDPlayerCreateRequest();

            if (data.hasOwnProperty('uniqueId')) {
                obj['uniqueId'] = ApiClient.convertToType(data['uniqueId'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('userData')) {
                obj['userData'] = ApiClient.convertToType(data['userData'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDPlayerCreateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDPlayerCreateRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDPlayerCreateRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uniqueId'] && !(typeof data['uniqueId'] === 'string' || data['uniqueId'] instanceof String)) {
            throw new Error("Expected the field `uniqueId` to be a primitive type in the JSON string but got " + data['uniqueId']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }

        return true;
    }


}

SDPlayerCreateRequest.RequiredProperties = ["uniqueId", "userData"];

/**
 * Identifier for the player
 * @member {String} uniqueId
 */
SDPlayerCreateRequest.prototype['uniqueId'] = undefined;

/**
 * URL of the player's image
 * @member {String} image
 */
SDPlayerCreateRequest.prototype['image'] = undefined;

/**
 * Metadata about the player
 * @member {Object} userData
 */
SDPlayerCreateRequest.prototype['userData'] = undefined;






export default SDPlayerCreateRequest;
