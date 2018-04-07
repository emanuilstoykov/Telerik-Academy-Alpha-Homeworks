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
  'Q'

]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const n = gets();

let hasIt = '';
let dontHasit = [];

for(let x of cards) {
    if(n == x) {
        hasIt += n;
    } else {
        dontHasit += n;
    }
}


if(hasIt.length > 0) {
print('yes',n);
} else {
if(n.length == 2) {
    print('no',dontHasit.slice(24));
} else {

print('no',dontHasit.slice(12));
}
}
