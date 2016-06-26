
/* Подсчёт количества символов в строке */
var countChar;

countChar = function(str, char) {
  var p;
  p = function(x) {
    return x === char;
  };
  return str.split('').filter(p).length;
};

console.log('countChar("aBaBaB", "B") = ' + countChar('aBaBaB', 'B'));
