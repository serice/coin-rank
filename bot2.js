require('dotenv').config()
const request = require('request')
const uuidv4 = require("uuid4")
const sign = require('jsonwebtoken').sign
const crypto = require('crypto')
const queryEncode = require("querystring").encode
const dayjs = require("dayjs")
const utc = require('dayjs/plugin/utc')

dayjs.extend(utc);

const access_key = process.env.ACCESS_KEY;
const secret_key = process.env.SECRET_KEY;
const server_url = 'https://api.upbit.com';

const datas = [
// yyyy-MM-dd HH:mm:ss

];

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

const marketOptions = {
    method: "GET",
    url: server_url + "/v1/market/all?isDetails=false",
    headers: {Authorization: `Bearer ${token}`},
}

/*
request(marketOptions, (error, response, marketData) => {
    if (error) throw new Error(error)
    const markets = JSON.parse(marketData);
    let i = 0;
    for( const x of markets ) {
console.log(x.market);
        const currencyCode = x.market.substr(0,3)
        if( currencyCode === 'KRW') {
            const priceOptions = {
                method: "GET",
                url: server_url + `/v1/candles/days?count=1&market=${x.market}`,
                headers: {Authorization: `Bearer ${token}`},
            };
console.log(priceOptions);
            request(priceOptions, (error, response, candleData) => {
console.log(error, candleData);
                if (error) throw new Error(error)
                const candle = JSON.parse(candleData);
console.log(candle);
            });
        }
    }
})
*/

async function sleep (sec) {
    return new Promise((resolve, reject) => { setTimeout(() => resolve(true), sec) })
}

async function req(opt) {
    return new Promise((resolve, reject) => {
        request(opt, (error, response, data) => {
            if (error) throw new Error(error)

            const res = JSON.parse(data);
            resolve(res);
        })
    });
}

async function main() {
    const markets = await req(marketOptions);
    const prices = {};
    const dt = [];
    let i = 0;
    let hasDt = false;

    for( const market of markets ) {
        const currencyCode = market.market.substr(0,3);
        let prevPrice = null;
        let date = dayjs('2021-02-01');

        if( currencyCode === 'KRW') {
            if(!prices[market.market]) {
                prices[market.market] = [];
            }

            while( date.isBefore(dayjs().add(60,'minutes')) ) {
                const to = date.utc().format("YYYY-MM-DD HH:mm:ss");
                i++;
                const priceOptions = {
                    method: "GET",
                    url: server_url + `/v1/candles/minutes/60?count=1&market=${market.market}&to=${to}`,
                    headers: {Authorization: `Bearer ${token}`},
                };
                const prs = await req(priceOptions);
                const price = prs[0];

                if( prevPrice ) {
                    const p = ((price.opening_price - prevPrice.opening_price)/price.opening_price)*100;
                    prices[market.market].push(p.toFixed(2));

                    if(!hasDt) {
                        dt.push(price.candle_date_time_kst);
                    }
                }
                prevPrice = price;

                date = date.add(60, 'minutes');
                if( i % 9 === 0 ) {
                    await sleep(1000);
                }
            }

            if(!hasDt) {
                console.log(dt.join(', '));
            }

            hasDt = true;
            console.log(market.market + ', ' + prices[market.market].join(', '))
        }
    }
}

main().then();
