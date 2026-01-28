function solution(n) {
    let n3x = 0;
    let loop = 0;
    
    while (loop < n) {
        n3x++;
        
        if (n3x % 3 === 0 || String(n3x).includes('3')) continue;
        
        loop++;
    }
    
    return n3x;
}