import { CountryCodeType } from "./svg";

// custom continent type and options display. To add continent just add
// continent to list
export const continents = [
  "North America",
  "South America",
  "Europe",
  "Africa",
  "Asia",
  "Oceania",
] as const;
export type ContinentType = typeof continents[number];
// type guard function to see if string is in continent
export const isContinent = (x: any): x is ContinentType => continents.includes(x);

export interface Countries {
  [key: string]: string;
}
export type EuropeKeys =
  | "Albania"
  | "Andorra"
  | "Austria"
  | "Belarus"
  | "Belgium"
  | "Bosnia and Herzegovina"
  | "Bulgaria"
  | "Croatia"
  | "Cyprus"
  | "Czech Republic"
  | "Denmark"
  | "Estonia"
  | "Finland"
  | "France"
  | "Georgia"
  | "Germany"
  | "Greece"
  | "Hungary"
  | "Iceland"
  | "Ireland"
  | "Italy"
  | "Kosovo"
  | "Latvia"
  | "Liechtenstein"
  | "Lithuania"
  | "Luxembourg"
  | "North Macedonia"
  | "Malta"
  | "Moldova"
  | "Monaco"
  | "Montenegro"
  | "Netherlands"
  | "Norway"
  | "Poland"
  | "Portugal"
  | "Romania"
  | "Russia"
  | "San Marino"
  | "Serbia"
  | "Slovakia"
  | "Slovenia"
  | "Spain"
  | "Sweden"
  | "Switzerland"
  | "Turkey"
  | "Ukraine"
  | "United Kingdom"
  | "Vatican City";
export type NorthAmericaKeys =
  | "Canada"
  | "Mexico"
  | "United States"
  | "Puerto Rico"
  | "US Virgin Islands"
  | "Dominican Republic"
  | "Cuba"
  | "Haiti"
  | "Belize"
  | "Costa Rica"
  | "El Salvador"
  | "Guatemala"
  | "Honduras"
  | "Guadeloupe"
  | "Martinique"
  | "Nicaragua"
  | "Panama"
  | "Jamaica"
  | "Bahamas"
  | "Barbados"
  | "Dominica";

export type AsiaKeys =
  | "Afghanistan"
  | "Armenia"
  | "Azerbaijan"
  | "Bahrain"
  | "Bangladesh"
  | "Bhutan"
  | "Brunei"
  | "Cambodia"
  | "China"
  | "Timor-Leste"
  | "Georgia"
  | "India"
  | "Indonesia"
  | "Iran"
  | "Iraq"
  | "Israel"
  | "Japan"
  | "Jordan"
  | "Kazakhstan"
  | "Kuwait"
  | "Kyrgyzstan"
  | "Laos"
  | "Lebanon"
  | "Malaysia"
  | "Maldives"
  | "Mongolia"
  | "Myanmar"
  | "Nepal"
  | "North Korea"
  | "Oman"
  | "Pakistan"
  | "Palestine"
  | "Philippines"
  | "Qatar"
  | "Russia"
  | "Saudi Arabia"
  | "Singapore"
  | "South Korea"
  | "Sri Lanka"
  | "Syria"
  | "Tajikistan"
  | "Thailand"
  | "Turkey"
  | "Turkmenistan"
  | "Taiwan"
  | "United Arab Emirates"
  | "Uzbekistan"
  | "Vietnam"
  | "Yemen";

export type OceaniaKeys =
  | "Australia"
  | "Fiji"
  | "New Zealand"
  | "Federated States of Micronesia"
  | "Kiribati"
  | "Marshall Islands"
  | "Nauru"
  | "Palau"
  | "Papua New Guinea"
  | "Samoa"
  | "Solomon Islands"
  | "Tonga"
  | "Tuvalu"
  | "Vanuatu";
export type SouthAmericaKeys =
  | "Brazil"
  | "Argentina"
  | "Bolivia"
  | "Chile"
  | "Colombia"
  | "Ecuador"
  | "Falkland Islands"
  | "French Guiana"
  | "Guyana"
  | "Paraguay"
  | "Peru"
  | "South Georgia and the South Sandwich Islands"
  | "Suriname"
  | "Trinidad and Tobago"
  | "Uruguay"
  | "Venezuela";
