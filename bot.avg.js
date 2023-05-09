require('dotenv').config()
const request = require('request')
const uuidv4 = require("uuid4")
const sign = require('jsonwebtoken').sign
const crypto = require('crypto')
const queryEncode = require("querystring").encode
const dayjs = require("dayjs")
const utc = require('dayjs/plugin/utc')


// 특정 금액 팔기 ( 급매 )
// 특정 금액 남기기 ( 급 매수 )
// 평균가로 맞추기
// 위아래 금액만 평균가로 맞추기
// 특정 금액 사기
// 아래 금액만 사기
// 위 금액만 사기 // ... ?
// 위 금액만 팔기 // ... ?


let ASK_PERCENT = 50; // %비율로 판매
ASK_PERCENT = 0; // %비율로 판매
//let ASK_PRICE = 50000;   // 특정 금액 남기고 판매
let ASK_PRICE = 1000;   // 특정 금액 남기고 판매
let BID_PRICE = 120000; // 특정 금액 구매
BID_PRICE = 0; // 특정 금액 구매
let FIXED_KRW = 0; // 57% // 특정 금액은 남기고...
let PER_PRICE = 92; // 57% // 현금 비율
PER_PRICE = 100; // 57%
const runBid = false;
const runAsk = false;
let DDD = 0;
let UUU = 1000000;

const UTERM = 10; // % percent
const DTERM = -10; // % percent

// 급매도
//ASK_PRICE = 5000;
// runBid = true;
// runAsk = true;

const access_key = process.env.ACCESS_KEY;
const secret_key = process.env.SECRET_KEY;

const server_url = 'https://api.upbit.com';

