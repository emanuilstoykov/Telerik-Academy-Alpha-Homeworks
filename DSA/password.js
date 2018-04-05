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
   '996655 99',

]


const gets = this.gets || getGets(test);
const print = this.print || console.log;

[n,k] = gets().split(' ');



const swap = (arr,first,second) => {

    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    print(arr);
}

// arr.split(' ').map(Number);
// arr = swap(arr,0,5);
// arr = swap(arr,1,4);
// arr = swap(arr,2,3);
// print(arr);

let n1 = n[0];
let n2 = n[1];
let n3 = n[2];
let n4 = n[3];
let n5 = n[4];
let n6 = n[5];
let newArr = n6+ n5+n4+n3+n2+n1;

// let ostatuk = +newArr / +k;

// print(ostatuk);
let rawQuotient = +newArr / +k;
let remainder = rawQuotient % 1;
let quotient = rawQuotient - remainder ;
let b =  Math.floor(quotient);
let c = quotient * +k;
let rem = +newArr - c;
print(quotient + rem);
