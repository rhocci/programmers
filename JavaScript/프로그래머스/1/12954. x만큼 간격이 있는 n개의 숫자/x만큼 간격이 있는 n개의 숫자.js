function solution(x, n) {
    let result = [];
    
    if (x === 0) {
        for (let i = 1; i <= n; i ++) {
            result.push(0);
        }
        return result;
    }
    
    else if (x < 0) {
        for (let i = x; i >= x * n; i += x) {
            result.push(i);
        }
        
        return result;
    }
    
    for (let i = x; i <= x * n; i += x) {
        result.push(i);
    }
    
    return result;
}