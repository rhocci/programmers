function solution(x, n) {
    return Array(n).fill(x).map((x, i) => x * (i + 1))
}