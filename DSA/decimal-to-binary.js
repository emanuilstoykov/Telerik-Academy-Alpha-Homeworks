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
 '236476736'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = +gets();

const convertDecToBinary = (num) => {
    return(num >>> 0).toString(2);
}

print(convertDecToBinary(input));
