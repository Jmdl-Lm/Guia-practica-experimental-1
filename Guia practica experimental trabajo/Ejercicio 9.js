let precioInicial = 0, marcaCel = [], capacidad = [], precioFinal = [], N = 0, c = 1;
N = parseInt(prompt("Ingrese la cantidad de celulares a vender"))
for(let i = 0; i < N; i++){
precioInicial = parseFloat(prompt(`Ingres el precio inicial del celular ${c}`));
marcaCel[i] = prompt("Ingrese la marca del celular");
capacidad[i] = parseInt(prompt("Ingrese la memoria en Gb del celular"));
if (marcaCel[i] === "A" && capacidad[i] === 64){
    precioFinal[i] = precioInicial + 20
} else if (marcaCel[i] === "A" && capacidad[i] === 128){
    precioFinal[i] = precioInicial + 30
} else if (marcaCel[i] === "B" && capacidad[i] === 64){
    precioFinal[i] = precioInicial - 30
} else if (marcaCel[i] === "B" && capacidad[i] === 128){
    precioFinal[i] = precioInicial - 50
} else {
    alert("Valores ingresados no válidos, revise bien la marca y memoria")
}
alert(`El valor final del celular ${c} es de $${precioFinal[i].toFixed(2)}`)
c++
}