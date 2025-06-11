document.addEventListener('DOMContentLoaded',()=>{

    //1. Seleccionar los elementos del DOM

    const registroForm = document.getElementById('registroForm')
    const nombreInput = document.getElementById('nombre');
    const emailInput =  document.getElementById('correo');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

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

        //realizamos validación de correo.
        const emailpattern = /^[^\s@]+@[^\s@]+.\[^\s@]+$/;
        if (emailInput.value.trim()===''){
            mostrarError(errorEmail, emailInput, 'El correo es requerido');
            formValido = false;
        }else if(!emailpattern.test(emailInput.valu.trim())){
          mostrarError(errorEmail, emailInput, 'Ingrese un correo válido');
            formValido = false;   
        }
        //validacion de contraseña

        if (passwordInput.value.trim()===''){
            mostrarError(errorPassword, passwordInput, 'La contraseña es requerida');
            formValido = false;        
        }else if (passwordInput.value.trim().lenght < 6){
            mostrarError(errorPassword, passwordInput, 'La contraseña debe ser igual o mayor a 6');
            formValido = false;   
        }


        //validacion de la confirmación de contraseña
        if (confirmPasswordInput.value.trim()===''){
            mostrarError(errorConfirm, confirmPasswordInput, 'Debe de ingresar la contraseña');
            formValido = false;        
        }else if (confirmPasswordInput.value !== passwordInput.value){
            mostrarError(errorConfirm, confirmPasswordInput, 'Las contraseñas deben ser iguales');
            formValido = false;     
        }

        // Si el formulario es valido, mostrar el mensajhe de eisto 
        if (formValido){
            sucessMessage.style.direction = 'block';
            registroForm.reset();
            console.log('Formulario enviado correctamente');   
        }
    })

})


