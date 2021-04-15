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
    EducationsSummaryV20,
    EducationsSummaryV20FromJSON,
    EducationsSummaryV20FromJSONTyped,
    EducationsSummaryV20ToJSON,
    EmploymentsSummaryV20,
    EmploymentsSummaryV20FromJSON,
    EmploymentsSummaryV20FromJSONTyped,
    EmploymentsSummaryV20ToJSON,
    FundingsV20,
    FundingsV20FromJSON,
    FundingsV20FromJSONTyped,
    FundingsV20ToJSON,
    LastModifiedDateV20,
    LastModifiedDateV20FromJSON,
    LastModifiedDateV20FromJSONTyped,
    LastModifiedDateV20ToJSON,
    PeerReviewsV20,
    PeerReviewsV20FromJSON,
    PeerReviewsV20FromJSONTyped,
    PeerReviewsV20ToJSON,
    WorksSummaryV20,
    WorksSummaryV20FromJSON,
    WorksSummaryV20FromJSONTyped,
    WorksSummaryV20ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ActivitiesSummaryV20
 */
export interface ActivitiesSummaryV20 {
    /**
     * 
     * @type {LastModifiedDateV20}
     * @memberof ActivitiesSummaryV20
     */
    lastModifiedDate?: LastModifiedDateV20;
    /**
     * 
     * @type {EducationsSummaryV20}
     * @memberof ActivitiesSummaryV20
     */
    educations?: EducationsSummaryV20;
    /**
     * 
     * @type {EmploymentsSummaryV20}
     * @memberof ActivitiesSummaryV20
     */
    employments?: EmploymentsSummaryV20;
    /**
     * 
     * @type {FundingsV20}
     * @memberof ActivitiesSummaryV20
     */
    fundings?: FundingsV20;
    /**
     * 
     * @type {PeerReviewsV20}
     * @memberof ActivitiesSummaryV20
     */
    peerReviews?: PeerReviewsV20;
    /**
     * 
     * @type {WorksSummaryV20}
     * @memberof ActivitiesSummaryV20
     */
    works?: WorksSummaryV20;
    /**
     * 
     * @type {string}
     * @memberof ActivitiesSummaryV20
     */
    path?: string;
}

export function ActivitiesSummaryV20FromJSON(json: any): ActivitiesSummaryV20 {
    return ActivitiesSummaryV20FromJSONTyped(json, false);
}

export function ActivitiesSummaryV20FromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivitiesSummaryV20 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastModifiedDate': !exists(json, 'last-modified-date') ? undefined : LastModifiedDateV20FromJSON(json['last-modified-date']),
        'educations': !exists(json, 'educations') ? undefined : EducationsSummaryV20FromJSON(json['educations']),
        'employments': !exists(json, 'employments') ? undefined : EmploymentsSummaryV20FromJSON(json['employments']),
        'fundings': !exists(json, 'fundings') ? undefined : FundingsV20FromJSON(json['fundings']),
        'peerReviews': !exists(json, 'peer-reviews') ? undefined : PeerReviewsV20FromJSON(json['peer-reviews']),
        'works': !exists(json, 'works') ? undefined : WorksSummaryV20FromJSON(json['works']),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function ActivitiesSummaryV20ToJSON(value?: ActivitiesSummaryV20 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last-modified-date': LastModifiedDateV20ToJSON(value.lastModifiedDate),
        'educations': EducationsSummaryV20ToJSON(value.educations),
        'employments': EmploymentsSummaryV20ToJSON(value.employments),
        'fundings': FundingsV20ToJSON(value.fundings),
        'peer-reviews': PeerReviewsV20ToJSON(value.peerReviews),
        'works': WorksSummaryV20ToJSON(value.works),
        'path': value.path,
    };
}


