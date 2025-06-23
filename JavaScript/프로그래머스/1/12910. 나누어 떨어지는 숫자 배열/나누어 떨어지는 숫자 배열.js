// 각 element중 divisor로 나누어떨어지는 값을 오름차순 정렬 배열

function solution(arr, divisor) {
    let result = arr.filter((v) => !(v % divisor)).sort((a, b) => a - b);
    
    return result.length ? result : [-1];
}