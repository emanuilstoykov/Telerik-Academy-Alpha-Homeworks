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
'M1 K1 P1'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let arr = gets().split(' ');
let k = [];
let m = [];
let p = [];
for(let i =0; i < n; i+=1) {
    if(arr[i][0] == 'M') {
        m += arr[i] + ' ';
    } else if(arr[i][0] == 'K') {
        k += arr[i] + ' ';
    } else {
        p += arr[i] + ' ';
    }
}
print(m + k + p)
