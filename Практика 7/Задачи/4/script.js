const a = [10, 20, 30, 50, 235, 3000];
let i = 0;
let str = " ";

for (i; i < a.length; i++) 
    if (a[i].toString().startsWith('1') || a[i].toString().startsWith('2') || a[i].toString().startsWith('5')) {
        str += a[i] + " ";
}
alert(str);