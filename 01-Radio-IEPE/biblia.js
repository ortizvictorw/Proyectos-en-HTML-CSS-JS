


    function consulta(){
    let libro = document.getElementById('inputLibro').value;
    let versiculo=document.getElementById('inputVersiculo').value;
   
    
   const contenido =fetch(`https://api.biblia.com/v1/bible/content/RVR60.json?passage=${libro}${versiculo}&key=88e46247dbb44763b65e7ac9b2300c84`)
   contenido
        .then( resp =>resp.json() )
        
        .then(  ( bibliaModelo ) => {
         
            document.getElementById('versiculo').innerHTML = 
            `
            <div class="py-1">
            ${bibliaModelo.text}
            </div>
            
            `
        }
            
                
               
            

         )
        .catch( function (error) {
            console .log( "Error: " + error);
            });
    
        }
      

    consulta();
    document.getElementById('buscar').onclick=(e)=>{
        e.preventDefault();
        consulta();
        }



