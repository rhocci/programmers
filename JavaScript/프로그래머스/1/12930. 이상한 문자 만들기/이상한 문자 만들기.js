function solution(s) {
    const result = s.split(' ')
        .map(word => {
            return [...word]
                .map((char, i) => {
                    if (i % 2 === 0) return char.toUpperCase();
                    return char.toLowerCase();
                })
                .join('');
        })
        .join(' ');
    
    return result;
}