require('dotenv').config()
const request = require('request')
const uuidv4 = require("uuid4")
const sign = require('jsonwebtoken').sign
const crypto = require('crypto')
const queryEncode = require("querystring").encode
const dayjs = require("dayjs")
const utc = require('dayjs/plugin/utc')

const UTERM = 10; // % percent
const DTERM = -10; // % percent

const access_key = process.env.ACCESS_KEY;
const secret_key = process.env.SECRET_KEY;

const server_url = 'https://api.upbit.com';

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
    return new Promise((resolve, reject) => { setTimeout(() => resolve(true), sec*1000) })
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

async function getCandels(market, date, unit = 60, count = 167) {
    const token = createToken();
    const candelOptions = {
        method: "GET",
        url: server_url + `/v1/candles/minutes/${unit}?market=${market}&count=${count}`,
        headers: {Authorization: `Bearer ${token}`},
    }

    if(date) {
      candelOptions.url = candelOptions.url + `&to=${date}`;
    }

    const candels = await req(candelOptions);
    return candels
}


async function getMarketSymbols(keyCurrency = 'KRW') {
    const token = createToken();
    const symbolOptions = {
        method: "GET",
        url: server_url + "/v1/market/all?isDetails=false",
        headers: {Authorization: `Bearer ${token}`},
    }

    const symbols = await req(symbolOptions);
    // const markets = symbols.filter((s)=>s.market.indexOf(keyCurrency + '-') === 0).map((s)=>s.market)
    const markets = symbols.map((s)=>s.market)
    return markets;
}

async function main() {
  // let {krw, currencies} = await getTradeCurrency();
  const markets = await getMarketSymbols();
  console.log('const markets = {')
  for( m of markets ) {
    console.log(`'${m}': [`)
    let initDate = dayjs('2021-04-01');
    while(initDate.isBefore(dayjs('2021-09-05'))) {
      // console.log(initDate.format('YYYY-MM-DD HH:mm:ss'))
      initDate = initDate.add(7, 'days')
      const candels = await getCandels(m, initDate.format('YYYY-MM-DD HH:mm:ss'));
      candels.map((c)=>{
        console.log({date: c.candle_date_time_kst, openp: c.opening_price, tradp: c.trade_price}, ", ")
      })
      await sleep(1)
    }
    await sleep(3)
    console.log(`], `);
  }
  console.log('}')
  // const candels = await getCandels(markets[0], initDate.format('YYYY-MM-DD HH:mm:ss'));
  // console.log(candels)
  // .format('YYYY-MM-DD HH:mm:ss'))


  // console.log(``);
  // console.log(`------------------------------------------------------------`);
  // console.log(`-`, dayjs().format('YYYY/MM/DD HH:mm:ss'));
  // console.log(`- TOTAL : ${totalPrice.format()}, AVG : ${avgPrice.format()}, CNT : ${cnt}`);
  // console.log(`- PER_PRICE : ${perPrice.format()}`);
  // console.log(`- BID : ${real_bid_gap_total.format()}, ASK : ${real_ask_gap_total.format()}`);
  // console.log(`- PROPIT : ${propit/cnt}`);
  // console.log(`-`);
  // console.log(`------------------------------------------------------------`);
  // console.log(``);

  // console.log((real_bid_gap_total + real_ask_gap_total).format(), gap_total.format(), bid_gap_total.format(), ask_gap_total.format(), total.format(), total_count.format(), (total / total_count).format());
}

main().then();
