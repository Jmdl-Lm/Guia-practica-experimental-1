let usuarios = [], valorPorUsuario = [], vf = [], N = 0, c = 1;
N = parseInt(prompt("Ingrese el número de grupos"));
for(let i = 0; i < N; i++){
    usuarios[i] = parseInt(prompt(`Ingrese el número de usuarios del grupo ${c}`));
    if (usuarios[i] >= 100) {
    valorPorUsuario[i] = 5;
    vf[i] = usuarios[i] * valorPorUsuario[i];
    } else if (usuarios[i] >= 50 && usuarios[i] <= 99){
    valorPorUsuario[i] = 6;
    vf[i] = usuarios[i] * valorPorUsuario[i];
    } else if (usuarios[i] >= 30 && usuarios[i] <= 49){
    valorPorUsuario[i] = 8;
    vf[i] = usuarios[i] * valorPorUsuario[i];
    } else {
    vf[i] = 300
    valorPorUsuario[i] = (vf[i]/usuarios[i]).toFixed(2)
    }
alert(`El valor total a pagar del grupo ${c} es de $${vf[i]} y por persona es de $${valorPorUsuario[i]}`)
c++
}