function solution (array) {
    let frequency = {};
    let maxValue = 0;
    
    for (let item of array) {
        frequency[item] = (frequency[item] || 0) + 1;
        maxValue = Math.max(maxValue, frequency[item]);
    }
    
    let maxKeys = Object.keys(frequency).filter((a) => {
        return frequency[a] === maxValue;
    })
    
    return maxKeys.length > 1 ? -1 : +maxKeys[0];
}