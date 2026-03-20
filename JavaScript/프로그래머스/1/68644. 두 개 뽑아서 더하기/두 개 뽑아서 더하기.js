function solution(numbers) {
    const sums = new Set();
    
    let left = 0;
 
    while (left < numbers.length-1) {
        for (let right=left+1; right<numbers.length; right++) {
            sums.add(numbers[left]+numbers[right]);
        }
        
        left++;
    }
    
    return Array.from(sums).sort((a, b) => a - b);
}