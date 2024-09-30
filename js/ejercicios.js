
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
