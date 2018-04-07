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
  '5',
'2 1 1 6 3'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets();
let arr = gets().split(' ').map(Number);
let oddProduct = 1;
let evenProduct = 1;

for(let i = 0; i < n; i +=1) {
   if(i === 0 || i % 2 === 0) {
       oddProduct *= arr[i];
   } else {
       evenProduct *= arr[i];
   }

}

if(evenProduct === oddProduct) {
    print('yes',evenProduct);
} else {
    print('no',oddProduct, evenProduct);
}
