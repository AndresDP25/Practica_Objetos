function capturar(){
    // console.log("capturar");
    function Persona(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    };
    // let nombreCapturar = document.getElementById('nombre').value;
    var nombreCapturar = $('#nombre').val();
    var edadCapturar = $('#edad').val();

    console.log(nombreCapturar, edadCapturar);

    nuevoSujeto = new Persona(nombreCapturar,edadCapturar);
    console.log(nuevoSujeto);
    agregar();
};

var baseDatos = [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    
    $('#table').append(`<tbody><td>${nuevoSujeto.nombre}</td><td>${nuevoSujeto.edad}</td></tbody>`);
    // document.getElementById('table').innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td></tbody>';
};