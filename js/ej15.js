const texto = prompt("Ingrese un texto:").toLowerCase();
let contVocales = 0;

for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    if (letra ==="a" || letra ==="e" || letra ==="i"|| letra ==="o" || letra ==="u"){
        contVocales++;
    }
}

document.write(`<h1>El texto contiene ${contVocales} vocales.</h1>`);
