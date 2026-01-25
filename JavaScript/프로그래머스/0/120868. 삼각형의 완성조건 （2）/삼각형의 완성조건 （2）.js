function solution(sides) {
    let count = 0;
    
    for (let i=1; i<=sides[0]+sides[1]; i++) {
        if (i === sides[0] && sides[0] === sides[1]) {
            count++;
            continue;
        } else {
            const max = Math.max(sides[0], sides[1], i);
            
            if (max === sides[0] && sides[1]+i>sides[0]) {
                count++;
                continue;
            }
            if (max === sides[1] && sides[0]+i>sides[1]) {
                count++;
                continue;
            }
            if (max === i && sides[0]+sides[1]>i) {
                count++;
                continue;
            }
        }
    }
    
    return count;
}