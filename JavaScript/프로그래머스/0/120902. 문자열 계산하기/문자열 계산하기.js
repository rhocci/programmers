function solution(my_string) {
    const opers = my_string.split(' ');
    let operator = null;
    
    return opers.reduce((result, oper) => {
        if (['+', '-'].includes(oper)) {
            operator = oper;
            return result;
        }
        
        switch (operator) {
            case '+':
                return result += +oper;
            case '-':
                return result -= +oper;
            default:
                return result = +oper;
        }
    }, 0);
}