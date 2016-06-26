
/* Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них. */
var min;

min = function(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
};

console.log('min(0, 10) = ' + min(0, 10));

console.log('min(0, -10) = ' + min(0, -10));
