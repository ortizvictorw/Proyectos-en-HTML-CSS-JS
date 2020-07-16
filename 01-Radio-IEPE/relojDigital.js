
window.onload = function() {


   
    const delay = 1000;
setInterval(miFuncion,delay);

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


//RELOJ

function miFuncion(){

var hora =new Date().getHours()
var minutos =new Date().getMinutes()
var segundos= new Date().getSeconds()
let reloj = document.getElementById('horario');

min = checkTime(minutos);
sec = checkTime(segundos);

reloj.innerHTML = hora + ":" + min + ":" + sec ;

  } ;
 
  
};

//NOMBRE PROGRAMACION
var fecha =new Date().getDay();
var hora =new Date().getHours()
var title = document.getElementById('title');



function nom_programa(){
   if(fecha==1 && hora >13 ){
       return 'Juventud Cristiana a partir de las 18:00 hs'
   }else if(fecha==6 && hora >13){
      return 'Culto del Sabado a partir de las 19:00 hs' 
   }else if(fecha==0 && hora >13 ){
      return 'Culto del Domingo a partir de las 19:00 hs' 
      
}else if(fecha >=2 && fecha <=5 && hora >13 ){
    return 'Arriba Hermanos !! a partir de las 18:00 hs'  
    
}else if(fecha >=0 && fecha <=6 && hora >=10 && hora <= 13){
    return 'Estas escuchando la Repe de la Radio !!'   
}
}

window.addEventListener(init(), false);

function init() {
      title.textContent = nom_programa();
  }