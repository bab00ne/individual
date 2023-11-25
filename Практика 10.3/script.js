let Button1 = document.querySelector('.first-button');
let Button2 = document.querySelector('.second-button');
Button1.addEventListener('click', () => {
  alert('Нажата первая кнопка');
});
Button2.addEventListener('click', () => {
  alert('Нажата вторая кнопка');
});