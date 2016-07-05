/* Helpers */

// ---------------------------------

/* Problem */

var users = [
    {
        firstName: 'Dmitry',
        lastName: 'Bondarchuk',
        birthDay: '16.07.1990',
        phones: [
            '89001234567',
            '83431234567'
        ]
    },
    {
        firstName: 'Ivan',
        lastName: 'Petrov',
        birthDay: '08.06.1956',
        phones: [
            '89001234567',
            '83431234567'
        ]
    }
];

function newUser(firstName, lastName, birthday, phones) {
    return {
        firsName: firstName,
        lastName: lastName,
        birthday: birthday,
        phones: phones
    };
}


function doInputUser() {
    var firstName, lastName, birthday;
    if ((firstName = prompt('Имя: ')) === null) {
        return null;
    }
    if ((lastName = prompt('Фамилия: ')) === null) {
        return null;
    }
    if ((birthday = prompt('День рождения: ')) === null) {
        return null;
    }

    function inputPhones(phones) {
        var inp = prompt('Телефон (прекратить ввод - пустая строка): ');
        if (inp === '' || inp === null) {
            return phones;
        } else {
            return inputPhones(phones.concat([inp]));
        }
    }

    var phones = inputPhones([]);

    return newUser(firstName, lastName, birthday, phones);
}

var user = doInputUser();
if (user) {
    users.push(user);
}

var outputElem = document.getElementById('output');

var output = '';
users.forEach(function (usr) {
    output += JSON.stringify(usr, null, 4) + '\n';
});

outputElem.innerHTML = output;
