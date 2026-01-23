function solution(array, n) {
    let diff = Infinity;
    let result;
    
    array
        .sort((a, b) => a - b)
        .forEach(v => {
            result = Math.abs(v - n) < diff 
                ? v 
                : result;
            diff = Math.abs(v - n);
        })
    
    return result;
}