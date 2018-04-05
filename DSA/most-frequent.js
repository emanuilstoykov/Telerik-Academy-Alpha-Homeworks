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
'4',
'1',
'1',
'4',
'2',
'3',
'4',
'4',
'1',
'2',
'4',
'9',
'3'
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
let bestNum = 0;

const sortNumbers = (a,b) => {
    if(a === b) {
       return -1;
    } else {
    return a - b;
    }
}
numbers.sort(sortNumbers());

 for(let i = 0; i < numbers.length ; i +=1) {
     if(current === numbers[i + 1 ]) {
         counter +=1;      
          
     } else {
         if (counter > bestCounter) {
             bestCounter = counter;
             bestNum = numbers[i];
             
         }
         counter = 1;
                  
     }  
     
     current = numbers[i + 1]; 
    
 }

print(bestNum + " (" + bestCounter + " times)");
