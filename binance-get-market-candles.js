require('dotenv').config()
const { Spot } = require('@binance/connector')
const dayjs = require("dayjs")

const access_key = process.env.BINANCE_API_KEY;
const secret_key = process.env.BINANCE_SEC_KEY;

const client = new Spot(access_key, secret_key)

// const server_url = 'https://api.upbit.com';

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

async function sleep (sec) {
    return new Promise((resolve, reject) => { setTimeout(() => resolve(true), sec*1000) })
}

async function main() {
  // let {krw, currencies} = await getTradeCurrency();
  const exchangeInfo = (await client.exchangeInfo()).data;
  const btcSymbols = exchangeInfo.symbols.filter((s)=>s.quoteAsset === 'BTC');
  console.log('const btcMarkets = {');
  const btcMarkets = {};
  for( btcSymbol of btcSymbols) {
    console.log(`'${btcSymbol.symbol}':`)
    const klines = (await client.klines(btcSymbol.symbol, '4h', {limit: 1000})).data;
    for( kline of klines ) {
      const yymmdd = dayjs(kline[0]).format('YYYY-MM-DD');

      if( !btcMarkets[yymmdd] ) {
        btcMarkets[yymmdd] = {};
      }

      // [
      //   1499040000000,      // Open time
      //   "0.01634790",       // Open
      //   "0.80000000",       // High
      //   "0.01575800",       // Low
      //   "0.01577100",       // Close
      //   "148976.11427815",  // Volume
      //   1499644799999,      // Close time
      //   "2434.19055334",    // Quote asset volume
      //   308,                // Number of trades
      //   "1756.87402397",    // Taker buy base asset volume
      //   "28.46694368",      // Taker buy quote asset volume
      //   "17928899.62484339" // Ignore.
      // ]
      btcMarkets[yymmdd][dayjs(kline[0]).format('HH')] = {
        openPrice: Number.parseFloat(kline[1]),      // Open time
        highPrice: Number.parseFloat(kline[2]),      // Open time
        lowPrice: Number.parseFloat(kline[3]),      // Open time
      }
    }
    console.log(btcMarkets, ',')
    await sleep(1)
  }
  console.log('};');
  return;
}

main().then();
