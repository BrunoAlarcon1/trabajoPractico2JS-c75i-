const texto = prompt("Ingrese un texto:").toLowerCase();
let posVocal = -1;

for (let i = 0; i < texto.length && posVocal === -1; i++) {
    const letra = texto[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        posVocal = i;
    }
}

if (posVocal !== -1) {
    const vocalEncontrada = texto[posVocal];
    document.write(`<h1>La vocal '${vocalEncontrada}' está en la posición ${posVocal}.</h1>`);
} else {
    document.write("<h1>No se encontraron vocales en el texto.</h1>");
}
