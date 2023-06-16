var handleContraste = () => {
    let btn = document.getElementById('btnContraste')
    let estado = btn.value;
    if(estado=='o') {
        btn.value = 'c';
        let elements = document.getElementsByClassName('negro');
        console.log(elements)
        console.log(elements[0].classList)
        elements[0].classList.add('blanco');
        elements[0].classList.remove('negro');

    }
    else if(estado=='c') {
        btn.value = 'o';
        let elements = document.getElementsByClassName('blanco');
        console.log(elements)
        console.log(elements[0])
        elements[0].classList.add('negro');
        elements[0].classList.remove('blanco');

    }

}

var handleFuente = () => {
    let btn = document.getElementById('btnFuente')
    let estado = btn.value;
    if(estado=='0') {
        btn.value = '1';
        let elements = document.getElementsByClassName("small");
        const largo = elements.length;
        for (let index = 0; index < largo; index++) {
            const element = elements[0];
            element.classList.add("medium");
            element.classList.remove("small");
        }
    }
    else if(estado == '1') {
        btn.value = '2'
        let elements = document.getElementsByClassName("medium");
        const largo = elements.length;
        for (let index = 0; index < largo; index++) {
            const element = elements[0];
            element.classList.add("large");
            element.classList.remove("medium");
        }
    }
    else if(estado == '2') {
        btn.value = '0'
        let elements = document.getElementsByClassName("large");
        const largo = elements.length;
        for (let index = 0; index < largo; index++) {
            const element = elements[0]
            element.classList.add("small");
            element.classList.remove("large");}
}
}

document.getElementById("btnContraste").addEventListener('click', handleContraste)
document.getElementById("btnFuente").addEventListener('click', handleFuente)