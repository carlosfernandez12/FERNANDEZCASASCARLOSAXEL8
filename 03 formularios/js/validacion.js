function validar(formulario){
    if(formulario.nombre.value.legth < 3){
        alert("escriba por lo menos mas de 3 caracteres nombre ");
        formulario.nombre.focus();
        
    }
}