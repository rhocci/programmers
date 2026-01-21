function solution(num_list, n) {
    const newArr = [];

    while (num_list.length > 0) {
        for (let i=0; i<n; i+=n) {
            newArr.push(num_list.splice(i, i+n))
        }
    }

    return newArr;
}