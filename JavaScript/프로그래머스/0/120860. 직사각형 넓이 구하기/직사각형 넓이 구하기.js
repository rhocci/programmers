function solution(dots) {
    const [x1, y1] = dots[0];
    let [w, h] = [0, 0];
    
    for (i=1; i<4; i++) {
        if (x1 === dots[i][0]) {
            h = Math.abs(y1 - dots[i][1]);
        }
        if (y1 === dots[i][1]) {
            w = Math.abs(x1 - dots[i][0]);
        }
    }
    
    return w * h;
}