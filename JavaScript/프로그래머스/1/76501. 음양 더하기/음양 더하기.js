function solution(absolutes, signs) {
    return absolutes
            .map((v, i) => signs[i] ? v : -v)
            .reduce((sum, v) => sum + v, 0);
}