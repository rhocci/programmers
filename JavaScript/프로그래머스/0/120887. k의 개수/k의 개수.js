// i, j, k가 매개변수로 주어질 때 i부터 j까지 k가 몇 번 등장하는지(삼육구)

function solution(i, j, k) {
    let count = 0;
    k = k + '';
    
    while(i <= j) {
        const nums = [...(i + '')];
        count += nums.filter(num => num == k).length;
        
        i++;
    }
    
    return count;
}