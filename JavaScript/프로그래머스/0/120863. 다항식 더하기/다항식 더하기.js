function solution(polynomial) {
    let coef = 0;
    let num = 0;
    
    polynomial
        .split(' ')
        .forEach(v => {
        if (v === '+') return;
        
        if (v.includes('x')) {
            coef += v === 'x' ? 1 : parseInt(v);
        } else {
            num += +v;
        }
    });
    
    if (!coef) return `${num}`;
    if (num === 0) return coef === 1 ? `x` : `${coef}x`;
    
    return coef === 1? `x + ${num}` : `${coef}x + ${num}`;
}