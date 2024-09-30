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
