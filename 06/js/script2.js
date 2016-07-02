
/*
Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
 */

/* Helpers */
var arrayHead, arrayTail, reverseArray, reverseArrayInPlace;

arrayHead = function(arr) {
  if (arr.length === 0) {
    throw 'Empty array';
  } else {
    return arr[0];
  }
};

arrayTail = function(arr) {
  if (arr.length === 0) {
    throw 'Empty array';
  } else {
    return arr.slice(1);
  }
};


/* Problem */

reverseArray = function(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    return reverseArray(arrayTail(arr)).concat([arrayHead(arr)]);
  }
};

reverseArrayInPlace = function(arr) {

  /* Движемся с двух сторон, меняя значения местами. Останавливаемся, когда индексы встретились. */
  var iter;
  iter = function(up, down) {
    var a;
    if (up < down) {
      a = arr[up];
      arr[up] = arr[down];
      arr[down] = a;
      return iter(up + 1, down - 1);
    }
  };
  iter(0, arr.length - 1);
  return arr;
};


/* Test */

console.log('--------------------------');

console.log('Reversing arrays');

console.log('--------------------------');

var arr = [];

console.log('Empty array');

console.log('var arr = [];');

console.log('reverseArray(arr) = ', reverseArray(arr));

console.log('reverseArrayInPlace', reverseArrayInPlace(arr));

console.log('arr = ', arr);

console.log('-----------');

var arr = [1,2,3];

console.log('Odd-itemed array');

console.log('var arr = [1,2,3];');

console.log('reverseArray(arr) = ', reverseArray(arr));

console.log('reverseArrayInPlace', reverseArrayInPlace(arr));

console.log('arr = ', arr);

console.log('-----------');

var arr = [1,2,3,4];

console.log('Even-itemed array');

console.log('var arr = [1,2,3,4];');

console.log('reverseArray(arr) = ', reverseArray(arr));

console.log('reverseArrayInPlace', reverseArrayInPlace(arr));

console.log('arr = ', arr);

console.log('-----------');
