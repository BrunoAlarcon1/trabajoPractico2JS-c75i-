let numero = parseInt(prompt("Ingrese un numero menor o igual a 50"));

if (numero < 50){
for (let i = numero; i >= 1; i--) {
    let linea = "";
    for (let t = 1; t <= i; t++) {
      linea += i;
    }
    document.write(`<p>${linea}</P>`);
  }
}else{
    alert("Ingreso un numero que excede el 121limite");
}

