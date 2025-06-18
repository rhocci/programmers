function solution(numbers) {
    let sortNumbers = numbers.sort((a, b) => a - b);
    return sortNumbers.pop() * sortNumbers.pop();
}