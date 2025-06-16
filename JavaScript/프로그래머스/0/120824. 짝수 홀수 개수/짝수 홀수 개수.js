function solution(num_list) {
    let evenArr = num_list.filter((item) => item % 2 == 0);
    
    return [evenArr.length, num_list.length - evenArr.length];
}