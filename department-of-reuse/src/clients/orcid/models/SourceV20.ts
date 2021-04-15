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
    SourceClientIdV20,
    SourceClientIdV20FromJSON,
    SourceClientIdV20FromJSONTyped,
    SourceClientIdV20ToJSON,
    SourceNameV20,
    SourceNameV20FromJSON,
    SourceNameV20FromJSONTyped,
    SourceNameV20ToJSON,
    SourceOrcidV20,
    SourceOrcidV20FromJSON,
    SourceOrcidV20FromJSONTyped,
    SourceOrcidV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface SourceV20
 */
export interface SourceV20 {
    /**
     * 
     * @type {SourceOrcidV20}
     * @memberof SourceV20
     */
    sourceOrcid?: SourceOrcidV20;
    /**
     * 
     * @type {SourceClientIdV20}
     * @memberof SourceV20
     */
    sourceClientId?: SourceClientIdV20;
    /**
     * 
     * @type {SourceNameV20}
     * @memberof SourceV20
     */
    sourceName?: SourceNameV20;
}

export function SourceV20FromJSON(json: any): SourceV20 {
    return SourceV20FromJSONTyped(json, false);
}

export function SourceV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sourceOrcid': !exists(json, 'source-orcid') ? undefined : SourceOrcidV20FromJSON(json['source-orcid']),
        'sourceClientId': !exists(json, 'source-client-id') ? undefined : SourceClientIdV20FromJSON(json['source-client-id']),
        'sourceName': !exists(json, 'source-name') ? undefined : SourceNameV20FromJSON(json['source-name']),
    };
}

export function SourceV20ToJSON(value?: SourceV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'source-orcid': SourceOrcidV20ToJSON(value.sourceOrcid),
        'source-client-id': SourceClientIdV20ToJSON(value.sourceClientId),
        'source-name': SourceNameV20ToJSON(value.sourceName),
    };
}


