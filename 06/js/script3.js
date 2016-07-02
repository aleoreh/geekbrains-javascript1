
/*
* Реализовать функцию pick(obj, keys), которая принимает аргументами объект и массив строк (названия ключей). Возвращает новый объект, куда вошли все ключи, указанные в массиве keys, и соответствующие значения из объекта obj. Если в объекте obj, нет ключа, указанного в массиве keys, в результирующем объекте этот ключ не должен присутствовать.
var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
}
pick(user, ['name']); // {name: 'Sergey'}
pick(user, ['name', 'second-name']); // {name: 'Sergey'}
pick(user, ['name', 'friends']); // {name: 'Sergey', friends:['Sveta', 'Artem']}
 */

/* Problem */
var pick;

pick = function(obj, keys) {
  var res;
  res = {};
  Object.keys(obj).filter(function(k) {
    return keys.indexOf(k) > -1;
  }).map(function(k) {
    return res[k] = obj[k];
  });
  return res;
};


/* Test */

var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
};

console.log('--------------------------');

console.log('pick');

console.log('--------------------------');

console.log('user = ', user);

console.log("pick(user, ['name']) = ", pick(user, ['name']));

console.log("pick(user, ['name', 'second-name']) = ", pick(user, ['name', 'second-name']));

console.log("pick(user, ['name', 'friends']) = ", pick(user, ['name', 'friends']));
