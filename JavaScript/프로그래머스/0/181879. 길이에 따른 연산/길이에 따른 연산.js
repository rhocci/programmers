const solution = num_list => {
    return num_list.length > 10 ? 
            num_list.reduce((sum, v) => v + sum, 0) :
            num_list.reduce((mul, v) => v * mul, 1);
};