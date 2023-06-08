const btnEnviar = document.querySelector('.btn-enviar');
const btnBorrar = document.querySelector('.btn-borrar');
const categoria = document.querySelector('#categoria');
const cantidad = document.querySelector('#cantidad');
const precio = document.querySelector('.precio');
const miFormulario=document.querySelector('#miForm');

btnEnviar.addEventListener('click',()=>{
    console.log(categoria.value);
    if (cantidad.value==0) {alert("Debe ingresar la cantidad de entradas.");}
    if (categoria.value==estudiante){paga=40;}
    if (categoria.value==trainee) { paga=100;}
    if (categoria.value==junior)  {paga=170;} 
  
    precio.textContent=categoria.value*cantidad.value;
    btnEnviar.disabled = true;
})

btnBorrar.addEventListener('click',()=>{
    miFormulario.reset();

})