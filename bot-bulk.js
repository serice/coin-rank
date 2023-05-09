require('dotenv').config()
const request = require('request')
const uuidv4 = require("uuid4")
const sign = require('jsonwebtoken').sign
const crypto = require('crypto')
const queryEncode = require("querystring").encode

const access_key = process.env.ACCESS_KEY;
const secret_key = process.env.SECRET_KEY;
const server_url = 'https://api.upbit.com';

let PRICE = 40000;
let DDD = 1000;
let UUU = 100000;
let ASK_PRICE = PRICE;// + 1000; //PRICE*0.1;
let BID_PRICE = PRICE;// - PRICE*0.2;
let runBid = false;
let runAsk = false;

//// 급매도
 //PRICE = 0;
 PRICE = 10000;
 //BID_PRICE = PRICE;
 ASK_PRICE = PRICE;
 //UUU = 500000000;
 runBid = false;
 runAsk = false;

//// 급매수
// PRICE = 20000;
// BID_PRICE = PRICE;
// ASK_PRICE = PRICE;
// UUU = 50000000;
// runBid = true;
// runAsk = false;

const currrr = {
  'KRW-NEO' : 0,
  'KRW-MTL' : 0, //1000
  'KRW-LTC' : 0,
  'KRW-XRP' : 0,
  'KRW-ETC' : 0, //XXX
  'KRW-OMG' : 0,
  'KRW-SNT' : 0,
  'KRW-WAVES' : 0,
  'KRW-XEM' : 0,
  'KRW-QTUM' : 0,
  'KRW-LSK' : 0,
  'KRW-STEEM' : 0,
  'KRW-XLM' : 0,
  'KRW-ARDR' : 0,
  'KRW-KMD' : 0,
  'KRW-ARK' : 0,
  'KRW-STORJ' : 0,
  'KRW-GRS' : 0,
  'KRW-REP' : 0,
  'KRW-EMC2' : 0,
  'KRW-ADA' : 0,
  'KRW-SBD' : 0,
  'KRW-POWR' : 0,
  'KRW-BTG' : 0,
  'KRW-ICX' : 0,
  'KRW-EOS' : 0, // XXX
  'KRW-TRX' : 0,
  'KRW-SC' : 0,
  'KRW-IGNIS' : 0,
  'KRW-ONT' : 0,
  'KRW-ZIL' : 0,
  'KRW-POLY' : 0,
  'KRW-ZRX' : 0,
  'KRW-LOOM' : 0,
  'KRW-BCH' : 0,
  'KRW-ADX' : 0,
  'KRW-BAT' : 0,
  'KRW-IOST' : 0,
  'KRW-DMT' : 0, //1000
  'KRW-RFR' : 0,
  'KRW-CVC' : 0,
  'KRW-IQ' : 0, //
  'KRW-IOTA' : 0,
  'KRW-MFT' : 0,
  'KRW-ONG' : 0,
  'KRW-GAS' : 0,
  'KRW-UPP' : 0,
  'KRW-ELF' : 0,
  'KRW-KNC' : 0,
  'KRW-THETA' : 0,
  'KRW-EDR' : 0,
  'KRW-QKC' : 0,
  'KRW-BTT' : 0,
  'KRW-MOC' : 0,
  'KRW-ENJ' : 0,
  'KRW-TFUEL' : 0,
  'KRW-MANA' : 0,
  'KRW-ANKR' : 0, // ?????????? 해도 됨
  'KRW-NPXS' : 0,
  'KRW-AERGO' : 0,
  'KRW-ATOM' : 0,
  'KRW-CRE' : 0, //1000
  'KRW-MBL' : 0,
  'KRW-TSHP' : 0, //1000
  'KRW-HBAR' : 0,
  'KRW-MLK' : 0,
  'KRW-STPT' : 0,
  'KRW-ORBS' : 0,
  'KRW-VET' : 0,
  'KRW-CHZ' : 0,
  'KRW-PXL' : 0,
  'KRW-STMX' : 0, //1000
  'KRW-HIVE' : 0,
  'KRW-KAVA' : 0,
  'KRW-AHT' : 0,
  'KRW-SPND' : 0,
  'KRW-LINK' : 0,
  'KRW-XTZ' : 0,
  'KRW-JST' : 0,
  'KRW-CRO' : 0,
  'KRW-TON' : 0,
  'KRW-SXP' : 0,
  'KRW-LAMB' : 0,
  'KRW-HUNT' : 0,
  'KRW-MARO' : 0,
  'KRW-DOT' : 0,
  'KRW-SRM' : 0,
  'KRW-MVL' : 0,
  'KRW-STRAX' : 0,
  'KRW-AQT' : 0,
  'KRW-GLM' : 0,
  'KRW-SSX' : 0,
  'KRW-META' : 0,
  'KRW-OBSR' : 0,
  'KRW-FCT2' : 0,
  'KRW-LBC' : 0,
  'KRW-CBK' : 0,
  'KRW-SAND' : 0,
  'KRW-HUM' : 0,
//'KRW-QTCON' : 0,
//'KRW-BCHA' : 0,
//'KRW-PCI' : 0,
//'KRW-PLA' : 0, XXX
//'KRW-BORA' : 0,
//'KRW-GTO' : 0, //XXX
//'KRW-BSV' : 0,
//'KRW-TT' : 0, XXX
// 'KRW-SOLVE' : 0, XXX
//'KRW-WAXP' : 0,
//'KRW-MED' : 0,
//'KRW-DKA' : 0,
//'KRW-BTC' : 0,
//'KRW-ETH' : 0,
};

// 숫자 타입에서 쓸 수 있도록 format() 함수 추가
Number.prototype.format = function(){
    if(this==0) return 0;
 
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (this + '');
 
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
 
    return n;
};
 
