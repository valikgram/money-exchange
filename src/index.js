// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H = 50;
    var Q = 25;
    var D = 10;
    var N = 5;
    var P = 1;
    var money = {
        };
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };
    while (currency != 0) {
        if (Math.floor(currency / H) > 0) {
            money.H = Math.floor(currency / H);
            currency = currency - (money.H * H);
            } else if (Math.floor(currency / Q) > 0) {
                money.Q = Math.floor(currency / Q);
                currency = currency - (money.Q * Q);
            } else if (Math.floor(currency / D) > 0) {
                money.D = Math.floor(currency / D);
                currency = currency - (money.D * D);
            } else if (Math.floor(currency / N) > 0) {
                money.N = Math.floor(currency / N);
                currency = currency - (money.N * N);
            } else if (Math.floor(currency / P) > 0) {
                money.P = Math.floor(currency / P);
                currency = currency - (money.P * P);
            }
    };
    return money;
}
