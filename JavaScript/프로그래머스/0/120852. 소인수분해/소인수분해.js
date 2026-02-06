function solution(n) {
    const primeNums = [];
    
    for (let i=2; i<=n; i++) {
        if (n % i !== 0) continue;
        
        let isPrimeNum = true;
        for (let j=2; j<i; j++) {
            if (!isPrimeNum) continue;
            if (i % j === 0) {
                isPrimeNum = false;
            }
        }
        
        if (isPrimeNum) primeNums.push(i);
    }
    
    return primeNums;
}