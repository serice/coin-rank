const symbols = [
'ETHBTC',
'LTCBTC',
'BNBBTC',
'NEOBTC',
'BCCBTC',
'GASBTC',
'HSRBTC',
'MCOBTC',
'WTCBTC',
'LRCBTC',
'QTUMBTC',
'YOYOBTC',
'OMGBTC',
'ZRXBTC',
'STRATBTC',
'SNGLSBTC',
'BQXBTC',
'KNCBTC',
'FUNBTC',
'SNMBTC',
'IOTABTC',
'LINKBTC',
'XVGBTC',
'SALTBTC',
'MDABTC',
'MTLBTC',
'SUBBTC',
'EOSBTC',
'SNTBTC',
'ETCBTC',
'MTHBTC',
'ENGBTC',
'DNTBTC',
'ZECBTC',
'BNTBTC',
'ASTBTC',
'DASHBTC',
'OAXBTC',
'ICNBTC',
'BTGBTC',
'EVXBTC',
'REQBTC',
'VIBBTC',
'TRXBTC',
'POWRBTC',
'ARKBTC',
'XRPBTC',
'MODBTC',
'ENJBTC',
'STORJBTC',
'VENBTC',
'KMDBTC',
'RCNBTC',
'NULSBTC',
'RDNBTC',
'XMRBTC',
'DLTBTC',
'AMBBTC',
'BATBTC',
'BCPTBTC',
'ARNBTC',
'GVTBTC',
'CDTBTC',
'GXSBTC',
'POEBTC',
'QSPBTC',
'BTSBTC',
'XZCBTC',
'LSKBTC',
'TNTBTC',
'FUELBTC',
'MANABTC',
'BCDBTC',
'DGDBTC',
'ADXBTC',
'ADABTC',
'PPTBTC',
'CMTBTC',
'XLMBTC',
'CNDBTC',
'LENDBTC',
'WABIBTC',
'TNBBTC',
'WAVESBTC',
'GTOBTC',
'ICXBTC',
'OSTBTC',
'ELFBTC',
'AIONBTC',
'NEBLBTC',
'BRDBTC',
'EDOBTC',
'WINGSBTC',
'NAVBTC',
'LUNBTC',
'TRIGBTC',
'APPCBTC',
'VIBEBTC',
'RLCBTC',
'INSBTC',
'PIVXBTC',
'IOSTBTC',
'CHATBTC',
'STEEMBTC',
'NANOBTC',
'VIABTC',
'BLZBTC',
'AEBTC',
'RPXBTC',
'NCASHBTC',
'POABTC',
'ZILBTC',
'ONTBTC',
'STORMBTC',
'XEMBTC',
'WANBTC',
'WPRBTC',
'QLCBTC',
'SYSBTC',
'GRSBTC',
'CLOAKBTC',
'GNTBTC',
'LOOMBTC',
'BCNBTC',
'REPBTC',
'TUSDBTC',
'ZENBTC',
'SKYBTC',
'CVCBTC',
'THETABTC',
'IOTXBTC',
'QKCBTC',
'AGIBTC',
'NXSBTC',
'DATABTC',
'SCBTC',
'NPXSBTC',
'KEYBTC',
'NASBTC',
'MFTBTC',
'DENTBTC',
'ARDRBTC',
'HOTBTC',
'VETBTC',
'DOCKBTC',
'POLYBTC',
'PHXBTC',
'HCBTC',
'GOBTC',
'PAXBTC',
'RVNBTC',
'DCRBTC',
'MITHBTC',
'BCHABCBTC',
'BCHSVBTC',
'RENBTC',
'BTTBTC',
'ONGBTC',
'FETBTC',
'CELRBTC',
'MATICBTC',
'ATOMBTC',
'PHBBTC',
'TFUELBTC',
'ONEBTC',
'FTMBTC',
'BTCBBTC',
'ALGOBTC',
'ERDBTC',
'DOGEBTC',
'DUSKBTC',
'ANKRBTC',
'WINBTC',
'COSBTC',
'COCOSBTC',
'TOMOBTC',
'PERLBTC',
'CHZBTC',
'BANDBTC',
'BEAMBTC',
'XTZBTC',
'HBARBTC',
'NKNBTC',
'STXBTC',
'KAVABTC',
'ARPABTC',
'CTXCBTC',
'BCHBTC',
'TROYBTC',
'VITEBTC',
'FTTBTC',
'OGNBTC',
'DREPBTC',
'TCTBTC',
'WRXBTC',
'LTOBTC',
'MBLBTC',
'COTIBTC',
'STPTBTC',
'SOLBTC',
'CTSIBTC',
'HIVEBTC',
'CHRBTC',
'MDTBTC',
'STMXBTC',
'PNTBTC',
'DGBBTC',
'COMPBTC',
'SXPBTC',
'SNXBTC',
'IRISBTC',
'MKRBTC',
'DAIBTC',
'RUNEBTC',
'FIOBTC',
'AVABTC',
'BALBTC',
'YFIBTC',
'JSTBTC',
'SRMBTC',
'ANTBTC',
'CRVBTC',
'SANDBTC',
'OCEANBTC',
'NMRBTC',
'DOTBTC',
'LUNABTC',
'IDEXBTC',
'RSRBTC',
'PAXGBTC',
'WNXMBTC',
'TRBBTC',
'BZRXBTC',
'WBTCBTC',
'SUSHIBTC',
'YFIIBTC',
'KSMBTC',
'EGLDBTC',
'DIABTC',
'UMABTC',
'BELBTC',
'WINGBTC',
'UNIBTC',
'NBSBTC',
'OXTBTC',
'SUNBTC',
'AVAXBTC',
'HNTBTC',
'FLMBTC',
'SCRTBTC',
'ORNBTC',
'UTKBTC',
'XVSBTC',
'ALPHABTC',
'VIDTBTC',
'AAVEBTC',
'NEARBTC',
'FILBTC',
'INJBTC',
'AERGOBTC',
'AUDIOBTC',
'CTKBTC',
'BOTBTC',
'AKROBTC',
'AXSBTC',
'HARDBTC',
'RENBTCBTC',
'STRAXBTC',
'FORBTC',
'UNFIBTC',
'ROSEBTC',
'SKLBTC',
'SUSDBTC',
'GLMBTC',
'GRTBTC',
'JUVBTC',
'PSGBTC',
'1INCHBTC',
'REEFBTC',
'OGBTC',
'ATMBTC',
'ASRBTC',
'CELOBTC',
'RIFBTC',
'BTCSTBTC',
'TRUBTC',
'CKBBTC',
'TWTBTC',
'FIROBTC',
'LITBTC',
'SFPBTC',
'FXSBTC',
'DODOBTC',
'FRONTBTC',
'EASYBTC',
'CAKEBTC',
'ACMBTC',
'AUCTIONBTC',
'PHABTC',
'TVKBTC',
'BADGERBTC',
'FISBTC',
'OMBTC',
'PONDBTC',
'DEGOBTC',
'ALICEBTC',
'LINABTC',
'PERPBTC',
'RAMPBTC',
'SUPERBTC',
'CFXBTC',
'EPSBTC',
'AUTOBTC',
'TKOBTC',
'TLMBTC',
'MIRBTC',
'BARBTC',
'FORTHBTC',
'EZBTC',
'ICPBTC',
'ARBTC',
'POLSBTC',
'MDXBTC',
'LPTBTC',
'AGIXBTC',
'NUBTC',
'ATABTC',
'GTCBTC',
'TORNBTC',
'BAKEBTC',
'KEEPBTC',
'KLAYBTC',
'BONDBTC',
'MLNBTC',
'QUICKBTC',
'C98BTC',
'CLVBTC',
'QNTBTC',
'FLOWBTC',
'MINABTC',
'FARMBTC',
'ALPACABTC',
'MBOXBTC',
'VGXBTC',
'WAXPBTC',
'TRIBEBTC',
'GNOBTC',
'PROMBTC',
];
module.exports = btcSymbols;
