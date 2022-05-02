//
//
//
// Primera preentrega de Proyecto
//
//
// CLASES

class NuevoUsuario {
    constructor(usuario, password, presupuestoDisponible) {
        this.usuario = usuario;
        this.password = password;
        this.presupuestoDisponible = parseFloat(presupuestoDisponible);
    }
    presupuesto() {
        return `Hola ${this.usuario} tu presupuesto disponible es de ${this.presupuestoDisponible}.`;
    }
}

class PrediccionUsuario {
    constructor(nombrePiloto1, nombrePiloto2, nombrePiloto3, equipo) {
        this.nombrePiloto1 = nombrePiloto1;
        this.nombrePiloto2 = nombrePiloto2;
        this.nombrePiloto3 = nombrePiloto3;
        this.equipo = equipo;
    }
    mostrarPredicciones() {
        return `Tus pilotos elegidos son:\npiloto1: ${this.nombrePiloto1}, \npiloto2: ${this.nombrePiloto2} y \npiloto3${this.nombrePiloto3}. \nEl nombre de tu equipo es: ${this.equipo}.`;
    }
}
//
//
//
// VARIABLES
//
//----creando nuevo usuario con funcion crearUsuario
const nuevoUsuario = crearUsuario();
console.log(nuevoUsuario)

//----creando preidiccion del usuario con funcion crearPrediccion
const nuevaPrediccion = crearPrediccion();

//----creando arrays con predicciones del usuario pusheando la constante nuevaPrediccion
const prediccion = [];
//
//
//
//FUNCIONES
//
//---- funcion crear usuario, va a variable nuevoUsuario
function crearUsuario() {
    alert(`Bienvenid@ a FANtasyOne, por favor inicia sesion:`);
    const usuario = prompt(`Ingresa tu nombre de usuario`).toLowerCase;
    const password = prompt(`Ingresa tu contraseña`).toLowerCase();
    const presupuestoDisponible = 1000000;

    return new NuevoUsuario(usuario, password, presupuestoDisponible);
}
//
//---- funcion crear prediccion, va a variable nuevaPrediccion
function crearPrediccion() {
    const nombrePiloto1 = prompt(`Ingresa el Nombre del Piloto 1`).toUpperCase();
    const nombrePiloto2 = prompt(`Ingresa el Nombre del Piloto 2`).toUpperCase();
    const nombrePiloto3 = prompt(`Ingresa el Nombre del Piloto 3`).toUpperCase();
    const equipo = prompt(`Ingresa el Nombre del Equipo`).toUpperCase();

    return new PrediccionUsuario(nombrePiloto1, nombrePiloto2, nombrePiloto3, equipo);
}

//
//
//
// INVOCACION DE FUNCIONES
//
//
prediccion.push(nuevaPrediccion);
console.log(prediccion);

