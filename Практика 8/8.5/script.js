const user = {
    "Name": 'Карамзин',
    "Name2": 'Виктор',
    "Patronymic": 'Геннадьевич',
    "Occupation": 'Преподаватель специальных дисциплин',
    "Degree": 'Высшее',
    "Category": 'Первая',
    "Education": ['Московский государственный институт электронной техники (технический университет)',
    'Санкт-Петербугрский государственный университет (СПбГУ'],
    "Dicsipline": ['Информатика', 'Основы программирования', 'Инженерная графика'],
    "Note": ""
};

const line = `
    <h2> ${user.Name} ${user.Name2} ${user.Patronymic}</h2>
    <p><i> Образование:</i> ${user.Occupation} </p>
    <p><i>  Уровень образования: </i> ${user.Degree} </p>
    <p><i>  Категория: </i> ${user.Category} </p>
    <p><i>  Образование: </i> ${user.Education} </p>
    <p><i> Дисциплины: </i> ${user.Dicsipline} </p>
    <p><i> Примечание: </i> ${user.Note} </p>
`;

const result = document.querySelector("#output");
result.innerHTML = line;