const TRADE_CURRENCY = {
	'KRW-QTUM' : 0,
	'KRW-REP' : 0,
	'KRW-SBD' : 0,
	'KRW-IGNIS' : 0,
	//'KRW-SRN' : 0,
	'KRW-ZRX' : 0,
	'KRW-TRX' : 0,
	'KRW-ICX' : 0,
	'KRW-STMX' : 0, //1000
	'KRW-ONT' : 0,
	'KRW-POLY' : 0,
	'KRW-GAS' : 0,
	'KRW-KNC' : 0,
	'KRW-OMG' : 0,
	'KRW-LBC' : 0,
	'KRW-EMC2' : 0,
	'KRW-LSK' : 0,
	'KRW-IOST' : 0,
	'KRW-IQ' : 0, //
	'KRW-ENJ' : 0,
	//'KRW-NPXS' : 0,
	'KRW-THETA' : 0,
	'KRW-XTZ' : 0,
	'KRW-STRK' : 0,  // -------- 구매 못하게
	'KRW-MARO' : 0,
	'KRW-TSHP' : 0, //1000
	'KRW-CRE' : 0, //1000
	'KRW-LINK' : 0,
//	'KRW-DOT' : 0,
	'KRW-SXP' : 0,  // -------- 구매 못하게
	'KRW-ETC' : 0, //XXX
	'KRW-LTC' : 0, //XXX
	'KRW-WAVES' : 0,
	//'KRW-STRAX' : 0,
	'KRW-SRM' : 0,
	'KRW-DAWN' : 0,
	'KRW-FLOW' : 0,
	'KRW-SC' : 0,
	'KRW-NEO' : 0,
	'KRW-MTL' : 0, //1000
	'KRW-ARDR' : 0,
	'KRW-KMD' : 0,
	'KRW-ARK' : 0,
	'KRW-STORJ' : 0,
	'KRW-GRS' : 0,
	'KRW-POWR' : 0,
//	'KRW-BTG' : 0,
	'KRW-ZIL' : 0,
	'KRW-LOOM' : 0,
	'KRW-ADX' : 0,
	'KRW-BAT' : 0,
	'KRW-DMT' : 0, //1000
	'KRW-RFR' : 0,
	'KRW-CVC' : 0,
	'KRW-STEEM' : 0,
	'KRW-IOTA' : 0,
	'KRW-MFT' : 0,
	'KRW-ONG' : 0,
	'KRW-UPP' : 0,
	'KRW-ELF' : 0,
	'KRW-EDR' : 0,
	'KRW-QKC' : 0,
//	'KRW-BTT' : 0,
	'KRW-MOC' : 0,
	'KRW-TFUEL' : 0,
	'KRW-MANA' : 0,
	'KRW-ANKR' : 0, // ?????????? 해도 됨
	'KRW-AERGO' : 0,
	'KRW-ATOM' : 0,
	'KRW-MBL' : 0,
	'KRW-HBAR' : 0,
	'KRW-MLK' : 0,
	'KRW-STPT' : 0,
	'KRW-ORBS' : 0,
	'KRW-VET' : 0,
	'KRW-CHZ' : 0,
	'KRW-PXL' : 0,
	'KRW-HIVE' : 0,
	'KRW-KAVA' : 0,
	'KRW-AHT' : 0,
	'KRW-JST' : 0,
	'KRW-CRO' : 0,
	'KRW-TON' : 0,
	'KRW-LAMB' : 0,
	'KRW-HUNT' : 0,
	'KRW-MVL' : 0,
	'KRW-AQT' : 0,
	'KRW-GLM' : 0,
	'KRW-SSX' : 0,
	'KRW-META' : 0,
	'KRW-OBSR' : 0,
	'KRW-FCT2' : 0,
//	'KRW-CBK' : 0, // 고정
	'KRW-SAND' : 0,
	'KRW-HUM' : 0,
	'KRW-QTCON' : 0,
	'KRW-BCHA' : 0,
	'KRW-PCI' : 0,
	'KRW-PLA' : 0, //XXX
	'KRW-BORA' : 0,
	'KRW-BSV' : 0, //XXX
	'KRW-TT' : 0, //XXX
	'KRW-SOLVE' : 0, //XXX
	'KRW-WAXP' : 0,
	'KRW-MED' : 0,
	'KRW-DKA' : 0,

	//'KRW-GTO' : 0, //XXX
	//'KRW-OST' : 0,

  	'KRW-ADA' : 0,
  	'KRW-XRP' : 0,
  	'KRW-XLM' : 0,
  	'KRW-BCH' : 0, // XXX
  	'KRW-EOS' : 0, // XXX
  	'KRW-XEM' : 0,
  	'KRW-SNT' : 0,
  	'KRW-DOGE' : 0,
  	'KRW-STX' : 0,
  	'KRW-DAWN' : 0,


//	'KRW-PUNDIX' : 0,

//	'KRW-BTC' : 0,
	'KRW-ETH' : 0,
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

async function ask( market, gap, volume, trade_price, price ) {
    if(!runAsk) {
      console.log(`  - NOT ask : ${market}( ${price.format()} , ${trade_price.format()} ) +`, gap.format(), volume); 
      return;
    }
    console.log(`  - ask : ${market}( ${price.format()} , ${trade_price.format()} ) +`, gap.format(), volume);

    const body = {
        market: market,
        side: 'ask',
        volume: '' + volume,
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
}

async function bid( market, gap, trade_price, price ) {

    if(!runBid) {
      console.log(`  + NOT bid : ${market}( ${price.format()} , ${trade_price.format()} ) +`, gap.format());
      return;
    }
    console.log(`  + bid : ${market}( ${price.format()} , ${trade_price.format()} ) +`, gap.format());

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
    
    await sleep(100);
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

    const tickers = await req(tickerOptions);
    return tickers.reduce((rtn, cur) => {
    	rtn[cur.market] = cur.trade_price;
    	return rtn;
    }, {});
}

function isTrade(market) {
return true;
    switch(market) {
         case 'KRW-XRP' :
         case 'KRW-DOGE' :
         case 'KRW-EMC2' :
         case 'KRW-STX' :
         case 'KRW-XLM' :
         case 'KRW-DAWN' :
         case 'KRW-EOS' :
         case 'KRW-ETH' :
         case 'KRW-TRX' :
         case 'KRW-ADA' :
         case 'KRW-BCH' :
         case 'KRW-STRK' :
         case 'KRW-VET' :
         case 'KRW-ZRX' :
         case 'KRW-SNT' :
         case 'KRW-BCHA' :
         case 'KRW-ETC' :
         case 'KRW-LTC' :
         case 'KRW-NEO' :
         case 'KRW-MANA' :
         case 'KRW-XTZ' :
         case 'KRW-BSV' :
         case 'KRW-IOST' :
         case 'KRW-ATOM' :
         case 'KRW-IOTA' :
         case 'KRW-BAT' :
         case 'KRW-HBAR' :
         case 'KRW-LINK' :
             return true;
    }
    return false;
}

async function getTradeCurrency() {
    const token = createToken();
    const accountOptions = {
        method: "GET",
        url: server_url + "/v1/accounts",
        headers: {Authorization: `Bearer ${token}`},
    }

    const accounts = await req(accountOptions);
    let krw = 0;
    const currencies = accounts.reduce((rtn,cur) => {
        switch(cur.currency) {
          case 'KRW':
            krw = cur.balance;
          case 'NPXS':
          case 'VTHO':
          case 'DON':
          case 'AUCTION':
          case 'PUNDIX' :
          //case 'STX' :

          //case 'SXP' :

	 //case 'SRN' :
	 //case 'NPXS' :
	 //case 'THETA' :
	 //case 'ETC' :
	 //case 'LTC' :
	 //case 'STRAX' :
	 //case 'BSV' :
	 //case 'GTO' :
	 //case 'OST' :
	 //case 'ADA' :
	 //case 'XRP' :
	 //case 'BCH' :
	 //case 'EOS' :
	 //case 'SSX' :
	 //case 'CBK' :
	 //case 'HBAR' :
	 case 'BTG' :
	 case 'XEM' :
            delete rtn[cur.unit_currency + '-' + cur.currency];
            return rtn;

         case 'XRP' :
         case 'LINK' :
         case 'DOGE' :
         case 'EMC2' :
         case 'STX' :
         case 'XLM' :
         case 'DAWN' :
         case 'EOS' :
         case 'ETH' :
         case 'TRX' :
         case 'ADA' :
         case 'BCH' :
         case 'STRK' :
         case 'VET' :
         case 'ZRX' :
         case 'SNT' :
         case 'BCHA' :
         case 'ETC' :
         case 'LTC' :
         case 'NEO' :
         case 'MANA' :
         case 'XTZ' :
         case 'BSV' :
         case 'IOST' :
         case 'ATOM' :
         case 'IOTA' :
         case 'BAT' :
    	    rtn[cur.unit_currency + '-' + cur.currency] = cur;
    	    return rtn;

         default :
         //   delete rtn[cur.unit_currency + '-' + cur.currency];
          //  return rtn;
        }

        // 위 defalut check
    	rtn[cur.unit_currency + '-' + cur.currency] = cur;
    	return rtn;
    }, TRADE_CURRENCY);

    return { krw, currencies };
}

async function main() {
  let total = 0;
  let total_count = 0;
  let bid_gap_total = 0;
  let ask_gap_total = 0;
  let real_bid_gap_total = 0;
  let real_ask_gap_total = 0;
  let gap_total = 0;

  let {krw, currencies} = await getTradeCurrency();
  const tickers = await getTicker(currencies);

  // 특정 금액 더 구매 하기
  if( BID_PRICE !== 0 ) { 
    let i = 0;
    const currenciesKey = Object.keys(currencies);
    let sum = 0;

    for( const market of currenciesKey ) {

      if(!isTrade(market)) continue;

      const price = (currencies[market].balance || 0) * tickers[market]; 

      i++;
      if( i % 8 === 0 ) {
          await sleep(1000);
      }

      if( price < UUU ) {
      console.log('');
      console.log(` + BID : , ${market}, (${price.format()}), bid : ${BID_PRICE.format()}`);

      sum = sum + BID_PRICE;
      await bid( market, BID_PRICE, tickers[market], price );
      console.log(sum.format());
      }
    }
  }
  // 일정 금액으로 팔기
  else if( ASK_PRICE !== 0 ) {
    let i = 0;
    const currenciesKey = Object.keys(currencies);

    for( const market of currenciesKey ) {

      if(!isTrade(market)) continue;

      const price = currencies[market].balance * tickers[market]; 
      if( price > DDD ) {
        const volume = currencies[market].balance - Math.round((ASK_PRICE/tickers[market])*100000000)/100000000;
        const volumePrice = (Math.round(volume * tickers[market])); 

        i++;
        if( i % 8 === 0 ) {
            await sleep(1000);
        }

        console.log('');
        console.log(` - ASK : , ${market}, (${price}), coin: ${currencies[market].balance}, ask-coin : ${volume}, gap : ${volumePrice.format()}`);

        await ask( market, Math.round(volumePrice), volume, tickers[market], price );
      }
    }
  }
  // 일정 비율로 팔기
  else if( ASK_PERCENT !== 0 ) { 
    let i = 0;
    const currenciesKey = Object.keys(currencies);

    for( const market of currenciesKey ) {

      if(!isTrade(market)) continue;

      const price = currencies[market].balance * tickers[market]; 
      if( price > DDD ) {
        const volume = Math.round(((currencies[market].balance * ASK_PERCENT)/100)*100000000)/100000000;
        const volumePrice = (Math.round(volume * tickers[market])); 

        i++;
        if( i % 8 === 0 ) {
            await sleep(1000);
        }

        console.log('');
        console.log(` - ASK : , ${market}, (${price}), coin: ${currencies[market].balance}, ask-coin : ${volume}, gap : ${volumePrice.format()}`);

        await ask( market, Math.round(volumePrice), volume, tickers[market], price );
      }
    }
  }
  // 평균으로 가격을 맞춘다.
  else {
    let i = 0;
    let totalPrice = 0;
    let avgPrice = 0;
    let cnt = 0;

    let propit = 0;

    const currenciesKey = Object.keys(currencies);
    for( const market of currenciesKey ) {

      if(!isTrade(market)) continue;

      const price = currencies[market].balance * tickers[market]; 
      if( price > DDD ) {
        cnt++;
        totalPrice = totalPrice + price;
      }
    }
    krw = krw - FIXED_KRW;
    const sumPrice = parseFloat(krw) + parseFloat(totalPrice);
    const perPrice = sumPrice*PER_PRICE / 100;

    avgPrice = totalPrice / cnt;

    console.log( krw, sumPrice, perPrice, avgPrice, perPrice / cnt);
    console.log( krw, sumPrice, perPrice, avgPrice, perPrice / cnt);
    console.log( krw, sumPrice, perPrice, avgPrice, perPrice / cnt);

    avgPrice = (perPrice / cnt);

    for( const market of currenciesKey ) {

      if(!isTrade(market)) continue;

      let TERM = 5001;

      const price = currencies[market].balance * tickers[market]; 
      const ggg = price - avgPrice;
      const ttt = parseInt((price/avgPrice)*100);

      if( ttt < 110 && ttt > 90 ) continue;

      propit = propit + ( 100 - ttt );

      console.log( market, ggg, ttt );

      if( price < avgPrice ) {
        const gap = Math.ceil(price - avgPrice);
        bid_gap_total = bid_gap_total + gap;

        if( (gap*-1) >= TERM ) {
          real_bid_gap_total = real_bid_gap_total + gap;

          i++;
          if( i % 8 === 0 ) {
              await sleep(1000);
          }

          console.log('');
          console.log(` + BID : , ${market}, (${price}), total : ${totalPrice}, avg : ${avgPrice}`);

          await bid( market, (gap*-1), tickers[market], price );
        }
      } else {
        const gap = Math.round(price - avgPrice);
        ask_gap_total = ask_gap_total + gap;

        if( gap >= TERM ) {
          real_ask_gap_total = real_ask_gap_total + gap;

          i++;
          if( i % 8 === 0 ) {
              await sleep(1000);
          }

          console.log('');
          console.log(` - ASK : , ${market}, (${price}), total : ${totalPrice}, avg : ${avgPrice}`);

          const volume = ((gap/tickers[market])*100000000)/100000000;
          await ask( market, (gap), volume, tickers[market], price );
        }
      }
    }

    console.log(``);
    console.log(`------------------------------------------------------------`);
    console.log(`-`, dayjs().format('YYYY/MM/DD HH:mm:ss'));
    console.log(`- TOTAL : ${totalPrice.format()}, AVG : ${avgPrice.format()}, CNT : ${cnt}`);
    console.log(`- PER_PRICE : ${perPrice.format()}`);
    console.log(`- BID : ${real_bid_gap_total.format()}, ASK : ${real_ask_gap_total.format()}`);
    console.log(`- PROPIT : ${propit/cnt}`);
    console.log(`-`);
    console.log(`------------------------------------------------------------`);
    console.log(``);
  }

  console.log((real_bid_gap_total + real_ask_gap_total).format(), gap_total.format(), bid_gap_total.format(), ask_gap_total.format(), total.format(), total_count.format(), (total / total_count).format());
}

main().then();
