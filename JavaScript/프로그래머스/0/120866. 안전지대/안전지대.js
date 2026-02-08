function solution(board) {
    const n = board.length;
    const map = board.map(col => [...col]);
    
    board.forEach((col, a) => {
        col.forEach((row, b) => {
            if (!row) return;

            map[a][b]++;
            
            if (a > 0) {
                if (b > 0) {
                    map[a-1][b-1]++;
                }
                if (b < n - 1) {
                    map[a-1][b+1]++;
                }
                map[a-1][b]++;
            }

            if (a < n - 1) {
                if (b > 0) {
                    map[a+1][b-1]++;
                }
                if (b < n - 1) {
                    map[a+1][b+1]++;
                }
                map[a+1][b]++;
            }

            if (b > 0) {
                map[a][b-1]++;
            }
            if (b < n - 1) {
                map[a][b+1]++;
            }
        });
    });
    
    let safe = map.reduce((n, col) => {
        return n + col.reduce((m, row) => {
            return m + !row;
        }, 0)  
    }, 0);
    
    return safe;
}