const a = [2, 5, 9, 15, 0, 4];
let str = " ";

for (let i = 0; i < a.length; i++) {
    if ((a[i] > 3) && (a[i] < 10)) {
        str += a[i] + " ";
}
}
alert(str);