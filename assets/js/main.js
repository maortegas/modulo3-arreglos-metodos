const listaTareas=[
    {   id: 1,
        tarea:'Apagar despertador',
        estado:false
    },
    {   id: 2,
        tarea:'Levantarse',
        estado:false
    },
    {   id: 3,
        tarea:'Ducharse',
        estado:false
    }
]

const listaDeTareas = document.getElementById('listaDeTareas');
const tareaInput = document.getElementById('tareaInput');
const spnTotal = document.getElementById('spnTotal');
const spnRealizadas = document.getElementById('spnRealizadas');
const btnAgregar =  document.getElementById('btnAgregar');
let tareasRealizadas=[];

function renderList(tareas){
    let html = ''
    let checked= ''
    tareasRealizadas=[];

    for (let tarea of tareas) {
        checked= ''
        if (tarea.estado==true) {
            checked='checked'
            tareasRealizadas.push(tarea)
        }
    
        html += ` <ul class="list-group list-group-horizontal">
        <li class="list-group-item anchoID">${tarea.id}</li>
        <li class="list-group-item anchoTarea">${tarea.tarea}</li>
        <li class="list-group-item anchoEstado"><input class="form-check-input" type="checkbox" onclick="actualizaTarea(${tarea.id})"  ${checked} /> </li>
        <li class="list-group-item anchoEliminar"> <button onclick="borrarTarea(${tarea.id})"> Eliminar </button></li>
        </ul>`;
    }
    listaDeTareas.innerHTML = html;
    spnTotal.textContent = tareas.length;
    spnRealizadas.textContent=tareasRealizadas.length;
}

function borrarTarea(id) {
    const index = listaTareas.findIndex((ele) => ele.id == id)
    listaTareas.splice(index, 1)
    renderList(listaTareas)
}

function actualizaTarea(id) {
    const index = listaTareas.findIndex((ele) => ele.id == id)
    let tarea=listaTareas[index];

    tarea.estado= !tarea.estado;
    listaTareas.splice(index, 1,tarea );
     
    
    renderList(listaTareas);
}

const asignaID=(arreglo)=>{
    let id=1

    if (arreglo.length>0){
        const ordenado = arreglo.sort((x,y) =>  x.id - y.id);
        id= ordenado[ordenado.length-1].id + 1;
    }
    return id
}
   

btnAgregar.addEventListener("click", () => {
    const tarea = tareaInput.value
    
    if (tarea ==''){
        alert('Debe de ingresar una tarea')
        return
    }

    listaTareas.push({id: asignaID(listaTareas), tarea: tarea, estado:false});
    tareaInput.value = '';

    renderList(listaTareas)
    }
);

renderList(listaTareas);

