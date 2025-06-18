function solution(s) {
    let p = 0, y = 0;
    [...s.toLowerCase()].forEach((i) => {
        if (i === 'p') p++;
        if (i === 'y') y++;
    });
    
    return p === y;
}