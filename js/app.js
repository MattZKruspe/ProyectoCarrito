//variables
const carrito = document.requerySelector('carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = documents.requerySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('#vaciar-Carrito');

cargarEventListener();
function cargarEventListener(){
listaCursos.addEventListener('click', agregarCurso);

}
//Estas son las funciones
function agregarCurso(e){
    e.preventDeFault();
    if(e.targer.classList.contains('agregar-carrito')){
        console.log(e.target);
    }
    
}