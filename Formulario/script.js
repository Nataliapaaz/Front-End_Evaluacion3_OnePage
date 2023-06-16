var cargarTabla = (listadoNuevo)=> {
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    render = "<table>"
    render += "<tr><th>mail</th><th>nombre</th><th>numero</th><th>agua</th><th>mes</th><th>sol</th><th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render+="<tr>"
        render+="<td>"+element.email+"</td>";
        render+="<td>"+element.numero+"</td>";
        render+="<td>"+element.nombre+"</td>";
        render+="<td>"+element.agua+"</td>";
        render+="<td>"+element.mes+"</td>";
        render+="<td>"+element.sol+"</td>";
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+">Eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render+="</table>"
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        var eBtnEditar = document.getElementById("btnEditar"+i);
        eBtnEditar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEditarUp = document.getElementById("btnEditar")
            eBtnEditarUp.addEventListener('click', ()=>modificar(listadoNuevo));

            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
        })
        
        var eBtnEliminar = document.getElementById("btnEliminar" + i);
        eBtnEliminar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEliminarUp = document.getElementById("btnEliminar")
            eBtnEliminarUp.addEventListener('click', ()=>eliminar(listadoNuevo);

            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
    })

}

var modificar = ()=> {
    console.log("Editando......")
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eBtnEditarUp = document.getElementById("btnEditar")
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let indice = eBtnEditarUp.value;
    console.log(nombre);
    console.log(apellido);
    console.log(indice);
    lisdatoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].apellido = apellido;
    localStorage.setItem('alumnos', JSON.stringify(listadoNuevo))
    cargarTabla(listadoNuevo);
}

var eliminar = (listadoNuevo) =>{
    let eBtnEliminarUp = document.getElementById("btnEliminar");
    let indice = eBtnEliminarUp.value;
    let lista = listadoNuevo.filter((p)=>p.id!=indice)
    let listaFinal = lista.map((p, index)=>{return{...p, 'id': index}})
    localStorage.setItem('alumno', JSON.stringify(lista))
    cargarTabla(listaFinal)
}

var registrar = ()=>{
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    console.log(nombre);
    console.log(apellido);
    let persona = {"nombre":nombre,"apellido":apellido};
    console.log(persona)
    let listadoAntiguoStr = localStorage.getItem("alumnos");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listaAntiguo)
    if(listaAntiguo==null){
        let persona = {"id": 0, "nombre": nombre, "apellido": apellido};
        var listadoNuevo = [persona]
    }else{
        let persona = {"id": listaAntiguo.length, "nombre": nombre, "apellido": apellido};
        var listadoNuevo = [...listaAntiguo,persona]
    }
    console.log(listadoNuevo)
    localStorage.setItem("alumnos",JSON.stringify(listadoNuevo));

    cargarTabla(listadoNuevo)
}

var obtenerDatos= ()=>{
    let listadoAntiguoStr = localStorage.getItem("alumnos");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    cargarTabla(listaAntiguo)
}

document.getElementById("btn").addEventListener("click",registrar)
addEventListener('load', )