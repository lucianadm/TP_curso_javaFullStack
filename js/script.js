const btnEnviar = document.querySelector('.btn-enviar');
const btnBorrar = document.querySelector('.btn-borrar');
const categoria = document.querySelector('#categoria');
const cantidad = document.querySelector('#cantidad');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const precio = document.querySelector('.precio');
const miFormulario=document.querySelector('#miForm');




function verificaCampos(){
if (nombre.value==""){
    alert("Debe ingresar el nombre.");}
    else if (apellido.value==""){
        alert("Debe ingresar el apellido.");}
     else if (email.value==""){
            alert("Debe ingresar el email.");}
      else if (cantidad.value<=0) {alert("La cantidad de entradas es incorrecta.");}

}

function calcularPrecio(){
    var desc=1;
    console.log(categoria.value);
  
    let vale=200*cantidad.value;
    switch(categoria.value){
        case "regular":
            desc=vale;
            break;
        case "estudiante":
            desc=vale*0.2;
            break;
        case "trainee":
            desc=vale*0.5;
            break;
        case "junior":
            desc=vale*0.85;
            break;} 
  
  
    precio.innerHTML=` ${desc}`;
}

btnEnviar.addEventListener('click',(e)=>{
  e.preventDefault();
    verificaCampos();
    calcularPrecio();
  })

btnBorrar.addEventListener('click',(a)=>{
    a.preventDefault();
    miFormulario.reset();
    precio.innerHTML=` `;

})