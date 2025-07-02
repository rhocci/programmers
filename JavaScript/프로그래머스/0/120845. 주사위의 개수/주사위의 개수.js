function solution(box, n) {
    let result = 1;
    
    box.map(v => result = result * ~~(v / n))
    
    return result;
}