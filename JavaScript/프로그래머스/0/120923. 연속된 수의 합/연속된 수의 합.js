function solution(num, total) {
    const midNum = Math.floor(total/num);
    const midIndex = Math.ceil(num/2) - 1;
    
    const result = new Array(num)
                    .fill(midNum)
                    .map((v, i) => v - (midIndex-i));
    
    return result;
}