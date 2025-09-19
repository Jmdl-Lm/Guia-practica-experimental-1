let edades = [] , edadMayor = 0
edades[0] = parseInt(prompt("Ingrese la edad del primer hermano"));
edades[1] = parseInt(prompt("Ingrese la edad del segundo hermano"));
edades[2] = parseInt(prompt("Ingrese la edad del tercer hermano")); 
edadMayor = Math.max(edades[0], edades[1], edades[2]);
if (edades[0] === edades[1] && edades[1] === edades[2]) {
    alert(`Los tres hermanos tienen la misma edad`);
} else if (edades[0] === edades[1] && edades[1] != edades[2] || edades[0] === edades[2] && edades[0] != edades[1] || edades[1] === edades[2] && edades[1] != edades[0]) { 
    alert(`Dos hermanos tienen la edad mas alta con ${edadMayor} años`);
} else {
    alert(`El hermano mayor tiene ${edadMayor} años`);
}