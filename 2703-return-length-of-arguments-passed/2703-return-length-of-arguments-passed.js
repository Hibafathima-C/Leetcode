/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    total = 0
    args.forEach((argument)=> total+=1)
    return total
};

/**
 * argumentsLength(1, 2, 3); // 3
 */