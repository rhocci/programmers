function solution(my_string) {
    let sum = 0;
    
    [...my_string].forEach(v => sum = isNaN(v) ? sum : sum + +v);
    
    return sum;
}