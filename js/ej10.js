const filas = parseInt(prompt("Ingrese el número de filas:"));
const columnas = parseInt(prompt("Ingrese el número de columnas:"));

if (!isNaN(filas) && !isNaN(columnas)) {
  let numero = filas * columnas;

  document.write("<table>");

  for (let i = 0; i < filas; i++) {
    document.write("<tr>");

    for (let j = 0; j < columnas; j++) {
      document.write(`<td>${numero}</td>`);
      numero--;
    }

    document.write("</tr>");
  }

  document.write("</table>");
} else {
  alert("Valores ingresados no válidos.");
}
