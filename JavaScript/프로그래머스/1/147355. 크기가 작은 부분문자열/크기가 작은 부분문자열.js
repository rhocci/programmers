function solution(t, p) {
    const l = p.length;
    let count = 0;
    
    for (let i=0; i<=t.length-l; i++) {
        if ([...t].slice(i, i+l).join('') <= p) count++;
    }
    
    return count;
}