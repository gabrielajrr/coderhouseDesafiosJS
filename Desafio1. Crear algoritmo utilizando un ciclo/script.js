//
//
//
/********* Desafio 1: Crear un algoritmo utilizando un Ciclo *********/
//
//
alert(`Bienvenid@ a FANtasyOne, por favor sigue las instrucciones:`);
let usuario = prompt(`Ingresa tu nombre de usuario`).toLowerCase();
let password = prompt(`Ingresa tu clave`);
let piloto;

if (usuario == "gabrielajrr" && password == "12345") {
    alert(
        `Hola ${usuario}!, tienes un presupuesto disponible de usd 100.000.000 para escoger 3 pilotos y 1 equipo`
    );

    for (let i = 1; i <= 3; i++) {
        piloto = prompt(`Ingresa el nombre de tu piloto ${i}`);
        console.log(`Tu piloto ${i} es ${piloto}`);
    }

    let equipo = prompt(`Ahora ingrese su equipo`);
    console.log(`Tu equipo seleccionado es ${equipo}`);

} else if (usuario == "") {
    alert("Por favor ingrese un usuario valido");
} else {
    alert(
        "Su usuario es incorrecto, verifique nuevamente usuario y contraseña"
    );
}