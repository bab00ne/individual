let day = Number(prompt('Ведите день'));


if ((1 <= day) && (day <= 10)) {
    alert('первая декада');
}  else if ((day >= 11) && (day <= 19)) {
    alert('вторая декада');
} else if ((21 <= day) && (day <= 31)) {
        alert('третья декада');
} else {
    alert ('месяц и в африке месяц, от 1 до 31 надо вводить');
}

