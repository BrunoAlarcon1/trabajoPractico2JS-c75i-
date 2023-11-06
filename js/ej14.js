const texto = prompt("Ingrese una cadena de texto:");
let textoGuiones = "";

for (let i = 0; i < texto.length; i++) {
    if (i > 0) {
        textoGuiones += "-";
    }
    
    textoGuiones += texto[i];
}

document.write(`<h1>${textoGuiones}</h1>`);