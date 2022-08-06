/**
 * LinkSmart Thing Directory
 * API documetnation of the [LinkSmart Thing Directory](https://github.com/linksmart/thing-directory)
 *
 * The version of the OpenAPI document: 1.0.0-beta.22
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ThingDescriptionPage model module.
 * @module model/ThingDescriptionPage
 * @version 1.0.0-beta.22
 */
class ThingDescriptionPage {
    /**
     * Constructs a new <code>ThingDescriptionPage</code>.
     * @alias module:model/ThingDescriptionPage
     */
    constructor() { 
        
        ThingDescriptionPage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingDescriptionPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingDescriptionPage} obj Optional instance to populate.
     * @return {module:model/ThingDescriptionPage} The populated <code>ThingDescriptionPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingDescriptionPage();

            if (data.hasOwnProperty('@context')) {
                obj['@context'] = ApiClient.convertToType(data['@context'], Object);
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], Object);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Object]);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('perPage')) {
                obj['perPage'] = ApiClient.convertToType(data['perPage'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} @context
 */
ThingDescriptionPage.prototype['@context'] = undefined;

/**
 * @member {Object} @type
 */
ThingDescriptionPage.prototype['@type'] = undefined;

/**
 * @member {Array.<Object>} items
 */
ThingDescriptionPage.prototype['items'] = undefined;

/**
 * @member {Number} page
 */
ThingDescriptionPage.prototype['page'] = undefined;

/**
 * @member {Number} perPage
 */
ThingDescriptionPage.prototype['perPage'] = undefined;

/**
 * @member {Number} total
 */
ThingDescriptionPage.prototype['total'] = undefined;






export default ThingDescriptionPage;
