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
    LastModifiedDateV30,
    LastModifiedDateV30FromJSON,
    LastModifiedDateV30FromJSONTyped,
    LastModifiedDateV30ToJSON,
    PeerReviewGroupV30,
    PeerReviewGroupV30FromJSON,
    PeerReviewGroupV30FromJSONTyped,
    PeerReviewGroupV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface PeerReviewsV30
 */
export interface PeerReviewsV30 {
    /**
     * 
     * @type {LastModifiedDateV30}
     * @memberof PeerReviewsV30
     */
    lastModifiedDate?: LastModifiedDateV30;
    /**
     * 
     * @type {Array<PeerReviewGroupV30>}
     * @memberof PeerReviewsV30
     */
    group?: Array<PeerReviewGroupV30>;
    /**
     * 
     * @type {string}
     * @memberof PeerReviewsV30
     */
    path?: string;
}

export function PeerReviewsV30FromJSON(json: any): PeerReviewsV30 {
    return PeerReviewsV30FromJSONTyped(json, false);
}

export function PeerReviewsV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerReviewsV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30FromJSON(json['last-modified-date']),
        'group': !exists(json, 'group') ? undefined : ((json['group'] as Array<any>).map(PeerReviewGroupV30FromJSON)),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function PeerReviewsV30ToJSON(value?: PeerReviewsV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30ToJSON(value.lastModifiedDate),
        'group': value.group === undefined ? undefined : ((value.group as Array<any>).map(PeerReviewGroupV30ToJSON)),
        'path': value.path,
    };
}


