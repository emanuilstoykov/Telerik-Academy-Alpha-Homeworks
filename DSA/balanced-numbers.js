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
'123',
'132'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const getBalancedNumber = (() => {
    const sumArr = (array) => {
        return array.map(Number).reduce((a, b) => a + b);
    };

    let firstDigit; let lastDigit; let second; let result;

    let n = gets();
    const balanced = [];

    while (n !== undefined) {
        lastDigit = n[n.length - 1];
        firstDigit = n[0];
        second = +n[1];

        const sum = +lastDigit + +firstDigit;

        if ((+lastDigit + +firstDigit) === second) {
            balanced.push(n);
        } else {
            result = sumArr(balanced);
            break;
        }
        n = gets();
    }

    print(result);
})();