// 문자열 타입에서 쓸 수 있도록 format() 함수 추가
String.prototype.format = function(){
    var num = parseFloat(this);
    if( isNaN(num) ) return "0";
 
    return num.format();
};

const payload = {
    access_key: access_key,
    nonce: uuidv4(),
}

const token = sign(payload, secret_key)

/*
  {
    "currency": "SSX",
    "balance": "421.94092827",
    "locked": "0.0",
    "avg_buy_price": "23.7",
    "avg_buy_price_modified": false,
    "unit_currency": "KRW"
  }
*/
const accountOptions = {
    method: "GET",
    url: server_url + "/v1/accounts",
    headers: {Authorization: `Bearer ${token}`},
}

/*
  {
    market: 'KRW-MVL',
    trade_date: '20210130',
    trade_time: '175655',
    trade_date_kst: '20210131',
    trade_time_kst: '025655',
    trade_timestamp: 1612029415000,
    opening_price: 2.86,
    high_price: 2.95,
    low_price: 2.75,
    trade_price: 2.81,
    prev_closing_price: 2.87,
    change: 'FALL',
    change_price: 0.06,
    change_rate: 0.0209059233,
    signed_change_price: -0.06,
    signed_change_rate: -0.0209059233,
    trade_volume: 400,
    acc_trade_price: 960971922.2964262,
    acc_trade_price_24h: 1121931739.991464,
    acc_trade_volume: 339802030.4770012,
    acc_trade_volume_24h: 396001190.9644212,
    highest_52_week_price: 5.82,
    highest_52_week_date: '2020-12-06',
    lowest_52_week_price: 1.11,
    lowest_52_week_date: '2020-10-30',
    timestamp: 1612029415988
  },
*/
const tickerOptions = {
    method: "GET",
    url: server_url + "/v1/ticker",
    headers: {Authorization: `Bearer ${token}`},
}

function bid( market, gap, trade_price, price ) {

    if(!runBid) {
      console.log(`  + NOT bid : ${market}( ${price.format()} ) +`, gap);
      return;
    }
    console.log(`  + bid : ${market}( ${price.format()} ) +`, gap);

    const body = {
       // market: 'KRW-BTC',
       // side: 'bid',
       // volume: '0.01',
       // price: '100',
       // ord_type: 'limit',
        market: market,
        side: 'bid',
        price: gap,
        ord_type: 'price',
    }
    
    const query = queryEncode(body)
    
    const hash = crypto.createHash('sha512')
    const queryHash = hash.update(query, 'utf-8').digest('hex')
    
    const payload = {
        access_key: access_key,
        nonce: uuidv4(),
        query_hash: queryHash,
        query_hash_alg: 'SHA512',
    }
    
    const token = sign(payload, secret_key)
    
    const options = {
        method: "POST",
        url: server_url + "/v1/orders",
        headers: {Authorization: `Bearer ${token}`},
        json: body
    }
    
    request(options, (error, response, body) => {
        if (error) {
		console.log(error);
		throw new Error(error)
	}
        console.log(body)
    })
}

request(accountOptions, (error, response, accountData) => {
    if (error) {
    	console.log(error);
    	throw new Error(error)
    }
    const accounts = JSON.parse(accountData);
console.log(accounts);
    const currencies = accounts.reduce((acc,cur) => {
        switch(cur.currency) {
          case 'KRW':
          case 'VTHO':
          case 'DON':
          case 'AUCTION':

          case 'PCI':
          case 'BORA':
          case 'QTCON':
          case 'BTC':
          case 'ETH':
          case 'BTT':
          case 'NPXS':
//          case 'MFT':
//          case 'IQ':
            return acc;
        }

        acc[cur.unit_currency + '-' + cur.currency] = cur;
        return acc;
    }, currrr);

    const markets = Object.keys(currencies).join(',');
    tickerOptions.url = tickerOptions.url + '?markets=' + markets;
    request(tickerOptions, (error, response, tickerData) => {
        if (error) {
		console.log(error);
		throw new Error(error)
	}
console.log(tickerData);

        const tickers = JSON.parse(tickerData);
	let total = 0;
	let total_count = 0;
	let bid_gap_total = 0;
	let ask_gap_total = 0;
	let real_bid_gap_total = 0;
	let real_ask_gap_total = 0;
	let gap_total = 0;

        tickers.map( t => {
            const price = (Math.round(currencies[t.market].balance * t.trade_price) * 100) / 100 || 0;
            const gap = price - PRICE;

            if( price < DDD ) {
              return;
            }
            if( price > UUU ) {
              return;
            }

	    total = total + price;
	    total_count++;
            gap_total = gap_total + gap;

            let TERM = 1001;

            switch(t.market) {
              case 'KRW-XLM':
              case 'KRW-ADA':
              case 'KRW-BCH':
              case 'KRW-BTC':
              case 'KRW-ETH':
              case 'KRW-XEM':
              case 'KRW-SNT':
                TERM = 5001;
            }

            if( price < BID_PRICE ) {
              bid_gap_total = bid_gap_total + gap;
              if( (gap*-1) >= TERM ) {
                real_bid_gap_total = real_bid_gap_total + gap;
                bid(t.market, gap*-1, t.trade_price, price);
              }
            } else if( price > ASK_PRICE ){
              ask_gap_total = ask_gap_total + gap;
              if( gap >= TERM ) {
                real_ask_gap_total = real_ask_gap_total + gap;
                ask(t.market, gap, t.trade_price, price);
              }
            } else {
            }
        })

        console.log((real_bid_gap_total + real_ask_gap_total).format(), gap_total.format(), bid_gap_total.format(), ask_gap_total.format(), total.format(), total_count.format(), (total / total_count).format());

    })
})
