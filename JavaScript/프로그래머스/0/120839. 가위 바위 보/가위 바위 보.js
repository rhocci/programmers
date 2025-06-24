function solution(rsp) {
    return [...rsp].map((v) => {
      if (v === '0') {
          return 5;
      } else if (v === '2') {
          return 0;
      } else {
          return 2;
      }
    }).join('');
}