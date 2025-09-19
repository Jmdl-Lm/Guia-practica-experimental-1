let N = 0 , edad1 = 0, edad2 = 0, edad3 = 0, edadMayor = 0;
N = parseInt(prompt("Ingrese el número de grupos"));
for(let i = 1; i <= N ; i++) {
    edad1 = parseInt(prompt("Ingrese la edad del primer hermano"));
    edad2 = parseInt(prompt("Ingrese la edad del segundo hermano"));
    edad3 = parseInt(prompt("Ingrese la edad del tercer hermano")); 
    edadMayor = Math.max(edad1, edad2, edad3);
    if (edad1 === edad2 && edad2 === edad3) {
    alert(`En el grupo ${i}, los tres hermanos tienen la misma edad`)
    } else if (edad1 === edad2 && edad2 != edad3 || edad1 === edad3 && edad1 != edad2 || edad2 === edad3 && edad2 != edad1) { 
    alert(`En el grupo ${i}, dos hermanos tienen la edad mas alta con ${edadMayor} años`)
    } else {
    alert(`En el grupo ${i}, el hermano mayor tiene ${edadMayor} años`)
    }
}