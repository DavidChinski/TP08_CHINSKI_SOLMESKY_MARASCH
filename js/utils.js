function calcularRecaudacionTotal(pedidos) {
    const pedidosArray = pedidos.split(',').map(pedido => {
        const [nombre, total] = pedido.split(':');
        return parseFloat(total);
    });
    return pedidosArray.reduce((acum, actual) => acum + actual, 0);
}

function separarPorGuiones(lista) {
    return lista.split(',').join(' - ');
}