function solution(num, total) {
    const arr = new Array(num);
    
    // 1. num이 홀수
    // - 가운데 수를 num만큼 곱한 게 total
    // - 즉 total을 num만큼 나눈 게 가운데 수
    if (num % 2 !== 0) {
        const mid = total/num;
        
        for (let i=0; i<num; i++) {
            arr[i] = mid - ((num-1)/2 - i);
        }
    }
    
    // 2. num이 짝수
    // - 가운데 두 수를 더한 값을 num/2만큼 곱한 게 total
    // - 즉 total을 num/2만큼 나눈 게 가운데 두 수의 합
    if (num % 2 === 0) {
        const midSum = total/(num/2);
        const lessMid = (midSum-1)/2;
        
        for (let i=0; i<num; i++) {
            arr[i] = lessMid - ((num/2-1) - i);
        }
    }
    
    return arr;
}