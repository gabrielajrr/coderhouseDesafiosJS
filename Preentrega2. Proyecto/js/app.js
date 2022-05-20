//
//
// SEGUNDA ENTREGA DE PROYECTO
//
//
//CLASES

class NuevoUsuario {
    constructor(usuarioParam, passwordParam, presupuestoDisponibleParam) {
        this.usuario = usuarioParam;
        this.password = passwordParam;
        this.presupuestoDisponible = parseFloat(presupuestoDisponibleParam);
    }

    restoPresupuesto(presupuestoParam) {
        this.presupuestoDisponible -= presupuestoParam;
    }

    sumoPresupuesto(presupuestoParam) {
        this.presupuestoDisponible += presupuestoParam;
    }
}

class PrediccionUsuario {
    constructor(seleccionDePilotosParam, seleccionDeEquipoParam) {
        this.seleccionDePilotos = seleccionDePilotosParam;
        this.seleccionDeEquipo = seleccionDeEquipoParam;
    }
    mostrarPredicciones() {
        return `Tus pilotos elegidos son:\npiloto1: ${this.seleccionDePilotos} \nEl nombre de tu equipo es: ${this.seleccionDeEquipo}.`;
    }

}

//VARIABLES

//----creando arrays con predicciones del usuario pusheando la constante nuevaPrediccion
const baseDatosUsuario = [];

//----creando arrays con predicciones del usuario pusheando la constante nuevaPrediccion
const prediccion = [];

//----array de pilotos

const cardsPilotos = [
    {img: 'imagenes/ham.png', nombrePiloto: "Lewis Hamilton", precio: 50000000},
    {img: 'imagenes/rus.png', nombrePiloto: "George Russell", precio: 35000000},
    {img: 'imagenes/ver.png', nombrePiloto: "Max Verstappen", precio: 50000000},
    {img: 'imagenes/per.png', nombrePiloto: "Sergio Perez", precio: 25000000},
    {img: 'imagenes/ric.png', nombrePiloto: "Daniel Ricciardo", precio: 20000000},
    {img: 'imagenes/nor.png', nombrePiloto: "Lando Norris", precio: 20000000},
    {img: 'imagenes/lec.png', nombrePiloto: "Charles Leclerc", precio: 20000000},
    {img: 'imagenes/sai.png', nombrePiloto: "Carlos Sainz", precio: 20000000},
    {img: 'imagenes/vet.png', nombrePiloto: "Sebastian Vettel", precio: 16500000},
    {img: 'imagenes/str.png', nombrePiloto: "Lance Stroll", precio: 15000000},
    {img: 'imagenes/alo.png', nombrePiloto: "Fernando Alonso", precio: 22000000},
    {img: 'imagenes/oco.png', nombrePiloto: "Esteban Ocon", precio: 16000000 },
    {img: 'imagenes/bot.png', nombrePiloto: "Valteri Bottas", precio: 10000000},
    {img: 'imagenes/zho.png', nombrePiloto: "Guanyu Zhou", precio: 12500000 },
    {img: 'imagenes/gas.png', nombrePiloto: "Pierre Gasly", precio: 15000000 },
    {img: 'imagenes/tsu.png', nombrePiloto: "Yuki Tsunoda", precio: 10000000 },
    {img: 'imagenes/alb.png', nombrePiloto: "Alex Albon", precio: 12500000 },
    {img: 'imagenes/lat.png', nombrePiloto: "Nicholas Latifi", precio: 9000000 },
    {img: 'imagenes/mag.png', nombrePiloto: "Kevin Magnussen", precio: 5000000},
    {img: 'imagenes/msc.png', nombrePiloto: "Mick Schumacher", precio: 3000000 },
]

const contenedorPilotos = document.getElementById('pilotosFantasy')

//----array de equipos

