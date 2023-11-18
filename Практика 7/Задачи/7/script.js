const a = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const day = "Пятница";
let i = 0;

for (i = 0; i < 7; i++) {
    if (a[i] !== day) {
        alert (a[i]);
    } else {
        let italic = a[i].italics();
        alert(italic);
    }
}
    
  
