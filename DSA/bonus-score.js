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
  '9',

]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const number = +gets();

if(number <= 9 && number >= 1) {
    if(number <= 3 && number >= 1) {
        print(number * 10);
    } else if(number <=6 && number >= 4) {
        print(number * 100);
    } else {
        print(number *1000);
    }
} else {
    print('invalid score');
}
