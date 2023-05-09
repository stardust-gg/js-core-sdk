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
 * The SDOrderCancelRequest model module.
 * @module model/SDOrderCancelRequest
 * @version 0.0.3
 */
class SDOrderCancelRequest {
    /**
     * Constructs a new <code>SDOrderCancelRequest</code>.
     * @alias module:model/SDOrderCancelRequest
     * @param gameId {Number} Game ID Number (unsigned 32 bit integer)
     * @param orderId {Number} Order ID Number (unsigned 32 bit integer)
     */
    constructor(gameId, orderId) { 
        
        SDOrderCancelRequest.initialize(this, gameId, orderId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gameId, orderId) { 
        obj['gameId'] = gameId;
        obj['orderId'] = orderId;
    }

    /**
     * Constructs a <code>SDOrderCancelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDOrderCancelRequest} obj Optional instance to populate.
     * @return {module:model/SDOrderCancelRequest} The populated <code>SDOrderCancelRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDOrderCancelRequest();

            if (data.hasOwnProperty('fromPlayerId')) {
                obj['fromPlayerId'] = ApiClient.convertToType(data['fromPlayerId'], 'String');
            }
            if (data.hasOwnProperty('gameId')) {
                obj['gameId'] = ApiClient.convertToType(data['gameId'], 'Number');
            }
            if (data.hasOwnProperty('orderId')) {
                obj['orderId'] = ApiClient.convertToType(data['orderId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDOrderCancelRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDOrderCancelRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDOrderCancelRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fromPlayerId'] && !(typeof data['fromPlayerId'] === 'string' || data['fromPlayerId'] instanceof String)) {
            throw new Error("Expected the field `fromPlayerId` to be a primitive type in the JSON string but got " + data['fromPlayerId']);
        }

        return true;
    }


}

SDOrderCancelRequest.RequiredProperties = ["gameId", "orderId"];

/**
 * The Player's id, can be found with Player/getId(s). Also returned from player/create (ex. CzySggxVQz51jciGRFDY7d5BER2fav6TNEnPGjusPJPd)
 * @member {String} fromPlayerId
 */
SDOrderCancelRequest.prototype['fromPlayerId'] = undefined;

/**
 * Game ID Number (unsigned 32 bit integer)
 * @member {Number} gameId
 */
SDOrderCancelRequest.prototype['gameId'] = undefined;

/**
 * Order ID Number (unsigned 32 bit integer)
 * @member {Number} orderId
 */
SDOrderCancelRequest.prototype['orderId'] = undefined;






export default SDOrderCancelRequest;
