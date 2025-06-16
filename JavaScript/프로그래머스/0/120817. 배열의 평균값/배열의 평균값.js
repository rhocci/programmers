function solution(numbers) {
    return numbers.reduce((sum, item) => sum + item, 0) / numbers.length;
}