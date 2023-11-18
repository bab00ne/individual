let month = Number(prompt('Введите номер месяца'));

switch(month) {
    case 1: 
    case 12:
    case 2:    
        alert('зима'); 
        break;

    case 3: 
    case 4:
    case 5:
        alert('весна');
        break;
    
    case 6: 
    case 7:
    case 8: 
        alert('лето');
        break;
    
    case 9: 
    case 10:
    case 11: 
        alert('осень');
        break;
}