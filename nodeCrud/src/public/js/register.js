
const form = document.getElementById('registerFor');
const inputs = document.querySelectorAll('#registerFor input');

/*Crear las expresiones regulares*/
const expresiones = {
    userName: /^[A-Za-z\s0-9]{4,40}$/,
    name: /^[A-Za-z\s]{4,40}$/,
    correo: /[a-z0-9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    contrasena:/^[A-Za-z0-9]{4,20}$/,
    
}
const comprobar ={
    name: false,
    userName: false,
    correo: false,
    password: false,
    password2: false
}
/*Funcion para validar los inputs recorridos*/
const validarForm = (e)=>{
    /*segun el name de cada input en el html ejecutar un caso*/
   switch(e.target.name){
    case "nombreUsuario":
        /*Validar el input segun la expresion regular*/
        if(expresiones.userName.test(e.target.value /*acceder al valor del input*/)) {
            document.getElementById('input').classList.add('inputNextAprobe');
            document.getElementById('error1').classList.add('error1');
            document.getElementById('error1').classList.remove('activeError');
            comprobar['userName'] = true;
        }else{
            document.getElementById('input').classList.remove('inputNextAprobe');
            document.getElementById('input').classList.remove('inputNextNegate');
            document.getElementById('error1').classList.add('activeError');
            comprobar['userName'] = true;
        }  
    break;
    case "nombre":
        if(expresiones.name.test(e.target.value)){
            document.getElementById('input2').classList.add('inputNextAprobe');
            document.getElementById('error2').classList.add('error2');
            document.getElementById('error2').classList.remove('activeError');
            comprobar['name'] = true;
        }else{
            document.getElementById('input2').classList.remove('inputNextAprobe');
            document.getElementById('input2').classList.remove('inputNextNegate');
            document.getElementById('error2').classList.add('activeError');
            comprobar['name'] = false;
        }
    break;
    case "correo":
        if(expresiones.correo.test(e.target.value)){
            document.getElementById('input3').classList.add('inputNextAprobe');
            document.getElementById('error3').classList.add('error3');
            document.getElementById('error3').classList.remove('activeError');
            comprobar['correo'] = true;
        }else{
            document.getElementById('input3').classList.remove('inputNextAprobe');
            document.getElementById('input3').classList.remove('inputNextNegate');
            document.getElementById('error3').classList.add('activeError');
            comprobar['correo'] = false;
        }
    break;
   
    case "password":
        if(expresiones.contrasena.test(e.target.value)){
            document.getElementById('input4').classList.add('inputNextAprobe');
            document.getElementById('error4').classList.add('error4');
            document.getElementById('error4').classList.remove('activeError');
            comprobar['password'] = true;
        }else{
            document.getElementById('input4').classList.remove('inputNextAprobe');
            document.getElementById('input4').classList.remove('inputNextNegate');
            document.getElementById('error4').classList.add('activeError');
            comprobar['password'] = false;
        }
    break;
    case "password2":
        const pass = document.getElementById('input4').value;
        const pass2 = document.getElementById('input5').value;
        if(pass == pass2){
            document.getElementById('input5').classList.add('inputNextAprobe');
            document.getElementById('error5').classList.add('error5');
            document.getElementById('error5').classList.remove('activeError');
            comprobar['password2'] = true;
        }else{
            document.getElementById('input5').classList.remove('inputNextAprobe');
            document.getElementById('input5').classList.remove('inputNextNegate');
            document.getElementById('error5').classList.add('activeError');
            comprobar['password2'] = false;
        }
    break;
   
    }
}



/*Recorrer todos los inputs del formulario*/
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);  
});

/*No dejar que se envien campos vacios*/

    form.addEventListener('submit',(e)=>{
        //e= evento
        const terminos = document.getElementById('termino');
        if(comprobar.userName == true && comprobar.name == true && comprobar.correo==true &&comprobar.password ==true && comprobar.password2 ==true ){
            document.getElementById('error6').classList.remove('activeError');
            
        }else{
            document.getElementById('error6').classList.add('activeError');
            e.preventDefault();

        }
    });
    
    