const cardsEquipos = [
    {img: 'imagenes/mercedes.png', nombreEquipo: "Mercedes", precio: 30000000},
    {img: 'imagenes/redbull.png', nombreEquipo: "Red Bull", precio: 28000000},
    {img: 'imagenes/mclaren.png', nombreEquipo: "McLaren", precio: 20000000},
    {img: 'imagenes/ferrari.png', nombreEquipo: "Ferrari", precio: 18000000},
    {img: 'imagenes/astonmartin.png', nombreEquipo: "Aston Martin", precio: 16500000},
    {img: 'imagenes/alpine.png', nombreEquipo: "Alpine", precio: 16000000},
    {img: 'imagenes/alfaromeo.png', nombreEquipo: "Alfa Romeo", precio: 12500000},
    {img: 'imagenes/alphatauri.png', nombreEquipo: "Alpha Tauri", precio: 15000000},
    {img: 'imagenes/williams.png', nombreEquipo: "Williams", precio: 14000000},
    {img: 'imagenes/haas.png', nombreEquipo: "Haas", precio: 8000000},
]

const contenedorEquipos = document.getElementById('equiposFantasy')


//---- variables para eventos

const botonIniciarSesion = document.getElementById('btnIniciarSesion');

//---- array pilotos seleccionados
const contenedorPilotosComprados = document.getElementsByClassName('seleccionDePilotos')

//FUNCIONES
//
//---- funcion crear usuario, se guarda en baseDatosUsuario
function crearUsuario(e) {
    e.preventDefault()
    let usuario = document.getElementById('usuario');
    let password = document.getElementById('password');
    let presupuestoDisponible = 1000000;

    baseDatosUsuario.push(new NuevoUsuario(usuario, password, presupuestoDisponible));
    localStorage.setItem("usuario", JSON.stringify(baseDatosUsuario))

    function empezar() {
        document.getElementById('prediccionUsuario').style.visibility = "visible";
        document.getElementById('aside').style.visibility = "visible"
    }
    empezar()

    const formulario = document.getElementById('formularioNuevoUsuario');
    formulario.reset();
}

//
//---- funcion crear prediccion, va a variable nuevaPrediccion
// function crearPrediccion() {
//     e.preventDefault()
//     const seleccionDePilotos = document.getElementsByClassName('seleccionDePilotos');
//     const seleccionDeEquipo = document.getElementsByClassName('seleccionDeEquipo');
    
//     prediccion.push (new PrediccionUsuario(seleccionDePilotos, seleccionDeEquipo));
    
//     localStorage.setItem("prediccionUsuario", JSON.stringify(prediccion))
    
// }

console.log(prediccion)

// CREACION DE ELEMENTOS DOM

cardsPilotos.forEach((piloto) => {
    const div = document.createElement('div')
    div.className = "card-img-top"
    
    div.innerHTML = `
                    <img src=${piloto.img} class="card-img-top" alt="${piloto.nombrePiloto}">
                    <div class="card-body">
                        <h5 class="card-title">${piloto.nombrePiloto}</h5>
                        <p class="card-text">Precio: $${piloto.precio}</p>
                        <a href="#" class="btn btn-success comprar">Comprar</a>
                    </div>
                `
    
    contenedorPilotos.appendChild(div)
    }
)

cardsEquipos.forEach((equipo) => {
    const div = document.createElement('div')
    div.className = "card-img-top"
    
    div.innerHTML = `
                    <img src=${equipo.img} class="card-img-top" alt="${equipo.nombreEquipo}">
                    <div class="card-body">
                        <h5 class="card-title">${equipo.nombreEquipo}</h5>
                        <p class="card-text">Precio: $${equipo.precio}</p>
                        <a href="#" class="btn btn-success">Comprar</a>
                    </div>
                `
    
    contenedorEquipos.appendChild(div)
    }
)

// cardsPilotos.forEach((pilotoComprado) => {
//     const div = document.createElement('div')
//     div.className = "card-img-top"
    
//     div.innerHTML = `
//                     <img src=${pilotoComprado.img} class="card-img-top" alt="${pilotoComprado.nombrePiloto}">
//                     <div class="card-body">
//                         <h5 class="card-title">${pilotoComprado.nombrePiloto}</h5>
//                         <p class="card-text">Precio: $${pilotoComprado.precio}</p>
//                         <a href="#" class="btn btn-success comprar">Devolver</a>
//                     </div>
//                 `
    
//     contenedorPilotosComprados.appendChild(div)
//     }
// )

//EVENTOS

botonIniciarSesion.addEventListener('click', crearUsuario)
// contenedorPilotosComprados.addEventListener('click', crearPrediccion)

