function solution(A, B) {
    if (A === B) return 0;
    
    let arrA = [...A];
    
    for (let i=1; i<A.length; i++) {
        arrA.unshift(arrA[A.length-1]);
        arrA.pop();
        
        if (arrA.join('') === B) return i;
    }
    
    return -1;
}