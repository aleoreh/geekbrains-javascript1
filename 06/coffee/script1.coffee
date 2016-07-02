###
Объекты могут быть использованы для построения различных структур данных. Часто встречающаяся структура – список (не путайте с массивом). Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
var list = {   value: 1,   rest: {     value: 2,     rest: {       value: 3,       rest: null     }   } };
Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка, {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную. Это два независимых списка, при этом у них есть общая структура list, которая включает три последних элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов. Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же undefined в случае отсутствия такого элемента.
###

### Helpers ###

arrayHead = (arr) ->
    if arr.length is 0
        throw 'Empty array'
    else
        arr[0]

arrayTail = (arr) ->
    if arr.length is 0
        throw 'Empty array'
    else
        arr.slice(1)

head = (lst) ->
    if lst is null
        throw 'Empty list'
    else
        lst.value

tail = (lst) ->
    if lst is null
        throw 'Empty list'
    else
        lst.rest

show = (lst) ->
    if lst is null
        'null'
    else
        'List {value: ' + (head lst) + ', rest: ' + (show (tail lst)) + '}'

### Problem ###

prepend = (x, xs) ->
    {value: x, rest: xs}

arrayToList = (arr) ->
    if arr.length is 0
        null
    else
        prepend (arrayHead arr), arrayToList (arrayTail arr)

listToArray = (xs) ->
    if xs is null
        []
    else
        [xs.value].concat listToArray xs.rest

nth = (xs, n) ->
    if xs is null
        undefined
    else
        if n is 0
            xs.value
        else
            nth xs.rest, (n - 1)

### Test ###

console.log '--------------------------'
console.log 'List'
console.log '--------------------------'

`var xs = arrayToList([1,2,3]);`

console.log 'arrayToList:'
console.log 'var xs = arrayToList([1,2,3]);'
console.log 'show(xs) = ', show xs
console.log '-----------'

`var arr = listToArray(xs);`
console.log 'listToArray:'
console.log 'var arr = listToArray(xs);'
console.log 'arr = ', arr
console.log '-----------'

`var xs1 = prepend(0, xs);`

console.log 'prepend:'
console.log 'var xs1 = prepend(0, xs);'
console.log 'show(xs1) = ', show xs1
console.log '-----------'

`
var x0 = nth(xs, 0);
var x3 = nth(xs, 3);
var xEmpty = nth(xs, arrayToList([]));
`
console.log 'nth:'
console.log 'var x0 = nth(xs, 0);'
console.log 'var x3 = nth(xs, 3);'
console.log 'var xEmpty = nth(xs, arrayToList([]));'
console.log 'x0 = ', x0
console.log 'x3 = ', x3
console.log 'xEmpty = ', xEmpty
