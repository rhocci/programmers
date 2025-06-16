function solution (n, k) {
    if (k < n/10) return 12000 * n;
    
    return 12000 * n + 2000 * (k - Math.floor(n / 10));
}