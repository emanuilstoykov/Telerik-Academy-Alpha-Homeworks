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
  '8',
'28 6 21 6 -7856 73 73 -56',
'73'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const numbers = gets().split(' ').map(Number);
const s = +gets();
let counter = 0;

for(let x of numbers) {
    if(x == s) {
        counter +=1;
    }
}

print(counter);
