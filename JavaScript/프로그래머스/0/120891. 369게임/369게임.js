function solution(order) {
    return [...String(order)].filter(v => v != 0 && v % 3 === 0).length;
}

