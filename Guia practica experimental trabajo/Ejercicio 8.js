let precioInicial = 0, marcaCel = "", capacidad = 0, precioFinal = 0, N = 0;
N = parseInt(prompt("Ingrese la cantidad de celulares a vender"))
for(let i = 1; i <= N; i++){
precioInicial = parseFloat(prompt(`Ingres el precio inicial del celular ${i}`));
marcaCel = prompt("Ingrese la marca del celular");
capacidad = parseInt(prompt("Ingrese la memoria en Gb del celular"));
if (marcaCel === "A" && capacidad === 64){
    precioFinal = precioInicial + 20
} else if (marcaCel === "A" && capacidad === 128){
    precioFinal = precioInicial + 30
} else if (marcaCel === "B" && capacidad === 64){
    precioFinal = precioInicial - 30
} else if (marcaCel === "B" && capacidad === 128){
    precioFinal = precioInicial - 50
} else {
    alert("Valores ingresados no válidos, revise bien la marca y memoria")
}
alert(`El valor final del celular ${i} es de $${precioFinal.toFixed(2)}`)
}