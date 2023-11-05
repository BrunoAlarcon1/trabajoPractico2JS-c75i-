const nota = parseFloat(prompt("Ingrese su nota"));

if (nota >= 0 && nota <= 10) {
  if (nota >= 0 && nota <= 2) {
    document.write(`<p>Muy deficiente</p>`);
  } else if (nota >= 3 && nota <= 4) {
    document.write(`<p>Insuficiente</p>`);
  } else if (nota >= 5 && nota <= 6) {
    document.write(`<p>Suficiente</p>`);
  } else if (nota == 7) {
    document.write(`<p>Bien</p>`);
  } else if (nota >= 8 && nota <= 9) {
    document.write(`<p>Notable</p>`);
  } else if (nota == 10) {
    document.write(`<p>Sobresaliente</p>`);
  }
} else {
  alert(`Introduce un nùmero valido`);
}
