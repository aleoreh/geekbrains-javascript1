
/* Написать функцию преобразования цвета из 10-ного представления в 16-ный. Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш.
 */
var rgbToHex, zerofilled;

zerofilled = function(str, n) {
  return ('0'.repeat(n) + str).slice(-n);
};

rgbToHex = function(r, g, b) {
  var rgbComponentToHex;
  rgbComponentToHex = function(c) {
    return zerofilled(c.toString(16), 2);
  };
  return '#' + [r, g, b].map(rgbComponentToHex).join('');
};

console.log('rgbToHex(0,0,0) =', rgbToHex(0, 0, 0));

console.log('rgbToHex(255,255,255) =', rgbToHex(255, 255, 255));

console.log('rgbToHex(40,99,209) =', rgbToHex(40, 99, 209));
