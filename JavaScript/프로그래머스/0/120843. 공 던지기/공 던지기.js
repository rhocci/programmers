function solution(numbers, k) {
    let turn = 0;
    
    for (let i=1; i<k; i++) {
        turn += 2;
    }

    return numbers[turn % numbers.length];
}