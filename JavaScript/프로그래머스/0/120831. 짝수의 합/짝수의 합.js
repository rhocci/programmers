function solution(n) {
    let sum = 0;
    
    for (i = 0; i <= n; i++) {
        sum = i % 2 ? sum : sum + i;
    }
    
    return sum;
}