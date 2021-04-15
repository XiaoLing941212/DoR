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
 * @interface ContributorOrcidV30
 */
export interface ContributorOrcidV30 {
    /**
     * 
     * @type {string}
     * @memberof ContributorOrcidV30
     */
    uri?: string;
    /**
     * 
     * @type {string}
     * @memberof ContributorOrcidV30
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof ContributorOrcidV30
     */
    host?: string;
}

export function ContributorOrcidV30FromJSON(json: any): ContributorOrcidV30 {
    return ContributorOrcidV30FromJSONTyped(json, false);
}

export function ContributorOrcidV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): ContributorOrcidV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uri': !exists(json, 'uri') ? undefined : json['uri'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'host': !exists(json, 'host') ? undefined : json['host'],
    };
}

export function ContributorOrcidV30ToJSON(value?: ContributorOrcidV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uri': value.uri,
        'path': value.path,
        'host': value.host,
    };
}


