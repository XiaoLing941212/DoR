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
    DisambiguatedOrganizationV30,
    DisambiguatedOrganizationV30FromJSON,
    DisambiguatedOrganizationV30FromJSONTyped,
    DisambiguatedOrganizationV30ToJSON,
    OrganizationAddressV30,
    OrganizationAddressV30FromJSON,
    OrganizationAddressV30FromJSONTyped,
    OrganizationAddressV30ToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrganizationV30
 */
export interface OrganizationV30 {
    /**
     * 
     * @type {string}
     * @memberof OrganizationV30
     */
    name: string;
    /**
     * 
     * @type {OrganizationAddressV30}
     * @memberof OrganizationV30
     */
    address: OrganizationAddressV30;
    /**
     * 
     * @type {DisambiguatedOrganizationV30}
     * @memberof OrganizationV30
     */
    disambiguatedOrganization?: DisambiguatedOrganizationV30;
}

export function OrganizationV30FromJSON(json: any): OrganizationV30 {
    return OrganizationV30FromJSONTyped(json, false);
}

export function OrganizationV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'address': OrganizationAddressV30FromJSON(json['address']),
        'disambiguatedOrganization': !exists(json, 'disambiguated-organization') ? undefined : DisambiguatedOrganizationV30FromJSON(json['disambiguated-organization']),
    };
}

export function OrganizationV30ToJSON(value?: OrganizationV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'address': OrganizationAddressV30ToJSON(value.address),
        'disambiguated-organization': DisambiguatedOrganizationV30ToJSON(value.disambiguatedOrganization),
    };
}


