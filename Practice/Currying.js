function curry(fn) {
    // Advanced Currying - With Any Number of Args
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
            // console.log(curry.apply(this, [args]))
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }

    // Basic Currying - 
    /*
        return function (a) {
            return function (b) {
                return function (c) {
                    return fn(a, b, c)
                }
            }
        }
    */
}

const join = (a,b,c) => {
    return a+b+c;
}

// const join = (...args) => {
//     let sum = 0;
//     args.forEach((item) => {
//         sum += item
//     })
//     return sum
// }

const curriedJoin = curry(join);

console.log(curriedJoin(1)(2)(3))
// console.log(curriedJoin(1, 2, 3, 4, 5, 6, 7, 8, 9))
// console.log(curriedJoin(1)(2)(3)(4)(5)(6)(7)(8)(9))
