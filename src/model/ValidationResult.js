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
 * The ValidationResult model module.
 * @module model/ValidationResult
 * @version 1.0.0-beta.22
 */
class ValidationResult {
    /**
     * Constructs a new <code>ValidationResult</code>.
     * @alias module:model/ValidationResult
     */
    constructor() { 
        
        ValidationResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationResult} obj Optional instance to populate.
     * @return {module:model/ValidationResult} The populated <code>ValidationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidationResult();

            if (data.hasOwnProperty('valid')) {
                obj['valid'] = ApiClient.convertToType(data['valid'], 'Boolean');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} valid
 */
ValidationResult.prototype['valid'] = undefined;

/**
 * @member {Array.<String>} errors
 */
ValidationResult.prototype['errors'] = undefined;






export default ValidationResult;

