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
'integer',
'2'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const txt = gets();
const n = gets();


if(txt === 'integer') {
    print(+n + 1);
} else if(txt === 'real') {
   
    print((+n + 1).toFixed(2));
} else {
    print(n + '*');
}
