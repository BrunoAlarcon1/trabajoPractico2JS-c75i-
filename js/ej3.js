let cadena = "";

do {
    let texto = prompt("Ingrese un texto o presione cancelar para finalizar");
    
    if (texto !== null) {
        if (cadena !== "") {
            cadena += " - " + texto;
        } else {
            cadena = texto;
        }
    } else {
        break;
    }
} while (true);

if (cadena !== "") {
    document.write(`<p>${cadena}</p>`);
} else {
    alert("No se ingreso un texto.");
}
