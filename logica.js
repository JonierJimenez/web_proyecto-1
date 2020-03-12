$(function () {

    $('#formularioM').hide();
    $('#u-tabla2').hide();
    $('#u-tabla3').hide();
    $('#lpro').hide();
    $('#formEditar').hide();

   
    agregarUsuario();
    agregarMascotas();
    listaPropietario();
    editarUsuario();
    editarMascota();
    guardarEdicionUsuario();
    eliminar();
    eliminarM();
    ver();

});

//variable universal
var permitido=1;

function agregarUsuario() {

    $('#aggP').on('click', function (e) {
        permitido=0;
        e.preventDefault();
        $('#formularioM').hide();
        $('#u-tabla2').hide();

        var nombre =   $("#nombre")
        var apellido = $("#apellido");
        var direccion= $("#direccion")
        var telefono = $("#telefono");
        var opciones = $("#opciones");

        $('#u-tabla').append("<tr>"
                                    + "<td>" + nombre.val() + "</td>"
                                    + "<td>" + apellido.val() + "</td>"
                                    + "<td>" + direccion.val() + "</td>"
                                    + "<td>" + telefono.val() + "</td>"
                                    + "<td><button class='btn btn-primary caggM'>Agregar Mascotas</button></td>" +
                            "</tr>");
        nombre.val(" ");
        apellido.val(" ");
        direccion.val(" ");
        telefono.val(" ");
    });
}



function agregarMascotas() {
    
    var tdApellido, tdNombre,nombrePersona,apellidoPerso;
    $('#u-tabla').on('click', '.caggM', function (e) {
        e.preventDefault();
        $("#formPropietario").hide();
        $('#formularioM').show();
        $('#u-tabla2').hide();

        var tr = $(this).closest('tr');
        tdNombre =   tr.children("td:nth-child(1)");
        tdApellido = tr.children("td:nth-child(2)");

        //opteniendo informacion del dueño de la mascota
        nombrePersona = tdNombre.html();
        apellidoPerso = tdApellido.html();

        //opteniendo informacion del formulario de mascotas

        $("#npropietario").html(nombrePersona);

    });

    var nombremascota = $('#nombremascota');
    var tipomascota = $('#tipomascota');
    var fechamascota = $('#fechamascota');

    $("#aggM").on("click" , function(e){
        //ocultar
         
         $("#formPropietario").show();
         $("#formularioM").hide();

         e.preventDefault();
         $('#u-tabla2').append("<tr>"
                                     + "<td>" + nombremascota.val() + "</td>"
                                     + "<td>" + tipomascota.val()   + "</td>"
                                     + "<td>" + fechamascota.val()  + "</td>"
                                     + "<td>" + nombrePersona  + "</td>"
                                    + "<td><button class='btn btn-primary editM'>Editar</button></td>" 

                             + "</tr>");

           $('#u-tabla2').show();
           nombremascota.val(" ");
           tipomascota.val(" ");
           fechamascota.val(" ");
          
     });
}

function listaPropietario(){
        
        $("#listar").on("click", function (){
        //ocultar 
            $("#u-tabla3").show();
            $("#u-tabla2").show();
            $("#txtagregarmascota").text("Lista de Usuarios");
            $("#u-tabla").hide();
            $("#formPropietario").hide();
            $("#formularioM").hide();
            $("#filaTablaMascota").hide();

                var nombre, apellido, direccion,telefono;
                var _row='';
                var header_1='<tr> <td>Nombre</td> <td>Apellido</td> <td>Direccion</td> <td>Telefono</td> <td>Opciones</td></tr>';
                

                $("#body_filtro").html('');
                $("#body_filtro").html(header_1);
                _row='';
                $("#u-tabla tbody tr").each(function(idx, fila){
                            
                    nombre=     fila.children[0].innerHTML;
                    apellido=   fila.children[1].innerHTML;
                    direccion=  fila.children[2].innerHTML;
                    telefono=   fila.children[3].innerHTML;
                    //nota=   fila.children[4].innerHTML;

                    _row='<tr><td>'+nombre+'</td><td>'+apellido+'</td><td>'+direccion+'</td><td>'+telefono+'</td><td>'+"<a href='#' class='editar'>Editar</a>"+'</td></tr>';
                    if(permitido == 0){
                       $("#u-tabla3").append(_row);
                    }

                    });

                permitido=1;
                                
            });


}

