


const boton = window.document.querySelector('#boton');
boton.addEventListener("clic", validarDatos);

function validarDatos() {

    const email = window.document.querySelector('#email');
    const textInput = email.value;
    console.log(textInput);
    email.value = "";
    email.focus();

    const pass = window.document.querySelector('#pass');
    const textInput1 = pass.value;
    console.log(textInput1);
    pass.value = "";
    pass.focus();

        if (textInput === "ejemplo@gmail.com" && textInput1 === "123456") {
            console.log ("Iniciando sesión…")
        }
        else {
            console.log("Email y/o contraseña incorrectos")
}

    }




