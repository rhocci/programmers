function solution(n) {
    let result = Array(n).fill('수').map((item, index) => {
        return item = (index+1) % 2 ? '수' : '박'
    });
    
    return result.join('');
}