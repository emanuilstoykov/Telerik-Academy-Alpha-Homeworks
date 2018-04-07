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
 'hoboobbo422222Aaao'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let signal = gets();
let output = '';
for(let i =0; i< signal.length; i +=1) {
    if(signal[i] !== signal[i+1] ) {
        output += signal[i];
    }
}

print(output);
