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
    TitleV30,
    TitleV30FromJSON,
    TitleV30FromJSONTyped,
    TitleV30ToJSON,
    TranslatedTitleV30,
    TranslatedTitleV30FromJSON,
    TranslatedTitleV30FromJSONTyped,
    TranslatedTitleV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResearchResourceTitleV30
 */
export interface ResearchResourceTitleV30 {
    /**
     * 
     * @type {TitleV30}
     * @memberof ResearchResourceTitleV30
     */
    title?: TitleV30;
    /**
     * 
     * @type {TranslatedTitleV30}
     * @memberof ResearchResourceTitleV30
     */
    translatedTitle?: TranslatedTitleV30;
}

export function ResearchResourceTitleV30FromJSON(json: any): ResearchResourceTitleV30 {
    return ResearchResourceTitleV30FromJSONTyped(json, false);
}

export function ResearchResourceTitleV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResearchResourceTitleV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : TitleV30FromJSON(json['title']),
        'translatedTitle': !exists(json, 'translated-title') ? undefined : TranslatedTitleV30FromJSON(json['translated-title']),
    };
}

export function ResearchResourceTitleV30ToJSON(value?: ResearchResourceTitleV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': TitleV30ToJSON(value.title),
        'translated-title': TranslatedTitleV30ToJSON(value.translatedTitle),
    };
}


