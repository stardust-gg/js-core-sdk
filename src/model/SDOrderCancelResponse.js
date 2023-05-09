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
 * The SDOrderCancelResponse model module.
 * @module model/SDOrderCancelResponse
 * @version 0.0.3
 */
class SDOrderCancelResponse {
    /**
     * Constructs a new <code>SDOrderCancelResponse</code>.
     * @alias module:model/SDOrderCancelResponse
     * @param id {Number} Order ID Number (unsigned 32 bit integer)
     */
    constructor(id) { 
        
        SDOrderCancelResponse.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>SDOrderCancelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDOrderCancelResponse} obj Optional instance to populate.
     * @return {module:model/SDOrderCancelResponse} The populated <code>SDOrderCancelResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDOrderCancelResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDOrderCancelResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDOrderCancelResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDOrderCancelResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SDOrderCancelResponse.RequiredProperties = ["id"];

/**
 * Order ID Number (unsigned 32 bit integer)
 * @member {Number} id
 */
SDOrderCancelResponse.prototype['id'] = undefined;






export default SDOrderCancelResponse;
