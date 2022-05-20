const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function askIfGreaterThan(el1, el2, callback) {
    reader.question("is this the right order?", function (answer) {
        if (answer == "yes") {
            callback(true);
        } else {
            callback(false);
        }
    })
}
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    if (i == arr.length -1 ) {
        return outerBubbleSortLoop(madeAnySwaps);
    }
    // 2. Else, use `askIfGreaterThan` to co    mpare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
  
  
  // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
  // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.
    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan)) {
        if (isGreaterThan) {
            arr[i], arr[i+1] = arr[i+1], arr[i]
            madeAnySwaps = true
        }
    }

    innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
}

  function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
      // Begin an inner loop if you made any swaps. Otherwise, call
      // `sortCompletionCallback`.
    
    if (manyAnySwaps) {
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    }else {
        sortCompletionCallback(arr)
    }

  
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
    outerBubbleSortLoop(true)
  }
  
  absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });
