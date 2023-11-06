const texto = prompt("Ingrese un texto:");
let textoRevertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    textoRevertido += texto[i];
}

document.write(`<h1>El texto revertido es: ${textoRevertido}</h1>`);
