function solution(a, b) {
    return internalVector(a, b);
}

function internalVector(a, b, n = 0) {
    if (n === a.length) return 0;
    return a[n]*b[n] + internalVector(a, b, n+1);
}