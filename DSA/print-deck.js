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

const n = gets();

if(n <= 10 && n >= 2 ) {
for(let i = 2; i <= n; i +=1) {
    
    print(i, 'of spades, ' + i + ' of clubs, ' + i + ' of hearts, ' + i + ' of diamonds');
  
}
} else {
    for(let i = 2; i <= 10; i +=1) {
        while(i <= 10) {
        print(i, 'of spades, ' + i + ' of clubs, ' + i + ' of hearts, ' + i + ' of diamonds');
        i++;
        
        }
        if(n == 'J') {
            print(n, 'of spades, ' + n + ' of clubs, ' + n + ' of hearts, ' + n + ' of diamonds');
           continue;
        } else if (n == 'Q') {
            print('J', 'of spades, ' + 'J' + ' of clubs, ' + 'J' + ' of hearts, ' + 'J' + ' of diamonds');
            print(n, 'of spades, ' + n + ' of clubs, ' + n + ' of hearts, ' + n + ' of diamonds');
        } else if(n == 'K'){

            print('J', 'of spades, ' + 'J' + ' of clubs, ' + 'J' + ' of hearts, ' + 'J' + ' of diamonds');
            print('Q', 'of spades, ' + 'Q' + ' of clubs, ' +'Q' + ' of hearts, ' + 'Q' + ' of diamonds');
            print(n, 'of spades, ' + n + ' of clubs, ' + n + ' of hearts, ' + n + ' of diamonds');
        } else if(n == 'A') {
            print('J', 'of spades, ' + 'J' + ' of clubs, ' + 'J' + ' of hearts, ' + 'J' + ' of diamonds');
            print('Q', 'of spades, ' + 'Q' + ' of clubs, ' +'Q' + ' of hearts, ' + 'Q' + ' of diamonds');
            print('K', 'of spades, ' + 'K' + ' of clubs, ' +'K' + ' of hearts, ' + 'K' + ' of diamonds');
            print(n, 'of spades, ' + n + ' of clubs, ' + n + ' of hearts, ' + n + ' of diamonds');
        }
      
    }
}
