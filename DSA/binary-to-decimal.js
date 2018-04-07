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
 '1110000110000101100101000000'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets();
let digit = parseInt(input, 2);
print(digit);
