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
 '4',
 '3',
 '2'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a = +gets();
const b = +gets();
const c = +gets();

if(a > b && a > c) {
    print(a);
} else if (a < b && c < b) {
    print(b);
} else {
    print(c);
}
