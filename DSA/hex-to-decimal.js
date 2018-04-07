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
 '4ED528CBB4'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets();

  const hexKey = '0123456789ABCDEF';
  let sum = 0;

  let len = input.length;
  for (let i = 0; i < len; i += 1) {
    let digit = hexKey.indexOf(input[i]);

    sum = digit + sum * 16;
  }

 print(sum);
