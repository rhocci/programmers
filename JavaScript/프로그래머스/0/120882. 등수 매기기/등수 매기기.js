function solution(score) {
    const avgs = score.map(s => (s[0] + s[1]) / 2);
    const rates = [];
    
    for (let i=0; i<avgs.length; i++) {
        let rate = 1;
        
        avgs.map(avg => {
            if (avgs[i] < avg) return rate++;
        })
        
        rates.push(rate);
    }

    return rates;
}