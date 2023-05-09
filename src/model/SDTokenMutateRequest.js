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
 * The SDTokenMutateRequest model module.
 * @module model/SDTokenMutateRequest
 * @version 0.0.3
 */
class SDTokenMutateRequest {
    /**
     * Constructs a new <code>SDTokenMutateRequest</code>.
     * @alias module:model/SDTokenMutateRequest
     * @param tokenId {Number} Specifies which tokenId you want to manipulate (ex. 11)
     * @param props {Object} Specifies which properties you want to change (ex. {prop1: 5, prop2: 6, prop3: 7})
     */
    constructor(tokenId, props) { 
        
        SDTokenMutateRequest.initialize(this, tokenId, props);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenId, props) { 
        obj['tokenId'] = tokenId;
        obj['props'] = props;
    }

    /**
     * Constructs a <code>SDTokenMutateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTokenMutateRequest} obj Optional instance to populate.
     * @return {module:model/SDTokenMutateRequest} The populated <code>SDTokenMutateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTokenMutateRequest();

            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'Number');
            }
            if (data.hasOwnProperty('props')) {
                obj['props'] = ApiClient.convertToType(data['props'], Object);
            }
            if (data.hasOwnProperty('publicMetadata')) {
                obj['publicMetadata'] = ApiClient.convertToType(data['publicMetadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDTokenMutateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTokenMutateRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDTokenMutateRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SDTokenMutateRequest.RequiredProperties = ["tokenId", "props"];

/**
 * Specifies which tokenId you want to manipulate (ex. 11)
 * @member {Number} tokenId
 */
SDTokenMutateRequest.prototype['tokenId'] = undefined;

/**
 * Specifies which properties you want to change (ex. {prop1: 5, prop2: 6, prop3: 7})
 * @member {Object} props
 */
SDTokenMutateRequest.prototype['props'] = undefined;

/**
 * Returned to marketplaces as token metadata
 * @member {Object} publicMetadata
 */
SDTokenMutateRequest.prototype['publicMetadata'] = undefined;






export default SDTokenMutateRequest;
