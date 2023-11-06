let nombres = [];
let edades = [];

for (let i = 1; i <= 3; i++) {
  let nombre = prompt(`Ingrese el nombre ${i}:`);
  let edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));

  while (isNaN(edad)) {
    edad = parseInt(prompt(`Ingrese una edad valida para ${nombre}:`));
  }

  nombres.push(nombre);
  edades.push(edad);
}

let posMayor = edades.indexOf(Math.max(...edades));

document.write(`<p>La persona mayor es: ${nombres[posMayor]}</p>`);
