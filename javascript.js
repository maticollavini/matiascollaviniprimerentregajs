// Inicializar la variable que almacenará el tiempo de espera
let tiempoDeEspera = 0;

// Iterar desde 1 hasta 10 para simular los turnos
for (let i = 1; i <= 10; i++) { 
    // Solicitar al usuario que ingrese su nombre para esperar el turno
    const nombreIngresado = prompt("Ingresa tu nombre para esperar el turno");

    // Verificar si no se ingresó un nombre
    if (nombreIngresado === "") {
        // Mostrar un mensaje de alerta y salir del bucle
        alert("No ingresaste un nombre");
        break;
    } else {
        // Actualizar el tiempo de espera sumando 10 minutos
        tiempoDeEspera = tiempoDeEspera + 10;

        // Mostrar la información del turno, nombre y tiempo de espera
        alert("Turno N* " + i + "\nNombre: " + nombreIngresado + "\nTiempo de espera: " + tiempoDeEspera + " Minutos");
    }
}