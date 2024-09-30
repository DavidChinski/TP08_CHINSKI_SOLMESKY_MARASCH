function calcularRecaudacionTotal(pedidos) {
    const pedidosArray = pedidos.split(',').map(pedido => {
        const [nombre, total] = pedido.split(':');
        return parseFloat(total)    ;
    });
    return pedidosArray.reduce((acum, actual) => acum + actual, 0);
}

function separarPorGuiones(lista) {
    return lista.split(',').join(' - ');
}

function recortarCadena(cadena, numero) {
    return cadena.slice(0, numero);
}

function reemplazarPalabras(cadena, palabraOriginal, palabraNueva) {
    return cadena.replaceAll(palabraOriginal, palabraNueva);
}

function filtrarNombresConA(nombres) {
    return nombres.split(',').filter(nombre => nombre.startsWith('A'));
}

function duplicarNumeros(array) {
    return array.map(numero => numero * 2);
}


function crearCiudad() {
    return {
        nombre: 'Buenos Aires',
        fechaFundacion: '1536-02-02',
        poblacion: '15 millones',
        extension: '203 km²'
    };
}

function realizarComparaciones() {
    const resultado = [];
    resultado.push(`A. 10 == '10': ${10 == '10'}`); 
    resultado.push(`B. 10 === '10': ${10 === '10'}`); 
    resultado.push(`C. Tipo de dato de 10.6: ${typeof 10.6}`); 
    resultado.push(`D. true == 1: ${true == 1}`); 
    return resultado.join();
}
