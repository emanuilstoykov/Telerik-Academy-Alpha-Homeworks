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
'17'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();

let counter =0;

for (let x = 0; x <= n; x += 2) {
        {
            for (let y = 0; y <= (n - x); y += 5)
            {
                if ((n - (x + y)) % 7 == 0) counter++;
            }
        }
     
    } 
    print(counter);
