const btcMarkets = {
'ETHBTC':
{
  '2021-03-25': {
    '17': { openPrice: 0.030115, highPrice: 0.030743, lowPrice: 0.030115 },
    '21': { openPrice: 0.03053, highPrice: 0.031332, lowPrice: 0.030527 }
  },
  '2021-03-26': {
    '13': { openPrice: 0.030886, highPrice: 0.030952, lowPrice: 0.030359 },
    '17': { openPrice: 0.030414, highPrice: 0.030746, lowPrice: 0.030281 },
    '21': { openPrice: 0.030695, highPrice: 0.030975, lowPrice: 0.030542 },
    '01': { openPrice: 0.031273, highPrice: 0.031281, lowPrice: 0.030754 },
    '05': { openPrice: 0.030754, highPrice: 0.030944, lowPrice: 0.03053 },
    '09': { openPrice: 0.030921, highPrice: 0.03124, lowPrice: 0.030807 }
  },
  '2021-03-27': {
    '13': { openPrice: 0.030919, highPrice: 0.030953, lowPrice: 0.030733 },
    '17': { openPrice: 0.030794, highPrice: 0.030892, lowPrice: 0.030658 },
    '21': { openPrice: 0.030873, highPrice: 0.030944, lowPrice: 0.030578 },
    '01': { openPrice: 0.030788, highPrice: 0.03102, lowPrice: 0.030788 },
    '05': { openPrice: 0.030953, highPrice: 0.03105, lowPrice: 0.030712 },
    '09': { openPrice: 0.030875, highPrice: 0.031076, lowPrice: 0.030861 }
  },
  '2021-03-28': {
    '13': { openPrice: 0.030526, highPrice: 0.030649, lowPrice: 0.030425 },
    '17': { openPrice: 0.030566, highPrice: 0.030592, lowPrice: 0.030446 },
    '21': { openPrice: 0.030535, highPrice: 0.030538, lowPrice: 0.030287 },
    '01': { openPrice: 0.03061, highPrice: 0.030661, lowPrice: 0.030364 },
    '05': { openPrice: 0.030561, highPrice: 0.030886, lowPrice: 0.030521 },
    '09': { openPrice: 0.030678, highPrice: 0.030703, lowPrice: 0.030501 }
  },
  '2021-03-29': {
    '13': { openPrice: 0.030634, highPrice: 0.030779, lowPrice: 0.030404 },
    '17': { openPrice: 0.030481, highPrice: 0.03061, lowPrice: 0.030273 },
    '21': { openPrice: 0.030494, highPrice: 0.031007, lowPrice: 0.030486 },
    '01': { openPrice: 0.030326, highPrice: 0.030628, lowPrice: 0.030275 },
    '05': { openPrice: 0.030342, highPrice: 0.030439, lowPrice: 0.03021 },
    '09': { openPrice: 0.030246, highPrice: 0.030662, lowPrice: 0.030201 }
  },
  '2021-03-30': {
    '13': { openPrice: 0.03143, highPrice: 0.031435, lowPrice: 0.031224 },
    '17': { openPrice: 0.031284, highPrice: 0.031349, lowPrice: 0.031024 },
    '21': { openPrice: 0.031209, highPrice: 0.031282, lowPrice: 0.03108 },
    '01': { openPrice: 0.030984, highPrice: 0.031817, lowPrice: 0.030953 },
    '05': { openPrice: 0.031491, highPrice: 0.031645, lowPrice: 0.031305 },
    '09': { openPrice: 0.031529, highPrice: 0.03173, lowPrice: 0.031219 }
  },
  '2021-03-31': {
    '13': { openPrice: 0.031107, highPrice: 0.031362, lowPrice: 0.030914 },
    '17': { openPrice: 0.031177, highPrice: 0.031259, lowPrice: 0.031051 },
    '21': { openPrice: 0.031178, highPrice: 0.031383, lowPrice: 0.03112 },
    '01': { openPrice: 0.031276, highPrice: 0.03148, lowPrice: 0.031142 },
    '05': { openPrice: 0.031459, highPrice: 0.031486, lowPrice: 0.031314 },
    '09': { openPrice: 0.031328, highPrice: 0.031587, lowPrice: 0.031027 }
  },
  '2021-04-01': {
    '13': { openPrice: 0.032529, highPrice: 0.032828, lowPrice: 0.032456 },
    '17': { openPrice: 0.032745, highPrice: 0.033174, lowPrice: 0.032695 },
    '21': { openPrice: 0.032777, highPrice: 0.032989, lowPrice: 0.032608 },
    '01': { openPrice: 0.03119, highPrice: 0.03249, lowPrice: 0.031119 },
    '05': { openPrice: 0.032448, highPrice: 0.033043, lowPrice: 0.032396 },
    '09': { openPrice: 0.032674, highPrice: 0.032901, lowPrice: 0.032422 }
  },
  '2021-04-02': {
    '13': { openPrice: 0.033349, highPrice: 0.033658, lowPrice: 0.033323 },
    '17': { openPrice: 0.033561, highPrice: 0.033714, lowPrice: 0.033407 },
    '21': { openPrice: 0.033688, highPrice: 0.035111, lowPrice: 0.033632 },
    '01': { openPrice: 0.032967, highPrice: 0.033701, lowPrice: 0.032583 },
    '05': { openPrice: 0.033506, highPrice: 0.033611, lowPrice: 0.033311 },
    '09': { openPrice: 0.033512, highPrice: 0.033896, lowPrice: 0.033143 }
  },
  '2021-04-03': {
    '13': { openPrice: 0.035344, highPrice: 0.035864, lowPrice: 0.035222 },
    '17': { openPrice: 0.035599, highPrice: 0.035686, lowPrice: 0.035163 },
    '21': { openPrice: 0.035383, highPrice: 0.035635, lowPrice: 0.0352 },
    '01': { openPrice: 0.034865, highPrice: 0.03512, lowPrice: 0.03455 },
    '05': { openPrice: 0.035044, highPrice: 0.0363, lowPrice: 0.035044 },
    '09': { openPrice: 0.03619, highPrice: 0.036265, lowPrice: 0.035222 }
  },
  '2021-04-04': {
    '13': { openPrice: 0.035054, highPrice: 0.035344, lowPrice: 0.034927 },
    '17': { openPrice: 0.035316, highPrice: 0.03575, lowPrice: 0.035272 },
    '21': { openPrice: 0.035674, highPrice: 0.035961, lowPrice: 0.035554 },
    '01': { openPrice: 0.035202, highPrice: 0.035772, lowPrice: 0.034585 },
    '05': { openPrice: 0.03576, highPrice: 0.035792, lowPrice: 0.035055 },
    '09': { openPrice: 0.035204, highPrice: 0.035523, lowPrice: 0.034919 }
  },
  '2021-04-05': {
    '13': { openPrice: 0.035299, highPrice: 0.035475, lowPrice: 0.03521 },
    '17': { openPrice: 0.035431, highPrice: 0.035666, lowPrice: 0.03536 },
    '21': { openPrice: 0.035617, highPrice: 0.036102, lowPrice: 0.035521 },
    '01': { openPrice: 0.035856, highPrice: 0.035947, lowPrice: 0.035533 },
    '05': { openPrice: 0.035567, highPrice: 0.03577, lowPrice: 0.035455 },
    '09': { openPrice: 0.035668, highPrice: 0.035721, lowPrice: 0.035263 }
  },
  '2021-04-06': {
    '13': { openPrice: 0.03607, highPrice: 0.036283, lowPrice: 0.0358 },
    '17': { openPrice: 0.035837, highPrice: 0.036286, lowPrice: 0.035643 },
    '21': { openPrice: 0.036103, highPrice: 0.03619, lowPrice: 0.035608 },
    '01': { openPrice: 0.035803, highPrice: 0.035867, lowPrice: 0.035584 },
    '05': { openPrice: 0.035668, highPrice: 0.036105, lowPrice: 0.035599 },
    '09': { openPrice: 0.035641, highPrice: 0.036306, lowPrice: 0.035608 }
  },
  '2021-04-07': {
    '13': { openPrice: 0.036347, highPrice: 0.036492, lowPrice: 0.0358 },
    '17': { openPrice: 0.035869, highPrice: 0.03587, lowPrice: 0.034981 },
    '21': { openPrice: 0.035121, highPrice: 0.035405, lowPrice: 0.034708 },
    '01': { openPrice: 0.036058, highPrice: 0.036562, lowPrice: 0.03595 },
    '05': { openPrice: 0.0363, highPrice: 0.036605, lowPrice: 0.036175 },
    '09': { openPrice: 0.036419, highPrice: 0.036591, lowPrice: 0.036157 }
  },
  '2021-04-08': {
    '13': { openPrice: 0.035321, highPrice: 0.03565, lowPrice: 0.035257 },
    '17': { openPrice: 0.035558, highPrice: 0.035639, lowPrice: 0.035141 },
    '21': { openPrice: 0.035394, highPrice: 0.035664, lowPrice: 0.035283 },
    '01': { openPrice: 0.035021, highPrice: 0.03538, lowPrice: 0.034838 },
    '05': { openPrice: 0.035319, highPrice: 0.035642, lowPrice: 0.035014 },
    '09': { openPrice: 0.03508, highPrice: 0.035333, lowPrice: 0.03497 }
  },
  '2021-04-09': {
    '13': { openPrice: 0.035742, highPrice: 0.035866, lowPrice: 0.035639 },
    '17': { openPrice: 0.035789, highPrice: 0.035968, lowPrice: 0.035458 },
    '21': { openPrice: 0.035608, highPrice: 0.03565, lowPrice: 0.03536 },
    '01': { openPrice: 0.035653, highPrice: 0.03593, lowPrice: 0.035593 },
    '05': { openPrice: 0.035635, highPrice: 0.035916, lowPrice: 0.035514 },
    '09': { openPrice: 0.035824, highPrice: 0.035978, lowPrice: 0.035666 }
  },
  '2021-04-10': {
    '13': { openPrice: 0.036205, highPrice: 0.036285, lowPrice: 0.035509 },
    '17': { openPrice: 0.035761, highPrice: 0.035856, lowPrice: 0.035533 },
    '21': { openPrice: 0.035669, highPrice: 0.03585, lowPrice: 0.03556 },
    '01': { openPrice: 0.03541, highPrice: 0.035665, lowPrice: 0.035284 },
    '05': { openPrice: 0.035587, highPrice: 0.035668, lowPrice: 0.03547 },
    '09': { openPrice: 0.035546, highPrice: 0.036568, lowPrice: 0.035475 }
  },
  '2021-04-11': {
    '13': { openPrice: 0.035584, highPrice: 0.035738, lowPrice: 0.035471 },
    '17': { openPrice: 0.035719, highPrice: 0.036062, lowPrice: 0.035617 },
    '21': { openPrice: 0.035959, highPrice: 0.036078, lowPrice: 0.035802 },
    '01': { openPrice: 0.035788, highPrice: 0.035854, lowPrice: 0.035575 },
    '05': { openPrice: 0.035732, highPrice: 0.035811, lowPrice: 0.035543 },
    '09': { openPrice: 0.035696, highPrice: 0.035718, lowPrice: 0.035414 }
  },
  '2021-04-12': {
    '13': { openPrice: 0.035596, highPrice: 0.036011, lowPrice: 0.035571 },
    '17': { openPrice: 0.035927, highPrice: 0.03609, lowPrice: 0.035567 },
    '21': { openPrice: 0.035685, highPrice: 0.035712, lowPrice: 0.035344 },
    '01': { openPrice: 0.036022, highPrice: 0.036095, lowPrice: 0.035823 },
    '05': { openPrice: 0.035894, highPrice: 0.036001, lowPrice: 0.03565 },
    '09': { openPrice: 0.035854, highPrice: 0.03595, lowPrice: 0.03558 }
  },
  '2021-04-13': {
    '13': { openPrice: 0.03576, highPrice: 0.035922, lowPrice: 0.035402 },
    '17': { openPrice: 0.035443, highPrice: 0.0355, lowPrice: 0.034883 },
    '21': { openPrice: 0.035416, highPrice: 0.035974, lowPrice: 0.035216 },
    '01': { openPrice: 0.035371, highPrice: 0.035676, lowPrice: 0.035159 },
    '05': { openPrice: 0.035651, highPrice: 0.035842, lowPrice: 0.035639 },
    '09': { openPrice: 0.035714, highPrice: 0.035832, lowPrice: 0.035538 }
  },
  '2021-04-14': {
    '13': { openPrice: 0.036815, highPrice: 0.037214, lowPrice: 0.036728 },
    '17': { openPrice: 0.036872, highPrice: 0.037073, lowPrice: 0.036549 },
    '21': { openPrice: 0.037049, highPrice: 0.037349, lowPrice: 0.036676 },
    '01': { openPrice: 0.035929, highPrice: 0.036603, lowPrice: 0.035723 },
    '05': { openPrice: 0.036468, highPrice: 0.036533, lowPrice: 0.035981 },
    '09': { openPrice: 0.036175, highPrice: 0.036938, lowPrice: 0.036082 }
  },
  '2021-04-15': {
    '13': { openPrice: 0.039258, highPrice: 0.039455, lowPrice: 0.038856 },
    '17': { openPrice: 0.039292, highPrice: 0.039465, lowPrice: 0.0387 },
    '21': { openPrice: 0.038945, highPrice: 0.039684, lowPrice: 0.038796 },
    '01': { openPrice: 0.037262, highPrice: 0.037751, lowPrice: 0.037184 },
    '05': { openPrice: 0.037573, highPrice: 0.0389, lowPrice: 0.037531 },
    '09': { openPrice: 0.038635, highPrice: 0.039286, lowPrice: 0.038335 }
  },
  '2021-04-16': {
    '13': { openPrice: 0.039692, highPrice: 0.039732, lowPrice: 0.038842 },
    '17': { openPrice: 0.039508, highPrice: 0.039978, lowPrice: 0.038742 },
    '21': { openPrice: 0.039158, highPrice: 0.039553, lowPrice: 0.03805 },
    '01': { openPrice: 0.03925, highPrice: 0.039469, lowPrice: 0.038901 },
    '05': { openPrice: 0.039107, highPrice: 0.040177, lowPrice: 0.039071 },
    '09': { openPrice: 0.039795, highPrice: 0.040094, lowPrice: 0.0395 }
  },
  '2021-04-17': {
    '13': { openPrice: 0.03986, highPrice: 0.039984, lowPrice: 0.039501 },
    '17': { openPrice: 0.039636, highPrice: 0.039735, lowPrice: 0.039299 },
    '21': { openPrice: 0.039569, highPrice: 0.03966, lowPrice: 0.038725 },
    '01': { openPrice: 0.039453, highPrice: 0.039526, lowPrice: 0.039124 },
    '05': { openPrice: 0.039376, highPrice: 0.039781, lowPrice: 0.039296 },
    '09': { openPrice: 0.039494, highPrice: 0.040172, lowPrice: 0.039494 }
  },
  '2021-04-18': {
    '13': { openPrice: 0.039314, highPrice: 0.039529, lowPrice: 0.038725 },
    '17': { openPrice: 0.039341, highPrice: 0.039417, lowPrice: 0.038314 },
    '21': { openPrice: 0.038508, highPrice: 0.03883, lowPrice: 0.038113 },
    '01': { openPrice: 0.03891, highPrice: 0.03935, lowPrice: 0.038559 },
    '05': { openPrice: 0.039176, highPrice: 0.039391, lowPrice: 0.038576 },
    '09': { openPrice: 0.038619, highPrice: 0.039744, lowPrice: 0.03705 }
  },
  '2021-04-19': {
    '13': { openPrice: 0.039737, highPrice: 0.039812, lowPrice: 0.039417 },
    '17': { openPrice: 0.039576, highPrice: 0.039608, lowPrice: 0.039114 },
    '21': { openPrice: 0.039343, highPrice: 0.039453, lowPrice: 0.03835 },
    '01': { openPrice: 0.038668, highPrice: 0.039356, lowPrice: 0.038571 },
    '05': { openPrice: 0.039273, highPrice: 0.03989, lowPrice: 0.039187 },
    '09': { openPrice: 0.039816, highPrice: 0.04, lowPrice: 0.039304 }
  },
  '2021-04-20': {
    '13': { openPrice: 0.038301, highPrice: 0.038832, lowPrice: 0.038301 },
    '17': { openPrice: 0.038463, highPrice: 0.039242, lowPrice: 0.038438 },
    '21': { openPrice: 0.03901, highPrice: 0.039536, lowPrice: 0.038667 },
    '01': { openPrice: 0.038382, highPrice: 0.0391, lowPrice: 0.038298 },
    '05': { openPrice: 0.0391, highPrice: 0.03935, lowPrice: 0.038732 },
    '09': { openPrice: 0.038848, highPrice: 0.039, lowPrice: 0.038013 }
  },
  '2021-04-21': {
    '13': { openPrice: 0.041379, highPrice: 0.041813, lowPrice: 0.041342 },
    '17': { openPrice: 0.041482, highPrice: 0.041557, lowPrice: 0.041012 },
    '21': { openPrice: 0.041509, highPrice: 0.043559, lowPrice: 0.041503 },
    '01': { openPrice: 0.039526, highPrice: 0.041092, lowPrice: 0.039419 },
    '05': { openPrice: 0.041092, highPrice: 0.04144, lowPrice: 0.040456 },
    '09': { openPrice: 0.041301, highPrice: 0.041739, lowPrice: 0.040997 }
  },
  '2021-04-22': {
    '13': { openPrice: 0.044678, highPrice: 0.045786, lowPrice: 0.044492 },
    '17': { openPrice: 0.045656, highPrice: 0.046988, lowPrice: 0.045267 },
    '21': { openPrice: 0.04638, highPrice: 0.047784, lowPrice: 0.046324 },
    '01': { openPrice: 0.043505, highPrice: 0.044027, lowPrice: 0.043329 },
    '05': { openPrice: 0.043928, highPrice: 0.044, lowPrice: 0.0433 },
    '09': { openPrice: 0.043817, highPrice: 0.045, lowPrice: 0.043482 }
  },
  '2021-04-23': {
    '13': { openPrice: 0.04538, highPrice: 0.045414, lowPrice: 0.0439 },
    '17': { openPrice: 0.044484, highPrice: 0.046227, lowPrice: 0.04434 },
    '21': { openPrice: 0.04584, highPrice: 0.046965, lowPrice: 0.045181 },
    '01': { openPrice: 0.047754, highPrice: 0.048195, lowPrice: 0.0471 },
    '05': { openPrice: 0.04791, highPrice: 0.048, lowPrice: 0.04555 },
    '09': { openPrice: 0.04639, highPrice: 0.046918, lowPrice: 0.0435 }
  },
  '2021-04-24': {
    '13': { openPrice: 0.04584, highPrice: 0.046198, lowPrice: 0.04534 },
    '17': { openPrice: 0.045634, highPrice: 0.045918, lowPrice: 0.044231 },
    '21': { openPrice: 0.044411, highPrice: 0.045074, lowPrice: 0.04425 },
    '01': { openPrice: 0.046848, highPrice: 0.047026, lowPrice: 0.045903 },
    '05': { openPrice: 0.046461, highPrice: 0.046558, lowPrice: 0.045689 },
    '09': { openPrice: 0.046315, highPrice: 0.04632, lowPrice: 0.045136 }
  },
  '2021-04-25': {
    '13': { openPrice: 0.044074, highPrice: 0.044121, lowPrice: 0.04404 },
    '17': { openPrice: 0.044121, highPrice: 0.046297, lowPrice: 0.044121 },
    '21': { openPrice: 0.046175, highPrice: 0.046696, lowPrice: 0.046117 },
    '01': { openPrice: 0.044826, highPrice: 0.0451, lowPrice: 0.044541 },
    '05': { openPrice: 0.044799, highPrice: 0.045072, lowPrice: 0.044101 },
    '09': { openPrice: 0.044222, highPrice: 0.044752, lowPrice: 0.04371 }
  },
  '2021-04-26': {
    '13': { openPrice: 0.046847, highPrice: 0.047391, lowPrice: 0.046331 },
    '17': { openPrice: 0.046403, highPrice: 0.04714, lowPrice: 0.046195 },
    '21': { openPrice: 0.04697, highPrice: 0.04706, lowPrice: 0.046285 },
    '01': { openPrice: 0.046604, highPrice: 0.046808, lowPrice: 0.045897 },
    '05': { openPrice: 0.045968, highPrice: 0.04735, lowPrice: 0.045777 },
    '09': { openPrice: 0.047284, highPrice: 0.048011, lowPrice: 0.046627 }
  },
  '2021-04-27': {
    '13': { openPrice: 0.046629, highPrice: 0.047065, lowPrice: 0.046582 },
    '17': { openPrice: 0.046676, highPrice: 0.046851, lowPrice: 0.046444 },
    '21': { openPrice: 0.046656, highPrice: 0.048545, lowPrice: 0.046506 },
    '01': { openPrice: 0.046822, highPrice: 0.046987, lowPrice: 0.046 },
    '05': { openPrice: 0.046093, highPrice: 0.047068, lowPrice: 0.046 },
    '09': { openPrice: 0.046896, highPrice: 0.047099, lowPrice: 0.04646 }
  },
  '2021-04-28': {
    '13': { openPrice: 0.047973, highPrice: 0.048208, lowPrice: 0.047523 },
    '17': { openPrice: 0.048148, highPrice: 0.0492, lowPrice: 0.047794 },
    '21': { openPrice: 0.049077, highPrice: 0.049794, lowPrice: 0.0488 },
    '01': { openPrice: 0.048439, highPrice: 0.04868, lowPrice: 0.047626 },
    '05': { openPrice: 0.047886, highPrice: 0.048457, lowPrice: 0.047499 },
    '09': { openPrice: 0.048457, highPrice: 0.0489, lowPrice: 0.047657 }
  },
  '2021-04-29': {
    '13': { openPrice: 0.049651, highPrice: 0.050473, lowPrice: 0.049506 },
    '17': { openPrice: 0.050141, highPrice: 0.05098, lowPrice: 0.050131 },
    '21': { openPrice: 0.050872, highPrice: 0.0519, lowPrice: 0.050836 },
    '01': { openPrice: 0.049334, highPrice: 0.049951, lowPrice: 0.049188 },
    '05': { openPrice: 0.049418, highPrice: 0.050338, lowPrice: 0.048505 },
    '09': { openPrice: 0.050114, highPrice: 0.05015, lowPrice: 0.049501 }
  },
  '2021-04-30': {
    '13': { openPrice: 0.051108, highPrice: 0.051301, lowPrice: 0.050814 },
    '17': { openPrice: 0.051062, highPrice: 0.0512, lowPrice: 0.050438 },
    '21': { openPrice: 0.050513, highPrice: 0.050575, lowPrice: 0.0478 },
    '01': { openPrice: 0.05172, highPrice: 0.0519, lowPrice: 0.05134 },
    '05': { openPrice: 0.051567, highPrice: 0.05189, lowPrice: 0.051011 },
    '09': { openPrice: 0.051486, highPrice: 0.051665, lowPrice: 0.051013 }
  },
  '2021-05-01': {
    '13': { openPrice: 0.0488, highPrice: 0.049555, lowPrice: 0.048795 },
    '17': { openPrice: 0.049513, highPrice: 0.049736, lowPrice: 0.049034 },
    '21': { openPrice: 0.049423, highPrice: 0.049979, lowPrice: 0.049411 },
    '01': { openPrice: 0.047849, highPrice: 0.048939, lowPrice: 0.047702 },
    '05': { openPrice: 0.048833, highPrice: 0.048922, lowPrice: 0.047881 },
    '09': { openPrice: 0.048054, highPrice: 0.048999, lowPrice: 0.047308 }
  },
  '2021-05-02': {
    '13': { openPrice: 0.051401, highPrice: 0.051474, lowPrice: 0.050888 },
    '17': { openPrice: 0.051084, highPrice: 0.051543, lowPrice: 0.050771 },
    '21': { openPrice: 0.051432, highPrice: 0.051843, lowPrice: 0.05126 },
    '01': { openPrice: 0.049968, highPrice: 0.05118, lowPrice: 0.049958 },
    '05': { openPrice: 0.050649, highPrice: 0.051207, lowPrice: 0.050575 },
    '09': { openPrice: 0.050944, highPrice: 0.051556, lowPrice: 0.0509 }
  },
  '2021-05-03': {
    '13': { openPrice: 0.052733, highPrice: 0.054, lowPrice: 0.05254 },
    '17': { openPrice: 0.053528, highPrice: 0.054492, lowPrice: 0.053334 },
    '21': { openPrice: 0.053736, highPrice: 0.055074, lowPrice: 0.053268 },
    '01': { openPrice: 0.051753, highPrice: 0.052676, lowPrice: 0.05163 },
    '05': { openPrice: 0.05213, highPrice: 0.052655, lowPrice: 0.051768 },
    '09': { openPrice: 0.052131, highPrice: 0.052769, lowPrice: 0.051825 }
  },
  '2021-05-04': {
    '13': { openPrice: 0.0583, highPrice: 0.06069, lowPrice: 0.058253 },
    '17': { openPrice: 0.059255, highPrice: 0.062088, lowPrice: 0.058816 },
    '21': { openPrice: 0.061992, highPrice: 0.064412, lowPrice: 0.059971 },
    '01': { openPrice: 0.054929, highPrice: 0.057732, lowPrice: 0.054928 },
    '05': { openPrice: 0.057349, highPrice: 0.060201, lowPrice: 0.057112 },
    '09': { openPrice: 0.060017, highPrice: 0.060411, lowPrice: 0.057321 }
  },
  '2021-05-05': {
    '13': { openPrice: 0.060155, highPrice: 0.061, lowPrice: 0.059522 },
    '17': { openPrice: 0.060889, highPrice: 0.0615, lowPrice: 0.0602 },
    '21': { openPrice: 0.06084, highPrice: 0.061214, lowPrice: 0.05721 },
    '01': { openPrice: 0.060004, highPrice: 0.062584, lowPrice: 0.059022 },
    '05': { openPrice: 0.062577, highPrice: 0.062784, lowPrice: 0.0605 },
    '09': { openPrice: 0.060904, highPrice: 0.061705, lowPrice: 0.059575 }
  },
  '2021-05-06': {
    '13': { openPrice: 0.061087, highPrice: 0.061331, lowPrice: 0.059843 },
    '17': { openPrice: 0.060542, highPrice: 0.060831, lowPrice: 0.0596 },
    '21': { openPrice: 0.060752, highPrice: 0.0629, lowPrice: 0.060401 },
    '01': { openPrice: 0.057349, highPrice: 0.060993, lowPrice: 0.057 },
    '05': { openPrice: 0.060919, highPrice: 0.062004, lowPrice: 0.06021 },
    '09': { openPrice: 0.061359, highPrice: 0.061727, lowPrice: 0.060649 }
  },
  '2021-05-07': {
    '13': { openPrice: 0.061464, highPrice: 0.061866, lowPrice: 0.06064 },
    '17': { openPrice: 0.061581, highPrice: 0.061644, lowPrice: 0.060919 },
    '21': { openPrice: 0.060989, highPrice: 0.062168, lowPrice: 0.0606 },
    '01': { openPrice: 0.062209, highPrice: 0.0631, lowPrice: 0.0612 },
    '05': { openPrice: 0.062037, highPrice: 0.062748, lowPrice: 0.061535 },
    '09': { openPrice: 0.061882, highPrice: 0.062055, lowPrice: 0.061203 }
  },
  '2021-05-08': {
    '13': { openPrice: 0.060788, highPrice: 0.06156, lowPrice: 0.060292 },
    '17': { openPrice: 0.060355, highPrice: 0.060738, lowPrice: 0.059793 },
    '21': { openPrice: 0.060463, highPrice: 0.063119, lowPrice: 0.060299 },
    '01': { openPrice: 0.061905, highPrice: 0.062048, lowPrice: 0.060596 },
    '05': { openPrice: 0.06099, highPrice: 0.061021, lowPrice: 0.060122 },
    '09': { openPrice: 0.060703, highPrice: 0.061887, lowPrice: 0.060304 }
  },
  '2021-05-09': {
    '13': { openPrice: 0.066033, highPrice: 0.068604, lowPrice: 0.065923 },
    '17': { openPrice: 0.067939, highPrice: 0.068324, lowPrice: 0.066517 },
    '21': { openPrice: 0.066529, highPrice: 0.067616, lowPrice: 0.066051 },
    '01': { openPrice: 0.063053, highPrice: 0.065791, lowPrice: 0.062998 },
    '05': { openPrice: 0.064571, highPrice: 0.0673, lowPrice: 0.064547 },
    '09': { openPrice: 0.066439, highPrice: 0.067121, lowPrice: 0.06532 }
  },
  '2021-05-10': {
    '13': { openPrice: 0.068305, highPrice: 0.070431, lowPrice: 0.067933 },
    '17': { openPrice: 0.07035, highPrice: 0.0715, lowPrice: 0.069456 },
    '21': { openPrice: 0.07002, highPrice: 0.072277, lowPrice: 0.069961 },
    '01': { openPrice: 0.06759, highPrice: 0.0689, lowPrice: 0.067266 },
    '05': { openPrice: 0.06746, highPrice: 0.068097, lowPrice: 0.06667 },
    '09': { openPrice: 0.067375, highPrice: 0.06861, lowPrice: 0.065742 }
  },
  '2021-05-11': {
    '13': { openPrice: 0.069913, highPrice: 0.071273, lowPrice: 0.069674 },
    '17': { openPrice: 0.071085, highPrice: 0.072776, lowPrice: 0.070639 },
    '21': { openPrice: 0.071932, highPrice: 0.072023, lowPrice: 0.070851 },
    '01': { openPrice: 0.071316, highPrice: 0.073377, lowPrice: 0.071092 },
    '05': { openPrice: 0.071578, highPrice: 0.072695, lowPrice: 0.0675 },
    '09': { openPrice: 0.07071, highPrice: 0.071477, lowPrice: 0.068941 }
  },
  '2021-05-12': {
    '13': { openPrice: 0.075012, highPrice: 0.0762, lowPrice: 0.07444 },
    '17': { openPrice: 0.075418, highPrice: 0.076056, lowPrice: 0.075012 },
    '21': { openPrice: 0.075759, highPrice: 0.077, lowPrice: 0.074283 },
    '01': { openPrice: 0.071736, highPrice: 0.07234, lowPrice: 0.071282 },
    '05': { openPrice: 0.071837, highPrice: 0.0737, lowPrice: 0.071592 },
    '09': { openPrice: 0.073637, highPrice: 0.075313, lowPrice: 0.072717 }
  },
  '2021-05-13': {
    '13': { openPrice: 0.078153, highPrice: 0.078717, lowPrice: 0.077206 },
    '17': { openPrice: 0.077987, highPrice: 0.078345, lowPrice: 0.073428 },
    '21': { openPrice: 0.075217, highPrice: 0.076969, lowPrice: 0.074386 },
    '01': { openPrice: 0.075511, highPrice: 0.075961, lowPrice: 0.073382 },
    '05': { openPrice: 0.075021, highPrice: 0.080098, lowPrice: 0.074558 },
    '09': { openPrice: 0.076932, highPrice: 0.079757, lowPrice: 0.074445 }
  },
  '2021-05-14': {
    '13': { openPrice: 0.077121, highPrice: 0.07784, lowPrice: 0.076829 },
    '17': { openPrice: 0.077667, highPrice: 0.079366, lowPrice: 0.077059 },
    '21': { openPrice: 0.07915, highPrice: 0.08108, lowPrice: 0.078286 },
    '01': { openPrice: 0.075492, highPrice: 0.076981, lowPrice: 0.07488 },
    '05': { openPrice: 0.075137, highPrice: 0.076122, lowPrice: 0.074118 },
    '09': { openPrice: 0.074886, highPrice: 0.077491, lowPrice: 0.074451 }
  },
  '2021-05-15': {
    '13': { openPrice: 0.081119, highPrice: 0.081699, lowPrice: 0.080075 },
    '17': { openPrice: 0.080613, highPrice: 0.080965, lowPrice: 0.079255 },
    '21': { openPrice: 0.079742, highPrice: 0.079992, lowPrice: 0.07832 },
    '01': { openPrice: 0.080671, highPrice: 0.081629, lowPrice: 0.080229 },
    '05': { openPrice: 0.080717, highPrice: 0.08207, lowPrice: 0.080354 },
    '09': { openPrice: 0.081775, highPrice: 0.0824, lowPrice: 0.080837 }
  },
  '2021-05-16': {
    '13': { openPrice: 0.079095, highPrice: 0.079213, lowPrice: 0.078001 },
    '17': { openPrice: 0.078318, highPrice: 0.0784, lowPrice: 0.077162 },
    '21': { openPrice: 0.07731, highPrice: 0.077431, lowPrice: 0.075701 },
    '01': { openPrice: 0.07912, highPrice: 0.079127, lowPrice: 0.077601 },
    '05': { openPrice: 0.077988, highPrice: 0.079, lowPrice: 0.077528 },
    '09': { openPrice: 0.077959, highPrice: 0.080219, lowPrice: 0.077739 }
  },
  '2021-05-17': {
    '13': { openPrice: 0.075478, highPrice: 0.078258, lowPrice: 0.07402 },
    '17': { openPrice: 0.078005, highPrice: 0.078786, lowPrice: 0.076736 },
    '21': { openPrice: 0.076884, highPrice: 0.077606, lowPrice: 0.075636 },
    '01': { openPrice: 0.07611, highPrice: 0.077315, lowPrice: 0.074395 },
    '05': { openPrice: 0.075066, highPrice: 0.077862, lowPrice: 0.074808 },
    '09': { openPrice: 0.077152, highPrice: 0.077189, lowPrice: 0.074582 }
  },
  '2021-05-18': {
    '13': { openPrice: 0.075605, highPrice: 0.07828, lowPrice: 0.07554 },
    '17': { openPrice: 0.077719, highPrice: 0.078231, lowPrice: 0.076828 },
    '21': { openPrice: 0.077993, highPrice: 0.078297, lowPrice: 0.07626 },
    '01': { openPrice: 0.075786, highPrice: 0.0774, lowPrice: 0.07401 },
    '05': { openPrice: 0.076446, highPrice: 0.077318, lowPrice: 0.074682 },
    '09': { openPrice: 0.075391, highPrice: 0.075911, lowPrice: 0.074982 }
  },
  '2021-05-19': {
    '13': { openPrice: 0.076301, highPrice: 0.07684, lowPrice: 0.0737 },
    '17': { openPrice: 0.07396, highPrice: 0.074059, lowPrice: 0.0672 },
    '21': { openPrice: 0.070212, highPrice: 0.07399, lowPrice: 0.061 },
    '01': { openPrice: 0.07788, highPrice: 0.07909, lowPrice: 0.0776 },
    '05': { openPrice: 0.078656, highPrice: 0.0798, lowPrice: 0.078226 },
    '09': { openPrice: 0.078762, highPrice: 0.079428, lowPrice: 0.076 }
  },
  '2021-05-20': {
    '13': { openPrice: 0.064492, highPrice: 0.068293, lowPrice: 0.064191 },
    '17': { openPrice: 0.067901, highPrice: 0.068916, lowPrice: 0.066274 },
    '21': { openPrice: 0.068049, highPrice: 0.070696, lowPrice: 0.06721 },
    '01': { openPrice: 0.073563, highPrice: 0.074, lowPrice: 0.06551 },
    '05': { openPrice: 0.066098, highPrice: 0.069445, lowPrice: 0.065499 },
    '09': { openPrice: 0.066559, highPrice: 0.067336, lowPrice: 0.060941 }
  },
  '2021-05-21': {
    '13': { openPrice: 0.068608, highPrice: 0.06975, lowPrice: 0.067446 },
    '17': { openPrice: 0.067465, highPrice: 0.068117, lowPrice: 0.065649 },
    '21': { openPrice: 0.065942, highPrice: 0.0677, lowPrice: 0.064717 },
    '01': { openPrice: 0.070081, highPrice: 0.070385, lowPrice: 0.066769 },
    '05': { openPrice: 0.069412, highPrice: 0.07, lowPrice: 0.06745 },
    '09': { openPrice: 0.068311, highPrice: 0.070357, lowPrice: 0.067955 }
  },
  '2021-05-22': {
    '13': { openPrice: 0.063051, highPrice: 0.063401, lowPrice: 0.060525 },
    '17': { openPrice: 0.061989, highPrice: 0.064666, lowPrice: 0.061913 },
    '21': { openPrice: 0.063308, highPrice: 0.064299, lowPrice: 0.061434 },
    '01': { openPrice: 0.065741, highPrice: 0.066986, lowPrice: 0.064941 },
    '05': { openPrice: 0.065138, highPrice: 0.065713, lowPrice: 0.0627 },
    '09': { openPrice: 0.065245, highPrice: 0.06556, lowPrice: 0.06288 }
  },
  '2021-05-23': {
    '13': { openPrice: 0.061926, highPrice: 0.061926, lowPrice: 0.059578 },
    '17': { openPrice: 0.060072, highPrice: 0.06136, lowPrice: 0.058278 },
    '21': { openPrice: 0.059792, highPrice: 0.059809, lowPrice: 0.056344 },
    '01': { openPrice: 0.062042, highPrice: 0.062449, lowPrice: 0.059935 },
    '05': { openPrice: 0.060478, highPrice: 0.062797, lowPrice: 0.060477 },
    '09': { openPrice: 0.061273, highPrice: 0.062504, lowPrice: 0.060787 }
  },
  '2021-05-24': {
    '13': { openPrice: 0.060742, highPrice: 0.06256, lowPrice: 0.06012 },
    '17': { openPrice: 0.062508, highPrice: 0.063, lowPrice: 0.06161 },
    '21': { openPrice: 0.062993, highPrice: 0.066999, lowPrice: 0.062446 },
    '01': { openPrice: 0.057781, highPrice: 0.059889, lowPrice: 0.055332 },
    '05': { openPrice: 0.059544, highPrice: 0.06259, lowPrice: 0.05954 },
    '09': { openPrice: 0.060483, highPrice: 0.061809, lowPrice: 0.059881 }
  },
  '2021-05-25': {
    '13': { openPrice: 0.067428, highPrice: 0.068729, lowPrice: 0.066805 },
    '17': { openPrice: 0.068245, highPrice: 0.068468, lowPrice: 0.06484 },
    '21': { openPrice: 0.065499, highPrice: 0.069744, lowPrice: 0.06536 },
    '01': { openPrice: 0.06684, highPrice: 0.068, lowPrice: 0.065243 },
    '05': { openPrice: 0.066952, highPrice: 0.068461, lowPrice: 0.065865 },
    '09': { openPrice: 0.068266, highPrice: 0.069818, lowPrice: 0.06685 }
  },
  '2021-05-26': {
    '13': { openPrice: 0.071904, highPrice: 0.072034, lowPrice: 0.070817 },
    '17': { openPrice: 0.071469, highPrice: 0.071574, lowPrice: 0.070177 },
    '21': { openPrice: 0.071089, highPrice: 0.07159, lowPrice: 0.069304 },
    '01': { openPrice: 0.068212, highPrice: 0.0686, lowPrice: 0.066686 },
    '05': { openPrice: 0.067379, highPrice: 0.070999, lowPrice: 0.06721 },
    '09': { openPrice: 0.07057, highPrice: 0.072245, lowPrice: 0.069702 }
  },
  '2021-05-27': {
    '13': { openPrice: 0.071212, highPrice: 0.07209, lowPrice: 0.070862 },
    '17': { openPrice: 0.071452, highPrice: 0.071878, lowPrice: 0.070694 },
    '21': { openPrice: 0.071207, highPrice: 0.071333, lowPrice: 0.070485 },
    '01': { openPrice: 0.070813, highPrice: 0.071474, lowPrice: 0.069837 },
    '05': { openPrice: 0.071228, highPrice: 0.07358, lowPrice: 0.071 },
    '09': { openPrice: 0.073529, highPrice: 0.07374, lowPrice: 0.070747 }
  },
  '2021-05-28': {
    '13': { openPrice: 0.071033, highPrice: 0.0713, lowPrice: 0.068827 },
    '17': { openPrice: 0.069405, highPrice: 0.070142, lowPrice: 0.068736 },
    '21': { openPrice: 0.068904, highPrice: 0.07083, lowPrice: 0.068632 },
    '01': { openPrice: 0.070675, highPrice: 0.071508, lowPrice: 0.070368 },
    '05': { openPrice: 0.071117, highPrice: 0.071784, lowPrice: 0.070658 },
    '09': { openPrice: 0.071193, highPrice: 0.071594, lowPrice: 0.070671 }
  },
  '2021-05-29': {
    '13': { openPrice: 0.069271, highPrice: 0.069427, lowPrice: 0.068418 },
    '17': { openPrice: 0.068845, highPrice: 0.069293, lowPrice: 0.068348 },
    '21': { openPrice: 0.069267, highPrice: 0.069478, lowPrice: 0.0675 },
    '01': { openPrice: 0.069609, highPrice: 0.070195, lowPrice: 0.0689 },
    '05': { openPrice: 0.069832, highPrice: 0.069988, lowPrice: 0.067 },
    '09': { openPrice: 0.06765, highPrice: 0.07011, lowPrice: 0.066802 }
  },
  '2021-05-30': {
    '13': { openPrice: 0.066046, highPrice: 0.0682, lowPrice: 0.06557 },
    '17': { openPrice: 0.068128, highPrice: 0.068475, lowPrice: 0.06683 },
    '21': { openPrice: 0.067709, highPrice: 0.067715, lowPrice: 0.0665 },
    '01': { openPrice: 0.067673, highPrice: 0.068399, lowPrice: 0.065856 },
    '05': { openPrice: 0.066062, highPrice: 0.06645, lowPrice: 0.065047 },
    '09': { openPrice: 0.065856, highPrice: 0.06644, lowPrice: 0.06511 }
  },
  '2021-05-31': {
    '13': { openPrice: 0.066714, highPrice: 0.068863, lowPrice: 0.066624 },
    '17': { openPrice: 0.068357, highPrice: 0.069949, lowPrice: 0.068012 },
    '21': { openPrice: 0.069273, highPrice: 0.071444, lowPrice: 0.068683 },
    '01': { openPrice: 0.067149, highPrice: 0.068175, lowPrice: 0.066863 },
    '05': { openPrice: 0.067679, highPrice: 0.067807, lowPrice: 0.06687 },
    '09': { openPrice: 0.066933, highPrice: 0.0672, lowPrice: 0.066014 }
  },
  '2021-06-01': {
    '13': { openPrice: 0.071658, highPrice: 0.072848, lowPrice: 0.071516 },
    '17': { openPrice: 0.072023, highPrice: 0.072343, lowPrice: 0.07077 },
    '21': { openPrice: 0.071698, highPrice: 0.071698, lowPrice: 0.070359 },
    '01': { openPrice: 0.071356, highPrice: 0.071859, lowPrice: 0.0703 },
    '05': { openPrice: 0.071265, highPrice: 0.072761, lowPrice: 0.070819 },
    '09': { openPrice: 0.072668, highPrice: 0.072858, lowPrice: 0.071202 }
  },
  '2021-06-02': {
    '13': { openPrice: 0.071719, highPrice: 0.072808, lowPrice: 0.07137 },
    '17': { openPrice: 0.072342, highPrice: 0.072791, lowPrice: 0.071984 },
    '21': { openPrice: 0.072422, highPrice: 0.073434, lowPrice: 0.0722 },
    '01': { openPrice: 0.070884, highPrice: 0.071149, lowPrice: 0.07053 },
    '05': { openPrice: 0.070674, highPrice: 0.072, lowPrice: 0.070658 },
    '09': { openPrice: 0.07179, highPrice: 0.072056, lowPrice: 0.070886 }
  },
  '2021-06-03': {
    '13': { openPrice: 0.072421, highPrice: 0.073249, lowPrice: 0.072311 },
    '17': { openPrice: 0.072997, highPrice: 0.073717, lowPrice: 0.0723 },
    '21': { openPrice: 0.07236, highPrice: 0.07274, lowPrice: 0.071805 },
    '01': { openPrice: 0.073362, highPrice: 0.073533, lowPrice: 0.072376 },
    '05': { openPrice: 0.072798, highPrice: 0.072888, lowPrice: 0.071401 },
    '09': { openPrice: 0.072028, highPrice: 0.07248, lowPrice: 0.071571 }
  },
  '2021-06-04': {
    '13': { openPrice: 0.072581, highPrice: 0.072931, lowPrice: 0.071157 },
    '17': { openPrice: 0.071547, highPrice: 0.0721, lowPrice: 0.071306 },
    '21': { openPrice: 0.071748, highPrice: 0.072368, lowPrice: 0.071092 },
    '01': { openPrice: 0.072358, highPrice: 0.073101, lowPrice: 0.072287 },
    '05': { openPrice: 0.072388, highPrice: 0.073249, lowPrice: 0.072329 },
    '09': { openPrice: 0.072805, highPrice: 0.072916, lowPrice: 0.071692 }
  },
  '2021-06-05': {
    '13': { openPrice: 0.073843, highPrice: 0.074268, lowPrice: 0.0735 },
    '17': { openPrice: 0.074016, highPrice: 0.075, lowPrice: 0.073453 },
    '21': { openPrice: 0.073598, highPrice: 0.073917, lowPrice: 0.0726 },
    '01': { openPrice: 0.071935, highPrice: 0.072935, lowPrice: 0.0719 },
    '05': { openPrice: 0.072861, highPrice: 0.0736, lowPrice: 0.072522 },
    '09': { openPrice: 0.073013, highPrice: 0.073861, lowPrice: 0.072997 }
  },
  '2021-06-06': {
    '13': { openPrice: 0.074312, highPrice: 0.074616, lowPrice: 0.07411 },
    '17': { openPrice: 0.074415, highPrice: 0.075555, lowPrice: 0.074415 },
    '21': { openPrice: 0.075007, highPrice: 0.075319, lowPrice: 0.074606 },
    '01': { openPrice: 0.073109, highPrice: 0.073189, lowPrice: 0.072631 },
    '05': { openPrice: 0.072754, highPrice: 0.074067, lowPrice: 0.072725 },
    '09': { openPrice: 0.073989, highPrice: 0.074473, lowPrice: 0.073626 }
  },
  '2021-06-07': {
    '13': { openPrice: 0.076028, highPrice: 0.0769, lowPrice: 0.076028 },
    '17': { openPrice: 0.07649, highPrice: 0.077594, lowPrice: 0.0762 },
    '21': { openPrice: 0.07732, highPrice: 0.077558, lowPrice: 0.076629 },
    '01': { openPrice: 0.075254, highPrice: 0.07547, lowPrice: 0.074634 },
    '05': { openPrice: 0.074804, highPrice: 0.075961, lowPrice: 0.074705 },
    '09': { openPrice: 0.075752, highPrice: 0.076538, lowPrice: 0.075565 }
  },
  '2021-06-08': {
    '13': { openPrice: 0.075883, highPrice: 0.076579, lowPrice: 0.075233 },
    '17': { openPrice: 0.076328, highPrice: 0.076764, lowPrice: 0.07564 },
    '21': { openPrice: 0.076552, highPrice: 0.076614, lowPrice: 0.074313 },
    '01': { openPrice: 0.077233, highPrice: 0.077379, lowPrice: 0.07548 },
    '05': { openPrice: 0.076629, highPrice: 0.07738, lowPrice: 0.07609 },
    '09': { openPrice: 0.077249, highPrice: 0.077572, lowPrice: 0.074849 }
  },
  '2021-06-09': {
    '13': { openPrice: 0.07472, highPrice: 0.074833, lowPrice: 0.073128 },
    '17': { openPrice: 0.073253, highPrice: 0.073465, lowPrice: 0.072037 },
    '21': { openPrice: 0.072496, highPrice: 0.073232, lowPrice: 0.069867 },
    '01': { openPrice: 0.074898, highPrice: 0.0761, lowPrice: 0.074686 },
    '05': { openPrice: 0.076099, highPrice: 0.07636, lowPrice: 0.074985 },
    '09': { openPrice: 0.075123, highPrice: 0.075308, lowPrice: 0.074286 }
  },
  '2021-06-10': {
    '13': { openPrice: 0.06935, highPrice: 0.069392, lowPrice: 0.068846 },
    '17': { openPrice: 0.068939, highPrice: 0.069177, lowPrice: 0.067516 },
    '21': { openPrice: 0.067855, highPrice: 0.068231, lowPrice: 0.067005 },
    '01': { openPrice: 0.0706, highPrice: 0.071753, lowPrice: 0.070551 },
    '05': { openPrice: 0.070655, highPrice: 0.070924, lowPrice: 0.06931 },
    '09': { openPrice: 0.069812, highPrice: 0.069921, lowPrice: 0.069136 }
  },
  '2021-06-11': {
    '13': { openPrice: 0.067062, highPrice: 0.067164, lowPrice: 0.0658 },
    '17': { openPrice: 0.06584, highPrice: 0.066475, lowPrice: 0.065752 },
    '21': { openPrice: 0.066085, highPrice: 0.066161, lowPrice: 0.065481 },
    '01': { openPrice: 0.068079, highPrice: 0.068095, lowPrice: 0.067039 },
    '05': { openPrice: 0.067044, highPrice: 0.068, lowPrice: 0.066896 },
    '09': { openPrice: 0.067385, highPrice: 0.067499, lowPrice: 0.066623 }
  },
  '2021-06-12': {
    '13': { openPrice: 0.064639, highPrice: 0.065825, lowPrice: 0.064497 },
    '17': { openPrice: 0.065811, highPrice: 0.067352, lowPrice: 0.065469 },
    '21': { openPrice: 0.067117, highPrice: 0.068177, lowPrice: 0.067079 },
    '01': { openPrice: 0.065622, highPrice: 0.065763, lowPrice: 0.064329 },
    '05': { openPrice: 0.064378, highPrice: 0.064416, lowPrice: 0.06272 },
    '09': { openPrice: 0.06306, highPrice: 0.064844, lowPrice: 0.062793 }
  },
  '2021-06-13': {
    '13': { openPrice: 0.066929, highPrice: 0.067004, lowPrice: 0.065823 },
    '17': { openPrice: 0.065882, highPrice: 0.06634, lowPrice: 0.065676 },
    '21': { openPrice: 0.065822, highPrice: 0.06612, lowPrice: 0.065132 },
    '01': { openPrice: 0.067623, highPrice: 0.067825, lowPrice: 0.067175 },
    '05': { openPrice: 0.067432, highPrice: 0.06753, lowPrice: 0.066615 },
    '09': { openPrice: 0.066692, highPrice: 0.067599, lowPrice: 0.066488 }
  },
  '2021-06-14': {
    '13': { openPrice: 0.063585, highPrice: 0.063693, lowPrice: 0.063013 },
    '17': { openPrice: 0.063195, highPrice: 0.063581, lowPrice: 0.063076 },
    '21': { openPrice: 0.063293, highPrice: 0.063398, lowPrice: 0.062389 },
    '01': { openPrice: 0.065261, highPrice: 0.065326, lowPrice: 0.064429 },
    '05': { openPrice: 0.064549, highPrice: 0.065121, lowPrice: 0.06354 },
    '09': { openPrice: 0.064306, highPrice: 0.064424, lowPrice: 0.063184 }
  },
  '2021-06-15': {
    '13': { openPrice: 0.064032, highPrice: 0.0652, lowPrice: 0.064009 },
    '17': { openPrice: 0.064976, highPrice: 0.065119, lowPrice: 0.06442 },
    '21': { openPrice: 0.064701, highPrice: 0.064807, lowPrice: 0.063501 },
    '01': { openPrice: 0.063337, highPrice: 0.064646, lowPrice: 0.063246 },
    '05': { openPrice: 0.063944, highPrice: 0.064011, lowPrice: 0.063497 },
    '09': { openPrice: 0.063704, highPrice: 0.06463, lowPrice: 0.0637 }
  },
  '2021-06-16': {
    '13': { openPrice: 0.063019, highPrice: 0.0632, lowPrice: 0.062596 },
    '17': { openPrice: 0.063005, highPrice: 0.063246, lowPrice: 0.0625 },
    '21': { openPrice: 0.062954, highPrice: 0.063033, lowPrice: 0.062227 },
    '01': { openPrice: 0.063682, highPrice: 0.063917, lowPrice: 0.062967 },
    '05': { openPrice: 0.063358, highPrice: 0.063877, lowPrice: 0.06308 },
    '09': { openPrice: 0.063355, highPrice: 0.063397, lowPrice: 0.062897 }
  },
  '2021-06-17': {
    '13': { openPrice: 0.062633, highPrice: 0.062732, lowPrice: 0.062168 },
    '17': { openPrice: 0.062253, highPrice: 0.06237, lowPrice: 0.061774 },
    '21': { openPrice: 0.061939, highPrice: 0.062121, lowPrice: 0.061339 },
    '01': { openPrice: 0.062314, highPrice: 0.062639, lowPrice: 0.061726 },
    '05': { openPrice: 0.062521, highPrice: 0.062623, lowPrice: 0.061425 },
    '09': { openPrice: 0.061756, highPrice: 0.062791, lowPrice: 0.061632 }
  },
  '2021-06-18': {
    '13': { openPrice: 0.06175, highPrice: 0.062349, lowPrice: 0.061742 },
    '17': { openPrice: 0.062089, highPrice: 0.062249, lowPrice: 0.061181 },
    '21': { openPrice: 0.061336, highPrice: 0.061569, lowPrice: 0.06082 },
    '01': { openPrice: 0.061959, highPrice: 0.062084, lowPrice: 0.060963 },
    '05': { openPrice: 0.062065, highPrice: 0.062446, lowPrice: 0.061878 },
    '09': { openPrice: 0.0623, highPrice: 0.062467, lowPrice: 0.06166 }
  },
  '2021-06-19': {
    '13': { openPrice: 0.062339, highPrice: 0.063145, lowPrice: 0.062207 },
    '17': { openPrice: 0.062744, highPrice: 0.0629, lowPrice: 0.062195 },
    '21': { openPrice: 0.062357, highPrice: 0.062903, lowPrice: 0.06205 },
    '01': { openPrice: 0.060928, highPrice: 0.06125, lowPrice: 0.060313 },
    '05': { openPrice: 0.060982, highPrice: 0.062463, lowPrice: 0.060982 },
    '09': { openPrice: 0.062356, highPrice: 0.062847, lowPrice: 0.061924 }
  },
  '2021-06-20': {
    '13': { openPrice: 0.061459, highPrice: 0.062043, lowPrice: 0.061451 },
    '17': { openPrice: 0.06184, highPrice: 0.062416, lowPrice: 0.061026 },
    '21': { openPrice: 0.061243, highPrice: 0.061607, lowPrice: 0.061159 },
    '01': { openPrice: 0.062216, highPrice: 0.062576, lowPrice: 0.061545 },
    '05': { openPrice: 0.061784, highPrice: 0.061891, lowPrice: 0.06101 },
    '09': { openPrice: 0.061015, highPrice: 0.06148, lowPrice: 0.060833 }
  },
  '2021-06-21': {
    '13': { openPrice: 0.062243, highPrice: 0.062306, lowPrice: 0.060711 },
    '17': { openPrice: 0.060936, highPrice: 0.061499, lowPrice: 0.058929 },
    '21': { openPrice: 0.06054, highPrice: 0.061173, lowPrice: 0.059818 },
    '01': { openPrice: 0.061335, highPrice: 0.063025, lowPrice: 0.061208 },
    '05': { openPrice: 0.062604, highPrice: 0.063545, lowPrice: 0.062356 },
    '09': { openPrice: 0.063033, highPrice: 0.063578, lowPrice: 0.06215 }
  },
  '2021-06-22': {
    '13': { openPrice: 0.059855, highPrice: 0.060003, lowPrice: 0.059274 },
    '17': { openPrice: 0.059558, highPrice: 0.059976, lowPrice: 0.058727 },
    '21': { openPrice: 0.059774, highPrice: 0.060988, lowPrice: 0.05845 },
    '01': { openPrice: 0.060696, highPrice: 0.060772, lowPrice: 0.059303 },
    '05': { openPrice: 0.059676, highPrice: 0.060364, lowPrice: 0.059064 },
    '09': { openPrice: 0.059648, highPrice: 0.060485, lowPrice: 0.059509 }
  },
  '2021-06-23': {
    '13': { openPrice: 0.059244, highPrice: 0.059538, lowPrice: 0.0589 },
    '17': { openPrice: 0.059015, highPrice: 0.059024, lowPrice: 0.0583 },
    '21': { openPrice: 0.058729, highPrice: 0.058983, lowPrice: 0.058433 },
    '01': { openPrice: 0.058689, highPrice: 0.059342, lowPrice: 0.058146 },
    '05': { openPrice: 0.0585, highPrice: 0.058816, lowPrice: 0.057435 },
    '09': { openPrice: 0.057787, highPrice: 0.059604, lowPrice: 0.057 }
  },
  '2021-06-24': {
    '13': { openPrice: 0.058464, highPrice: 0.058709, lowPrice: 0.0583 },
    '17': { openPrice: 0.058424, highPrice: 0.058629, lowPrice: 0.057943 },
    '21': { openPrice: 0.058057, highPrice: 0.058585, lowPrice: 0.057639 },
    '01': { openPrice: 0.058957, highPrice: 0.059236, lowPrice: 0.058285 },
    '05': { openPrice: 0.058285, highPrice: 0.058537, lowPrice: 0.058083 },
    '09': { openPrice: 0.058447, highPrice: 0.058802, lowPrice: 0.058133 }
  },
  '2021-06-25': {
    '13': { openPrice: 0.056924, highPrice: 0.057252, lowPrice: 0.056654 },
    '17': { openPrice: 0.056713, highPrice: 0.056729, lowPrice: 0.055267 },
    '21': { openPrice: 0.055626, highPrice: 0.056517, lowPrice: 0.055295 },
    '01': { openPrice: 0.058585, highPrice: 0.058728, lowPrice: 0.057649 },
    '05': { openPrice: 0.057712, highPrice: 0.057783, lowPrice: 0.056964 },
    '09': { openPrice: 0.057401, highPrice: 0.057648, lowPrice: 0.056749 }
  },
  '2021-06-26': {
    '13': { openPrice: 0.05689, highPrice: 0.057134, lowPrice: 0.05601 },
    '17': { openPrice: 0.05703, highPrice: 0.05715, lowPrice: 0.056458 },
    '21': { openPrice: 0.056707, highPrice: 0.057564, lowPrice: 0.056258 },
    '01': { openPrice: 0.056035, highPrice: 0.057658, lowPrice: 0.055738 },
    '05': { openPrice: 0.057456, highPrice: 0.058394, lowPrice: 0.057288 },
    '09': { openPrice: 0.057288, highPrice: 0.057475, lowPrice: 0.056671 }
  },
  '2021-06-27': {
    '13': { openPrice: 0.056797, highPrice: 0.05694, lowPrice: 0.055805 },
    '17': { openPrice: 0.056094, highPrice: 0.056149, lowPrice: 0.055252 },
    '21': { openPrice: 0.055329, highPrice: 0.055827, lowPrice: 0.055242 },
    '01': { openPrice: 0.056435, highPrice: 0.056625, lowPrice: 0.056086 },
    '05': { openPrice: 0.056535, highPrice: 0.056922, lowPrice: 0.056163 },
    '09': { openPrice: 0.056677, highPrice: 0.05723, lowPrice: 0.056469 }
  },
  '2021-06-28': {
    '13': { openPrice: 0.057209, highPrice: 0.058558, lowPrice: 0.057081 },
    '17': { openPrice: 0.058498, highPrice: 0.059499, lowPrice: 0.0582 },
    '21': { openPrice: 0.058632, highPrice: 0.060839, lowPrice: 0.058432 },
    '01': { openPrice: 0.055541, highPrice: 0.055762, lowPrice: 0.055205 },
    '05': { openPrice: 0.055559, highPrice: 0.057327, lowPrice: 0.055408 },
    '09': { openPrice: 0.057124, highPrice: 0.057671, lowPrice: 0.056941 }
  },
  '2021-06-29': {
    '13': { openPrice: 0.060851, highPrice: 0.061739, lowPrice: 0.060656 },
    '17': { openPrice: 0.061144, highPrice: 0.061585, lowPrice: 0.0608 },
    '21': { openPrice: 0.061201, highPrice: 0.061451, lowPrice: 0.060554 },
    '01': { openPrice: 0.060535, highPrice: 0.061997, lowPrice: 0.060465 },
    '05': { openPrice: 0.061388, highPrice: 0.061806, lowPrice: 0.060211 },
    '09': { openPrice: 0.060424, highPrice: 0.061434, lowPrice: 0.060322 }
  },
  '2021-06-30': {
    '13': { openPrice: 0.06055, highPrice: 0.061514, lowPrice: 0.0602 },
    '17': { openPrice: 0.061325, highPrice: 0.06188, lowPrice: 0.0611 },
    '21': { openPrice: 0.061868, highPrice: 0.061979, lowPrice: 0.061201 },
    '01': { openPrice: 0.061192, highPrice: 0.061997, lowPrice: 0.06097 },
    '05': { openPrice: 0.06107, highPrice: 0.061217, lowPrice: 0.060157 },
    '09': { openPrice: 0.060298, highPrice: 0.06084, lowPrice: 0.059968 }
  },
  '2021-07-01': {
    '13': { openPrice: 0.064026, highPrice: 0.064851, lowPrice: 0.063808 },
    '17': { openPrice: 0.063841, highPrice: 0.064103, lowPrice: 0.063067 },
    '21': { openPrice: 0.063441, highPrice: 0.063668, lowPrice: 0.062727 },
    '01': { openPrice: 0.061503, highPrice: 0.064631, lowPrice: 0.061376 },
    '05': { openPrice: 0.06455, highPrice: 0.065502, lowPrice: 0.064363 },
    '09': { openPrice: 0.064924, highPrice: 0.064989, lowPrice: 0.063895 }
  },
  '2021-07-02': {
    '13': { openPrice: 0.062028, highPrice: 0.062221, lowPrice: 0.06161 },
    '17': { openPrice: 0.061809, highPrice: 0.062068, lowPrice: 0.061515 },
    '21': { openPrice: 0.061722, highPrice: 0.063156, lowPrice: 0.061631 },
    '01': { openPrice: 0.063363, highPrice: 0.063565, lowPrice: 0.062669 },
    '05': { openPrice: 0.063453, highPrice: 0.063764, lowPrice: 0.062862 },
    '09': { openPrice: 0.062875, highPrice: 0.063267, lowPrice: 0.061986 }
  },
  '2021-07-03': {
    '13': { openPrice: 0.063573, highPrice: 0.063868, lowPrice: 0.063396 },
    '17': { openPrice: 0.063635, highPrice: 0.064243, lowPrice: 0.063464 },
    '21': { openPrice: 0.063961, highPrice: 0.0645, lowPrice: 0.063924 },
    '01': { openPrice: 0.063025, highPrice: 0.063182, lowPrice: 0.06261 },
    '05': { openPrice: 0.063117, highPrice: 0.06408, lowPrice: 0.06276 },
    '09': { openPrice: 0.063757, highPrice: 0.06405, lowPrice: 0.063355 }
  },
  '2021-07-04': {
    '13': { openPrice: 0.063788, highPrice: 0.066038, lowPrice: 0.063738 },
    '17': { openPrice: 0.065547, highPrice: 0.065933, lowPrice: 0.065206 },
    '21': { openPrice: 0.065641, highPrice: 0.065696, lowPrice: 0.065373 },
    '01': { openPrice: 0.06428, highPrice: 0.064378, lowPrice: 0.063858 },
    '05': { openPrice: 0.064059, highPrice: 0.064333, lowPrice: 0.063414 },
    '09': { openPrice: 0.064231, highPrice: 0.064344, lowPrice: 0.063657 }
  },
  '2021-07-05': {
    '13': { openPrice: 0.065927, highPrice: 0.066777, lowPrice: 0.06587 },
    '17': { openPrice: 0.066381, highPrice: 0.06695, lowPrice: 0.065452 },
    '21': { openPrice: 0.065754, highPrice: 0.066261, lowPrice: 0.065493 },
    '01': { openPrice: 0.065634, highPrice: 0.06659, lowPrice: 0.065634 },
    '05': { openPrice: 0.066262, highPrice: 0.066635, lowPrice: 0.065333 },
    '09': { openPrice: 0.065813, highPrice: 0.066545, lowPrice: 0.065426 }
  },
  '2021-07-06': {
    '13': { openPrice: 0.065977, highPrice: 0.0672, lowPrice: 0.065924 },
    '17': { openPrice: 0.06701, highPrice: 0.067506, lowPrice: 0.066065 },
    '21': { openPrice: 0.067321, highPrice: 0.068219, lowPrice: 0.067188 },
    '01': { openPrice: 0.065686, highPrice: 0.065984, lowPrice: 0.064726 },
    '05': { openPrice: 0.065802, highPrice: 0.065992, lowPrice: 0.065085 },
    '09': { openPrice: 0.065196, highPrice: 0.066131, lowPrice: 0.06508 }
  },
  '2021-07-07': {
    '13': { openPrice: 0.067922, highPrice: 0.069138, lowPrice: 0.067735 },
    '17': { openPrice: 0.068476, highPrice: 0.068752, lowPrice: 0.068255 },
    '21': { openPrice: 0.068459, highPrice: 0.068731, lowPrice: 0.067415 },
    '01': { openPrice: 0.067743, highPrice: 0.068574, lowPrice: 0.06755 },
    '05': { openPrice: 0.068417, highPrice: 0.068417, lowPrice: 0.067547 },
    '09': { openPrice: 0.067863, highPrice: 0.068189, lowPrice: 0.067475 }
  },
  '2021-07-08': {
    '13': { openPrice: 0.067662, highPrice: 0.067662, lowPrice: 0.066718 },
    '17': { openPrice: 0.067163, highPrice: 0.067275, lowPrice: 0.065873 },
    '21': { openPrice: 0.066311, highPrice: 0.066341, lowPrice: 0.0657 },
    '01': { openPrice: 0.067825, highPrice: 0.068425, lowPrice: 0.067638 },
    '05': { openPrice: 0.068347, highPrice: 0.068582, lowPrice: 0.067847 },
    '09': { openPrice: 0.068409, highPrice: 0.068887, lowPrice: 0.0676 }
  },
  '2021-07-09': {
    '13': { openPrice: 0.064392, highPrice: 0.065097, lowPrice: 0.064226 },
    '17': { openPrice: 0.064615, highPrice: 0.064623, lowPrice: 0.063388 },
    '21': { openPrice: 0.063489, highPrice: 0.06512, lowPrice: 0.06301 },
    '01': { openPrice: 0.066095, highPrice: 0.066148, lowPrice: 0.06528 },
    '05': { openPrice: 0.065381, highPrice: 0.065467, lowPrice: 0.064144 },
    '09': { openPrice: 0.064367, highPrice: 0.064492, lowPrice: 0.063335 }
  },
  '2021-07-10': {
    '13': { openPrice: 0.063117, highPrice: 0.063232, lowPrice: 0.062499 },
    '17': { openPrice: 0.062847, highPrice: 0.063096, lowPrice: 0.062021 },
    '21': { openPrice: 0.062432, highPrice: 0.062698, lowPrice: 0.062124 },
    '01': { openPrice: 0.064717, highPrice: 0.064866, lowPrice: 0.063677 },
    '05': { openPrice: 0.063796, highPrice: 0.063861, lowPrice: 0.063284 },
    '09': { openPrice: 0.063492, highPrice: 0.064106, lowPrice: 0.06301 }
  },
  '2021-07-11': {
    '13': { openPrice: 0.062524, highPrice: 0.062714, lowPrice: 0.062398 },
    '17': { openPrice: 0.062657, highPrice: 0.063098, lowPrice: 0.062516 },
    '21': { openPrice: 0.062962, highPrice: 0.063369, lowPrice: 0.062777 },
    '01': { openPrice: 0.062569, highPrice: 0.063285, lowPrice: 0.062279 },
    '05': { openPrice: 0.062659, highPrice: 0.063213, lowPrice: 0.062618 },
    '09': { openPrice: 0.063003, highPrice: 0.063317, lowPrice: 0.062398 }
  },
  '2021-07-12': {
    '13': { openPrice: 0.062812, highPrice: 0.062846, lowPrice: 0.062485 },
    '17': { openPrice: 0.062602, highPrice: 0.062716, lowPrice: 0.062326 },
    '21': { openPrice: 0.06266, highPrice: 0.062971, lowPrice: 0.062459 },
    '01': { openPrice: 0.063188, highPrice: 0.063745, lowPrice: 0.062953 },
    '05': { openPrice: 0.062988, highPrice: 0.063119, lowPrice: 0.062359 },
    '09': { openPrice: 0.062485, highPrice: 0.063004, lowPrice: 0.062302 }
  },
  '2021-07-13': {
    '13': { openPrice: 0.061378, highPrice: 0.061429, lowPrice: 0.060316 },
    '17': { openPrice: 0.061107, highPrice: 0.061393, lowPrice: 0.060429 },
    '21': { openPrice: 0.060459, highPrice: 0.061123, lowPrice: 0.060299 },
    '01': { openPrice: 0.062612, highPrice: 0.062802, lowPrice: 0.061029 },
    '05': { openPrice: 0.061547, highPrice: 0.061849, lowPrice: 0.061259 },
    '09': { openPrice: 0.061401, highPrice: 0.061567, lowPrice: 0.060998 }
  },
  '2021-07-14': {
    '13': { openPrice: 0.059199, highPrice: 0.059628, lowPrice: 0.058706 },
    '17': { openPrice: 0.059519, highPrice: 0.060243, lowPrice: 0.059119 },
    '21': { openPrice: 0.060066, highPrice: 0.061398, lowPrice: 0.059938 },
    '01': { openPrice: 0.060965, highPrice: 0.06113, lowPrice: 0.0595 },
    '05': { openPrice: 0.059558, highPrice: 0.060032, lowPrice: 0.059277 },
    '09': { openPrice: 0.05929, highPrice: 0.059467, lowPrice: 0.058403 }
  },
  '2021-07-15': {
    '13': { openPrice: 0.060628, highPrice: 0.060725, lowPrice: 0.06 },
    '17': { openPrice: 0.060178, highPrice: 0.06071, lowPrice: 0.059901 },
    '21': { openPrice: 0.059998, highPrice: 0.060662, lowPrice: 0.059686 },
    '01': { openPrice: 0.060867, highPrice: 0.061057, lowPrice: 0.06049 },
    '05': { openPrice: 0.060507, highPrice: 0.060913, lowPrice: 0.060507 },
    '09': { openPrice: 0.060764, highPrice: 0.062159, lowPrice: 0.060077 }
  },
  '2021-07-16': {
    '13': { openPrice: 0.061086, highPrice: 0.061376, lowPrice: 0.060053 },
    '17': { openPrice: 0.060187, highPrice: 0.060202, lowPrice: 0.059108 },
    '21': { openPrice: 0.059582, highPrice: 0.060205, lowPrice: 0.059478 },
    '01': { openPrice: 0.060395, highPrice: 0.061065, lowPrice: 0.059951 },
    '05': { openPrice: 0.060816, highPrice: 0.060897, lowPrice: 0.060105 },
    '09': { openPrice: 0.060218, highPrice: 0.0612, lowPrice: 0.060075 }
  },
  '2021-07-17': {
    '13': { openPrice: 0.059635, highPrice: 0.060063, lowPrice: 0.059586 },
    '17': { openPrice: 0.059592, highPrice: 0.060013, lowPrice: 0.059082 },
    '21': { openPrice: 0.059389, highPrice: 0.059732, lowPrice: 0.059229 },
    '01': { openPrice: 0.060207, highPrice: 0.060306, lowPrice: 0.05967 },
    '05': { openPrice: 0.059963, highPrice: 0.060028, lowPrice: 0.059429 },
    '09': { openPrice: 0.05979, highPrice: 0.060109, lowPrice: 0.059404 }
  },
  '2021-07-18': {
    '13': { openPrice: 0.061599, highPrice: 0.061891, lowPrice: 0.061302 },
    '17': { openPrice: 0.061793, highPrice: 0.062121, lowPrice: 0.061741 },
    '21': { openPrice: 0.061805, highPrice: 0.061997, lowPrice: 0.060073 },
    '01': { openPrice: 0.059428, highPrice: 0.060214, lowPrice: 0.059338 },
    '05': { openPrice: 0.059947, highPrice: 0.060274, lowPrice: 0.059731 },
    '09': { openPrice: 0.060261, highPrice: 0.061956, lowPrice: 0.060233 }
  },
  '2021-07-19': {
    '13': { openPrice: 0.059775, highPrice: 0.060244, lowPrice: 0.059627 },
    '17': { openPrice: 0.059853, highPrice: 0.060038, lowPrice: 0.059468 },
    '21': { openPrice: 0.05956, highPrice: 0.059628, lowPrice: 0.058697 },
    '01': { openPrice: 0.060289, highPrice: 0.060408, lowPrice: 0.06 },
    '05': { openPrice: 0.060071, highPrice: 0.060433, lowPrice: 0.059391 },
    '09': { openPrice: 0.059521, highPrice: 0.059915, lowPrice: 0.059293 }
  },
  '2021-07-20': {
    '13': { openPrice: 0.05839, highPrice: 0.059362, lowPrice: 0.058312 },
    '17': { openPrice: 0.059084, highPrice: 0.059277, lowPrice: 0.058426 },
    '21': { openPrice: 0.059134, highPrice: 0.060522, lowPrice: 0.058751 },
    '01': { openPrice: 0.059312, highPrice: 0.059506, lowPrice: 0.059148 },
    '05': { openPrice: 0.059354, highPrice: 0.05937, lowPrice: 0.058837 },
    '09': { openPrice: 0.058971, highPrice: 0.059343, lowPrice: 0.05779 }
  },
  '2021-07-21': {
    '13': { openPrice: 0.060387, highPrice: 0.060999, lowPrice: 0.060299 },
    '17': { openPrice: 0.060845, highPrice: 0.060975, lowPrice: 0.060325 },
    '21': { openPrice: 0.06047, highPrice: 0.061271, lowPrice: 0.060214 },
    '01': { openPrice: 0.060388, highPrice: 0.060675, lowPrice: 0.059946 },
    '05': { openPrice: 0.060087, highPrice: 0.060252, lowPrice: 0.059832 },
    '09': { openPrice: 0.059952, highPrice: 0.060468, lowPrice: 0.059474 }
  },
  '2021-07-22': {
    '13': { openPrice: 0.061902, highPrice: 0.06238, lowPrice: 0.061635 },
    '17': { openPrice: 0.061991, highPrice: 0.062592, lowPrice: 0.061928 },
    '21': { openPrice: 0.062165, highPrice: 0.062695, lowPrice: 0.061376 },
    '01': { openPrice: 0.061212, highPrice: 0.0625, lowPrice: 0.061035 },
    '05': { openPrice: 0.061259, highPrice: 0.06209, lowPrice: 0.06106 },
    '09': { openPrice: 0.06209, highPrice: 0.0626, lowPrice: 0.061613 }
  },
  '2021-07-23': {
    '13': { openPrice: 0.063203, highPrice: 0.063826, lowPrice: 0.063111 },
    '17': { openPrice: 0.063544, highPrice: 0.063838, lowPrice: 0.063167 },
    '21': { openPrice: 0.063624, highPrice: 0.063839, lowPrice: 0.063373 },
    '01': { openPrice: 0.062566, highPrice: 0.06293, lowPrice: 0.062381 },
    '05': { openPrice: 0.06267, highPrice: 0.062765, lowPrice: 0.0621 },
    '09': { openPrice: 0.062699, highPrice: 0.063446, lowPrice: 0.062538 }
  },
  '2021-07-24': {
    '13': { openPrice: 0.063514, highPrice: 0.063644, lowPrice: 0.062968 },
    '17': { openPrice: 0.063073, highPrice: 0.0638, lowPrice: 0.062884 },
    '21': { openPrice: 0.063627, highPrice: 0.064078, lowPrice: 0.063518 },
    '01': { openPrice: 0.06338, highPrice: 0.063402, lowPrice: 0.062232 },
    '05': { openPrice: 0.062655, highPrice: 0.063582, lowPrice: 0.062599 },
    '09': { openPrice: 0.063164, highPrice: 0.063524, lowPrice: 0.062817 }
  },
  '2021-07-25': {
    '13': { openPrice: 0.062981, highPrice: 0.063118, lowPrice: 0.062665 },
    '17': { openPrice: 0.062693, highPrice: 0.0632, lowPrice: 0.062564 },
    '21': { openPrice: 0.062792, highPrice: 0.062792, lowPrice: 0.062027 },
    '01': { openPrice: 0.06354, highPrice: 0.063928, lowPrice: 0.063261 },
    '05': { openPrice: 0.063399, highPrice: 0.0639, lowPrice: 0.063159 },
    '09': { openPrice: 0.063777, highPrice: 0.063869, lowPrice: 0.062964 }
  },
  '2021-07-26': {
    '13': { openPrice: 0.060528, highPrice: 0.061355, lowPrice: 0.060377 },
    '17': { openPrice: 0.060964, highPrice: 0.061401, lowPrice: 0.060793 },
    '21': { openPrice: 0.060866, highPrice: 0.061128, lowPrice: 0.060577 },
    '01': { openPrice: 0.062562, highPrice: 0.06281, lowPrice: 0.062159 },
    '05': { openPrice: 0.062675, highPrice: 0.062877, lowPrice: 0.061883 },
    '09': { openPrice: 0.061901, highPrice: 0.062549, lowPrice: 0.058669 }
  },
  '2021-07-27': {
    '13': { openPrice: 0.059002, highPrice: 0.059404, lowPrice: 0.058939 },
    '17': { openPrice: 0.059335, highPrice: 0.059926, lowPrice: 0.059208 },
    '21': { openPrice: 0.059856, highPrice: 0.060347, lowPrice: 0.059387 },
    '01': { openPrice: 0.060725, highPrice: 0.060809, lowPrice: 0.059446 },
    '05': { openPrice: 0.060019, highPrice: 0.06032, lowPrice: 0.059412 },
    '09': { openPrice: 0.05982, highPrice: 0.059883, lowPrice: 0.058614 }
  },
  '2021-07-28': {
    '13': { openPrice: 0.057464, highPrice: 0.057705, lowPrice: 0.057031 },
    '17': { openPrice: 0.057552, highPrice: 0.058086, lowPrice: 0.057129 },
    '21': { openPrice: 0.057186, highPrice: 0.057945, lowPrice: 0.057039 },
    '01': { openPrice: 0.059595, highPrice: 0.059615, lowPrice: 0.05875 },
    '05': { openPrice: 0.058971, highPrice: 0.059299, lowPrice: 0.058271 },
    '09': { openPrice: 0.058273, highPrice: 0.058441, lowPrice: 0.057374 }
  },
  '2021-07-29': {
    '13': { openPrice: 0.057503, highPrice: 0.057587, lowPrice: 0.057202 },
    '17': { openPrice: 0.057467, highPrice: 0.057836, lowPrice: 0.057288 },
    '21': { openPrice: 0.057665, highPrice: 0.05837, lowPrice: 0.057665 },
    '01': { openPrice: 0.057746, highPrice: 0.05825, lowPrice: 0.057089 },
    '05': { openPrice: 0.057194, highPrice: 0.057782, lowPrice: 0.057168 },
    '09': { openPrice: 0.057493, highPrice: 0.057788, lowPrice: 0.057297 }
  },
  '2021-07-30': {
    '13': { openPrice: 0.060601, highPrice: 0.06095, lowPrice: 0.06013 },
    '17': { openPrice: 0.060534, highPrice: 0.060864, lowPrice: 0.06027 },
    '21': { openPrice: 0.060427, highPrice: 0.060544, lowPrice: 0.05987 },
    '01': { openPrice: 0.058184, highPrice: 0.058778, lowPrice: 0.058138 },
    '05': { openPrice: 0.058274, highPrice: 0.059778, lowPrice: 0.058165 },
    '09': { openPrice: 0.059547, highPrice: 0.060973, lowPrice: 0.059487 }
  },
  '2021-07-31': {
    '13': { openPrice: 0.05892, highPrice: 0.058958, lowPrice: 0.058422 },
    '17': { openPrice: 0.058788, highPrice: 0.059351, lowPrice: 0.058745 },
    '21': { openPrice: 0.059109, highPrice: 0.059259, lowPrice: 0.058875 },
    '01': { openPrice: 0.060057, highPrice: 0.06035, lowPrice: 0.059683 },
    '05': { openPrice: 0.059685, highPrice: 0.059963, lowPrice: 0.058315 },
    '09': { openPrice: 0.058328, highPrice: 0.058933, lowPrice: 0.0581 }
  },
  '2021-08-01': {
    '13': { openPrice: 0.061657, highPrice: 0.062536, lowPrice: 0.061608 },
    '17': { openPrice: 0.062016, highPrice: 0.062388, lowPrice: 0.061986 },
    '21': { openPrice: 0.06221, highPrice: 0.062698, lowPrice: 0.062172 },
    '01': { openPrice: 0.059174, highPrice: 0.059489, lowPrice: 0.059158 },
    '05': { openPrice: 0.05948, highPrice: 0.061119, lowPrice: 0.059354 },
    '09': { openPrice: 0.06104, highPrice: 0.061999, lowPrice: 0.061035 }
  },
  '2021-08-02': {
    '13': { openPrice: 0.064346, highPrice: 0.065372, lowPrice: 0.064144 },
    '17': { openPrice: 0.065263, highPrice: 0.065754, lowPrice: 0.064925 },
    '21': { openPrice: 0.06551, highPrice: 0.066707, lowPrice: 0.065503 },
    '01': { openPrice: 0.062565, highPrice: 0.064385, lowPrice: 0.062043 },
    '05': { openPrice: 0.064355, highPrice: 0.065053, lowPrice: 0.063889 },
    '09': { openPrice: 0.064121, highPrice: 0.064591, lowPrice: 0.063557 }
  },
  '2021-08-03': {
    '13': { openPrice: 0.065534, highPrice: 0.065623, lowPrice: 0.063829 },
    '17': { openPrice: 0.064597, highPrice: 0.065249, lowPrice: 0.064243 },
    '21': { openPrice: 0.064663, highPrice: 0.06575, lowPrice: 0.064501 },
    '01': { openPrice: 0.066328, highPrice: 0.066969, lowPrice: 0.066127 },
    '05': { openPrice: 0.066416, highPrice: 0.06705, lowPrice: 0.066388 },
    '09': { openPrice: 0.066595, highPrice: 0.066733, lowPrice: 0.065369 }
  },
  '2021-08-04': {
    '13': { openPrice: 0.065429, highPrice: 0.065958, lowPrice: 0.065235 },
    '17': { openPrice: 0.065525, highPrice: 0.065821, lowPrice: 0.06537 },
    '21': { openPrice: 0.065666, highPrice: 0.068401, lowPrice: 0.065493 },
    '01': { openPrice: 0.06541, highPrice: 0.065494, lowPrice: 0.064874 },
    '05': { openPrice: 0.065115, highPrice: 0.06602, lowPrice: 0.0646 },
    '09': { openPrice: 0.065669, highPrice: 0.066052, lowPrice: 0.065245 }
  },
  '2021-08-05': {
    '13': { openPrice: 0.06878, highPrice: 0.069121, lowPrice: 0.0683 },
    '17': { openPrice: 0.06899, highPrice: 0.069237, lowPrice: 0.067743 },
    '21': { openPrice: 0.068985, highPrice: 0.073242, lowPrice: 0.067133 },
    '01': { openPrice: 0.068011, highPrice: 0.068985, lowPrice: 0.067604 },
    '05': { openPrice: 0.067782, highPrice: 0.069349, lowPrice: 0.067695 },
    '09': { openPrice: 0.068588, highPrice: 0.06891, lowPrice: 0.068045 }
  },
  '2021-08-06': {
    '13': { openPrice: 0.068643, highPrice: 0.069157, lowPrice: 0.067545 },
    '17': { openPrice: 0.067954, highPrice: 0.068071, lowPrice: 0.067303 },
    '21': { openPrice: 0.067547, highPrice: 0.068187, lowPrice: 0.066943 },
    '01': { openPrice: 0.071095, highPrice: 0.07122, lowPrice: 0.067736 },
    '05': { openPrice: 0.068727, highPrice: 0.069393, lowPrice: 0.068162 },
    '09': { openPrice: 0.069187, highPrice: 0.06965, lowPrice: 0.068559 }
  },
  '2021-08-07': {
    '13': { openPrice: 0.067168, highPrice: 0.068832, lowPrice: 0.067103 },
    '17': { openPrice: 0.068402, highPrice: 0.070994, lowPrice: 0.068254 },
    '21': { openPrice: 0.070903, highPrice: 0.071535, lowPrice: 0.070451 },
    '01': { openPrice: 0.067273, highPrice: 0.0688, lowPrice: 0.0666 },
    '05': { openPrice: 0.068272, highPrice: 0.068489, lowPrice: 0.067271 },
    '09': { openPrice: 0.067506, highPrice: 0.067757, lowPrice: 0.067033 }
  },
  '2021-08-08': {
    '13': { openPrice: 0.070399, highPrice: 0.070598, lowPrice: 0.069553 },
    '17': { openPrice: 0.070027, highPrice: 0.070529, lowPrice: 0.069645 },
    '21': { openPrice: 0.069771, highPrice: 0.06998, lowPrice: 0.06882 },
    '01': { openPrice: 0.071084, highPrice: 0.071372, lowPrice: 0.069873 },
    '05': { openPrice: 0.069981, highPrice: 0.071081, lowPrice: 0.069896 },
    '09': { openPrice: 0.070908, highPrice: 0.071331, lowPrice: 0.070185 }
  },
  '2021-08-09': {
    '13': { openPrice: 0.067778, highPrice: 0.067969, lowPrice: 0.066877 },
    '17': { openPrice: 0.067216, highPrice: 0.068712, lowPrice: 0.067181 },
    '21': { openPrice: 0.06822, highPrice: 0.069078, lowPrice: 0.068001 },
    '01': { openPrice: 0.068897, highPrice: 0.06917, lowPrice: 0.068 },
    '05': { openPrice: 0.068295, highPrice: 0.069084, lowPrice: 0.067886 },
    '09': { openPrice: 0.068766, highPrice: 0.069094, lowPrice: 0.067616 }
  },
  '2021-08-10': {
    '13': { openPrice: 0.068156, highPrice: 0.068778, lowPrice: 0.068029 },
    '17': { openPrice: 0.068364, highPrice: 0.069281, lowPrice: 0.06828 },
    '21': { openPrice: 0.068868, highPrice: 0.070419, lowPrice: 0.068808 },
    '01': { openPrice: 0.069035, highPrice: 0.069095, lowPrice: 0.068342 },
    '05': { openPrice: 0.06846, highPrice: 0.068536, lowPrice: 0.067291 },
    '09': { openPrice: 0.068337, highPrice: 0.068614, lowPrice: 0.067666 }
  },
  '2021-08-11': {
    '13': { openPrice: 0.069307, highPrice: 0.070004, lowPrice: 0.068851 },
    '17': { openPrice: 0.069732, highPrice: 0.0702, lowPrice: 0.069469 },
    '21': { openPrice: 0.069996, highPrice: 0.070295, lowPrice: 0.069718 },
    '01': { openPrice: 0.069108, highPrice: 0.069199, lowPrice: 0.068326 },
    '05': { openPrice: 0.069066, highPrice: 0.069615, lowPrice: 0.068877 },
    '09': { openPrice: 0.068913, highPrice: 0.0696, lowPrice: 0.06867 }
  },
  '2021-08-12': {
    '13': { openPrice: 0.069939, highPrice: 0.07, lowPrice: 0.069 },
    '17': { openPrice: 0.069435, highPrice: 0.069578, lowPrice: 0.068985 },
    '21': { openPrice: 0.069141, highPrice: 0.069709, lowPrice: 0.068536 },
    '01': { openPrice: 0.069858, highPrice: 0.070382, lowPrice: 0.069547 },
    '05': { openPrice: 0.069951, highPrice: 0.070031, lowPrice: 0.069054 },
    '09': { openPrice: 0.069439, highPrice: 0.070314, lowPrice: 0.069217 }
  },
  '2021-08-13': {
    '13': { openPrice: 0.068867, highPrice: 0.069998, lowPrice: 0.068867 },
    '17': { openPrice: 0.069924, highPrice: 0.070328, lowPrice: 0.069641 },
    '21': { openPrice: 0.069646, highPrice: 0.0698, lowPrice: 0.068819 },
    '01': { openPrice: 0.068546, highPrice: 0.068984, lowPrice: 0.067948 },
    '05': { openPrice: 0.068705, highPrice: 0.069096, lowPrice: 0.067664 },
    '09': { openPrice: 0.068601, highPrice: 0.069128, lowPrice: 0.068484 }
  },
  '2021-08-14': {
    '13': { openPrice: 0.069325, highPrice: 0.069649, lowPrice: 0.069069 },
    '17': { openPrice: 0.069467, highPrice: 0.069784, lowPrice: 0.069114 },
    '21': { openPrice: 0.069674, highPrice: 0.069949, lowPrice: 0.069465 },
    '01': { openPrice: 0.069326, highPrice: 0.069636, lowPrice: 0.069175 },
    '05': { openPrice: 0.069422, highPrice: 0.069689, lowPrice: 0.068707 },
    '09': { openPrice: 0.069509, highPrice: 0.069624, lowPrice: 0.069102 }
  },
  '2021-08-15': {
    '13': { openPrice: 0.069279, highPrice: 0.069598, lowPrice: 0.068931 },
    '17': { openPrice: 0.069111, highPrice: 0.069371, lowPrice: 0.068571 },
    '21': { openPrice: 0.068814, highPrice: 0.068922, lowPrice: 0.068337 },
    '01': { openPrice: 0.069666, highPrice: 0.069732, lowPrice: 0.0693 },
    '05': { openPrice: 0.06937, highPrice: 0.069524, lowPrice: 0.069115 },
    '09': { openPrice: 0.069326, highPrice: 0.069598, lowPrice: 0.069048 }
  },
  '2021-08-16': {
    '13': { openPrice: 0.068857, highPrice: 0.069466, lowPrice: 0.06875 },
    '17': { openPrice: 0.069246, highPrice: 0.069619, lowPrice: 0.06915 },
    '21': { openPrice: 0.069245, highPrice: 0.069687, lowPrice: 0.069125 },
    '01': { openPrice: 0.06837, highPrice: 0.069251, lowPrice: 0.068133 },
    '05': { openPrice: 0.069217, highPrice: 0.070486, lowPrice: 0.069154 },
    '09': { openPrice: 0.070406, highPrice: 0.070558, lowPrice: 0.068819 }
  },
  '2021-08-17': {
    '13': { openPrice: 0.068829, highPrice: 0.069123, lowPrice: 0.068673 },
    '17': { openPrice: 0.069013, highPrice: 0.069622, lowPrice: 0.068796 },
    '21': { openPrice: 0.069531, highPrice: 0.069949, lowPrice: 0.069144 },
    '01': { openPrice: 0.069566, highPrice: 0.069756, lowPrice: 0.0687 },
    '05': { openPrice: 0.068929, highPrice: 0.069186, lowPrice: 0.068514 },
    '09': { openPrice: 0.068554, highPrice: 0.068941, lowPrice: 0.068253 }
  },
  '2021-08-18': {
    '13': { openPrice: 0.067682, highPrice: 0.06793, lowPrice: 0.067332 },
    '17': { openPrice: 0.067415, highPrice: 0.067502, lowPrice: 0.06695 },
    '21': { openPrice: 0.067043, highPrice: 0.067955, lowPrice: 0.067043 },
    '01': { openPrice: 0.069233, highPrice: 0.069463, lowPrice: 0.068508 },
    '05': { openPrice: 0.068556, highPrice: 0.068641, lowPrice: 0.067216 },
    '09': { openPrice: 0.067391, highPrice: 0.067914, lowPrice: 0.066555 }
  },
  '2021-08-19': {
    '13': { openPrice: 0.06735, highPrice: 0.067851, lowPrice: 0.066954 },
    '17': { openPrice: 0.067079, highPrice: 0.067491, lowPrice: 0.067012 },
    '21': { openPrice: 0.067259, highPrice: 0.067424, lowPrice: 0.066841 },
    '01': { openPrice: 0.067893, highPrice: 0.068043, lowPrice: 0.067252 },
    '05': { openPrice: 0.067483, highPrice: 0.067878, lowPrice: 0.06729 },
    '09': { openPrice: 0.067442, highPrice: 0.067671, lowPrice: 0.067158 }
  },
  '2021-08-20': {
    '13': { openPrice: 0.068379, highPrice: 0.0687, lowPrice: 0.068283 },
    '17': { openPrice: 0.068691, highPrice: 0.06876, lowPrice: 0.067839 },
    '21': { openPrice: 0.068286, highPrice: 0.068689, lowPrice: 0.067362 },
    '01': { openPrice: 0.066998, highPrice: 0.067745, lowPrice: 0.065971 },
    '05': { openPrice: 0.067386, highPrice: 0.068213, lowPrice: 0.067386 },
    '09': { openPrice: 0.068093, highPrice: 0.06863, lowPrice: 0.068025 }
  },
  '2021-08-21': {
    '13': { openPrice: 0.067101, highPrice: 0.06754, lowPrice: 0.066953 },
    '17': { openPrice: 0.067293, highPrice: 0.067426, lowPrice: 0.066804 },
    '21': { openPrice: 0.067004, highPrice: 0.067142, lowPrice: 0.06645 },
    '01': { openPrice: 0.067393, highPrice: 0.067513, lowPrice: 0.066397 },
    '05': { openPrice: 0.066815, highPrice: 0.06718, lowPrice: 0.066226 },
    '09': { openPrice: 0.066598, highPrice: 0.067112, lowPrice: 0.06627 }
  },
  '2021-08-22': {
    '13': { openPrice: 0.066128, highPrice: 0.066466, lowPrice: 0.065701 },
    '17': { openPrice: 0.066306, highPrice: 0.066494, lowPrice: 0.066029 },
    '21': { openPrice: 0.066267, highPrice: 0.066464, lowPrice: 0.06545 },
    '01': { openPrice: 0.066521, highPrice: 0.066652, lowPrice: 0.065555 },
    '05': { openPrice: 0.065687, highPrice: 0.06617, lowPrice: 0.065619 },
    '09': { openPrice: 0.066018, highPrice: 0.066401, lowPrice: 0.066 }
  },
  '2021-08-23': {
    '13': { openPrice: 0.066458, highPrice: 0.066832, lowPrice: 0.066138 },
    '17': { openPrice: 0.066302, highPrice: 0.066743, lowPrice: 0.066207 },
    '21': { openPrice: 0.066341, highPrice: 0.067178, lowPrice: 0.066295 },
    '01': { openPrice: 0.06555, highPrice: 0.065595, lowPrice: 0.064866 },
    '05': { openPrice: 0.065271, highPrice: 0.065882, lowPrice: 0.064915 },
    '09': { openPrice: 0.065756, highPrice: 0.06691, lowPrice: 0.065411 }
  },
  '2021-08-24': {
    '13': { openPrice: 0.067383, highPrice: 0.067645, lowPrice: 0.067082 },
    '17': { openPrice: 0.067239, highPrice: 0.067368, lowPrice: 0.066928 },
    '21': { openPrice: 0.067225, highPrice: 0.067327, lowPrice: 0.066347 },
    '01': { openPrice: 0.067147, highPrice: 0.067528, lowPrice: 0.067103 },
    '05': { openPrice: 0.067212, highPrice: 0.067665, lowPrice: 0.066883 },
    '09': { openPrice: 0.067111, highPrice: 0.0675, lowPrice: 0.067111 }
  },
  '2021-08-25': {
    '13': { openPrice: 0.066172, highPrice: 0.0664, lowPrice: 0.06589 },
    '17': { openPrice: 0.066137, highPrice: 0.066258, lowPrice: 0.065229 },
    '21': { openPrice: 0.065996, highPrice: 0.066021, lowPrice: 0.065542 },
    '01': { openPrice: 0.066477, highPrice: 0.066739, lowPrice: 0.0658 },
    '05': { openPrice: 0.066697, highPrice: 0.066708, lowPrice: 0.066237 },
    '09': { openPrice: 0.066503, highPrice: 0.066805, lowPrice: 0.066121 }
  },
  '2021-08-26': {
    '13': { openPrice: 0.065718, highPrice: 0.066444, lowPrice: 0.065707 },
    '17': { openPrice: 0.066219, highPrice: 0.066308, lowPrice: 0.065845 },
    '21': { openPrice: 0.065922, highPrice: 0.066655, lowPrice: 0.065828 },
    '01': { openPrice: 0.065908, highPrice: 0.066163, lowPrice: 0.065834 },
    '05': { openPrice: 0.06607, highPrice: 0.066126, lowPrice: 0.06555 },
    '09': { openPrice: 0.065891, highPrice: 0.065999, lowPrice: 0.065431 }
  },
  '2021-08-27': {
    '13': { openPrice: 0.066086, highPrice: 0.066214, lowPrice: 0.0658 },
    '17': { openPrice: 0.065851, highPrice: 0.066497, lowPrice: 0.065727 },
    '21': { openPrice: 0.066491, highPrice: 0.067399, lowPrice: 0.066445 },
    '01': { openPrice: 0.066339, highPrice: 0.066571, lowPrice: 0.065982 },
    '05': { openPrice: 0.066236, highPrice: 0.066471, lowPrice: 0.065968 },
    '09': { openPrice: 0.066034, highPrice: 0.066129, lowPrice: 0.065701 }
  },
  '2021-08-28': {
    '13': { openPrice: 0.066418, highPrice: 0.066482, lowPrice: 0.065974 },
    '17': { openPrice: 0.065985, highPrice: 0.066428, lowPrice: 0.06597 },
    '21': { openPrice: 0.066198, highPrice: 0.066577, lowPrice: 0.06616 },
    '01': { openPrice: 0.067223, highPrice: 0.067289, lowPrice: 0.066765 },
    '05': { openPrice: 0.066933, highPrice: 0.067433, lowPrice: 0.066493 },
    '09': { openPrice: 0.066715, highPrice: 0.066868, lowPrice: 0.066208 }
  },
  '2021-08-29': {
    '13': { openPrice: 0.065955, highPrice: 0.066173, lowPrice: 0.065637 },
    '17': { openPrice: 0.066129, highPrice: 0.066238, lowPrice: 0.065882 },
    '21': { openPrice: 0.066066, highPrice: 0.06623, lowPrice: 0.065707 },
    '01': { openPrice: 0.066509, highPrice: 0.066624, lowPrice: 0.066182 },
    '05': { openPrice: 0.066403, highPrice: 0.066565, lowPrice: 0.066249 },
    '09': { openPrice: 0.066358, highPrice: 0.066585, lowPrice: 0.0657 }
  },
  '2021-08-30': {
    '13': { openPrice: 0.065918, highPrice: 0.066421, lowPrice: 0.065769 },
    '17': { openPrice: 0.066345, highPrice: 0.066597, lowPrice: 0.066288 },
    '21': { openPrice: 0.066541, highPrice: 0.067061, lowPrice: 0.066324 },
    '01': { openPrice: 0.065745, highPrice: 0.066074, lowPrice: 0.06565 },
    '05': { openPrice: 0.065997, highPrice: 0.066405, lowPrice: 0.065832 },
    '09': { openPrice: 0.066101, highPrice: 0.066272, lowPrice: 0.065755 }
  },
  '2021-08-31': {
    '13': { openPrice: 0.068677, highPrice: 0.07039, lowPrice: 0.068468 },
    '17': { openPrice: 0.070305, highPrice: 0.0716, lowPrice: 0.069983 },
    '21': { openPrice: 0.071501, highPrice: 0.071958, lowPrice: 0.071178 },
    '01': { openPrice: 0.067014, highPrice: 0.068988, lowPrice: 0.066978 },
    '05': { openPrice: 0.06872, highPrice: 0.069156, lowPrice: 0.068435 },
    '09': { openPrice: 0.06873, highPrice: 0.068949, lowPrice: 0.068288 }
  },
  '2021-09-01': {
    '13': { openPrice: 0.073179, highPrice: 0.074714, lowPrice: 0.07295 },
    '17': { openPrice: 0.074563, highPrice: 0.0748, lowPrice: 0.07386 },
    '21': { openPrice: 0.074, highPrice: 0.075454, lowPrice: 0.073894 },
    '01': { openPrice: 0.07146, highPrice: 0.072253, lowPrice: 0.071065 },
    '05': { openPrice: 0.072184, highPrice: 0.072931, lowPrice: 0.071921 },
    '09': { openPrice: 0.072807, highPrice: 0.073311, lowPrice: 0.072462 }
  },
  '2021-09-02': {
    '13': { openPrice: 0.07594, highPrice: 0.076262, lowPrice: 0.074539 },
    '17': { openPrice: 0.074892, highPrice: 0.075289, lowPrice: 0.074522 },
    '21': { openPrice: 0.075105, highPrice: 0.0763, lowPrice: 0.075055 },
    '01': { openPrice: 0.075399, highPrice: 0.078, lowPrice: 0.075389 },
    '05': { openPrice: 0.077124, highPrice: 0.0786, lowPrice: 0.077079 },
    '09': { openPrice: 0.078401, highPrice: 0.078409, lowPrice: 0.075321 }
  },
  '2021-09-03': {
    '13': { openPrice: 0.076944, highPrice: 0.077215, lowPrice: 0.076398 },
    '17': { openPrice: 0.07703, highPrice: 0.07955, lowPrice: 0.076922 },
    '21': { openPrice: 0.0788, highPrice: 0.078971, lowPrice: 0.077638 },
    '01': { openPrice: 0.075817, highPrice: 0.076881, lowPrice: 0.075816 },
    '05': { openPrice: 0.076693, highPrice: 0.077152, lowPrice: 0.076315 },
    '09': { openPrice: 0.076872, highPrice: 0.077309, lowPrice: 0.076628 }
  },
  '2021-09-04': {
    '13': { openPrice: 0.077915, highPrice: 0.07821, lowPrice: 0.077527 },
    '17': { openPrice: 0.078034, highPrice: 0.078717, lowPrice: 0.077721 },
    '21': { openPrice: 0.077897, highPrice: 0.078565, lowPrice: 0.077692 },
    '01': { openPrice: 0.078502, highPrice: 0.078936, lowPrice: 0.078051 },
    '05': { openPrice: 0.078051, highPrice: 0.07881, lowPrice: 0.07795 },
    '09': { openPrice: 0.078778, highPrice: 0.0793, lowPrice: 0.077838 }
  },
  '2021-09-05': {
    '13': { openPrice: 0.077421, highPrice: 0.077849, lowPrice: 0.077377 },
    '17': { openPrice: 0.077638, highPrice: 0.078767, lowPrice: 0.077493 },
    '21': { openPrice: 0.078178, highPrice: 0.07876, lowPrice: 0.0777 },
    '01': { openPrice: 0.078557, highPrice: 0.078582, lowPrice: 0.077047 },
    '05': { openPrice: 0.077196, highPrice: 0.07799, lowPrice: 0.077086 },
    '09': { openPrice: 0.077837, highPrice: 0.077993, lowPrice: 0.077283 }
  },
  '2021-09-06': {
    '13': { openPrice: 0.07568, highPrice: 0.0763, lowPrice: 0.0756 },
    '17': { openPrice: 0.076145, highPrice: 0.076808, lowPrice: 0.075766 },
    '21': { openPrice: 0.075977, highPrice: 0.076333, lowPrice: 0.075701 },
    '01': { openPrice: 0.077819, highPrice: 0.078096, lowPrice: 0.077482 },
    '05': { openPrice: 0.077513, highPrice: 0.077513, lowPrice: 0.075982 },
    '09': { openPrice: 0.076315, highPrice: 0.07638, lowPrice: 0.075597 }
  },
  '2021-09-07': {
    '13': { openPrice: 0.074317, highPrice: 0.074717, lowPrice: 0.074022 },
    '17': { openPrice: 0.074199, highPrice: 0.074199, lowPrice: 0.07265 },
    '21': { openPrice: 0.073602, highPrice: 0.074444, lowPrice: 0.06951 },
    '01': { openPrice: 0.07606, highPrice: 0.0764, lowPrice: 0.075961 },
    '05': { openPrice: 0.076145, highPrice: 0.076278, lowPrice: 0.074432 },
    '09': { openPrice: 0.074551, highPrice: 0.075051, lowPrice: 0.074135 }
  },
  '2021-09-08': {
    '01': { openPrice: 0.074009, highPrice: 0.075221, lowPrice: 0.072776 },
    '05': { openPrice: 0.073068, highPrice: 0.073382, lowPrice: 0.0725 }
  }
} ,
'LTCBTC':
{
  '2021-03-25': {
    '17': { openPrice: 0.00331, highPrice: 0.003342, lowPrice: 0.00331 },
    '21': { openPrice: 0.003337, highPrice: 0.003368, lowPrice: 0.003321 }
  },
  '2021-03-26': {
    '13': { openPrice: 0.003341, highPrice: 0.003348, lowPrice: 0.003299 },
    '17': { openPrice: 0.003306, highPrice: 0.003426, lowPrice: 0.003299 },
    '21': { openPrice: 0.003395, highPrice: 0.003419, lowPrice: 0.003353 },
    '01': { openPrice: 0.003349, highPrice: 0.003376, lowPrice: 0.00333 },
    '05': { openPrice: 0.003339, highPrice: 0.003361, lowPrice: 0.003316 },
    '09': { openPrice: 0.003344, highPrice: 0.003406, lowPrice: 0.003329 }
  },
  '2021-03-27': {
    '13': { openPrice: 0.003317, highPrice: 0.003333, lowPrice: 0.003309 },
    '17': { openPrice: 0.003319, highPrice: 0.003338, lowPrice: 0.003309 },
    '21': { openPrice: 0.003311, highPrice: 0.003317, lowPrice: 0.003283 },
    '01': { openPrice: 0.003376, highPrice: 0.003396, lowPrice: 0.003354 },
    '05': { openPrice: 0.003364, highPrice: 0.003388, lowPrice: 0.003329 },
    '09': { openPrice: 0.003333, highPrice: 0.003338, lowPrice: 0.003315 }
  },
  '2021-03-28': {
    '13': { openPrice: 0.00332, highPrice: 0.003323, lowPrice: 0.003295 },
    '17': { openPrice: 0.003298, highPrice: 0.003307, lowPrice: 0.003284 },
    '21': { openPrice: 0.00329, highPrice: 0.003306, lowPrice: 0.003282 },
    '01': { openPrice: 0.003293, highPrice: 0.003299, lowPrice: 0.003266 },
    '05': { openPrice: 0.003278, highPrice: 0.003325, lowPrice: 0.003275 },
    '09': { openPrice: 0.003297, highPrice: 0.003326, lowPrice: 0.003278 }
  },
  '2021-03-29': {
    '13': { openPrice: 0.003444, highPrice: 0.003523, lowPrice: 0.003439 },
    '17': { openPrice: 0.003472, highPrice: 0.003485, lowPrice: 0.003351 },
    '21': { openPrice: 0.003374, highPrice: 0.003389, lowPrice: 0.003326 },
    '01': { openPrice: 0.003288, highPrice: 0.00331, lowPrice: 0.003275 },
    '05': { openPrice: 0.003293, highPrice: 0.003308, lowPrice: 0.003289 },
    '09': { openPrice: 0.003302, highPrice: 0.003459, lowPrice: 0.003292 }
  },
  '2021-03-30': {
    '13': { openPrice: 0.003341, highPrice: 0.003347, lowPrice: 0.00329 },
    '17': { openPrice: 0.003315, highPrice: 0.003385, lowPrice: 0.003302 },
    '21': { openPrice: 0.003371, highPrice: 0.003374, lowPrice: 0.003327 },
    '01': { openPrice: 0.003354, highPrice: 0.003413, lowPrice: 0.003354 },
    '05': { openPrice: 0.00337, highPrice: 0.0034, lowPrice: 0.003358 },
    '09': { openPrice: 0.003362, highPrice: 0.003397, lowPrice: 0.003323 }
  },
  '2021-03-31': {
    '13': { openPrice: 0.003304, highPrice: 0.003351, lowPrice: 0.003286 },
    '17': { openPrice: 0.003308, highPrice: 0.003312, lowPrice: 0.003253 },
    '21': { openPrice: 0.003286, highPrice: 0.003305, lowPrice: 0.003256 },
    '01': { openPrice: 0.003347, highPrice: 0.003363, lowPrice: 0.003327 },
    '05': { openPrice: 0.003327, highPrice: 0.003346, lowPrice: 0.003302 },
    '09': { openPrice: 0.003331, highPrice: 0.003351, lowPrice: 0.003276 }
  },
  '2021-04-01': {
    '13': { openPrice: 0.003341, highPrice: 0.003367, lowPrice: 0.003318 },
    '17': { openPrice: 0.003356, highPrice: 0.003372, lowPrice: 0.003325 },
    '21': { openPrice: 0.003348, highPrice: 0.00347, lowPrice: 0.003316 },
    '01': { openPrice: 0.00326, highPrice: 0.003303, lowPrice: 0.003236 },
    '05': { openPrice: 0.003296, highPrice: 0.00336, lowPrice: 0.003294 },
    '09': { openPrice: 0.003348, highPrice: 0.0034, lowPrice: 0.003337 }
  },
  '2021-04-02': {
    '13': { openPrice: 0.003443, highPrice: 0.00346, lowPrice: 0.003418 },
    '17': { openPrice: 0.003448, highPrice: 0.003481, lowPrice: 0.003432 },
    '21': { openPrice: 0.003457, highPrice: 0.003523, lowPrice: 0.003409 },
    '01': { openPrice: 0.003461, highPrice: 0.00347, lowPrice: 0.00338 },
    '05': { openPrice: 0.003423, highPrice: 0.003471, lowPrice: 0.003411 },
    '09': { openPrice: 0.003454, highPrice: 0.003497, lowPrice: 0.003429 }
  },
  '2021-04-03': {
    '13': { openPrice: 0.00356, highPrice: 0.00367, lowPrice: 0.003555 },
    '17': { openPrice: 0.003638, highPrice: 0.003657, lowPrice: 0.003565 },
    '21': { openPrice: 0.003602, highPrice: 0.00363, lowPrice: 0.003517 },
    '01': { openPrice: 0.003497, highPrice: 0.003572, lowPrice: 0.003466 },
    '05': { openPrice: 0.003487, highPrice: 0.003618, lowPrice: 0.00348 },
    '09': { openPrice: 0.003587, highPrice: 0.003618, lowPrice: 0.00354 }
  },
  '2021-04-04': {
    '13': { openPrice: 0.003466, highPrice: 0.003481, lowPrice: 0.003428 },
    '17': { openPrice: 0.003477, highPrice: 0.003515, lowPrice: 0.003473 },
    '21': { openPrice: 0.003487, highPrice: 0.003521, lowPrice: 0.003469 },
    '01': { openPrice: 0.003522, highPrice: 0.00356, lowPrice: 0.003456 },
    '05': { openPrice: 0.003517, highPrice: 0.003517, lowPrice: 0.003414 },
    '09': { openPrice: 0.003422, highPrice: 0.003492, lowPrice: 0.0034 }
  },
  '2021-04-05': {
    '13': { openPrice: 0.003525, highPrice: 0.003556, lowPrice: 0.003485 },
    '17': { openPrice: 0.0035, highPrice: 0.003558, lowPrice: 0.003485 },
    '21': { openPrice: 0.003525, highPrice: 0.00358, lowPrice: 0.003503 },
    '01': { openPrice: 0.003477, highPrice: 0.003539, lowPrice: 0.003466 },
    '05': { openPrice: 0.003482, highPrice: 0.003504, lowPrice: 0.003454 },
    '09': { openPrice: 0.003476, highPrice: 0.003598, lowPrice: 0.003456 }
  },
  '2021-04-06': {
    '13': { openPrice: 0.003726, highPrice: 0.003809, lowPrice: 0.003725 },
    '17': { openPrice: 0.003748, highPrice: 0.003988, lowPrice: 0.003745 },
    '21': { openPrice: 0.003984, highPrice: 0.004076, lowPrice: 0.0037 },
    '01': { openPrice: 0.003547, highPrice: 0.003763, lowPrice: 0.003535 },
    '05': { openPrice: 0.003695, highPrice: 0.003832, lowPrice: 0.003685 },
    '09': { openPrice: 0.003745, highPrice: 0.003849, lowPrice: 0.003711 }
  },
  '2021-04-07': {
    '13': { openPrice: 0.004153, highPrice: 0.004204, lowPrice: 0.003982 },
    '17': { openPrice: 0.004015, highPrice: 0.004034, lowPrice: 0.003767 },
    '21': { openPrice: 0.003881, highPrice: 0.003982, lowPrice: 0.003805 },
    '01': { openPrice: 0.004058, highPrice: 0.004206, lowPrice: 0.003986 },
    '05': { openPrice: 0.004102, highPrice: 0.004198, lowPrice: 0.004048 },
    '09': { openPrice: 0.004087, highPrice: 0.004173, lowPrice: 0.004008 }
  },
  '2021-04-08': {
    '13': { openPrice: 0.003912, highPrice: 0.003972, lowPrice: 0.003902 },
    '17': { openPrice: 0.003961, highPrice: 0.003986, lowPrice: 0.003845 },
    '21': { openPrice: 0.003878, highPrice: 0.003928, lowPrice: 0.003869 },
    '01': { openPrice: 0.003871, highPrice: 0.003965, lowPrice: 0.003833 },
    '05': { openPrice: 0.003934, highPrice: 0.003973, lowPrice: 0.003878 },
    '09': { openPrice: 0.003917, highPrice: 0.004008, lowPrice: 0.003885 }
  },
  '2021-04-09': {
    '13': { openPrice: 0.003868, highPrice: 0.003889, lowPrice: 0.003854 },
    '17': { openPrice: 0.003879, highPrice: 0.003898, lowPrice: 0.003856 },
    '21': { openPrice: 0.003887, highPrice: 0.003893, lowPrice: 0.003841 },
    '01': { openPrice: 0.003894, highPrice: 0.003912, lowPrice: 0.003851 },
    '05': { openPrice: 0.003859, highPrice: 0.003935, lowPrice: 0.003852 },
    '09': { openPrice: 0.003893, highPrice: 0.003925, lowPrice: 0.003863 }
  },
  '2021-04-10': {
    '13': { openPrice: 0.003826, highPrice: 0.003857, lowPrice: 0.00375 },
    '17': { openPrice: 0.003844, highPrice: 0.003876, lowPrice: 0.003795 },
    '21': { openPrice: 0.003839, highPrice: 0.003923, lowPrice: 0.003801 },
    '01': { openPrice: 0.003848, highPrice: 0.003864, lowPrice: 0.003823 },
    '05': { openPrice: 0.003836, highPrice: 0.003854, lowPrice: 0.00378 },
    '09': { openPrice: 0.003804, highPrice: 0.003842, lowPrice: 0.00378 }
  },
  '2021-04-11': {
    '13': { openPrice: 0.004155, highPrice: 0.004403, lowPrice: 0.004134 },
    '17': { openPrice: 0.004319, highPrice: 0.004397, lowPrice: 0.004247 },
    '21': { openPrice: 0.00432, highPrice: 0.00433, lowPrice: 0.004179 },
    '01': { openPrice: 0.003892, highPrice: 0.004181, lowPrice: 0.003873 },
    '05': { openPrice: 0.004081, highPrice: 0.004294, lowPrice: 0.004018 },
    '09': { openPrice: 0.00429, highPrice: 0.004311, lowPrice: 0.004142 }
  },
  '2021-04-12': {
    '13': { openPrice: 0.00421, highPrice: 0.004273, lowPrice: 0.004156 },
    '17': { openPrice: 0.00421, highPrice: 0.0043, lowPrice: 0.004102 },
    '21': { openPrice: 0.004139, highPrice: 0.00422, lowPrice: 0.004019 },
    '01': { openPrice: 0.004235, highPrice: 0.004257, lowPrice: 0.004113 },
    '05': { openPrice: 0.004192, highPrice: 0.004241, lowPrice: 0.004131 },
    '09': { openPrice: 0.004207, highPrice: 0.004275, lowPrice: 0.004139 }
  },
  '2021-04-13': {
    '13': { openPrice: 0.00414, highPrice: 0.0043, lowPrice: 0.00409 },
    '17': { openPrice: 0.004286, highPrice: 0.004326, lowPrice: 0.004164 },
    '21': { openPrice: 0.004279, highPrice: 0.004286, lowPrice: 0.004207 },
    '01': { openPrice: 0.004073, highPrice: 0.004109, lowPrice: 0.004025 },
    '05': { openPrice: 0.004052, highPrice: 0.004127, lowPrice: 0.004023 },
    '09': { openPrice: 0.004086, highPrice: 0.004178, lowPrice: 0.004084 }
  },
  '2021-04-14': {
    '13': { openPrice: 0.004385, highPrice: 0.004439, lowPrice: 0.00427 },
    '17': { openPrice: 0.004289, highPrice: 0.004322, lowPrice: 0.004113 },
    '21': { openPrice: 0.004232, highPrice: 0.004245, lowPrice: 0.004077 },
    '01': { openPrice: 0.004226, highPrice: 0.004328, lowPrice: 0.00421 },
    '05': { openPrice: 0.004245, highPrice: 0.00425, lowPrice: 0.004111 },
    '09': { openPrice: 0.004208, highPrice: 0.004448, lowPrice: 0.0042 }
  },
  '2021-04-15': {
    '13': { openPrice: 0.004417, highPrice: 0.00442, lowPrice: 0.004297 },
    '17': { openPrice: 0.004354, highPrice: 0.004396, lowPrice: 0.004283 },
    '21': { openPrice: 0.004338, highPrice: 0.00448, lowPrice: 0.004312 },
    '01': { openPrice: 0.004215, highPrice: 0.004304, lowPrice: 0.004186 },
    '05': { openPrice: 0.00426, highPrice: 0.0045, lowPrice: 0.004242 },
    '09': { openPrice: 0.004429, highPrice: 0.004466, lowPrice: 0.004325 }
  },
  '2021-04-16': {
    '13': { openPrice: 0.004689, highPrice: 0.004699, lowPrice: 0.004555 },
    '17': { openPrice: 0.004675, highPrice: 0.004706, lowPrice: 0.004474 },
    '21': { openPrice: 0.004573, highPrice: 0.004872, lowPrice: 0.004401 },
    '01': { openPrice: 0.004474, highPrice: 0.004541, lowPrice: 0.004411 },
    '05': { openPrice: 0.004517, highPrice: 0.004591, lowPrice: 0.004461 },
    '09': { openPrice: 0.004523, highPrice: 0.004713, lowPrice: 0.004444 }
  },
  '2021-04-17': {
    '13': { openPrice: 0.005186, highPrice: 0.005301, lowPrice: 0.005128 },
    '17': { openPrice: 0.005263, highPrice: 0.00539, lowPrice: 0.005015 },
    '21': { openPrice: 0.005099, highPrice: 0.005392, lowPrice: 0.005041 },
    '01': { openPrice: 0.004862, highPrice: 0.005171, lowPrice: 0.004861 },
    '05': { openPrice: 0.005052, highPrice: 0.005123, lowPrice: 0.004918 },
    '09': { openPrice: 0.005029, highPrice: 0.0054, lowPrice: 0.005026 }
  },
  '2021-04-18': {
    '13': { openPrice: 0.004824, highPrice: 0.00492, lowPrice: 0.00458 },
    '17': { openPrice: 0.004768, highPrice: 0.004792, lowPrice: 0.004611 },
    '21': { openPrice: 0.004668, highPrice: 0.004825, lowPrice: 0.004656 },
    '01': { openPrice: 0.005077, highPrice: 0.00522, lowPrice: 0.004947 },
    '05': { openPrice: 0.005148, highPrice: 0.005293, lowPrice: 0.005001 },
    '09': { openPrice: 0.005014, highPrice: 0.005067, lowPrice: 0.004467 }
  },
  '2021-04-19': {
    '13': { openPrice: 0.004909, highPrice: 0.004931, lowPrice: 0.004778 },
    '17': { openPrice: 0.004813, highPrice: 0.004828, lowPrice: 0.004645 },
    '21': { openPrice: 0.00477, highPrice: 0.00483, lowPrice: 0.004575 },
    '01': { openPrice: 0.004788, highPrice: 0.00488, lowPrice: 0.004736 },
    '05': { openPrice: 0.004844, highPrice: 0.004926, lowPrice: 0.00476 },
    '09': { openPrice: 0.004868, highPrice: 0.004953, lowPrice: 0.004788 }
  },
  '2021-04-20': {
    '13': { openPrice: 0.004511, highPrice: 0.00461, lowPrice: 0.004371 },
    '17': { openPrice: 0.004519, highPrice: 0.004662, lowPrice: 0.00451 },
    '21': { openPrice: 0.004589, highPrice: 0.004689, lowPrice: 0.004489 },
    '01': { openPrice: 0.004621, highPrice: 0.004912, lowPrice: 0.004601 },
    '05': { openPrice: 0.004821, highPrice: 0.004842, lowPrice: 0.004666 },
    '09': { openPrice: 0.004698, highPrice: 0.004731, lowPrice: 0.00443 }
  },
  '2021-04-21': {
    '13': { openPrice: 0.004686, highPrice: 0.004775, lowPrice: 0.004659 },
    '17': { openPrice: 0.004699, highPrice: 0.004745, lowPrice: 0.004608 },
    '21': { openPrice: 0.004656, highPrice: 0.004926, lowPrice: 0.004645 },
    '01': { openPrice: 0.004595, highPrice: 0.004826, lowPrice: 0.00458 },
    '05': { openPrice: 0.004818, highPrice: 0.00482, lowPrice: 0.004615 },
    '09': { openPrice: 0.004621, highPrice: 0.00477, lowPrice: 0.004613 }
  },
  '2021-04-22': {
    '13': { openPrice: 0.004815, highPrice: 0.004945, lowPrice: 0.004808 },
    '17': { openPrice: 0.004933, highPrice: 0.005278, lowPrice: 0.004832 },
    '21': { openPrice: 0.005082, highPrice: 0.005226, lowPrice: 0.00505 },
    '01': { openPrice: 0.004881, highPrice: 0.00497, lowPrice: 0.004805 },
    '05': { openPrice: 0.004955, highPrice: 0.004956, lowPrice: 0.004722 },
    '09': { openPrice: 0.004791, highPrice: 0.004853, lowPrice: 0.0047 }
  },
  '2021-04-23': {
    '13': { openPrice: 0.004622, highPrice: 0.004703, lowPrice: 0.004478 },
    '17': { openPrice: 0.004662, highPrice: 0.004777, lowPrice: 0.004598 },
    '21': { openPrice: 0.004746, highPrice: 0.004768, lowPrice: 0.004586 },
    '01': { openPrice: 0.005219, highPrice: 0.005269, lowPrice: 0.005041 },
    '05': { openPrice: 0.005128, highPrice: 0.005136, lowPrice: 0.00472 },
    '09': { openPrice: 0.004886, highPrice: 0.004952, lowPrice: 0.004222 }
  },
  '2021-04-24': {
    '13': { openPrice: 0.004672, highPrice: 0.00469, lowPrice: 0.004617 },
    '17': { openPrice: 0.004646, highPrice: 0.004693, lowPrice: 0.004522 },
    '21': { openPrice: 0.004562, highPrice: 0.004624, lowPrice: 0.00454 },
    '01': { openPrice: 0.004709, highPrice: 0.00475, lowPrice: 0.004668 },
    '05': { openPrice: 0.004724, highPrice: 0.00475, lowPrice: 0.004607 },
    '09': { openPrice: 0.004721, highPrice: 0.004724, lowPrice: 0.00462 }
  },
  '2021-04-25': {
    '13': { openPrice: 0.004522, highPrice: 0.004526, lowPrice: 0.004518 },
    '17': { openPrice: 0.004521, highPrice: 0.00459, lowPrice: 0.004501 },
    '21': { openPrice: 0.004584, highPrice: 0.004671, lowPrice: 0.004573 },
    '01': { openPrice: 0.004605, highPrice: 0.004621, lowPrice: 0.004495 },
    '05': { openPrice: 0.004525, highPrice: 0.004558, lowPrice: 0.004483 },
    '09': { openPrice: 0.004491, highPrice: 0.004603, lowPrice: 0.004463 }
  },
  '2021-04-26': {
    '13': { openPrice: 0.004549, highPrice: 0.004624, lowPrice: 0.004529 },
    '17': { openPrice: 0.004568, highPrice: 0.004594, lowPrice: 0.004522 },
    '21': { openPrice: 0.004553, highPrice: 0.004566, lowPrice: 0.004498 },
    '01': { openPrice: 0.004664, highPrice: 0.004684, lowPrice: 0.004532 },
    '05': { openPrice: 0.004534, highPrice: 0.004583, lowPrice: 0.004472 },
    '09': { openPrice: 0.004563, highPrice: 0.004614, lowPrice: 0.004505 }
  },
  '2021-04-27': {
    '13': { openPrice: 0.00464, highPrice: 0.004666, lowPrice: 0.004598 },
    '17': { openPrice: 0.004622, highPrice: 0.004699, lowPrice: 0.004603 },
    '21': { openPrice: 0.004661, highPrice: 0.004694, lowPrice: 0.004565 },
    '01': { openPrice: 0.004544, highPrice: 0.004611, lowPrice: 0.004512 },
    '05': { openPrice: 0.004546, highPrice: 0.004585, lowPrice: 0.004503 },
    '09': { openPrice: 0.004583, highPrice: 0.004675, lowPrice: 0.004549 }
  },
  '2021-04-28': {
    '13': { openPrice: 0.004659, highPrice: 0.004702, lowPrice: 0.004597 },
    '17': { openPrice: 0.00468, highPrice: 0.004704, lowPrice: 0.004609 },
    '21': { openPrice: 0.004662, highPrice: 0.004702, lowPrice: 0.004622 },
    '01': { openPrice: 0.004686, highPrice: 0.00478, lowPrice: 0.004644 },
    '05': { openPrice: 0.004695, highPrice: 0.004749, lowPrice: 0.004689 },
    '09': { openPrice: 0.004722, highPrice: 0.0048, lowPrice: 0.004657 }
  },
  '2021-04-29': {
    '13': { openPrice: 0.004679, highPrice: 0.004762, lowPrice: 0.004664 },
    '17': { openPrice: 0.0047, highPrice: 0.004775, lowPrice: 0.004691 },
    '21': { openPrice: 0.004755, highPrice: 0.004829, lowPrice: 0.004748 },
    '01': { openPrice: 0.004636, highPrice: 0.004686, lowPrice: 0.004622 },
    '05': { openPrice: 0.004658, highPrice: 0.004738, lowPrice: 0.004606 },
    '09': { openPrice: 0.004715, highPrice: 0.004716, lowPrice: 0.004655 }
  },
  '2021-04-30': {
    '13': { openPrice: 0.004842, highPrice: 0.004911, lowPrice: 0.004805 },
    '17': { openPrice: 0.004872, highPrice: 0.004893, lowPrice: 0.004795 },
    '21': { openPrice: 0.00481, highPrice: 0.004866, lowPrice: 0.004697 },
    '01': { openPrice: 0.004764, highPrice: 0.004796, lowPrice: 0.004733 },
    '05': { openPrice: 0.00477, highPrice: 0.004785, lowPrice: 0.004724 },
    '09': { openPrice: 0.004768, highPrice: 0.004845, lowPrice: 0.004735 }
  },
  '2021-05-01': {
    '13': { openPrice: 0.004714, highPrice: 0.004715, lowPrice: 0.00467 },
    '17': { openPrice: 0.00469, highPrice: 0.00473, lowPrice: 0.004648 },
    '21': { openPrice: 0.004707, highPrice: 0.004713, lowPrice: 0.004665 },
    '01': { openPrice: 0.004697, highPrice: 0.004751, lowPrice: 0.004661 },
    '05': { openPrice: 0.0047, highPrice: 0.004744, lowPrice: 0.004664 },
    '09': { openPrice: 0.004702, highPrice: 0.004744, lowPrice: 0.00463 }
  },
  '2021-05-02': {
    '13': { openPrice: 0.004739, highPrice: 0.004794, lowPrice: 0.00471 },
    '17': { openPrice: 0.004747, highPrice: 0.004781, lowPrice: 0.004721 },
    '21': { openPrice: 0.004765, highPrice: 0.004784, lowPrice: 0.00472 },
    '01': { openPrice: 0.004688, highPrice: 0.004747, lowPrice: 0.004675 },
    '05': { openPrice: 0.004736, highPrice: 0.004828, lowPrice: 0.004699 },
    '09': { openPrice: 0.004788, highPrice: 0.004801, lowPrice: 0.004734 }
  },
  '2021-05-03': {
    '13': { openPrice: 0.004716, highPrice: 0.004788, lowPrice: 0.0047 },
    '17': { openPrice: 0.004747, highPrice: 0.004805, lowPrice: 0.004734 },
    '21': { openPrice: 0.004779, highPrice: 0.00493, lowPrice: 0.004743 },
    '01': { openPrice: 0.004739, highPrice: 0.004778, lowPrice: 0.004734 },
    '05': { openPrice: 0.004773, highPrice: 0.004778, lowPrice: 0.004736 },
    '09': { openPrice: 0.004752, highPrice: 0.004764, lowPrice: 0.0047 }
  },
  '2021-05-04': {
    '13': { openPrice: 0.004986, highPrice: 0.005153, lowPrice: 0.004983 },
    '17': { openPrice: 0.005057, highPrice: 0.005738, lowPrice: 0.00502 },
    '21': { openPrice: 0.005654, highPrice: 0.005869, lowPrice: 0.005464 },
    '01': { openPrice: 0.00491, highPrice: 0.00517, lowPrice: 0.004894 },
    '05': { openPrice: 0.00511, highPrice: 0.0052, lowPrice: 0.00505 },
    '09': { openPrice: 0.005156, highPrice: 0.005228, lowPrice: 0.004937 }
  },
  '2021-05-05': {
    '13': { openPrice: 0.006066, highPrice: 0.006132, lowPrice: 0.005956 },
    '17': { openPrice: 0.006035, highPrice: 0.00631, lowPrice: 0.005865 },
    '21': { openPrice: 0.006118, highPrice: 0.006308, lowPrice: 0.005967 },
    '01': { openPrice: 0.005522, highPrice: 0.005691, lowPrice: 0.00549 },
    '05': { openPrice: 0.005631, highPrice: 0.005846, lowPrice: 0.005617 },
    '09': { openPrice: 0.005739, highPrice: 0.006238, lowPrice: 0.005675 }
  },
  '2021-05-06': {
    '13': { openPrice: 0.006026, highPrice: 0.006047, lowPrice: 0.005777 },
    '17': { openPrice: 0.005906, highPrice: 0.00602, lowPrice: 0.005854 },
    '21': { openPrice: 0.005989, highPrice: 0.00615, lowPrice: 0.005924 },
    '01': { openPrice: 0.006111, highPrice: 0.006296, lowPrice: 0.006033 },
    '05': { openPrice: 0.006284, highPrice: 0.006311, lowPrice: 0.006041 },
    '09': { openPrice: 0.006203, highPrice: 0.006357, lowPrice: 0.005899 }
  },
  '2021-05-07': {
    '13': { openPrice: 0.006308, highPrice: 0.00666, lowPrice: 0.006144 },
    '17': { openPrice: 0.006603, highPrice: 0.006649, lowPrice: 0.006311 },
    '21': { openPrice: 0.006329, highPrice: 0.006349, lowPrice: 0.00607 },
    '01': { openPrice: 0.00601, highPrice: 0.006281, lowPrice: 0.00573 },
    '05': { openPrice: 0.005961, highPrice: 0.006349, lowPrice: 0.005828 },
    '09': { openPrice: 0.006291, highPrice: 0.006628, lowPrice: 0.006112 }
  },
  '2021-05-08': {
    '13': { openPrice: 0.006069, highPrice: 0.006081, lowPrice: 0.0059 },
    '17': { openPrice: 0.005926, highPrice: 0.005945, lowPrice: 0.005813 },
    '21': { openPrice: 0.005841, highPrice: 0.005877, lowPrice: 0.005703 },
    '01': { openPrice: 0.006123, highPrice: 0.006161, lowPrice: 0.00591 },
    '05': { openPrice: 0.005996, highPrice: 0.006086, lowPrice: 0.00585 },
    '09': { openPrice: 0.006017, highPrice: 0.006169, lowPrice: 0.005974 }
  },
  '2021-05-09': {
    '13': { openPrice: 0.005814, highPrice: 0.006044, lowPrice: 0.005759 },
    '17': { openPrice: 0.005934, highPrice: 0.006382, lowPrice: 0.005933 },
    '21': { openPrice: 0.006178, highPrice: 0.006422, lowPrice: 0.00606 },
    '01': { openPrice: 0.005809, highPrice: 0.005943, lowPrice: 0.005745 },
    '05': { openPrice: 0.005934, highPrice: 0.005991, lowPrice: 0.005819 },
    '09': { openPrice: 0.005899, highPrice: 0.006, lowPrice: 0.0058 }
  },
  '2021-05-10': {
    '13': { openPrice: 0.006889, highPrice: 0.006943, lowPrice: 0.006701 },
    '17': { openPrice: 0.006811, highPrice: 0.006902, lowPrice: 0.006577 },
    '21': { openPrice: 0.006715, highPrice: 0.006893, lowPrice: 0.006573 },
    '01': { openPrice: 0.006392, highPrice: 0.006425, lowPrice: 0.006231 },
    '05': { openPrice: 0.00628, highPrice: 0.00669, lowPrice: 0.006196 },
    '09': { openPrice: 0.006661, highPrice: 0.007, lowPrice: 0.006643 }
  },
  '2021-05-11': {
    '13': { openPrice: 0.006387, highPrice: 0.006527, lowPrice: 0.006354 },
    '17': { openPrice: 0.006486, highPrice: 0.006516, lowPrice: 0.006388 },
    '21': { openPrice: 0.006411, highPrice: 0.006608, lowPrice: 0.006355 },
    '01': { openPrice: 0.006882, highPrice: 0.006894, lowPrice: 0.006511 },
    '05': { openPrice: 0.00658, highPrice: 0.00672, lowPrice: 0.006243 },
    '09': { openPrice: 0.006438, highPrice: 0.00654, lowPrice: 0.006307 }
  },
  '2021-05-12': {
    '13': { openPrice: 0.006778, highPrice: 0.006783, lowPrice: 0.006581 },
    '17': { openPrice: 0.006693, highPrice: 0.0068, lowPrice: 0.006602 },
    '21': { openPrice: 0.006664, highPrice: 0.00667, lowPrice: 0.006406 },
    '01': { openPrice: 0.006599, highPrice: 0.006669, lowPrice: 0.006473 },
    '05': { openPrice: 0.006563, highPrice: 0.0067, lowPrice: 0.006497 },
    '09': { openPrice: 0.006666, highPrice: 0.006829, lowPrice: 0.006658 }
  },
  '2021-05-13': {
    '13': { openPrice: 0.006448, highPrice: 0.0065, lowPrice: 0.006384 },
    '17': { openPrice: 0.006415, highPrice: 0.006459, lowPrice: 0.00621 },
    '21': { openPrice: 0.00635, highPrice: 0.00645, lowPrice: 0.006303 },
    '01': { openPrice: 0.006473, highPrice: 0.006525, lowPrice: 0.006291 },
    '05': { openPrice: 0.00652, highPrice: 0.006594, lowPrice: 0.006088 },
    '09': { openPrice: 0.006261, highPrice: 0.006581, lowPrice: 0.006211 }
  },
  '2021-05-14': {
    '13': { openPrice: 0.006341, highPrice: 0.006486, lowPrice: 0.006305 },
    '17': { openPrice: 0.00641, highPrice: 0.006945, lowPrice: 0.006362 },
    '21': { openPrice: 0.006507, highPrice: 0.006577, lowPrice: 0.006467 },
    '01': { openPrice: 0.006337, highPrice: 0.006385, lowPrice: 0.006111 },
    '05': { openPrice: 0.00612, highPrice: 0.006398, lowPrice: 0.006076 },
    '09': { openPrice: 0.006397, highPrice: 0.0064, lowPrice: 0.00626 }
  },
  '2021-05-15': {
    '13': { openPrice: 0.006547, highPrice: 0.006575, lowPrice: 0.006431 },
    '17': { openPrice: 0.006442, highPrice: 0.006473, lowPrice: 0.006355 },
    '21': { openPrice: 0.006426, highPrice: 0.00646, lowPrice: 0.006295 },
    '01': { openPrice: 0.006552, highPrice: 0.006623, lowPrice: 0.006436 },
    '05': { openPrice: 0.006457, highPrice: 0.006593, lowPrice: 0.00645 },
    '09': { openPrice: 0.006548, highPrice: 0.006627, lowPrice: 0.006499 }
  },
  '2021-05-16': {
    '13': { openPrice: 0.006438, highPrice: 0.006483, lowPrice: 0.006376 },
    '17': { openPrice: 0.00645, highPrice: 0.0066, lowPrice: 0.00641 },
    '21': { openPrice: 0.006476, highPrice: 0.006489, lowPrice: 0.006316 },
    '01': { openPrice: 0.006405, highPrice: 0.006405, lowPrice: 0.006282 },
    '05': { openPrice: 0.006373, highPrice: 0.006445, lowPrice: 0.006346 },
    '09': { openPrice: 0.006418, highPrice: 0.006526, lowPrice: 0.006396 }
  },
  '2021-05-17': {
    '13': { openPrice: 0.006273, highPrice: 0.006431, lowPrice: 0.006243 },
    '17': { openPrice: 0.006387, highPrice: 0.00652, lowPrice: 0.00633 },
    '21': { openPrice: 0.006342, highPrice: 0.006477, lowPrice: 0.006303 },
    '01': { openPrice: 0.006325, highPrice: 0.006527, lowPrice: 0.006307 },
    '05': { openPrice: 0.00637, highPrice: 0.006467, lowPrice: 0.006333 },
    '09': { openPrice: 0.006374, highPrice: 0.006379, lowPrice: 0.006201 }
  },
  '2021-05-18': {
    '13': { openPrice: 0.006761, highPrice: 0.006825, lowPrice: 0.006693 },
    '17': { openPrice: 0.006747, highPrice: 0.007, lowPrice: 0.006741 },
    '21': { openPrice: 0.006908, highPrice: 0.007025, lowPrice: 0.006727 },
    '01': { openPrice: 0.006328, highPrice: 0.006392, lowPrice: 0.00618 },
    '05': { openPrice: 0.00637, highPrice: 0.006578, lowPrice: 0.006368 },
    '09': { openPrice: 0.006461, highPrice: 0.006842, lowPrice: 0.006448 }
  },
  '2021-05-19': {
    '13': { openPrice: 0.006744, highPrice: 0.006853, lowPrice: 0.006572 },
    '17': { openPrice: 0.006705, highPrice: 0.006714, lowPrice: 0.005974 },
    '21': { openPrice: 0.006255, highPrice: 0.006303, lowPrice: 0.00461 },
    '01': { openPrice: 0.006957, highPrice: 0.00722, lowPrice: 0.006795 },
    '05': { openPrice: 0.006813, highPrice: 0.006941, lowPrice: 0.006778 },
    '09': { openPrice: 0.006858, highPrice: 0.006908, lowPrice: 0.006693 }
  },
  '2021-05-20': {
    '13': { openPrice: 0.005063, highPrice: 0.00534, lowPrice: 0.004977 },
    '17': { openPrice: 0.005258, highPrice: 0.005304, lowPrice: 0.005176 },
    '21': { openPrice: 0.005244, highPrice: 0.005367, lowPrice: 0.005147 },
    '01': { openPrice: 0.005537, highPrice: 0.005661, lowPrice: 0.005128 },
    '05': { openPrice: 0.005138, highPrice: 0.005296, lowPrice: 0.005062 },
    '09': { openPrice: 0.00508, highPrice: 0.005149, lowPrice: 0.004737 }
  },
  '2021-05-21': {
    '13': { openPrice: 0.005113, highPrice: 0.005165, lowPrice: 0.00506 },
    '17': { openPrice: 0.005071, highPrice: 0.00511, lowPrice: 0.005001 },
    '21': { openPrice: 0.005026, highPrice: 0.0051, lowPrice: 0.004817 },
    '01': { openPrice: 0.005187, highPrice: 0.005289, lowPrice: 0.005113 },
    '05': { openPrice: 0.005232, highPrice: 0.005274, lowPrice: 0.005108 },
    '09': { openPrice: 0.005198, highPrice: 0.005257, lowPrice: 0.005078 }
  },
  '2021-05-22': {
    '13': { openPrice: 0.004838, highPrice: 0.004862, lowPrice: 0.004564 },
    '17': { openPrice: 0.00462, highPrice: 0.004727, lowPrice: 0.004615 },
    '21': { openPrice: 0.00469, highPrice: 0.004775, lowPrice: 0.004661 },
    '01': { openPrice: 0.004857, highPrice: 0.004973, lowPrice: 0.0048 },
    '05': { openPrice: 0.004843, highPrice: 0.00488, lowPrice: 0.004667 },
    '09': { openPrice: 0.004826, highPrice: 0.004882, lowPrice: 0.004735 }
  },
  '2021-05-23': {
    '13': { openPrice: 0.004571, highPrice: 0.004626, lowPrice: 0.004364 },
    '17': { openPrice: 0.004427, highPrice: 0.004432, lowPrice: 0.00405 },
    '21': { openPrice: 0.004172, highPrice: 0.004197, lowPrice: 0.00392 },
    '01': { openPrice: 0.004734, highPrice: 0.004774, lowPrice: 0.004504 },
    '05': { openPrice: 0.004538, highPrice: 0.004633, lowPrice: 0.004513 },
    '09': { openPrice: 0.00452, highPrice: 0.004622, lowPrice: 0.0045 }
  },
  '2021-05-24': {
    '13': { openPrice: 0.004295, highPrice: 0.00444, lowPrice: 0.004242 },
    '17': { openPrice: 0.004415, highPrice: 0.004448, lowPrice: 0.004321 },
    '21': { openPrice: 0.004387, highPrice: 0.004474, lowPrice: 0.004305 },
    '01': { openPrice: 0.004076, highPrice: 0.004093, lowPrice: 0.00375 },
    '05': { openPrice: 0.003985, highPrice: 0.004246, lowPrice: 0.00398 },
    '09': { openPrice: 0.004109, highPrice: 0.00433, lowPrice: 0.004022 }
  },
  '2021-05-25': {
    '13': { openPrice: 0.00474, highPrice: 0.004817, lowPrice: 0.004648 },
    '17': { openPrice: 0.004816, highPrice: 0.004898, lowPrice: 0.004551 },
    '21': { openPrice: 0.004643, highPrice: 0.004733, lowPrice: 0.004593 },
    '01': { openPrice: 0.004437, highPrice: 0.004703, lowPrice: 0.004371 },
    '05': { openPrice: 0.004601, highPrice: 0.004774, lowPrice: 0.004533 },
    '09': { openPrice: 0.004774, highPrice: 0.004909, lowPrice: 0.004651 }
  },
  '2021-05-26': {
    '13': { openPrice: 0.004847, highPrice: 0.005094, lowPrice: 0.004817 },
    '17': { openPrice: 0.005025, highPrice: 0.005035, lowPrice: 0.004911 },
    '21': { openPrice: 0.005009, highPrice: 0.005045, lowPrice: 0.004881 },
    '01': { openPrice: 0.00464, highPrice: 0.00476, lowPrice: 0.004531 },
    '05': { openPrice: 0.004566, highPrice: 0.004799, lowPrice: 0.004558 },
    '09': { openPrice: 0.004798, highPrice: 0.004867, lowPrice: 0.004742 }
  },
  '2021-05-27': {
    '13': { openPrice: 0.004889, highPrice: 0.004954, lowPrice: 0.004861 },
    '17': { openPrice: 0.004939, highPrice: 0.005049, lowPrice: 0.004922 },
    '21': { openPrice: 0.005015, highPrice: 0.005181, lowPrice: 0.00501 },
    '01': { openPrice: 0.004995, highPrice: 0.00506, lowPrice: 0.004963 },
    '05': { openPrice: 0.005037, highPrice: 0.005075, lowPrice: 0.00496 },
    '09': { openPrice: 0.005069, highPrice: 0.005189, lowPrice: 0.004781 }
  },
  '2021-05-28': {
    '13': { openPrice: 0.005068, highPrice: 0.005072, lowPrice: 0.004801 },
    '17': { openPrice: 0.004912, highPrice: 0.00492, lowPrice: 0.004691 },
    '21': { openPrice: 0.004733, highPrice: 0.004904, lowPrice: 0.004721 },
    '01': { openPrice: 0.005106, highPrice: 0.005132, lowPrice: 0.005027 },
    '05': { openPrice: 0.005083, highPrice: 0.005085, lowPrice: 0.004967 },
    '09': { openPrice: 0.005043, highPrice: 0.005133, lowPrice: 0.004978 }
  },
  '2021-05-29': {
    '13': { openPrice: 0.00511, highPrice: 0.005114, lowPrice: 0.004962 },
    '17': { openPrice: 0.004969, highPrice: 0.005003, lowPrice: 0.004866 },
    '21': { openPrice: 0.004906, highPrice: 0.004919, lowPrice: 0.004758 },
    '01': { openPrice: 0.004883, highPrice: 0.005067, lowPrice: 0.004784 },
    '05': { openPrice: 0.005034, highPrice: 0.005099, lowPrice: 0.004892 },
    '09': { openPrice: 0.004972, highPrice: 0.005153, lowPrice: 0.004948 }
  },
  '2021-05-30': {
    '13': { openPrice: 0.004784, highPrice: 0.004956, lowPrice: 0.004757 },
    '17': { openPrice: 0.004887, highPrice: 0.004968, lowPrice: 0.004866 },
    '21': { openPrice: 0.004953, highPrice: 0.004963, lowPrice: 0.004867 },
    '01': { openPrice: 0.004814, highPrice: 0.004841, lowPrice: 0.00469 },
    '05': { openPrice: 0.004723, highPrice: 0.004765, lowPrice: 0.004662 },
    '09': { openPrice: 0.004738, highPrice: 0.004809, lowPrice: 0.004636 }
  },
  '2021-05-31': {
    '13': { openPrice: 0.004806, highPrice: 0.004864, lowPrice: 0.004775 },
    '17': { openPrice: 0.004861, highPrice: 0.005011, lowPrice: 0.004842 },
    '21': { openPrice: 0.004939, highPrice: 0.004997, lowPrice: 0.004892 },
    '01': { openPrice: 0.004903, highPrice: 0.004917, lowPrice: 0.004799 },
    '05': { openPrice: 0.004821, highPrice: 0.004842, lowPrice: 0.004766 },
    '09': { openPrice: 0.004785, highPrice: 0.004818, lowPrice: 0.004723 }
  },
  '2021-06-01': {
    '13': { openPrice: 0.004982, highPrice: 0.005031, lowPrice: 0.004959 },
    '17': { openPrice: 0.004973, highPrice: 0.004992, lowPrice: 0.004917 },
    '21': { openPrice: 0.004968, highPrice: 0.00498, lowPrice: 0.004912 },
    '01': { openPrice: 0.004993, highPrice: 0.005012, lowPrice: 0.004931 },
    '05': { openPrice: 0.004982, highPrice: 0.005049, lowPrice: 0.00495 },
    '09': { openPrice: 0.005048, highPrice: 0.005119, lowPrice: 0.004959 }
  },
  '2021-06-02': {
    '13': { openPrice: 0.004997, highPrice: 0.005013, lowPrice: 0.004944 },
    '17': { openPrice: 0.00499, highPrice: 0.004993, lowPrice: 0.004882 },
    '21': { openPrice: 0.004904, highPrice: 0.004996, lowPrice: 0.004902 },
    '01': { openPrice: 0.004942, highPrice: 0.004993, lowPrice: 0.004922 },
    '05': { openPrice: 0.004962, highPrice: 0.00502, lowPrice: 0.004956 },
    '09': { openPrice: 0.00499, highPrice: 0.005008, lowPrice: 0.004956 }
  },
  '2021-06-03': {
    '13': { openPrice: 0.004947, highPrice: 0.004993, lowPrice: 0.004925 },
    '17': { openPrice: 0.004942, highPrice: 0.005015, lowPrice: 0.004936 },
    '21': { openPrice: 0.004957, highPrice: 0.004965, lowPrice: 0.004872 },
    '01': { openPrice: 0.004935, highPrice: 0.00501, lowPrice: 0.004931 },
    '05': { openPrice: 0.00495, highPrice: 0.005003, lowPrice: 0.004924 },
    '09': { openPrice: 0.004983, highPrice: 0.004987, lowPrice: 0.004891 }
  },
  '2021-06-04': {
    '13': { openPrice: 0.004828, highPrice: 0.00487, lowPrice: 0.004691 },
    '17': { openPrice: 0.00474, highPrice: 0.004794, lowPrice: 0.004715 },
    '21': { openPrice: 0.004756, highPrice: 0.004943, lowPrice: 0.004738 },
    '01': { openPrice: 0.004894, highPrice: 0.004951, lowPrice: 0.00489 },
    '05': { openPrice: 0.004913, highPrice: 0.004942, lowPrice: 0.00488 },
    '09': { openPrice: 0.004931, highPrice: 0.004947, lowPrice: 0.004746 }
  },
  '2021-06-05': {
    '13': { openPrice: 0.00487, highPrice: 0.004902, lowPrice: 0.004816 },
    '17': { openPrice: 0.004855, highPrice: 0.004868, lowPrice: 0.004786 },
    '21': { openPrice: 0.004838, highPrice: 0.004843, lowPrice: 0.004792 },
    '01': { openPrice: 0.004797, highPrice: 0.004839, lowPrice: 0.004771 },
    '05': { openPrice: 0.004832, highPrice: 0.004886, lowPrice: 0.00479 },
    '09': { openPrice: 0.004846, highPrice: 0.004999, lowPrice: 0.004839 }
  },
  '2021-06-06': {
    '13': { openPrice: 0.004902, highPrice: 0.004967, lowPrice: 0.004898 },
    '17': { openPrice: 0.004949, highPrice: 0.004964, lowPrice: 0.004914 },
    '21': { openPrice: 0.004918, highPrice: 0.004943, lowPrice: 0.004869 },
    '01': { openPrice: 0.004804, highPrice: 0.004821, lowPrice: 0.00478 },
    '05': { openPrice: 0.004819, highPrice: 0.004878, lowPrice: 0.004794 },
    '09': { openPrice: 0.00487, highPrice: 0.00491, lowPrice: 0.00485 }
  },
  '2021-06-07': {
    '13': { openPrice: 0.004971, highPrice: 0.00499, lowPrice: 0.00492 },
    '17': { openPrice: 0.004923, highPrice: 0.004978, lowPrice: 0.004894 },
    '21': { openPrice: 0.004962, highPrice: 0.004975, lowPrice: 0.004913 },
    '01': { openPrice: 0.004879, highPrice: 0.004933, lowPrice: 0.00486 },
    '05': { openPrice: 0.004866, highPrice: 0.004933, lowPrice: 0.004851 },
    '09': { openPrice: 0.004928, highPrice: 0.004974, lowPrice: 0.004895 }
  },
  '2021-06-08': {
    '13': { openPrice: 0.004773, highPrice: 0.004817, lowPrice: 0.004739 },
    '17': { openPrice: 0.004787, highPrice: 0.004824, lowPrice: 0.004775 },
    '21': { openPrice: 0.004809, highPrice: 0.00483, lowPrice: 0.00467 },
    '01': { openPrice: 0.004922, highPrice: 0.004923, lowPrice: 0.004853 },
    '05': { openPrice: 0.004883, highPrice: 0.004939, lowPrice: 0.004795 },
    '09': { openPrice: 0.004824, highPrice: 0.004844, lowPrice: 0.004697 }
  },
  '2021-06-09': {
    '13': { openPrice: 0.004701, highPrice: 0.004733, lowPrice: 0.00467 },
    '17': { openPrice: 0.004674, highPrice: 0.004684, lowPrice: 0.004606 },
    '21': { openPrice: 0.00464, highPrice: 0.004661, lowPrice: 0.00454 },
    '01': { openPrice: 0.004787, highPrice: 0.004891, lowPrice: 0.004753 },
    '05': { openPrice: 0.004842, highPrice: 0.00487, lowPrice: 0.004786 },
    '09': { openPrice: 0.00481, highPrice: 0.004822, lowPrice: 0.004698 }
  },
  '2021-06-10': {
    '13': { openPrice: 0.004604, highPrice: 0.004628, lowPrice: 0.004562 },
    '17': { openPrice: 0.004569, highPrice: 0.004678, lowPrice: 0.004481 },
    '21': { openPrice: 0.004517, highPrice: 0.004527, lowPrice: 0.00445 },
    '01': { openPrice: 0.004639, highPrice: 0.004729, lowPrice: 0.004613 },
    '05': { openPrice: 0.00468, highPrice: 0.004706, lowPrice: 0.004559 },
    '09': { openPrice: 0.004613, highPrice: 0.004695, lowPrice: 0.004601 }
  },
  '2021-06-11': {
    '13': { openPrice: 0.004659, highPrice: 0.004681, lowPrice: 0.004584 },
    '17': { openPrice: 0.004587, highPrice: 0.004624, lowPrice: 0.004553 },
    '21': { openPrice: 0.004576, highPrice: 0.004584, lowPrice: 0.0045 },
    '01': { openPrice: 0.004497, highPrice: 0.004536, lowPrice: 0.004476 },
    '05': { openPrice: 0.004496, highPrice: 0.004605, lowPrice: 0.004484 },
    '09': { openPrice: 0.004586, highPrice: 0.004699, lowPrice: 0.004531 }
  },
  '2021-06-12': {
    '13': { openPrice: 0.004404, highPrice: 0.004463, lowPrice: 0.004384 },
    '17': { openPrice: 0.004453, highPrice: 0.004533, lowPrice: 0.004435 },
    '21': { openPrice: 0.004479, highPrice: 0.004568, lowPrice: 0.004478 },
    '01': { openPrice: 0.004517, highPrice: 0.004533, lowPrice: 0.004406 },
    '05': { openPrice: 0.004407, highPrice: 0.00443, lowPrice: 0.004337 },
    '09': { openPrice: 0.004361, highPrice: 0.004419, lowPrice: 0.004313 }
  },
  '2021-06-13': {
    '13': { openPrice: 0.004516, highPrice: 0.004534, lowPrice: 0.004482 },
    '17': { openPrice: 0.004496, highPrice: 0.004513, lowPrice: 0.004468 },
    '21': { openPrice: 0.004491, highPrice: 0.004507, lowPrice: 0.00444 },
    '01': { openPrice: 0.004552, highPrice: 0.00459, lowPrice: 0.004529 },
    '05': { openPrice: 0.004549, highPrice: 0.004575, lowPrice: 0.004501 },
    '09': { openPrice: 0.004553, highPrice: 0.004566, lowPrice: 0.004516 }
  },
  '2021-06-14': {
    '13': { openPrice: 0.004323, highPrice: 0.00433, lowPrice: 0.004271 },
    '17': { openPrice: 0.004271, highPrice: 0.004304, lowPrice: 0.00426 },
    '21': { openPrice: 0.004265, highPrice: 0.004329, lowPrice: 0.004214 },
    '01': { openPrice: 0.004451, highPrice: 0.004451, lowPrice: 0.004391 },
    '05': { openPrice: 0.004414, highPrice: 0.00442, lowPrice: 0.00434 },
    '09': { openPrice: 0.004377, highPrice: 0.004405, lowPrice: 0.004296 }
  },
  '2021-06-15': {
    '13': { openPrice: 0.004419, highPrice: 0.004469, lowPrice: 0.004417 },
    '17': { openPrice: 0.004442, highPrice: 0.004463, lowPrice: 0.004404 },
    '21': { openPrice: 0.004428, highPrice: 0.004434, lowPrice: 0.004325 },
    '01': { openPrice: 0.004326, highPrice: 0.004425, lowPrice: 0.004324 },
    '05': { openPrice: 0.004398, highPrice: 0.004445, lowPrice: 0.00434 },
    '09': { openPrice: 0.004438, highPrice: 0.004483, lowPrice: 0.004416 }
  },
  '2021-06-16': {
    '13': { openPrice: 0.004308, highPrice: 0.004351, lowPrice: 0.004304 },
    '17': { openPrice: 0.004342, highPrice: 0.004409, lowPrice: 0.004322 },
    '21': { openPrice: 0.00434, highPrice: 0.004342, lowPrice: 0.004289 },
    '01': { openPrice: 0.004345, highPrice: 0.004375, lowPrice: 0.004278 },
    '05': { openPrice: 0.004348, highPrice: 0.004377, lowPrice: 0.004321 },
    '09': { openPrice: 0.004362, highPrice: 0.004392, lowPrice: 0.004252 }
  },
  '2021-06-17': {
    '13': { openPrice: 0.004406, highPrice: 0.004421, lowPrice: 0.004383 },
    '17': { openPrice: 0.004395, highPrice: 0.004418, lowPrice: 0.004356 },
    '21': { openPrice: 0.00436, highPrice: 0.0044, lowPrice: 0.004345 },
    '01': { openPrice: 0.004306, highPrice: 0.004367, lowPrice: 0.004262 },
    '05': { openPrice: 0.004366, highPrice: 0.004373, lowPrice: 0.004317 },
    '09': { openPrice: 0.004342, highPrice: 0.004412, lowPrice: 0.004328 }
  },
  '2021-06-18': {
    '13': { openPrice: 0.004357, highPrice: 0.004406, lowPrice: 0.004354 },
    '17': { openPrice: 0.004391, highPrice: 0.004418, lowPrice: 0.004346 },
    '21': { openPrice: 0.004363, highPrice: 0.004383, lowPrice: 0.004271 },
    '01': { openPrice: 0.004347, highPrice: 0.004381, lowPrice: 0.004295 },
    '05': { openPrice: 0.004351, highPrice: 0.004398, lowPrice: 0.004341 },
    '09': { openPrice: 0.004388, highPrice: 0.004401, lowPrice: 0.00434 }
  },
  '2021-06-19': {
    '13': { openPrice: 0.004396, highPrice: 0.00446, lowPrice: 0.004394 },
    '17': { openPrice: 0.004428, highPrice: 0.004451, lowPrice: 0.004413 },
    '21': { openPrice: 0.00442, highPrice: 0.004436, lowPrice: 0.004377 },
    '01': { openPrice: 0.004303, highPrice: 0.004349, lowPrice: 0.004228 },
    '05': { openPrice: 0.00432, highPrice: 0.004385, lowPrice: 0.004312 },
    '09': { openPrice: 0.004365, highPrice: 0.004416, lowPrice: 0.00435 }
  },
  '2021-06-20': {
    '13': { openPrice: 0.004315, highPrice: 0.004325, lowPrice: 0.004291 },
    '17': { openPrice: 0.004294, highPrice: 0.00436, lowPrice: 0.00429 },
    '21': { openPrice: 0.0043, highPrice: 0.004342, lowPrice: 0.0043 },
    '01': { openPrice: 0.004387, highPrice: 0.004392, lowPrice: 0.004336 },
    '05': { openPrice: 0.004344, highPrice: 0.004351, lowPrice: 0.004295 },
    '09': { openPrice: 0.004298, highPrice: 0.00432, lowPrice: 0.00428 }
  },
  '2021-06-21': {
    '13': { openPrice: 0.004315, highPrice: 0.004335, lowPrice: 0.004208 },
    '17': { openPrice: 0.00423, highPrice: 0.004244, lowPrice: 0.004024 },
    '21': { openPrice: 0.004118, highPrice: 0.004152, lowPrice: 0.004076 },
    '01': { openPrice: 0.004319, highPrice: 0.004358, lowPrice: 0.004293 },
    '05': { openPrice: 0.004329, highPrice: 0.004379, lowPrice: 0.004302 },
    '09': { openPrice: 0.004352, highPrice: 0.004369, lowPrice: 0.004302 }
  },
  '2021-06-22': {
    '13': { openPrice: 0.003981, highPrice: 0.003988, lowPrice: 0.003912 },
    '17': { openPrice: 0.00393, highPrice: 0.003936, lowPrice: 0.003648 },
    '21': { openPrice: 0.003658, highPrice: 0.003825, lowPrice: 0.003623 },
    '01': { openPrice: 0.004119, highPrice: 0.004128, lowPrice: 0.004077 },
    '05': { openPrice: 0.004112, highPrice: 0.004156, lowPrice: 0.003934 },
    '09': { openPrice: 0.003936, highPrice: 0.004009, lowPrice: 0.00384 }
  },
  '2021-06-23': {
    '13': { openPrice: 0.003789, highPrice: 0.003854, lowPrice: 0.003782 },
    '17': { openPrice: 0.003822, highPrice: 0.003833, lowPrice: 0.00378 },
    '21': { openPrice: 0.003792, highPrice: 0.003858, lowPrice: 0.00378 },
    '01': { openPrice: 0.003729, highPrice: 0.003777, lowPrice: 0.003677 },
    '05': { openPrice: 0.003685, highPrice: 0.003745, lowPrice: 0.003645 },
    '09': { openPrice: 0.003678, highPrice: 0.003857, lowPrice: 0.003629 }
  },
  '2021-06-24': {
    '13': { openPrice: 0.003888, highPrice: 0.003977, lowPrice: 0.003888 },
    '17': { openPrice: 0.003967, highPrice: 0.00403, lowPrice: 0.00395 },
    '21': { openPrice: 0.003971, highPrice: 0.003986, lowPrice: 0.003905 },
    '01': { openPrice: 0.003795, highPrice: 0.00383, lowPrice: 0.00375 },
    '05': { openPrice: 0.003763, highPrice: 0.003834, lowPrice: 0.003761 },
    '09': { openPrice: 0.003834, highPrice: 0.00389, lowPrice: 0.003808 }
  },
  '2021-06-25': {
    '13': { openPrice: 0.003917, highPrice: 0.003919, lowPrice: 0.003852 },
    '17': { openPrice: 0.003852, highPrice: 0.003912, lowPrice: 0.003832 },
    '21': { openPrice: 0.003888, highPrice: 0.003976, lowPrice: 0.003883 },
    '01': { openPrice: 0.003942, highPrice: 0.00396, lowPrice: 0.00386 },
    '05': { openPrice: 0.003871, highPrice: 0.003909, lowPrice: 0.003845 },
    '09': { openPrice: 0.003883, highPrice: 0.003931, lowPrice: 0.00385 }
  },
  '2021-06-26': {
    '13': { openPrice: 0.003958, highPrice: 0.003977, lowPrice: 0.003938 },
    '17': { openPrice: 0.003956, highPrice: 0.003967, lowPrice: 0.003904 },
    '21': { openPrice: 0.003904, highPrice: 0.003969, lowPrice: 0.003893 },
    '01': { openPrice: 0.003926, highPrice: 0.004, lowPrice: 0.003896 },
    '05': { openPrice: 0.003986, highPrice: 0.004025, lowPrice: 0.003956 },
    '09': { openPrice: 0.00396, highPrice: 0.00401, lowPrice: 0.003928 }
  },
  '2021-06-27': {
    '13': { openPrice: 0.003899, highPrice: 0.003919, lowPrice: 0.003867 },
    '17': { openPrice: 0.003886, highPrice: 0.003894, lowPrice: 0.003823 },
    '21': { openPrice: 0.003824, highPrice: 0.003854, lowPrice: 0.003817 },
    '01': { openPrice: 0.003896, highPrice: 0.003921, lowPrice: 0.003867 },
    '05': { openPrice: 0.003888, highPrice: 0.003948, lowPrice: 0.003884 },
    '09': { openPrice: 0.003927, highPrice: 0.003944, lowPrice: 0.003891 }
  },
  '2021-06-28': {
    '13': { openPrice: 0.003799, highPrice: 0.003823, lowPrice: 0.00379 },
    '17': { openPrice: 0.003802, highPrice: 0.003864, lowPrice: 0.003799 },
    '21': { openPrice: 0.003834, highPrice: 0.003944, lowPrice: 0.003791 },
    '01': { openPrice: 0.003844, highPrice: 0.003851, lowPrice: 0.003816 },
    '05': { openPrice: 0.003845, highPrice: 0.003874, lowPrice: 0.003785 },
    '09': { openPrice: 0.003822, highPrice: 0.003828, lowPrice: 0.003784 }
  },
  '2021-06-29': {
    '13': { openPrice: 0.004005, highPrice: 0.004034, lowPrice: 0.003991 },
    '17': { openPrice: 0.003997, highPrice: 0.004103, lowPrice: 0.003983 },
    '21': { openPrice: 0.004081, highPrice: 0.0041, lowPrice: 0.004032 },
    '01': { openPrice: 0.003915, highPrice: 0.004009, lowPrice: 0.0039 },
    '05': { openPrice: 0.003961, highPrice: 0.004024, lowPrice: 0.003948 },
    '09': { openPrice: 0.003993, highPrice: 0.004097, lowPrice: 0.003992 }
  },
  '2021-06-30': {
    '13': { openPrice: 0.004051, highPrice: 0.004081, lowPrice: 0.00403 },
    '17': { openPrice: 0.004059, highPrice: 0.004068, lowPrice: 0.004028 },
    '21': { openPrice: 0.004061, highPrice: 0.004063, lowPrice: 0.003994 },
    '01': { openPrice: 0.004083, highPrice: 0.004094, lowPrice: 0.004041 },
    '05': { openPrice: 0.004065, highPrice: 0.004071, lowPrice: 0.003993 },
    '09': { openPrice: 0.004016, highPrice: 0.004075, lowPrice: 0.003993 }
  },
  '2021-07-01': {
    '13': { openPrice: 0.004072, highPrice: 0.004092, lowPrice: 0.004058 },
    '17': { openPrice: 0.004067, highPrice: 0.004091, lowPrice: 0.004056 },
    '21': { openPrice: 0.004066, highPrice: 0.004094, lowPrice: 0.004042 },
    '01': { openPrice: 0.004006, highPrice: 0.004075, lowPrice: 0.003993 },
    '05': { openPrice: 0.004075, highPrice: 0.004136, lowPrice: 0.004062 },
    '09': { openPrice: 0.004117, highPrice: 0.00412, lowPrice: 0.004066 }
  },
  '2021-07-02': {
    '13': { openPrice: 0.004022, highPrice: 0.004036, lowPrice: 0.003987 },
    '17': { openPrice: 0.003999, highPrice: 0.004015, lowPrice: 0.003977 },
    '21': { openPrice: 0.003989, highPrice: 0.004018, lowPrice: 0.003984 },
    '01': { openPrice: 0.004084, highPrice: 0.004114, lowPrice: 0.004072 },
    '05': { openPrice: 0.004082, highPrice: 0.004128, lowPrice: 0.004068 },
    '09': { openPrice: 0.004089, highPrice: 0.004116, lowPrice: 0.004019 }
  },
  '2021-07-03': {
    '13': { openPrice: 0.00404, highPrice: 0.004048, lowPrice: 0.00402 },
    '17': { openPrice: 0.004036, highPrice: 0.004057, lowPrice: 0.004014 },
    '21': { openPrice: 0.004027, highPrice: 0.004073, lowPrice: 0.004018 },
    '01': { openPrice: 0.004002, highPrice: 0.004039, lowPrice: 0.003995 },
    '05': { openPrice: 0.004023, highPrice: 0.004058, lowPrice: 0.004007 },
    '09': { openPrice: 0.004051, highPrice: 0.004059, lowPrice: 0.004034 }
  },
  '2021-07-04': {
    '13': { openPrice: 0.003994, highPrice: 0.004065, lowPrice: 0.003989 },
    '17': { openPrice: 0.004038, highPrice: 0.004069, lowPrice: 0.004033 },
    '21': { openPrice: 0.004043, highPrice: 0.004149, lowPrice: 0.004037 },
    '01': { openPrice: 0.004065, highPrice: 0.004077, lowPrice: 0.004024 },
    '05': { openPrice: 0.004031, highPrice: 0.004047, lowPrice: 0.003993 },
    '09': { openPrice: 0.004044, highPrice: 0.004049, lowPrice: 0.003976 }
  },
  '2021-07-05': {
    '13': { openPrice: 0.004111, highPrice: 0.004132, lowPrice: 0.004081 },
    '17': { openPrice: 0.004103, highPrice: 0.004109, lowPrice: 0.004019 },
    '21': { openPrice: 0.004048, highPrice: 0.004086, lowPrice: 0.004042 },
    '01': { openPrice: 0.004109, highPrice: 0.004126, lowPrice: 0.004091 },
    '05': { openPrice: 0.004124, highPrice: 0.004138, lowPrice: 0.004092 },
    '09': { openPrice: 0.004107, highPrice: 0.004139, lowPrice: 0.004087 }
  },
  '2021-07-06': {
    '13': { openPrice: 0.004084, highPrice: 0.004112, lowPrice: 0.004071 },
    '17': { openPrice: 0.004078, highPrice: 0.004084, lowPrice: 0.004013 },
    '21': { openPrice: 0.004023, highPrice: 0.00406, lowPrice: 0.004022 },
    '01': { openPrice: 0.004072, highPrice: 0.004097, lowPrice: 0.004058 },
    '05': { openPrice: 0.004085, highPrice: 0.004108, lowPrice: 0.004083 },
    '09': { openPrice: 0.004088, highPrice: 0.004121, lowPrice: 0.004068 }
  },
  '2021-07-07': {
    '13': { openPrice: 0.004062, highPrice: 0.004109, lowPrice: 0.00406 },
    '17': { openPrice: 0.004069, highPrice: 0.004087, lowPrice: 0.004062 },
    '21': { openPrice: 0.004072, highPrice: 0.004086, lowPrice: 0.004038 },
    '01': { openPrice: 0.004051, highPrice: 0.00407, lowPrice: 0.004043 },
    '05': { openPrice: 0.004052, highPrice: 0.004065, lowPrice: 0.00403 },
    '09': { openPrice: 0.004058, highPrice: 0.004084, lowPrice: 0.004024 }
  },
  '2021-07-08': {
    '13': { openPrice: 0.004051, highPrice: 0.004052, lowPrice: 0.003998 },
    '17': { openPrice: 0.004021, highPrice: 0.004025, lowPrice: 0.003978 },
    '21': { openPrice: 0.003998, highPrice: 0.004003, lowPrice: 0.003972 },
    '01': { openPrice: 0.004056, highPrice: 0.004077, lowPrice: 0.00404 },
    '05': { openPrice: 0.004049, highPrice: 0.00406, lowPrice: 0.004032 },
    '09': { openPrice: 0.004059, highPrice: 0.00407, lowPrice: 0.004018 }
  },
  '2021-07-09': {
    '13': { openPrice: 0.003966, highPrice: 0.004, lowPrice: 0.003964 },
    '17': { openPrice: 0.003983, highPrice: 0.003984, lowPrice: 0.003925 },
    '21': { openPrice: 0.003938, highPrice: 0.004028, lowPrice: 0.003911 },
    '01': { openPrice: 0.003986, highPrice: 0.004042, lowPrice: 0.003981 },
    '05': { openPrice: 0.004017, highPrice: 0.004034, lowPrice: 0.003981 },
    '09': { openPrice: 0.004018, highPrice: 0.004025, lowPrice: 0.0039 }
  },
  '2021-07-10': {
    '13': { openPrice: 0.003954, highPrice: 0.003959, lowPrice: 0.003926 },
    '17': { openPrice: 0.003949, highPrice: 0.003951, lowPrice: 0.003911 },
    '21': { openPrice: 0.003925, highPrice: 0.003933, lowPrice: 0.003909 },
    '01': { openPrice: 0.00401, highPrice: 0.004042, lowPrice: 0.003988 },
    '05': { openPrice: 0.00399, highPrice: 0.003997, lowPrice: 0.003967 },
    '09': { openPrice: 0.003981, highPrice: 0.004009, lowPrice: 0.00394 }
  },
  '2021-07-11': {
    '13': { openPrice: 0.00397, highPrice: 0.003995, lowPrice: 0.00396 },
    '17': { openPrice: 0.003986, highPrice: 0.004012, lowPrice: 0.003978 },
    '21': { openPrice: 0.003988, highPrice: 0.00401, lowPrice: 0.003974 },
    '01': { openPrice: 0.003925, highPrice: 0.003955, lowPrice: 0.003915 },
    '05': { openPrice: 0.003951, highPrice: 0.004001, lowPrice: 0.003941 },
    '09': { openPrice: 0.003999, highPrice: 0.004013, lowPrice: 0.003961 }
  },
  '2021-07-12': {
    '13': { openPrice: 0.003933, highPrice: 0.004033, lowPrice: 0.003929 },
    '17': { openPrice: 0.004015, highPrice: 0.004057, lowPrice: 0.004013 },
    '21': { openPrice: 0.004056, highPrice: 0.004182, lowPrice: 0.004049 },
    '01': { openPrice: 0.003983, highPrice: 0.003997, lowPrice: 0.003945 },
    '05': { openPrice: 0.003952, highPrice: 0.003958, lowPrice: 0.003905 },
    '09': { openPrice: 0.003919, highPrice: 0.003968, lowPrice: 0.003912 }
  },
  '2021-07-13': {
    '13': { openPrice: 0.00403, highPrice: 0.00404, lowPrice: 0.003959 },
    '17': { openPrice: 0.004011, highPrice: 0.004035, lowPrice: 0.003997 },
    '21': { openPrice: 0.004016, highPrice: 0.004079, lowPrice: 0.004001 },
    '01': { openPrice: 0.00415, highPrice: 0.004157, lowPrice: 0.004043 },
    '05': { openPrice: 0.00407, highPrice: 0.00407, lowPrice: 0.004018 },
    '09': { openPrice: 0.004031, highPrice: 0.00406, lowPrice: 0.004014 }
  },
  '2021-07-14': {
    '13': { openPrice: 0.003922, highPrice: 0.003957, lowPrice: 0.00391 },
    '17': { openPrice: 0.003944, highPrice: 0.003981, lowPrice: 0.003916 },
    '21': { openPrice: 0.003949, highPrice: 0.004017, lowPrice: 0.003934 },
    '01': { openPrice: 0.004066, highPrice: 0.004099, lowPrice: 0.004028 },
    '05': { openPrice: 0.004031, highPrice: 0.004041, lowPrice: 0.004003 },
    '09': { openPrice: 0.004014, highPrice: 0.004027, lowPrice: 0.003906 }
  },
  '2021-07-15': {
    '13': { openPrice: 0.003957, highPrice: 0.003976, lowPrice: 0.003934 },
    '17': { openPrice: 0.00395, highPrice: 0.003976, lowPrice: 0.003912 },
    '21': { openPrice: 0.003921, highPrice: 0.003958, lowPrice: 0.003914 },
    '01': { openPrice: 0.003976, highPrice: 0.004012, lowPrice: 0.003964 },
    '05': { openPrice: 0.003995, highPrice: 0.004019, lowPrice: 0.003982 },
    '09': { openPrice: 0.003994, highPrice: 0.004023, lowPrice: 0.00395 }
  },
  '2021-07-16': {
    '13': { openPrice: 0.00397, highPrice: 0.003986, lowPrice: 0.003933 },
    '17': { openPrice: 0.003944, highPrice: 0.003945, lowPrice: 0.003873 },
    '21': { openPrice: 0.003876, highPrice: 0.003894, lowPrice: 0.003861 },
    '01': { openPrice: 0.003949, highPrice: 0.00396, lowPrice: 0.003906 },
    '05': { openPrice: 0.003952, highPrice: 0.003984, lowPrice: 0.003942 },
    '09': { openPrice: 0.003949, highPrice: 0.003999, lowPrice: 0.003937 }
  },
  '2021-07-17': {
    '13': { openPrice: 0.003826, highPrice: 0.003844, lowPrice: 0.00381 },
    '17': { openPrice: 0.003826, highPrice: 0.003851, lowPrice: 0.003759 },
    '21': { openPrice: 0.003774, highPrice: 0.003803, lowPrice: 0.003764 },
    '01': { openPrice: 0.003886, highPrice: 0.003909, lowPrice: 0.003876 },
    '05': { openPrice: 0.003893, highPrice: 0.003905, lowPrice: 0.003843 },
    '09': { openPrice: 0.003845, highPrice: 0.003887, lowPrice: 0.003785 }
  },
  '2021-07-18': {
    '13': { openPrice: 0.003825, highPrice: 0.003833, lowPrice: 0.003804 },
    '17': { openPrice: 0.003822, highPrice: 0.003837, lowPrice: 0.003808 },
    '21': { openPrice: 0.003817, highPrice: 0.00383, lowPrice: 0.003734 },
    '01': { openPrice: 0.003779, highPrice: 0.003832, lowPrice: 0.003773 },
    '05': { openPrice: 0.003829, highPrice: 0.003834, lowPrice: 0.0038 },
    '09': { openPrice: 0.003808, highPrice: 0.003853, lowPrice: 0.003805 }
  },
  '2021-07-19': {
    '13': { openPrice: 0.00376, highPrice: 0.003789, lowPrice: 0.003751 },
    '17': { openPrice: 0.003778, highPrice: 0.003784, lowPrice: 0.00372 },
    '21': { openPrice: 0.00372, highPrice: 0.003722, lowPrice: 0.003655 },
    '01': { openPrice: 0.003758, highPrice: 0.003775, lowPrice: 0.003749 },
    '05': { openPrice: 0.003767, highPrice: 0.003839, lowPrice: 0.003731 },
    '09': { openPrice: 0.003748, highPrice: 0.00377, lowPrice: 0.003714 }
  },
  '2021-07-20': {
    '13': { openPrice: 0.003597, highPrice: 0.003618, lowPrice: 0.003557 },
    '17': { openPrice: 0.003582, highPrice: 0.0036, lowPrice: 0.003526 },
    '21': { openPrice: 0.003588, highPrice: 0.003642, lowPrice: 0.003553 },
    '01': { openPrice: 0.003678, highPrice: 0.003723, lowPrice: 0.003672 },
    '05': { openPrice: 0.003718, highPrice: 0.00372, lowPrice: 0.003666 },
    '09': { openPrice: 0.003668, highPrice: 0.003717, lowPrice: 0.003586 }
  },
  '2021-07-21': {
    '13': { openPrice: 0.003647, highPrice: 0.003664, lowPrice: 0.003623 },
    '17': { openPrice: 0.003634, highPrice: 0.003644, lowPrice: 0.003601 },
    '21': { openPrice: 0.003622, highPrice: 0.003668, lowPrice: 0.003615 },
    '01': { openPrice: 0.003638, highPrice: 0.003674, lowPrice: 0.003635 },
    '05': { openPrice: 0.003653, highPrice: 0.003672, lowPrice: 0.003594 },
    '09': { openPrice: 0.0036, highPrice: 0.003651, lowPrice: 0.003561 }
  },
  '2021-07-22': {
    '13': { openPrice: 0.003654, highPrice: 0.00369, lowPrice: 0.003643 },
    '17': { openPrice: 0.003663, highPrice: 0.003688, lowPrice: 0.003655 },
    '21': { openPrice: 0.003675, highPrice: 0.003738, lowPrice: 0.003644 },
    '01': { openPrice: 0.003665, highPrice: 0.003685, lowPrice: 0.003615 },
    '05': { openPrice: 0.003677, highPrice: 0.003693, lowPrice: 0.003646 },
    '09': { openPrice: 0.003664, highPrice: 0.003683, lowPrice: 0.003623 }
  },
  '2021-07-23': {
    '13': { openPrice: 0.003699, highPrice: 0.003721, lowPrice: 0.003689 },
    '17': { openPrice: 0.003704, highPrice: 0.003708, lowPrice: 0.003682 },
    '21': { openPrice: 0.003692, highPrice: 0.003709, lowPrice: 0.003671 },
    '01': { openPrice: 0.003736, highPrice: 0.003755, lowPrice: 0.003718 },
    '05': { openPrice: 0.003721, highPrice: 0.003743, lowPrice: 0.003707 },
    '09': { openPrice: 0.003738, highPrice: 0.003741, lowPrice: 0.003694 }
  },
  '2021-07-24': {
    '13': { openPrice: 0.003749, highPrice: 0.003774, lowPrice: 0.003733 },
    '17': { openPrice: 0.003745, highPrice: 0.003746, lowPrice: 0.003712 },
    '21': { openPrice: 0.003714, highPrice: 0.003723, lowPrice: 0.003695 },
    '01': { openPrice: 0.003673, highPrice: 0.003685, lowPrice: 0.003651 },
    '05': { openPrice: 0.003684, highPrice: 0.00373, lowPrice: 0.003674 },
    '09': { openPrice: 0.003695, highPrice: 0.003752, lowPrice: 0.003691 }
  },
  '2021-07-25': {
    '13': { openPrice: 0.003655, highPrice: 0.00368, lowPrice: 0.003629 },
    '17': { openPrice: 0.003647, highPrice: 0.003703, lowPrice: 0.003639 },
    '21': { openPrice: 0.003651, highPrice: 0.003665, lowPrice: 0.003633 },
    '01': { openPrice: 0.003706, highPrice: 0.00373, lowPrice: 0.003659 },
    '05': { openPrice: 0.003664, highPrice: 0.003683, lowPrice: 0.003648 },
    '09': { openPrice: 0.003678, highPrice: 0.003683, lowPrice: 0.003642 }
  },
  '2021-07-26': {
    '13': { openPrice: 0.003577, highPrice: 0.003595, lowPrice: 0.003556 },
    '17': { openPrice: 0.003577, highPrice: 0.003606, lowPrice: 0.003568 },
    '21': { openPrice: 0.003585, highPrice: 0.003604, lowPrice: 0.00356 },
    '01': { openPrice: 0.003657, highPrice: 0.003658, lowPrice: 0.003627 },
    '05': { openPrice: 0.003633, highPrice: 0.003633, lowPrice: 0.0036 },
    '09': { openPrice: 0.003608, highPrice: 0.003649, lowPrice: 0.003422 }
  },
  '2021-07-27': {
    '13': { openPrice: 0.003499, highPrice: 0.003514, lowPrice: 0.003464 },
    '17': { openPrice: 0.003473, highPrice: 0.003488, lowPrice: 0.00346 },
    '21': { openPrice: 0.003472, highPrice: 0.003504, lowPrice: 0.003457 },
    '01': { openPrice: 0.003567, highPrice: 0.003572, lowPrice: 0.003453 },
    '05': { openPrice: 0.003469, highPrice: 0.003554, lowPrice: 0.003461 },
    '09': { openPrice: 0.003519, highPrice: 0.003538, lowPrice: 0.003478 }
  },
  '2021-07-28': {
    '13': { openPrice: 0.003401, highPrice: 0.003465, lowPrice: 0.003361 },
    '17': { openPrice: 0.00345, highPrice: 0.003502, lowPrice: 0.00341 },
    '21': { openPrice: 0.003426, highPrice: 0.003483, lowPrice: 0.003412 },
    '01': { openPrice: 0.00349, highPrice: 0.003541, lowPrice: 0.003485 },
    '05': { openPrice: 0.003515, highPrice: 0.003531, lowPrice: 0.003411 },
    '09': { openPrice: 0.003415, highPrice: 0.003428, lowPrice: 0.003387 }
  },
  '2021-07-29': {
    '13': { openPrice: 0.003497, highPrice: 0.003518, lowPrice: 0.003475 },
    '17': { openPrice: 0.003491, highPrice: 0.003497, lowPrice: 0.003454 },
    '21': { openPrice: 0.003463, highPrice: 0.003515, lowPrice: 0.003462 },
    '01': { openPrice: 0.003469, highPrice: 0.003479, lowPrice: 0.003404 },
    '05': { openPrice: 0.003419, highPrice: 0.003548, lowPrice: 0.003418 },
    '09': { openPrice: 0.003509, highPrice: 0.00351, lowPrice: 0.003464 }
  },
  '2021-07-30': {
    '13': { openPrice: 0.00357, highPrice: 0.003584, lowPrice: 0.003549 },
    '17': { openPrice: 0.003563, highPrice: 0.003567, lowPrice: 0.003522 },
    '21': { openPrice: 0.003524, highPrice: 0.003536, lowPrice: 0.003505 },
    '01': { openPrice: 0.003508, highPrice: 0.003577, lowPrice: 0.003496 },
    '05': { openPrice: 0.003546, highPrice: 0.003567, lowPrice: 0.003522 },
    '09': { openPrice: 0.003534, highPrice: 0.003587, lowPrice: 0.003523 }
  },
  '2021-07-31': {
    '13': { openPrice: 0.003465, highPrice: 0.003473, lowPrice: 0.003424 },
    '17': { openPrice: 0.003453, highPrice: 0.003464, lowPrice: 0.003435 },
    '21': { openPrice: 0.003451, highPrice: 0.003466, lowPrice: 0.003444 },
    '01': { openPrice: 0.003523, highPrice: 0.003587, lowPrice: 0.00352 },
    '05': { openPrice: 0.003535, highPrice: 0.003552, lowPrice: 0.003445 },
    '09': { openPrice: 0.003448, highPrice: 0.003494, lowPrice: 0.00344 }
  },
  '2021-08-01': {
    '13': { openPrice: 0.003526, highPrice: 0.003573, lowPrice: 0.003515 },
    '17': { openPrice: 0.00355, highPrice: 0.003567, lowPrice: 0.003527 },
    '21': { openPrice: 0.003537, highPrice: 0.003541, lowPrice: 0.003502 },
    '01': { openPrice: 0.00346, highPrice: 0.003468, lowPrice: 0.003448 },
    '05': { openPrice: 0.003462, highPrice: 0.003488, lowPrice: 0.00345 },
    '09': { openPrice: 0.003483, highPrice: 0.003547, lowPrice: 0.003468 }
  },
  '2021-08-02': {
    '13': { openPrice: 0.003551, highPrice: 0.003619, lowPrice: 0.003548 },
    '17': { openPrice: 0.00361, highPrice: 0.003655, lowPrice: 0.003606 },
    '21': { openPrice: 0.003647, highPrice: 0.003657, lowPrice: 0.003616 },
    '01': { openPrice: 0.003534, highPrice: 0.003546, lowPrice: 0.003503 },
    '05': { openPrice: 0.003532, highPrice: 0.003566, lowPrice: 0.003498 },
    '09': { openPrice: 0.003521, highPrice: 0.003552, lowPrice: 0.003514 }
  },
  '2021-08-03': {
    '13': { openPrice: 0.003596, highPrice: 0.003624, lowPrice: 0.003582 },
    '17': { openPrice: 0.003597, highPrice: 0.003599, lowPrice: 0.003565 },
    '21': { openPrice: 0.003578, highPrice: 0.003641, lowPrice: 0.003577 },
    '01': { openPrice: 0.003619, highPrice: 0.003625, lowPrice: 0.003588 },
    '05': { openPrice: 0.003608, highPrice: 0.003621, lowPrice: 0.003574 },
    '09': { openPrice: 0.003611, highPrice: 0.003628, lowPrice: 0.003586 }
  },
  '2021-08-04': {
    '13': { openPrice: 0.003611, highPrice: 0.00363, lowPrice: 0.003604 },
    '17': { openPrice: 0.003618, highPrice: 0.003625, lowPrice: 0.003604 },
    '21': { openPrice: 0.003607, highPrice: 0.003644, lowPrice: 0.003586 },
    '01': { openPrice: 0.003629, highPrice: 0.003656, lowPrice: 0.003613 },
    '05': { openPrice: 0.003654, highPrice: 0.003659, lowPrice: 0.003621 },
    '09': { openPrice: 0.003625, highPrice: 0.003631, lowPrice: 0.003611 }
  },
  '2021-08-05': {
    '13': { openPrice: 0.003568, highPrice: 0.003588, lowPrice: 0.003561 },
    '17': { openPrice: 0.003584, highPrice: 0.003646, lowPrice: 0.003583 },
    '21': { openPrice: 0.003631, highPrice: 0.003655, lowPrice: 0.003594 },
    '01': { openPrice: 0.003623, highPrice: 0.003641, lowPrice: 0.003605 },
    '05': { openPrice: 0.003618, highPrice: 0.003624, lowPrice: 0.003583 },
    '09': { openPrice: 0.003589, highPrice: 0.003605, lowPrice: 0.003564 }
  },
  '2021-08-06': {
    '13': { openPrice: 0.00363, highPrice: 0.003647, lowPrice: 0.003557 },
    '17': { openPrice: 0.003571, highPrice: 0.003578, lowPrice: 0.003536 },
    '21': { openPrice: 0.003555, highPrice: 0.003569, lowPrice: 0.003519 },
    '01': { openPrice: 0.003619, highPrice: 0.003621, lowPrice: 0.003488 },
    '05': { openPrice: 0.003516, highPrice: 0.003543, lowPrice: 0.003491 },
    '09': { openPrice: 0.003511, highPrice: 0.00365, lowPrice: 0.003502 }
  },
  '2021-08-07': {
    '13': { openPrice: 0.003511, highPrice: 0.003525, lowPrice: 0.003498 },
    '17': { openPrice: 0.003521, highPrice: 0.00355, lowPrice: 0.003508 },
    '21': { openPrice: 0.003531, highPrice: 0.003571, lowPrice: 0.003453 },
    '01': { openPrice: 0.00353, highPrice: 0.003535, lowPrice: 0.003452 },
    '05': { openPrice: 0.003463, highPrice: 0.00352, lowPrice: 0.003448 },
    '09': { openPrice: 0.003454, highPrice: 0.003551, lowPrice: 0.003449 }
  },
  '2021-08-08': {
    '13': { openPrice: 0.003481, highPrice: 0.003486, lowPrice: 0.00345 },
    '17': { openPrice: 0.003465, highPrice: 0.003478, lowPrice: 0.00344 },
    '21': { openPrice: 0.00345, highPrice: 0.003463, lowPrice: 0.003423 },
    '01': { openPrice: 0.003544, highPrice: 0.003551, lowPrice: 0.003501 },
    '05': { openPrice: 0.003502, highPrice: 0.003526, lowPrice: 0.003493 },
    '09': { openPrice: 0.003498, highPrice: 0.003535, lowPrice: 0.003455 }
  },
  '2021-08-09': {
    '13': { openPrice: 0.003385, highPrice: 0.003441, lowPrice: 0.00338 },
    '17': { openPrice: 0.003421, highPrice: 0.003437, lowPrice: 0.003356 },
    '21': { openPrice: 0.003388, highPrice: 0.003588, lowPrice: 0.003372 },
    '01': { openPrice: 0.00343, highPrice: 0.003441, lowPrice: 0.003374 },
    '05': { openPrice: 0.003409, highPrice: 0.003423, lowPrice: 0.003383 },
    '09': { openPrice: 0.003417, highPrice: 0.003425, lowPrice: 0.003376 }
  },
  '2021-08-10': {
    '13': { openPrice: 0.003561, highPrice: 0.003662, lowPrice: 0.003539 },
    '17': { openPrice: 0.003614, highPrice: 0.003622, lowPrice: 0.003551 },
    '21': { openPrice: 0.0036, highPrice: 0.003669, lowPrice: 0.003581 },
    '01': { openPrice: 0.003581, highPrice: 0.003675, lowPrice: 0.003554 },
    '05': { openPrice: 0.003648, highPrice: 0.003693, lowPrice: 0.003584 },
    '09': { openPrice: 0.003596, highPrice: 0.003608, lowPrice: 0.003529 }
  },
  '2021-08-11': {
    '13': { openPrice: 0.003638, highPrice: 0.003762, lowPrice: 0.003632 },
    '17': { openPrice: 0.003728, highPrice: 0.00373, lowPrice: 0.003677 },
    '21': { openPrice: 0.003696, highPrice: 0.003741, lowPrice: 0.003677 },
    '01': { openPrice: 0.003602, highPrice: 0.003624, lowPrice: 0.003553 },
    '05': { openPrice: 0.003621, highPrice: 0.00367, lowPrice: 0.003615 },
    '09': { openPrice: 0.003627, highPrice: 0.00367, lowPrice: 0.003615 }
  },
  '2021-08-12': {
    '13': { openPrice: 0.003809, highPrice: 0.003833, lowPrice: 0.003696 },
    '17': { openPrice: 0.003763, highPrice: 0.003785, lowPrice: 0.003726 },
    '21': { openPrice: 0.003759, highPrice: 0.003772, lowPrice: 0.003658 },
    '01': { openPrice: 0.003707, highPrice: 0.003763, lowPrice: 0.003703 },
    '05': { openPrice: 0.003755, highPrice: 0.003774, lowPrice: 0.003694 },
    '09': { openPrice: 0.003748, highPrice: 0.003894, lowPrice: 0.003744 }
  },
  '2021-08-13': {
    '13': { openPrice: 0.003741, highPrice: 0.003844, lowPrice: 0.003739 },
    '17': { openPrice: 0.003837, highPrice: 0.00395, lowPrice: 0.003836 },
    '21': { openPrice: 0.003882, highPrice: 0.003924, lowPrice: 0.003751 },
    '01': { openPrice: 0.003692, highPrice: 0.00374, lowPrice: 0.003681 },
    '05': { openPrice: 0.003728, highPrice: 0.003742, lowPrice: 0.003689 },
    '09': { openPrice: 0.003726, highPrice: 0.00378, lowPrice: 0.003705 }
  },
  '2021-08-14': {
    '13': { openPrice: 0.00377, highPrice: 0.00385, lowPrice: 0.003751 },
    '17': { openPrice: 0.003836, highPrice: 0.003849, lowPrice: 0.003754 },
    '21': { openPrice: 0.003834, highPrice: 0.003897, lowPrice: 0.003818 },
    '01': { openPrice: 0.003796, highPrice: 0.00383, lowPrice: 0.003761 },
    '05': { openPrice: 0.003794, highPrice: 0.003871, lowPrice: 0.003772 },
    '09': { openPrice: 0.003835, highPrice: 0.00388, lowPrice: 0.003736 }
  },
  '2021-08-15': {
    '13': { openPrice: 0.003896, highPrice: 0.003908, lowPrice: 0.003844 },
    '17': { openPrice: 0.003874, highPrice: 0.003916, lowPrice: 0.003858 },
    '21': { openPrice: 0.003905, highPrice: 0.003918, lowPrice: 0.003851 },
    '01': { openPrice: 0.003879, highPrice: 0.003882, lowPrice: 0.003849 },
    '05': { openPrice: 0.003858, highPrice: 0.003891, lowPrice: 0.003815 },
    '09': { openPrice: 0.003883, highPrice: 0.003951, lowPrice: 0.003864 }
  },
  '2021-08-16': {
    '13': { openPrice: 0.003878, highPrice: 0.003959, lowPrice: 0.003877 },
    '17': { openPrice: 0.003921, highPrice: 0.003984, lowPrice: 0.003914 },
    '21': { openPrice: 0.003944, highPrice: 0.003947, lowPrice: 0.00388 },
    '01': { openPrice: 0.003907, highPrice: 0.003941, lowPrice: 0.00388 },
    '05': { openPrice: 0.003936, highPrice: 0.003942, lowPrice: 0.003905 },
    '09': { openPrice: 0.00393, highPrice: 0.003944, lowPrice: 0.003868 }
  },
  '2021-08-17': {
    '13': { openPrice: 0.003914, highPrice: 0.003936, lowPrice: 0.003881 },
    '17': { openPrice: 0.003913, highPrice: 0.003922, lowPrice: 0.00389 },
    '21': { openPrice: 0.003913, highPrice: 0.003918, lowPrice: 0.003858 },
    '01': { openPrice: 0.003933, highPrice: 0.003975, lowPrice: 0.003913 },
    '05': { openPrice: 0.003914, highPrice: 0.003935, lowPrice: 0.003858 },
    '09': { openPrice: 0.003875, highPrice: 0.003923, lowPrice: 0.003817 }
  },
  '2021-08-18': {
    '13': { openPrice: 0.003746, highPrice: 0.003773, lowPrice: 0.003718 },
    '17': { openPrice: 0.003754, highPrice: 0.00378, lowPrice: 0.003707 },
    '21': { openPrice: 0.003712, highPrice: 0.003791, lowPrice: 0.003712 },
    '01': { openPrice: 0.003863, highPrice: 0.003883, lowPrice: 0.003843 },
    '05': { openPrice: 0.003853, highPrice: 0.00387, lowPrice: 0.003772 },
    '09': { openPrice: 0.003773, highPrice: 0.003787, lowPrice: 0.003678 }
  },
  '2021-08-19': {
    '13': { openPrice: 0.003753, highPrice: 0.003778, lowPrice: 0.003704 },
    '17': { openPrice: 0.003718, highPrice: 0.003746, lowPrice: 0.003694 },
    '21': { openPrice: 0.003702, highPrice: 0.003745, lowPrice: 0.003676 },
    '01': { openPrice: 0.003791, highPrice: 0.003802, lowPrice: 0.003736 },
    '05': { openPrice: 0.003739, highPrice: 0.00376, lowPrice: 0.003693 },
    '09': { openPrice: 0.003728, highPrice: 0.003769, lowPrice: 0.003708 }
  },
  '2021-08-20': {
    '13': { openPrice: 0.003733, highPrice: 0.003753, lowPrice: 0.003727 },
    '17': { openPrice: 0.003741, highPrice: 0.003762, lowPrice: 0.003725 },
    '21': { openPrice: 0.003744, highPrice: 0.00381, lowPrice: 0.003743 },
    '01': { openPrice: 0.003731, highPrice: 0.003751, lowPrice: 0.003713 },
    '05': { openPrice: 0.003731, highPrice: 0.003758, lowPrice: 0.00372 },
    '09': { openPrice: 0.003755, highPrice: 0.003783, lowPrice: 0.003726 }
  },
  '2021-08-21': {
    '13': { openPrice: 0.003743, highPrice: 0.003751, lowPrice: 0.003715 },
    '17': { openPrice: 0.003734, highPrice: 0.003741, lowPrice: 0.003678 },
    '21': { openPrice: 0.003702, highPrice: 0.003724, lowPrice: 0.003685 },
    '01': { openPrice: 0.003753, highPrice: 0.003763, lowPrice: 0.003713 },
    '05': { openPrice: 0.003715, highPrice: 0.003736, lowPrice: 0.003694 },
    '09': { openPrice: 0.003723, highPrice: 0.003745, lowPrice: 0.003686 }
  },
  '2021-08-22': {
    '13': { openPrice: 0.003734, highPrice: 0.00386, lowPrice: 0.003732 },
    '17': { openPrice: 0.003829, highPrice: 0.003841, lowPrice: 0.003803 },
    '21': { openPrice: 0.003826, highPrice: 0.003828, lowPrice: 0.003721 },
    '01': { openPrice: 0.003696, highPrice: 0.0037, lowPrice: 0.003612 },
    '05': { openPrice: 0.003625, highPrice: 0.003687, lowPrice: 0.003614 },
    '09': { openPrice: 0.003679, highPrice: 0.00376, lowPrice: 0.003679 }
  },
  '2021-08-23': {
    '13': { openPrice: 0.003755, highPrice: 0.003774, lowPrice: 0.003727 },
    '17': { openPrice: 0.003749, highPrice: 0.003808, lowPrice: 0.003742 },
    '21': { openPrice: 0.003775, highPrice: 0.003793, lowPrice: 0.003742 },
    '01': { openPrice: 0.003755, highPrice: 0.003762, lowPrice: 0.003712 },
    '05': { openPrice: 0.003717, highPrice: 0.003784, lowPrice: 0.003693 },
    '09': { openPrice: 0.003775, highPrice: 0.003799, lowPrice: 0.003749 }
  },
  '2021-08-24': {
    '13': { openPrice: 0.003754, highPrice: 0.003776, lowPrice: 0.003746 },
    '17': { openPrice: 0.003767, highPrice: 0.003792, lowPrice: 0.00372 },
    '21': { openPrice: 0.003764, highPrice: 0.003766, lowPrice: 0.003663 },
    '01': { openPrice: 0.003764, highPrice: 0.003795, lowPrice: 0.003753 },
    '05': { openPrice: 0.003763, highPrice: 0.003782, lowPrice: 0.003745 },
    '09': { openPrice: 0.003778, highPrice: 0.0038, lowPrice: 0.003738 }
  },
  '2021-08-25': {
    '13': { openPrice: 0.003624, highPrice: 0.003678, lowPrice: 0.003614 },
    '17': { openPrice: 0.003647, highPrice: 0.003653, lowPrice: 0.003579 },
    '21': { openPrice: 0.003628, highPrice: 0.00366, lowPrice: 0.003616 },
    '01': { openPrice: 0.003669, highPrice: 0.00367, lowPrice: 0.003608 },
    '05': { openPrice: 0.003654, highPrice: 0.003676, lowPrice: 0.003623 },
    '09': { openPrice: 0.003638, highPrice: 0.00369, lowPrice: 0.003622 }
  },
  '2021-08-26': {
    '13': { openPrice: 0.003586, highPrice: 0.003638, lowPrice: 0.00357 },
    '17': { openPrice: 0.003615, highPrice: 0.003645, lowPrice: 0.003611 },
    '21': { openPrice: 0.003618, highPrice: 0.003637, lowPrice: 0.003592 },
    '01': { openPrice: 0.003646, highPrice: 0.00365, lowPrice: 0.003629 },
    '05': { openPrice: 0.003632, highPrice: 0.003644, lowPrice: 0.00362 },
    '09': { openPrice: 0.00363, highPrice: 0.003662, lowPrice: 0.00357 }
  },
  '2021-08-27': {
    '13': { openPrice: 0.003578, highPrice: 0.00359, lowPrice: 0.003544 },
    '17': { openPrice: 0.003573, highPrice: 0.003594, lowPrice: 0.003557 },
    '21': { openPrice: 0.003589, highPrice: 0.003635, lowPrice: 0.003568 },
    '01': { openPrice: 0.003592, highPrice: 0.0036, lowPrice: 0.003548 },
    '05': { openPrice: 0.003585, highPrice: 0.003624, lowPrice: 0.003575 },
    '09': { openPrice: 0.003581, highPrice: 0.0036, lowPrice: 0.003549 }
  },
  '2021-08-28': {
    '13': { openPrice: 0.003563, highPrice: 0.003583, lowPrice: 0.003543 },
    '17': { openPrice: 0.003565, highPrice: 0.00357, lowPrice: 0.003535 },
    '21': { openPrice: 0.003546, highPrice: 0.003572, lowPrice: 0.003533 },
    '01': { openPrice: 0.003612, highPrice: 0.003624, lowPrice: 0.00358 },
    '05': { openPrice: 0.003582, highPrice: 0.003598, lowPrice: 0.003568 },
    '09': { openPrice: 0.003592, highPrice: 0.003606, lowPrice: 0.003553 }
  },
  '2021-08-29': {
    '13': { openPrice: 0.00366, highPrice: 0.003701, lowPrice: 0.003649 },
    '17': { openPrice: 0.003693, highPrice: 0.003702, lowPrice: 0.003647 },
    '21': { openPrice: 0.003652, highPrice: 0.003664, lowPrice: 0.00359 },
    '01': { openPrice: 0.003546, highPrice: 0.003552, lowPrice: 0.003531 },
    '05': { openPrice: 0.003536, highPrice: 0.003604, lowPrice: 0.003536 },
    '09': { openPrice: 0.003592, highPrice: 0.003706, lowPrice: 0.003589 }
  },
  '2021-08-30': {
    '13': { openPrice: 0.00359, highPrice: 0.003608, lowPrice: 0.003573 },
    '17': { openPrice: 0.003604, highPrice: 0.003614, lowPrice: 0.003593 },
    '21': { openPrice: 0.003601, highPrice: 0.003602, lowPrice: 0.003528 },
    '01': { openPrice: 0.003603, highPrice: 0.003614, lowPrice: 0.003578 },
    '05': { openPrice: 0.003591, highPrice: 0.003611, lowPrice: 0.003572 },
    '09': { openPrice: 0.003576, highPrice: 0.0036, lowPrice: 0.00356 }
  },
  '2021-08-31': {
    '13': { openPrice: 0.003579, highPrice: 0.003623, lowPrice: 0.003572 },
    '17': { openPrice: 0.003614, highPrice: 0.003651, lowPrice: 0.003593 },
    '21': { openPrice: 0.003645, highPrice: 0.003648, lowPrice: 0.003588 },
    '01': { openPrice: 0.003565, highPrice: 0.003618, lowPrice: 0.003559 },
    '05': { openPrice: 0.003614, highPrice: 0.003631, lowPrice: 0.003546 },
    '09': { openPrice: 0.003563, highPrice: 0.003583, lowPrice: 0.003546 }
  },
  '2021-09-01': {
    '13': { openPrice: 0.003656, highPrice: 0.003672, lowPrice: 0.00364 },
    '17': { openPrice: 0.00366, highPrice: 0.003685, lowPrice: 0.00365 },
    '21': { openPrice: 0.003662, highPrice: 0.00374, lowPrice: 0.003646 },
    '01': { openPrice: 0.003608, highPrice: 0.003682, lowPrice: 0.003603 },
    '05': { openPrice: 0.003658, highPrice: 0.003671, lowPrice: 0.003611 },
    '09': { openPrice: 0.003642, highPrice: 0.003681, lowPrice: 0.003612 }
  },
  '2021-09-02': {
    '13': { openPrice: 0.003678, highPrice: 0.00371, lowPrice: 0.003659 },
    '17': { openPrice: 0.003663, highPrice: 0.003741, lowPrice: 0.003649 },
    '21': { openPrice: 0.003731, highPrice: 0.00374, lowPrice: 0.003649 },
    '01': { openPrice: 0.003723, highPrice: 0.003731, lowPrice: 0.003662 },
    '05': { openPrice: 0.003716, highPrice: 0.003771, lowPrice: 0.003704 },
    '09': { openPrice: 0.003705, highPrice: 0.003713, lowPrice: 0.003666 }
  },
  '2021-09-03': {
    '13': { openPrice: 0.003754, highPrice: 0.003784, lowPrice: 0.003732 },
    '17': { openPrice: 0.003736, highPrice: 0.003906, lowPrice: 0.003733 },
    '21': { openPrice: 0.003887, highPrice: 0.004098, lowPrice: 0.003859 },
    '01': { openPrice: 0.003683, highPrice: 0.003771, lowPrice: 0.003683 },
    '05': { openPrice: 0.003768, highPrice: 0.003792, lowPrice: 0.003721 },
    '09': { openPrice: 0.003724, highPrice: 0.003786, lowPrice: 0.003704 }
  },
  '2021-09-04': {
    '13': { openPrice: 0.004244, highPrice: 0.004298, lowPrice: 0.004187 },
    '17': { openPrice: 0.004254, highPrice: 0.004485, lowPrice: 0.004243 },
    '21': { openPrice: 0.004356, highPrice: 0.004419, lowPrice: 0.004329 },
    '01': { openPrice: 0.004089, highPrice: 0.00432, lowPrice: 0.004053 },
    '05': { openPrice: 0.004244, highPrice: 0.00428, lowPrice: 0.004163 },
    '09': { openPrice: 0.004259, highPrice: 0.004335, lowPrice: 0.004203 }
  },
  '2021-09-05': {
    '13': { openPrice: 0.004292, highPrice: 0.00433, lowPrice: 0.004264 },
    '17': { openPrice: 0.004301, highPrice: 0.004406, lowPrice: 0.004295 },
    '21': { openPrice: 0.004335, highPrice: 0.004558, lowPrice: 0.004315 },
    '01': { openPrice: 0.004338, highPrice: 0.004362, lowPrice: 0.004199 },
    '05': { openPrice: 0.004215, highPrice: 0.004295, lowPrice: 0.004211 },
    '09': { openPrice: 0.004247, highPrice: 0.00435, lowPrice: 0.004226 }
  },
  '2021-09-06': {
    '13': { openPrice: 0.004354, highPrice: 0.004449, lowPrice: 0.004343 },
    '17': { openPrice: 0.004414, highPrice: 0.004473, lowPrice: 0.004342 },
    '21': { openPrice: 0.00435, highPrice: 0.00435, lowPrice: 0.004215 },
    '01': { openPrice: 0.004481, highPrice: 0.004555, lowPrice: 0.004393 },
    '05': { openPrice: 0.004405, highPrice: 0.004492, lowPrice: 0.004338 },
    '09': { openPrice: 0.004488, highPrice: 0.004492, lowPrice: 0.004339 }
  },
  '2021-09-07': {
    '13': { openPrice: 0.004162, highPrice: 0.004204, lowPrice: 0.004126 },
    '17': { openPrice: 0.004143, highPrice: 0.004152, lowPrice: 0.003997 },
    '21': { openPrice: 0.004061, highPrice: 0.004096, lowPrice: 0.003724 },
    '01': { openPrice: 0.00429, highPrice: 0.004323, lowPrice: 0.004256 },
    '05': { openPrice: 0.00426, highPrice: 0.004302, lowPrice: 0.004144 },
    '09': { openPrice: 0.004167, highPrice: 0.004197, lowPrice: 0.004108 }
  },
  '2021-09-08': {
    '01': { openPrice: 0.003851, highPrice: 0.003932, lowPrice: 0.003792 },
    '05': { openPrice: 0.003801, highPrice: 0.003827, lowPrice: 0.003781 }
  }
} ,
'BNBBTC':
{
  '2021-03-25': {
    '17': { openPrice: 0.0046293, highPrice: 0.0046716, lowPrice: 0.0046234 },
    '21': { openPrice: 0.0046411, highPrice: 0.004655, lowPrice: 0.004444 }
  },
  '2021-03-26': {
    '13': { openPrice: 0.0046129, highPrice: 0.004628, lowPrice: 0.0045739 },
    '17': { openPrice: 0.0045955, highPrice: 0.0047006, lowPrice: 0.0045856 },
    '21': { openPrice: 0.0046939, highPrice: 0.0047407, lowPrice: 0.0046387 },
    '01': { openPrice: 0.0045337, highPrice: 0.0045553, lowPrice: 0.0045071 },
    '05': { openPrice: 0.0045216, highPrice: 0.0045664, lowPrice: 0.0045024 },
    '09': { openPrice: 0.0045611, highPrice: 0.0046516, lowPrice: 0.0045494 }
  },
  '2021-03-27': {
    '13': { openPrice: 0.0046036, highPrice: 0.0046171, lowPrice: 0.0045847 },
    '17': { openPrice: 0.0045935, highPrice: 0.0047453, lowPrice: 0.0045845 },
    '21': { openPrice: 0.0047028, highPrice: 0.004776, lowPrice: 0.0046716 },
    '01': { openPrice: 0.0046512, highPrice: 0.0046836, lowPrice: 0.0046267 },
    '05': { openPrice: 0.0046552, highPrice: 0.0046772, lowPrice: 0.0046256 },
    '09': { openPrice: 0.0046351, highPrice: 0.0046409, lowPrice: 0.0045752 }
  },
  '2021-03-28': {
    '13': { openPrice: 0.0049587, highPrice: 0.00499, lowPrice: 0.0048763 },
    '17': { openPrice: 0.0049353, highPrice: 0.0049412, lowPrice: 0.0048035 },
    '21': { openPrice: 0.004824, highPrice: 0.004886, lowPrice: 0.0048 },
    '01': { openPrice: 0.004746, highPrice: 0.004785, lowPrice: 0.0047001 },
    '05': { openPrice: 0.0047321, highPrice: 0.0048979, lowPrice: 0.0047267 },
    '09': { openPrice: 0.0048233, highPrice: 0.0049607, lowPrice: 0.0047859 }
  },
  '2021-03-29': {
    '13': { openPrice: 0.0048626, highPrice: 0.0049136, lowPrice: 0.0048527 },
    '17': { openPrice: 0.004892, highPrice: 0.0049174, lowPrice: 0.0046801 },
    '21': { openPrice: 0.0047612, highPrice: 0.0047651, lowPrice: 0.00469 },
    '01': { openPrice: 0.0048293, highPrice: 0.0048383, lowPrice: 0.0047691 },
    '05': { openPrice: 0.0048161, highPrice: 0.0048388, lowPrice: 0.0047915 },
    '09': { openPrice: 0.0048163, highPrice: 0.0048649, lowPrice: 0.0047888 }
  },
  '2021-03-30': {
    '13': { openPrice: 0.0047647, highPrice: 0.0048108, lowPrice: 0.0047209 },
    '17': { openPrice: 0.0048, highPrice: 0.005132, lowPrice: 0.0048 },
    '21': { openPrice: 0.0050136, highPrice: 0.0051767, lowPrice: 0.0049925 },
    '01': { openPrice: 0.0047195, highPrice: 0.0047534, lowPrice: 0.0047115 },
    '05': { openPrice: 0.0047339, highPrice: 0.0047843, lowPrice: 0.0047269 },
    '09': { openPrice: 0.004775, highPrice: 0.0047879, lowPrice: 0.0047391 }
  },
  '2021-03-31': {
    '13': { openPrice: 0.0051434, highPrice: 0.0052585, lowPrice: 0.0051 },
    '17': { openPrice: 0.0051948, highPrice: 0.0052017, lowPrice: 0.0050069 },
    '21': { openPrice: 0.0051483, highPrice: 0.0052578, lowPrice: 0.0051235 },
    '01': { openPrice: 0.0050659, highPrice: 0.005277, lowPrice: 0.0050068 },
    '05': { openPrice: 0.0052681, highPrice: 0.0053, lowPrice: 0.0051585 },
    '09': { openPrice: 0.0052991, highPrice: 0.0053692, lowPrice: 0.0051176 }
  },
  '2021-04-01': {
    '13': { openPrice: 0.005188, highPrice: 0.0053501, lowPrice: 0.0051826 },
    '17': { openPrice: 0.0053254, highPrice: 0.00543, lowPrice: 0.0053076 },
    '21': { openPrice: 0.0053541, highPrice: 0.0056, lowPrice: 0.0053453 },
    '01': { openPrice: 0.0051685, highPrice: 0.0051807, lowPrice: 0.005067 },
    '05': { openPrice: 0.0051415, highPrice: 0.0051592, lowPrice: 0.0050355 },
    '09': { openPrice: 0.0051493, highPrice: 0.0052117, lowPrice: 0.0051059 }
  },
  '2021-04-02': {
    '13': { openPrice: 0.0057448, highPrice: 0.0059983, lowPrice: 0.0057164 },
    '17': { openPrice: 0.0059143, highPrice: 0.0059697, lowPrice: 0.005808 },
    '21': { openPrice: 0.0058247, highPrice: 0.0059494, lowPrice: 0.00571 },
    '01': { openPrice: 0.0055539, highPrice: 0.0056, lowPrice: 0.00544 },
    '05': { openPrice: 0.0055677, highPrice: 0.0057539, lowPrice: 0.0055637 },
    '09': { openPrice: 0.0057009, highPrice: 0.0060631, lowPrice: 0.005677 }
  },
  '2021-04-03': {
    '13': { openPrice: 0.0057239, highPrice: 0.00581, lowPrice: 0.0057205 },
    '17': { openPrice: 0.005779, highPrice: 0.0058397, lowPrice: 0.00572 },
    '21': { openPrice: 0.005839, highPrice: 0.0058885, lowPrice: 0.005759 },
    '01': { openPrice: 0.005833, highPrice: 0.0058448, lowPrice: 0.0055573 },
    '05': { openPrice: 0.0057349, highPrice: 0.005814, lowPrice: 0.0056226 },
    '09': { openPrice: 0.0057369, highPrice: 0.0058488, lowPrice: 0.0056643 }
  },
  '2021-04-04': {
    '13': { openPrice: 0.0058092, highPrice: 0.0058722, lowPrice: 0.00576 },
    '17': { openPrice: 0.005843, highPrice: 0.0059999, lowPrice: 0.0058368 },
    '21': { openPrice: 0.0058976, highPrice: 0.0059755, lowPrice: 0.0058538 },
    '01': { openPrice: 0.0057615, highPrice: 0.0058136, lowPrice: 0.0056019 },
    '05': { openPrice: 0.005742, highPrice: 0.0057436, lowPrice: 0.0055131 },
    '09': { openPrice: 0.0056436, highPrice: 0.005842, lowPrice: 0.0055947 }
  },
  '2021-04-05': {
    '13': { openPrice: 0.0060025, highPrice: 0.0060453, lowPrice: 0.0059026 },
    '17': { openPrice: 0.0059464, highPrice: 0.0063708, lowPrice: 0.005932 },
    '21': { openPrice: 0.0062904, highPrice: 0.0064888, lowPrice: 0.0062093 },
    '01': { openPrice: 0.0059446, highPrice: 0.0060444, lowPrice: 0.0059272 },
    '05': { openPrice: 0.0059936, highPrice: 0.0060743, lowPrice: 0.005952 },
    '09': { openPrice: 0.0059973, highPrice: 0.006023, lowPrice: 0.0059125 }
  },
  '2021-04-06': {
    '13': { openPrice: 0.0063153, highPrice: 0.0065984, lowPrice: 0.0062918 },
    '17': { openPrice: 0.0064319, highPrice: 0.00685, lowPrice: 0.0064265 },
    '21': { openPrice: 0.0067814, highPrice: 0.0068254, lowPrice: 0.0065058 },
    '01': { openPrice: 0.0063914, highPrice: 0.0064, lowPrice: 0.0062519 },
    '05': { openPrice: 0.0063331, highPrice: 0.0064046, lowPrice: 0.0062005 },
    '09': { openPrice: 0.0062264, highPrice: 0.0063231, lowPrice: 0.0061818 }
  },
  '2021-04-07': {
    '13': { openPrice: 0.00694, highPrice: 0.0071, lowPrice: 0.00687 },
    '17': { openPrice: 0.0069823, highPrice: 0.006998, lowPrice: 0.0063714 },
    '21': { openPrice: 0.0065877, highPrice: 0.0068764, lowPrice: 0.0064107 },
    '01': { openPrice: 0.0066838, highPrice: 0.00684, lowPrice: 0.0066758 },
    '05': { openPrice: 0.0068343, highPrice: 0.0070969, lowPrice: 0.0067786 },
    '09': { openPrice: 0.0069535, highPrice: 0.0071032, lowPrice: 0.0068085 }
  },
  '2021-04-08': {
    '13': { openPrice: 0.0070169, highPrice: 0.0070999, lowPrice: 0.0069262 },
    '17': { openPrice: 0.0069774, highPrice: 0.0071116, lowPrice: 0.0069333 },
    '21': { openPrice: 0.0069915, highPrice: 0.0072865, lowPrice: 0.0069877 },
    '01': { openPrice: 0.0066346, highPrice: 0.006814, lowPrice: 0.0065624 },
    '05': { openPrice: 0.0066935, highPrice: 0.0068279, lowPrice: 0.0066261 },
    '09': { openPrice: 0.0067077, highPrice: 0.0070172, lowPrice: 0.0066776 }
  },
  '2021-04-09': {
    '13': { openPrice: 0.0070301, highPrice: 0.0072601, lowPrice: 0.0070146 },
    '17': { openPrice: 0.0072595, highPrice: 0.0074869, lowPrice: 0.0072184 },
    '21': { openPrice: 0.0074749, highPrice: 0.0076522, lowPrice: 0.0074353 },
    '01': { openPrice: 0.0072399, highPrice: 0.007295, lowPrice: 0.0071429 },
    '05': { openPrice: 0.0072801, highPrice: 0.0072852, lowPrice: 0.0071226 },
    '09': { openPrice: 0.0072072, highPrice: 0.0072146, lowPrice: 0.0069777 }
  },
  '2021-04-10': {
    '13': { openPrice: 0.0080062, highPrice: 0.0080065, lowPrice: 0.0074966 },
    '17': { openPrice: 0.0078317, highPrice: 0.008048, lowPrice: 0.0077727 },
    '21': { openPrice: 0.0080018, highPrice: 0.0080378, lowPrice: 0.0078149 },
    '01': { openPrice: 0.007513, highPrice: 0.00766, lowPrice: 0.0074666 },
    '05': { openPrice: 0.0075132, highPrice: 0.0078075, lowPrice: 0.0074574 },
    '09': { openPrice: 0.0078051, highPrice: 0.0083112, lowPrice: 0.0077426 }
  },
  '2021-04-11': {
    '13': { openPrice: 0.0076894, highPrice: 0.0080407, lowPrice: 0.0076741 },
    '17': { openPrice: 0.0079379, highPrice: 0.0079819, lowPrice: 0.0078087 },
    '21': { openPrice: 0.0078879, highPrice: 0.00831, lowPrice: 0.0078467 },
    '01': { openPrice: 0.007879, highPrice: 0.0079221, lowPrice: 0.0076189 },
    '05': { openPrice: 0.0079054, highPrice: 0.0081139, lowPrice: 0.0078426 },
    '09': { openPrice: 0.0078869, highPrice: 0.007889, lowPrice: 0.00758 }
  },
  '2021-04-12': {
    '13': { openPrice: 0.0091299, highPrice: 0.0095746, lowPrice: 0.0090525 },
    '17': { openPrice: 0.0095672, highPrice: 0.0105113, lowPrice: 0.0089136 },
    '21': { openPrice: 0.0098585, highPrice: 0.0098623, lowPrice: 0.0093108 },
    '01': { openPrice: 0.0082635, highPrice: 0.0085, lowPrice: 0.0082188 },
    '05': { openPrice: 0.0083714, highPrice: 0.008843, lowPrice: 0.0083648 },
    '09': { openPrice: 0.0087649, highPrice: 0.0091985, lowPrice: 0.0085828 }
  },
  '2021-04-13': {
    '13': { openPrice: 0.009432, highPrice: 0.0095308, lowPrice: 0.0088223 },
    '17': { openPrice: 0.0090126, highPrice: 0.0091174, lowPrice: 0.00843 },
    '21': { openPrice: 0.008737, highPrice: 0.0093049, lowPrice: 0.0087194 },
    '01': { openPrice: 0.0095133, highPrice: 0.0098324, lowPrice: 0.0094656 },
    '05': { openPrice: 0.0097992, highPrice: 0.0102, lowPrice: 0.0097582 },
    '09': { openPrice: 0.0099706, highPrice: 0.0100253, lowPrice: 0.0093126 }
  },
  '2021-04-14': {
    '13': { openPrice: 0.0089167, highPrice: 0.0092048, lowPrice: 0.00888 },
    '17': { openPrice: 0.0089552, highPrice: 0.0091507, lowPrice: 0.0088366 },
    '21': { openPrice: 0.0089105, highPrice: 0.0089107, lowPrice: 0.0083531 },
    '01': { openPrice: 0.0088438, highPrice: 0.008958, lowPrice: 0.0086326 },
    '05': { openPrice: 0.0088999, highPrice: 0.0089557, lowPrice: 0.0086403 },
    '09': { openPrice: 0.0086721, highPrice: 0.0090278, lowPrice: 0.0086589 }
  },
  '2021-04-15': {
    '13': { openPrice: 0.0086479, highPrice: 0.0087705, lowPrice: 0.008617 },
    '17': { openPrice: 0.0087567, highPrice: 0.00885, lowPrice: 0.00866 },
    '21': { openPrice: 0.0086961, highPrice: 0.0088144, lowPrice: 0.0086818 },
    '01': { openPrice: 0.0086626, highPrice: 0.0089481, lowPrice: 0.0085405 },
    '05': { openPrice: 0.0086336, highPrice: 0.0087366, lowPrice: 0.008536 },
    '09': { openPrice: 0.0087294, highPrice: 0.0087399, lowPrice: 0.0085555 }
  },
  '2021-04-16': {
    '13': { openPrice: 0.0084371, highPrice: 0.0088886, lowPrice: 0.0081908 },
    '17': { openPrice: 0.0088076, highPrice: 0.0089, lowPrice: 0.008421 },
    '21': { openPrice: 0.0085763, highPrice: 0.0085806, lowPrice: 0.0081111 },
    '01': { openPrice: 0.0087872, highPrice: 0.0088527, lowPrice: 0.0086503 },
    '05': { openPrice: 0.0086915, highPrice: 0.0087203, lowPrice: 0.0085508 },
    '09': { openPrice: 0.0085786, highPrice: 0.0086089, lowPrice: 0.00828 }
  },
  '2021-04-17': {
    '13': { openPrice: 0.0085484, highPrice: 0.0087947, lowPrice: 0.0085459 },
    '17': { openPrice: 0.0086408, highPrice: 0.008768, lowPrice: 0.0084427 },
    '21': { openPrice: 0.0084734, highPrice: 0.0085939, lowPrice: 0.008452 },
    '01': { openPrice: 0.0084025, highPrice: 0.0085399, lowPrice: 0.008306 },
    '05': { openPrice: 0.0083332, highPrice: 0.0084676, lowPrice: 0.008269 },
    '09': { openPrice: 0.0082865, highPrice: 0.0085816, lowPrice: 0.0082588 }
  },
  '2021-04-18': {
    '13': { openPrice: 0.0087462, highPrice: 0.0087919, lowPrice: 0.0082528 },
    '17': { openPrice: 0.0085656, highPrice: 0.008588, lowPrice: 0.0080717 },
    '21': { openPrice: 0.0081024, highPrice: 0.0084729, lowPrice: 0.0080727 },
    '01': { openPrice: 0.0084794, highPrice: 0.0086245, lowPrice: 0.0084345 },
    '05': { openPrice: 0.0085357, highPrice: 0.0087405, lowPrice: 0.0085113 },
    '09': { openPrice: 0.0085721, highPrice: 0.00878, lowPrice: 0.0083531 }
  },
  '2021-04-19': {
    '13': { openPrice: 0.0093265, highPrice: 0.0094197, lowPrice: 0.0091231 },
    '17': { openPrice: 0.0093102, highPrice: 0.0093592, lowPrice: 0.0089466 },
    '21': { openPrice: 0.0092911, highPrice: 0.0093008, lowPrice: 0.008795 },
    '01': { openPrice: 0.0084287, highPrice: 0.0085982, lowPrice: 0.0083163 },
    '05': { openPrice: 0.0085149, highPrice: 0.0085856, lowPrice: 0.0083886 },
    '09': { openPrice: 0.0085732, highPrice: 0.0094219, lowPrice: 0.008408 }
  },
  '2021-04-20': {
    '13': { openPrice: 0.0088953, highPrice: 0.0092839, lowPrice: 0.00887 },
    '17': { openPrice: 0.0090775, highPrice: 0.00941, lowPrice: 0.0090473 },
    '21': { openPrice: 0.0093763, highPrice: 0.0096444, lowPrice: 0.009215 },
    '01': { openPrice: 0.0088699, highPrice: 0.009161, lowPrice: 0.0088261 },
    '05': { openPrice: 0.0090255, highPrice: 0.0091946, lowPrice: 0.0089637 },
    '09': { openPrice: 0.0090592, highPrice: 0.009122, lowPrice: 0.0087085 }
  },
  '2021-04-21': {
    '13': { openPrice: 0.0105323, highPrice: 0.011, lowPrice: 0.0104825 },
    '17': { openPrice: 0.0107342, highPrice: 0.0107973, lowPrice: 0.010179 },
    '21': { openPrice: 0.0103378, highPrice: 0.0106536, lowPrice: 0.0102225 },
    '01': { openPrice: 0.0096446, highPrice: 0.0103966, lowPrice: 0.0095719 },
    '05': { openPrice: 0.0103832, highPrice: 0.0104134, lowPrice: 0.0098043 },
    '09': { openPrice: 0.0104, highPrice: 0.010685, lowPrice: 0.01029 }
  },
  '2021-04-22': {
    '13': { openPrice: 0.0101369, highPrice: 0.01041, lowPrice: 0.0100871 },
    '17': { openPrice: 0.0102636, highPrice: 0.0103877, lowPrice: 0.010102 },
    '21': { openPrice: 0.0103857, highPrice: 0.0105999, lowPrice: 0.0102767 },
    '01': { openPrice: 0.0103743, highPrice: 0.01052, lowPrice: 0.010255 },
    '05': { openPrice: 0.010402, highPrice: 0.010402, lowPrice: 0.00989 },
    '09': { openPrice: 0.0101069, highPrice: 0.0103943, lowPrice: 0.0099697 }
  },
  '2021-04-23': {
    '13': { openPrice: 0.0100626, highPrice: 0.0101029, lowPrice: 0.0096495 },
    '17': { openPrice: 0.0097355, highPrice: 0.0103767, lowPrice: 0.0096438 },
    '21': { openPrice: 0.0103423, highPrice: 0.0104148, lowPrice: 0.0099149 },
    '01': { openPrice: 0.0105597, highPrice: 0.0105891, lowPrice: 0.009768 },
    '05': { openPrice: 0.0099443, highPrice: 0.0100573, lowPrice: 0.0095 },
    '09': { openPrice: 0.0097698, highPrice: 0.010064, lowPrice: 0.0092051 }
  },
  '2021-04-24': {
    '13': { openPrice: 0.0104376, highPrice: 0.01046, lowPrice: 0.0102402 },
    '17': { openPrice: 0.0103222, highPrice: 0.0103879, lowPrice: 0.0099041 },
    '21': { openPrice: 0.0099933, highPrice: 0.010148, lowPrice: 0.0099591 },
    '01': { openPrice: 0.0101349, highPrice: 0.0103, lowPrice: 0.01005 },
    '05': { openPrice: 0.0102088, highPrice: 0.0103812, lowPrice: 0.010054 },
    '09': { openPrice: 0.0103031, highPrice: 0.0104951, lowPrice: 0.0100239 }
  },
  '2021-04-25': {
    '13': { openPrice: 0.0097984, highPrice: 0.0098154, lowPrice: 0.0097891 },
    '17': { openPrice: 0.0098159, highPrice: 0.010138, lowPrice: 0.0098097 },
    '21': { openPrice: 0.01011, highPrice: 0.0102609, lowPrice: 0.010108 },
    '01': { openPrice: 0.0100716, highPrice: 0.0101, lowPrice: 0.0099624 },
    '05': { openPrice: 0.0099696, highPrice: 0.010032, lowPrice: 0.0099 },
    '09': { openPrice: 0.0099276, highPrice: 0.0100297, lowPrice: 0.0097795 }
  },
  '2021-04-26': {
    '13': { openPrice: 0.0101708, highPrice: 0.0104134, lowPrice: 0.010051 },
    '17': { openPrice: 0.0102072, highPrice: 0.0102653, lowPrice: 0.0101 },
    '21': { openPrice: 0.010105, highPrice: 0.010126, lowPrice: 0.00993 },
    '01': { openPrice: 0.0101883, highPrice: 0.0102454, lowPrice: 0.0100182 },
    '05': { openPrice: 0.0100415, highPrice: 0.0103843, lowPrice: 0.01001 },
    '09': { openPrice: 0.010292, highPrice: 0.0103345, lowPrice: 0.0100226 }
  },
  '2021-04-27': {
    '13': { openPrice: 0.009915, highPrice: 0.010018, lowPrice: 0.009862 },
    '17': { openPrice: 0.009902, highPrice: 0.0104842, lowPrice: 0.009887 },
    '21': { openPrice: 0.010438, highPrice: 0.010533, lowPrice: 0.010164 },
    '01': { openPrice: 0.010041, highPrice: 0.01005, lowPrice: 0.009921 },
    '05': { openPrice: 0.00995, highPrice: 0.009999, lowPrice: 0.00972 },
    '09': { openPrice: 0.009913, highPrice: 0.009935, lowPrice: 0.009768 }
  },
  '2021-04-28': {
    '13': { openPrice: 0.01022, highPrice: 0.010281, lowPrice: 0.009996 },
    '17': { openPrice: 0.010221, highPrice: 0.010264, lowPrice: 0.010055 },
    '21': { openPrice: 0.01021, highPrice: 0.010251, lowPrice: 0.010133 },
    '01': { openPrice: 0.010312, highPrice: 0.010333, lowPrice: 0.010183 },
    '05': { openPrice: 0.010257, highPrice: 0.01043, lowPrice: 0.010183 },
    '09': { openPrice: 0.01034, highPrice: 0.010456, lowPrice: 0.0102 }
  },
  '2021-04-29': {
    '13': { openPrice: 0.010491, highPrice: 0.010611, lowPrice: 0.010351 },
    '17': { openPrice: 0.010606, highPrice: 0.011142, lowPrice: 0.010601 },
    '21': { openPrice: 0.010968, highPrice: 0.0113, lowPrice: 0.010919 },
    '01': { openPrice: 0.010217, highPrice: 0.010255, lowPrice: 0.010157 },
    '05': { openPrice: 0.010173, highPrice: 0.01028, lowPrice: 0.010035 },
    '09': { openPrice: 0.010262, highPrice: 0.010564, lowPrice: 0.010241 }
  },
  '2021-04-30': {
    '13': { openPrice: 0.011266, highPrice: 0.01141, lowPrice: 0.011102 },
    '17': { openPrice: 0.011353, highPrice: 0.011408, lowPrice: 0.011072 },
    '21': { openPrice: 0.01112, highPrice: 0.0112, lowPrice: 0.010578 },
    '01': { openPrice: 0.010975, highPrice: 0.01102, lowPrice: 0.01074 },
    '05': { openPrice: 0.010983, highPrice: 0.01123, lowPrice: 0.010907 },
    '09': { openPrice: 0.011206, highPrice: 0.011435, lowPrice: 0.010994 }
  },
  '2021-05-01': {
    '13': { openPrice: 0.010931, highPrice: 0.010983, lowPrice: 0.01078 },
    '17': { openPrice: 0.010846, highPrice: 0.010912, lowPrice: 0.010657 },
    '21': { openPrice: 0.010845, highPrice: 0.010873, lowPrice: 0.010719 },
    '01': { openPrice: 0.010605, highPrice: 0.011072, lowPrice: 0.010538 },
    '05': { openPrice: 0.010982, highPrice: 0.010986, lowPrice: 0.010741 },
    '09': { openPrice: 0.010794, highPrice: 0.011049, lowPrice: 0.01055 }
  },
  '2021-05-02': {
    '13': { openPrice: 0.010683, highPrice: 0.010829, lowPrice: 0.010574 },
    '17': { openPrice: 0.010762, highPrice: 0.010892, lowPrice: 0.010673 },
    '21': { openPrice: 0.010856, highPrice: 0.011077, lowPrice: 0.010812 },
    '01': { openPrice: 0.0108, highPrice: 0.010872, lowPrice: 0.010736 },
    '05': { openPrice: 0.010759, highPrice: 0.010804, lowPrice: 0.01069 },
    '09': { openPrice: 0.010732, highPrice: 0.010882, lowPrice: 0.010641 }
  },
  '2021-05-03': {
    '13': { openPrice: 0.010789, highPrice: 0.010972, lowPrice: 0.010754 },
    '17': { openPrice: 0.010817, highPrice: 0.011112, lowPrice: 0.01072 },
    '21': { openPrice: 0.011043, highPrice: 0.0115, lowPrice: 0.011043 },
    '01': { openPrice: 0.011002, highPrice: 0.011046, lowPrice: 0.010972 },
    '05': { openPrice: 0.011035, highPrice: 0.011048, lowPrice: 0.010934 },
    '09': { openPrice: 0.010989, highPrice: 0.011009, lowPrice: 0.01072 }
  },
  '2021-05-04': {
    '13': { openPrice: 0.011522, highPrice: 0.01188, lowPrice: 0.01152 },
    '17': { openPrice: 0.011697, highPrice: 0.011732, lowPrice: 0.011522 },
    '21': { openPrice: 0.011628, highPrice: 0.011632, lowPrice: 0.011262 },
    '01': { openPrice: 0.011472, highPrice: 0.011945, lowPrice: 0.011446 },
    '05': { openPrice: 0.011743, highPrice: 0.011844, lowPrice: 0.011629 },
    '09': { openPrice: 0.011831, highPrice: 0.011857, lowPrice: 0.011283 }
  },
  '2021-05-05': {
    '13': { openPrice: 0.011458, highPrice: 0.011724, lowPrice: 0.011345 },
    '17': { openPrice: 0.011715, highPrice: 0.011811, lowPrice: 0.011637 },
    '21': { openPrice: 0.011664, highPrice: 0.01175, lowPrice: 0.011217 },
    '01': { openPrice: 0.01139, highPrice: 0.011601, lowPrice: 0.011331 },
    '05': { openPrice: 0.011565, highPrice: 0.011607, lowPrice: 0.011391 },
    '09': { openPrice: 0.011452, highPrice: 0.0116, lowPrice: 0.011345 }
  },
  '2021-05-06': {
    '13': { openPrice: 0.011299, highPrice: 0.011335, lowPrice: 0.011222 },
    '17': { openPrice: 0.011272, highPrice: 0.011309, lowPrice: 0.011132 },
    '21': { openPrice: 0.011172, highPrice: 0.011271, lowPrice: 0.011139 },
    '01': { openPrice: 0.011218, highPrice: 0.011379, lowPrice: 0.010869 },
    '05': { openPrice: 0.011373, highPrice: 0.011429, lowPrice: 0.011283 },
    '09': { openPrice: 0.011338, highPrice: 0.011364, lowPrice: 0.011129 }
  },
  '2021-05-07': {
    '13': { openPrice: 0.011106, highPrice: 0.011186, lowPrice: 0.011051 },
    '17': { openPrice: 0.011135, highPrice: 0.011152, lowPrice: 0.011037 },
    '21': { openPrice: 0.01107, highPrice: 0.011143, lowPrice: 0.010939 },
    '01': { openPrice: 0.011204, highPrice: 0.011313, lowPrice: 0.011075 },
    '05': { openPrice: 0.01126, highPrice: 0.011299, lowPrice: 0.011177 },
    '09': { openPrice: 0.011242, highPrice: 0.011243, lowPrice: 0.010998 }
  },
  '2021-05-08': {
    '13': { openPrice: 0.010887, highPrice: 0.010936, lowPrice: 0.01074 },
    '17': { openPrice: 0.010761, highPrice: 0.010836, lowPrice: 0.010663 },
    '21': { openPrice: 0.010779, highPrice: 0.011158, lowPrice: 0.01064 },
    '01': { openPrice: 0.011056, highPrice: 0.011059, lowPrice: 0.010852 },
    '05': { openPrice: 0.010873, highPrice: 0.010965, lowPrice: 0.01079 },
    '09': { openPrice: 0.010892, highPrice: 0.010945, lowPrice: 0.01083 }
  },
  '2021-05-09': {
    '13': { openPrice: 0.010945, highPrice: 0.011145, lowPrice: 0.010882 },
    '17': { openPrice: 0.011128, highPrice: 0.0118, lowPrice: 0.011095 },
    '21': { openPrice: 0.011551, highPrice: 0.011674, lowPrice: 0.011417 },
    '01': { openPrice: 0.0111, highPrice: 0.011228, lowPrice: 0.010898 },
    '05': { openPrice: 0.011078, highPrice: 0.011097, lowPrice: 0.010902 },
    '09': { openPrice: 0.010977, highPrice: 0.011069, lowPrice: 0.010889 }
  },
  '2021-05-10': {
    '13': { openPrice: 0.011415, highPrice: 0.011744, lowPrice: 0.011384 },
    '17': { openPrice: 0.011611, highPrice: 0.011648, lowPrice: 0.01111 },
    '21': { openPrice: 0.011445, highPrice: 0.011547, lowPrice: 0.011413 },
    '01': { openPrice: 0.011602, highPrice: 0.01161, lowPrice: 0.011443 },
    '05': { openPrice: 0.011503, highPrice: 0.011513, lowPrice: 0.01134 },
    '09': { openPrice: 0.011367, highPrice: 0.011663, lowPrice: 0.011299 }
  },
  '2021-05-11': {
    '13': { openPrice: 0.011483, highPrice: 0.011768, lowPrice: 0.011445 },
    '17': { openPrice: 0.011746, highPrice: 0.011928, lowPrice: 0.011611 },
    '21': { openPrice: 0.011857, highPrice: 0.011929, lowPrice: 0.011741 },
    '01': { openPrice: 0.011413, highPrice: 0.01169, lowPrice: 0.01137 },
    '05': { openPrice: 0.011487, highPrice: 0.011555, lowPrice: 0.010978 },
    '09': { openPrice: 0.01131, highPrice: 0.011621, lowPrice: 0.011268 }
  },
  '2021-05-12': {
    '13': { openPrice: 0.011828, highPrice: 0.011866, lowPrice: 0.011717 },
    '17': { openPrice: 0.011744, highPrice: 0.011819, lowPrice: 0.011685 },
    '21': { openPrice: 0.011772, highPrice: 0.011843, lowPrice: 0.011709 },
    '01': { openPrice: 0.011917, highPrice: 0.011925, lowPrice: 0.011727 },
    '05': { openPrice: 0.011817, highPrice: 0.011886, lowPrice: 0.011639 },
    '09': { openPrice: 0.011851, highPrice: 0.0119, lowPrice: 0.011715 }
  },
  '2021-05-13': {
    '13': { openPrice: 0.012042, highPrice: 0.012338, lowPrice: 0.011954 },
    '17': { openPrice: 0.012241, highPrice: 0.01231, lowPrice: 0.0116 },
    '21': { openPrice: 0.011884, highPrice: 0.012154, lowPrice: 0.011764 },
    '01': { openPrice: 0.011712, highPrice: 0.011805, lowPrice: 0.011594 },
    '05': { openPrice: 0.011795, highPrice: 0.012074, lowPrice: 0.011786 },
    '09': { openPrice: 0.011991, highPrice: 0.012352, lowPrice: 0.01184 }
  },
  '2021-05-14': {
    '13': { openPrice: 0.01169, highPrice: 0.01198, lowPrice: 0.011674 },
    '17': { openPrice: 0.011952, highPrice: 0.012037, lowPrice: 0.011872 },
    '21': { openPrice: 0.012014, highPrice: 0.012044, lowPrice: 0.011836 },
    '01': { openPrice: 0.011965, highPrice: 0.01209, lowPrice: 0.011221 },
    '05': { openPrice: 0.011341, highPrice: 0.011533, lowPrice: 0.011281 },
    '09': { openPrice: 0.011496, highPrice: 0.011799, lowPrice: 0.011426 }
  },
  '2021-05-15': {
    '13': { openPrice: 0.012138, highPrice: 0.012155, lowPrice: 0.011935 },
    '17': { openPrice: 0.012, highPrice: 0.012094, lowPrice: 0.011949 },
    '21': { openPrice: 0.012004, highPrice: 0.012061, lowPrice: 0.0119 },
    '01': { openPrice: 0.011944, highPrice: 0.012021, lowPrice: 0.011853 },
    '05': { openPrice: 0.011944, highPrice: 0.0121, lowPrice: 0.01188 },
    '09': { openPrice: 0.012094, highPrice: 0.012166, lowPrice: 0.011964 }
  },
  '2021-05-16': {
    '13': { openPrice: 0.011971, highPrice: 0.01203, lowPrice: 0.011793 },
    '17': { openPrice: 0.012005, highPrice: 0.012223, lowPrice: 0.011997 },
    '21': { openPrice: 0.012216, highPrice: 0.012232, lowPrice: 0.011895 },
    '01': { openPrice: 0.011967, highPrice: 0.01205, lowPrice: 0.01189 },
    '05': { openPrice: 0.011949, highPrice: 0.01209, lowPrice: 0.011893 },
    '09': { openPrice: 0.012048, highPrice: 0.01213, lowPrice: 0.011971 }
  },
  '2021-05-17': {
    '13': { openPrice: 0.011815, highPrice: 0.011951, lowPrice: 0.01145 },
    '17': { openPrice: 0.011905, highPrice: 0.011937, lowPrice: 0.011752 },
    '21': { openPrice: 0.011782, highPrice: 0.011928, lowPrice: 0.011624 },
    '01': { openPrice: 0.011986, highPrice: 0.012299, lowPrice: 0.01197 },
    '05': { openPrice: 0.012076, highPrice: 0.012269, lowPrice: 0.01202 },
    '09': { openPrice: 0.012156, highPrice: 0.012158, lowPrice: 0.011633 }
  },
  '2021-05-18': {
    '13': { openPrice: 0.011695, highPrice: 0.01173, lowPrice: 0.011586 },
    '17': { openPrice: 0.011628, highPrice: 0.011703, lowPrice: 0.011541 },
    '21': { openPrice: 0.011681, highPrice: 0.011775, lowPrice: 0.011598 },
    '01': { openPrice: 0.011652, highPrice: 0.011849, lowPrice: 0.011617 },
    '05': { openPrice: 0.01174, highPrice: 0.011866, lowPrice: 0.011714 },
    '09': { openPrice: 0.011763, highPrice: 0.011832, lowPrice: 0.011501 }
  },
  '2021-05-19': {
    '13': { openPrice: 0.01116, highPrice: 0.011284, lowPrice: 0.010507 },
    '17': { openPrice: 0.010861, highPrice: 0.010895, lowPrice: 0.009947 },
    '21': { openPrice: 0.010181, highPrice: 0.010383, lowPrice: 0.0086625 },
    '01': { openPrice: 0.011717, highPrice: 0.01199, lowPrice: 0.011687 },
    '05': { openPrice: 0.011848, highPrice: 0.011887, lowPrice: 0.011787 },
    '09': { openPrice: 0.011852, highPrice: 0.011912, lowPrice: 0.011137 }
  },
  '2021-05-20': {
    '13': { openPrice: 0.008905, highPrice: 0.009389, lowPrice: 0.008822 },
    '17': { openPrice: 0.00928, highPrice: 0.009368, lowPrice: 0.008969 },
    '21': { openPrice: 0.009231, highPrice: 0.009999, lowPrice: 0.009078 },
    '01': { openPrice: 0.01016, highPrice: 0.010242, lowPrice: 0.009377 },
    '05': { openPrice: 0.009772, highPrice: 0.009868, lowPrice: 0.00912 },
    '09': { openPrice: 0.009132, highPrice: 0.009331, lowPrice: 0.008 }
  },
  '2021-05-21': {
    '13': { openPrice: 0.009644, highPrice: 0.009763, lowPrice: 0.009547 },
    '17': { openPrice: 0.009637, highPrice: 0.009734, lowPrice: 0.009251 },
    '21': { openPrice: 0.009272, highPrice: 0.009394, lowPrice: 0.008611 },
    '01': { openPrice: 0.009688, highPrice: 0.0098, lowPrice: 0.009447 },
    '05': { openPrice: 0.009724, highPrice: 0.009811, lowPrice: 0.009519 },
    '09': { openPrice: 0.009654, highPrice: 0.009962, lowPrice: 0.009573 }
  },
  '2021-05-22': {
    '13': { openPrice: 0.008512, highPrice: 0.008538, lowPrice: 0.008036 },
    '17': { openPrice: 0.008282, highPrice: 0.008492, lowPrice: 0.00827 },
    '21': { openPrice: 0.008437, highPrice: 0.008634, lowPrice: 0.008243 },
    '01': { openPrice: 0.008906, highPrice: 0.009185, lowPrice: 0.008534 },
    '05': { openPrice: 0.00876, highPrice: 0.008799, lowPrice: 0.008146 },
    '09': { openPrice: 0.008752, highPrice: 0.008863, lowPrice: 0.008437 }
  },
  '2021-05-23': {
    '13': { openPrice: 0.008006, highPrice: 0.008017, lowPrice: 0.007701 },
    '17': { openPrice: 0.00777, highPrice: 0.007773, lowPrice: 0.007251 },
    '21': { openPrice: 0.00729, highPrice: 0.00731, lowPrice: 0.007 },
    '01': { openPrice: 0.008306, highPrice: 0.00832, lowPrice: 0.0078 },
    '05': { openPrice: 0.008018, highPrice: 0.008212, lowPrice: 0.007961 },
    '09': { openPrice: 0.008003, highPrice: 0.008204, lowPrice: 0.007941 }
  },
  '2021-05-24': {
    '13': { openPrice: 0.007758, highPrice: 0.008093, lowPrice: 0.007682 },
    '17': { openPrice: 0.008078, highPrice: 0.008267, lowPrice: 0.007891 },
    '21': { openPrice: 0.008145, highPrice: 0.008556, lowPrice: 0.00807 },
    '01': { openPrice: 0.007101, highPrice: 0.007182, lowPrice: 0.006783 },
    '05': { openPrice: 0.007149, highPrice: 0.007671, lowPrice: 0.007145 },
    '09': { openPrice: 0.007517, highPrice: 0.007889, lowPrice: 0.007425 }
  },
  '2021-05-25': {
    '13': { openPrice: 0.00902, highPrice: 0.009217, lowPrice: 0.008743 },
    '17': { openPrice: 0.00914, highPrice: 0.009155, lowPrice: 0.00835 },
    '21': { openPrice: 0.008477, highPrice: 0.008852, lowPrice: 0.008448 },
    '01': { openPrice: 0.008488, highPrice: 0.008727, lowPrice: 0.008293 },
    '05': { openPrice: 0.008701, highPrice: 0.008952, lowPrice: 0.008638 },
    '09': { openPrice: 0.008909, highPrice: 0.009496, lowPrice: 0.008827 }
  },
  '2021-05-26': {
    '13': { openPrice: 0.009216, highPrice: 0.009511, lowPrice: 0.009098 },
    '17': { openPrice: 0.009475, highPrice: 0.00956, lowPrice: 0.009204 },
    '21': { openPrice: 0.009475, highPrice: 0.009505, lowPrice: 0.009144 },
    '01': { openPrice: 0.008834, highPrice: 0.008898, lowPrice: 0.00857 },
    '05': { openPrice: 0.008642, highPrice: 0.009091, lowPrice: 0.008612 },
    '09': { openPrice: 0.008951, highPrice: 0.009255, lowPrice: 0.008865 }
  },
  '2021-05-27': {
    '13': { openPrice: 0.009247, highPrice: 0.009476, lowPrice: 0.009199 },
    '17': { openPrice: 0.009458, highPrice: 0.009521, lowPrice: 0.009378 },
    '21': { openPrice: 0.009493, highPrice: 0.00965, lowPrice: 0.009431 },
    '01': { openPrice: 0.009441, highPrice: 0.009602, lowPrice: 0.009425 },
    '05': { openPrice: 0.009527, highPrice: 0.009673, lowPrice: 0.009453 },
    '09': { openPrice: 0.00966, highPrice: 0.00967, lowPrice: 0.009118 }
  },
  '2021-05-28': {
    '13': { openPrice: 0.00954, highPrice: 0.009587, lowPrice: 0.0091 },
    '17': { openPrice: 0.009281, highPrice: 0.009281, lowPrice: 0.008895 },
    '21': { openPrice: 0.008974, highPrice: 0.009314, lowPrice: 0.008941 },
    '01': { openPrice: 0.00956, highPrice: 0.009631, lowPrice: 0.00947 },
    '05': { openPrice: 0.009625, highPrice: 0.009626, lowPrice: 0.009481 },
    '09': { openPrice: 0.009599, highPrice: 0.009624, lowPrice: 0.009469 }
  },
  '2021-05-29': {
    '13': { openPrice: 0.009465, highPrice: 0.009469, lowPrice: 0.009219 },
    '17': { openPrice: 0.009285, highPrice: 0.009332, lowPrice: 0.009162 },
    '21': { openPrice: 0.009297, highPrice: 0.00931, lowPrice: 0.00895 },
    '01': { openPrice: 0.009188, highPrice: 0.009355, lowPrice: 0.009057 },
    '05': { openPrice: 0.00932, highPrice: 0.00934, lowPrice: 0.009116 },
    '09': { openPrice: 0.009221, highPrice: 0.009489, lowPrice: 0.009204 }
  },
  '2021-05-30': {
    '13': { openPrice: 0.00891, highPrice: 0.009233, lowPrice: 0.008858 },
    '17': { openPrice: 0.009205, highPrice: 0.009349, lowPrice: 0.00917 },
    '21': { openPrice: 0.009291, highPrice: 0.009311, lowPrice: 0.009038 },
    '01': { openPrice: 0.00899, highPrice: 0.009089, lowPrice: 0.008778 },
    '05': { openPrice: 0.008812, highPrice: 0.008899, lowPrice: 0.008753 },
    '09': { openPrice: 0.008821, highPrice: 0.008926, lowPrice: 0.008701 }
  },
  '2021-05-31': {
    '13': { openPrice: 0.009002, highPrice: 0.009268, lowPrice: 0.008991 },
    '17': { openPrice: 0.009156, highPrice: 0.00951, lowPrice: 0.009126 },
    '21': { openPrice: 0.009412, highPrice: 0.009504, lowPrice: 0.009246 },
    '01': { openPrice: 0.009107, highPrice: 0.009216, lowPrice: 0.009065 },
    '05': { openPrice: 0.009189, highPrice: 0.00925, lowPrice: 0.0091 },
    '09': { openPrice: 0.009136, highPrice: 0.009174, lowPrice: 0.008931 }
  },
  '2021-06-01': {
    '13': { openPrice: 0.009415, highPrice: 0.009639, lowPrice: 0.009393 },
    '17': { openPrice: 0.009481, highPrice: 0.00967, lowPrice: 0.009439 },
    '21': { openPrice: 0.009666, highPrice: 0.00967, lowPrice: 0.00948 },
    '01': { openPrice: 0.009383, highPrice: 0.00946, lowPrice: 0.009263 },
    '05': { openPrice: 0.009345, highPrice: 0.009504, lowPrice: 0.009345 },
    '09': { openPrice: 0.009489, highPrice: 0.009646, lowPrice: 0.009406 }
  },
  '2021-06-02': {
    '13': { openPrice: 0.009844, highPrice: 0.010107, lowPrice: 0.009808 },
    '17': { openPrice: 0.010078, highPrice: 0.010457, lowPrice: 0.010074 },
    '21': { openPrice: 0.01043, highPrice: 0.011, lowPrice: 0.01043 },
    '01': { openPrice: 0.009628, highPrice: 0.009897, lowPrice: 0.009614 },
    '05': { openPrice: 0.009719, highPrice: 0.009898, lowPrice: 0.009715 },
    '09': { openPrice: 0.009875, highPrice: 0.009923, lowPrice: 0.009745 }
  },
  '2021-06-03': {
    '13': { openPrice: 0.010833, highPrice: 0.010896, lowPrice: 0.010608 },
    '17': { openPrice: 0.010659, highPrice: 0.010993, lowPrice: 0.010635 },
    '21': { openPrice: 0.010883, highPrice: 0.010921, lowPrice: 0.010658 },
    '01': { openPrice: 0.010883, highPrice: 0.010906, lowPrice: 0.010671 },
    '05': { openPrice: 0.010851, highPrice: 0.010851, lowPrice: 0.01062 },
    '09': { openPrice: 0.010686, highPrice: 0.010838, lowPrice: 0.010493 }
  },
  '2021-06-04': {
    '13': { openPrice: 0.010761, highPrice: 0.010811, lowPrice: 0.010063 },
    '17': { openPrice: 0.010274, highPrice: 0.010591, lowPrice: 0.0102 },
    '21': { openPrice: 0.010358, highPrice: 0.010589, lowPrice: 0.010227 },
    '01': { openPrice: 0.010749, highPrice: 0.010863, lowPrice: 0.010624 },
    '05': { openPrice: 0.010732, highPrice: 0.01097, lowPrice: 0.01072 },
    '09': { openPrice: 0.010922, highPrice: 0.010936, lowPrice: 0.010529 }
  },
  '2021-06-05': {
    '13': { openPrice: 0.010966, highPrice: 0.011258, lowPrice: 0.010966 },
    '17': { openPrice: 0.011132, highPrice: 0.011223, lowPrice: 0.010783 },
    '21': { openPrice: 0.010903, highPrice: 0.01108, lowPrice: 0.010855 },
    '01': { openPrice: 0.010527, highPrice: 0.010685, lowPrice: 0.010482 },
    '05': { openPrice: 0.010641, highPrice: 0.010731, lowPrice: 0.010557 },
    '09': { openPrice: 0.010605, highPrice: 0.011029, lowPrice: 0.010583 }
  },
  '2021-06-06': {
    '13': { openPrice: 0.010914, highPrice: 0.010997, lowPrice: 0.010828 },
    '17': { openPrice: 0.01091, highPrice: 0.010942, lowPrice: 0.010776 },
    '21': { openPrice: 0.010839, highPrice: 0.010876, lowPrice: 0.01073 },
    '01': { openPrice: 0.011076, highPrice: 0.011076, lowPrice: 0.010819 },
    '05': { openPrice: 0.010828, highPrice: 0.011008, lowPrice: 0.010712 },
    '09': { openPrice: 0.010987, highPrice: 0.011056, lowPrice: 0.010883 }
  },
  '2021-06-07': {
    '13': { openPrice: 0.010962, highPrice: 0.011032, lowPrice: 0.010888 },
    '17': { openPrice: 0.010939, highPrice: 0.011098, lowPrice: 0.0109 },
    '21': { openPrice: 0.010964, highPrice: 0.011035, lowPrice: 0.010926 },
    '01': { openPrice: 0.010855, highPrice: 0.010882, lowPrice: 0.010768 },
    '05': { openPrice: 0.010814, highPrice: 0.011013, lowPrice: 0.010794 },
    '09': { openPrice: 0.010999, highPrice: 0.011102, lowPrice: 0.010929 }
  },
  '2021-06-08': {
    '13': { openPrice: 0.010547, highPrice: 0.01067, lowPrice: 0.010418 },
    '17': { openPrice: 0.01061, highPrice: 0.010798, lowPrice: 0.010573 },
    '21': { openPrice: 0.010712, highPrice: 0.010741, lowPrice: 0.010251 },
    '01': { openPrice: 0.010957, highPrice: 0.010964, lowPrice: 0.01077 },
    '05': { openPrice: 0.010914, highPrice: 0.01092, lowPrice: 0.0105 },
    '09': { openPrice: 0.010665, highPrice: 0.010794, lowPrice: 0.010213 }
  },
  '2021-06-09': {
    '13': { openPrice: 0.010392, highPrice: 0.010505, lowPrice: 0.010315 },
    '17': { openPrice: 0.010329, highPrice: 0.01035, lowPrice: 0.010197 },
    '21': { openPrice: 0.010263, highPrice: 0.010303, lowPrice: 0.009946 },
    '01': { openPrice: 0.010449, highPrice: 0.010681, lowPrice: 0.01041 },
    '05': { openPrice: 0.01058, highPrice: 0.010603, lowPrice: 0.010457 },
    '09': { openPrice: 0.01056, highPrice: 0.010578, lowPrice: 0.010278 }
  },
  '2021-06-10': {
    '13': { openPrice: 0.01, highPrice: 0.010005, lowPrice: 0.009829 },
    '17': { openPrice: 0.009887, highPrice: 0.009914, lowPrice: 0.00963 },
    '21': { openPrice: 0.009681, highPrice: 0.009747, lowPrice: 0.009557 },
    '01': { openPrice: 0.010131, highPrice: 0.010284, lowPrice: 0.010037 },
    '05': { openPrice: 0.010111, highPrice: 0.01019, lowPrice: 0.009994 },
    '09': { openPrice: 0.010043, highPrice: 0.010058, lowPrice: 0.009929 }
  },
  '2021-06-11': {
    '13': { openPrice: 0.009673, highPrice: 0.00972, lowPrice: 0.009511 },
    '17': { openPrice: 0.009533, highPrice: 0.00978, lowPrice: 0.009529 },
    '21': { openPrice: 0.009633, highPrice: 0.009731, lowPrice: 0.009628 },
    '01': { openPrice: 0.009677, highPrice: 0.009688, lowPrice: 0.009557 },
    '05': { openPrice: 0.009561, highPrice: 0.009725, lowPrice: 0.009538 },
    '09': { openPrice: 0.009594, highPrice: 0.009766, lowPrice: 0.009474 }
  },
  '2021-06-12': {
    '13': { openPrice: 0.009337, highPrice: 0.009492, lowPrice: 0.009236 },
    '17': { openPrice: 0.009484, highPrice: 0.009524, lowPrice: 0.009411 },
    '21': { openPrice: 0.009495, highPrice: 0.009676, lowPrice: 0.009487 },
    '01': { openPrice: 0.009647, highPrice: 0.009679, lowPrice: 0.009519 },
    '05': { openPrice: 0.009524, highPrice: 0.00954, lowPrice: 0.009212 },
    '09': { openPrice: 0.009261, highPrice: 0.009348, lowPrice: 0.009164 }
  },
  '2021-06-13': {
    '13': { openPrice: 0.009706, highPrice: 0.00971, lowPrice: 0.009506 },
    '17': { openPrice: 0.009513, highPrice: 0.009538, lowPrice: 0.009379 },
    '21': { openPrice: 0.00938, highPrice: 0.009391, lowPrice: 0.009229 },
    '01': { openPrice: 0.009632, highPrice: 0.009707, lowPrice: 0.009588 },
    '05': { openPrice: 0.009675, highPrice: 0.009702, lowPrice: 0.00958 },
    '09': { openPrice: 0.009671, highPrice: 0.009735, lowPrice: 0.009628 }
  },
  '2021-06-14': {
    '13': { openPrice: 0.009212, highPrice: 0.009239, lowPrice: 0.009118 },
    '17': { openPrice: 0.009123, highPrice: 0.009172, lowPrice: 0.009107 },
    '21': { openPrice: 0.009125, highPrice: 0.009258, lowPrice: 0.008958 },
    '01': { openPrice: 0.009282, highPrice: 0.009473, lowPrice: 0.009164 },
    '05': { openPrice: 0.009388, highPrice: 0.009457, lowPrice: 0.009249 },
    '09': { openPrice: 0.009377, highPrice: 0.009414, lowPrice: 0.0092 }
  },
  '2021-06-15': {
    '13': { openPrice: 0.009222, highPrice: 0.009373, lowPrice: 0.009222 },
    '17': { openPrice: 0.009323, highPrice: 0.0094, lowPrice: 0.009223 },
    '21': { openPrice: 0.009268, highPrice: 0.009268, lowPrice: 0.00912 },
    '01': { openPrice: 0.009223, highPrice: 0.009279, lowPrice: 0.009154 },
    '05': { openPrice: 0.009211, highPrice: 0.009217, lowPrice: 0.009113 },
    '09': { openPrice: 0.009138, highPrice: 0.009299, lowPrice: 0.009138 }
  },
  '2021-06-16': {
    '13': { openPrice: 0.009029, highPrice: 0.009098, lowPrice: 0.009016 },
    '17': { openPrice: 0.009083, highPrice: 0.00911, lowPrice: 0.009 },
    '21': { openPrice: 0.009032, highPrice: 0.009052, lowPrice: 0.008945 },
    '01': { openPrice: 0.009143, highPrice: 0.009193, lowPrice: 0.009039 },
    '05': { openPrice: 0.009157, highPrice: 0.009192, lowPrice: 0.009119 },
    '09': { openPrice: 0.00913, highPrice: 0.009137, lowPrice: 0.008988 }
  },
  '2021-06-17': {
    '13': { openPrice: 0.009184, highPrice: 0.009244, lowPrice: 0.00916 },
    '17': { openPrice: 0.009189, highPrice: 0.009214, lowPrice: 0.00912 },
    '21': { openPrice: 0.009155, highPrice: 0.009188, lowPrice: 0.009111 },
    '01': { openPrice: 0.009014, highPrice: 0.009095, lowPrice: 0.008909 },
    '05': { openPrice: 0.009088, highPrice: 0.009124, lowPrice: 0.009031 },
    '09': { openPrice: 0.009057, highPrice: 0.009202, lowPrice: 0.009 }
  },
  '2021-06-18': {
    '13': { openPrice: 0.009317, highPrice: 0.00942, lowPrice: 0.009308 },
    '17': { openPrice: 0.009378, highPrice: 0.009402, lowPrice: 0.009296 },
    '21': { openPrice: 0.009318, highPrice: 0.009341, lowPrice: 0.00917 },
    '01': { openPrice: 0.009154, highPrice: 0.009257, lowPrice: 0.009141 },
    '05': { openPrice: 0.009248, highPrice: 0.009274, lowPrice: 0.009219 },
    '09': { openPrice: 0.009264, highPrice: 0.009341, lowPrice: 0.009254 }
  },
  '2021-06-19': {
    '13': { openPrice: 0.009493, highPrice: 0.00955, lowPrice: 0.009459 },
    '17': { openPrice: 0.009505, highPrice: 0.009548, lowPrice: 0.009435 },
    '21': { openPrice: 0.009478, highPrice: 0.009511, lowPrice: 0.009433 },
    '01': { openPrice: 0.009194, highPrice: 0.009341, lowPrice: 0.009175 },
    '05': { openPrice: 0.009313, highPrice: 0.009457, lowPrice: 0.00931 },
    '09': { openPrice: 0.009416, highPrice: 0.00953, lowPrice: 0.009374 }
  },
  '2021-06-20': {
    '13': { openPrice: 0.009403, highPrice: 0.009482, lowPrice: 0.009394 },
    '17': { openPrice: 0.009446, highPrice: 0.009589, lowPrice: 0.00935 },
    '21': { openPrice: 0.009364, highPrice: 0.009431, lowPrice: 0.009283 },
    '01': { openPrice: 0.00944, highPrice: 0.009503, lowPrice: 0.009425 },
    '05': { openPrice: 0.00946, highPrice: 0.009483, lowPrice: 0.009407 },
    '09': { openPrice: 0.009412, highPrice: 0.009446, lowPrice: 0.009378 }
  },
  '2021-06-21': {
    '13': { openPrice: 0.009474, highPrice: 0.009689, lowPrice: 0.009426 },
    '17': { openPrice: 0.009615, highPrice: 0.009685, lowPrice: 0.009148 },
    '21': { openPrice: 0.009342, highPrice: 0.009392, lowPrice: 0.009191 },
    '01': { openPrice: 0.00941, highPrice: 0.0095, lowPrice: 0.009404 },
    '05': { openPrice: 0.009448, highPrice: 0.009555, lowPrice: 0.009408 },
    '09': { openPrice: 0.009527, highPrice: 0.009581, lowPrice: 0.009442 }
  },
  '2021-06-22': {
    '13': { openPrice: 0.008719, highPrice: 0.008802, lowPrice: 0.008596 },
    '17': { openPrice: 0.008619, highPrice: 0.008643, lowPrice: 0.008131 },
    '21': { openPrice: 0.008177, highPrice: 0.008304, lowPrice: 0.007816 },
    '01': { openPrice: 0.009322, highPrice: 0.009335, lowPrice: 0.009117 },
    '05': { openPrice: 0.009176, highPrice: 0.00925, lowPrice: 0.008521 },
    '09': { openPrice: 0.008562, highPrice: 0.00878, lowPrice: 0.00836 }
  },
  '2021-06-23': {
    '13': { openPrice: 0.008448, highPrice: 0.008591, lowPrice: 0.008405 },
    '17': { openPrice: 0.008535, highPrice: 0.00874, lowPrice: 0.00845 },
    '21': { openPrice: 0.008546, highPrice: 0.00892, lowPrice: 0.008531 },
    '01': { openPrice: 0.008205, highPrice: 0.008329, lowPrice: 0.008131 },
    '05': { openPrice: 0.008196, highPrice: 0.008331, lowPrice: 0.008002 },
    '09': { openPrice: 0.008062, highPrice: 0.008567, lowPrice: 0.007922 }
  },
  '2021-06-24': {
    '13': { openPrice: 0.008697, highPrice: 0.009114, lowPrice: 0.008682 },
    '17': { openPrice: 0.009018, highPrice: 0.009208, lowPrice: 0.009008 },
    '21': { openPrice: 0.009043, highPrice: 0.009091, lowPrice: 0.008889 },
    '01': { openPrice: 0.008713, highPrice: 0.0088, lowPrice: 0.008575 },
    '05': { openPrice: 0.008586, highPrice: 0.008813, lowPrice: 0.008572 },
    '09': { openPrice: 0.008793, highPrice: 0.008889, lowPrice: 0.008679 }
  },
  '2021-06-25': {
    '13': { openPrice: 0.008793, highPrice: 0.008843, lowPrice: 0.00862 },
    '17': { openPrice: 0.008648, highPrice: 0.00873, lowPrice: 0.008519 },
    '21': { openPrice: 0.00869, highPrice: 0.008827, lowPrice: 0.008663 },
    '01': { openPrice: 0.009, highPrice: 0.009084, lowPrice: 0.008944 },
    '05': { openPrice: 0.008965, highPrice: 0.008992, lowPrice: 0.008875 },
    '09': { openPrice: 0.008902, highPrice: 0.008983, lowPrice: 0.008767 }
  },
  '2021-06-26': {
    '13': { openPrice: 0.008854, highPrice: 0.008936, lowPrice: 0.008688 },
    '17': { openPrice: 0.008774, highPrice: 0.008864, lowPrice: 0.008716 },
    '21': { openPrice: 0.00879, highPrice: 0.008854, lowPrice: 0.008659 },
    '01': { openPrice: 0.008796, highPrice: 0.008898, lowPrice: 0.008708 },
    '05': { openPrice: 0.008881, highPrice: 0.008952, lowPrice: 0.008844 },
    '09': { openPrice: 0.008893, highPrice: 0.00896, lowPrice: 0.008788 }
  },
  '2021-06-27': {
    '13': { openPrice: 0.008635, highPrice: 0.008654, lowPrice: 0.008437 },
    '17': { openPrice: 0.008471, highPrice: 0.008556, lowPrice: 0.008378 },
    '21': { openPrice: 0.008393, highPrice: 0.00842, lowPrice: 0.008308 },
    '01': { openPrice: 0.008669, highPrice: 0.008676, lowPrice: 0.008563 },
    '05': { openPrice: 0.008616, highPrice: 0.008711, lowPrice: 0.00861 },
    '09': { openPrice: 0.008669, highPrice: 0.008738, lowPrice: 0.0086 }
  },
  '2021-06-28': {
    '13': { openPrice: 0.008287, highPrice: 0.008423, lowPrice: 0.008275 },
    '17': { openPrice: 0.008406, highPrice: 0.008506, lowPrice: 0.008352 },
    '21': { openPrice: 0.008375, highPrice: 0.00856, lowPrice: 0.008339 },
    '01': { openPrice: 0.008345, highPrice: 0.008346, lowPrice: 0.008229 },
    '05': { openPrice: 0.008294, highPrice: 0.008409, lowPrice: 0.008217 },
    '09': { openPrice: 0.008387, highPrice: 0.008454, lowPrice: 0.008277 }
  },
  '2021-06-29': {
    '13': { openPrice: 0.008506, highPrice: 0.008545, lowPrice: 0.008431 },
    '17': { openPrice: 0.008504, highPrice: 0.008655, lowPrice: 0.008413 },
    '21': { openPrice: 0.008653, highPrice: 0.008683, lowPrice: 0.00852 },
    '01': { openPrice: 0.008549, highPrice: 0.008608, lowPrice: 0.008501 },
    '05': { openPrice: 0.00854, highPrice: 0.008544, lowPrice: 0.008401 },
    '09': { openPrice: 0.008408, highPrice: 0.008594, lowPrice: 0.008389 }
  },
  '2021-06-30': {
    '13': { openPrice: 0.008377, highPrice: 0.008542, lowPrice: 0.008371 },
    '17': { openPrice: 0.008526, highPrice: 0.008537, lowPrice: 0.008394 },
    '21': { openPrice: 0.008424, highPrice: 0.008425, lowPrice: 0.008242 },
    '01': { openPrice: 0.008542, highPrice: 0.008557, lowPrice: 0.008417 },
    '05': { openPrice: 0.008438, highPrice: 0.008483, lowPrice: 0.008339 },
    '09': { openPrice: 0.008377, highPrice: 0.008405, lowPrice: 0.008285 }
  },
  '2021-07-01': {
    '13': { openPrice: 0.008542, highPrice: 0.008594, lowPrice: 0.008506 },
    '17': { openPrice: 0.00853, highPrice: 0.008662, lowPrice: 0.008524 },
    '21': { openPrice: 0.008607, highPrice: 0.008651, lowPrice: 0.008573 },
    '01': { openPrice: 0.008292, highPrice: 0.008572, lowPrice: 0.00827 },
    '05': { openPrice: 0.008556, highPrice: 0.008682, lowPrice: 0.008528 },
    '09': { openPrice: 0.008668, highPrice: 0.008689, lowPrice: 0.008531 }
  },
  '2021-07-02': {
    '13': { openPrice: 0.00845, highPrice: 0.008533, lowPrice: 0.008437 },
    '17': { openPrice: 0.008493, highPrice: 0.008494, lowPrice: 0.0084 },
    '21': { openPrice: 0.008429, highPrice: 0.008481, lowPrice: 0.008395 },
    '01': { openPrice: 0.008633, highPrice: 0.008651, lowPrice: 0.008544 },
    '05': { openPrice: 0.008575, highPrice: 0.008633, lowPrice: 0.008566 },
    '09': { openPrice: 0.008584, highPrice: 0.008604, lowPrice: 0.008446 }
  },
  '2021-07-03': {
    '13': { openPrice: 0.008493, highPrice: 0.008569, lowPrice: 0.008466 },
    '17': { openPrice: 0.00852, highPrice: 0.008548, lowPrice: 0.008468 },
    '21': { openPrice: 0.0085, highPrice: 0.008622, lowPrice: 0.008482 },
    '01': { openPrice: 0.008448, highPrice: 0.008516, lowPrice: 0.008428 },
    '05': { openPrice: 0.008503, highPrice: 0.008535, lowPrice: 0.008462 },
    '09': { openPrice: 0.008497, highPrice: 0.008531, lowPrice: 0.008472 }
  },
  '2021-07-04': {
    '13': { openPrice: 0.008539, highPrice: 0.0087, lowPrice: 0.008535 },
    '17': { openPrice: 0.008657, highPrice: 0.008666, lowPrice: 0.008581 },
    '21': { openPrice: 0.00862, highPrice: 0.008717, lowPrice: 0.008558 },
    '01': { openPrice: 0.008596, highPrice: 0.008707, lowPrice: 0.008593 },
    '05': { openPrice: 0.008614, highPrice: 0.008659, lowPrice: 0.008587 },
    '09': { openPrice: 0.008601, highPrice: 0.008606, lowPrice: 0.008502 }
  },
  '2021-07-05': {
    '13': { openPrice: 0.00873, highPrice: 0.008792, lowPrice: 0.008692 },
    '17': { openPrice: 0.008764, highPrice: 0.008905, lowPrice: 0.008759 },
    '21': { openPrice: 0.008787, highPrice: 0.008849, lowPrice: 0.008776 },
    '01': { openPrice: 0.008715, highPrice: 0.008837, lowPrice: 0.008661 },
    '05': { openPrice: 0.008787, highPrice: 0.008819, lowPrice: 0.008674 },
    '09': { openPrice: 0.008717, highPrice: 0.008763, lowPrice: 0.008675 }
  },
  '2021-07-06': {
    '13': { openPrice: 0.008999, highPrice: 0.009266, lowPrice: 0.008958 },
    '17': { openPrice: 0.009183, highPrice: 0.009202, lowPrice: 0.008972 },
    '21': { openPrice: 0.009151, highPrice: 0.009323, lowPrice: 0.009136 },
    '01': { openPrice: 0.008817, highPrice: 0.008896, lowPrice: 0.0088 },
    '05': { openPrice: 0.008872, highPrice: 0.008999, lowPrice: 0.008872 },
    '09': { openPrice: 0.008965, highPrice: 0.00901, lowPrice: 0.008918 }
  },
  '2021-07-07': {
    '13': { openPrice: 0.009536, highPrice: 0.009664, lowPrice: 0.009491 },
    '17': { openPrice: 0.009556, highPrice: 0.009614, lowPrice: 0.009504 },
    '21': { openPrice: 0.009573, highPrice: 0.009747, lowPrice: 0.009563 },
    '01': { openPrice: 0.009281, highPrice: 0.00944, lowPrice: 0.009277 },
    '05': { openPrice: 0.009388, highPrice: 0.009399, lowPrice: 0.009295 },
    '09': { openPrice: 0.00935, highPrice: 0.009585, lowPrice: 0.009327 }
  },
  '2021-07-08': {
    '13': { openPrice: 0.009666, highPrice: 0.009672, lowPrice: 0.009538 },
    '17': { openPrice: 0.009633, highPrice: 0.009721, lowPrice: 0.0096 },
    '21': { openPrice: 0.0097, highPrice: 0.0097, lowPrice: 0.009561 },
    '01': { openPrice: 0.009685, highPrice: 0.009775, lowPrice: 0.009629 },
    '05': { openPrice: 0.009755, highPrice: 0.009769, lowPrice: 0.009595 },
    '09': { openPrice: 0.009676, highPrice: 0.009723, lowPrice: 0.009579 }
  },
  '2021-07-09': {
    '13': { openPrice: 0.009372, highPrice: 0.009454, lowPrice: 0.009368 },
    '17': { openPrice: 0.009437, highPrice: 0.009439, lowPrice: 0.009343 },
    '21': { openPrice: 0.009384, highPrice: 0.009442, lowPrice: 0.009325 },
    '01': { openPrice: 0.009611, highPrice: 0.009621, lowPrice: 0.009556 },
    '05': { openPrice: 0.009605, highPrice: 0.009615, lowPrice: 0.009368 },
    '09': { openPrice: 0.009435, highPrice: 0.009445, lowPrice: 0.009247 }
  },
  '2021-07-10': {
    '13': { openPrice: 0.009323, highPrice: 0.009332, lowPrice: 0.009268 },
    '17': { openPrice: 0.009286, highPrice: 0.009328, lowPrice: 0.009255 },
    '21': { openPrice: 0.009281, highPrice: 0.009369, lowPrice: 0.009253 },
    '01': { openPrice: 0.009418, highPrice: 0.009433, lowPrice: 0.009357 },
    '05': { openPrice: 0.009371, highPrice: 0.009402, lowPrice: 0.009318 },
    '09': { openPrice: 0.00938, highPrice: 0.009434, lowPrice: 0.009314 }
  },
  '2021-07-11': {
    '13': { openPrice: 0.009382, highPrice: 0.009434, lowPrice: 0.009354 },
    '17': { openPrice: 0.009431, highPrice: 0.0095, lowPrice: 0.009398 },
    '21': { openPrice: 0.009498, highPrice: 0.009592, lowPrice: 0.009463 },
    '01': { openPrice: 0.009364, highPrice: 0.009422, lowPrice: 0.00933 },
    '05': { openPrice: 0.009399, highPrice: 0.00945, lowPrice: 0.009383 },
    '09': { openPrice: 0.009434, highPrice: 0.009455, lowPrice: 0.009362 }
  },
  '2021-07-12': {
    '13': { openPrice: 0.009545, highPrice: 0.009713, lowPrice: 0.009514 },
    '17': { openPrice: 0.009668, highPrice: 0.009713, lowPrice: 0.009539 },
    '21': { openPrice: 0.009568, highPrice: 0.009679, lowPrice: 0.009557 },
    '01': { openPrice: 0.009583, highPrice: 0.009592, lowPrice: 0.009498 },
    '05': { openPrice: 0.009519, highPrice: 0.009521, lowPrice: 0.009378 },
    '09': { openPrice: 0.009399, highPrice: 0.009586, lowPrice: 0.009383 }
  },
  '2021-07-13': {
    '13': { openPrice: 0.009553, highPrice: 0.009556, lowPrice: 0.0094 },
    '17': { openPrice: 0.00948, highPrice: 0.009518, lowPrice: 0.009402 },
    '21': { openPrice: 0.009436, highPrice: 0.009549, lowPrice: 0.009386 },
    '01': { openPrice: 0.009627, highPrice: 0.009649, lowPrice: 0.009426 },
    '05': { openPrice: 0.009495, highPrice: 0.009567, lowPrice: 0.009452 },
    '09': { openPrice: 0.009554, highPrice: 0.009583, lowPrice: 0.009512 }
  },
  '2021-07-14': {
    '13': { openPrice: 0.009252, highPrice: 0.009289, lowPrice: 0.009179 },
    '17': { openPrice: 0.009253, highPrice: 0.009429, lowPrice: 0.009189 },
    '21': { openPrice: 0.009352, highPrice: 0.009528, lowPrice: 0.009309 },
    '01': { openPrice: 0.009508, highPrice: 0.009527, lowPrice: 0.009458 },
    '05': { openPrice: 0.009472, highPrice: 0.0095, lowPrice: 0.009421 },
    '09': { openPrice: 0.009441, highPrice: 0.009451, lowPrice: 0.009173 }
  },
  '2021-07-15': {
    '13': { openPrice: 0.009379, highPrice: 0.009388, lowPrice: 0.009283 },
    '17': { openPrice: 0.009334, highPrice: 0.00999, lowPrice: 0.009334 },
    '21': { openPrice: 0.009785, highPrice: 0.00992, lowPrice: 0.0097 },
    '01': { openPrice: 0.009439, highPrice: 0.009472, lowPrice: 0.00939 },
    '05': { openPrice: 0.009425, highPrice: 0.009442, lowPrice: 0.009382 },
    '09': { openPrice: 0.009423, highPrice: 0.00949, lowPrice: 0.009353 }
  },
  '2021-07-16': {
    '13': { openPrice: 0.010037, highPrice: 0.010073, lowPrice: 0.009808 },
    '17': { openPrice: 0.00985, highPrice: 0.009854, lowPrice: 0.00966 },
    '21': { openPrice: 0.009745, highPrice: 0.009796, lowPrice: 0.009674 },
    '01': { openPrice: 0.00987, highPrice: 0.010018, lowPrice: 0.009844 },
    '05': { openPrice: 0.010018, highPrice: 0.010118, lowPrice: 0.009903 },
    '09': { openPrice: 0.009914, highPrice: 0.010125, lowPrice: 0.009871 }
  },
  '2021-07-17': {
    '13': { openPrice: 0.009489, highPrice: 0.009613, lowPrice: 0.009488 },
    '17': { openPrice: 0.009501, highPrice: 0.009571, lowPrice: 0.009448 },
    '21': { openPrice: 0.009538, highPrice: 0.009568, lowPrice: 0.009438 },
    '01': { openPrice: 0.009702, highPrice: 0.009713, lowPrice: 0.009601 },
    '05': { openPrice: 0.009633, highPrice: 0.009666, lowPrice: 0.009536 },
    '09': { openPrice: 0.009655, highPrice: 0.009704, lowPrice: 0.009416 }
  },
  '2021-07-18': {
    '13': { openPrice: 0.009514, highPrice: 0.009574, lowPrice: 0.009483 },
    '17': { openPrice: 0.009573, highPrice: 0.009652, lowPrice: 0.009567 },
    '21': { openPrice: 0.009624, highPrice: 0.009666, lowPrice: 0.009575 },
    '01': { openPrice: 0.009456, highPrice: 0.009557, lowPrice: 0.009444 },
    '05': { openPrice: 0.009535, highPrice: 0.009558, lowPrice: 0.009496 },
    '09': { openPrice: 0.009535, highPrice: 0.009609, lowPrice: 0.009483 }
  },
  '2021-07-19': {
    '13': { openPrice: 0.009479, highPrice: 0.009517, lowPrice: 0.009429 },
    '17': { openPrice: 0.009491, highPrice: 0.009505, lowPrice: 0.009441 },
    '21': { openPrice: 0.009446, highPrice: 0.009447, lowPrice: 0.009094 },
    '01': { openPrice: 0.009632, highPrice: 0.009676, lowPrice: 0.009605 },
    '05': { openPrice: 0.00961, highPrice: 0.009682, lowPrice: 0.0095 },
    '09': { openPrice: 0.009506, highPrice: 0.009541, lowPrice: 0.009443 }
  },
  '2021-07-20': {
    '13': { openPrice: 0.008766, highPrice: 0.008971, lowPrice: 0.008766 },
    '17': { openPrice: 0.008951, highPrice: 0.008951, lowPrice: 0.008691 },
    '21': { openPrice: 0.00888, highPrice: 0.00907, lowPrice: 0.008813 },
    '01': { openPrice: 0.009251, highPrice: 0.009296, lowPrice: 0.009179 },
    '05': { openPrice: 0.009209, highPrice: 0.00921, lowPrice: 0.009074 },
    '09': { openPrice: 0.009098, highPrice: 0.009162, lowPrice: 0.00876 }
  },
  '2021-07-21': {
    '13': { openPrice: 0.009046, highPrice: 0.009203, lowPrice: 0.009038 },
    '17': { openPrice: 0.009105, highPrice: 0.009157, lowPrice: 0.00905 },
    '21': { openPrice: 0.009111, highPrice: 0.009129, lowPrice: 0.009031 },
    '01': { openPrice: 0.009004, highPrice: 0.009048, lowPrice: 0.008936 },
    '05': { openPrice: 0.009017, highPrice: 0.009049, lowPrice: 0.00885 },
    '09': { openPrice: 0.008877, highPrice: 0.009059, lowPrice: 0.008849 }
  },
  '2021-07-22': {
    '13': { openPrice: 0.009106, highPrice: 0.009205, lowPrice: 0.009077 },
    '17': { openPrice: 0.009197, highPrice: 0.009235, lowPrice: 0.009124 },
    '21': { openPrice: 0.009201, highPrice: 0.009201, lowPrice: 0.009114 },
    '01': { openPrice: 0.009118, highPrice: 0.009225, lowPrice: 0.008985 },
    '05': { openPrice: 0.009021, highPrice: 0.009123, lowPrice: 0.008962 },
    '09': { openPrice: 0.009122, highPrice: 0.009187, lowPrice: 0.009033 }
  },
  '2021-07-23': {
    '13': { openPrice: 0.009064, highPrice: 0.009279, lowPrice: 0.009064 },
    '17': { openPrice: 0.009174, highPrice: 0.009176, lowPrice: 0.00895 },
    '21': { openPrice: 0.00895, highPrice: 0.008987, lowPrice: 0.008879 },
    '01': { openPrice: 0.009133, highPrice: 0.009157, lowPrice: 0.00909 },
    '05': { openPrice: 0.009111, highPrice: 0.00914, lowPrice: 0.008981 },
    '09': { openPrice: 0.009089, highPrice: 0.00912, lowPrice: 0.009018 }
  },
  '2021-07-24': {
    '13': { openPrice: 0.008906, highPrice: 0.009023, lowPrice: 0.008902 },
    '17': { openPrice: 0.008945, highPrice: 0.008977, lowPrice: 0.008914 },
    '21': { openPrice: 0.008944, highPrice: 0.008987, lowPrice: 0.008923 },
    '01': { openPrice: 0.008889, highPrice: 0.008894, lowPrice: 0.008771 },
    '05': { openPrice: 0.008813, highPrice: 0.008929, lowPrice: 0.008806 },
    '09': { openPrice: 0.008897, highPrice: 0.008916, lowPrice: 0.008839 }
  },
  '2021-07-25': {
    '13': { openPrice: 0.00873, highPrice: 0.008766, lowPrice: 0.008703 },
    '17': { openPrice: 0.008715, highPrice: 0.008768, lowPrice: 0.0087 },
    '21': { openPrice: 0.008725, highPrice: 0.008727, lowPrice: 0.008607 },
    '01': { openPrice: 0.008931, highPrice: 0.008955, lowPrice: 0.008778 },
    '05': { openPrice: 0.008801, highPrice: 0.008831, lowPrice: 0.008752 },
    '09': { openPrice: 0.008801, highPrice: 0.008834, lowPrice: 0.008726 }
  },
  '2021-07-26': {
    '13': { openPrice: 0.008417, highPrice: 0.008425, lowPrice: 0.008238 },
    '17': { openPrice: 0.008319, highPrice: 0.008355, lowPrice: 0.00826 },
    '21': { openPrice: 0.008286, highPrice: 0.008317, lowPrice: 0.008249 },
    '01': { openPrice: 0.008667, highPrice: 0.008687, lowPrice: 0.008645 },
    '05': { openPrice: 0.00868, highPrice: 0.008694, lowPrice: 0.00855 },
    '09': { openPrice: 0.008553, highPrice: 0.008583, lowPrice: 0.0079 }
  },
  '2021-07-27': {
    '13': { openPrice: 0.008183, highPrice: 0.00825, lowPrice: 0.008166 },
    '17': { openPrice: 0.008196, highPrice: 0.008325, lowPrice: 0.008156 },
    '21': { openPrice: 0.008293, highPrice: 0.008327, lowPrice: 0.008174 },
    '01': { openPrice: 0.008256, highPrice: 0.008263, lowPrice: 0.008002 },
    '05': { openPrice: 0.008072, highPrice: 0.008226, lowPrice: 0.008051 },
    '09': { openPrice: 0.008159, highPrice: 0.008228, lowPrice: 0.008112 }
  },
  '2021-07-28': {
    '13': { openPrice: 0.007823, highPrice: 0.007914, lowPrice: 0.007793 },
    '17': { openPrice: 0.007876, highPrice: 0.007958, lowPrice: 0.007773 },
    '21': { openPrice: 0.007788, highPrice: 0.007935, lowPrice: 0.007757 },
    '01': { openPrice: 0.008177, highPrice: 0.008197, lowPrice: 0.008062 },
    '05': { openPrice: 0.008093, highPrice: 0.00816, lowPrice: 0.007945 },
    '09': { openPrice: 0.007947, highPrice: 0.007991, lowPrice: 0.007795 }
  },
  '2021-07-29': {
    '13': { openPrice: 0.007831, highPrice: 0.007875, lowPrice: 0.007807 },
    '17': { openPrice: 0.00785, highPrice: 0.007895, lowPrice: 0.007776 },
    '21': { openPrice: 0.007833, highPrice: 0.007912, lowPrice: 0.007833 },
    '01': { openPrice: 0.007915, highPrice: 0.007953, lowPrice: 0.007773 },
    '05': { openPrice: 0.007787, highPrice: 0.007875, lowPrice: 0.007777 },
    '09': { openPrice: 0.007842, highPrice: 0.007881, lowPrice: 0.007779 }
  },
  '2021-07-30': {
    '13': { openPrice: 0.008047, highPrice: 0.008081, lowPrice: 0.007995 },
    '17': { openPrice: 0.008033, highPrice: 0.008075, lowPrice: 0.007965 },
    '21': { openPrice: 0.008004, highPrice: 0.008004, lowPrice: 0.007953 },
    '01': { openPrice: 0.007868, highPrice: 0.007941, lowPrice: 0.007846 },
    '05': { openPrice: 0.007899, highPrice: 0.007954, lowPrice: 0.007881 },
    '09': { openPrice: 0.007923, highPrice: 0.008142, lowPrice: 0.007896 }
  },
  '2021-07-31': {
    '13': { openPrice: 0.007716, highPrice: 0.007728, lowPrice: 0.007661 },
    '17': { openPrice: 0.007707, highPrice: 0.008078, lowPrice: 0.007692 },
    '21': { openPrice: 0.007978, highPrice: 0.007985, lowPrice: 0.007899 },
    '01': { openPrice: 0.007982, highPrice: 0.008012, lowPrice: 0.007886 },
    '05': { openPrice: 0.007888, highPrice: 0.00792, lowPrice: 0.007632 },
    '09': { openPrice: 0.00764, highPrice: 0.007734, lowPrice: 0.007633 }
  },
  '2021-08-01': {
    '13': { openPrice: 0.00817, highPrice: 0.008272, lowPrice: 0.008123 },
    '17': { openPrice: 0.008188, highPrice: 0.00823, lowPrice: 0.008136 },
    '21': { openPrice: 0.008176, highPrice: 0.008237, lowPrice: 0.008147 },
    '01': { openPrice: 0.007935, highPrice: 0.008053, lowPrice: 0.007923 },
    '05': { openPrice: 0.008014, highPrice: 0.008077, lowPrice: 0.00795 },
    '09': { openPrice: 0.008017, highPrice: 0.008204, lowPrice: 0.008004 }
  },
  '2021-08-02': {
    '13': { openPrice: 0.008292, highPrice: 0.008393, lowPrice: 0.008283 },
    '17': { openPrice: 0.008382, highPrice: 0.008449, lowPrice: 0.008366 },
    '21': { openPrice: 0.008419, highPrice: 0.008453, lowPrice: 0.008393 },
    '01': { openPrice: 0.008206, highPrice: 0.008227, lowPrice: 0.008123 },
    '05': { openPrice: 0.008227, highPrice: 0.008386, lowPrice: 0.008214 },
    '09': { openPrice: 0.008345, highPrice: 0.008361, lowPrice: 0.008256 }
  },
  '2021-08-03': {
    '13': { openPrice: 0.00844, highPrice: 0.00847, lowPrice: 0.008345 },
    '17': { openPrice: 0.008373, highPrice: 0.008397, lowPrice: 0.00834 },
    '21': { openPrice: 0.008343, highPrice: 0.008443, lowPrice: 0.00834 },
    '01': { openPrice: 0.00842, highPrice: 0.008465, lowPrice: 0.008406 },
    '05': { openPrice: 0.008458, highPrice: 0.0085, lowPrice: 0.008402 },
    '09': { openPrice: 0.008443, highPrice: 0.008473, lowPrice: 0.008399 }
  },
  '2021-08-04': {
    '13': { openPrice: 0.008455, highPrice: 0.008524, lowPrice: 0.008454 },
    '17': { openPrice: 0.008508, highPrice: 0.008528, lowPrice: 0.008459 },
    '21': { openPrice: 0.008481, highPrice: 0.008522, lowPrice: 0.008407 },
    '01': { openPrice: 0.008422, highPrice: 0.008481, lowPrice: 0.00839 },
    '05': { openPrice: 0.008453, highPrice: 0.008465, lowPrice: 0.008391 },
    '09': { openPrice: 0.008465, highPrice: 0.00849, lowPrice: 0.008412 }
  },
  '2021-08-05': {
    '13': { openPrice: 0.008479, highPrice: 0.008513, lowPrice: 0.008454 },
    '17': { openPrice: 0.00848, highPrice: 0.008618, lowPrice: 0.008475 },
    '21': { openPrice: 0.008609, highPrice: 0.008688, lowPrice: 0.008452 },
    '01': { openPrice: 0.008455, highPrice: 0.00851, lowPrice: 0.008389 },
    '05': { openPrice: 0.008409, highPrice: 0.008468, lowPrice: 0.0084 },
    '09': { openPrice: 0.008428, highPrice: 0.008492, lowPrice: 0.008422 }
  },
  '2021-08-06': {
    '13': { openPrice: 0.008293, highPrice: 0.008352, lowPrice: 0.008189 },
    '17': { openPrice: 0.00823, highPrice: 0.00825, lowPrice: 0.008183 },
    '21': { openPrice: 0.008217, highPrice: 0.008269, lowPrice: 0.008097 },
    '01': { openPrice: 0.008523, highPrice: 0.008524, lowPrice: 0.008215 },
    '05': { openPrice: 0.008281, highPrice: 0.0086, lowPrice: 0.008223 },
    '09': { openPrice: 0.00827, highPrice: 0.008399, lowPrice: 0.008266 }
  },
  '2021-08-07': {
    '13': { openPrice: 0.008017, highPrice: 0.008089, lowPrice: 0.008014 },
    '17': { openPrice: 0.008046, highPrice: 0.008146, lowPrice: 0.008027 },
    '21': { openPrice: 0.008136, highPrice: 0.008146, lowPrice: 0.00807 },
    '01': { openPrice: 0.008128, highPrice: 0.00813, lowPrice: 0.007954 },
    '05': { openPrice: 0.007981, highPrice: 0.008012, lowPrice: 0.007954 },
    '09': { openPrice: 0.007989, highPrice: 0.008097, lowPrice: 0.007982 }
  },
  '2021-08-08': {
    '13': { openPrice: 0.007982, highPrice: 0.007994, lowPrice: 0.007906 },
    '17': { openPrice: 0.007937, highPrice: 0.007948, lowPrice: 0.007876 },
    '21': { openPrice: 0.007883, highPrice: 0.007908, lowPrice: 0.00785 },
    '01': { openPrice: 0.00811, highPrice: 0.008139, lowPrice: 0.007996 },
    '05': { openPrice: 0.008, highPrice: 0.008043, lowPrice: 0.007972 },
    '09': { openPrice: 0.007992, highPrice: 0.008029, lowPrice: 0.007937 }
  },
  '2021-08-09': {
    '13': { openPrice: 0.007798, highPrice: 0.007875, lowPrice: 0.007794 },
    '17': { openPrice: 0.00784, highPrice: 0.007901, lowPrice: 0.007744 },
    '21': { openPrice: 0.007779, highPrice: 0.007797, lowPrice: 0.007691 },
    '01': { openPrice: 0.007877, highPrice: 0.007882, lowPrice: 0.007735 },
    '05': { openPrice: 0.007778, highPrice: 0.007823, lowPrice: 0.007737 },
    '09': { openPrice: 0.007804, highPrice: 0.007847, lowPrice: 0.007757 }
  },
  '2021-08-10': {
    '13': { openPrice: 0.007677, highPrice: 0.007776, lowPrice: 0.007668 },
    '17': { openPrice: 0.007726, highPrice: 0.00785, lowPrice: 0.007721 },
    '21': { openPrice: 0.007841, highPrice: 0.008231, lowPrice: 0.00784 },
    '01': { openPrice: 0.007759, highPrice: 0.007778, lowPrice: 0.007667 },
    '05': { openPrice: 0.007691, highPrice: 0.007753, lowPrice: 0.007642 },
    '09': { openPrice: 0.00766, highPrice: 0.007697, lowPrice: 0.007624 }
  },
  '2021-08-11': {
    '13': { openPrice: 0.008318, highPrice: 0.008467, lowPrice: 0.008308 },
    '17': { openPrice: 0.008369, highPrice: 0.008421, lowPrice: 0.008347 },
    '21': { openPrice: 0.008408, highPrice: 0.008624, lowPrice: 0.008376 },
    '01': { openPrice: 0.008176, highPrice: 0.008185, lowPrice: 0.008095 },
    '05': { openPrice: 0.008156, highPrice: 0.008189, lowPrice: 0.008128 },
    '09': { openPrice: 0.00816, highPrice: 0.00835, lowPrice: 0.008157 }
  },
  '2021-08-12': {
    '13': { openPrice: 0.008703, highPrice: 0.008727, lowPrice: 0.008407 },
    '17': { openPrice: 0.008559, highPrice: 0.008637, lowPrice: 0.00849 },
    '21': { openPrice: 0.008561, highPrice: 0.008611, lowPrice: 0.008451 },
    '01': { openPrice: 0.00854, highPrice: 0.008658, lowPrice: 0.008526 },
    '05': { openPrice: 0.008638, highPrice: 0.008755, lowPrice: 0.008484 },
    '09': { openPrice: 0.008587, highPrice: 0.00881, lowPrice: 0.008555 }
  },
  '2021-08-13': {
    '13': { openPrice: 0.00876, highPrice: 0.008767, lowPrice: 0.008682 },
    '17': { openPrice: 0.008738, highPrice: 0.008768, lowPrice: 0.008621 },
    '21': { openPrice: 0.008642, highPrice: 0.00869, lowPrice: 0.008506 },
    '01': { openPrice: 0.008518, highPrice: 0.008678, lowPrice: 0.008478 },
    '05': { openPrice: 0.008644, highPrice: 0.00872, lowPrice: 0.008572 },
    '09': { openPrice: 0.008685, highPrice: 0.008874, lowPrice: 0.008646 }
  },
  '2021-08-14': {
    '13': { openPrice: 0.008568, highPrice: 0.008764, lowPrice: 0.008512 },
    '17': { openPrice: 0.008733, highPrice: 0.008759, lowPrice: 0.008624 },
    '21': { openPrice: 0.008737, highPrice: 0.008786, lowPrice: 0.008674 },
    '01': { openPrice: 0.008536, highPrice: 0.008588, lowPrice: 0.008513 },
    '05': { openPrice: 0.008526, highPrice: 0.008607, lowPrice: 0.00845 },
    '09': { openPrice: 0.008592, highPrice: 0.008607, lowPrice: 0.00852 }
  },
  '2021-08-15': {
    '13': { openPrice: 0.008636, highPrice: 0.008709, lowPrice: 0.008618 },
    '17': { openPrice: 0.008699, highPrice: 0.008787, lowPrice: 0.008689 },
    '21': { openPrice: 0.008784, highPrice: 0.008791, lowPrice: 0.008719 },
    '01': { openPrice: 0.00872, highPrice: 0.008731, lowPrice: 0.008645 },
    '05': { openPrice: 0.008669, highPrice: 0.008716, lowPrice: 0.008623 },
    '09': { openPrice: 0.008685, highPrice: 0.008711, lowPrice: 0.008606 }
  },
  '2021-08-16': {
    '13': { openPrice: 0.008677, highPrice: 0.008931, lowPrice: 0.008674 },
    '17': { openPrice: 0.008885, highPrice: 0.009095, lowPrice: 0.008881 },
    '21': { openPrice: 0.009052, highPrice: 0.009244, lowPrice: 0.009034 },
    '01': { openPrice: 0.008743, highPrice: 0.008799, lowPrice: 0.008724 },
    '05': { openPrice: 0.00877, highPrice: 0.008821, lowPrice: 0.008714 },
    '09': { openPrice: 0.008817, highPrice: 0.008842, lowPrice: 0.008673 }
  },
  '2021-08-17': {
    '13': { openPrice: 0.009196, highPrice: 0.00925, lowPrice: 0.009111 },
    '17': { openPrice: 0.009117, highPrice: 0.00924, lowPrice: 0.009117 },
    '21': { openPrice: 0.009233, highPrice: 0.009273, lowPrice: 0.009147 },
    '01': { openPrice: 0.009201, highPrice: 0.009237, lowPrice: 0.009104 },
    '05': { openPrice: 0.009124, highPrice: 0.009155, lowPrice: 0.009041 },
    '09': { openPrice: 0.009059, highPrice: 0.009237, lowPrice: 0.008985 }
  },
  '2021-08-18': {
    '13': { openPrice: 0.008803, highPrice: 0.00893, lowPrice: 0.008781 },
    '17': { openPrice: 0.00884, highPrice: 0.008862, lowPrice: 0.00872 },
    '21': { openPrice: 0.008729, highPrice: 0.008924, lowPrice: 0.008729 },
    '01': { openPrice: 0.009162, highPrice: 0.009215, lowPrice: 0.009124 },
    '05': { openPrice: 0.009137, highPrice: 0.009158, lowPrice: 0.008968 },
    '09': { openPrice: 0.008991, highPrice: 0.009057, lowPrice: 0.008701 }
  },
  '2021-08-19': {
    '13': { openPrice: 0.008924, highPrice: 0.00898, lowPrice: 0.008884 },
    '17': { openPrice: 0.008903, highPrice: 0.00909, lowPrice: 0.008896 },
    '21': { openPrice: 0.009052, highPrice: 0.009324, lowPrice: 0.009052 },
    '01': { openPrice: 0.008913, highPrice: 0.008984, lowPrice: 0.008814 },
    '05': { openPrice: 0.008833, highPrice: 0.008938, lowPrice: 0.008768 },
    '09': { openPrice: 0.008863, highPrice: 0.008984, lowPrice: 0.008832 }
  },
  '2021-08-20': {
    '13': { openPrice: 0.009145, highPrice: 0.009145, lowPrice: 0.009052 },
    '17': { openPrice: 0.009081, highPrice: 0.009139, lowPrice: 0.009027 },
    '21': { openPrice: 0.009106, highPrice: 0.009253, lowPrice: 0.009084 },
    '01': { openPrice: 0.009233, highPrice: 0.009609, lowPrice: 0.009147 },
    '05': { openPrice: 0.009191, highPrice: 0.009231, lowPrice: 0.009148 },
    '09': { openPrice: 0.009222, highPrice: 0.009264, lowPrice: 0.0091 }
  },
  '2021-08-21': {
    '13': { openPrice: 0.009321, highPrice: 0.009408, lowPrice: 0.009291 },
    '17': { openPrice: 0.009383, highPrice: 0.009396, lowPrice: 0.009203 },
    '21': { openPrice: 0.009244, highPrice: 0.009335, lowPrice: 0.009181 },
    '01': { openPrice: 0.009185, highPrice: 0.009285, lowPrice: 0.009157 },
    '05': { openPrice: 0.009219, highPrice: 0.009317, lowPrice: 0.009193 },
    '09': { openPrice: 0.009222, highPrice: 0.009327, lowPrice: 0.009122 }
  },
  '2021-08-22': {
    '13': { openPrice: 0.009186, highPrice: 0.00929, lowPrice: 0.009174 },
    '17': { openPrice: 0.009262, highPrice: 0.009312, lowPrice: 0.009223 },
    '21': { openPrice: 0.009276, highPrice: 0.009284, lowPrice: 0.009118 },
    '01': { openPrice: 0.009237, highPrice: 0.009248, lowPrice: 0.009077 },
    '05': { openPrice: 0.009139, highPrice: 0.009212, lowPrice: 0.009093 },
    '09': { openPrice: 0.009192, highPrice: 0.00926, lowPrice: 0.00918 }
  },
  '2021-08-23': {
    '13': { openPrice: 0.009217, highPrice: 0.009713, lowPrice: 0.00921 },
    '17': { openPrice: 0.009679, highPrice: 0.010032, lowPrice: 0.009646 },
    '21': { openPrice: 0.009897, highPrice: 0.010297, lowPrice: 0.009831 },
    '01': { openPrice: 0.00915, highPrice: 0.009162, lowPrice: 0.009061 },
    '05': { openPrice: 0.009114, highPrice: 0.009126, lowPrice: 0.009057 },
    '09': { openPrice: 0.00911, highPrice: 0.009216, lowPrice: 0.009067 }
  },
  '2021-08-24': {
    '13': { openPrice: 0.01003, highPrice: 0.010084, lowPrice: 0.009955 },
    '17': { openPrice: 0.009971, highPrice: 0.01002, lowPrice: 0.009873 },
    '21': { openPrice: 0.009993, highPrice: 0.009993, lowPrice: 0.009755 },
    '01': { openPrice: 0.010042, highPrice: 0.01027, lowPrice: 0.010014 },
    '05': { openPrice: 0.010144, highPrice: 0.010267, lowPrice: 0.010045 },
    '09': { openPrice: 0.010087, highPrice: 0.010156, lowPrice: 0.010022 }
  },
  '2021-08-25': {
    '13': { openPrice: 0.009937, highPrice: 0.010243, lowPrice: 0.009932 },
    '17': { openPrice: 0.010135, highPrice: 0.01015, lowPrice: 0.00995 },
    '21': { openPrice: 0.010088, highPrice: 0.01041, lowPrice: 0.010064 },
    '01': { openPrice: 0.009788, highPrice: 0.009919, lowPrice: 0.009645 },
    '05': { openPrice: 0.009909, highPrice: 0.009986, lowPrice: 0.00985 },
    '09': { openPrice: 0.009888, highPrice: 0.010043, lowPrice: 0.009876 }
  },
  '2021-08-26': {
    '13': { openPrice: 0.010291, highPrice: 0.010395, lowPrice: 0.010201 },
    '17': { openPrice: 0.010301, highPrice: 0.010405, lowPrice: 0.010217 },
    '21': { openPrice: 0.010327, highPrice: 0.010422, lowPrice: 0.010245 },
    '01': { openPrice: 0.010293, highPrice: 0.010351, lowPrice: 0.010233 },
    '05': { openPrice: 0.010267, highPrice: 0.010292, lowPrice: 0.010213 },
    '09': { openPrice: 0.010276, highPrice: 0.010538, lowPrice: 0.010237 }
  },
  '2021-08-27': {
    '13': { openPrice: 0.010127, highPrice: 0.010171, lowPrice: 0.010068 },
    '17': { openPrice: 0.01013, highPrice: 0.010228, lowPrice: 0.01009 },
    '21': { openPrice: 0.01016, highPrice: 0.010256, lowPrice: 0.010122 },
    '01': { openPrice: 0.010285, highPrice: 0.010312, lowPrice: 0.010131 },
    '05': { openPrice: 0.010209, highPrice: 0.0103, lowPrice: 0.010198 },
    '09': { openPrice: 0.010208, highPrice: 0.010269, lowPrice: 0.010039 }
  },
  '2021-08-28': {
    '13': { openPrice: 0.009982, highPrice: 0.010001, lowPrice: 0.009921 },
    '17': { openPrice: 0.009944, highPrice: 0.009989, lowPrice: 0.009923 },
    '21': { openPrice: 0.009948, highPrice: 0.010015, lowPrice: 0.009946 },
    '01': { openPrice: 0.010151, highPrice: 0.010163, lowPrice: 0.010066 },
    '05': { openPrice: 0.010083, highPrice: 0.010103, lowPrice: 0.010016 },
    '09': { openPrice: 0.010079, highPrice: 0.010099, lowPrice: 0.009954 }
  },
  '2021-08-29': {
    '13': { openPrice: 0.009987, highPrice: 0.010061, lowPrice: 0.009977 },
    '17': { openPrice: 0.010054, highPrice: 0.01008, lowPrice: 0.010032 },
    '21': { openPrice: 0.010061, highPrice: 0.01008, lowPrice: 0.009961 },
    '01': { openPrice: 0.00996, highPrice: 0.009993, lowPrice: 0.009934 },
    '05': { openPrice: 0.009975, highPrice: 0.010003, lowPrice: 0.00993 },
    '09': { openPrice: 0.009943, highPrice: 0.010024, lowPrice: 0.009927 }
  },
  '2021-08-30': {
    '13': { openPrice: 0.009879, highPrice: 0.009982, lowPrice: 0.009869 },
    '17': { openPrice: 0.009978, highPrice: 0.009988, lowPrice: 0.009887 },
    '21': { openPrice: 0.009903, highPrice: 0.009904, lowPrice: 0.00975 },
    '01': { openPrice: 0.00997, highPrice: 0.009982, lowPrice: 0.009774 },
    '05': { openPrice: 0.009878, highPrice: 0.009906, lowPrice: 0.00979 },
    '09': { openPrice: 0.009838, highPrice: 0.009889, lowPrice: 0.009764 }
  },
  '2021-08-31': {
    '13': { openPrice: 0.009787, highPrice: 0.009838, lowPrice: 0.009716 },
    '17': { openPrice: 0.009801, highPrice: 0.009832, lowPrice: 0.009715 },
    '21': { openPrice: 0.009809, highPrice: 0.00997, lowPrice: 0.009778 },
    '01': { openPrice: 0.009837, highPrice: 0.009886, lowPrice: 0.009796 },
    '05': { openPrice: 0.009834, highPrice: 0.009915, lowPrice: 0.009755 },
    '09': { openPrice: 0.009795, highPrice: 0.009822, lowPrice: 0.009667 }
  },
  '2021-09-01': {
    '13': { openPrice: 0.009846, highPrice: 0.009936, lowPrice: 0.009829 },
    '17': { openPrice: 0.009931, highPrice: 0.0101, lowPrice: 0.009909 },
    '21': { openPrice: 0.010091, highPrice: 0.010148, lowPrice: 0.010047 },
    '01': { openPrice: 0.009959, highPrice: 0.009988, lowPrice: 0.009859 },
    '05': { openPrice: 0.009905, highPrice: 0.009912, lowPrice: 0.009777 },
    '09': { openPrice: 0.009848, highPrice: 0.009865, lowPrice: 0.009756 }
  },
  '2021-09-02': {
    '13': { openPrice: 0.009951, highPrice: 0.009978, lowPrice: 0.009803 },
    '17': { openPrice: 0.009821, highPrice: 0.009856, lowPrice: 0.009792 },
    '21': { openPrice: 0.009827, highPrice: 0.009874, lowPrice: 0.009681 },
    '01': { openPrice: 0.010095, highPrice: 0.010122, lowPrice: 0.009924 },
    '05': { openPrice: 0.01006, highPrice: 0.010081, lowPrice: 0.009983 },
    '09': { openPrice: 0.010029, highPrice: 0.010292, lowPrice: 0.009933 }
  },
  '2021-09-03': {
    '13': { openPrice: 0.00984, highPrice: 0.00988, lowPrice: 0.009775 },
    '17': { openPrice: 0.00982, highPrice: 0.010001, lowPrice: 0.009734 },
    '21': { openPrice: 0.009756, highPrice: 0.009781, lowPrice: 0.009671 },
    '01': { openPrice: 0.009736, highPrice: 0.009858, lowPrice: 0.009735 },
    '05': { openPrice: 0.009854, highPrice: 0.009865, lowPrice: 0.009804 },
    '09': { openPrice: 0.00982, highPrice: 0.009895, lowPrice: 0.009743 }
  },
  '2021-09-04': {
    '13': { openPrice: 0.009733, highPrice: 0.00981, lowPrice: 0.009711 },
    '17': { openPrice: 0.009763, highPrice: 0.009838, lowPrice: 0.009752 },
    '21': { openPrice: 0.009819, highPrice: 0.01015, lowPrice: 0.009815 },
    '01': { openPrice: 0.009754, highPrice: 0.009772, lowPrice: 0.009682 },
    '05': { openPrice: 0.009686, highPrice: 0.009779, lowPrice: 0.009684 },
    '09': { openPrice: 0.00977, highPrice: 0.009866, lowPrice: 0.009728 }
  },
  '2021-09-05': {
    '13': { openPrice: 0.00993, highPrice: 0.009932, lowPrice: 0.009326 },
    '17': { openPrice: 0.009914, highPrice: 0.009936, lowPrice: 0.00982 },
    '21': { openPrice: 0.009832, highPrice: 0.009909, lowPrice: 0.009789 },
    '01': { openPrice: 0.010031, highPrice: 0.010041, lowPrice: 0.009883 },
    '05': { openPrice: 0.009891, highPrice: 0.010037, lowPrice: 0.009882 },
    '09': { openPrice: 0.009969, highPrice: 0.01048, lowPrice: 0.009864 }
  },
  '2021-09-06': {
    '13': { openPrice: 0.009669, highPrice: 0.009748, lowPrice: 0.009624 },
    '17': { openPrice: 0.009737, highPrice: 0.009783, lowPrice: 0.009669 },
    '21': { openPrice: 0.009687, highPrice: 0.009687, lowPrice: 0.009542 },
    '01': { openPrice: 0.009863, highPrice: 0.009926, lowPrice: 0.00981 },
    '05': { openPrice: 0.009826, highPrice: 0.009856, lowPrice: 0.009698 },
    '09': { openPrice: 0.009753, highPrice: 0.009821, lowPrice: 0.009605 }
  },
  '2021-09-07': {
    '13': { openPrice: 0.009415, highPrice: 0.009473, lowPrice: 0.009365 },
    '17': { openPrice: 0.009384, highPrice: 0.009394, lowPrice: 0.009101 },
    '21': { openPrice: 0.009211, highPrice: 0.0093, lowPrice: 0.008419 },
    '01': { openPrice: 0.009645, highPrice: 0.009667, lowPrice: 0.009578 },
    '05': { openPrice: 0.009615, highPrice: 0.009624, lowPrice: 0.009397 },
    '09': { openPrice: 0.009419, highPrice: 0.009601, lowPrice: 0.009408 }
  },
  '2021-09-08': {
    '01': { openPrice: 0.008918, highPrice: 0.009215, lowPrice: 0.008844 },
    '05': { openPrice: 0.008861, highPrice: 0.00893, lowPrice: 0.008841 }
  }
} ,
};

module.exports = btcMarkets;
