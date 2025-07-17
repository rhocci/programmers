function solution(arr) {
    if (arr.length <= 1) return [-1];
    
    let minValue = Math.min(...arr);
    
    arr.splice(arr.indexOf(minValue), 1);
    
    return arr;
}