const dayjs = require("dayjs")
const mmm = require('./binance/dt-price-btc.json')

const UTERM = 10; // % percent
const DTERM = -10; // % percent

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

const INIT_CURRENCY = 100000000;
const INIT_DAY = dayjs('2021-04-15 00:00:00');
let CURRENCY = INIT_CURRENCY; // 1000만원
let WALLETS = {}; // {market: {coin}}
let day = INIT_DAY;
// const LAST_DAY = dayjs('2021-04-10T00:00:00')
const LAST_DAY = dayjs('2021-09-04T00:00:00');
const KEY_CURRENCY = 'btc';
let UP_GAP = 50;
let DN_GAP = 50;
const portfolio = {
    krw: 10,
    // coin: 100,
    // dayTerm: 1,
    // dayTerm: 4,
    // dayTerm: 7,
    dayTerm: 10,
    // dayTerm: 30,
    hour: '01',
    TRADE_PRICE_KEY: 'openPrice', // tradp
}
const markets = Object.keys(mmm).reduce((rtn, k)=> {
    // if(
    //     k === 'BTC-ORBS'
    //     || k === 'BTC-JST'
    //     || k === 'BTC-ARDR'
    // ) {
    //     return rtn;
    // }

    rtn[k] = mmm[k]
    return rtn;
}, {})