export type AfricaKeys =
  | "Algeria"
  | "Angola"
  | "Benin"
  | "Botswana"
  | "Burkina Faso"
  | "Burundi"
  | "Cameroon"
  | "Cape Verde"
  | "Central African Republic"
  | "Chad"
  | "Comoros"
  | "Republic of Congo"
  | "Democratic Republic of Congo"
  | "Côte d'Ivoire"
  | "Djibouti"
  | "Equatorial Guinea"
  | "Egypt"
  | "Eritrea"
  | "Ethiopia"
  | "Gabon"
  | "Gambia"
  | "Ghana"
  | "Guinea"
  | "Kenya"
  | "Lesotho"
  | "Liberia"
  | "Libya"
  | "Madagascar"
  | "Malawi"
  | "Mali"
  | "Mauritania"
  | "Mauritius"
  | "Morocco"
  | "Mozambique"
  | "Namibia"
  | "Niger"
  | "Nigeria"
  | "Reunion"
  | "Rwanda"
  | "Sao Tome and Principe"
  | "Senegal"
  | "Seychelles"
  | "Sierra Leone"
  | "Somalia"
  | "South Africa"
  | "South Sudan"
  | "Sudan"
  | "Swaziland"
  | "Tanzania"
  | "Togo"
  | "Tunisia"
  | "Uganda"
  | "Western Sahara"
  | "Zambia"
  | "Zimbabwe";
type CountriesByContinentType = {
  "North America": { [K in NorthAmericaKeys]: CountryCodeType };
  "South America": { [K in SouthAmericaKeys]: CountryCodeType };
  Europe: { [K in EuropeKeys]: CountryCodeType };
  Africa: { [K in AfricaKeys]: CountryCodeType };
  Asia: { [K in AsiaKeys]: CountryCodeType };
  Oceania: { [K in OceaniaKeys]: CountryCodeType };
};

