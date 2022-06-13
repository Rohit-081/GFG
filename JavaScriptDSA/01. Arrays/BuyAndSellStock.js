var maxProfit = function(prices) {
    let maxProfit = 0;
    let minSoFar = prices[0];
    for(let i = 0; i < prices.length; i++){
        minSoFar = Math.min(minSoFar, prices[i]);
        let profit = prices[i] - minSoFar;
        maxProfit = Math.max(maxProfit, profit)
    } 
    return console.log(maxProfit);
    
};


maxProfit([7,1,5,3,6,4]);
maxProfit([7,6,5,4,3,1]);