function getMarketUnitPrice(market, marketPrice, portfolio) {
    // console.log(market, day.format('YYYY-MM-DD'))
    let marketHour = marketPrice[day.format('YYYY-MM-DD')][portfolio.hour];

    if(!marketHour) {
        if(marketPrice[day.format('YYYY-MM-DD')]['05']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['05'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['09']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['09'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['17']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['17'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['21']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['21'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['19']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['19'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['23']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['23'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['06']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['06'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['07']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['07'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['01']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['01'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['02']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['02'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['03']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['03'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['04']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['04'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['15']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['15'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['12']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['12'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['20']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['20'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['22']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['22'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['13']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['13'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['08']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['08'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['16']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['16'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['18']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['18'];
        } else if(marketPrice[day.format('YYYY-MM-DD')]['11']) {
            marketHour = marketPrice[day.format('YYYY-MM-DD')]['11'];
        } else {
            console.log('aaaaaaaa')
            console.log('aaaaaaaa')
            console.log('aaaaaaaa')
        }
    }
    // console.log(day.format('YYYY-MM-DD'), market)
    // console.log(portfolio)
    // console.log(marketHour)
    return Number.parseFloat(marketHour[portfolio.TRADE_PRICE_KEY]);
}

function sumAllKeyPrice(portfolio) {
    const sum = Object.keys(WALLETS).reduce((sum, walletMarket) => {
        const marketPrice = markets[walletMarket]
        const unitPrice = getMarketUnitPrice(walletMarket, marketPrice, portfolio);
        sum = sum + WALLETS[walletMarket] * unitPrice;

        // console.log('WALLET : ', sum, walletMarket, unitPrice, Math.floor(WALLETS[walletMarket] * unitPrice))
        return sum;
    }, 0)

    // console.error('CURRENCY : ', CURRENCY.format(), (sum || 0).format())
    return CURRENCY + (sum || 0);
}

function avgTradeTest(allCurrency, portfolio) {
    const willRemaindCurrency = Math.floor(allCurrency * portfolio.krw / 100); // all * 0.3 = 30%
    let tradingCurrency = ((allCurrency - willRemaindCurrency)/Object.keys(markets).length).toFixed(8);
    tradingCurrency = KEY_CURRENCY === 'krw' ? Math.floor(tradingCurrency) : Number.parseFloat(tradingCurrency)

    Object.keys(markets).forEach((market) => {
        const unitPrice = getMarketUnitPrice(market, markets[market], portfolio);
        const coinPrice = unitPrice * (WALLETS[market] || 0);

        if(tradingCurrency > coinPrice) { // buy
            if((tradingCurrency - coinPrice)/tradingCurrency*100 >= UP_GAP) {
                WALLETS[market] = (WALLETS[market] || 0) + Number.parseFloat(((tradingCurrency - coinPrice) / unitPrice).toFixed(8));
                CURRENCY = CURRENCY - (tradingCurrency - coinPrice)
            }
            // console.log(`buy [${market}]: `, (tradingCurrency - coinPrice), tradingCurrency, coinPrice, unitPrice)
        } else if(tradingCurrency < coinPrice) { // sell
            if( (coinPrice - tradingCurrency)/coinPrice*100 >= DN_GAP ) {
                WALLETS[market] = (WALLETS[market] || 0) - Number.parseFloat(((coinPrice - tradingCurrency ) / unitPrice).toFixed(8));
                CURRENCY = CURRENCY + (coinPrice - tradingCurrency)
            }
            // console.log(`sel [${market}]: `, (coinPrice - tradingCurrency), tradingCurrency, coinPrice, unitPrice)
        }
    });

    // const unitPrice = getMarketUnitPrice(market, marketPrice, portfolio);
    // const coin = Number.parseFloat((tradingCurrency / unitPrice).toFixed(8));

    // if (tradingCurrency > 0) { // buy
    //     CURRENCY = CURRENCY - tradingCurrency;
    //     WALLETS[market] = (WALLETS[market] || 0) + coin;
    // } else { // sell
    //     CURRENCY = CURRENCY - tradingCurrency;
    //     WALLETS[market] = (WALLETS[market] || 0) + coin;
    // }

    // console.log(
    //     day.format('YYYY-MM-DD HH'),
    //     { market, coin, CURRENCY, unitPrice, allCurrency, tradingCurrency, WALLETS },
    // );
}

async function main() {
    // const dt = dayjs(dtPrice.date)
    // const date = dt.format('YYYY-MM-DD')
    // const hour = dt.format('HH')
    // console.log("MARKETS : ", Object.keys(markets).length)

    // [0, 5, 10, 15, 20, 25, 30].forEach((gap1) => {
    //     console.log('gap1 ', gap1)
    //     console.log('gap1 ', gap1)
    //     console.log('gap1 ', gap1)
        // UP_GAP = gap1;
        UP_GAP = 0;

        // [0, 5, 10, 15, 20, 25, 30].forEach((gap2) => {
        // console.log('gap2 ', gap2)
        // console.log('gap2 ', gap2)
        // console.log('gap2 ', gap2)
            // DN_GAP = gap2;
            DN_GAP = 0;

            // for(let krw = 10; krw < 100; krw=krw+10) {
                // portfolio.krw = krw;
                portfolio.krw = 50;

                // for(let dayTerm = 1; dayTerm < 31; dayTerm++) {
                //     portfolio.dayTerm = dayTerm;
                    day = INIT_DAY;
                    CURRENCY = INIT_CURRENCY; // 1000만원
                    WALLETS = {}; // {market: {coin}}

                    while (day.isBefore(LAST_DAY)) {
                        let allCurrency = sumAllKeyPrice(portfolio);
                        console.log('aaaaa : ', allCurrency.format())
                        avgTradeTest(allCurrency, portfolio)
                        console.log(CURRENCY, allCurrency)

                        day = day.add(portfolio.dayTerm, 'days')
                    }
                    // day = INIT_DAY;
                    // while (day.isBefore(LAST_DAY)) {
                    //     let allCurrency = sumAllKeyPrice(portfolio);
                    //     // console.log('aaaaa : ', allCurrency.format())
                    //     avgTradeTest(allCurrency, portfolio)
                    //     // console.log(CURRENCY, allCurrency)

                    //     day = day.add(portfolio.dayTerm, 'days')
                    // }

                    day = LAST_DAY

                    allCurrency = sumAllKeyPrice(portfolio);
                    // console.log('aaaaa : ', allCurrency.format())
                    avgTradeTest(allCurrency, portfolio)
                    // console.log(krw, dayTerm, UP_GAP, DN_GAP, CURRENCY, allCurrency)
                    console.log(0, portfolio.dayTerm, UP_GAP, DN_GAP, CURRENCY.format(), allCurrency.format())
                // }
    //         }
    //     })
    // })

    return;
    Object.keys(markets).forEach((k) => {
        // if(k === 'BTC-ORBS' || k === 'BTC-JST' || k === 'BTC-GRT' || k === 'BTC-PUNDIX') {
        if(
               k === 'BTC-ORBS'
            || k === 'BTC-JST'
            || k === 'BTC-ARDR'
        ) {
            return;
        }
        // for(let krw = 10; krw < 100; krw=krw+10) {
        //     portfolio.krw = krw;
        {
            // for(let dayTerm = 1; dayTerm < 31; dayTerm++) {
            {
                // portfolio.dayTerm = dayTerm;
                day = INIT_DAY;
                CURRENCY = INIT_CURRENCY; // 1000만원
                WALLETS = {}; // {market: {coin}}

                // console.log(day.format('YYYY-MM-DD'), k)
                // console.log(portfolio)
                // console.log(markets[k][day.format('YYYY-MM-DD')])
                const initPrice = getMarketUnitPrice(k, markets[k], portfolio);
                console.log(initPrice)
                console.log(initPrice)
                console.log(initPrice)
                let allCurrency = 0;
                let lastPrice = 0;
                // while (day.isBefore(LAST_DAY)) {
                //     allCurrency = sumAllKeyPrice(k, markets[k]);
                //     // console.log('aaaaa : ', allCurrency.format())
                //     singleTradeTest(allCurrency, portfolio, k, markets[k])


                //     lastPrice = getMarketUnitPrice(k, markets[k], portfolio);
                //     day = day.add(portfolio.dayTerm, 'days')
                // }

                day = LAST_DAY
                allCurrency = sumAllKeyPrice(k, markets[k]);
                // console.log('aaaaa : ', allCurrency.format())
                singleTradeTest(allCurrency, portfolio, k, markets[k])


                lastPrice = getMarketUnitPrice(k, markets[k], portfolio);
                day = day.add(portfolio.dayTerm, 'days')

                // ------
                // console.log( k, portfolio.krw, portfolio.dayTerm,
                //     INIT_CURRENCY, allCurrency, Math.floor((allCurrency - INIT_CURRENCY)/INIT_CURRENCY*100) + '%',
                //     initPrice, lastPrice, Math.floor((lastPrice - initPrice)/initPrice*100) + '%'
                // );
            }
        }
    });

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
