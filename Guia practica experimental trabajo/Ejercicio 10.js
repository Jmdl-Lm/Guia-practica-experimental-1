let usuarios = 0, valorPorUsuario = 0, vf = 0;
usuarios = parseInt(prompt("Ingrese el número de usuarios"));
if (usuarios >= 100) {
    valorPorUsuario = 5;
    vf = usuarios * valorPorUsuario;
} else if (usuarios >= 50 && usuarios <= 99){
    valorPorUsuario = 6;
    vf = usuarios * valorPorUsuario;
} else if (usuarios >= 30 && usuarios <= 49){
    valorPorUsuario = 8;
    vf = usuarios * valorPorUsuario;
} else {
    vf = 300
    valorPorUsuario = (vf/usuarios).toFixed(2)
}
alert(`El valor total a pagar es de $${vf} y por persona es de $${valorPorUsuario}`)