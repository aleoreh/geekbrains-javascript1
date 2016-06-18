'use strict';

function f(n) {
    var res = '';

    var div3 = n%3 === 0;
    var div5 = n%5 === 0;

    if (div3 & div5) {
        res = 'FizzBuzz';
    } else if (div3) {
        res = 'Fizz';
    } else if (div5) {
        res = 'Buzz';
    } else {
        res = n.toString();
    }

    return res;
}

function whatToDo(x) {
    console.log(x);
}

var n = 100;

for (var i = 1; i <= n; i++) {
    whatToDo(f(i));
}
