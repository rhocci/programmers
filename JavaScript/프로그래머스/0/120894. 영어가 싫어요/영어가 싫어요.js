const numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(numbers) {
    numStr.forEach((str, i) => {
        numbers = numbers.replaceAll(str, i);
    })
    
    return +numbers;
}