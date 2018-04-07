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
 '338583669684'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = +gets();

const convertDecToHex = (num) => {
    if(num < 0 ) {
        num = 0xFFFFFFFF + number + 1;
    } 
    return num.toString(16).toUpperCase();
}

print(convertDecToHex(input));
