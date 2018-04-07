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
'7125',
'2846',
'5842',
'7719'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();


let numbers = [];
let output = '';

for (let i = 0; i < n; i += 1) {
    numbers.push(gets());
}

const calc = (a, b) => {
    if (a < b) {
        output += 'right' + '\n';
    } else if (a > b) {
        output += 'left' + '\n';
    } else {
        output += 'straight' + '\n';
    }
}


for (let j = 0; j < numbers.length; j += 1) {
    let oddArr = 0;
    let evenArr = 0;
    for(let o = 0; o < numbers[j].length; o +=1) {
    
   
    if (numbers[j][o] % 2 == 0) {
        evenArr += +numbers[j][o];       
        
    } else {
        oddArr += +numbers[j][o];
        
    }

  
}

calc(evenArr, oddArr);
oddArr = 0;
evenArr = 0;
}

print(output.trim());
