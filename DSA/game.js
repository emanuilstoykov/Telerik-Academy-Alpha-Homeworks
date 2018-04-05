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
'185'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets();
let sum = +n[0] + +n[1] + +n[2];
let um =  n[0] * n[1] * n[2];
let max = sum;

if(um > sum) {
    max = um;
}

if(+n[0] * +n[1] + +n[2] > max) {
    max = +n[0] * +n[1] + +n[2];
}
if(+n[0] + +n[1] * +n[2] > max) {
    max = +n[0] + +n[1] * +n[2];
}

print(max);
