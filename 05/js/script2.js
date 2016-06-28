
/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */
var decimalComposition, divmod, problem;

divmod = function(dt, dr) {
  var q, r;
  q = Math.floor(dt / dr);
  r = dt % dr;
  return [q, r];
};


/* n >= 0 */

decimalComposition = function(n) {
  var q, r, ref;
  if (n === 0) {
    return [];
  } else {
    ref = divmod(n, 10), q = ref[0], r = ref[1];
    return (decimalComposition(q)).concat([r]);
  }
};

problem = function(n) {
  var c, res;
  res = {};
  if (n < 0 || n > 999) {
    console.log(n.toString() + ' is not in domain');
    return res;
  } else {
    c = (decimalComposition(n)).reverse();
    res.ones = c[0] != null ? c[0] : 0;
    res.tens = c[1] != null ? c[1] : 0;
    res.hundreds = c[2] != null ? c[2] : 0;
  }
  return res;
};

console.log('problem(245) = ' + JSON.stringify(problem(245)));

console.log('problem(-1) = ' + JSON.stringify(problem(-1)));

console.log('problem(1000) = ' + JSON.stringify(problem(1000)));
