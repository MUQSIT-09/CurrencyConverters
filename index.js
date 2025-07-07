
// Country and currency data
const countries = {
    "Afghanistan": { flag: "AF", currency: "AFN" },
    "Albania": { flag: "AL", currency: "ALL" },
    "Algeria": { flag: "DZ", currency: "DZD" },
    "Andorra": { flag: "AD", currency: "EUR" },
    "Angola": { flag: "AO", currency: "AOA" },
    "Antigua and Barbuda": { flag: "AG", currency: "XCD" },
    "Argentina": { flag: "AR", currency: "ARS" },
    "Armenia": { flag: "AM", currency: "AMD" },
    "Australia": { flag: "AU", currency: "AUD" },
    "Austria": { flag: "AT", currency: "EUR" },
    "Azerbaijan": { flag: "AZ", currency: "AZN" },
    "Bahamas": { flag: "BS", currency: "BSD" },
    "Bahrain": { flag: "BH", currency: "BHD" },
    "Bangladesh": { flag: "BD", currency: "BDT" },
    "Barbados": { flag: "BB", currency: "BBD" },
    "Belarus": { flag: "BY", currency: "BYN" },
    "Belgium": { flag: "BE", currency: "EUR" },
    "Belize": { flag: "BZ", currency: "BZD" },
    "Benin": { flag: "BJ", currency: "XOF" },
    "Bhutan": { flag: "BT", currency: "BTN" },
    "Bolivia": { flag: "BO", currency: "BOB" },
    "Bosnia and Herzegovina": { flag: "BA", currency: "BAM" },
    "Botswana": { flag: "BW", currency: "BWP" },
    "Brazil": { flag: "BR", currency: "BRL" },
    "Brunei": { flag: "BN", currency: "BND" },
    "Bulgaria": { flag: "BG", currency: "BGN" },
    "Burkina Faso": { flag: "BF", currency: "XOF" },
    "Burundi": { flag: "BI", currency: "BIF" },
    "Cabo Verde": { flag: "CV", currency: "CVE" },
    "Cambodia": { flag: "KH", currency: "KHR" },
    "Cameroon": { flag: "CM", currency: "XAF" },
    "Canada": { flag: "CA", currency: "CAD" },
    "Central African Republic": { flag: "CF", currency: "XAF" },
    "Chad": { flag: "TD", currency: "XAF" },
    "Chile": { flag: "CL", currency: "CLP" },
    "China": { flag: "CN", currency: "CNY" },
    "Colombia": { flag: "CO", currency: "COP" },
    "Comoros": { flag: "KM", currency: "KMF" },
    "Congo (Congo-Brazzaville)": { flag: "CG", currency: "XAF" },
    "Costa Rica": { flag: "CR", currency: "CRC" },
    "Croatia": { flag: "HR", currency: "HRK" },
    "Cuba": { flag: "CU", currency: "CUP" },
    "Cyprus": { flag: "CY", currency: "EUR" },
    "Czechia (Czech Republic)": { flag: "CZ", currency: "CZK" },
    "Democratic Republic of the Congo": { flag: "CD", currency: "CDF" },
    "Denmark": { flag: "DK", currency: "DKK" },
    "Djibouti": { flag: "DJ", currency: "DJF" },
    "Dominica": { flag: "DM", currency: "XCD" },
    "Dominican Republic": { flag: "DO", currency: "DOP" },
    "Ecuador": { flag: "EC", currency: "USD" },
    "Egypt": { flag: "EG", currency: "EGP" },
    "El Salvador": { flag: "SV", currency: "USD" },
    "Equatorial Guinea": { flag: "GQ", currency: "XAF" },
    "Eritrea": { flag: "ER", currency: "ERN" },
    "Estonia": { flag: "EE", currency: "EUR" },
    "Eswatini (fmr. 'Swaziland')": { flag: "SZ", currency: "SZL" },
    "Ethiopia": { flag: "ET", currency: "ETB" },
    "Fiji": { flag: "FJ", currency: "FJD" },
    "Finland": { flag: "FI", currency: "EUR" },
    "France": { flag: "FR", currency: "EUR" },
    "Gabon": { flag: "GA", currency: "XAF" },
    "Gambia": { flag: "GM", currency: "GMD" },
    "Georgia": { flag: "GE", currency: "GEL" },
    "Germany": { flag: "DE", currency: "EUR" },
    "Ghana": { flag: "GH", currency: "GHS" },
    "Greece": { flag: "GR", currency: "EUR" },
    "Grenada": { flag: "GD", currency: "XCD" },
    "Guatemala": { flag: "GT", currency: "GTQ" },
    "Guinea": { flag: "GN", currency: "GNF" },
    "Guinea-Bissau": { flag: "GW", currency: "XOF" },
    "Guyana": { flag: "GY", currency: "GYD" },
    "Haiti": { flag: "HT", currency: "HTG" },
    "Honduras": { flag: "HN", currency: "HNL" },
    "Hungary": { flag: "HU", currency: "HUF" },
    "Iceland": { flag: "IS", currency: "ISK" },
    "India": { flag: "IN", currency: "INR" },
    "Indonesia": { flag: "ID", currency: "IDR" },
    "Iran": { flag: "IR", currency: "IRR" },
    "Iraq": { flag: "IQ", currency: "IQD" },
    "Ireland": { flag: "IE", currency: "EUR" },
    "Israel": { flag: "IL", currency: "ILS" },
    "Jamaica": { flag: "JM", currency: "JMD" },
    "Japan": { flag: "JP", currency: "JPY" },
    "Jordan": { flag: "JO", currency: "JOD" },
    "Kazakhstan": { flag: "KZ", currency: "KZT" },
    "Kenya": { flag: "KE", currency: "KES" },
    "Kiribati": { flag: "KI", currency: "AUD" },
    "Kuwait": { flag: "KW", currency: "KWD" },
    "Kyrgyzstan": { flag: "KG", currency: "KGS" },
    "Laos": { flag: "LA", currency: "LAK" },
    "Latvia": { flag: "LV", currency: "EUR" },
    "Lebanon": { flag: "LB", currency: "LBP" },
    "Lesotho": { flag: "LS", currency: "LSL" },
    "Liberia": { flag: "LR", currency: "LRD" },
    "Libya": { flag: "LY", currency: "LYD" },
    "Liechtenstein": { flag: "LI", currency: "CHF" },
    "Lithuania": { flag: "LT", currency: "EUR" },
    "Luxembourg": { flag: "LU", currency: "EUR" },
    "Madagascar": { flag: "MG", currency: "MGA" },
    "Malawi": { flag: "MW", currency: "MWK" },
    "Malaysia": { flag: "MY", currency: "MYR" },
    "Maldives": { flag: "MV", currency: "MVR" },
    "Mali": { flag: "ML", currency: "XOF" },
    "Malta": { flag: "MT", currency: "EUR" },
    "Marshall Islands": { flag: "MH", currency: "USD" },
    "Mauritania": { flag: "MR", currency: "MRU" },
    "Mauritius": { flag: "MU", currency: "MUR" },
    "Mexico": { flag: "MX", currency: "MXN" },
    "Micronesia": { flag: "FM", currency: "USD" },
    "Moldova": { flag: "MD", currency: "MDL" },
    "Monaco": { flag: "MC", currency: "EUR" },
    "Mongolia": { flag: "MN", currency: "MNT" },
    "Montenegro": { flag: "ME", currency: "EUR" },
    "Morocco": { flag: "MA", currency: "MAD" },
    "Mozambique": { flag: "MZ", currency: "MZN" },
    "Myanmar (Burma)": { flag: "MM", currency: "MMK" },
    "Namibia": { flag: "NA", currency: "NAD" },
    "Nauru": { flag: "NR", currency: "AUD" },
    "Nepal": { flag: "NP", currency: "NPR" },
    "Netherlands": { flag: "NL", currency: "EUR" },
    "New Zealand": { flag: "NZ", currency: "NZD" },
    "Nicaragua": { flag: "NI", currency: "NIO" },
    "Niger": { flag: "NE", currency: "XOF" },
    "Nigeria": { flag: "NG", currency: "NGN" },
    "North Korea": { flag: "KP", currency: "KPW" },
    "North Macedonia": { flag: "MK", currency: "MKD" },
    "Norway": { flag: "NO", currency: "NOK" },
    "Oman": { flag: "OM", currency: "OMR" },
    "Pakistan": { flag: "PK", currency: "PKR" },
    "Palau": { flag: "PW", currency: "USD" },
    "Palestine": { flag: "PS", currency: "ILS" },
    "Panama": { flag: "PA", currency: "PAB" },
    "Papua New Guinea": { flag: "PG", currency: "PGK" },
    "Paraguay": { flag: "PY", currency: "PYG" },
    "Peru": { flag: "PE", currency: "PEN" },
    "Philippines": { flag: "PH", currency: "PHP" },
    "Poland": { flag: "PL", currency: "PLN" },
    "Portugal": { flag: "PT", currency: "EUR" },
    "Qatar": { flag: "QA", currency: "QAR" },
    "Romania": { flag: "RO", currency: "RON" },
    "Russia": { flag: "RU", currency: "RUB" },
    "Rwanda": { flag: "RW", currency: "RWF" },
    "Saint Kitts and Nevis": { flag: "KN", currency: "XCD" },
    "Saint Lucia": { flag: "LC", currency: "XCD" },
    "Saint Vincent and the Grenadines": { flag: "VC", currency: "XCD" },
    "Samoa": { flag: "WS", currency: "WST" },
    "San Marino": { flag: "SM", currency: "EUR" },
    "Sao Tome and Principe": { flag: "ST", currency: "STN" },
    "Saudi Arabia": { flag: "SA", currency: "SAR" },
    "Senegal": { flag: "SN", currency: "XOF" },
    "Serbia": { flag: "RS", currency: "RSD" },
    "Seychelles": { flag: "SC", currency: "SCR" },
    "Sierra Leone": { flag: "SL", currency: "SLL" },
    "Singapore": { flag: "SG", currency: "SGD" },
    "Slovakia": { flag: "SK", currency: "EUR" },
    "Slovenia": { flag: "SI", currency: "EUR" },
    "Solomon Islands": { flag: "SB", currency: "SBD" },
    "Somalia": { flag: "SO", currency: "SOS" },
    "South Africa": { flag: "ZA", currency: "ZAR" },
    "South Korea": { flag: "KR", currency: "KRW" },
    "South Sudan": { flag: "SS", currency: "SSP" },
    "Spain": { flag: "ES", currency: "EUR" },
    "Sri Lanka": { flag: "LK", currency: "LKR" },
    "Sudan": { flag: "SD", currency: "SDG" },
    "Suriname": { flag: "SR", currency: "SRD" },
    "Sweden": { flag: "SE", currency: "SEK" },
    "Switzerland": { flag: "CH", currency: "CHF" },
    "Syria": { flag: "SY", currency: "SYP" },
    "Taiwan": { flag: "TW", currency: "TWD" },
    "Tajikistan": { flag: "TJ", currency: "TJS" },
    "Tanzania": { flag: "TZ", currency: "TZS" },
    "Thailand": { flag: "TH", currency: "THB" },
    "Timor-Leste": { flag: "TL", currency: "USD" },
    "Togo": { flag: "TG", currency: "XOF" },
    "Tonga": { flag: "TO", currency: "TOP" },
    "Trinidad and Tobago": { flag: "TT", currency: "TTD" },
    "Tunisia": { flag: "TN", currency: "TND" },
    "Turkey": { flag: "TR", currency: "TRY" },
    "Turkmenistan": { flag: "TM", currency: "TMT" },
    "Tuvalu": { flag: "TV", currency: "AUD" },
    "Uganda": { flag: "UG", currency: "UGX" },
    "Ukraine": { flag: "UA", currency: "UAH" },
    "United Arab Emirates": { flag: "AE", currency: "AED" },
    "United Kingdom": { flag: "GB", currency: "GBP" },
    "United States": { flag: "US", currency: "USD" },
    "Uruguay": { flag: "UY", currency: "UYU" },
    "Uzbekistan": { flag: "UZ", currency: "UZS" },
    "Vanuatu": { flag: "VU", currency: "VUV" },
    "Vatican City": { flag: "VA", currency: "EUR" },
    "Venezuela": { flag: "VE", currency: "VES" },
    "Vietnam": { flag: "VN", currency: "VND" },
    "Yemen": { flag: "YE", currency: "YER" },
    "Zambia": { flag: "ZM", currency: "ZMW" },
    "Zimbabwe": { flag: "ZW", currency: "ZWL" }
};

