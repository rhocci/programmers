function solution(balls, share) {
    let permutation = 1;
    
    for (let i = 1; i <= share; i++) {
        permutation *= balls--;
    }
    
    return Math.round(permutation / factorial(share));
}

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n-1);
}
