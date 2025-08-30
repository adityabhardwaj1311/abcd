const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

let current = 0;                               

function updateLight() {
  red.className = 'light';
  yellow.className = 'light';
  green.className = 'light';

  if (current === 0) {
    red.classList.add('on-red');
  } else if (current === 1) {
    yellow.classList.add('on-yellow');
  } else {
    green.classList.add('on-green');
  }

  current = (current + 1) % 3;                 
}

setInterval(updateLight, 2000);   

 

