function solution(numbers) {
    let all = [0,1,2,3,4,5,6,7,8,9];
    
    return all.filter((v) => !numbers.includes(v))
                .reduce((sum, v) => sum + v, 0);
}