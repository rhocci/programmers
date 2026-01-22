function solution(numbers, direction) {
    const temp = direction === 'left' ? numbers[0] : numbers[numbers.length - 1];
    const rotated = [...numbers];
    
    switch (direction) {
        case 'left':
            for (let i=0; i<numbers.length-1; i++) {
                rotated[i] = rotated[i+1];
            }
            rotated[numbers.length-1] = temp;
            break;
        case 'right': 
            for (let i=numbers.length-1; i>0; i--) {
                rotated[i] = rotated[i-1];
            }
            rotated[0] = temp;
            break;
        default:
            return;
    }
    
    return rotated;
}