function solution(keyinput, board) {
    const [xlim, ylim] = board.map(v => (v - 1) / 2);
    let [x, y] = [0, 0];
    
    keyinput.forEach(input => {
        if (input === 'up' && y < ylim) y++;
        if (input === 'down' && y > -ylim) y--;
        if (input === 'right' && x < xlim) x++;
        if (input === 'left' && x > -xlim) x--;
    })
    
    return [x, y];
}