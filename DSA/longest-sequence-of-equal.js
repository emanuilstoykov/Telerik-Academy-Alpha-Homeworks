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
'10',
'2',
'1',
'1',
'2',
'3',
'3',
'2',
'2',
'2',
'1'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let numbers = [];
for(let i = 0; i < n; i +=1) {
    numbers.push(gets());
}
let current =numbers[0];
let counter = 1;
let bestCounter = 0;


 for(let i = 0; i < n; i +=1) {
     if(current  === numbers[i+ 1]) {
         counter +=1;         
        
     } else {
         if (counter > bestCounter) {
             bestCounter = counter;
             
         }
         counter = 1;         
     }       
     current = numbers[i + 1];   

 }
print(bestCounter);
