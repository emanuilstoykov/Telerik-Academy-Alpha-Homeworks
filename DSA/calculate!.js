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
  '2'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const m = +gets();
let s = 1;

const fac = (num) => {
    let result = 1;
    for(let i = 1; i <= num; i +=1) {
       result *= i;
        }
        return result;
}


const searchS = (n,m) => {
 for(let i =1; i <= n; i++) {
     s += fac(i) / Math.pow(m,i);
 }
 return s;
}

print(searchS(n,m).toFixed(5));
