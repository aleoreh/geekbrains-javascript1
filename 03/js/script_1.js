'use strict';

var STEPS = 7;

function makeRow(n) {
    var res = '';
    for (var i = 0; i < n; i++) {
        res = res + '#';
    }
    return res;
}

function action(x) {
    return function() {
        console.log( makeRow(x) );
    };
}


var curStep = 1;

while (true) {
    if (curStep > STEPS) { break; }

    action( curStep )();

    curStep++;
}
