/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/
//Accepts a callback, a delay in milliseconds, and an amount of times to execute the callback.
function intervalCount(cb, delay, amount) {
  //Sets an 'i' counter with a value of 0.
  let i = 0;
  //Calls setInterval within a closure.  The callback 'cb' is executed and the counter 'i' is incremented by 1.
  let myInterval = setInterval(() => {
    cb();
    i++;
    //The interval is cleared once 'i' equals 'amount', thus the callback is executed the specified amount of times.
    if (i === amount) {
      clearInterval(myInterval);
    }
  }, delay);
}

function callback() {
  console.log("Test!");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
