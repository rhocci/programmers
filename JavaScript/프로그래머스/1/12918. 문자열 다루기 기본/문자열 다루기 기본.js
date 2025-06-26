function solution(s) {
    let isValidNumber = s.length === 4 || s.length === 6;
    return isValidNumber && [...s].every((v) => '0' <= v && v <= '9');
}