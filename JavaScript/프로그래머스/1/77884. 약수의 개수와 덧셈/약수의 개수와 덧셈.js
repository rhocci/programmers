function solution(left, right) {
    let sum = 0;
    
    for (let i = left; i <= right; i++) {
        sum = Math.sqrt(i) % 1 === 0 ? sum - i : sum + i;
    }
    
    return sum;    
}