function editarUsuario() {
    $('#u-tabla3').on('click', '.editar', function(e) {
        e.preventDefault();

        var tr =   $(this).closest('tr');
        var tdNombre =     tr.children("td:nth-child(1)");
        var tdApellido =   tr.children("td:nth-child(2)");
        var tdDireccion =  tr.children("td:nth-child(3)");
        var tdTelefono =   tr.children("td:nth-child(4)");
        var tdOpciones =   tr.children("td:nth-child(5)");
        

        var vnombre = tdNombre.html();
        tdNombre.html("<input type='text' id='txtNombre' placeholder='Nombre' />");

        var vapellido = tdApellido.html();
        tdApellido.html("<input type='text' id='txtApellido' placeholder='Apellido' />");

        var vdireccion = tdDireccion.html();
        tdDireccion.html("<input type='text' id='txtDireccion' placeholder='Direccion' />");

        var vtelefono = tdTelefono.html();
        tdTelefono.html("<input type='number' id='txtTelefono' placeholder='Telefono' />");


        tdOpciones.html("<a href='#' class='guardar button'>Guardar</a>" +
                        "<a href='#' class='eliminar button'>Eliminar</a>");
    });
}


function editarMascota() {
    $('#u-tabla2').on('click', '.editM', function(e) {
        e.preventDefault();

        var tr =   $(this).closest('tr');
        var tdNombre =     tr.children("td:nth-child(1)");
        var tdTipo =   tr.children("td:nth-child(2)");
        var tdFecha =  tr.children("td:nth-child(3)");
        var tdOpciones =   tr.children("td:nth-child(5)");
        

        var vnombre = tdNombre.html();
        tdNombre.html("<input type='text' id='txtNombre' placeholder='Nombre M' />");

        var vtipo = tdTipo.html();
        tdTipo.html("<input type='text' id='txtTipo' placeholder='tipo' />");

        var vdireccion = tdFecha.html();
        tdFecha.html("<input type='text' id='txtFecha' placeholder='fecha dd/mm/aaaa/' />");

       

        tdOpciones.html("<a href='#' class='guardarM button'>GuardarM</a>" +
                        "<a href='#' class='eliminarM button'>EliminarM</a>");
    });
}


function guardarEdicionUsuario() {

    $('#u-tabla3').on('click', '.guardar', function(e) {
        e.preventDefault();

        var tr = $(this).closest('tr');
        var tdNombre =      tr.children("td:nth-child(1)");
        var tdApellido =    tr.children("td:nth-child(2)");
        var tdDireccion =   tr.children("td:nth-child(3)");
        var tdTelefono =    tr.children("td:nth-child(4)");
        var tdOpciones =    tr.children("td:nth-child(5)");

        var nuevoNombre = tdNombre.children("input[type=text]").val();
        tdNombre.html(nuevoNombre);

        var nuevoApellido = tdApellido.children("input[type=text]").val();
        tdApellido.html(nuevoApellido);

        var nuevoDireccion = tdDireccion.children("input[type=text]").val();
        tdDireccion.html(nuevoDireccion);

        var nuevoTelefono = tdTelefono.children("input[type=number]").val();
        tdTelefono.html(nuevoTelefono);

        tdOpciones.html("<a href='#' class='editar button'>Editar</a>");
    });
}


function guardarEdicionUsuario() {

    $('#u-tabla2').on('click', '.guardarM', function(e) {
        e.preventDefault();

        var tr = $(this).closest('tr');
        var tdNombre =      tr.children("td:nth-child(1)");
        var tdTipo =    tr.children("td:nth-child(2)");
        var tdFecha =   tr.children("td:nth-child(3)");
        var tdOpciones =    tr.children("td:nth-child(5)");

        var nuevoNombre = tdNombre.children("input[type=text]").val();
        tdNombre.html(nuevoNombre);

        var nuevoTipo = tdTipo.children("input[type=text]").val();
        tdTipo.html(nuevoTipo);

        var nuevoFecha = tdFecha.children("input[type=date]").val();
        tdFecha.html(nuevoFecha);


        tdOpciones.html("<a href='#' class='editM button'>EditarM</a>");
    });
}



function eliminar() {
    $('#u-tabla3').on('click', '.eliminar', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
}

function eliminarM() {
    $('#u-tabla2').on('click', '.eliminarM', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
}
