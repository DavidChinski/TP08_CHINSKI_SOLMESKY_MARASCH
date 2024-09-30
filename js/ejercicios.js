
function ejercicio1() {
    const pedidos = prompt("Ingresa la lista de pedidos (formato: 'nombre:total', separados por comas):");
    const totalRecaudacion = calcularRecaudacionTotal(pedidos);
    document.getElementById("resultado").innerHTML = `La recaudación total es: $${totalRecaudacion}`;
}

function ejercicio2() {
    const lista = prompt("Ingresa una lista de elementos separados por comas:");
    const resultado = separarPorGuiones(lista);
    document.getElementById("resultado").innerHTML = resultado;
}

function ejercicio3() {
    const cadena = prompt("Ingresa una cadena de texto:");
    const numero = parseInt(prompt("Ingresa el número de caracteres a mostrar:"));
    const resultado = recortarCadena(cadena, numero);
    document.getElementById("resultado").innerHTML = resultado;
}

function ejercicio4() {
    const cadena = prompt("Ingresa una cadena de texto:");
    const palabraOriginal = prompt("Ingresa la palabra que quieres reemplazar:");
    const palabraNueva = prompt("Ingresa la nueva palabra:");
    const resultado = reemplazarPalabras(cadena, palabraOriginal, palabraNueva);
    document.getElementById("resultado").innerHTML = resultado;
}

function ejercicio5() {
    const nombres = prompt("Ingresa una lista de nombres separados por comas:");
    const resultado = filtrarNombresConA(nombres);
    document.getElementById("resultado").innerHTML = `Nombres que empiezan con 'A': ${resultado.join(', ')}`;
}

function ejercicio6() {
    const numeros = prompt("Ingresa una lista de números separados por comas:");
    const arrayNumeros = numeros.split(',')
    const resultado = duplicarNumeros(arrayNumeros);
    document.getElementById("resultado").innerHTML = `Array duplicado: ${resultado.join(', ')}`;
}

function ejercicio7() {
    const ciudad = crearCiudad();
    
    let informacionDeLaCiudad = ''; 

  
    for (let propiedad in ciudad) {
        if (ciudad.hasOwnProperty(propiedad)) {
           
            informacionDeLaCiudad += `${propiedad}: ${ciudad[propiedad]}, `;
        }
    }

    document.getElementById("resultado").innerHTML = `Información de la ciudad: ${ciudadInfo}`;
    
}


function ejercicio8() {
    const resultado = realizarComparaciones();
    document.getElementById("resultado").innerHTML = resultado;
}


function ejercicio9() {
    const frutas = ['manzana', 'banana', 'pera', 'naranja', 'durazno', 'uva', 'kiwi', 'frutilla', 'sandía', 'limón'];
    const fruta = prompt("Ingresa una fruta:");
    const resultado = buscarFruta(frutas, fruta);
    document.getElementById("resultado").innerHTML = resultado;
}



function ejercicio10() {
    const nombre = prompt("Ingresa tu nombre:");
    const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (YYYY-MM-DD):");
    const edad = calcularEdad(fechaNacimiento);

    if (edad === null) {
        document.getElementById("resultado").innerHTML = "La fecha ingresada no se puede. es invalida";
    } else {
        document.getElementById("resultado").innerHTML = `Hola ${nombre}, tienes ${edad} años!`;
    }
}