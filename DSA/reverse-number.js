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
'256'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets();

const reverseString = (str) => {
   let newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
print(reverseString(n));
