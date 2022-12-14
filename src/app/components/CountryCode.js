
  const countriecodes = [
    {key: '+93', value: '+93', text: '+93', name: 'Afghanistan', flag: 'af' },
    {key: '+355', value: '+355', text: '+355', name: 'Albania', flag: 'al' },
    {key: '+213', value: '+213', text: '+213', name: 'Algeria', flag: 'dz' },
    {key: '+376', value: '+376', text: '+376', name: 'Andorra', flag: 'ad' },
    {key: '+244', value: '+244', text: '+244', name: 'Angola', flag: 'ao' },
    {key: '+54', value: '+54', text: '+54', name: 'Argentina', flag: 'ar' },
    {key: '+374', value: '+374', text: '+374', name: 'Armenia', flag: 'am' },
    {key: '+297', value: '+297', text: '+297', name: 'Aruba', flag: 'aw' },
    {key: '+61', value: '+61', text: '+61', name: 'Australia', flag: 'au' },
    {key: '+43', value: '+43', text: '+43', name: 'Austria', flag: 'at' },
    {key: '+994', value: '+994', text: '+994', name: 'Azerbaijan', flag: 'az' },
    {key: '+973', value: '+973', text: '+973', name: 'Bahrain', flag: 'bh'},
    {key: '+880', value: '+880', text: '+880', name: 'Bangladesh', flag: 'bd' },
    {key: '+375', value: '+375', text: '+375', name: 'Belarus', flag: 'by' },
    {key: '+32', value: '+32', text: '+32', name: 'Belgium', flag: 'be' },
    {key: '+501', value: '+501', text: '+501', name: 'Belize', flag: 'bz' },
    {key: '+229', value: '+229', text: '+229', name: 'Benin', flag: 'bj' },
    {key: '+975', value: '+975', text: '+975', name: 'Bhutan', flag: 'bt' },
    {key: '+591', value: '+591', text: '+591', name: 'Bolivia', flag: 'bo' },
    {key: '+387', value: '+387', text: '+387', name: 'Bosnia', flag: 'ba' },
    {key: '+267', value: '+267', text: '+267', name: 'Botswana', flag: 'bw' },
    {key: '+55', value: '+55', text: '+55', name: 'Brazil', flag: 'br' },
    {key: '+673', value: '+673', text: '+673', name: 'Brunei', flag: 'bn' },
    {key: '+359', value: '+359', text: '+359', name: 'Bulgaria', flag: 'bg' },
    {key: '+226', value: '+226', text: '+226', name: 'Burkina Faso', flag: 'bf' },
    {key: '+95', value: '+95', text: '+95', name: 'Burma', flag: 'mm', alias: 'Myanmar' },
    {key: '+257', value: '+257', text: '+257', name: 'Burundi', flag: 'bi' },
    {key: '+855', value: '+855', text: '+855', name: 'Cambodia', flag: 'kh' },
    {key: '+237', value: '+237', text: '+237', name: 'Cameroon', flag: 'cm' },
    {key: '+238', value: '+238', text: '+238', name: 'Cape Verde', flag: 'cv' },
    {key: '+236', value: '+236', text: '+236', name: 'Central African Republic', flag: 'cf' },
    {key: '+235', value: '+235', text: '+235', name: 'Chad', flag: 'td' },
    {key: '+56', value: '+56', text: '+56', name: 'Chile', flag: 'cl' },
    {key: '+86', value: '+86', text: '+86', name: 'China', flag: 'cn' },
    {key: '+57', value: '+57', text: '+57', name: 'Colombia', flag: 'co' },
    {key: '+269', value: '+269', text: '+269', name: 'Comoros', flag: 'km' },
    {key: '+243', value: '+243', text: '+243', name: 'Congo', flag: 'cd' },
    {key: '+242', value: '+242', text: '+242', name: 'Congo Brazzaville', flag: 'cg' },
    {key: '+682', value: '+682', text: '+682', name: 'Cook Islands', flag: 'ck' },
    {key: '+506', value: '+506', text: '+506', name: 'Costa Rica', flag: 'cr' },
    {key: '+225', value: '+225', text: '+225', name: 'Cote Divoire', flag: 'ci' },
    {key: '+385', value: '+385', text: '+385', name: 'Croatia', flag: 'hr' },
    {key: '+53', value: '+53', text: '+53', name: 'Cuba', flag: 'cu' },
    {key: '+357', value: '+357', text: '+357', name: 'Cyprus', flag: 'cy' },
    {key: '+420', value: '+420', text: '+420', name: 'Czech Republic', flag: 'cz' },
    {key: '+45', value: '+45', text: '+45', name: 'Denmark', flag: 'dk' },
    {key: '+253', value: '+253', text: '+253', name: 'Djibouti', flag: 'dj' },
    {key: '+593', value: '+593', text: '+593', name: 'Ecuador', flag: 'ec' },
    {key: '+20', value: '+20', text: '+20', name: 'Egypt', flag: 'eg' },
    {key: '+503', value: '+503', text: '+503', name: 'El Salvador', flag: 'sv' },
    {key: '+240', value: '+240', text: '+240', name: 'Equatorial Guinea', flag: 'gq' },
    {key: '+291', value: '+291', text: '+291', name: 'Eritrea', flag: 'er' },
    {key: '+372', value: '+372', text: '+372', name: 'Estonia', flag: 'ee' },
    {key: '+251', value: '+251', text: '+251', name: 'Ethiopia', flag: 'et' },
    {key: '+298', value: '+298', text: '+298', name: 'Faroe Islands', flag: 'fo' },
    {key: '+679', value: '+679', text: '+679', name: 'Fiji', flag: 'fj' },
    {key: '+358', value: '+358', text: '+358', name: 'Finland', flag: 'fi' },
    {key: '+33', value: '+33', text: '+33', name: 'France', flag: 'fr' },
    {key: '+594', value: '+594', text: '+594', name: 'French Guiana', flag: 'gf' },
    {key: '+689', value: '+689', text: '+689', name: 'French Polynesia', flag: 'pf' },
    {key: '+241', value: '+241', text: '+241', name: 'Gabon', flag: 'ga' },
    {key: '+220', value: '+220', text: '+220', name: 'Gambia', flag: 'gm' },
    {key: '+995', value: '+995', text: '+995', name: 'Georgia', flag: 'ge' },
    {key: '+49', value: '+49', text: '+49', name: 'Germany', flag: 'de' },
    {key: '+233', value: '+233', text: '+233', name: 'Ghana', flag: 'gh' },
    {key: '+350', value: '+350', text: '+350', name: 'Gibraltar', flag: 'gi' },
    {key: '+30', value: '+30', text: '+30', name: 'Greece', flag: 'gr' },
    {key: '+299', value: '+299', text: '+299', name: 'Greenland', flag: 'gl' },
    {key: '+590', value: '+590', text: '+590', name: 'Guadeloupe', flag: 'gp' },
    {key: '+502', value: '+502', text: '+502', name: 'Guatemala', flag: 'gt' },
    {key: '+224', value: '+224', text: '+224', name: 'Guinea', flag: 'gn' },
    {key: '+245', value: '+245', text: '+245', name: 'Guinea-Bissau', flag: 'gw' },
    {key: '+592', value: '+592', text: '+592', name: 'Guyana', flag: 'gy' },
    {key: '+509', value: '+509', text: '+509', name: 'Haiti', flag: 'ht' },
    {key: '+504', value: '+504', text: '+504', name: 'Honduras', flag: 'hn' },
    {key: '+852', value: '+852', text: '+852', name: 'Hong Kong', flag: 'hk' },
    {key: '+36', value: '+36', text: '+36', name: 'Hungary', flag: 'hu' },
    {key: '+354', value: '+354', text: '+354', name: 'Iceland', flag: 'is' },
    {key: '+91', value: '+91', text: '+91', name: 'India', flag: 'in' },
    {key: '+246', value: '+246', text: '+246', name: 'Indian Ocean Territory', flag: 'io' },
    {key: '+62', value: '+62', text: '+62', name: 'Indonesia', flag: 'id' },
    {key: '+98', value: '+98', text: '+98', name: 'Iran', flag: 'ir' },
    {key: '+964', value: '+964', text: '+964', name: 'Iraq', flag: 'iq' },
    {key: '+353', value: '+353', text: '+353', name: 'Ireland', flag: 'ie' },
    {key: '+972', value: '+972', text: '+972', name: 'Israel', flag: 'il' },
    {key: '+39', value: '+39', text: '+39', name: 'Italy', flag: 'it' },
    {key: '+81', value: '+81', text: '+81', name: 'Japan', flag: 'jp' },
    {key: '+962', value: '+962', text: '+962', name: 'Jordan', flag: 'jo' },
    {key: '+254', value: '+254', text: '+254', name: 'Kenya', flag: 'ke' },
    {key: '+686', value: '+686', text: '+686', name: 'Kiribati', flag: 'ki' },
    {key: '+965', value: '+965', text: '+965', name: 'Kuwait', flag: 'kw' },
    {key: '+996', value: '+996', text: '+996', name: 'Kyrgyzstan', flag: 'kg' },
    {key: '+856', value: '+856', text: '+856', name: 'Laos', flag: 'la' },
    {key: '+371', value: '+371', text: '+371', name: 'Latvia', flag: 'lv' },
    {key: '+961', value: '+961', text: '+961', name: 'Lebanon', flag: 'lb' },
    {key: '+266', value: '+266', text: '+266', name: 'Lesotho', flag: 'ls' },
    {key: '+231', value: '+231', text: '+231', name: 'Liberia', flag: 'lr' },
    {key: '+218', value: '+218', text: '+218', name: 'Libya', flag: 'ly' },
    {key: '+423', value: '+423', text: '+423', name: 'Liechtenstein', flag: 'li' },
    {key: '+370', value: '+370', text: '+370', name: 'Lithuania', flag: 'lt' },
    {key: '+352', value: '+352', text: '+352', name: 'Luxembourg', flag: 'lu' },
    {key: '+853', value: '+853', text: '+853', name: 'Macau', flag: 'mo' },
    {key: '+389', value: '+389', text: '+389', name: 'Macedonia', flag: 'mk' },
    {key: '+261', value: '+261', text: '+261', name: 'Madagascar', flag: 'mg' },
    {key: '+265', value: '+265', text: '+265', name: 'Malawi', flag: 'mw' },
    {key: '+60', value: '+60', text: '+60', name: 'Malaysia', flag: 'my' },
    {key: '+960', value: '+960', text: '+960', name: 'Maldives', flag: 'mv' },
    {key: '+223', value: '+223', text: '+223', name: 'Mali', flag: 'ml' },
    {key: '+356', value: '+356', text: '+356', name: 'Malta', flag: 'mt' },
    {key: '+692', value: '+692', text: '+692', name: 'Marshall Islands', flag: 'mh' },
    {key: '+596', value: '+596', text: '+596', name: 'Martinique', flag: 'mq' },
    {key: '+222', value: '+222', text: '+222', name: 'Mauritania', flag: 'mr' },
    {key: '+230', value: '+230', text: '+230', name: 'Mauritius', flag: 'mu' },
    {key: '+52', value: '+52', text: '+52', name: 'Mexico', flag: 'mx' },
    {key: '+691', value: '+691', text: '+691', name: 'Micronesia', flag: 'fm' },
    {key: '+373', value: '+373', text: '+373', name: 'Moldova', flag: 'md' },
    {key: '+377', value: '+377', text: '+377', name: 'Monaco', flag: 'mc' },
    {key: '+976', value: '+976', text: '+976', name: 'Mongolia', flag: 'mn' },
    {key: '+382', value: '+382', text: '+382', name: 'Montenegro', flag: 'me' },
    {key: '+212', value: '+212', text: '+212', name: 'Morocco', flag: 'ma' },
    {key: '+258', value: '+258', text: '+258', name: 'Mozambique', flag: 'mz' },
    {key: '+264', value: '+264', text: '+264', name: 'Namibia', flag: 'na' },
    {key: '+674', value: '+674', text: '+674', name: 'Nauru', flag: 'nr' },
    {key: '+977', value: '+977', text: '+977', name: 'Nepal', flag: 'np' },
    {key: '+31', value: '+31', text: '+31', name: 'Netherlands', flag: 'nl' },
    {key: '+599', value: '+599', text: '+599', name: 'Netherlands Antilles', flag: 'an' },
    {key: '+687', value: '+687', text: '+687', name: 'New Caledonia', flag: 'nc' },
    {key: '+675', value: '+675', text: '+675', name: 'New Guinea', flag: 'pg' },
    {key: '+64', value: '+64', text: '+64', name: 'New Zealand', flag: 'nz' },
    {key: '+505', value: '+505', text: '+505', name: 'Nicaragua', flag: 'ni' },
    {key: '+227', value: '+227', text: '+227', name: 'Niger', flag: 'ne' },
    {key: '+234', value: '+234', text: '+234', name: 'Nigeria', flag: 'ng' },
    {key: '+683', value: '+683', text: '+683', name: 'Niue', flag: 'nu' },
    {key: '+672', value: '+672', text: '+672', name: 'Norfolk Island', flag: 'nf' },
    {key: '+850', value: '+850', text: '+850', name: 'North Korea', flag: 'kp' },
    {key: '+47', value: '+47', text: '+47', name: 'Norway', flag: 'no' },
    {key: '+968', value: '+968', text: '+968', name: 'Oman', flag: 'om' },
    {key: '+92', value: '+92', text: '+92', name: 'Pakistan', flag: 'pk' },
    {key: '+680', value: '+680', text: '+680', name: 'Palau', flag: 'pw' },
    {key: '+970', value: '+970', text: '+970', name: 'Palestine', flag: 'ps' },
    {key: '+507', value: '+507', text: '+507', name: 'Panama', flag: 'pa' },
    {key: '+595', value: '+595', text: '+595', name: 'Paraguay', flag: 'py' },
    {key: '+51', value: '+51', text: '+51', name: 'Peru', flag: 'pe' },
    {key: '+63', value: '+63', text: '+63', name: 'Philippines', flag: 'ph' },
    {key: '+48', value: '+48', text: '+48', name: 'Poland', flag: 'pl' },
    {key: '+351', value: '+351', text: '+351', name: 'Portugal', flag: 'pt' },
    {key: '+974', value: '+974', text: '+974', name: 'Qatar', flag: 'qa' },
    {key: '+262', value: '+262', text: '+262', name: 'Reunion', flag: 're' },
    {key: '+40', value: '+40', text: '+40', name: 'Romania', flag: 'ro' },
    {key: '+7', value: '+7', text: '+7', name: 'Russia', flag: 'ru' },
    {key: '+250', value: '+250', text: '+250', name: 'Rwanda', flag: 'rw' },
    {key: '+290', value: '+290', text: '+290', name: 'Saint Helena', flag: 'sh' },
    {key: '+508', value: '+508', text: '+508', name: 'Saint Pierre', flag: 'pm' },
    {key: '+685', value: '+685', text: '+685', name: 'Samoa', flag: 'ws' },
    {key: '+378', value: '+378', text: '+378', name: 'San Marino', flag: 'sm' },
    {key: '+500', value: '+500', text: '+500', name: 'Sandwich Islands', flag: 'gs' },
    {key: '+239', value: '+239', text: '+239', name: 'Sao Tome', flag: 'st' },
    {key: '+966', value: '+966', text: '+966', name: 'Saudi Arabia', flag: 'sa' },
    {key: '+221', value: '+221', text: '+221', name: 'Senegal', flag: 'sn' },
    {key: '+381', value: '+381', text: '+381', name: 'Serbia', flag: 'cs' },
    {key: '+248', value: '+248', text: '+248', name: 'Seychelles', flag: 'sc' },
    {key: '+232', value: '+232', text: '+232', name: 'Sierra Leone', flag: 'sl' },
    {key: '+65', value: '+65', text: '+65', name: 'Singapore', flag: 'sg' },
    {key: '+421', value: '+421', text: '+421', name: 'Slovakia', flag: 'sk' },
    {key: '+386', value: '+386', text: '+386', name: 'Slovenia', flag: 'si' },
    {key: '+677', value: '+677', text: '+677', name: 'Solomon Islands', flag: 'sb' },
    {key: '+252', value: '+252', text: '+252', name: 'Somalia', flag: 'so' },
    {key: '+27', value: '+27', text: '+27', name: 'South Africa', flag: 'za' },
    {key: '+82', value: '+82', text: '+82', name: 'South Korea', flag: 'kr' },
    {key: '+34', value: '+34', text: '+34', name: 'Spain', flag: 'es' },
    {key: '+94', value: '+94', text: '+94', name: 'Sri Lanka', flag: 'lk' },
    {key: '+249', value: '+249', text: '+249', name: 'Sudan', flag: 'sd' },
    {key: '+597', value: '+597', text: '+597', name: 'Suriname', flag: 'sr' },
    {key: '+268', value: '+268', text: '+268', name: 'Swaziland', flag: 'sz' },
    {key: '+46', value: '+46', text: '+46', name: 'Sweden', flag: 'se' },
    {key: '+41', value: '+41', text: '+41', name: 'Switzerland', flag: 'ch' },
    {key: '+963', value: '+963', text: '+963', name: 'Syria', flag: 'sy' },
    {key: '+886', value: '+886', text: '+886', name: 'Taiwan', flag: 'tw' },
    {key: '+992', value: '+992', text: '+992', name: 'Tajikistan', flag: 'tj' },
    {key: '+255', value: '+255', text: '+255', name: 'Tanzania', flag: 'tz' },
    {key: '+66', value: '+66', text: '+66', name: 'Thailand', flag: 'th' },
    {key: '+670', value: '+670', text: '+670', name: 'Timor Leste', flag: 'tl' },
    {key: '+228', value: '+228', text: '+228', name: 'Togo', flag: 'tg' },
    {key: '+690', value: '+690', text: '+690', name: 'Tokelau', flag: 'tk' },
    {key: '+676', value: '+676', text: '+676', name: 'Tonga', flag: 'to' },
    {key: '+216', value: '+216', text: '+216', name: 'Tunisia', flag: 'tn' },
    {key: '+90', value: '+90', text: '+90', name: 'Turkey', flag: 'tr' },
    {key: '+993', value: '+993', text: '+993', name: 'Turkmenistan', flag: 'tm' },
    {key: '+688', value: '+688', text: '+688', name: 'Tuvalu', flag: 'tv' },
    {key: '+971', value: '+971', text: '+971', name: 'U.A.E.', flag: 'ae', alias: 'United Arab Emirates' },
    {key: '+256', value: '+256', text: '+256', name: 'Uganda', flag: 'ug' },
    {key: '+380', value: '+380', text: '+380', name: 'Ukraine', flag: 'ua' },
    {key: '+44', value: '+44', text: '+44', name: 'United Kingdom', flag: 'gb', alias: 'uk' },
    {key: '+1', value: '+1', text: '+1', name: 'United States', flag: 'us', alias: 'America' },
    {key: '+598', value: '+598', text: '+598', name: 'Uruguay', flag: 'uy' },
    {key: '+998', value: '+998', text: '+998', name: 'Uzbekistan', flag: 'uz' },
    {key: '+678', value: '+678', text: '+678', name: 'Vanuatu', flag: 'vu' },
    {key: '+379', value: '+379', text: '+379', name: 'Vatican City', flag: 'va' },
    {key: '+58', value: '+58', text: '+58', name: 'Venezuela', flag: 've' },
    {key: '+84', value: '+84', text: '+84', name: 'Vietnam', flag: 'vn' },
    {key: '+681', value: '+681', text: '+681', name: 'Wallis and Futuna', flag: 'wf' },
    {key: '+967', value: '+967', text: '+967', name: 'Yemen', flag: 'ye' },
    {key: '+260', value: '+260', text: '+260', name: 'Zambia', flag: 'zm' },
    {key: '+263', value: '+263', text: '+263', name: 'Zimbabwe', flag: 'zw' },
  ]
  export default countriecodes;