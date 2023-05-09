const dayjs = require("dayjs")
const PRICES_ALL = require('./upbit/dt-price-all.json')

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

async function main() {
    const prices = {}
    Object.keys(PRICES_ALL).forEach((k) => {
        const dtPrices = PRICES_ALL[k]
            .filter((a) => (
                dayjs(a.date).isAfter(dayjs('2021-04-01T23:59:00'))
                && dayjs(a.date).isBefore(dayjs('2021-09-05T00:00:00'))
            ))
            .sort((a, b) => a.date > b.date ? 1 : -1);

        if(!prices[k]) {
            prices[k] = {}
        }

        dtPrices.forEach((dtPrice) => {
            const dt = dayjs(dtPrice.date)
            const date = dt.format('YYYY-MM-DD')
            const hour = dt.format('HH')

            if(!prices[k][date]) {
                prices[k][date] = {};
            }
            prices[k][date][hour] = { openp: dtPrice.openp, tradp: dtPrice.tradp };
        });
    });

    console.log('const krwMarkets = {');
    Object.keys(prices).forEach((market) => {
        if(market.indexOf('KRW-') === 0) {
            console.log(`'${market}': `, prices[market], ',')
        }
    });
    console.log('};');
    console.log('module.exports = krwMarkets;');


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
