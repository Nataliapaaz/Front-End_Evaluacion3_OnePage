var cargarTabla = (listadoNuevo)=>{
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eMail = document.getElementById("mail");
    let mail = eMail.value;
    let eNumero = document.getElementById("numero");
    let numero = eNumero.value;
    let eNombre = document.getElementById("nombre");
    let nombre = eNombre.value;
    let eAgua = document.getElementById("agua")
    let agua = eAgua.value;
    let eMes = document.getElementById("mes")
    let mes = eMes.value
    let eSol = document.getElementById("sol")
    let sol = eSol.value
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
        render+="<button>Eliminar</button>"
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
            console.log(eSBtnAccion)
            eSBtnAccion.innerHTML = sBtn;
            
            let eBtnEditarUp = document.getElementById("btnEditar")
            eBtnEditarUp.addEventListener('click', ()=>modificar(listadoNuevo));

            eMail.value = element.mail;
            eNombre.value = element.nombre;
            eNumero.value = element.numero;
            eAgua.value = element.agua;
            eMes.value = element.mes;
            eSol.value = element.sol;
        })
    }
}

var modificar = ()=> {
    console.log("Editando......")
    let eMail = document.getElementById("mail");
    let mail = eMail.value;
    let eNumero = document.getElementById("numero");
    let numero = eNumero.value;
    let eNombre = document.getElementById("nombre");
    let nombre = eNombre.value;
    let eAgua = document.getElementById("agua")
    let agua = eAgua.value;
    let eMes = document.getElementById("mes")
    let mes = eMes.value
    let eSol = document.getElementById("sol")
    let sol = eSol.value
    lisdatoNuevo[indice].mail = mail;
    listadoNuevo[indice].numero = numero;
    listadoNuevo[indice].nombre = nombre;
    lisdatoNuevo[indice].agua = agua;
    listadoNuevo[indice].mes = mes;
    lisdatoNuevo[indice].sol = sol;
    localStorage.setItem('datos', JSON.stringify(listadoNuevo))
    cargarTabla(listadoNuevo);
}

function mostrar() {
    let checkbox = document.getElementById("checkbox").value;
    let mail = document.getElementById("mail").value;
    let numero = document.getElementById("numero").value;
    let nombre = document.getElementById("nombre").value;
    let agua = document.getElementById("agua").value;
    let mes = document.getElementById("mes").value;
    let sol = document.getElementById("sol").value;
    var resultado = mail + " " + numero + " " + nombre + " " + agua + " " +  mes + " " + sol + " " + checkbox;
    console.log(resultado)
}

var registrar = ()=> {
    let eMail = document.getElementById("mail");
    let mail = eMail.value;
    console.log(mail)
    let eNumero = document.getElementById("numero");
    let numero = eNumero.value;
    console.log(numero)
    let eNombre = document.getElementById("nombre");
    let nombre = eNombre.value;
    console.log(nombre)
    let eAgua = document.getElementById("agua")
    let agua = eAgua.value;
    console.log(agua)
    let eMes = document.getElementById("mes")
    let mes = eMes.value
    console.log(mes)
    let eSol = document.getElementById("sol")
    let sol = eSol.value
    console.log(sol)

    let datos = {"email": mail ,"numero": numero,
        "nombre": nombre, "agua": agua, "mes": mes,
        "sol": sol}
    //let datosStr = JSON.stringify(datos)
    //localStorage.setItem('mes',datosStr);
   

    let listadoAntiguoStr = localStorage.getItem("datos");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listaAntiguo)
    if(listaAntiguo==null){
        var listadoNuevo = [datos]
    }else{
        var listadoNuevo = [...listaAntiguo,datos]
    }
    console.log(listadoNuevo)
    localStorage.setItem("datos",JSON.stringify(listadoNuevo));
    console.log(listadoNuevo)
    cargarTabla(listadoNuevo)
    //creacion de la tabla


}
document.getElementById("btn").addEventListener("click", registrar);