let login = prompt('Введите логин:');
let pass = prompt('Введите пароль');

if (login === 'Админ') {
    if (pass === 'Я главный') {
        alert('Здравствуйте!');
    } else 
    alert ('Неверный пароль');
    }

 else if ((login === null) || (login === '')) {
    alert('Отменено');
} else { 
    alert ('Неверный логин');
}