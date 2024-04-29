function solutionFn(obj) {
    const result = {};
    for (const key in obj) {
        const type = typeof obj[key];
        result[type] = (result[type] || 0) + 1;
    }
    return result;
}

// using:
const initialObj = {
    a: 'some string 1',
    b: 42,
    c: { c1: 'some string 2' },
    d: [],
    e: 123,
};

const resultObj = solutionFn(initialObj);
console.log(resultObj);
// Expected result : { string: 1, number: 2, object: 2 }