function solution(s) {
    const nums = s.split(' ');
    
    return nums.reduce((sum, v, i) => {
        if (v === 'Z'){
            return sum -= nums[i-1];            
        }
            return sum += Number(v);
    }, 0);
}