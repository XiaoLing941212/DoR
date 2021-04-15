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
import {
    CountryV30Rc1,
    CountryV30Rc1FromJSON,
    CountryV30Rc1FromJSONTyped,
    CountryV30Rc1ToJSON,
    CreatedDateV30Rc1,
    CreatedDateV30Rc1FromJSON,
    CreatedDateV30Rc1FromJSONTyped,
    CreatedDateV30Rc1ToJSON,
    LastModifiedDateV30Rc1,
    LastModifiedDateV30Rc1FromJSON,
    LastModifiedDateV30Rc1FromJSONTyped,
    LastModifiedDateV30Rc1ToJSON,
    SourceV30Rc1,
    SourceV30Rc1FromJSON,
    SourceV30Rc1FromJSONTyped,
    SourceV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface AddressV30Rc1
 */
export interface AddressV30Rc1 {
    /**
     * 
     * @type {CreatedDateV30Rc1}
     * @memberof AddressV30Rc1
     */
    createdDate?: CreatedDateV30Rc1;
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof AddressV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {SourceV30Rc1}
     * @memberof AddressV30Rc1
     */
    source?: SourceV30Rc1;
    /**
     * 
     * @type {CountryV30Rc1}
     * @memberof AddressV30Rc1
     */
    country: CountryV30Rc1;
    /**
     * 
     * @type {string}
     * @memberof AddressV30Rc1
     */
    visibility?: AddressV30Rc1VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof AddressV30Rc1
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof AddressV30Rc1
     */
    putCode?: number;
    /**
     * 
     * @type {number}
     * @memberof AddressV30Rc1
     */
    displayIndex?: number;
}

/**
* @export
* @enum {string}
*/
export enum AddressV30Rc1VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function AddressV30Rc1FromJSON(json: any): AddressV30Rc1 {
    return AddressV30Rc1FromJSONTyped(json, false);
}

export function AddressV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30Rc1FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30Rc1FromJSON(json['source']),
        'country': CountryV30Rc1FromJSON(json['country']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
    };
}

export function AddressV30Rc1ToJSON(value?: AddressV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV30Rc1ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV30Rc1ToJSON(value.lastModifiedDate),
        'source': SourceV30Rc1ToJSON(value.source),
        'country': CountryV30Rc1ToJSON(value.country),
        'visibility': value.visibility,
        'path': value.path,
        'put-code': value.putCode,
        'display-index': value.displayIndex,
    };
}


