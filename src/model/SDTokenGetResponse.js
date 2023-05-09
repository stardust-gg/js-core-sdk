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
import SDTemplateGetTokensResponseTokenProps from './SDTemplateGetTokensResponseTokenProps';

/**
 * The SDTokenGetResponse model module.
 * @module model/SDTokenGetResponse
 * @version 0.0.3
 */
class SDTokenGetResponse {
    /**
     * Constructs a new <code>SDTokenGetResponse</code>.
     * token data
     * @alias module:model/SDTokenGetResponse
     * @param gameId {Number} Game ID Number (unsigned 32 bit integer)
     * @param templateId {Number} Template ID Number (unsigned 32 bit integer)
     * @param id {Number} The ID of the token created
     * @param flags {Number} 
     * @param props {module:model/SDTemplateGetTokensResponseTokenProps} 
     */
    constructor(gameId, templateId, id, flags, props) { 
        
        SDTokenGetResponse.initialize(this, gameId, templateId, id, flags, props);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gameId, templateId, id, flags, props) { 
        obj['gameId'] = gameId;
        obj['templateId'] = templateId;
        obj['id'] = id;
        obj['flags'] = flags;
        obj['props'] = props;
    }

    /**
     * Constructs a <code>SDTokenGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTokenGetResponse} obj Optional instance to populate.
     * @return {module:model/SDTokenGetResponse} The populated <code>SDTokenGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTokenGetResponse();

            if (data.hasOwnProperty('gameId')) {
                obj['gameId'] = ApiClient.convertToType(data['gameId'], 'Number');
            }
            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('flags')) {
                obj['flags'] = ApiClient.convertToType(data['flags'], 'Number');
            }
            if (data.hasOwnProperty('props')) {
                obj['props'] = SDTemplateGetTokensResponseTokenProps.constructFromObject(data['props']);
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('publicMetadata')) {
                obj['publicMetadata'] = ApiClient.convertToType(data['publicMetadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDTokenGetResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTokenGetResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDTokenGetResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `props`
        if (data['props']) { // data not null
          SDTemplateGetTokensResponseTokenProps.validateJSON(data['props']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }

        return true;
    }


}

SDTokenGetResponse.RequiredProperties = ["gameId", "templateId", "id", "flags", "props"];

/**
 * Game ID Number (unsigned 32 bit integer)
 * @member {Number} gameId
 */
SDTokenGetResponse.prototype['gameId'] = undefined;

/**
 * Template ID Number (unsigned 32 bit integer)
 * @member {Number} templateId
 */
SDTokenGetResponse.prototype['templateId'] = undefined;

/**
 * The ID of the token created
 * @member {Number} id
 */
SDTokenGetResponse.prototype['id'] = undefined;

/**
 * The name of the template
 * @member {String} name
 */
SDTokenGetResponse.prototype['name'] = undefined;

/**
 * @member {Number} flags
 */
SDTokenGetResponse.prototype['flags'] = undefined;

/**
 * @member {module:model/SDTemplateGetTokensResponseTokenProps} props
 */
SDTokenGetResponse.prototype['props'] = undefined;

/**
 * Game Owner's Public Key
 * @member {String} owner
 */
SDTokenGetResponse.prototype['owner'] = undefined;

/**
 * Returned to marketplaces as token metadata
 * @member {Object} publicMetadata
 */
SDTokenGetResponse.prototype['publicMetadata'] = undefined;






export default SDTokenGetResponse;

