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
 * @interface YearV30
 */
export interface YearV30 {
    /**
     * 
     * @type {string}
     * @memberof YearV30
     */
    value?: string;
}

export function YearV30FromJSON(json: any): YearV30 {
    return YearV30FromJSONTyped(json, false);
}

export function YearV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): YearV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function YearV30ToJSON(value?: YearV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}


