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
 * @interface CountryV30
 */
export interface CountryV30 {
    /**
     * 
     * @type {string}
     * @memberof CountryV30
     */
    value?: CountryV30ValueEnum;
}

/**
* @export
* @enum {string}
*/
export enum CountryV30ValueEnum {
    Af = 'AF',
    Ax = 'AX',
    Al = 'AL',
    Dz = 'DZ',
    As = 'AS',
    Ad = 'AD',
    Ao = 'AO',
    Ai = 'AI',
    Aq = 'AQ',
    Ag = 'AG',
    Ar = 'AR',
    Am = 'AM',
    Aw = 'AW',
    Au = 'AU',
    At = 'AT',
    Az = 'AZ',
    Bs = 'BS',
    Bh = 'BH',
    Bd = 'BD',
    Bb = 'BB',
    By = 'BY',
    Be = 'BE',
    Bz = 'BZ',
    Bj = 'BJ',
    Bm = 'BM',
    Bt = 'BT',
    Bo = 'BO',
    Bq = 'BQ',
    Ba = 'BA',
    Bw = 'BW',
    Bv = 'BV',
    Br = 'BR',
    Io = 'IO',
    Bn = 'BN',
    Bg = 'BG',
    Bf = 'BF',
    Bi = 'BI',
    Kh = 'KH',
    Cm = 'CM',
    Ca = 'CA',
    Cv = 'CV',
    Ky = 'KY',
    Cf = 'CF',
    Td = 'TD',
    Cl = 'CL',
    Cn = 'CN',
    Cx = 'CX',
    Cc = 'CC',
    Co = 'CO',
    Km = 'KM',
    Cg = 'CG',
    Cd = 'CD',
    Ck = 'CK',
    Cr = 'CR',
    Ci = 'CI',
    Hr = 'HR',
    Cu = 'CU',
    Cw = 'CW',
    Cy = 'CY',
    Cz = 'CZ',
    Dk = 'DK',
    Dj = 'DJ',
    Dm = 'DM',
    Do = 'DO',
    Ec = 'EC',
    Eg = 'EG',
    Sv = 'SV',
    Gq = 'GQ',
    Er = 'ER',
    Ee = 'EE',
    Et = 'ET',
    Fk = 'FK',
    Fo = 'FO',
    Fj = 'FJ',
    Fi = 'FI',
    Fr = 'FR',
    Gf = 'GF',
    Pf = 'PF',
    Tf = 'TF',
    Ga = 'GA',
    Gm = 'GM',
    Ge = 'GE',
    De = 'DE',
    Gh = 'GH',
    Gi = 'GI',
    Gr = 'GR',
    Gl = 'GL',
    Gd = 'GD',
    Gp = 'GP',
    Gu = 'GU',
    Gt = 'GT',
    Gg = 'GG',
    Gn = 'GN',
    Gw = 'GW',
    Gy = 'GY',
    Ht = 'HT',
    Hm = 'HM',
    Va = 'VA',
    Hn = 'HN',
    Hk = 'HK',
    Hu = 'HU',
    Is = 'IS',
    In = 'IN',
    Id = 'ID',
    Ir = 'IR',
    Iq = 'IQ',
    Ie = 'IE',
    Im = 'IM',
    Il = 'IL',
    It = 'IT',
    Jm = 'JM',
    Jp = 'JP',
    Je = 'JE',
    Jo = 'JO',
    Kz = 'KZ',
    Ke = 'KE',
    Ki = 'KI',
    Kp = 'KP',
    Kr = 'KR',
    Kw = 'KW',
    Kg = 'KG',
    La = 'LA',
    Lv = 'LV',
    Lb = 'LB',
    Ls = 'LS',
    Lr = 'LR',
    Ly = 'LY',
    Li = 'LI',
    Lt = 'LT',
    Lu = 'LU',
    Mo = 'MO',
    Mk = 'MK',
    Mg = 'MG',
    Mw = 'MW',
    My = 'MY',
    Mv = 'MV',
    Ml = 'ML',
    Mt = 'MT',
    Mh = 'MH',
    Mq = 'MQ',
    Mr = 'MR',
    Mu = 'MU',
    Yt = 'YT',
    Mx = 'MX',
    Fm = 'FM',
    Md = 'MD',
    Mc = 'MC',
    Mn = 'MN',
    Me = 'ME',
    Ms = 'MS',
    Ma = 'MA',
    Mz = 'MZ',
    Mm = 'MM',
    Na = 'NA',
    Nr = 'NR',
    Np = 'NP',
    Nl = 'NL',
    Nc = 'NC',
    Nz = 'NZ',
    Ni = 'NI',
    Ne = 'NE',
    Ng = 'NG',
    Nu = 'NU',
    Nf = 'NF',
    Mp = 'MP',
    No = 'NO',
    Om = 'OM',
    Pk = 'PK',
    Pw = 'PW',
    Ps = 'PS',
    Pa = 'PA',
    Pg = 'PG',
    Py = 'PY',
    Pe = 'PE',
    Ph = 'PH',
    Pn = 'PN',
    Pl = 'PL',
    Pt = 'PT',
    Pr = 'PR',
    Qa = 'QA',
    Re = 'RE',
    Ro = 'RO',
    Ru = 'RU',
    Rw = 'RW',
    Bl = 'BL',
    Sh = 'SH',
    Kn = 'KN',
    Lc = 'LC',
    Mf = 'MF',
    Pm = 'PM',
    Vc = 'VC',
    Ws = 'WS',
    Sm = 'SM',
    St = 'ST',
    Sa = 'SA',
    Sn = 'SN',
    Rs = 'RS',
    Sc = 'SC',
    Sl = 'SL',
    Sg = 'SG',
    Sx = 'SX',
    Sk = 'SK',
    Si = 'SI',
    Sb = 'SB',
    So = 'SO',
    Za = 'ZA',
    Gs = 'GS',
    Ss = 'SS',
    Es = 'ES',
    Lk = 'LK',
    Sd = 'SD',
    Sr = 'SR',
    Sj = 'SJ',
    Sz = 'SZ',
    Se = 'SE',
    Ch = 'CH',
    Sy = 'SY',
    Tj = 'TJ',
    Tz = 'TZ',
    Th = 'TH',
    Tl = 'TL',
    Tg = 'TG',
    Tk = 'TK',
    To = 'TO',
    Tt = 'TT',
    Tn = 'TN',
    Tr = 'TR',
    Tm = 'TM',
    Tc = 'TC',
    Tv = 'TV',
    Ug = 'UG',
    Ua = 'UA',
    Ae = 'AE',
    Gb = 'GB',
    Us = 'US',
    Um = 'UM',
    Uy = 'UY',
    Uz = 'UZ',
    Vu = 'VU',
    Ve = 'VE',
    Vn = 'VN',
    Vg = 'VG',
    Vi = 'VI',
    Wf = 'WF',
    Eh = 'EH',
    Ye = 'YE',
    Zm = 'ZM',
    Zw = 'ZW',
    Tw = 'TW',
    Xk = 'XK'
}

export function CountryV30FromJSON(json: any): CountryV30 {
    return CountryV30FromJSONTyped(json, false);
}

export function CountryV30FromJSONTyped(json: any, ignoreDiscriminator: boolean): CountryV30 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function CountryV30ToJSON(value?: CountryV30 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}


