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
  '13',
  '126',
  '26'
  
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
let n = +gets();
let i = 3;
const isPrime = (number) => {
    for(let i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number !== 1;
}
while(i < n) {
   
if(isPrime(n)) {
    print(n);
    break;
}
    n--;
}
