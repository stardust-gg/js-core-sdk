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
import SDOrderGetAllResponseTokensRequestedInner from './SDOrderGetAllResponseTokensRequestedInner';

/**
 * The SDOrderGetResponse model module.
 * @module model/SDOrderGetResponse
 * @version 0.0.3
 */
class SDOrderGetResponse {
    /**
     * Constructs a new <code>SDOrderGetResponse</code>.
     * @alias module:model/SDOrderGetResponse
     * @param offeredBy {String} The playerId who initiated the order
     * @param acceptedBy {String} The playerId who is being offered a order
     * @param tokensRequested {Array.<module:model/SDOrderGetAllResponseTokensRequestedInner>} 
     * @param tokensOffered {Array.<module:model/SDOrderGetAllResponseTokensRequestedInner>} 
     * @param status {String} The status of the order ['offer', 'accepted', 'cancelled']
     */
    constructor(offeredBy, acceptedBy, tokensRequested, tokensOffered, status) { 
        
        SDOrderGetResponse.initialize(this, offeredBy, acceptedBy, tokensRequested, tokensOffered, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, offeredBy, acceptedBy, tokensRequested, tokensOffered, status) { 
        obj['offeredBy'] = offeredBy;
        obj['acceptedBy'] = acceptedBy;
        obj['tokensRequested'] = tokensRequested;
        obj['tokensOffered'] = tokensOffered;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>SDOrderGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SDOrderGetResponse} obj Optional instance to populate.
     * @return {module:model/SDOrderGetResponse} The populated <code>SDOrderGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SDOrderGetResponse();

            if (data.hasOwnProperty('offeredBy')) {
                obj['offeredBy'] = ApiClient.convertToType(data['offeredBy'], 'String');
            }
            if (data.hasOwnProperty('acceptedBy')) {
                obj['acceptedBy'] = ApiClient.convertToType(data['acceptedBy'], 'String');
            }
            if (data.hasOwnProperty('tokensRequested')) {
                obj['tokensRequested'] = ApiClient.convertToType(data['tokensRequested'], [SDOrderGetAllResponseTokensRequestedInner]);
            }
            if (data.hasOwnProperty('tokensOffered')) {
                obj['tokensOffered'] = ApiClient.convertToType(data['tokensOffered'], [SDOrderGetAllResponseTokensRequestedInner]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SDOrderGetResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SDOrderGetResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SDOrderGetResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['offeredBy'] && !(typeof data['offeredBy'] === 'string' || data['offeredBy'] instanceof String)) {
            throw new Error("Expected the field `offeredBy` to be a primitive type in the JSON string but got " + data['offeredBy']);
        }
        // ensure the json data is a string
        if (data['acceptedBy'] && !(typeof data['acceptedBy'] === 'string' || data['acceptedBy'] instanceof String)) {
            throw new Error("Expected the field `acceptedBy` to be a primitive type in the JSON string but got " + data['acceptedBy']);
        }
        if (data['tokensRequested']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tokensRequested'])) {
                throw new Error("Expected the field `tokensRequested` to be an array in the JSON data but got " + data['tokensRequested']);
            }
            // validate the optional field `tokensRequested` (array)
            for (const item of data['tokensRequested']) {
                SDOrderGetAllResponseTokensRequestedInner.validateJSON(item);
            };
        }
        if (data['tokensOffered']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tokensOffered'])) {
                throw new Error("Expected the field `tokensOffered` to be an array in the JSON data but got " + data['tokensOffered']);
            }
            // validate the optional field `tokensOffered` (array)
            for (const item of data['tokensOffered']) {
                SDOrderGetAllResponseTokensRequestedInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

SDOrderGetResponse.RequiredProperties = ["offeredBy", "acceptedBy", "tokensRequested", "tokensOffered", "status"];

/**
 * The playerId who initiated the order
 * @member {String} offeredBy
 */
SDOrderGetResponse.prototype['offeredBy'] = undefined;

/**
 * The playerId who is being offered a order
 * @member {String} acceptedBy
 */
SDOrderGetResponse.prototype['acceptedBy'] = undefined;

/**
 * @member {Array.<module:model/SDOrderGetAllResponseTokensRequestedInner>} tokensRequested
 */
SDOrderGetResponse.prototype['tokensRequested'] = undefined;

/**
 * @member {Array.<module:model/SDOrderGetAllResponseTokensRequestedInner>} tokensOffered
 */
SDOrderGetResponse.prototype['tokensOffered'] = undefined;

/**
 * The status of the order ['offer', 'accepted', 'cancelled']
 * @member {String} status
 */
SDOrderGetResponse.prototype['status'] = undefined;






export default SDOrderGetResponse;

