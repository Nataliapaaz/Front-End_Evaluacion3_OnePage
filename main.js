/* Acá se crea la tabla donde iran los datos, se recuperan los valores de cada elemento y se cargan en la tabla creada, se usa un ciclo para ir generando cada una de las filas y columnas de la tabla */
var cargarTabla = (listadoNuevo)=>{
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eMail = document.getElementById("mail");
    let eNombre = document.getElementById("nombre");
    let eNumero = document.getElementById("numero");
    let eRadioSi = document.getElementById("si");
    let eRadioNo = document.getElementById("no");
    if (eRadioSi.checked == true) {
        var radio = eRadioSi.value
    }else if (eRadioNo.checked == true) {
        var radio = eRadioNo.value
    }
    let eMes = document.getElementById("mes");
    let eHora = document.getElementById("hora");
    let eSemana = document.getElementById("semana");
    let eComentarios = document.getElementById("comentarios");
    render = "<table>"
    render += "<tr><th>mail</th><th>nombre</th><th>numero</th><th>cliente</th><th>mes</th><th>hora</th><th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render+="<tr>"
        render+="<td>"+element.mail+"</td>";
        render+="<td>"+element.nombre+"</td>";
        render+="<td>"+element.numero+"</td>";
        render+="<td>"+element.radio+"</td>";
        render+="<td>"+element.mes+"</td>";
        render+="<td>"+element.hora+"</td>";
        render+="<td>"+element.semana+"</td>";
        render+="<td>"+element.comentarios+"</td>";
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render+="</table>"
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        
        //Acá se crea el boton editar de arriba y recupera los valores de los elementos para modificarlos
        var eBtnEditar = document.getElementById("btnEditar"+i);
        eBtnEditar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>"
            eSBtnAccion.innerHTML = sBtn;
            
            // Se llama a la funcion flecha modificar para actualizar los cambios en el arreglo
            let eBtnEditarUp = document.getElementById("btnEditar")
            eBtnEditarUp.addEventListener('click', ()=>modificar(listadoNuevo));

            eMail.value = element.mail;
            eNombre.value = element.nombre;
            eNumero.value = element.numero;
            if (element.radio == eRadioSi.value) {
                eRadioSi.checked = element.radio
            }else {
                eRadioNo.checked = element.radio
            }
            eMes.value = element.mes;
            eHora.value = element.hora;
            eSemana.value = element.semana;
            eComentarios.value = element.comentarios;

            //los valores de cada campo recuperado se pueden modificar para actualizarlos en el arreglo
            document.getElementById("mail").disabled = false;
            document.getElementById("nombre").disabled = false;
            document.getElementById("numero").disabled = false;
            document.getElementById("si").disabled = false;
            document.getElementById("no").disabled = false;
            document.getElementById("mes").disabled = false;
            document.getElementById("hora").disabled = false;
            document.getElementById("semana").disabled = false;
            document.getElementById("comentarios").disabled = false;
        })
        
        //Acá se crea el boton eliminar de arriba, se bloquean los input para eliminar 
        var eBtnEliminar = document.getElementById("btnEliminar" + i);
        eBtnEliminar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEliminarUp = document.getElementById("btnEliminar")
            eBtnEliminarUp.addEventListener('click', ()=>eliminar(listadoNuevo));

            eMail.value = element.mail;
            eNombre.value = element.nombre;
            eNumero.value = element.numero;
            if (element.radio == eRadioSi.value) {
                eRadioSi.checked = element.radio
            }else {
                eRadioNo.checked = element.radio
            }
            eMes.value = element.mes;
            eHora.value = element.hora;
            eSemana.value = element.semana;
            eComentarios.value = element.comentarios;
            
            //se bloquean los input para que no puedan ser modifcicados por el usurario
            document.getElementById("mail").disabled = true;
            document.getElementById("nombre").disabled = true;
            document.getElementById("numero").disabled = true;
            document.getElementById("si").disabled = true;
            document.getElementById("no").disabled = true;
            document.getElementById("mes").disabled = true;
            document.getElementById("hora").disabled = true;
            document.getElementById("semana").disabled = true;
            document.getElementById("comentarios").disabled = true;
        })
    }
}

// Acá se le pasa el parametro de listado nuevo al arreglo
var modificar = (listadoNuevo)=> {
    console.log("Editando......")
    let eMail = document.getElementById("mail");
    let mail = eMail.value;
    let eNombre = document.getElementById("nombre");
    let nombre = eNombre.value;
    let eNumero = document.getElementById("numero");
    let numero = eNumero.value;
    let eRadioSi = document.getElementById("si");
    let eRadioNo = document.getElementById("no");
    if (eRadioSi.checked == true) {
        var radio = eRadioSi.value
    }else if (eRadioNo.checked == true) {
        var radio = eRadioNo.value
    }
    let eMes = document.getElementById("mes");
    let mes = eMes.value;
    let eHora = document.getElementById("hora");
    let hora = eHora.value;
    let eSemana = document.getElementById("semana");
    let semana = eSemana.value;
    let eComentarios = document.getElementById("comentarios");
    let comentarios = eComentarios.value;
    let eBtnEditarUp = document.getElementById("btnEditar");
    let indice = eBtnEditarUp.value;
    listadoNuevo[indice].mail = mail;
    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].numero = numero;
    listadoNuevo[indice].radio = radio;
    listadoNuevo[indice].mes = mes;
    listadoNuevo[indice].hora = hora;
    listadoNuevo[indice].semana = semana;
    listadoNuevo[indice].comentarios = comentarios;
    localStorage.setItem('datos', JSON.stringify(listadoNuevo))
    cargarTabla(listadoNuevo);
}

