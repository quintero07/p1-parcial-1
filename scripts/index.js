'use strict';
let listaDiscos = [
    // new Disco('autor1', 'disco1', 'https://picsum.photos/200/300', '1', [new Pista('pista1',22),new Pista('pista2',23), new Pista('dare', 400)]),
    // new Disco('autor2', 'disco2', 'https://picsum.photos/200/300', '2',[new Pista('pista3',32),new Pista('pista4',43)]),
    // new Disco('autor3', 'disco3', 'https://picsum.photos/200/300', '3',[new Pista('pista5',52),new Pista('pista6',63)]),
];

/*
* QUINTERO, DARELIS
*/

/**
 * Llamada desde un boton. Pide los datos para un disco.
 */
function cargar() {
    let nombre = pedirDatos('ingresa el nombre del disco');
    let autor = pedirDatos('ingresa el Autor o banda del disco');
    let codigo = pedirDatos('ingresa el Código numérico único del disco', 'codigo');
    let portada = pedirDatos('Ingresa la url de la portada'); //https://picsum.photos/200/300
    let pistas = CargarPistas();
    let nuevoDisco = new Disco(autor, nombre, portada, codigo, pistas);
    listaDiscos.push(nuevoDisco)
}

/**
 * Llamada desde un boton. Muestra todos los discos disponibles.
 */
function mostrar() {
    let contenedorDiscos = document.querySelector('#discos');
    if (listaDiscos.length == 0) {
        alert('No hay discos')
        return
    }
    listaDiscos.forEach(disco => {
        console.log(disco.autor);
        contenedorDiscos.innerHTML = contenedorDiscos.innerHTML + disco.crearCard();
    });
}

function pedirDatos(mensaje, tipo='') {
    let respuesta = '';
    while (true) {
        respuesta = prompt(mensaje);
        if(['codigo', 'duracion'].includes(tipo) && isNaN(respuesta)){
            alert('Respuesta invalida, intente un numero');
            continue;
        }
        if(tipo == 'codigo' && (respuesta < 1 || respuesta > 999)){
            alert('Respuesta invalida, intente un numero mayor a 1 y menor que 999');
            continue;
        }
        if(tipo == 'codigo' && listaDiscos.some(disco => disco.codigo == respuesta)) {
            alert('Este código ya existe, intente nuevamente')
            continue;
        }
        if(tipo == 'duracion' && respuesta < 0 || respuesta > 7200){
            alert('Duracion invalida, intente un  numero mayor a 0 y menor que 7200')
            continue;
        }

        if (respuesta) {
            break;
        }
        alert('Respuesta invalida, intente nuevamente');
    }
    return respuesta;
}

function CargarPistas(){
    const pistas = [];
    while(true){
        let nombre = pedirDatos('Ingrese nombre pista');
        let duracion = pedirDatos('Ingrese duracion, en segundos', 'duracion');
        let pistaNueva = new Pista(nombre, duracion);
        pistas.push(pistaNueva);

        let respuesta = confirm('Desea cargar otra pista?\nOK para cargar otra pista\nCancel para salir');

        if(!respuesta){
            break;
        }
    }
    return pistas;
}



