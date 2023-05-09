require('dotenv').config()
const request = require('request')
const uuidv4 = require("uuid4")
const sign = require('jsonwebtoken').sign
const crypto = require('crypto')
const queryEncode = require("querystring").encode
const dayjs = require("dayjs")
const utc = require('dayjs/plugin/utc')

let isBid = true;
let PRICE = 30000;
let ASK_PRICE = PRICE;
let BID_PRICE = PRICE - PRICE*0.1;
let DDD = 1000;
let UUU = 100000;
let runBid = true;
let runAsk = false;

// 급매도
// ASK_PRICE = 1000;
//  isBid = false;
//  PRICE = 100;
//  runAsk = true;

const access_key = process.env.ACCESS_KEY;
const secret_key = process.env.SECRET_KEY;
const server_url = 'https://api.upbit.com';

const TRADE_CURRENCY = {
'KRW-NEO' : 0,
'KRW-MTL' : 0, //1000
'KRW-LTC' : 0,
//'KRW-XRP' : 0,
'KRW-ETC' : 0, //XXX
'KRW-OMG' : 0,
//'KRW-SNT' : 0,
'KRW-WAVES' : 0,
'KRW-XEM' : 0,
'KRW-QTUM' : 0,
'KRW-LSK' : 0,
'KRW-STEEM' : 0,
//'KRW-XLM' : 0,
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
'KRW-SRN' : 0,
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
//'KRW-OST' : 0,
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


function createToken(body) {
    let payload = null;
    if(body) {
        const query = queryEncode(body)
        const hash = crypto.createHash('sha512')
        const queryHash = hash.update(query, 'utf-8').digest('hex')
        

        payload = {
            access_key: access_key,
            nonce: uuidv4(),
            query_hash: queryHash,
            query_hash_alg: 'SHA512',
        }
    } else {
        payload = {
            access_key: access_key,
            nonce: uuidv4()
        }
    }

    const token = sign(payload, secret_key)

    return token;
}

async function sleep (sec) {
    return new Promise((resolve, reject) => { setTimeout(() => resolve(true), sec) })
}

async function req(opt) {
    return new Promise((resolve, reject) => {
        request(opt, (error, response, data) => {
            if (error) throw new Error(error)

            const res = (typeof data === 'object') ? data : JSON.parse(data);
            resolve(res);
        })
    });
}

/*
bidding {
  uuid: '3cdb5def-0a0e-46b6-8f02-2b18020cf3b8',
  side: 'bid',
  ord_type: 'price',
  price: '1951.0',
  state: 'wait',
  market: 'KRW-CBK',
  created_at: '2021-02-11T12:51:16+09:00',
  volume: null,
  remaining_volume: null,
  reserved_fee: '0.9755',
  remaining_fee: '0.9755',
  paid_fee: '0.0',
  locked: '1951.9755',
  executed_volume: '0.0',
  trades_count: 0
}
*/

function makePrice(price) {
  let unit = 0;
  if( price >= 2000000 ) {
    unit = 1000;
  } else if ( price >= 1000000 && price < 2000000 ) {
    unit = 500;
  } else if ( price >= 500000 && price < 1000000 ) {
    unit = 100;
  } else if ( price >= 100000 && price < 500000 ) {
    unit = 50;
  } else if ( price >= 10000 && price < 100000 ) {
    unit = 10;
  } else if ( price >= 1000 && price < 10000 ) {
    unit = 5;
  } else if ( price >= 100 && price < 1000 ) {
    unit = 1;
  } else if ( price >= 10 && price < 100 ) {
    unit = 0.1;
  } else if ( price >= 0 && price < 10 ) {
    unit = 0.01;
  }

  const newPrice = Math.round(price/unit)*unit;
  return newPrice;
}

async function askOrders( market ) {
  const body = {
      state: 'wait',
      market: market,
      limit: 30,
      order_by: 'asc',
  }
  
  const query = queryEncode(body);
  const token = createToken(body);
  
  const options = {
      method: "GET",
      url: server_url + "/v1/orders?" + query,
      headers: {Authorization: `Bearer ${token}`},
      json: body
  }
  const orders = await req(options);
  return orders;
}

async function cancelOrder( uuid ) {
  const body = {
      uuid: uuid
  }
  
  const query = queryEncode(body)
  const token = createToken(body);
  
  const options = {
      method: "DELETE",
      url: server_url + "/v1/order?" + query,
      headers: {Authorization: `Bearer ${token}`},
      json: body
  }
  
  await req(options);
}

async function askSpider( market ) {
    const term = 10;

    const orders = await askOrders(market);
    if(orders && orders.length) {
        console.log(`  C ask cancel : ${market}( ${orders.length} )`);
        console.log(orders);
        for( let i = 0; i < orders.length; i++ ) {
            await cancelOrder(orders[i].uuid);
            if( i % 3 === 0 ) {
                await sleep(1000);
            }
        }
    }

    const accounts = await getTradeCurrency();
        const body = {
            market: market,
            side: 'ask',
            volume: parseFloat(accounts[market].balance),
            ord_type: 'market',
        }
        
        const token = createToken(body);
        
        const options = {
            method: "POST",
            url: server_url + "/v1/orders",
            headers: {Authorization: `Bearer ${token}`},
            json: body
        }
        
        const ask = await req(options);
        console.log(`  A ask cancel : ${market}( ${ask.volume} : ${ask.price} )`);
return;

    //const accounts = await getTradeCurrency();
    termPrice = accounts[market].avg_buy_price/term;
    termBalnce = (parseFloat(accounts[market].balance) + parseFloat(accounts[market].locked))/term;

    for( let i = term; i > 0; i-- ) {
        const body = {
            market: market,
            side: 'ask',
            volume: termBalnce,
            price: makePrice(parseFloat(accounts[market].avg_buy_price) + (parseFloat(termPrice) * i)),
            ord_type: 'limit',
        }
        
        const token = createToken(body);
        
        const options = {
            method: "POST",
            url: server_url + "/v1/orders",
            headers: {Authorization: `Bearer ${token}`},
            json: body
        }
        
        const ask = await req(options);
        console.log(`  A ask cancel : ${market}( ${ask.volume} : ${ask.price} )`);
        if( i % 3 === 0 ) {
            await sleep(1000);
        }
    }
}

async function ask( market, gap, trade_price, price ) {
    if(!runAsk) {
      console.log(`  - NOT ask : ${market}( ${price.format()} ) +`, gap);
      return;
    }
    console.log(`  - ask : ${market}( ${price.format()} ) +`, gap);

    return;
    const orders = await askOrders(market);
    if(orders && orders.length) {
        console.log(`  C ask cancel : ${market}( ${orders.length} )`);
        for( let i = 0; i < orders.length; i++ ) {
            await cancelOrder(orders[i].uuid);
            if( i % 3 === 0 ) {
                await sleep(1000);
            }
        }
    }
}

async function bid( market, gap, trade_price, price ) {

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
    
    const token = createToken(body);
    
    const options = {
        method: "POST",
        url: server_url + "/v1/orders",
        headers: {Authorization: `Bearer ${token}`},
        json: body
    }
    
    const result = await req(options);
    return result;
}

async function getTicker(currencies) {
    const token = createToken();
    const tickerOptions = {
        method: "GET",
        url: server_url + "/v1/ticker",
        headers: {Authorization: `Bearer ${token}`},
    }
    const markets = Object.keys(currencies).join(',');
    tickerOptions.url = tickerOptions.url + '?markets=' + markets;

    return await req(tickerOptions);
}


async function getTradeCurrency() {
    const token = createToken();
    const accountOptions = {
        method: "GET",
        url: server_url + "/v1/accounts",
        headers: {Authorization: `Bearer ${token}`},
    }

    const accounts = await req(accountOptions);
    const currencies = accounts.reduce((acc,cur) => {
        switch(cur.currency) {
          case 'KRW':
          case 'VTHO':
          case 'PCI':
          case 'BORA':
          case 'QTCON':
          case 'BTC':
          case 'ETH':
          case 'XRP':
          // case 'BTT':
          // case 'NPXS':
          // case 'MFT':
          // case 'IQ':
            return acc;
        }
    
    	acc[cur.unit_currency + '-' + cur.currency] = cur;
    	return acc;
    }, {});

    return currencies;
}

async function main() {
  let total = 0;
  let total_count = 0;
  let bid_gap_total = 0;
  let ask_gap_total = 0;
  let real_bid_gap_total = 0;
  let real_ask_gap_total = 0;
  let gap_total = 0;

  const currencies = await getTradeCurrency();
//console.log(currencies);
  const tickers = await getTicker(currencies);

  for( const ticker of tickers ) {
    let TERM = 1001;
    switch(ticker.market) {
//      case 'KRW-XLM':
      case 'KRW-ADA':
      case 'KRW-BCH':
      case 'KRW-BTC':
      case 'KRW-ETH':
      case 'KRW-XEM':
//      case 'KRW-SNT':
      case 'KRW-EOS':
      case 'KRW-ICX':
      case 'KRW-DMT':
        TERM = 5001;
    }


    const price = (Math.round(
            ((parseFloat(currencies[ticker.market].balance) + parseFloat(currencies[ticker.market].locked))
            * ticker.trade_price)
          * 100) / 100)
        || 0;

    const gap = price - PRICE;
            await askSpider(ticker.market);
continue;

    if( isBid ) {
      if( price < BID_PRICE ) {
        bid_gap_total = bid_gap_total + gap;
        if( (gap*-1) >= TERM ) {
          real_bid_gap_total = real_bid_gap_total + gap;
          const bidding = await bid( ticker.market, gap*-1, ticker.trade_price, price );
          if( bidding ) {
            await askSpider(ticker.market);
          }
        }
      }
    } else {
      if( gap >= TERM ) {
        real_ask_gap_total = real_ask_gap_total + gap;
        await ask( ticker.market, gap, ticker.trade_price, price );
      }
    }
  }

  console.log((real_bid_gap_total + real_ask_gap_total).format(), gap_total.format(), bid_gap_total.format(), ask_gap_total.format(), total.format(), total_count.format(), (total / total_count).format());
}

main().then();
