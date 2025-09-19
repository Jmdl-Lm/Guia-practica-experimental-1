let precioInicial = 0, marcaCel = "", capacidad = 0, precioFinal;
precioInicial = parseFloat(prompt("Ingres el precio inicial del celular"));
marcaCel = prompt("Ingrese la marca del cel");
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
alert(`El valor final del celular es de $${precioFinal.toFixed(2)}`)