const btnEnviar = document.querySelector('.btn-enviar');
const btnBorrar = document.querySelector('.btn-borrar');
const categoria = document.querySelector('#categoria');
const cantidad = document.querySelector('#cantidad');
const precio = document.querySelector('.precio');
const miFormulario=document.querySelector('#miForm');


function calcularPrecio(){
    var desc=1;
    console.log(categoria.value);
    if (cantidad.value==0) {alert("Debe ingresar la cantidad de entradas.");}
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
    calcularPrecio();
  })

btnBorrar.addEventListener('click',(a)=>{
    a.preventDefault();
    miFormulario.reset();
    precio.innerHTML=` `;

})