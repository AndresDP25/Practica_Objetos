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
    let texto = `<tbody  id="body"><td>${nuevoSujeto.nombre}</td><td>${nuevoSujeto.edad}</td></tbody>`;
    $('#table').append(texto);
    // document.getElementById('table').innerHTML += '<tbody  id="body"><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td></tbody>';
};

function borrar(){
    // console.log('borrar');
    $('#body').html('');
    baseDatos = [];
};