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
  '6',
'-26 -25 -28 31 2 27'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = gets();
let numbers = gets().split(' ').map(Number);
let counter = 0;




for(let i = 0; i < numbers.length; i +=1 ) {
    if(numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
        counter +=1;
    }
}




print(counter);
