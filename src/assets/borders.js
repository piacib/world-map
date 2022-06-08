// convert wikipedia data into object of {countryName : borderingCountries[]}
let obj = {
  Abkhazia: "Russia: 241 km (150 mi)\n Georgia: 141 km (88 mi)",
  Afghanistan:
    "People's Republic of China: 76 km (47 mi)\n Iran: 935 km (581 mi)\n Pakistan: 2,430 km (1,510 mi)\n Tajikistan: 1,206 km (749 mi)\n Turkmenistan: 744 km (462 mi)\n Uzbekistan: 137 km (85 mi).",
  Albania:
    "Greece: 282 km (175 mi)\n Kosovo:[4] 112 km (70 mi)\n North Macedonia: 151 km (94 mi)\n Montenegro: 172 km (107 mi)",
  Algeria:
    "Libya: 982 km (610 mi)\n Mali: 1,376 km (855 mi)\n Mauritania: 463 km (288 mi)\n Morocco: 1,559 km (969 mi)\n Niger: 956 km (594 mi)\n Tunisia: 1,010 km (630 mi)\n Western Sahara:[5] 42 km (26 mi)",
  Andorra: "France: 56.6 km (35.2 mi)\n Spain: 63.7 km (39.6 mi)",
  Angola:
    "Democratic Republic of the Congo (2): 2,511 km (1,560 mi)[6]\n Republic of the Congo: 201 km (125 mi)\n Namibia: 1,376 km (855 mi)\n Zambia: 1,110 km (690 mi)",
  "Antigua and Barbuda": "",
  Argentina:
    "Bolivia: 832 km (517 mi)\n Brazil: 1,224 km (761 mi)\n Chile (2): 5,300 km (3,300 mi)[7]\n Paraguay: 1,880 km (1,170 mi)\n Uruguay: 579 km (360 mi)",
  Armenia:
    "Azerbaijan (6): 787 km (489 mi)[8]\n Georgia: 164 km (102 mi)\n Iran: 35 km (22 mi)\n Turkey: 268 km (167 mi)",
  Australia: "",
  Austria:
    "Czech Republic: 362 km (225 mi)\n Germany: 784 km (487 mi)\n Hungary: 366 km (227 mi)\n Italy: 430 km (270 mi)\n Liechtenstein: 34 km (21 mi)\n Slovakia: 91 km (57 mi)\n Slovenia: 330 km (210 mi)\n  Switzerland (2): 164 km (102 mi)",
  Azerbaijan:
    "Armenia (6): 787 km (489 mi)[8]\n Georgia: 322 km (200 mi)\n Iran (2):[9] 432 km (268 mi)\n Russia: 284 km (176 mi)\n Turkey:[10] 9 km (5.6 mi)",
  Bahamas: "",
  Bahrain: "",
  Bangladesh:
    "India (2), including Dahagram-Angarpota:[11] 4,053 km (2,518 mi)\n Myanmar: 193 km (120 mi)",
  Barbados: "",
  Belarus:
    "Latvia: 141 km (88 mi)\n Lithuania: 502 km (312 mi)\n Poland: 407 km (253 mi)\n Russia: 959 km (596 mi)\n Ukraine: 891 km (554 mi)",
  Belgium:
    "France: 620 km (390 mi)\n Germany (6):[12] 167 km (104 mi)\n Luxembourg: 148 km (92 mi)\n Netherlands (31):[13] 450 km (280 mi)",
  Belize: "Guatemala: 266 km (165 mi)\n Mexico: 250 km (160 mi)",
  Benin:
    "Burkina Faso: 306 km (190 mi)\n Niger: 266 km (165 mi)\n Nigeria: 773 km (480 mi)\n Togo: 644 km (400 mi)",
  Bhutan:
    "People's Republic of China: 470 km (290 mi)\n India: 605 km (376 mi)",
  Bolivia:
    "Argentina: 832 km (517 mi)\n Brazil: 3,400 km (2,100 mi)\n Chile: 861 km (535 mi)\n Paraguay: 750 km (470 mi)\n Peru: 900 km (560 mi)",
  "Bosnia and Herzegovina":
    "Croatia (2): 932 km (579 mi)\n Montenegro: 225 km (140 mi)\n Serbia (2):[14] 302 km (188 mi)",
  Botswana:
    "Namibia: 1,360 km (850 mi)\n South Africa: 1,840 km (1,140 mi)\n Zambia: 0.15 km (0.093 mi)\n Zimbabwe: 813 km (505 mi)",
  Brazil:
    "Argentina: 1,224 km (761 mi)\n Bolivia: 3,400 km (2,100 mi)\n Colombia: 1,643 km (1,021 mi)\n French Guiana[15] (France): 673 km (418 mi)\n Guyana: 1,119 km (695 mi)\n Paraguay: 1,290 km (800 mi)\n Peru: 1,560 km (970 mi)\n Suriname: 597 km (371 mi)\n Uruguay: 985 km (612 mi)\n Venezuela: 2,200 km (1,400 mi)",
  Brunei: "Malaysia (2): 381 km (237 mi)",
  Bulgaria:
    "Greece: 494 km (307 mi)\n North Macedonia: 148 km (92 mi)\n Romania: 608 km (378 mi)\n Serbia: 318 km (198 mi)\n Turkey: 240 km (150 mi)",
  "Burkina Faso":
    "Benin: 306 km (190 mi)\n Côte d'Ivoire: 584 km (363 mi)\n Ghana: 549 km (341 mi)\n Mali: 1,000 km (620 mi)\n Niger: 628 km (390 mi)\n Togo: 126 km (78 mi)",
  Burundi:
    "Democratic Republic of the Congo: 233 km (145 mi)\n Rwanda: 290 km (180 mi)\n Tanzania: 451 km (280 mi)",
  Cambodia:
    "Laos: 541 km (336 mi)\n Thailand: 803 km (499 mi)\n Vietnam: 1,228 km (763 mi)",
  Cameroon:
    "Central African Republic: 797 km (495 mi)\n Chad: 1,094 km (680 mi)\n Republic of the Congo: 523 km (325 mi)\n Equatorial Guinea: 189 km (117 mi)\n Gabon: 298 km (185 mi)\n Nigeria: 1,690 km (1,050 mi)",
  Canada: "United States (4): 8,893 km (5,526 mi)[16]",
  "Cape Verde": "",
  "Central African Republic":
    "Cameroon: 797 km (495 mi)\n Chad: 1,197 km (744 mi)\n Democratic Republic of the Congo: 1,577 km (980 mi)\n Republic of the Congo: 467 km (290 mi)\n South Sudan: 682 km (424 mi)\n Sudan: 483 km (300 mi)",
  Chad: "Cameroon: 1,094 km (680 mi)\n Central African Republic: 1,197 km (744 mi)\n Libya: 1,055 km (656 mi)\n Niger: 1,175 km (730 mi)\n Nigeria: 87 km (54 mi)\n Sudan: 1,360 km (850 mi)",
  Chile:
    "Argentina (2): 5,300 km (3,300 mi)[7]\n Bolivia: 861 km (535 mi)\n Peru: 160 km (99 mi)",
  "People's Republic of China[17]":
    "Afghanistan: 76 km (47 mi)\n Bhutan: 470 km (290 mi)\n India (3): 3,380 km (2,100 mi)\n Kazakhstan: 1,533 km (953 mi)\n North Korea: 1,416 km (880 mi)\n Kyrgyzstan: 858 km (533 mi)\n Laos: 423 km (263 mi)\n Mongolia: 4,677 km (2,906 mi)\n Myanmar: 2,185 km (1,358 mi)\n   Nepal: 1,236 km (768 mi)\n\n\n Pakistan: 523 km (325 mi)\n Russia (2): 3,645 km (2,265 mi)\n Tajikistan: 414 km (257 mi)\n Vietnam: 1,281 km (796 mi)",
  Colombia:
    "Brazil: 1,643 km (1,021 mi)\n Ecuador: 590 km (370 mi)\n Panama: 225 km (140 mi)\n Peru: 1,496 km (930 mi)\n Venezuela: 2,050 km (1,270 mi)",
  Comoros: "",
  "Democratic Republic of the Congo":
    "Angola (2): 2,511 km (1,560 mi)[6]\n Burundi: 233 km (145 mi)\n Central African Republic: 1,577 km (980 mi)\n Republic of the Congo: 2,410 km (1,500 mi)\n Rwanda: 217 km (135 mi)\n South Sudan: 628 km (390 mi)\n Tanzania: 459 km (285 mi)\n Uganda: 765 km (475 mi)\n Zambia: 1,930 km (1,200 mi)",
  "Republic of the Congo":
    "Angola: 201 km (125 mi)\n Cameroon: 523 km (325 mi)\n Central African Republic: 467 km (290 mi)\n Democratic Republic of the Congo: 2,410 km (1,500 mi)\n Gabon: 1,903 km (1,182 mi)",
  "Costa Rica": "Nicaragua: 309 km (192 mi)\n Panama: 330 km (210 mi)",
  "Côte d'Ivoire":
    "Burkina Faso: 584 km (363 mi)\n Ghana: 668 km (415 mi)\n Guinea: 610 km (380 mi)\n Liberia: 716 km (445 mi)\n Mali: 532 km (331 mi)",
  Croatia:
    "Bosnia and Herzegovina (2): 932 km (579 mi)\n Hungary: 329 km (204 mi)\n Montenegro: 25 km (16 mi)\n Serbia: 241 km (150 mi)\n Slovenia: 670 km (420 mi)",
  Cuba: "",
  Cyprus: "Akrotiri and Dhekelia[20] (United Kingdom) (5):[19] 152 km (94 mi)",
  "Czech Republic":
    "Austria: 362 km (225 mi)\n Germany: 815 km (506 mi)[21]\n Poland: 658 km (409 mi)\n Slovakia: 215 km (134 mi)",
  Denmark: "Germany: 68 km (42 mi)",
  Djibouti:
    "Eritrea: 125 km (78 mi)\n Ethiopia: 342 km (213 mi)\n Somaliland: 61 km (38 mi)",
  Dominica: "",
  "Dominican Republic": "Haiti: 360 km (220 mi)",
  "East Timor": "Indonesia (2): 228 km (142 mi)",
  Ecuador: "Colombia: 590 km (370 mi)\n Peru: 1,420 km (880 mi)",
  Egypt:
    "Gaza Strip (State of Palestine):[22] 11 km (6.8 mi)\n Israel: 266 km (165 mi)\n Libya: 1,115 km (693 mi)\n Sudan: 1,273 km (791 mi)",
  "El Salvador": "Guatemala: 203 km (126 mi)\n Honduras: 342 km (213 mi)",
  "Equatorial Guinea": "Cameroon: 189 km (117 mi)\n Gabon: 350 km (220 mi)",
  Eritrea:
    "Djibouti: 125 km (78 mi)\n Ethiopia: 912 km (567 mi)\n Sudan: 605 km (376 mi)",
  Estonia: "Latvia: 339 km (211 mi)\n Russia: 294 km (183 mi)",
  Eswatini: "Mozambique: 105 km (65 mi)\n South Africa: 430 km (270 mi)",
  Ethiopia:
    "Djibouti: 342 km (213 mi)\n Eritrea: 912 km (567 mi)\n Kenya: 861 km (535 mi)\n Somalia: 1,600 km (990 mi)\n South Sudan: 883 km (549 mi)\n Sudan: 723 km (449 mi)",
  Fiji: "",
  Finland:
    "Norway: 736 km (457 mi)\n Sweden (2): 614 km (382 mi)\n Russia: 1,340 km (830 mi)",
  "France (excluding French overseas departments, collectivities, and territories)":
    "Andorra: 56.6 km (35.2 mi)\n Belgium: 620 km (390 mi)\n Germany: 451 km (280 mi)\n Italy: 488 km (303 mi)\n Luxembourg: 73 km (45 mi)\n Monaco: 4.4 km (2.7 mi)\n Spain (3):[23] 623 km (387 mi)\n  Switzerland: 573 km (356 mi)",
  "France (including French overseas departments, collectivities, and territories)\nshow\n→includes:":
    "Andorra: 56.6 km (35.2 mi)\n Belgium: 620 km (390 mi)\n Brazil:[25] 673 km (418 mi)\n Germany: 451 km (280 mi)\n Italy: 488 km (303 mi)\n Luxembourg: 73 km (45 mi)\n Monaco: 4.4 km (2.7 mi)\n Sint Maarten[26][27] (Netherlands): 10.2 km (6.3 mi)\n Spain (3):[23] 623 km (387 mi)\n Suriname:[25] 510 km (320 mi)\n  Switzerland: 573 km (356 mi)",
  Gabon:
    "Cameroon: 298 km (185 mi)\n Republic of the Congo: 1,903 km (1,182 mi)\n Equatorial Guinea: 350 km (220 mi)",
  "The Gambia": "Senegal: 740 km (460 mi)",
  Georgia:
    "Armenia: 164 km (102 mi)\n Azerbaijan: 322 km (200 mi)\n Russia: 723 km (449 mi)\n Turkey: 252 km (157 mi)\n Abkhazia: 141 km (88 mi)\n South Ossetia: 334 km (208 mi)",
  Germany:
    "Austria: 784 km (487 mi)\n Belgium (6):[12] 167 km (104 mi)\n Czech Republic: 815 km (506 mi)[21]\n Denmark: 68 km (42 mi)\n France: 451 km (280 mi)\n Luxembourg: 138 km (86 mi)\n Netherlands: 577 km (359 mi)\n Poland: 456 km (283 mi)\n  Switzerland (2):[28] 334 km (208 mi)",
  Ghana:
    "Burkina Faso: 549 km (341 mi)\n Côte d'Ivoire: 668 km (415 mi)\n Togo: 877 km (545 mi)",
  Greece:
    "Albania: 282 km (175 mi)\n Bulgaria: 494 km (307 mi)\n Turkey: 206 km (128 mi)\n North Macedonia: 246 km (153 mi)",
  Grenada: "",
  Guatemala:
    "Belize: 266 km (165 mi)\n El Salvador: 203 km (126 mi)\n Honduras: 256 km (159 mi)\n Mexico: 962 km (598 mi)",
  Guinea:
    "Côte d'Ivoire: 610 km (380 mi)\n Guinea-Bissau: 386 km (240 mi)\n Liberia: 563 km (350 mi)\n Mali: 858 km (533 mi)\n Senegal: 330 km (210 mi)\n Sierra Leone: 652 km (405 mi)",
  "Guinea-Bissau": "Guinea: 386 km (240 mi)\n Senegal: 338 km (210 mi)",
  Guyana:
    "Brazil: 1,119 km (695 mi)\n Suriname: 600 km (370 mi)\n Venezuela: 743 km (462 mi)",
  Haiti: "Dominican Republic: 360 km (220 mi)",
  Honduras:
    "Guatemala: 256 km (159 mi)\n El Salvador: 342 km (213 mi)\n Nicaragua: 922 km (573 mi)",
  "Hong Kong[29]": "People's Republic of China: 30 km (19 mi)",
  Hungary:
    "Austria: 366 km (227 mi)\n Croatia: 329 km (204 mi)\n Romania: 443 km (275 mi)\n Serbia: 151 km (94 mi)\n Slovakia: 677 km (421 mi)\n Slovenia: 102 km (63 mi)\n Ukraine: 103 km (64 mi)",
  Iceland: "",
  India:
    "Bangladesh: 4,053 km (2,518 mi)\n Bhutan: 605 km (376 mi)\n People's Republic of China: 3,380 km (2,100 mi)\n Myanmar: 1,463 km (909 mi)\n   Nepal: 1,690 km (1,050 mi)\n Pakistan: 2,912 km (1,809 mi)\n Sri Lanka: 0.045 km (0.028 mi) on a land shoal on Ram Setu,[30] see also Borders of India.",
  Indonesia:
    "East Timor (2): 228 km (142 mi)\n Malaysia: 1,782 km (1,107 mi)\n Papua New Guinea: 820 km (510 mi)",
  Iran: "Afghanistan: 936 km (582 mi)\n Armenia: 35 km (22 mi)\n Azerbaijan (2):[9] 432 km (268 mi)\n Iraq: 1,458 km (906 mi)\n Pakistan: 909 km (565 mi)\n Turkey: 499 km (310 mi)\n Turkmenistan: 992 km (616 mi)",
  Iraq: "Iran: 1,458 km (906 mi)\n Jordan: 181 km (112 mi)\n Kuwait: 240 km (150 mi)\n Saudi Arabia: 814 km (506 mi)\n Syria: 605 km (376 mi)\n Turkey: 352 km (219 mi)",
  Ireland: "United Kingdom: 499 km (310 mi)",
  Israel:
    "Egypt: 266 km (165 mi)\n Gaza Strip (State of Palestine):[22] 51 km (32 mi)\n Jordan: 238 km (148 mi)\n Lebanon: 79 km (49 mi)\n Syria: 76 km (47 mi)\n West Bank (state of Palestine):[22] 307 km (191 mi)",
  Italy:
    "Austria: 430 km (270 mi)\n France: 488 km (303 mi)\n San Marino: 39 km (24 mi)\n Slovenia: 232 km (144 mi)\n  Switzerland (2):[31] 740 km (460 mi)\n  Vatican City: 3.2 km (2.0 mi)",
  Jamaica: "",
  Japan: "",
  Jordan:
    "Iraq: 181 km (112 mi)\n Israel: 238 km (148 mi)\n Saudi Arabia: 744 km (462 mi)\n Syria: 375 km (233 mi)\n West Bank (State of Palestine):[22] 97 km (60 mi)",
  Kazakhstan:
    "People's Republic of China: 1,533 km (953 mi)\n Kyrgyzstan: 1,051 km (653 mi)\n Russia: 6,846 km (4,254 mi)\n Turkmenistan: 379 km (235 mi)\n Uzbekistan: 2,203 km (1,369 mi)",
  Kenya:
    "Ethiopia: 861 km (535 mi)\n Somalia: 682 km (424 mi)\n South Sudan: 232 km (144 mi)\n Tanzania: 769 km (478 mi)\n Uganda: 933 km (580 mi)",
  Kiribati: "",
  "North Korea":
    "People's Republic of China: 1,416 km (880 mi)\n South Korea: 238 km (148 mi)\n Russia: 19 km (12 mi)",
  "South Korea": "North Korea: 238 km (148 mi)",
  "Kosovo[4]":
    "Albania: 112 km (70 mi)\n Montenegro: 79 km (49 mi)\n North Macedonia: 159 km (99 mi)\n Serbia: 352 km (219 mi)",
  Kuwait: "Iraq: 240 km (150 mi)\n Saudi Arabia: 222 km (138 mi)",
  Kyrgyzstan:
    "People's Republic of China: 858 km (533 mi)\n Kazakhstan: 1,051 km (653 mi)\n Tajikistan (3):[32] 870 km (540 mi)\n Uzbekistan (6):[33] 1,099 km (683 mi)",
  Laos: "Cambodia: 541 km (336 mi)\n People's Republic of China: 423 km (263 mi)\n Myanmar: 235 km (146 mi)\n Thailand: 1,754 km (1,090 mi)\n Vietnam: 2,130 km (1,320 mi)",
  Latvia:
    "Belarus: 141 km (88 mi)\n Estonia: 339 km (211 mi)\n Lithuania: 453 km (281 mi)\n Russia: 217 km (135 mi)",
  Lebanon: "Israel: 79 km (49 mi)\n Syria: 375 km (233 mi)",
  Lesotho: "South Africa: 909 km (565 mi)",
  Liberia:
    "Guinea: 563 km (350 mi)\n Côte d'Ivoire: 716 km (445 mi)\n Sierra Leone: 306 km (190 mi)",
  Libya:
    "Algeria: 982 km (610 mi)\n Chad: 1,055 km (656 mi)\n Egypt: 1,115 km (693 mi)\n Niger: 354 km (220 mi)\n Sudan: 383 km (238 mi)\n Tunisia: 459 km (285 mi)",
  Liechtenstein: "Austria: 34 km (21 mi)\n  Switzerland: 41 km (25 mi)",
  Lithuania:
    "Belarus: 502 km (312 mi)\n Latvia: 453 km (281 mi)\n Poland: 91 km (57 mi)\n Russia:[34] 227 km (141 mi)",
  Luxembourg:
    "Belgium: 148 km (92 mi)\n France: 73 km (45 mi)\n Germany: 138 km (86 mi)",
  "Macau[35] (People's Republic of China)":
    "People's Republic of China: 0.34 km (0.21 mi)",
  Madagascar: "",
  "Madeira[36] (Portugal)": "",
  Malawi:
    "Mozambique: 1,569 km (975 mi)\n Tanzania: 475 km (295 mi)\n Zambia: 837 km (520 mi)",
  Malaysia:
    "Brunei (2): 381 km (237 mi)\n Indonesia: 1,782 km (1,107 mi)\n Thailand: 506 km (314 mi)",
  Maldives: "",
  Mali: "Algeria: 1,376 km (855 mi)\n Burkina Faso: 1,000 km (620 mi)\n Côte d'Ivoire: 532 km (331 mi)\n Guinea: 858 km (533 mi)\n Mauritania: 2,237 km (1,390 mi)\n Niger: 821 km (510 mi)\n Senegal: 419 km (260 mi)",
  Malta: "",
  "Marshall Islands": "",
  Mauritania:
    "Algeria: 463 km (288 mi)\n Mali: 2,237 km (1,390 mi)\n Senegal: 813 km (505 mi)\n Western Sahara:[5] 1,561 km (970 mi)",
  Mauritius: "",
  Mexico:
    "Belize: 250 km (160 mi)\n Guatemala: 962 km (598 mi)\n United States: 3,141 km (1,952 mi)",
  "Federated States of Micronesia": "",
  Moldova: "Romania: 450 km (280 mi)\n Ukraine: 939 km (583 mi)",
  Monaco: "France: 4.4 km (2.7 mi)",
  Mongolia:
    "People's Republic of China: 4,677 km (2,906 mi)\n Russia: 3,485 km (2,165 mi)",
  Montenegro:
    "Albania: 172 km (107 mi)\n Bosnia and Herzegovina: 225 km (140 mi)\n Croatia: 25 km (16 mi)\n Kosovo:[4] 79 km (49 mi)\n Serbia: 124 km (77 mi)",
  Morocco:
    "Algeria: 1,559 km (969 mi)\n Western Sahara:[5] 443 km (275 mi)\n Spain (3): 17 km (11 mi)[37]",
  Mozambique:
    "Eswatini: 105 km (65 mi)\n Malawi: 1,569 km (975 mi)\n South Africa (2): 491 km (305 mi)\n Tanzania: 756 km (470 mi)\n Zambia: 419 km (260 mi)\n Zimbabwe: 1,231 km (765 mi)",
  Myanmar:
    "Bangladesh: 193 km (120 mi)\n People's Republic of China: 2,185 km (1,358 mi)\n India: 1,463 km (909 mi)\n Laos: 235 km (146 mi)\n Thailand: 1,800 km (1,100 mi)",
  Namibia:
    "Angola: 1,376 km (855 mi)\n Botswana: 1,360 km (850 mi)\n South Africa: 967 km (601 mi)\n Zambia: 233 km (145 mi)",
  Nauru: "",
  "  Nepal":
    "People's Republic of China: 1,236 km (768 mi)\n India: 1,690 km (1,050 mi)",
  "Netherlands\nshow\n→includes:":
    "Belgium (31): 450 km (280 mi)\n Germany: 577 km (359 mi)\n Saint Martin[38] (France): 10.2 km (6.3 mi)",
  "New Zealand": "",
  Nicaragua: "Costa Rica: 309 km (192 mi)\n Honduras: 922 km (573 mi)",
  Niger:
    "Algeria: 956 km (594 mi)\n Benin: 266 km (165 mi)\n Burkina Faso: 628 km (390 mi)\n Chad: 1,175 km (730 mi)\n Libya: 354 km (220 mi)\n Mali: 821 km (510 mi)\n Nigeria: 1,497 km (930 mi)",
  Nigeria:
    "Benin: 773 km (480 mi)\n Cameroon: 1,690 km (1,050 mi)\n Chad: 87 km (54 mi)\n Niger: 1,497 km (930 mi)",
  "North Macedonia":
    "Albania: 151 km (94 mi)\n Bulgaria: 148 km (92 mi)\n Greece: 246 km (153 mi)\n Kosovo:[4] 159 km (99 mi)\n Serbia: 62 km (39 mi)",
  Norway:
    "Finland: 736 km (457 mi)\n Sweden: 1,619 km (1,006 mi)\n Russia: 196 km (122 mi)",
  Oman: "Saudi Arabia: 676 km (420 mi)\n United Arab Emirates (4): 410 km (250 mi)\n Yemen: 288 km (179 mi)",
  Pakistan:
    "Afghanistan: 2,430 km (1,510 mi)\n India: 2,912 km (1,809 mi)\n Iran: 909 km (565 mi)\n People's Republic of China: 523 km (325 mi)\n",
  Palau: "",
  "Palestine[22]":
    "Egypt: 11 km (6.8 mi)\n Israel: 358 km (222 mi)\n Jordan: 97 km (60 mi)",
  Panama: "Colombia: 225 km (140 mi)\n Costa Rica: 330 km (210 mi)",
  "Papua New Guinea": "Indonesia: 820 km (510 mi)",
  Paraguay:
    "Argentina: 1,880 km (1,170 mi)\n Bolivia: 750 km (470 mi)\n Brazil: 1,290 km (800 mi)",
  Peru: "Bolivia: 900 km (560 mi)\n Brazil: 1,560 km (970 mi)\n Chile: 160 km (99 mi)\n Colombia: 1,496 km (930 mi)\n Ecuador: 1,420 km (880 mi)",
  Philippines: "",
  Poland:
    "Belarus: 407 km (253 mi)\n Czech Republic: 658 km (409 mi)\n Germany: 456 km (283 mi)\n Lithuania: 91 km (57 mi)\n Russia:[34] 206 km (128 mi)\n Slovakia: 444 km (276 mi)\n Ukraine: 526 km (327 mi)",
  Portugal: "Spain: 1,214 km (754 mi)",
  Qatar: "Saudi Arabia: 60 km (37 mi)",
  Romania:
    "Bulgaria: 608 km (378 mi)\n Hungary: 443 km (275 mi)\n Moldova: 450 km (280 mi)\n Serbia: 476 km (296 mi)\n Ukraine (2): 531 km (330 mi)[39]",
  Russia:
    "Azerbaijan: 284 km (176 mi)\n Belarus: 959 km (596 mi)\n People's Republic of China (2): 3,645 km (2,265 mi)\n Estonia: 294 km (183 mi)\n Finland: 1,340 km (830 mi)\n Georgia: 723 km (449 mi)\n Kazakhstan: 6,846 km (4,254 mi)\n North Korea: 19 km (12 mi)\n Latvia: 217 km (135 mi)\n Lithuania:[34] 227 km (141 mi)\n Mongolia: 3,485 km (2,165 mi)\n Norway: 196 km (122 mi)\n Poland:[34] 206 km (128 mi)\n Ukraine: 1,576 km (979 mi)\n",
  Rwanda:
    "Burundi: 290 km (180 mi)\n Democratic Republic of the Congo: 217 km (135 mi)\n Tanzania: 217 km (135 mi)\n Uganda: 169 km (105 mi)",
  "Saint Kitts and Nevis": "",
  "Saint Lucia": "",
  "Saint Vincent and the Grenadines": "",
  Samoa: "",
  "San Marino": "Italy: 39 km (24 mi)",
  "São Tomé and Príncipe": "",
  "Saudi Arabia":
    "Iraq: 814 km (506 mi)\n Jordan: 744 km (462 mi)\n Kuwait: 222 km (138 mi)\n Oman: 676 km (420 mi)\n Qatar: 60 km (37 mi)\n United Arab Emirates: 457 km (284 mi)\n Yemen: 1,458 km (906 mi)",
  Senegal:
    "The Gambia: 740 km (460 mi)\n Guinea: 330 km (210 mi)\n Guinea-Bissau: 338 km (210 mi)\n Mali: 419 km (260 mi)\n Mauritania: 813 km (505 mi)",
  Serbia:
    "Bosnia and Herzegovina (2):[14] 302 km (188 mi)\n Bulgaria: 318 km (198 mi)\n Croatia: 241 km (150 mi)\n Hungary: 151 km (94 mi)\n Kosovo:[4] 352 km (219 mi)\n Montenegro: 124 km (77 mi)\n North Macedonia: 62 km (39 mi)\n Romania: 476 km (296 mi)",
  Seychelles: "",
  "Sierra Leone": "Guinea: 652 km (405 mi)\n Liberia: 306 km (190 mi)",
  Singapore: "",
  Slovakia:
    "Austria: 91 km (57 mi)\n Czech Republic: 215 km (134 mi)\n Hungary: 677 km (421 mi)\n Poland: 444 km (276 mi)\n Ukraine: 97 km (60 mi)",
  Slovenia:
    "Austria: 330 km (210 mi)\n Croatia: 670 km (420 mi)\n Italy: 232 km (144 mi)\n Hungary: 102 km (63 mi)",
  "Solomon Islands": "",
  Somalia:
    "Djibouti: 61 km (38 mi)\n Ethiopia: 1,600 km (990 mi)\n Kenya: 682 km (424 mi)",
  "South Africa":
    "Botswana: 1,840 km (1,140 mi)\n Eswatini: 430 km (270 mi)\n Lesotho: 909 km (565 mi)\n Mozambique (2): 491 km (305 mi)\n Namibia: 967 km (601 mi)\n Zimbabwe: 225 km (140 mi)",
  "South Ossetia[41]": "Russia: 74 km (46 mi)\n Georgia: 334 km (208 mi)",
  "South Sudan":
    "Central African Republic: 682 km (424 mi)\n Democratic Republic of the Congo: 628 km (390 mi)\n Ethiopia: 883 km (549 mi)\n Kenya: 232 km (144 mi)\n Sudan: 1,937 km (1,204 mi)\n Uganda: 435 km (270 mi)",
  Spain:
    "Andorra: 63.7 km (39.6 mi)\n France (3):[23] 623 km (387 mi)\n Gibraltar: (United Kingdom) 1.2 km (0.75 mi)\n Portugal: 1,214 km (754 mi)\n Morocco (3): 17 km (11 mi)[37]",
  "Sri Lanka": "",
  Sudan:
    "Central African Republic: 483 km (300 mi)\n Chad: 1,360 km (850 mi)\n Egypt: 1,273 km (791 mi)\n Eritrea: 605 km (376 mi)\n Ethiopia: 723 km (449 mi)\n Libya: 383 km (238 mi)\n South Sudan: 1,937 km (1,204 mi)",
  Suriname:
    "Brazil: 597 km (371 mi)\n French Guiana[15] (France): 510 km (320 mi)\n Guyana: 600 km (370 mi)",
  Sweden:
    "Finland (2): 614 km (382 mi) (including 0.05 km segment with Åland)\n Norway: 1,619 km (1,006 mi)",
  " Switzerland":
    "Austria (2): 164 km (102 mi)\n France: 573 km (356 mi)\n Italy (2):[31] 740 km (460 mi)\n Liechtenstein: 41 km (25 mi)\n Germany (2):[28] 334 km (208 mi)",
  Syria:
    "Iraq: 605 km (376 mi)\n Israel: 76 km (47 mi)\n Jordan: 375 km (233 mi)\n Lebanon: 375 km (233 mi)\n Turkey (2): 822 km (511 mi)",
  "Taiwan[42]": "",
  Tajikistan:
    "Afghanistan: 1,206 km (749 mi)\n People's Republic of China: 414 km (257 mi)\n Kyrgyzstan (3):[32] 870 km (540 mi)\n Uzbekistan (2):[43] 1,161 km (721 mi)",
  Tanzania:
    "Burundi: 451 km (280 mi)\n Democratic Republic of the Congo: 459 km (285 mi)\n Kenya: 769 km (478 mi)\n Malawi: 475 km (295 mi)\n Mozambique: 756 km (470 mi)\n Rwanda: 217 km (135 mi)\n Uganda: 396 km (246 mi)\n Zambia: 338 km (210 mi)",
  Thailand:
    "Cambodia: 803 km (499 mi)\n Laos: 1,754 km (1,090 mi)\n Malaysia: 506 km (314 mi)\n Myanmar: 1,800 km (1,100 mi)",
  Togo: "Benin: 644 km (400 mi)\n Burkina Faso: 126 km (78 mi)\n Ghana: 877 km (545 mi)",
  Tonga: "",
  "Trinidad and Tobago": "",
  Tunisia: "Algeria: 1,010 km (630 mi)\n Libya: 459 km (285 mi)",
  Turkey:
    "Armenia: 268 km (167 mi)\n Azerbaijan:[10] 9 km (5.6 mi)\n Bulgaria: 240 km (150 mi)\n Georgia: 252 km (157 mi)\n Greece: 206 km (128 mi)\n Iran: 499 km (310 mi)\n Iraq: 352 km (219 mi)\n Syria (2): 822 km (511 mi)",
  Turkmenistan:
    "Afghanistan: 744 km (462 mi)\n Iran: 992 km (616 mi)\n Kazakhstan: 379 km (235 mi)\n Uzbekistan: 1,621 km (1,007 mi)",
  Tuvalu: "",
  Uganda:
    "Democratic Republic of the Congo: 765 km (475 mi)\n Kenya: 933 km (580 mi)\n Rwanda: 169 km (105 mi)\n South Sudan: 435 km (270 mi)\n Tanzania: 396 km (246 mi)",
  Ukraine:
    "Belarus: 891 km (554 mi)\n Hungary: 103 km (64 mi)\n Moldova: 939 km (583 mi)\n Poland: 526 km (327 mi)\n Romania (2): 531 km (330 mi)[39]\n Russia: 1,576 km (979 mi)\n Slovakia: 97 km (60 mi)",
  "United Arab Emirates":
    "Oman (4): 410 km (250 mi)\n Saudi Arabia: 457 km (284 mi)",
  "United Kingdom[44]": "Ireland: 499 km (310 mi)",
  "United Kingdom (plus British overseas territories and Crown dependencies)\nshow\n→including:":
    "Cyprus (5):[19] 152 km (94 mi)\n Ireland: 499 km (310 mi)\n Spain:[45] 1.2 km (0.75 mi)",
  "United States":
    "Canada (4): 8,893 km (5,526 mi)[16]\n Mexico: 3,141 km (1,952 mi)",
  Uruguay: "Argentina: 579 km (360 mi)\n Brazil: 985 km (612 mi)",
  Uzbekistan:
    "Afghanistan: 137 km (85 mi)\n Kazakhstan: 2,203 km (1,369 mi)\n Kyrgyzstan (6):[33] 1,099 km (683 mi)\n Tajikistan (2):[43] 1,161 km (721 mi)\n Turkmenistan: 1,621 km (1,007 mi)",
  Vanuatu: "",
  " Vatican City": "Italy: 3.2 km (2.0 mi)",
  Venezuela:
    "Brazil: 2,200 km (1,400 mi)\n Colombia: 2,050 km (1,270 mi)\n Guyana: 743 km (462 mi)",
  Vietnam:
    "Cambodia: 1,228 km (763 mi)\n People's Republic of China: 1,281 km (796 mi)\n Laos: 2,130 km (1,320 mi)",
  "Western Sahara[5]":
    "Algeria: 42 km (26 mi)\n Mauritania: 1,561 km (970 mi)\n Morocco: 443 km (275 mi)",
  Yemen: "Oman: 288 km (179 mi)\n Saudi Arabia: 1,458 km (906 mi)",
  Zambia:
    "Angola: 1,110 km (690 mi)\n Botswana: 0.15 km (0.093 mi)\n Democratic Republic of the Congo: 1,930 km (1,200 mi)\n Malawi: 837 km (520 mi)\n Mozambique: 419 km (260 mi)\n Namibia: 233 km (145 mi)\n Tanzania: 338 km (210 mi)\n Zimbabwe: 797 km (495 mi)",
  Zimbabwe:
    "Botswana: 813 km (505 mi)\n Mozambique: 1,231 km (765 mi)\n South Africa: 225 km (140 mi)\n Zambia: 797 km (495 mi)",
};
let entries = Object.values(obj).map((x) => x.split("\n"));
const splitString = (string) => {
  return string.split("\n");
};
const getName = (string) => {
  const lastChar = string[string.length - 1];
  if (/[a-zA-Z]/.test(lastChar)) {
    return string;
  }
  if (string.length < 2) {
    return string;
  }
  if (/\s/.test(string[0])) {
    return getName(string.slice(1));
  }
  if (string.indexOf(":")) {
    return getName(string.slice(0, string.indexOf(":")));
  }
  const forbiddenRegEx = [/\s/, /\[/, /\]/, /\(/, /\)/, /[0-9]/];
  forbiddenRegEx.forEach(
    (regex) =>
      regex.test(lastChar) && getName(string.slice(0, string.length - 2))
  );
  return string;
};
entries.map((array) => array.map((entry) => getName(entry)));
