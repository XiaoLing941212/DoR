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
 * @interface DeactivationDateV30Rc2
 */
export interface DeactivationDateV30Rc2 {
    /**
     * 
     * @type {Date}
     * @memberof DeactivationDateV30Rc2
     */
    readonly value?: Date;
}

export function DeactivationDateV30Rc2FromJSON(json: any): DeactivationDateV30Rc2 {
    return DeactivationDateV30Rc2FromJSONTyped(json, false);
}

export function DeactivationDateV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeactivationDateV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : (new Date(json['value'])),
    };
}

export function DeactivationDateV30Rc2ToJSON(value?: DeactivationDateV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


