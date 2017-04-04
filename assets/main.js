//Cambiamos por  medio de  la  clase el  color de la celda


var longitudColor = document.getElementsByClassName("nada").length;
var color=[];
  for (var i=0 ; i<longitudColor; i++){
    color[i] = document.getElementsByClassName("nada")[i];
  }
  for (var i=0; i< color.length; i++){
    color[i].addEventListener('click',cambiarColor,false);
  }
function cambiarColor(){
    this.style.backgroundColor = "blue";
}


var longitudBomba = document.getElementsByClassName("bombas").length;
var bombas=[];

for (var i=0 ; i<longitudBomba; i++){
  bombas[i] = document.getElementsByClassName("bombas")[i];
}
for (var i=0; i< bombas.length; i++){
  bombas[i].addEventListener('click',ponerBombas);
}
function ponerBombas(){
  var imagen = document.createElement("img");
  imagen.src = "assets/bomba.png";
  imagen.style = "width: 10px;height :10px ";
  this.appendChild(imagen);
}


var longitudNumero = document.getElementsByClassName("numero").length;
var numero=[];
