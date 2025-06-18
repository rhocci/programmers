function solution(n) {
    return Array.from(n + '').reduce((sum, i) => sum + +i, 0);
}