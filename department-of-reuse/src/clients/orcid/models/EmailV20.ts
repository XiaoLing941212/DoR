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
    CreatedDateV20,
    CreatedDateV20FromJSON,
    CreatedDateV20FromJSONTyped,
    CreatedDateV20ToJSON,
    LastModifiedDateV20,
    LastModifiedDateV20FromJSON,
    LastModifiedDateV20FromJSONTyped,
    LastModifiedDateV20ToJSON,
    SourceV20,
    SourceV20FromJSON,
    SourceV20FromJSONTyped,
    SourceV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface EmailV20
 */
export interface EmailV20 {
    /**
     * 
     * @type {CreatedDateV20}
     * @memberof EmailV20
     */
    createdDate?: CreatedDateV20;
    /**
     * 
     * @type {LastModifiedDateV20}
     * @memberof EmailV20
     */
    lastModifiedDate?: LastModifiedDateV20;
    /**
     * 
     * @type {SourceV20}
     * @memberof EmailV20
     */
    source?: SourceV20;
    /**
     * 
     * @type {string}
     * @memberof EmailV20
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailV20
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailV20
     */
    visibility?: EmailV20VisibilityEnum;
    /**
     * 
     * @type {boolean}
     * @memberof EmailV20
     */
    verified?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmailV20
     */
    primary?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EmailV20
     */
    putCode?: number;
}

/**
* @export
* @enum {string}
*/
export enum EmailV20VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function EmailV20FromJSON(json: any): EmailV20 {
    return EmailV20FromJSONTyped(json, false);
}

export function EmailV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV20FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV20FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV20FromJSON(json['source']),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'verified': !exists(json, 'verified') ? undefined : json['verified'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
    };
}

export function EmailV20ToJSON(value?: EmailV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created-date': CreatedDateV20ToJSON(value.createdDate),
        'last-modified-date': LastModifiedDateV20ToJSON(value.lastModifiedDate),
        'source': SourceV20ToJSON(value.source),
        'email': value.email,
        'path': value.path,
        'visibility': value.visibility,
        'verified': value.verified,
        'primary': value.primary,
        'put-code': value.putCode,
    };
}


