if (true) {
    console.log("Hola")
}

//Resultado

Hola

if (false) {
    console.log("Hola")
}

//Resultado
//Nada ya que es true.

Para agregar un else: 

if (true) {
    console.log("Hola");
} else{
    console-log("Soy Falso");
}

Para agregar dos o mas else: 

if (true) {
    console.log("Hola");
} else if{
    console-log("Soy Falso");
} else {
    console.log ("Chau");
}


var jugador;
var computador;

if (jugador == "tijeras"  && computador == "papel") 
{
    console.log("Ganaste");
}
else if (jugador == "Piedra"  && computador == "tijeras") 
{
    console.log("Ganaste");
}
else if (jugador == "papel"  && computador == "piedra") 
{
    console.log("Ganaste");
}
else if (jugador == computador ) 
{
    console.log("empate");
}
else {
    console.log("Perdiste")
}