function solution(chicken) {
    let coupons = chicken;
    let maxService = 0;
    
    while (coupons >= 10) {
        let service = Math.floor(coupons/10); 
        coupons = coupons % 10 + service;
        maxService += service;
    }

    return maxService;
}