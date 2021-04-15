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
    ExternalIDsV30Rc1,
    ExternalIDsV30Rc1FromJSON,
    ExternalIDsV30Rc1FromJSONTyped,
    ExternalIDsV30Rc1ToJSON,
    LastModifiedDateV30Rc1,
    LastModifiedDateV30Rc1FromJSON,
    LastModifiedDateV30Rc1FromJSONTyped,
    LastModifiedDateV30Rc1ToJSON,
    QualificationSummaryV30Rc1,
    QualificationSummaryV30Rc1FromJSON,
    QualificationSummaryV30Rc1FromJSONTyped,
    QualificationSummaryV30Rc1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface AffiliationGroupV30Rc1QualificationSummaryV30Rc1
 */
export interface AffiliationGroupV30Rc1QualificationSummaryV30Rc1 {
    /**
     * 
     * @type {LastModifiedDateV30Rc1}
     * @memberof AffiliationGroupV30Rc1QualificationSummaryV30Rc1
     */
    lastModifiedDate?: LastModifiedDateV30Rc1;
    /**
     * 
     * @type {ExternalIDsV30Rc1}
     * @memberof AffiliationGroupV30Rc1QualificationSummaryV30Rc1
     */
    externalIds?: ExternalIDsV30Rc1;
    /**
     * 
     * @type {Array<QualificationSummaryV30Rc1>}
     * @memberof AffiliationGroupV30Rc1QualificationSummaryV30Rc1
     */
    summaries?: Array<QualificationSummaryV30Rc1>;
}

export function AffiliationGroupV30Rc1QualificationSummaryV30Rc1FromJSON(json: any): AffiliationGroupV30Rc1QualificationSummaryV30Rc1 {
    return AffiliationGroupV30Rc1QualificationSummaryV30Rc1FromJSONTyped(json, false);
}

export function AffiliationGroupV30Rc1QualificationSummaryV30Rc1FromJSONTyped(json: any, ignoreDiscriminator: boolean): AffiliationGroupV30Rc1QualificationSummaryV30Rc1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV30Rc1FromJSON(json['last-modified-date']),
        'externalIds': !exists(json, 'external-ids') ? undefined : ExternalIDsV30Rc1FromJSON(json['external-ids']),
        'summaries': !exists(json, 'summaries') ? undefined : ((json['summaries'] as Array<any>).map(QualificationSummaryV30Rc1FromJSON)),
    };
}

export function AffiliationGroupV30Rc1QualificationSummaryV30Rc1ToJSON(value?: AffiliationGroupV30Rc1QualificationSummaryV30Rc1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV30Rc1ToJSON(value.lastModifiedDate),
        'external-ids': ExternalIDsV30Rc1ToJSON(value.externalIds),
        'summaries': value.summaries === undefined ? undefined : ((value.summaries as Array<any>).map(QualificationSummaryV30Rc1ToJSON)),
    };
}


