function solution(babbling) {
    let count = 0;
    
    for (word of babbling) {
        const replaced = word.replaceAll(/(?:aya|ye|woo|ma)/g, '');
        if (replaced.length === 0) count++;
    }
    
    return count;
}