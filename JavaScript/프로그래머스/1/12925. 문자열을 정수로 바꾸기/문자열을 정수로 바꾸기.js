function solution(s) {
    return s.slice(0) === '-' ? -(+s) : +s;
}