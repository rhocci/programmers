function solution(emergency) {
    let sorted = emergency.slice().sort((a, b) => b - a);
    let order = emergency.map(v => sorted.indexOf(v) + 1);
    
    return order;
}