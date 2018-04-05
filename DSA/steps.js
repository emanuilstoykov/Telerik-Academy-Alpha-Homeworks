onst getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
  '1',
  '5'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n = +gets();

let mil = 1609;

print(n * mil);
