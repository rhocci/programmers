function solution(a, b) {
    b = b / gcd(a, b);
    
    while (b % 2 === 0 || b % 5 === 0) {
        if (b % 2 === 0) b = b / 2;
        if (b % 5 === 0) b = b / 5;
    }
    
    return (b > 1) + 1;
}

function gcd(a, b) {
    return a % b === 0 ? b : gcd(b, a % b);
}