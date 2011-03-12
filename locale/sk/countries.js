var _countries = {"": "", "WF": "Z\u00e1morsk\u00e9 terit\u00f3rium Wallisu a Futuny", "BF": "Burkina Faso", "BG": "Bulharsko", "BA": "Bosna a Hercegovina", "BB": "Barbados", "BE": "Belgicko", "BL": "Sv\u00e4t\u00fd Bartolomej", "BM": "Bermudy", "BN": "Brunej", "BO": "Bol\u00edvia", "BH": "Bahrajn", "BI": "Burundi", "BJ": "Benin", "BT": "Bhut\u00e1n", "JM": "Jamajka", "BV": "Bouvetov ostrov", "BW": "Botswana", "WS": "Z\u00e1padn\u00e1 Samoa", "BR": "Braz\u00edlia", "BS": "Bahamy", "JE": "Jersey", "BY": "Bielorusko", "BZ": "Belize", "RU": "Rusko", "RW": "Rwanda", "RS": "Srbsko", "TL": "Timor-Leste", "RE": "Ostrov R\u00e9union", "LU": "Luxembursko", "TJ": "Tad\u017eikistan", "RO": "Rumunsko", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "Ju\u017en\u00e1 Georgia a Ju\u017en\u00e9 Sandwich ostrovy", "GR": "Gr\u00e9cko", "GQ": "Rovn\u00edkov\u00e1 Guinea", "GP": "Guadeloupe", "JP": "Japonsko", "GY": "Guyana", "GG": "Guernsey", "GF": "Franc\u00fazska Guyana", "GE": "Gruz\u00ednsko", "GD": "Grenada", "GB": "Spojen\u00e9 kr\u00e1\u013eovstvo", "GA": "Gabon", "SV": "Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Gr\u00f3nsko", "KW": "Kuvajt", "GI": "Gibralt\u00e1r", "GH": "Ghana", "OM": "Om\u00e1n", "TN": "Tunisko", "IL": "Izrael", "JO": "Jord\u00e1nsko", "HR": "Chorv\u00e1tsko", "HT": "Haiti", "HU": "Ma\u010farsko", "HK": "Hongkong", "HN": "Honduras", "HM": "Ostrovy Heard a McDonald", "AD": "Andorra", "PR": "Portoriko", "PS": "Palest\u00ednske \u00fazemia", "IO": "Britsk\u00e9 Indicko-oce\u00e1nske \u00fazemie", "PW": "Palau", "PT": "Portugalsko", "KR": "Ju\u017en\u00e1 K\u00f3rea", "PY": "Paraguaj", "AI": "Anguilla", "PA": "Panama", "PF": "Franc\u00fazska Polyn\u00e9zia", "PG": "Papua-Nov\u00e1 Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Filip\u00edny", "PN": "Pitcairnove ostrovy", "PL": "Po\u013esko", "PM": "Sv\u00e4t\u00fd Pierre a Miquelon", "ZM": "Zambia", "EH": "Z\u00e1padn\u00e1 Sahara", "EE": "Est\u00f3nsko", "EG": "Egypt", "ZA": "JAR", "EC": "Ekv\u00e1dor", "AL": "Alb\u00e1nsko", "AO": "Angola", "KZ": "Kazachstan", "ET": "Eti\u00f3pia", "ZW": "Zimbabwe", "KY": "Kajmansk\u00e9 ostrovy", "ES": "\u0160panielsko", "ER": "Eritrea", "ME": "\u010cierna Hora", "MD": "Moldavsko", "MG": "Madagaskar", "MF": "Sv\u00e4t\u00fd Martin", "UY": "Uruguaj", "MC": "Monako", "UZ": "Uzbekistan", "MM": "Mjanmarsko", "ML": "Mali", "MO": "Macau", "MN": "Mongolsko", "MH": "Marshallove ostrovy", "US": "USA", "UM": "USA (mal\u00e9 ostrovy)", "MT": "Malta", "MW": "Malawi", "MV": "Maldivy", "MQ": "Martinik", "MP": "Severn\u00e9 Mari\u00e1ny, ostrovy", "MS": "Montserrat", "MR": "Mauret\u00e1nia", "AU": "Austr\u00e1lia", "UG": "Uganda", "UA": "Ukrajina", "MX": "Mexiko", "MZ": "Mozambik", "FR": "Franc\u00fazsko", "MA": "Maroko", "AF": "Afganistan", "AX": "Alandsk\u00e9 ostrovy", "FI": "F\u00ednsko", "FJ": "Fid\u017ei", "FK": "Falklandy (Malv\u00edny)", "FM": "Mikron\u00e9zia", "FO": "Faersk\u00e9 ostrovy", "NI": "Nikaragua", "NL": "Holandsko", "NO": "N\u00f3rsko", "NA": "Nam\u00edbia", "NC": "Nov\u00e1 Kaled\u00f3nia", "NE": "Niger", "NF": "Ostrov Norfolk", "NG": "Nig\u00e9ria", "NZ": "Nov\u00fd Z\u00e9land", "NP": "Nep\u00e1l", "NR": "Nauru", "NU": "Niue", "CK": "Cookove ostrovy", "CI": "Pobre\u017eie Slonoviny", "CH": "\u0160vaj\u010diarsko", "CO": "Kolumbia", "CN": "\u010c\u00edna", "CM": "Kamerun", "CL": "\u010cile", "CC": "Kokosov\u00e9 ostrovy", "CA": "Kanada", "CG": "Kon\u017esk\u00e1 demokratick\u00e1 republika", "CF": "Stredoafrick\u00e1 republika", "CD": "Kon\u017esk\u00e1 republika", "CZ": "\u010cesk\u00e1 republika", "CY": "Cyprus", "CX": "Viano\u010dn\u00fd ostrov", "CR": "Kostarika", "KP": "K\u013dDR", "CV": "Kapverdsk\u00e9 ostrovy", "CU": "Kuba", "SZ": "Svazijsko", "SY": "S\u00fdria", "KG": "Kirgizsko", "KE": "Ke\u0148a", "SR": "Surinam", "KI": "Kiribati", "KH": "Kambod\u017ea", "KN": "Sv\u00e4t\u00fd Kri\u0161tof a Nevis", "KM": "Komory", "ST": "Sv\u00e4t\u00fd Tom\u00e1\u0161 a Princov ostrov", "SK": "Slovensko", "SJ": "Ostrovy Svalbard a Jan Mayen", "SI": "Slovinsko", "SH": "Sv\u00e4t\u00e1 Helena", "SO": "Som\u00e1lsko", "SN": "Senegal", "SM": "San Mar\u00edno", "SL": "Sierra Leone", "SC": "Seychely", "SB": "\u0160alam\u00fanove ostrovy", "SA": "Saudsk\u00e1 Ar\u00e1bia", "SG": "Singapur", "SE": "\u0160v\u00e9dsko", "SD": "Sud\u00e1n", "DO": "Dominik\u00e1nska republika", "DM": "Dominika", "DJ": "D\u017eibuti", "DK": "D\u00e1nsko", "DE": "Nemecko", "YE": "Jemen", "AT": "Rak\u00fasko", "DZ": "Al\u017e\u00edrsko", "MK": "Maced\u00f3nsko", "YT": "Mayotte", "MU": "Maur\u00edcius", "LB": "Libanon", "LC": "Sv\u00e4t\u00e1 Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad a Tobago", "TR": "Turecko", "LK": "Sr\u00ed Lanka", "LI": "Lichten\u0161tajnsko", "LV": "Loty\u0161sko", "TO": "Tonga", "LT": "Litva", "TM": "Turkm\u00e9nsko", "LR": "Lib\u00e9ria", "LS": "Lesotho", "TH": "Thajsko", "TF": "Franc\u00fazske ju\u017en\u00e9 \u00fazemia", "TG": "Togo", "TD": "\u010cad", "TC": "Ostrovy Turks a Caicos", "LY": "L\u00edbya", "VA": "Vatik\u00e1n", "VC": "Sv\u00e4t\u00fd Vincent a Grenad\u00edny", "AE": "Spojen\u00e9 Arabsk\u00e9 Emir\u00e1ty", "VE": "Venezuela", "AG": "Antigua a Barbuda", "VG": "Britsk\u00e9 Panensk\u00e9 ostrovy", "IQ": "Irak", "VI": "Panensk\u00e9 ostrovy Spojen\u00fdch \u0161t\u00e1tov", "IS": "Island", "IR": "Ir\u00e1n", "AM": "Arm\u00e9nsko", "IT": "Taliansko", "VN": "Vietnam", "AN": "Holandsk\u00e9 Antily", "AQ": "Antarkt\u00edda", "AS": "Americk\u00e1 Samoa", "AR": "Argent\u00edna", "IM": "Ostrov Man", "VU": "Vanuatu", "AW": "Aruba", "IN": "India", "TZ": "Tanz\u00e1nia", "AZ": "Azerbajd\u017ean", "IE": "\u00cdrsko", "ID": "Indon\u00e9zia", "MY": "Malajzia", "QA": "Katar", "BD": "Banglad\u00e9\u0161"}