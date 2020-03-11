function listarUsuarios(){

    $("#listar").on("click",function (e){
       e.preventDefault();
     
 
    });
 
 
 
 
 
 
 }
 
 
 function copiarTabla(){
    var codigo;
    _row=" ";

    $("#u-tabla  tbody tr").each(function(idx, fila){
        
        codigo=fila.children[0].innerHTML;
        _row+='<tr><td>'+codigo+'</td></tr>'
    });

    $("#u-tabla3").append(_row);
}