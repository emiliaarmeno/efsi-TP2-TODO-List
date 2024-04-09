var ID = 1;
let ahora = Date.now(); 
var array =[];

var objeto = {
    id : 0,
    texto : "tarea", 
    date : ahora,
    tachado : false
}

function agregarTarea(id){
    let contenido = document.getElementById(id)

    if(contenido.value === '') { 
        alert("Error en el ingreso de datos")   
    }else{
        objeto = crearNuevoObjeto(ID, contenido.value, ahora)
        ID++;
        array.push(objeto);
        recargarListado();
    }
}

function recargarListado(){
    document.querySelector('#lista-contenedor').innerHTML = "";

    for(var i=0; i<array.length;i++){
        var tachado = array[i].tachado ? 'tachado' : '';                    
        
        document.querySelector('#lista-contenedor').innerHTML += `
        <li class="${tachado}" onclick="cambiarEstado(${array[i].id})"> 
            ${array[i].texto} 
        </li>`         
    }
}


function crearNuevoObjeto(ID, txt, ahora){
    let obj = {
        id : ID,
        texto : txt, 
        date : ahora,
        tachado : false
    }
    return obj; 
}

function combiarEstado(id){
    //recorrer el array, encontrar por id el 
    let copiaArray = array.slice();
}