function solution(s) {
    const charCount = new Map();
    
    for (let char of s) {
        if (!charCount.has(char)) {
            charCount.set(char, 1)
            continue;
        };
        
        charCount.set(char, charCount.get(char) + 1);
    }
    
    return s
        .replace(/./g, char => char = charCount.get(char) == 1 ? char : '')
        .split('')
        .sort()
        .join('');        
}