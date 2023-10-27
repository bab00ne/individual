const a = [2, 5, 9, 15, 0, 4];
let sum = 0;
let i = 0;

for (i; i < a.length; i++)
    if (a[i] % 2 === 0) {
        sum = sum + a[i];
}
alert(sum);