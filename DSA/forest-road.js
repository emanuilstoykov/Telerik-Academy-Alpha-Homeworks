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
  '5'
 
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();

let path = '';
for (let i = 0; i < n -1 ; i +=1) {
    for (let j = 0; j < n; j +=1)   {
        if (i != j)  {
            path += '.';
          
        } else {
            path += '*';
           
        }
        if(path.length == n) {
            print(path);
        }
       
    }

    path = '';
  
}

for (let i = n - 1; i >= 0; i -=1) {
            for (let j = 0; j < n; j +=1)   {
                if (i != j) {
                    path += '.';
          
                } else {
                    path += '*';
                }
                if(path.length == n) {
                    print(path);
                }
            }
          path = '';
        }
