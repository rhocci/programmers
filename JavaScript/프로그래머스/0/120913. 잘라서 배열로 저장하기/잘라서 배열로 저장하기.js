function solution(my_str, n) {
    const sliced = [];
    
    for (let i=0; i<my_str.length; i+=n) {
        sliced
            .push([...my_str]
            .slice(i, i+n)
            .join(''));
    }
    
    return sliced;
}