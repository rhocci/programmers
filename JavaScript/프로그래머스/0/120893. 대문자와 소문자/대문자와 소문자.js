function solution(my_string) {
    return [...my_string]
            .map(v => v <= 'Z' ? v.toLowerCase() : v.toUpperCase())
            .join('');
}