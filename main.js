console.log('test')

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

console.log(problem1())