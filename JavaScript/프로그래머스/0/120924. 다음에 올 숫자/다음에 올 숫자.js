function solution(common) {
    if (common[0]/common[1] === common[1]/common[2]) {
        let r = common[1]/common[0];
        return common[common.length-1] * r;
    }
    
    let d = common[1] - common[0];
    return common[common.length-1] + d;
}