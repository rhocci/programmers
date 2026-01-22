const solution = my_string => my_string
                                .split(/\D/g)
                                .reduce((sum, numChar) => sum += +numChar, 0);