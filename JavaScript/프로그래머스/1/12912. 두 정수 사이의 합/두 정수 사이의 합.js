function solution(a, b) {
    return a === b ? a : (a + b) / 2 * (Math.abs(a - b ) + 1);
}