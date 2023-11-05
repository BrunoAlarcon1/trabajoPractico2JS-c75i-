

        while (true) {
            let numero = prompt("Ingrese el número de DNI (debe estar entre 0 y 99999999):");

            if (numero === null) {
                break; 
            }

            numero = parseInt(numero);

            if (!isNaN(numero) && numero >= 0 && numero <= 99999999) {
                let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
                let letra = letrasDNI.charAt(numero % 23);

                document.write(`<h1>La letra del ${numero} es: ${letra} </h1>`);
            } else {
                alert("Ingrese un número de DNI válido (entre 0 y 99999999).");
            }
        }


