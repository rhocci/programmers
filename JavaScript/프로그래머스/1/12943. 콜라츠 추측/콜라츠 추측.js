function solution(num) {
    let count = 0;
    
    while(1) {
        if (count > 500 ) return -1;
        if (num === 1) break;
        
        num = num % 2 ? num * 3 + 1 : num / 2;
        count++;
    }
    
    return count;
}