require('dotenv').config()
const request = require('request')
const uuidv4 = require("uuid4")
const sign = require('jsonwebtoken').sign
const crypto = require('crypto')
const queryEncode = require("querystring").encode
const dayjs = require("dayjs")
const utc = require('dayjs/plugin/utc')

const access_key = process.env.BINANCE_API_KEY;
const secret_key = process.env.BINANCE_SEC_KEY;

const server_url = 'https://api.binance.com';
const UTERM = 10; // % percent
const DTERM = -10; // % percent

async function req(opt) {
    return new Promise((resolve, reject) => {
        request(opt, (error, response, data) => {
            if (error) throw new Error(error)

            const res = (typeof data === 'object') ? data : JSON.parse(data);
            resolve(res);
        })
    });
}

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

async function getTicker() {
    const tickerOptions = {
        method: "GET",
        url: server_url + '/api/v3/ticker/24hr'
    }

    return await req(tickerOptions);
}

async function main() {
    console.log('---------------------------------------');
    console.log(new Date(), `U : ${UTERM}% D : ${DTERM}`);
    console.log('---------------------------------------');

    const tickers = await getTicker();
    const datas = tickers.filter( (x) => {
        return x.symbol.slice(-3) === 'BTC'
    }).sort((x, y) => y.priceChangePercent - x.priceChangePercent);
    const remain = [];
    const sum = datas.reduce( (sum, data, idx) => {
      //if( data.priceChangePercent > 500 ) return sum;
      if( data.priceChangePercent >= UTERM || data.priceChangePercent <= DTERM ) {
        sum = (parseInt(sum*1000)/1000) + Number(data.priceChangePercent);
        sum = parseInt(sum*1000)/1000;
        console.log(data.symbol, Number(data.priceChangePercent), sum);
      } else {
        remain.push(data);
      }
      return sum;
    }, 0 );

    console.log('---------------------------------------');

    remain.map( x => {
        console.log(x.symbol, Number(x.priceChangePercent), 0);
    });

    console.log('---------------------------------------');
    console.log(sum, datas.length, sum/datas.length);
    console.log('---------------------------------------');
}

main().then();
