###
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

###

### Problem ###

pick = (obj, keys) ->
    res = {}
    Object.keys obj
    .filter (k) -> keys.indexOf(k) > -1
    .map (k) -> res[k] = obj[k]
    res

### Test ###

`var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
}`

console.log '--------------------------'
console.log 'pick'
console.log '--------------------------'

console.log 'user = ', user
console.log "pick(user, ['name']) = ", `pick(user, ['name'])`
console.log "pick(user, ['name', 'second-name']) = ", `pick(user, ['name', 'second-name'])`
console.log "pick(user, ['name', 'friends']) = ", `pick(user, ['name', 'friends'])`