export const countriesByContinent: CountriesByContinentType = {
  Europe: {
    Albania: "AL",
    Andorra: "AD",
    Austria: "AT",
    Belarus: "BY",
    Belgium: "BE",
    "Bosnia and Herzegovina": "BA",
    Bulgaria: "BG",
    Croatia: "HR",
    Cyprus: "CY",
    "Czech Republic": "CZ",
    Denmark: "DK",
    Estonia: "EE",
    Finland: "FI",
    France: "FR",
    Georgia: "GE",
    Germany: "DE",
    Greece: "GR",
    Hungary: "HU",
    Iceland: "IS",
    Ireland: "IE",
    Italy: "IT",
    Kosovo: "XK",
    Latvia: "LV",
    Liechtenstein: "LI",
    Lithuania: "LT",
    Luxembourg: "LU",
    "North Macedonia": "MK",
    Malta: "MT",
    Moldova: "MD",
    Monaco: "MC",
    Montenegro: "ME",
    Netherlands: "NL",
    Norway: "NO",
    Poland: "PL",
    Portugal: "PT",
    Romania: "RO",
    Russia: "RU",
    "San Marino": "SM",
    Serbia: "RS",
    Slovakia: "SK",
    Slovenia: "SI",
    Spain: "ES",
    Sweden: "SE",
    Switzerland: "CH",
    Turkey: "TR",
    Ukraine: "UA",
    "United Kingdom": "GB",
    "Vatican City": "VA",
  },
  Africa: {
    Algeria: "DZ",
    Angola: "AO",
    Benin: "BJ",
    Botswana: "BW",
    "Burkina Faso": "BF",
    Burundi: "BI",
    Cameroon: "CM",
    "Cape Verde": "CV",
    "Central African Republic": "CF",
    Chad: "TD",
    Comoros: "KM",
    "Republic of Congo": "CG",
    "Democratic Republic of Congo": "CD",
    "Côte d'Ivoire": "CI",
    Djibouti: "DJ",
    "Equatorial Guinea": "GQ",
    Egypt: "EG",
    Eritrea: "ER",
    Ethiopia: "ET",
    Gabon: "GA",
    Gambia: "GM",
    Ghana: "GH",
    Guinea: "GN",
    Kenya: "KE",
    Lesotho: "LS",
    Liberia: "LR",
    Libya: "LY",
    Madagascar: "MG",
    Malawi: "MW",
    Mali: "ML",
    Mauritania: "MR",
    Mauritius: "MU",
    Morocco: "MA",
    Mozambique: "MZ",
    Namibia: "NA",
    Niger: "NE",
    Nigeria: "NG",
    Reunion: "RE",
    Rwanda: "RW",
    "Sao Tome and Principe": "ST",
    Senegal: "SN",
    Seychelles: "SC",
    "Sierra Leone": "SL",
    Somalia: "SO",
    "South Africa": "ZA",
    "South Sudan": "SS",
    Sudan: "SD",
    Swaziland: "SZ",
    Tanzania: "TZ",
    Togo: "TG",
    Tunisia: "TN",
    Uganda: "UG",
    "Western Sahara": "EH",
    Zambia: "ZM",
    Zimbabwe: "ZW",
  },
  Asia: {
    Afghanistan: "AF",
    Armenia: "AM",
    Azerbaijan: "AZ",
    Bahrain: "BH",
    Bangladesh: "BD",
    Bhutan: "BT",
    Brunei: "BN",
    Cambodia: "KH",
    China: "CN",
    "Timor-Leste": "TL",
    Georgia: "GE",
    India: "IN",
    Indonesia: "ID",
    Iran: "IR",
    Iraq: "IQ",
    Israel: "IL",
    Japan: "JP",
    Jordan: "JO",
    Kazakhstan: "KZ",
    Kuwait: "KW",
    Kyrgyzstan: "KG",
    Laos: "LA",
    Lebanon: "LB",
    Malaysia: "MY",
    Maldives: "MV",
    Mongolia: "MN",
    Myanmar: "MM",
    Nepal: "NP",
    "North Korea": "KP",
    Oman: "OM",
    Pakistan: "PK",
    Palestine: "PS",
    Philippines: "PH",
    Qatar: "QA",
    Russia: "RU",
    "Saudi Arabia": "SA",
    Singapore: "SG",
    "South Korea": "KR",
    "Sri Lanka": "LK",
    Syria: "SY",
    Tajikistan: "TJ",
    Thailand: "TH",
    Turkey: "TR",
    Turkmenistan: "TM",
    Taiwan: "TW",
    "United Arab Emirates": "AE",
    Uzbekistan: "UZ",
    Vietnam: "VN",
    Yemen: "YE",
  },
  "North America": {
    Canada: "CA",
    Mexico: "MX",
    "United States": "US",
    "Puerto Rico": "PR",
    "US Virgin Islands": "VI",
    "Dominican Republic": "DO",
    Cuba: "CU",
    Haiti: "HT",
    Belize: "BZ",
    "Costa Rica": "CR",
    "El Salvador": "SV",
    Guatemala: "GT",
    Honduras: "HN",
    Guadeloupe: "GP",
    Martinique: "MQ",
    Nicaragua: "NI",
    Panama: "PA",
    Jamaica: "JM",
    Bahamas: "BS",
    Barbados: "BB",
    Dominica: "DM",
  },
  "South America": {
    Brazil: "BR",
    Argentina: "AR",
    Bolivia: "BO",
    Chile: "CL",
    Colombia: "CO",
    Ecuador: "EC",
    "Falkland Islands": "FK",
    "French Guiana": "GF",
    Guyana: "GY",
    Paraguay: "PY",
    Peru: "PE",
    "South Georgia and the South Sandwich Islands": "GS",
    Suriname: "SR",
    "Trinidad and Tobago": "TT",
    Uruguay: "UY",
    Venezuela: "VE",
  },
  Oceania: {
    Australia: "AU",
    Fiji: "FJ",
    "New Zealand": "NZ",
    "Federated States of Micronesia": "FM",
    Kiribati: "KI",
    "Marshall Islands": "MH",
    Nauru: "NR",
    Palau: "PW",
    "Papua New Guinea": "PG",
    Samoa: "WS",
    "Solomon Islands": "SB",
    Tonga: "TO",
    Tuvalu: "TV",
    Vanuatu: "VU",
  },
};
