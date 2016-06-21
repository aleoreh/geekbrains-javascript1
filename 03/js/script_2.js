'use strict'

var COLS = 8;
var ROWS = 8;

function makeRow(n) {
    var res = '';
    for (var i = 1; i <= COLS; i++) {
        // white field, if sum of v-index and h-index is even
        var newChar = ( (i + n) % 2 === 0 ) ? ' ' : '#';
        res += newChar;
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
    if (curStep > ROWS) { break; }

    action( curStep )();

    curStep++;
}
