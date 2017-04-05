var longitudColor = document.getElementsByClassName("nada").length;
var color=[];
  for (var i=0 ; i<longitudColor; i++){
    color[i] = document.getElementsByClassName("nada")[i];
  }
  for (var i=0; i< color.length; i++){
    color[i].addEventListener('click',cambiarColor,false);
  }

var longitudBomba = document.getElementsByClassName("bombas").length;
var bombas=[];

  for (var i=0 ; i<longitudBomba; i++){
    bombas[i] = document.getElementsByClassName("bombas")[i];
  }
  for (var i=0; i< bombas.length; i++){
    bombas[i].addEventListener('click',ponerBombas,false);
  }

var longitudUno = document.getElementsByClassName("numeroUno").length;
var uno=[];
  for( var i=0; i<longitudUno; i++ ){
    uno[i] = document.getElementsByClassName("numeroUno")[i];
  }
  for(var i=0; i<uno.length; i++){
    uno[i].addEventListener('click',ponerUno,false);
  }

var longitudDos = document.getElementsByClassName("numeroDos").length;
var dos=[];
  for(var i=0; i<longitudDos; i++){
    dos[i] = document.getElementsByClassName("numeroDos")[i];
  }
  for(var i=0; i<dos.length; i++){
    dos[i].addEventListener('click',ponerDos,false);
  }


function ponerBombas(){
  alert("Game Over");
  var imagen = document.createElement("img");
  imagen.src = "assets/bomba.png";
  imagen.style = "width: 50px; height:50px ";
  this.appendChild(imagen);
}
function cambiarColor(){
    this.style.backgroundColor = "blue";
}
function ponerUno (){
  this.innerHTML = "1";
}
function ponerDos(){
  this.innerHTML = "2";
}
