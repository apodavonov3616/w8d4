const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length -1) {
        askIfGreaterThan(arr[i], arr[i+1])
    };
}



function askIfGreaterThan(el1, el2, callback) {
    reader.question("is this the right order?", function (answer) {
        if (answer == "yes") {
            callback(true);
        } else {
            callback(false);
        }
    })
}