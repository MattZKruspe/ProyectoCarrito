//variables
const carrito = document.requerySelector('carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = documents.requerySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('#vaciar-Carrito');

cargarEventListener();
function cargarEventListener() {
    listaCursos.addEventListener('click', agregarCurso);
}
//Estas son las funciones
function agregarCurso(e){
    e.preventDeFault();
    if(e.targer.classList.contains('agregar-carrito')){
        console.log(e.target.parentElement.parentElement);
        leerDatosCurso(cursoSeleccionado);

    }
}
/*-----------------------------------------------------------*/
function leerDatosCurso(curso){
    console.log(curso);
}
//cracion del objeto del curso actual
const curso = {
 imagen: curso.querySelector('img').src,
 titulo: curso.querySelector('h4').textContent,
 precio: curso.querySelector('.precio spam').textContent,
 id: curso.querySelector('a').getAtribute('data-id'),
 cantidad: 1
}

articulosCarrito.forEach(curso => {
    const row =  document.createElement('tr');
    row.innerHTML = ´
        <td>
            ${curso.titulo}
        </td>
        ´;
});

