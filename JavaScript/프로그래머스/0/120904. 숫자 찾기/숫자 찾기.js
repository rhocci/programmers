function solution(num, k) {
    if (![...String(num)].includes(String(k))) return -1;
    
    return [...String(num)].findIndex(v => v === String(k)) + 1;
}