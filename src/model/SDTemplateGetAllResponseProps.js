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
 * The SDTemplateGetAllResponseProps model module.
 * @module model/SDTemplateGetAllResponseProps
 * @version 0.0.3
 */
class SDTemplateGetAllResponseProps {
    /**
     * Constructs a new <code>SDTemplateGetAllResponseProps</code>.
     * @alias module:model/SDTemplateGetAllResponseProps
     * @param immutable {Object} 
     * @param mutable {Object} 
     * @param mutable {Object} 
     */
    constructor(immutable, mutable, mutable) { 
        
        SDTemplateGetAllResponseProps.initialize(this, immutable, mutable, mutable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, immutable, mutable, mutable) { 
        obj['immutable'] = immutable;
        obj['mutable'] = mutable;
        obj['$mutable'] = mutable;
    }

    /**
     * Constructs a <code>SDTemplateGetAllResponseProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTemplateGetAllResponseProps} obj Optional instance to populate.
     * @return {module:model/SDTemplateGetAllResponseProps} The populated <code>SDTemplateGetAllResponseProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTemplateGetAllResponseProps();

            if (data.hasOwnProperty('immutable')) {
                obj['immutable'] = ApiClient.convertToType(data['immutable'], Object);
            }
            if (data.hasOwnProperty('mutable')) {
                obj['mutable'] = ApiClient.convertToType(data['mutable'], Object);
            }
            if (data.hasOwnProperty('$mutable')) {
                obj['$mutable'] = ApiClient.convertToType(data['$mutable'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDTemplateGetAllResponseProps</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTemplateGetAllResponseProps</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDTemplateGetAllResponseProps.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SDTemplateGetAllResponseProps.RequiredProperties = ["immutable", "mutable", "$mutable"];

/**
 * @member {Object} immutable
 */
SDTemplateGetAllResponseProps.prototype['immutable'] = undefined;

/**
 * @member {Object} mutable
 */
SDTemplateGetAllResponseProps.prototype['mutable'] = undefined;

/**
 * @member {Object} $mutable
 */
SDTemplateGetAllResponseProps.prototype['$mutable'] = undefined;






export default SDTemplateGetAllResponseProps;

