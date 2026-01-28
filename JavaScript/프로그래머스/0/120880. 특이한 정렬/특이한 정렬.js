function solution(numlist, n) {
    numlist.sort((a, b) => {
        if (Math.abs(a - n) > Math.abs(b - n)) return 1;
        if (Math.abs(a - n) < Math.abs(b - n)) return -1;
        if (Math.abs(a - n) === Math.abs(b - n)) return b - a;
    })
    
    return numlist;
}