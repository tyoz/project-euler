console.log('test')

/** 
 * https://projecteuler.net/problem=1
 */
// Find the sum of all the multiples of 3 or 5 below 1000.
function problem1() {
    let multipleSum = 0;
    let i = 3;
    let j = 5;

    while (i < 1000 || j < 1000) {
        if (i < 1000) {
            multipleSum += i % 5 !== 0 ? i : 0;
            i += 3;
        }
        if (j < 1000) {
            multipleSum += j;
            j += 5;
        }
    }
    return multipleSum;
}

/** 
 * https://projecteuler.net/problem=2
 * 
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million,
 * find the sum of the even-valued terms.
 * 
 */ 
function problem2() {
    
    let sum = 0;
    let n = 1;
    let fib = 1;
    let aux = 0;
    while(n < 4000000) {
        aux = fib;
        fib += n;
        n = aux;
        if(fib % 2 === 0) sum += fib;
        console.log(fib);
    }
    return sum;
}

function fibonacci(n) {
    if(n <= 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(problem2());