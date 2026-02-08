function solution(lines) {
    let [[s1, e1], [s2, e2], [s3, e3]] = lines;
    const [min, max] = [Math.min(s1, s2, s3), Math.max(e1, e2, e3)];
    const line = new Array(max-min+1).fill(0);
    
    while (s1 < e1) {
        line[e1-min]++;
        e1--;
    }
    
    while (s2 < e2) {
        line[e2-min]++;
        e2--;
    }
    
    while (s3 < e3) {
        line[e3-min]++;
        e3--;
    }
    
    return line.filter(dot => dot > 1).length;
}