//
//
//
/********* Desafio 2: Simulador Interactivo *********/
//
//
function iniciarJuego() {
    alert(`Bienvenid@ a FANtasyOne, por favor inicia sesion:`);

    const usuario = prompt(`Ingresa tu nombre de usuario`).toLowerCase();
    const password = prompt(`Ingresa tu clave`);

    if (usuario === "gabrielajrr" && password === "12345") {
        alert(
            `Hola ${usuario}!, puedes hacer 3 predicciones, tienes un presupuesto disponible de usd 100.000.000 para escoger 3 pilotos y 1 equipo en cada prediccion`
        );
        for (let i = 1; i <= 3; i++) {
            alert("Selecciona tu prediccion numero " + i);
            console.log("Tu prediccion " + i + " es:");
            prediccionUsuario();
        }
    } else if (usuario == "") {
        alert("Por favor ingrese un usuario valido");
    } else {
        alert(
            "Su usuario es incorrecto, verifique nuevamente usuario y contraseña"
        );
    }
}

function prediccionUsuario() {
    for (let i = 1; i <= 3; i++) {
        let piloto = prompt(`Ingresa el nombre de tu piloto ${i}`);
        console.log(`Tu piloto ${i} es ${piloto}`);
    }

    const equipo = prompt(`Ahora ingrese su equipo`);
    console.log(`Tu equipo seleccionado es ${equipo}`);
}

iniciarJuego();
