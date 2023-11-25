
const details = document.querySelector('details');

let div = document.querySelector('.one');
div.addEventListener('click', function (event) {
  details.open = true;
});


let div1 = document.querySelector('.two');
div1.addEventListener('click', function (event) {
    details.open = false;
});

