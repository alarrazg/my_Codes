let crono = new Array(5);
let imagenes = new Array(8);
let manejadorContador;
let contador = 0;

for (i = 0; i < crono.length; i++) {
  crono[i] = 0; 
}

function cuenta() 
{
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
    imagenes[0] = 'images/0.png';
    imagenes[1] = 'images/' + crono[0] + '.png';
    imagenes[2] = 'images/separador.png';
  }
  else {
    imagenes[0] = 'images/' + (Math.trunc(crono[0] / 10)) + '.png';
    imagenes[1] = 'images/' + (crono[0] % 10) + '.png';
    imagenes[2] = 'images/separador.png';
  }

  if (crono[2] < 10) {
    imagenes[3] = 'images/0.png';
    imagenes[4] = 'images/' + crono[2] + '.png';
    imagenes[5] = 'images/separador.png';
  }
  else {
    imagenes[3] = 'images/' + (Math.trunc(crono[2] / 10)) + '.png';
    imagenes[4] = 'images/' + (crono[2] % 10) + '.png';
    imagenes[5] = 'images/separador.png';
  }

  if (crono[4] < 10) {
    imagenes[6] = 'images/0.png';
    imagenes[7] = 'images/' + crono[4] + '.png';
    imagenes[8] = 'images/separador.png';
  }
  else {
    imagenes[6] = 'images/' + (Math.trunc(crono[4] / 10)) + '.png';
    imagenes[7] = 'images/' + (crono[4] % 10) + '.png';
  }

	viewCrono(1);
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

	viewCrono(0);
}

function viewCrono(value) {
	let divReloj = document.getElementById('reloj');
	divReloj.innerHTML = '';
	let divImg = document.createElement('div');
	divImg.id = 'images';
	let img = document.createElement('img');
	divReloj.appendChild(divImg);
	i = 0;

	if (value==0){ 
		while (i < 8) {
			img = document.createElement('img');
			img.src = imagenes[0];
			if (i == 2 || i == 5) {
				img.src = imagenes[2];
			}
			divImg.appendChild(img);
			i++;
		}
	}
	else {
			while (i < 8) {
				img = document.createElement('img');
				img.src = imagenes[i];
				divImg.appendChild(img);
				i++;
			}
	}
}

window.onload = function () {
  manejadorContador = setInterval(cuenta, 1000);
}

