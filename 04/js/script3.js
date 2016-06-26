
/* * Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить? */

/* Works also with negative numbers */
var isEven;

isEven = function(n) {
  var add, isEven_, sub;
  add = function(x, y) {
    return x + y;
  };
  sub = function(x, y) {
    return x - y;
  };
  isEven_ = function(m) {
    var op;
    op = function() {
      if (m < 0) {
        return add;
      } else {
        return sub;
      }
    };
    switch (m) {
      case 0:
        return true;
      case 1:
        return false;
      default:
        return isEven_(op()(m, 2));
    }
  };
  return isEven_(n);
};

console.log('isEven(50) = ' + isEven(50));

console.log('isEven(75) = ' + isEven(75));

console.log('isEven(-1) = ' + isEven(-1));
