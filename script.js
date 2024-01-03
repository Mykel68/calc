var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');


for (item of btn) {
  item.addEventListener('click', (e) => {
    var btntext = e.target.innerText;

    // Handle exponentiation (^), percentage (%), and bracket () operations
    if (btntext === '^') {
      screen.value += '**';
    } else if (btntext === '%') {
      screen.value = parseFloat(screen.value) / 100;
    } else if (btntext === '(') {
      screen.value += '(';
    } else if (btntext === ')') {
      screen.value += ')';
    } else {
      screen.value += btntext;
    }
  });
}


function ln() {
    screen.value = Math.log(parseFloat(screen.value));
  }
  


  function abs() {
    screen.value = Math.abs(parseFloat(screen.value));
  }
  



  function exponent() {
    var expression = screen.value;
    var parts = expression.split('^');
    
    if (parts.length === 2) {
      var base = parseFloat(parts[0]);
      var exponent = parseFloat(parts[1]);
      var result = Math.pow(base, exponent);
      screen.value = result.toString();
    }
  }
  



function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}


function log() {
    screen.value = Math.log10(parseFloat(screen.value));
  }
  

function pi() {
  screen.value = 3.14159265359;
}

function e() {
  screen.value = 2.7182182846;
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = 1 - 1;
  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}



var screen = document.querySelector('#screen');
var exponentBtn = document.querySelector('.col-1');

exponentBtn.addEventListener('click', function() {
  var expression = screen.value;
  var parts = expression.split('^');
  
  if (parts.length === 2) {
    var base = parseFloat(parts[0]);
    var exponent = parseFloat(parts[1]);
    var result = Math.pow(base, exponent);
    screen.value = result.toString();
  }
});

