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
'3',
'3',
'2',
'3',
'-2',
'5',
'4',
'2',
'7'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const k = +gets();


let numbers = [];

for(let i = 0; i < n; i +=1) {
    numbers.push(+gets());
}


numbers.sort(function(a, b){return a-b});

let newArr = numbers.slice(numbers.length - k);
let sum = 0;

for(let x of newArr) {
    sum += x;
}

print(sum);
