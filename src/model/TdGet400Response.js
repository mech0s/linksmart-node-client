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
import ProblemDetails from './ProblemDetails';
import ValidationError from './ValidationError';
import ValidationErrorAllOfValidationErrors from './ValidationErrorAllOfValidationErrors';

/**
 * The TdGet400Response model module.
 * @module model/TdGet400Response
 * @version 1.0.0-beta.22
 */
class TdGet400Response {
    /**
     * Constructs a new <code>TdGet400Response</code>.
     * @alias module:model/TdGet400Response
     * @implements module:model/ProblemDetails
     * @implements module:model/ValidationError
     */
    constructor() { 
        ProblemDetails.initialize(this);ValidationError.initialize(this);
        TdGet400Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TdGet400Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TdGet400Response} obj Optional instance to populate.
     * @return {module:model/TdGet400Response} The populated <code>TdGet400Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TdGet400Response();
            ProblemDetails.constructFromObject(data, obj);
            ValidationError.constructFromObject(data, obj);

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('instance')) {
                obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
            }
            if (data.hasOwnProperty('validationErrors')) {
                obj['validationErrors'] = ApiClient.convertToType(data['validationErrors'], [ValidationErrorAllOfValidationErrors]);
            }
        }
        return obj;
    }


}

/**
 * The HTTP status code.
 * @member {Number} status
 */
TdGet400Response.prototype['status'] = undefined;

/**
 * A short, human-readable summary of the problem type.
 * @member {String} title
 */
TdGet400Response.prototype['title'] = undefined;

/**
 * A human-readable explanation specific to this occurrence of the problem
 * @member {String} detail
 */
TdGet400Response.prototype['detail'] = undefined;

/**
 * A URI reference that identifies the specific occurrence of the problem.\\
 * @member {String} instance
 */
TdGet400Response.prototype['instance'] = undefined;

/**
 * @member {Array.<module:model/ValidationErrorAllOfValidationErrors>} validationErrors
 */
TdGet400Response.prototype['validationErrors'] = undefined;


// Implement ProblemDetails interface:
/**
 * The HTTP status code.
 * @member {Number} status
 */
ProblemDetails.prototype['status'] = undefined;
/**
 * A short, human-readable summary of the problem type.
 * @member {String} title
 */
ProblemDetails.prototype['title'] = undefined;
/**
 * A human-readable explanation specific to this occurrence of the problem
 * @member {String} detail
 */
ProblemDetails.prototype['detail'] = undefined;
/**
 * A URI reference that identifies the specific occurrence of the problem.\\
 * @member {String} instance
 */
ProblemDetails.prototype['instance'] = undefined;
// Implement ValidationError interface:
/**
 * The HTTP status code.
 * @member {Number} status
 */
ValidationError.prototype['status'] = undefined;
/**
 * A short, human-readable summary of the problem type.
 * @member {String} title
 */
ValidationError.prototype['title'] = undefined;
/**
 * A human-readable explanation specific to this occurrence of the problem
 * @member {String} detail
 */
ValidationError.prototype['detail'] = undefined;
/**
 * A URI reference that identifies the specific occurrence of the problem.\\
 * @member {String} instance
 */
ValidationError.prototype['instance'] = undefined;
/**
 * @member {Array.<module:model/ValidationErrorAllOfValidationErrors>} validationErrors
 */
ValidationError.prototype['validationErrors'] = undefined;




export default TdGet400Response;
