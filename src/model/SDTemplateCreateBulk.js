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
import SDTemplateCreateBulkProps from './SDTemplateCreateBulkProps';

/**
 * The SDTemplateCreateBulk model module.
 * @module model/SDTemplateCreateBulk
 * @version 0.0.3
 */
class SDTemplateCreateBulk {
    /**
     * Constructs a new <code>SDTemplateCreateBulk</code>.
     * @alias module:model/SDTemplateCreateBulk
     * @param name {String} The name of the template (ex. Bronze Axe)
     * @param image {String} image url
     */
    constructor(name, image) { 
        
        SDTemplateCreateBulk.initialize(this, name, image);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, image) { 
        obj['name'] = name;
        obj['image'] = image;
    }

    /**
     * Constructs a <code>SDTemplateCreateBulk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTemplateCreateBulk} obj Optional instance to populate.
     * @return {module:model/SDTemplateCreateBulk} The populated <code>SDTemplateCreateBulk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTemplateCreateBulk();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('cap')) {
                obj['cap'] = ApiClient.convertToType(data['cap'], 'String');
            }
            if (data.hasOwnProperty('contractType')) {
                obj['contractType'] = ApiClient.convertToType(data['contractType'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('activeListing')) {
                obj['activeListing'] = ApiClient.convertToType(data['activeListing'], 'Boolean');
            }
            if (data.hasOwnProperty('ownerAddress')) {
                obj['ownerAddress'] = ApiClient.convertToType(data['ownerAddress'], 'String');
            }
            if (data.hasOwnProperty('props')) {
                obj['props'] = SDTemplateCreateBulkProps.constructFromObject(data['props']);
            }
            if (data.hasOwnProperty('publicContractMetadata')) {
                obj['publicContractMetadata'] = ApiClient.convertToType(data['publicContractMetadata'], Object);
            }
            if (data.hasOwnProperty('publicTokenMetadata')) {
                obj['publicTokenMetadata'] = ApiClient.convertToType(data['publicTokenMetadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDTemplateCreateBulk</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTemplateCreateBulk</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDTemplateCreateBulk.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['cap'] && !(typeof data['cap'] === 'string' || data['cap'] instanceof String)) {
            throw new Error("Expected the field `cap` to be a primitive type in the JSON string but got " + data['cap']);
        }
        // ensure the json data is a string
        if (data['contractType'] && !(typeof data['contractType'] === 'string' || data['contractType'] instanceof String)) {
            throw new Error("Expected the field `contractType` to be a primitive type in the JSON string but got " + data['contractType']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['ownerAddress'] && !(typeof data['ownerAddress'] === 'string' || data['ownerAddress'] instanceof String)) {
            throw new Error("Expected the field `ownerAddress` to be a primitive type in the JSON string but got " + data['ownerAddress']);
        }
        // validate the optional field `props`
        if (data['props']) { // data not null
          SDTemplateCreateBulkProps.validateJSON(data['props']);
        }

        return true;
    }


}

SDTemplateCreateBulk.RequiredProperties = ["name", "image"];

/**
 * The name of the template (ex. Bronze Axe)
 * @member {String} name
 */
SDTemplateCreateBulk.prototype['name'] = undefined;

/**
 * u96 Number as String (ex. 200000000), default 39614081257132168796771975168 
 * @member {String} cap
 */
SDTemplateCreateBulk.prototype['cap'] = undefined;

/**
 * The type of custom contract to use for this template. Default will use a shared contract.
 * @member {module:model/SDTemplateCreateBulk.ContractTypeEnum} contractType
 */
SDTemplateCreateBulk.prototype['contractType'] = undefined;

/**
 * FT is a currency where every instance is the same, NFT is where every token instance differes (ex. FT)
 * @member {module:model/SDTemplateCreateBulk.TypeEnum} type
 */
SDTemplateCreateBulk.prototype['type'] = undefined;

/**
 * image url
 * @member {String} image
 */
SDTemplateCreateBulk.prototype['image'] = undefined;

/**
 * Description of template
 * @member {String} description
 */
SDTemplateCreateBulk.prototype['description'] = undefined;

/**
 * Set if the Template is active or not
 * @member {Boolean} activeListing
 */
SDTemplateCreateBulk.prototype['activeListing'] = undefined;

/**
 * Blockchain address to set as owner of the custom contract, if contractType is passed in.
 * @member {String} ownerAddress
 */
SDTemplateCreateBulk.prototype['ownerAddress'] = undefined;

/**
 * @member {module:model/SDTemplateCreateBulkProps} props
 */
SDTemplateCreateBulk.prototype['props'] = undefined;

/**
 * Returned to marketplaces as contract metadata
 * @member {Object} publicContractMetadata
 */
SDTemplateCreateBulk.prototype['publicContractMetadata'] = undefined;

/**
 * Inherited by tokens, and returned to marketplaces as token metadata
 * @member {Object} publicTokenMetadata
 */
SDTemplateCreateBulk.prototype['publicTokenMetadata'] = undefined;





/**
 * Allowed values for the <code>contractType</code> property.
 * @enum {String}
 * @readonly
 */
SDTemplateCreateBulk['ContractTypeEnum'] = {

    /**
     * value: "ERC721"
     * @const
     */
    "ERC721": "ERC721"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SDTemplateCreateBulk['TypeEnum'] = {

    /**
     * value: "FT"
     * @const
     */
    "FT": "FT",

    /**
     * value: "NFT"
     * @const
     */
    "NFT": "NFT"
};



export default SDTemplateCreateBulk;

