function solution(x) {
    return !(x % ([...(x+'')].reduce((sum, i) => sum + +i, 0)));
}