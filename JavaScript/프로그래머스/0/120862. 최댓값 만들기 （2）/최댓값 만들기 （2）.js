function solution(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    
    return Math.max(arr[0] * arr[1], arr.at(-1) * arr.at(-2));
}