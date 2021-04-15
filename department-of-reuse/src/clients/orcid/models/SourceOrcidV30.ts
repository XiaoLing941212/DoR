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
 * @interface SourceOrcidV30
 */
export interface SourceOrcidV30 {
    /**
     * 
     * @type {string}
     * @memberof SourceOrcidV30
     */
    uri?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceOrcidV30
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceOrcidV30
     */
    host?: string;
}

export function SourceOrcidV30FromJSON(json: any): SourceOrcidV30 {
    return SourceOrcidV30FromJSONTyped(json, false);
}

export function SourceOrcidV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceOrcidV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uri': !exists(json, 'uri') ? undefined : json['uri'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'host': !exists(json, 'host') ? undefined : json['host'],
    };
}

export function SourceOrcidV30ToJSON(value?: SourceOrcidV30 | null): any {
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


