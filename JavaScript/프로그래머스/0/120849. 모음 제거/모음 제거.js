function solution(my_string) {
    let removeVowel = [...my_string].filter((i) => !(['a','e','i','o','u'].includes(i)));
    
    return removeVowel.join('');
}