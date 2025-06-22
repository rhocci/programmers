function solution(hp) {
    let captain = Math.floor(hp/5);
    let soldier = Math.floor(Math.floor(hp%5)/3);
    let slave = Math.floor(Math.floor(hp%5)%3);
    
    return captain + soldier + slave;
}