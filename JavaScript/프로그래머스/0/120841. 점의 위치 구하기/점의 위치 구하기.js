function solution(dot) {
    let [x, y] = dot;
    let quad = 3;
    
    return x > 0
        ? (y > 0 ? 1 : 4)
        : (y > 0 ? 2 : 3);
}