function solution(age) {
    const template = ['a','b','c','d','e','f','g','h','i','j'];
    
    return [...String(age)].map((v) => v = template[v]).join('');
}