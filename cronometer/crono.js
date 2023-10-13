let crono = new Array(5);
let imagenes = new Array(8);
let manejadorContador;
let contador = 0;

for (i = 0; i < crono.length; i++) {
  crono[i] = 0; 
}

function cuenta() 
{
  console.log(crono[4]);
  crono[4] = crono[4] + 1;

  if (crono[4] > 59) {
    crono[2] = crono[2] + 1;
    crono[4] = 0;
  }

  if (crono[2] > 59) {
    crono[0] = crono[0] + 1;
    crono[2] = 0;
  }

  if (crono[0] < 10) {
    imagenes[0] = 'images/0.gif';
    imagenes[1] = 'images/' + crono[0] + '.gif';
    imagenes[2] = 'images/separador.gif';
  }
  else {
    imagenes[0] = 'images/' + (Math.trunc(crono[0] / 10)) + '.gif';
    imagenes[1] = 'images/' + (crono[0] % 10) + '.gif';
    imagenes[2] = 'images/separador.gif';
  }

  if (crono[2] < 10) {
    imagenes[3] = 'images/0.gif';
    imagenes[4] = 'images/' + crono[2] + '.gif';
    imagenes[5] = 'images/separador.gif';
  }
  else {
    imagenes[3] = 'images/' + (Math.trunc(crono[2] / 10)) + '.gif';
    imagenes[4] = 'images/' + (crono[2] % 10) + '.gif';
    imagenes[5] = 'images/separador.gif';
  }

  if (crono[4] < 10) {
    imagenes[6] = 'images/0.gif';
    imagenes[7] = 'images/' + crono[4] + '.gif';
    imagenes[8] = 'images/separador.gif';
  }
  else {
    imagenes[6] = 'images/' + (Math.trunc(crono[4] / 10)) + '.gif';
    imagenes[7] = 'images/' + (crono[4] % 10) + '.gif';
  }

  document.getElementById('reloj').innerHTML = '';
  let divReloj = document.getElementById('reloj');
  let img = document.createElement('img');
  let i = 0;
  while (i < 8) {
    img = document.createElement('img');
    img.src = imagenes[i];
    //divReloj.insertBefore(img,divReloj.lastChild);
    document.getElementById('reloj').appendChild(img);
    i++;
  }
}

function arranca() {
  clearInterval(manejadorContador);
  manejadorContador = setInterval(cuenta, 1000);
}

function parar() {
  clearInterval(manejadorContador);
}

function reiniciar() {
  for (i = 0; i < crono.length; i++) {
    crono[i] = 0;
  }

  document.getElementById('reloj').innerHTML = '';
  let divReloj = document.getElementById('reloj');
  let img = document.createElement('img');
  i = 0;

  while (i < 8) {
    img = document.createElement('img');
    img.src = imagenes[0];
    if (i == 2 || i == 5) {
      img.src = imagenes[2];
    }
    divReloj.insertBefore(img, divReloj.lastChild);
    document.getElementById('reloj').appendChild(img);
    i++;
  }
}

window.onload = function () {
  manejadorContador = setInterval(cuenta, 1000);
  cuenta();
}

