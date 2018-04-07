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
'4',
'1',
'3',
'3',
'7'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let numbers = [];
let counter = 1;
let bestNum = 0;
let bestCounter = 0;
for(let i =0; i < n; i +=1) {
    numbers.push(+gets());
}

let a = [];
if(n == 1) {
    print(numbers[0]);
} else {
Array.prototype.unique = function () {
    const r = new Array();
    o:for(let i = 0, n = this.length; i < n; i++)
    {
        for(let x = 0, y = r.length; x < y; x++)
        {
            if(r[x]==this[i])
            {
           a.push(r[x]);     
                continue o;
            }
        }
        r[r.length] = this[i];
    }
    return r;
}
const unique = numbers.unique();

// Array.min = function( array ){
//     return Math.min.apply( Math, array );
// };
// var minimum = Array.min(a);
// print(minimum);

let current = a[0];
const sortNumbers = (a,b) => {
    if(a === b) {
       return -1;
    } else {
    return a - b;
    }
}
a.sort(sortNumbers());
for(let i = 0; i < a.length; i +=1) {   
    
    if(current === a[i+1]) {
        counter +=1;      
         
    } else {
        if (counter > bestCounter) {

            bestCounter = counter;
            bestNum = a[i];
            
            
        }
        counter = 1;
                 
    }  
   
    current = a[i + 1]; 
   
}
print(bestNum);
}
