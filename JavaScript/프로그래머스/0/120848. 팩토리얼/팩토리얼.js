function solution(n) {
    let i = 1;
    
    while (1) {
        if (fact(i) > n) 
            return i - 1;
        i++;
    }
}

function fact(i) {
    if (i === 1) 
        return 1;
    else 
        return i * fact(i - 1);
}