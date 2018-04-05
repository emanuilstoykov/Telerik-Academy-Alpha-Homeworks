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
  '2'

]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let rows = +gets(),
strMatrix = [];
for(let row = 0; row < rows; row += 1) {
strMatrix[row] = '';
let fill = row + 1;

for(let col = 0; col < rows; col += 1) {
 strMatrix[row] += String(fill) + ' ';
 fill += 1;
}

strMatrix[row] = String(strMatrix[row]).trim();
print(strMatrix[row]);
}
