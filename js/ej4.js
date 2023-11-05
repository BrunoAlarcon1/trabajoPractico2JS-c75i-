let suma = 0;
let numero;

while (true) {
    numero = prompt("Ingrese un número o presione cancelar para finalizar");

    if (numero === null) {
        break; 
    }

    numero = parseFloat(numero);

    if (!isNaN(numero)) {
        suma += numero;
    } else {
        alert("Ingrese un número válido");
    }
}

if (suma !== 0) {
    document.write(`<p>La suma de los números ingresados es: ${suma}</p>`);
} else {
    alert("No se ingresaron números.");
}
