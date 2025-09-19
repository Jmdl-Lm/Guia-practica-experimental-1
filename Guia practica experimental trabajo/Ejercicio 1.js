let edad1 = 0 , edad2 = 0, edad3 = 0, edadMayor = 0
edad1 = parseInt(prompt("Ingrese la edad del primer hermano:"));
edad2 = parseInt(prompt("Ingrese la edad del segundo hermano:"));
edad3 = parseInt(prompt("Ingrese la edad del tercer hermano:"));
edadMayor = Math.max(edad1, edad2, edad3);
if (edad1 === edad2 && edad2 === edad3) {
    alert(`Los tres hermanos tienen la misma edad`)
} else if (edad1 === edad2 && edad2 != edad3 || edad1 === edad3 && edad1 != edad2 || edad2 === edad3 && edad2 != edad1) { 
    alert(`Dos hermanos tienen la edad mas alta con ${edadMayor} años`)
} else {
    alert(`El hermano mayor tiene ${edadMayor} años`)
}
