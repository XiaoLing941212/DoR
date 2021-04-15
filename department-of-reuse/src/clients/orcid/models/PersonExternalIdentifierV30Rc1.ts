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
    UrlV30Rc1,
    UrlV30Rc1FromJSON,
    UrlV30Rc1FromJSONTyped,
    UrlV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface PersonExternalIdentifierV30Rc1
 */
export interface PersonExternalIdentifierV30Rc1 {
    /**
     * 
     * @type {CreatedDateV30Rc1}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    createdDate?: CreatedDateV30Rc1;
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {SourceV30Rc1}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    source?: SourceV30Rc1;
    /**
     * 
     * @type {string}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    externalIdType: string;
    /**
     * 
     * @type {string}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    externalIdValue: string;
    /**
     * 
     * @type {UrlV30Rc1}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    externalIdUrl?: UrlV30Rc1;
    /**
     * 
     * @type {string}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    externalIdRelationship?: PersonExternalIdentifierV30Rc1ExternalIdRelationshipEnum;
    /**
     * 
     * @type {string}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    visibility?: PersonExternalIdentifierV30Rc1VisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    putCode?: number;
    /**
     * 
     * @type {number}
     * @memberof PersonExternalIdentifierV30Rc1
     */
    displayIndex?: number;
}

/**
* @export
* @enum {string}
*/
export enum PersonExternalIdentifierV30Rc1ExternalIdRelationshipEnum {
    PartOf = 'PART_OF',
    Self = 'SELF'
}/**
* @export
* @enum {string}
*/
export enum PersonExternalIdentifierV30Rc1VisibilityEnum {
    Limited = 'LIMITED',
    RegisteredOnly = 'REGISTERED_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export function PersonExternalIdentifierV30Rc1FromJSON(json: any): PersonExternalIdentifierV30Rc1 {
    return PersonExternalIdentifierV30Rc1FromJSONTyped(json, false);
}

export function PersonExternalIdentifierV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonExternalIdentifierV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdDate': !exists(json, 'created-date') ? undefined : CreatedDateV30Rc1FromJSON(json['created-date']),
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'source': !exists(json, 'source') ? undefined : SourceV30Rc1FromJSON(json['source']),
        'externalIdType': json['external-id-type'],
        'externalIdValue': json['external-id-value'],
        'externalIdUrl': !exists(json, 'external-id-url') ? undefined : UrlV30Rc1FromJSON(json['external-id-url']),
        'externalIdRelationship': !exists(json, 'external-id-relationship') ? undefined : json['external-id-relationship'],
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'putCode': !exists(json, 'put-code') ? undefined : json['put-code'],
        'displayIndex': !exists(json, 'display-index') ? undefined : json['display-index'],
    };
}

export function PersonExternalIdentifierV30Rc1ToJSON(value?: PersonExternalIdentifierV30Rc1 | null): any {
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
        'external-id-type': value.externalIdType,
        'external-id-value': value.externalIdValue,
        'external-id-url': UrlV30Rc1ToJSON(value.externalIdUrl),
        'external-id-relationship': value.externalIdRelationship,
        'visibility': value.visibility,
        'path': value.path,
        'put-code': value.putCode,
        'display-index': value.displayIndex,
    };
}


