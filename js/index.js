function quitaacentos(){    
    var x = document.getElementById("txtarea").value;
    document.getElementById("txtarea").value = sincaracteresespeciales(x);    
      
}


function sincaracteresespeciales(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // para acentos

        //.replace(/([^\w]+|\s+)/g, '-') // sin espacios este lo quito mejor
        .replace(/\-\-+/g, '-') // sin saltos
        .replace(/(^-+|-+$)/g, ''); // sin cosas otros caracteres al final
}

function encriptar(str) {
    str.replace('e','enter');
    
}

