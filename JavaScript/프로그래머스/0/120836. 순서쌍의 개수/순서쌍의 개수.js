function solution(n) {
    let m = Math.sqrt(n);
    let count = 0;
    
    for (let i = 1; i < m; i++) {
        if ((n / i) % 1 === 0) count++;
    }
    
    return m % 1 ? count * 2 : count * 2 + 1;
}