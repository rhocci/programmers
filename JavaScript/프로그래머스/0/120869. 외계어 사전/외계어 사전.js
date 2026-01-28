const solution = (spell, dic) => !dic.map(word => [...word].sort().join(''))
                                     .includes(spell.sort().join('')) + 1; 