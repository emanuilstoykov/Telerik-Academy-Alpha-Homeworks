const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
'10',
'2',
'3',
'-6',
'-1',
'2',
'-1',
'6',
'4',
'-8',
'8'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const calcMaxSum = () => {
    const n = +gets();
    const numbers = Array.from({ length: n }, (el) => +gets());
    let currMaxSum = 0;
    let maxSum = 0;

    for (let i = 0; i < n; i += 1) {
        currMaxSum += numbers[i];
        maxSum = Math.max(maxSum, currMaxSum);
        if (currMaxSum < 0) {
            currMaxSum = 0;
        }
    }
    print(maxSum);
};
calcMaxSum();
