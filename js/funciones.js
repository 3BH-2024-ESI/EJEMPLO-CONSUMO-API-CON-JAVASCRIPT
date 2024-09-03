$(document).ready(function(){  

        jQuery.ajax({  
            url: 'https://api.esi.edu.uy/api/videojuego',  
            type: 'GET',
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            
            success: function(resultado) {  
                console.log(resultado);
            },
            
            error: function(resultado){
                              
            } 
            
        });  

    $("#botonEnviar").click(function(){
        var data = {
            "nombre": $("#nombre").val(),
            "genero": $("#genero").val(),
            "plataforma" : $("#plataforma").val(),
            "distribuidora" : $("#distribuidora").val(),
            "desarrolladora" : $("#desarrolladora").val(),
            "fecha_lanzamiento" : $("#fecha_lanzamiento").val(),
            "precio" : $("#precio").val(),
            "descripcion" : $("#descripcion").val()
        }

        jQuery.ajax({  
            url: 'https://api.esi.edu.uy/api/videojuego',  
            type: 'POST',
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            data: JSON.stringify(data),
            
            success: function(resultado) {  
              alert("Funco");
            },
        });  
    });

    
});  