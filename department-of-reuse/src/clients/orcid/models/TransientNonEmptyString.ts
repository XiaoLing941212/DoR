/* tslint:disable */
/* eslint-disable */
/**
 * ORCID Public
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: Latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TransientNonEmptyString
 */
export interface TransientNonEmptyString {
    /**
     * 
     * @type {string}
     * @memberof TransientNonEmptyString
     */
    value?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransientNonEmptyString
     */
    _transient?: boolean;
}

export function TransientNonEmptyStringFromJSON(json: any): TransientNonEmptyString {
    return TransientNonEmptyStringFromJSONTyped(json, false);
}

export function TransientNonEmptyStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransientNonEmptyString {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        '_transient': !exists(json, 'transient') ? undefined : json['transient'],
    };
}

export function TransientNonEmptyStringToJSON(value?: TransientNonEmptyString | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'transient': value._transient,
    };
}


