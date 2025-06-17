function solution(price) {
    let range = price / 100000;
    
    if (range >= 5) return Math.floor(price * 0.8);
    else if (range >= 3) return Math.floor(price * 0.9);
    else if (range >= 1) return Math.floor(price * 0.95);
    
    return price;
}