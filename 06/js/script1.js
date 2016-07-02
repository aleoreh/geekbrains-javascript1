
/*
Объекты могут быть использованы для построения различных структур данных. Часто встречающаяся структура – список (не путайте с массивом). Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
var list = {   value: 1,   rest: {     value: 2,     rest: {       value: 3,       rest: null     }   } };
Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка, {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную. Это два независимых списка, при этом у них есть общая структура list, которая включает три последних элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов. Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же undefined в случае отсутствия такого элемента.
 */

/* Helpers */
var arrayHead, arrayTail, arrayToList, head, listToArray, nth, prepend, show, tail;

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

head = function(lst) {
  if (lst === null) {
    throw 'Empty list';
  } else {
    return lst.value;
  }
};

tail = function(lst) {
  if (lst === null) {
    throw 'Empty list';
  } else {
    return lst.rest;
  }
};

show = function(lst) {
  if (lst === null) {
    return 'null';
  } else {
    return 'List {value: ' + (head(lst)) + ', rest: ' + (show(tail(lst))) + '}';
  }
};


/* Problem */

prepend = function(x, xs) {
  return {
    value: x,
    rest: xs
  };
};

arrayToList = function(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    return prepend(arrayHead(arr), arrayToList(arrayTail(arr)));
  }
};

listToArray = function(xs) {
  if (xs === null) {
    return [];
  } else {
    return [xs.value].concat(listToArray(xs.rest));
  }
};

nth = function(xs, n) {
  if (xs === null) {
    return void 0;
  } else {
    if (n === 0) {
      return xs.value;
    } else {
      return nth(xs.rest, n - 1);
    }
  }
};


/* Test */

console.log('--------------------------');

console.log('List');

console.log('--------------------------');

var xs = arrayToList([1,2,3]);;

console.log('arrayToList:');

console.log('var xs = arrayToList([1,2,3]);');

console.log('show(xs) = ', show(xs));

console.log('-----------');

var arr = listToArray(xs);;

console.log('listToArray:');

console.log('var arr = listToArray(xs);');

console.log('arr = ', arr);

console.log('-----------');

var xs1 = prepend(0, xs);;

console.log('prepend:');

console.log('var xs1 = prepend(0, xs);');

console.log('show(xs1) = ', show(xs1));

console.log('-----------');


var x0 = nth(xs, 0);
var x3 = nth(xs, 3);
var xEmpty = nth(xs, arrayToList([]));
;

console.log('nth:');

console.log('var x0 = nth(xs, 0);');

console.log('var x3 = nth(xs, 3);');

console.log('var xEmpty = nth(xs, arrayToList([]));');

console.log('x0 = ', x0);

console.log('x3 = ', x3);

console.log('xEmpty = ', xEmpty);
