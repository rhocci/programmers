function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const user = db.find(user => user[0] === id);
    
    if (!user) return 'fail';
    if (pw !== user[1]) return 'wrong pw';
    
    return 'login';
}