let a = prompt('Введите шесть цифр');

let sum1 = (Number(a[0]) + Number(a[1]) + Number(a[2]));
let sum2 = (Number(a[3]) + Number(a[4]) + Number(a[5]));

if (sum1 == sum2) {
    alert('да');
} else alert ('нет');