var eliminar = (listadoNuevo) =>{
    let eBtnEliminarUp = document.getElementById("btnEliminar");
    let indice = eBtnEliminarUp.value;
    let lista = listadoNuevo.filter((p)=>p.id!=indice)
    let listaFinal = lista.map((p, index)=>{return{...p, 'id': index}})
    localStorage.setItem('datos', JSON.stringify(lista))
    cargarTabla(listaFinal)
}

var registrar = ()=>{
    let eMail = document.getElementById("mail");
    let mail = eMail.value;
    let eNombre = document.getElementById("nombre");
    let nombre = eNombre.value;
    let eNumero = document.getElementById("numero");
    let numero = eNumero.value;
    let eRadioSi = document.getElementById("si");
    let eRadioNo = document.getElementById("no");
    if (eRadioSi.checked == true) {
        var radio = eRadioSi.value
    }else if (eRadioNo.checked == true) {
        var radio = eRadioNo.value
    }
    let eMes = document.getElementById("mes");
    let mes = eMes.value;
    let eHora = document.getElementById("hora");
    let hora = eHora.value;
    let eSemana = document.getElementById("semana");
    let semana = eSemana.value;
    let eComentarios = document.getElementById("comentarios");
    let comentarios = eComentarios.value;
    console.log(mail);
    console.log(nombre);
    console.log(numero);
    console.log(radio);
    console.log(mes);
    console.log(hora);
    console.log(semana);
    console.log(comentarios);
    let listadoAntiguoStr = localStorage.getItem("datos");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listaAntiguo)
    if(listaAntiguo==null){
        let datos = {"id": 0, "mail": mail ,"numero": numero, "nombre": nombre,
        "radio": radio, "mes": mes, "hora": hora, "semana": semana, "comentarios": comentarios};
        var listadoNuevo = [datos]
    }else{
        let datos = {"id": listaAntiguo.length, "mail": mail ,"numero": numero, "nombre": nombre,
        "radio": radio, "mes": mes, "hora": hora, "semana": semana, "comentarios": comentarios};
        var listadoNuevo = [...listaAntiguo,datos]
    }
    console.log(listadoNuevo)

    localStorage.setItem("datos",JSON.stringify(listadoNuevo));
    cargarTabla(listadoNuevo)
}


    /*  
    var validar = document.getElementById("btn");
    validar.addEventListener('click', ()=> {
        // Validamos los campos de input text
        camposTexto = document.getElementById("formulario").elements; 
        let aprobado = true
        for (x=0; x < camposTexto.length; x++) {
            if (camposTexto[x].value == '' && camposTexto[x].type=='text'){
                alert("El campo " + camposTexto[x].id + " esta vacio! Este campo es obligatorio");
                aprobado = false
                //return false;
            }    
       }
       if(aprobado){
        localStorage.setItem("datos",JSON.stringify(listadoNuevo));
        }
       
       // Validamos si hay alguna opción marcada
       camposCheck = document.getElementsByName("radio");   
       opcion = false;
       x = 0;
       
       while (x<camposCheck.length && !opcion) {
               if (camposCheck[x].checked){
                   opcion = true;
               }
               x++;
           }
           if (!opcion){
               alert("Tienes que seleccionar alguna opción");
           }else{
            localStorage.setItem("datos",JSON.stringify(listadoNuevo));
           }
    })
    cargarTabla(listadoNuevo)
}

function mostrar() {
    let mail = document.getElementById("mail").value;
    let nombre = document.getElementById("nombre").value;
    let numero = document.getElementById("numero").value;
    let radio = document.getElementById("si").value;
    let mes = document.getElementById("mes").value;
    let hora = document.getElementById("hora").value;
    let semana = document.getElementById("semana").value;
    let comentarios = document.getElementById("comentarios").value;
    var resultado = mail + " " + nombre + " " + numero + " " + radio + " " +  mes + " " + hora + " " + semana + " " + comentarios;
    console.log(resultado)
}
*/

var obtenerDatos = ()=>{
    let listadoAntiguoStr = localStorage.getItem("datos");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    cargarTabla(listaAntiguo)
}


//document.getElementById("btn").addEventListener('click', validar);
document.getElementById("btn").addEventListener("click", registrar);
addEventListener('load', obtenerDatos);