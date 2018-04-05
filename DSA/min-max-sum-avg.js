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
'3',
'2',
'5',
'1'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr= [];
for(let i = 0; i < n; i +=1) {
    let currentLine = +gets();
    arr.push(currentLine);
}

const min = Math.min(...arr);
const max = Math.max(...arr);
let sum = arr.reduce((a,b) => a+b,0)
let avg = sum / arr.length;

print('min=' + min.toFixed(2));
print('max=' + max.toFixed(2));
print('sum=' + sum.toFixed(2));
print('avg=' + avg.toFixed(2));
