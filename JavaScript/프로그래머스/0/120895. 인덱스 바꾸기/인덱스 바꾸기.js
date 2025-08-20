function solution(my_string, num1, num2) {
    let result = my_string.split('');
    
    result[num1] = my_string[num2];
    result[num2] = my_string[num1];
    
    return result.join('');
}