function solution(array) {
    let origin = [...array];
    
    array.sort((a, b) => b - a);
    
    return [array[0], origin.indexOf(array[0])]
}