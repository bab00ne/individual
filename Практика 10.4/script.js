let div = document.querySelector('button');
div.addEventListener('focus', function (event) {
  div.style.backgroundColor = 'white';
});

div.addEventListener('mouseenter', function (event) {
  div.style.backgroundColor = 'red';
});

div.addEventListener('mouseleave', function (event) {
  div.style.backgroundColor = 'lavender';
});