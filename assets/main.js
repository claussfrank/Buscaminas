//Cambiamos por  medio de  la  clase el  color de la celda
var longitud= document.getElementsByClassName("nada").length;
var comment=[];

for (var i=0 ; i<longitud; i++){
  comment[i] = document.getElementsByClassName("nada")[i];
}

for (var i=0; i< comment.length; i++){
  comment[i].addEventListener('click',cambiarColor,false);
}

function cambiarColor(){
  this.style.backgroundColor = "blue";
}
