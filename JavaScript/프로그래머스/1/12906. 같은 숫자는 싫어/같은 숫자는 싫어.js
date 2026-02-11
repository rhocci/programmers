function solution(arr) {
    let temp = null;
    
    const result = arr.map(num => {
        if (num === temp) return;
        
        temp = num;
        return num;
    })
    
    return result.filter(v=>v!=null);
}