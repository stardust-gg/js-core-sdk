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
import SDTemplateGetAllResponseProps from './SDTemplateGetAllResponseProps';

/**
 * The SDTemplateGetAllResponse model module.
 * @module model/SDTemplateGetAllResponse
 * @version 0.0.3
 */
class SDTemplateGetAllResponse {
    /**
     * Constructs a new <code>SDTemplateGetAllResponse</code>.
     * @alias module:model/SDTemplateGetAllResponse
     * @param gameId {Number} Game ID Number (unsigned 32 bit integer)
     * @param id {Number} 
     * @param cap {String} u96 Number as String, min: 0, max: 39614081257132168796771975167
     * @param totalSupply {String} u96 Number as String, min: 0, max: 39614081257132168796771975167
     * @param name {String} The name of the template
     * @param type {module:model/SDTemplateGetAllResponse.TypeEnum} 
     * @param props {module:model/SDTemplateGetAllResponseProps} 
     */
    constructor(gameId, id, cap, totalSupply, name, type, props) { 
        
        SDTemplateGetAllResponse.initialize(this, gameId, id, cap, totalSupply, name, type, props);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gameId, id, cap, totalSupply, name, type, props) { 
        obj['gameId'] = gameId;
        obj['_id'] = id;
        obj['cap'] = cap;
        obj['totalSupply'] = totalSupply;
        obj['name'] = name;
        obj['type'] = type;
        obj['props'] = props;
    }

    /**
     * Constructs a <code>SDTemplateGetAllResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTemplateGetAllResponse} obj Optional instance to populate.
     * @return {module:model/SDTemplateGetAllResponse} The populated <code>SDTemplateGetAllResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTemplateGetAllResponse();

            if (data.hasOwnProperty('gameId')) {
                obj['gameId'] = ApiClient.convertToType(data['gameId'], 'Number');
            }
            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'Number');
            }
            if (data.hasOwnProperty('cap')) {
                obj['cap'] = ApiClient.convertToType(data['cap'], 'String');
            }
            if (data.hasOwnProperty('contractType')) {
                obj['contractType'] = ApiClient.convertToType(data['contractType'], 'String');
            }
            if (data.hasOwnProperty('totalSupply')) {
                obj['totalSupply'] = ApiClient.convertToType(data['totalSupply'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('props')) {
                obj['props'] = SDTemplateGetAllResponseProps.constructFromObject(data['props']);
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
     * Validates the JSON data with respect to <code>SDTemplateGetAllResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTemplateGetAllResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDTemplateGetAllResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['totalSupply'] && !(typeof data['totalSupply'] === 'string' || data['totalSupply'] instanceof String)) {
            throw new Error("Expected the field `totalSupply` to be a primitive type in the JSON string but got " + data['totalSupply']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `props`
        if (data['props']) { // data not null
          SDTemplateGetAllResponseProps.validateJSON(data['props']);
        }

        return true;
    }


}

SDTemplateGetAllResponse.RequiredProperties = ["gameId", "_id", "cap", "totalSupply", "name", "type", "props"];

/**
 * Game ID Number (unsigned 32 bit integer)
 * @member {Number} gameId
 */
SDTemplateGetAllResponse.prototype['gameId'] = undefined;

/**
 * @member {Number} _id
 */
SDTemplateGetAllResponse.prototype['_id'] = undefined;

/**
 * u96 Number as String, min: 0, max: 39614081257132168796771975167
 * @member {String} cap
 */
SDTemplateGetAllResponse.prototype['cap'] = undefined;

/**
 * The type of custom contract bieng used for this template.
 * @member {module:model/SDTemplateGetAllResponse.ContractTypeEnum} contractType
 */
SDTemplateGetAllResponse.prototype['contractType'] = undefined;

/**
 * u96 Number as String, min: 0, max: 39614081257132168796771975167
 * @member {String} totalSupply
 */
SDTemplateGetAllResponse.prototype['totalSupply'] = undefined;

/**
 * The name of the template
 * @member {String} name
 */
SDTemplateGetAllResponse.prototype['name'] = undefined;

/**
 * @member {module:model/SDTemplateGetAllResponse.TypeEnum} type
 */
SDTemplateGetAllResponse.prototype['type'] = undefined;

/**
 * @member {module:model/SDTemplateGetAllResponseProps} props
 */
SDTemplateGetAllResponse.prototype['props'] = undefined;

/**
 * Returned to marketplaces as contract metadata
 * @member {Object} publicContractMetadata
 */
SDTemplateGetAllResponse.prototype['publicContractMetadata'] = undefined;

/**
 * Inherited by tokens, and returned to marketplaces as token metadata
 * @member {Object} publicTokenMetadata
 */
SDTemplateGetAllResponse.prototype['publicTokenMetadata'] = undefined;





/**
 * Allowed values for the <code>contractType</code> property.
 * @enum {String}
 * @readonly
 */
SDTemplateGetAllResponse['ContractTypeEnum'] = {

    /**
     * value: "ERC721"
     * @const
     */
    "ERC721": "ERC721",

    /**
     * value: "internal-mint"
     * @const
     */
    "internal-mint": "internal-mint",

    /**
     * value: "external-no-mint"
     * @const
     */
    "external-no-mint": "external-no-mint"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SDTemplateGetAllResponse['TypeEnum'] = {

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



export default SDTemplateGetAllResponse;

