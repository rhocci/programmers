function solution(N) {
    return String(N)
            .split('')
            .reduce((sum, item) => sum + +item, 0);
}