// Country information for bottom section
const countryInfo = {
    "USD": "The United States Dollar is the world's primary reserve currency.",
    "EUR": "The Euro is used by 19 of the 27 EU member states.",
    "GBP": "The British Pound is one of the oldest currencies still in use.",
    "JPY": "The Japanese Yen is the third most traded currency in the world.",
    "INR": "The Indian Rupee is one of the oldest currencies with a rich history dating back to ancient times.",
    "CNY": "The Chinese Yuan is the currency of the world's second-largest economy.",
    "AUD": "The Australian Dollar is one of the most traded currencies in the Asia-Pacific region.",
    "CAD": "The Canadian Dollar is backed by significant natural resources.",
    "CHF": "The Swiss Franc is known for its stability in times of global economic uncertainty.",
    "SGD": "The Singapore Dollar is one of Asia's strongest currencies.",
    "RUB": "The Russian Ruble has undergone several redenominations throughout its history.",
    "BRL": "The Brazilian Real was introduced in 1994 as part of the Plano Real to stabilize the economy.",
    "ZAR": "The South African Rand is named after the Witwatersrand, the ridge where most of South Africa's gold deposits were found.",
    "MXN": "The Mexican Peso was the first currency to use the '$' symbol which was later adopted by the US dollar.",
    "AED": "The UAE Dirham is pegged to the US dollar at a fixed rate of 3.6725 dirhams.",
    "SAR": "The Saudi Riyal has been pegged to the US dollar at 3.75 riyals since 1986.",
    "HKD": "The Hong Kong Dollar has been pegged to the US dollar since 1983.",
    "NZD": "The New Zealand Dollar is nicknamed the 'Kiwi' after the native bird featured on the one-dollar coin.",
    "SEK": "The Swedish Krona has been Sweden's currency since 1873.",
    "NOK": "The Norwegian Krone is the currency of Norway and its territories.",
    "PLN": "The Polish Złoty means 'golden' in Polish.",
    "TRY": "The Turkish Lira was redenominated in 2005, removing six zeros from the currency.",
    "KRW": "The South Korean Won was introduced after World War II, replacing the Korean yen.",
    "IDR": "The Indonesian Rupiah is one of the least valued currencies in the world, with typical denominations in the thousands.",
    "THB": "The Thai Baht is one of the most stable currencies in Southeast Asia.",
    "EGP": "The Egyptian Pound dates back to 1834 and was initially based on gold and silver.",
    "PHP": "The Philippine Peso derived from the Spanish peso and has been the currency since 1898.",
    "MYR": "The Malaysian Ringgit was originally based on the Spanish dollar during the colonial era.",
    "NGN": "The Nigerian Naira was introduced in 1973, replacing the Nigerian pound.",
    "ILS": "The Israeli New Shekel has been Israel's currency since 1986.",
    "CLP": "The Chilean Peso has historically been one of Latin America's most stable currencies.",
    "DKK": "The Danish Krone has been pegged to the euro since the introduction of the European currency.",
    "OMR": "The Omani Rial is one of the highest-valued currencies in the world, renowned for its strong purchasing power.",
    "QAR": "The Qatari Riyal is pegged to the US Dollar and is widely used in the Gulf region.",
    "KWD": "The Kuwaiti Dinar is the strongest currency in the world in terms of exchange rate value.",
    "BHD": "The Bahraini Dinar is the second highest-valued currency unit globally.",
    "JOD": "The Jordanian Dinar is pegged to the US dollar and is used as legal tender in the West Bank.",
    "LBP": "The Lebanese Pound has seen significant inflation in recent years due to economic crisis.",
    "PKR": "The Pakistani Rupee is used in Pakistan and has faced significant devaluation recently.",
    "LKR": "The Sri Lankan Rupee is known for its colorful banknotes featuring wildlife and culture.",
    "BDT": "The Bangladeshi Taka has been the official currency since 1972, replacing the Pakistani Rupee.",
    "NPR": "The Nepalese Rupee is pegged to the Indian Rupee at a fixed rate.",
    "VND": "The Vietnamese Dong has one of the lowest values among world currencies.",
    "IRR": "The Iranian Rial has experienced major inflation due to international sanctions.",
    "IQD": "The Iraqi Dinar is a non-convertible currency and tightly regulated.",
    "AFN": "The Afghan Afghani was reintroduced in 2002 after decades of conflict.",
    "AZN": "The Azerbaijani Manat was redenominated in 2006 to stabilize inflation.",
    "GEL": "The Georgian Lari has been in use since 1995, replacing the Kuponi.",
    "KZT": "The Kazakhstani Tenge was introduced in 1993 after the collapse of the Soviet ruble zone.",
    "UZS": "The Uzbekistani Som has undergone a steady liberalization since 2017.",
    "TMT": "The Turkmenistani Manat was reissued in 2009 with a 5,000-to-1 redenomination.",
    "MAD": "The Moroccan Dirham is a stable currency used in Morocco and Western Sahara.",
    "DZD": "The Algerian Dinar is used in Algeria and is not freely convertible.",
    "TND": "The Tunisian Dinar is known for its high value relative to other North African currencies.",
    "LYD": "The Libyan Dinar has a high exchange value due to oil-backed economy.",
    "SDG": "The Sudanese Pound has suffered hyperinflation due to political instability.",
    "SYP": "The Syrian Pound has significantly devalued due to the ongoing civil war.",
    "DJF": "The Djiboutian Franc is pegged to the US Dollar and is widely stable.",
    "ETB": "The Ethiopian Birr is the currency of one of Africa's fastest-growing economies.",
    "KES": "The Kenyan Shilling is widely used in East Africa and known for its wildlife designs.",
    "TZS": "The Tanzanian Shilling has colorful notes with images of local animals and leaders.",
    "UGX": "The Ugandan Shilling was introduced in 1987, replacing the old currency at 100:1.",
    "GHS": "The Ghanaian Cedi is one of the strongest West African currencies.",
    "ZMW": "The Zambian Kwacha was redenominated in 2013, removing three zeros.",
    "ZWL": "The Zimbabwean Dollar has faced extreme hyperinflation leading to reissuance multiple times.",
    "BAM": "The Bosnia and Herzegovina Convertible Mark is pegged to the Euro and used in Bosnia and Herzegovina.",
    "ALL": "The Albanian Lek is the official currency of Albania, known for its stability in the region.",
    "AMD": "The Armenian Dram was introduced in 1993 following the collapse of the Soviet Union.",
    "AOA": "The Angolan Kwanza is used in Angola and has undergone redenominations to manage inflation.",
    "ARS": "The Argentine Peso has experienced recurring inflation and currency devaluations.",
    "AWG": "The Aruban Florin is pegged to the US Dollar.",
    "BBD": "The Barbadian Dollar is pegged to the US Dollar.",
    "BGN": "The Bulgarian Lev is pegged to the Euro.",
    "BIF": "The Burundian Franc is a non-convertible currency.",
    "BMD": "The Bermudian Dollar is pegged to the US Dollar.",
    "BND": "The Brunei Dollar is pegged to the Singapore Dollar.",
    "BOB": "The Bolivian Boliviano has maintained relative stability since its introduction.",
    "BWP": "The Botswana Pula is one of Africa's strongest currencies.",
    "BYN": "The Belarusian Ruble has undergone several redenominations.",
    "BZD": "The Belize Dollar is pegged to the US Dollar.",
    "CDF": "The Congolese Franc is the currency of the Democratic Republic of Congo.",
    "CRC": "The Costa Rican Colón is named after Christopher Columbus.",
    "CUC": "The Cuban Convertible Peso is used for tourism and foreign trade in Cuba.",
    "CUP": "The Cuban Peso is the local currency for Cuban citizens.",
    "CVE": "The Cape Verdean Escudo is pegged to the Euro.",
    "CZK": "The Czech Koruna is the currency of the Czech Republic.",
    "ERN": "The Eritrean Nakfa features images of resistance fighters.",
    "FJD": "The Fijian Dollar features images of Queen Elizabeth II.",
    "FKP": "The Falkland Islands Pound is pegged to the British Pound.",
    "GMD": "The Gambian Dalasi is used in The Gambia.",
    "GNF": "The Guinean Franc has faced high inflation.",
    "GTQ": "The Guatemalan Quetzal is named after the national bird, the Resplendent Quetzal.",
    "GYD": "The Guyanese Dollar features local wildlife.",
    "HNL": "The Honduran Lempira is named after a 16th-century indigenous leader.",
    "HRK": "The Croatian Kuna was replaced by the Euro in 2023.", // Note: Croatian Kuna is no longer in use as Croatia adopted the Euro. Keeping it for historical context.
    "HTG": "The Haitian Gourde has faced significant depreciation.",
    "HUF": "The Hungarian Forint was introduced after World War II.",
    "ISK": "The Icelandic Króna is a free-floating currency.",
    "JMD": "The Jamaican Dollar features images of national heroes.",
    "KGS": "The Kyrgyzstani Som was introduced shortly after independence.",
    "KHR": "The Cambodian Riel is one of the world's lowest-valued currencies.",
    "KMF": "The Comorian Franc is pegged to the Euro.",
    "KPW": "The North Korean Won is not convertible for tourists.",
    "KYD": "The Cayman Islands Dollar is pegged to the US Dollar.",
    "LAK": "The Lao Kip is one of the lowest valued currencies in the world.",
    "LRD": "The Liberian Dollar has been reissued multiple times.",
    "LSL": "The Lesotho Loti is pegged to the South African Rand.",
    "MDL": "The Moldovan Leu has faced periods of instability.",
    "MGA": "The Malagasy Ariary is one of only two non-decimal currencies in the world.",
    "MKD": "The Macedonian Denar was introduced after independence.",
    "MMK": "The Burmese Kyat has faced multiple devaluations.",
    "MNT": "The Mongolian Tögrög features images of Genghis Khan.",
    "MOP": "The Macanese Pataca is pegged to the Hong Kong Dollar.",
    "MRU": "The Mauritanian Ouguiya is one of only two non-decimal currencies in the world.",
    "MUR": "The Mauritian Rupee features images of prominent figures and landscapes.",
    "MVR": "The Maldivian Rufiyaa features traditional Maldivian designs.",
    "MWK": "The Malawian Kwacha is the currency of Malawi.",
    "MZN": "The Mozambican Metical has undergone redenomination.",
    "NAD": "The Namibian Dollar is pegged to the South African Rand.",
    "NIO": "The Nicaraguan Córdoba is named after Francisco Hernández de Córdoba.",
    "PAB": "The Panamanian Balboa circulates alongside the US Dollar.",
    "PEN": "The Peruvian Sol was introduced to replace the hyperinflated Inti.",
    "PGK": "The Papua New Guinean Kina features indigenous art and wildlife.",
    "PYG": "The Paraguayan Guarani is one of the oldest stable currencies in South America.",
    "RON": "The Romanian Leu was redenominated in 2005.",
    "RSD": "The Serbian Dinar is the official currency of Serbia.",
    "RWF": "The Rwandan Franc is known for its diverse imagery.",
    "SBD": "The Solomon Islands Dollar features images of wildlife and traditional culture.",
    "SCR": "The Seychellois Rupee is known for its tropical designs.",
    "SLL": "The Sierra Leonean Leone has faced significant devaluation.",
    "SOS": "The Somali Shilling is the currency of Somalia.",
    "SRD": "The Surinamese Dollar replaced the Surinamese Guilder.",
    "SSP": "The South Sudanese Pound was introduced after South Sudan's independence.",
    "STN": "The São Tomé and Príncipe Dobra was redenominated in 2018.",
    "SZL": "The Swazi Lilangeni is pegged to the South African Rand.",
    "TJS": "The Tajikistani Somoni was introduced to replace the Tajikistani Ruble.",
    "TOP": "The Tongan Paʻanga is not freely convertible outside Tonga.",
    "TTD": "The Trinidad and Tobago Dollar features national birds and landmarks.",
    "TVD": "The Tuvaluan Dollar circulates alongside the Australian Dollar.",
    "UAH": "The Ukrainian Hryvnia was introduced after independence.",
    "UYU": "The Uruguayan Peso has undergone several redenominations.",
    "VUV": "The Vanuatu Vatu is known for its vibrant designs.",
    "WST": "The Samoan Tala is known for its colorful banknotes depicting local scenes.",
    "XAF": "The Central African CFA Franc is used by several countries in Central Africa and pegged to the Euro.",
    "XCD": "The East Caribbean Dollar is used by eight island nations in the Caribbean and pegged to the US Dollar.",
    "XOF": "The West African CFA Franc is used by several countries in West Africa and pegged to the Euro.",
    "XPF": "The CFP Franc is used in French Pacific territories and pegged to the Euro.",
    "YER": "The Yemeni Rial has faced severe devaluation due to conflict."
};

