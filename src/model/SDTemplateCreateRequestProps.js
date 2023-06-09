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
 * The SDTemplateCreateRequestProps model module.
 * @module model/SDTemplateCreateRequestProps
 * @version 0.0.3
 */
class SDTemplateCreateRequestProps {
    /**
     * Constructs a new <code>SDTemplateCreateRequestProps</code>.
     * @alias module:model/SDTemplateCreateRequestProps
     */
    constructor() { 
        
        SDTemplateCreateRequestProps.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SDTemplateCreateRequestProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTemplateCreateRequestProps} obj Optional instance to populate.
     * @return {module:model/SDTemplateCreateRequestProps} The populated <code>SDTemplateCreateRequestProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTemplateCreateRequestProps();

            if (data.hasOwnProperty('immutable')) {
                obj['immutable'] = ApiClient.convertToType(data['immutable'], Object);
            }
            if (data.hasOwnProperty('mutable')) {
                obj['mutable'] = ApiClient.convertToType(data['mutable'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDTemplateCreateRequestProps</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTemplateCreateRequestProps</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Properties for immutable on the Template
 * @member {Object} immutable
 */
SDTemplateCreateRequestProps.prototype['immutable'] = undefined;

/**
 * Properties for mutable on the Template
 * @member {Object} mutable
 */
SDTemplateCreateRequestProps.prototype['mutable'] = undefined;






export default SDTemplateCreateRequestProps;

