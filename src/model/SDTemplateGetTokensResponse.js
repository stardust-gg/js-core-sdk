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
import SDTemplateGetTokensResponsePlayer from './SDTemplateGetTokensResponsePlayer';
import SDTemplateGetTokensResponseToken from './SDTemplateGetTokensResponseToken';

/**
 * The SDTemplateGetTokensResponse model module.
 * @module model/SDTemplateGetTokensResponse
 * @version 0.0.3
 */
class SDTemplateGetTokensResponse {
    /**
     * Constructs a new <code>SDTemplateGetTokensResponse</code>.
     * Token data
     * @alias module:model/SDTemplateGetTokensResponse
     * @param token {module:model/SDTemplateGetTokensResponseToken} 
     * @param player {module:model/SDTemplateGetTokensResponsePlayer} 
     */
    constructor(token, player) { 
        
        SDTemplateGetTokensResponse.initialize(this, token, player);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token, player) { 
        obj['token'] = token;
        obj['player'] = player;
    }

    /**
     * Constructs a <code>SDTemplateGetTokensResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDTemplateGetTokensResponse} obj Optional instance to populate.
     * @return {module:model/SDTemplateGetTokensResponse} The populated <code>SDTemplateGetTokensResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDTemplateGetTokensResponse();

            if (data.hasOwnProperty('token')) {
                obj['token'] = SDTemplateGetTokensResponseToken.constructFromObject(data['token']);
            }
            if (data.hasOwnProperty('player')) {
                obj['player'] = SDTemplateGetTokensResponsePlayer.constructFromObject(data['player']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDTemplateGetTokensResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDTemplateGetTokensResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDTemplateGetTokensResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `token`
        if (data['token']) { // data not null
          SDTemplateGetTokensResponseToken.validateJSON(data['token']);
        }
        // validate the optional field `player`
        if (data['player']) { // data not null
          SDTemplateGetTokensResponsePlayer.validateJSON(data['player']);
        }

        return true;
    }


}

SDTemplateGetTokensResponse.RequiredProperties = ["token", "player"];

/**
 * @member {module:model/SDTemplateGetTokensResponseToken} token
 */
SDTemplateGetTokensResponse.prototype['token'] = undefined;

/**
 * @member {module:model/SDTemplateGetTokensResponsePlayer} player
 */
SDTemplateGetTokensResponse.prototype['player'] = undefined;






export default SDTemplateGetTokensResponse;