// Global variables
// Initialize everything when the DOM is loaded


// Helper: Normalize input
function normalizeInput(input) {
  return input.trim().toLowerCase();
}

// Get country by name prefix or currency code
function getCountryByInput(input) {
  input = normalizeInput(input);
  for (const country in countries) {
    const data = countries[country];
    const nameMatch = country.toLowerCase().startsWith(input);
    const currencyMatch = data.currency.toLowerCase() === input;
    if (nameMatch || currencyMatch) return country;
  }
  return null;
}

// Get currency code using country or currency code
function getCurrencyCode(input) {
  const country = getCountryByInput(input);
  return country ? countries[country].currency : null;
}

// DOM Elements
const searchField1 = document.getElementById("searchbarfeild1");
const searchField2 = document.getElementById("searchbarfeild2");
const reverseButton = document.querySelector(".rervese button");
const searchButton = document.querySelector(".search button");
const flag1Element = document.querySelector(".flag1 img");
const flag2Element = document.querySelector(".flag2 img");
const exchangeRateElement = document.getElementById("exchangeRate");
const amountInput = document.getElementById("amount");
const convertedAmountElement = document.getElementById("convertedAmount");
const messageDisplayedElement = document.getElementById("mesaagedisplayed");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  searchField1.value = "United States";
  searchField2.value = "India";
  updateFlags();

  reverseButton.addEventListener("click", reverseFields);
  searchButton.addEventListener("click", handleSearch);

  searchField1.addEventListener("keypress", e => {
    if (e.key === "Enter") handleSearch();
  });

  searchField2.addEventListener("keypress", e => {
    if (e.key === "Enter") handleSearch();
  });
});

