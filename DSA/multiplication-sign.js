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
'2',
'5',
'2'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a = +gets();
const b = +gets();
const c = +gets();


if(a > 0) {
    if(b > 0 && c > 0) {
        print('+');
    } else if(b < 0 && c > 0) {
        print('-');
    } else if(b < 0 && c < 0) {
        print('+');
    } else if(b > 0 && c < 0) {
        print('-');
    }
} else if(a < 0) {
    if(b > 0 && c > 0) {
        print('-')
    } else if(b < 0 && c > 0) {
        print('+');
    } else if(b > 0 && c < 0) {
        print('+');
        } else if(b < 0 && c < 0) {
        print('-');
    }
}

if(a === 0 || b === 0 || c === 0) {
    print(0);
}
