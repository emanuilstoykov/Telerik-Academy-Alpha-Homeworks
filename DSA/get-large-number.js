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
  '8 3 6'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const numbers = gets().split(' ').map(Number);

const getMax = (a,b) => {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}
let minMax = getMax(numbers[0], numbers[1]);

print(getMax(minMax, numbers[2]));
