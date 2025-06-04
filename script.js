document.addEventListener('DOMContentLoaded',()=>{

    //1. Seleccionar los elementos del DOM

    const registroForm = document.getElementById('registroForm')
    const nombreInput = document.getElementById('nombre');
    const emailInput =  document.getElementById('correo');
    const passwordInput = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorCorreo');
    const errorPassword = document.getElementById('errorPassword');
    const errorConfirm = document.getElementById('errorconfirmPassword');
    const sucessMessage = document.getElementById('successMessange');


    // funcion para mostrar un mensaje de error
    function mostrarError(elementoError, inputElement, mensaje){
        elementoError.textContent = mensaje;
        elementoError.style.display = 'block';
        inputElement.classList.add('invalid');
    }


    // funcion para ocultar un mensaje de error
    function ocultarError(elementoError, inputElement){
        elementoError.style.display = 'none';
        inputElement.classList.remove('invalid');
    }


    //Se puede usar una validación en tiempo real de validacion de caracteres con REGEX
    //PENDIENTE DE IMPLEMENTAR EN UN MODULO AVANZADO

    registroForm.addEventListener('submit', (event)=>{ //Modificamos el evento listener de click y ademas indicamos que el evento "Event" se envien por error o vacios
        event.preventDefault(); //Prevenimos que se mande por defecto el formulario y que se limpie inmediatamente. Haciendo la acción que deseemos


        //Limpiamos todos los mensajes y errores
        sucessMessage.style.display = 'none';
        ocultarError(errorNombre, nombreInput);
        ocultarError(errorEmail, emailInput);
        ocultarError(errorPassword, passwordInput);
        ocultarError(errorConfirm, confirmPassword);

        //Realizamos la validación
        let formValido = true;
        if (nombreInput.value.trim() ===''){
            mostrarError(errorNombre, nombreInput, 'El nombre es requerido');
            formValido = false;
        } 
    })

})


