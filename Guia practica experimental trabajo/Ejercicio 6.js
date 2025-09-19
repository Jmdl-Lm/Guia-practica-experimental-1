let cantidadTarjetas = [], vf = [], precio = 0, N = 1;
pedidos = parseInt(prompt("Ingrese la cantidad de pedidos"));
for(let i = 0; i < pedidos; i++){
    cantidadTarjetas[i] = parseInt(prompt(`Ingrese la cantidad de tarjetas del pedido ${N}`));
    if (cantidadTarjetas[i] <= 200) {
        precio = 2.00;
    } else if (cantidadTarjetas[i] >= 201 & cantidadTarjetas[i] <= 300) {
        precio = 1.80;
    } else {
        precio = 1.50;
    }
    vf[i] = cantidadTarjetas[i] * precio;
    alert(`El costo total del pedido ${N} es $${vf[i]}`);
    N++
}