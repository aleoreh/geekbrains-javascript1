
/*
Реализовать функцию objectToQueryString(object), которая принимает аргументом объект, возвращает строку. Примеры работы:
console.log(objectToQueryString({user: 'Dmitry'})); // user=Dmitry
console.log(objectToQueryString({user: 'Dmitry', password: 'pass'})); // user=Dmitry&password=pass
console.log(objectToQueryString({user: 'Dmitry', password: 'pass', id=1})); // user=Dmitry&password=pass&id=1
 */
var objectToQueryString;

objectToQueryString = function(obj) {
  var itemToQueryString;
  itemToQueryString = function(o, k) {
    switch (typeof o[k]) {
      case 'object':
        return k.toString() + '=' + objectToQueryString(o[k]);
      default:
        return k.toString() + '=' + o[k].toString();
    }
  };
  return '{' + (Object.keys(obj)).map((function(x) {
    return itemToQueryString(obj, x);
  })).join('&') + '}';
};
