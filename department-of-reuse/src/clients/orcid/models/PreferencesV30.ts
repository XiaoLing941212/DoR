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
 * @interface PreferencesV30
 */
export interface PreferencesV30 {
    /**
     * 
     * @type {string}
     * @memberof PreferencesV30
     */
    locale?: PreferencesV30LocaleEnum;
}

/**
* @export
* @enum {string}
*/
export enum PreferencesV30LocaleEnum {
    Ar = 'AR',
    Cs = 'CS',
    De = 'DE',
    En = 'EN',
    Es = 'ES',
    Fr = 'FR',
    It = 'IT',
    Ja = 'JA',
    Ko = 'KO',
    Pt = 'PT',
    Ru = 'RU',
    ZhCn = 'ZH_CN',
    ZhTw = 'ZH_TW',
    Xx = 'XX'
}

export function PreferencesV30FromJSON(json: any): PreferencesV30 {
    return PreferencesV30FromJSONTyped(json, false);
}

export function PreferencesV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): PreferencesV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
    };
}

export function PreferencesV30ToJSON(value?: PreferencesV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locale': value.locale,
    };
}


