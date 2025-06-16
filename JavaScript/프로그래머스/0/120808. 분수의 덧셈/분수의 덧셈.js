function solution(numer1, denom1, numer2, denom2) {
    const numerator = numer1 * denom2 + numer2 * denom1;
    const denominator = denom1 * denom2;
    
    const gcd = euclide(numerator, denominator);
    
    return [numerator/gcd, denominator/gcd];
}
    
function euclide(a, b) {
    return b ? euclide(b, a % b) : a;
}