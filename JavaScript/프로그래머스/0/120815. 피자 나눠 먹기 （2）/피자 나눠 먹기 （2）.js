function solution(n) {
    return n * 6 / gcd(n, 6) / 6;
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}