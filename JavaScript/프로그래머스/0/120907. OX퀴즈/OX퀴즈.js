function solution (quiz) {
    const result = [];
    const q = quiz.map(exp => exp.split(' '));

    for (let values of q) {
        let givenAnswer = values.pop();
        let answer = 0;
        let oper = '+';
        
        values.forEach(v => {
            if (v === '=') return;
            if (['+', '-'].includes(v)) {
                oper = v;
                return;
            };
            
            switch (oper) {
                case '+':
                    answer += +v;
                    break;
                case '-': 
                    answer -= +v;
                    break;
            }
        })
        
        result.push(answer == givenAnswer ? 'O' : 'X');
    }
    
    return result;
}