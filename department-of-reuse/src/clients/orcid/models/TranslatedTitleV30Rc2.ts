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
 * @interface TranslatedTitleV30Rc2
 */
export interface TranslatedTitleV30Rc2 {
    /**
     * 
     * @type {string}
     * @memberof TranslatedTitleV30Rc2
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslatedTitleV30Rc2
     */
    languageCode: TranslatedTitleV30Rc2LanguageCodeEnum;
}

/**
* @export
* @enum {string}
*/
export enum TranslatedTitleV30Rc2LanguageCodeEnum {
    Ab = 'ab',
    Aa = 'aa',
    Af = 'af',
    Ak = 'ak',
    Sq = 'sq',
    Am = 'am',
    Ar = 'ar',
    An = 'an',
    Hy = 'hy',
    As = 'as',
    Av = 'av',
    Ae = 'ae',
    Ay = 'ay',
    Az = 'az',
    Bm = 'bm',
    Ba = 'ba',
    Eu = 'eu',
    Be = 'be',
    Bn = 'bn',
    Bh = 'bh',
    Bi = 'bi',
    Bs = 'bs',
    Br = 'br',
    Bg = 'bg',
    My = 'my',
    Ca = 'ca',
    Ch = 'ch',
    Ce = 'ce',
    ZhCn = 'zh_CN',
    ZhTw = 'zh_TW',
    Cu = 'cu',
    Cv = 'cv',
    Kw = 'kw',
    Co = 'co',
    Cr = 'cr',
    Hr = 'hr',
    Cs = 'cs',
    Da = 'da',
    Dv = 'dv',
    Nl = 'nl',
    Dz = 'dz',
    En = 'en',
    Eo = 'eo',
    Et = 'et',
    Ee = 'ee',
    Fo = 'fo',
    Fj = 'fj',
    Fi = 'fi',
    Fr = 'fr',
    Fy = 'fy',
    Ff = 'ff',
    Gl = 'gl',
    Lg = 'lg',
    Ka = 'ka',
    De = 'de',
    El = 'el',
    Kl = 'kl',
    Gn = 'gn',
    Gu = 'gu',
    Ht = 'ht',
    Ha = 'ha',
    Iw = 'iw',
    Hz = 'hz',
    Hi = 'hi',
    Ho = 'ho',
    Hu = 'hu',
    Is = 'is',
    Io = 'io',
    Ig = 'ig',
    In = 'in',
    Ia = 'ia',
    Ie = 'ie',
    Iu = 'iu',
    Ik = 'ik',
    Ga = 'ga',
    It = 'it',
    Ja = 'ja',
    Jv = 'jv',
    Kn = 'kn',
    Kr = 'kr',
    Ks = 'ks',
    Kk = 'kk',
    Km = 'km',
    Ki = 'ki',
    Rw = 'rw',
    Ky = 'ky',
    Kv = 'kv',
    Kg = 'kg',
    Ko = 'ko',
    Ku = 'ku',
    Kj = 'kj',
    Lo = 'lo',
    La = 'la',
    Lv = 'lv',
    Li = 'li',
    Ln = 'ln',
    Lt = 'lt',
    Lu = 'lu',
    Lb = 'lb',
    Mk = 'mk',
    Mg = 'mg',
    Ms = 'ms',
    Ml = 'ml',
    Mt = 'mt',
    Gv = 'gv',
    Mi = 'mi',
    Mr = 'mr',
    Mh = 'mh',
    Mo = 'mo',
    Mn = 'mn',
    Na = 'na',
    Nv = 'nv',
    Ng = 'ng',
    Ne = 'ne',
    Nd = 'nd',
    Se = 'se',
    No = 'no',
    Nb = 'nb',
    Nn = 'nn',
    Ny = 'ny',
    Oc = 'oc',
    Oj = 'oj',
    Or = 'or',
    Om = 'om',
    Os = 'os',
    Pi = 'pi',
    Pa = 'pa',
    Fa = 'fa',
    Pl = 'pl',
    Pt = 'pt',
    Ps = 'ps',
    Qu = 'qu',
    Rm = 'rm',
    Ro = 'ro',
    Rn = 'rn',
    Ru = 'ru',
    Sm = 'sm',
    Sg = 'sg',
    Sa = 'sa',
    Sc = 'sc',
    Gd = 'gd',
    Sr = 'sr',
    Sn = 'sn',
    Ii = 'ii',
    Sd = 'sd',
    Si = 'si',
    Sk = 'sk',
    Sl = 'sl',
    So = 'so',
    Nr = 'nr',
    St = 'st',
    Es = 'es',
    Su = 'su',
    Sw = 'sw',
    Ss = 'ss',
    Sv = 'sv',
    Tl = 'tl',
    Ty = 'ty',
    Tg = 'tg',
    Ta = 'ta',
    Tt = 'tt',
    Te = 'te',
    Th = 'th',
    Bo = 'bo',
    Ti = 'ti',
    To = 'to',
    Ts = 'ts',
    Tn = 'tn',
    Tr = 'tr',
    Tk = 'tk',
    Tw = 'tw',
    Ug = 'ug',
    Uk = 'uk',
    Ur = 'ur',
    Uz = 'uz',
    Ve = 've',
    Vi = 'vi',
    Vo = 'vo',
    Wa = 'wa',
    Cy = 'cy',
    Wo = 'wo',
    Xh = 'xh',
    Ji = 'ji',
    Yo = 'yo',
    Za = 'za',
    Zu = 'zu'
}

export function TranslatedTitleV30Rc2FromJSON(json: any): TranslatedTitleV30Rc2 {
    return TranslatedTitleV30Rc2FromJSONTyped(json, false);
}

export function TranslatedTitleV30Rc2FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslatedTitleV30Rc2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'languageCode': json['language-code'],
    };
}

export function TranslatedTitleV30Rc2ToJSON(value?: TranslatedTitleV30Rc2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'language-code': value.languageCode,
    };
}