function updateFlags() {
  const country1 = getCountryByInput(searchField1.value);
  const country2 = getCountryByInput(searchField2.value);

  flag1Element.src = country1 ? `https://flagsapi.com/${countries[country1].flag}/flat/64.png` : "";
  flag2Element.src = country2 ? `https://flagsapi.com/${countries[country2].flag}/flat/64.png` : "";
}

function reverseFields() {
  const temp = searchField1.value;
  searchField1.value = searchField2.value;
  searchField2.value = temp;
  updateFlags();
  fetchExchangeRate();
}

async function handleSearch() {
  updateFlags();
  await fetchExchangeRate();
}

async function fetchExchangeRate() {
  const currencyFrom = getCurrencyCode(searchField1.value);
  const currencyTo = getCurrencyCode(searchField2.value);
  const countryFrom = getCountryByInput(searchField1.value);
  const countryTo = getCountryByInput(searchField2.value);

  if (!currencyFrom || !currencyTo) {
    exchangeRateElement.innerHTML = 'Invalid currency input';
    return;
  }

  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${currencyFrom}`);
    const data = await res.json();

    if (data.result === "success" && data.rates[currencyTo]) {
      const rate = data.rates[currencyTo];
      exchangeRateElement.innerHTML = `1 ${currencyFrom} = ${rate.toFixed(4)} ${currencyTo}`;

      const amount = parseFloat(amountInput.value);
      if (!isNaN(amount)) {
        const convertedAmount = amount * rate;
        convertedAmountElement.innerHTML = `${amount} ${currencyFrom} = ${convertedAmount.toFixed(4)} ${currencyTo}`;
      } else {
        convertedAmountElement.innerHTML = 'Please enter a valid amount';
      }

      // Currency strength info
      const rateFromUSD = currencyFrom === 'USD' ? 1 : 1 / data.rates['USD'];
      const rateToUSD = currencyTo === 'USD' ? 1 : 1 / (data.rates['USD'] / rate);

      if (rateFromUSD < rateToUSD) {
        messageDisplayedElement.innerHTML = countryInfo[currencyFrom] || '';
      } else if (rateFromUSD > rateToUSD) {
        messageDisplayedElement.innerHTML = countryInfo[currencyTo] || '';
      } else {
        messageDisplayedElement.innerHTML = '';
      }
    } else {
      exchangeRateElement.innerHTML = 'Exchange rate not found';
    }
  } catch (err) {
    console.error('API Error:', err);
    exchangeRateElement.innerHTML = 'Error fetching rate';
  }
}
