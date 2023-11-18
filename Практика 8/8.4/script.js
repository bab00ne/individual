const user = {
    "Name": 'Карамзин',
    "Name2": 'Виктор',
    "Patronymic": 'Геннадьевич',
    "Occupation": 'Преподаватель специальных дисциплин',
    "Degree": 'Высшее',
    "Category": 'Первая',
    "Education": 'Московский государственный институт электронной техники (технический университет)',
    "Dicsipline": 'Информатика',
    "Note": ""
};

const line = `
    <h2> ${user.Name} ${user.Name2} ${user.Patronymic}</h2>
    <p><i> Образование:</i> ${user.Occupation} </p>
    <p><i>  Degree: </i> ${user.Degree} </p>
    <p><i>  Category: </i> ${user.Category} </p>
    <p><i>  Education: </i> ${user.Education} </p>
    <p><i> Dicsipline: </i> ${user.Dicsipline} </p>
    <p><i> Note: </i> ${user.Note} </p>
`;

const result = document.querySelector("#output");
result.innerHTML = line;
