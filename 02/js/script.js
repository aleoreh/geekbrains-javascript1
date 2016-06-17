function f(n) {
    res = function(){};

    div3 = n%3 === 0;
    div5 = n%5 === 0;

    if (div3 & div5) {
        res = function() {console.log('FizzBuzz');};
    } else if (div3) {
        res = function() {console.log('Fizz');};
    } else if (div5) {
        res = function() {console.log('Buzz');};
    } else {
        res = function() {console.log(n);};
    }

    return res;
}

var n = 100;

for (i = 1; i <= n; i++) {
    f(i)();
}
