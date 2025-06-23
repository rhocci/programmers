function solution(phone_number) {
    return [...phone_number].map((v, i, a) => v = i < a.length - 4 ? '*' : v).join('');
}