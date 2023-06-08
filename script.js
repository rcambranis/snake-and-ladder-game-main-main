for(var i=1;i<=100;i++){
    document.getElementById(i).innerHTML=i;
}

//DADO

var dice=['<img src="1.png">','<img src="2.png">','<img src="3.png">','<img src="4.png">','<img src="5.png">','<img src="6.png">'];

var turn=0;
setInterval(() => {
    turn++;
    if(turn==4){
        turn=0;
    }
    
}, 3000);


var p1,p2;

//DECLARÉ LA VARIABLE GAME TYPE YA COMO 2, ASI NO MUEVES MAS CONDICIONES EN EL RESTO DEL CODIGO
var game_type=2;
function choose_player(){
      if(game_type==2){
          document.getElementById("player1").style.visibility='visible';
          document.getElementById("player2").style.visibility='visible';
          document.getElementById("dice").style.visibility='visible';
          document.getElementById('choose_player').style.visibility='hidden';
          document.getElementById('play').style.visibility='visible';
          document.getElementById('color_box').style.visibility='visible';
      }

}


//start function
function start(){
        if(game_type==2){
            //CONDICION SI SE ELIGE EL MISMO COLOR 
            if(document.getElementById('select1').value==document.getElementById('select2').value){
                alert("Selecciona 2 colores distintos!!");
            }
            else{
           document.getElementById("play").innerHTML='JUGAR';
           if(document.getElementById("red").id!=document.getElementById("select1").value && document.getElementById("red").id!=document.getElementById('select2').value){
                  document.getElementById("red").style.visibility="hidden";
           }
           if(document.getElementById("green").id!=document.getElementById("select1").value && document.getElementById("green").id!=document.getElementById('select2').value){
                  document.getElementById("green").style.visibility="hidden";
           }
           if(document.getElementById("blue").id!=document.getElementById("select1").value && document.getElementById("blue").id!=document.getElementById('select2').value){
                  document.getElementById("blue").style.visibility="hidden";
           }
           if(document.getElementById("yellow").id!=document.getElementById("select1").value && document.getElementById("yellow").id!=document.getElementById('select2').value){
                  document.getElementById("yellow").style.visibility="hidden";
           }
           document.getElementById("select1").setAttribute("disabled","disabled");
           document.getElementById("select2").setAttribute("disabled","disabled");
        }
        }
    document.getElementById("play").setAttribute("onclick","play()");
    p1=document.getElementById("select1").value;
    p2=document.getElementById("select2").value;  
}


var my_turn=0;
var previousFirst=0;
var previousSec=0;



function play(){
    var random_no=Math.floor(Math.random()*6);
    document.getElementById("dice").innerHTML=dice[random_no];
    //2 player game
    if(game_type==2){
        if(my_turn==0){
            if(previousFirst>0){
                if(100-previousFirst<random_no+1){
                   my_turn++;
        

                   return;
                }
                else{
                document.getElementById((previousFirst).toString()).innerHTML=previousFirst;
                document.getElementById((previousFirst).toString()).style.color='black';
                }
                }
          document.getElementById((previousFirst+random_no+1).toString()).
          //LA ETIQUETA <i> es donde defines el icono para representar a cada jugador en el tablero, ahorita esta esa pieza de ajredrez, pero si lo quieres cambiar puedes entrar a https://fontawesome.com/icons y elegir el que más te guste y solo lo cambias la clase a la que sea especifica del icono, ejemplo: <i class="fa-solid fa-alien-8bit"></i> para el icono que es un alien
          innerHTML="<i class='fas fa-chess-pawn' style=;font-size:xx-large;></i>";
          document.getElementById((previousFirst+random_no+1).toString()).style.color=p1;
          if((previousFirst+random_no+1)==100){
              setTimeout(() => {
                  alert("EL GANADOR ES EL JUGADOR 1!!");
                  window.location.reload();
              }, 800);
              
          }
          previousFirst=previousFirst+random_no+1;
          previousFirst=snake(previousFirst,p1,previousFirst);
          previousFirst=ladder(previousFirst,p1,previousFirst);
          my_turn++;
        }
        else{

            if(previousSec>0){
                if(100-previousSec<random_no+1){
                    my_turn--;
                   return;
                }
                else{
                document.getElementById((previousSec).toString()).innerHTML=previousSec;
                document.getElementById((previousSec).toString()).style.color='black';
                }
                }
            document.getElementById((previousSec+random_no+1).toString()).innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
            document.getElementById((previousSec+random_no+1).toString()).style.color=p2;

          
            if((previousSec+random_no+1)==100){
                setTimeout(() => {
                    alert("EL GANADOR ES EL JUGADOR 2 !!");
                    window.location.reload();
                }, 800);
                
            }
            previousSec=previousSec+random_no+1;
            previousSec= snake(previousSec,p2,previousSec);
            previousSec= ladder(previousSec,p2,previousSec);
            my_turn--;
          } 
    }

}

//snake function

// En esta funcion las condiciones son si caes en la casilla donde esta la cabeza de la serpiente te lleva a donde caiga su colita,  por ejemplo en la primera dice: si caes en la casilla 26 terminas en la casilla 4, pero ahorita esa serpiente se sale del tablero, entonces tienes que fijarte que la posicion de las serpientes coincida con estas condiciones.

function snake(place_no,color_given,previous_player){
//SI CAES EN LA 26, TERMINAS EN LA 4
    if(place_no==26){
      document.getElementById("26").innerHTML=26;
        document.getElementById("26").style.color='black';
        document.getElementById("4").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
        document.getElementById("4").style.color=color_given;
      return 4;

    }
    //SI CAES EN LA 88, TERMINAS EN LA 24
    else if(place_no==88){
        document.getElementById("88").innerHTML=88;
        document.getElementById("88").style.color='black';
        document.getElementById("24").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
        document.getElementById("24").style.color=color_given;
        return 18;
    }
    //SI CAES EN LA 63, TERMINAS EN LA 21
    else if(place_no==63){
        document.getElementById("63").innerHTML=63;
        document.getElementById("63").style.color='black';
        document.getElementById("21").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
        document.getElementById("21").style.color=color_given;
        return 21;
    }
        //SI CAES EN LA 80, TERMINAS EN LA 58
    else if(place_no==80){
        document.getElementById("80").innerHTML=80;
        document.getElementById("80").style.color='black';
        document.getElementById("58").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
        document.getElementById("58").style.color=color_given;
        return 58;
    }
   //SI CAES EN LA 73, TERMINAS EN LA 50    
    else if(place_no==73){
        document.getElementById("73").innerHTML=73;
        document.getElementById("73").style.color='black';
        document.getElementById("50").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
        document.getElementById("50").style.color=color_given;
        return 50;
    }
   //SI CAES EN LA 98, TERMINAS EN LA 29
    else if(place_no==98){
        document.getElementById("98").innerHTML=98;
        document.getElementById("98").style.color='black';
        document.getElementById("29").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
        document.getElementById("29").style.color=color_given;
        return 29;
    }
    else{
        return previous_player;
    }
   
}

//ladder function, ESTA ES LA FUNCION TIENE LAS CONDICIONES DE SI CAES EN LA CASILLA DEL INICIO (PARTE DE ABAJO) DE LA ESCALERA Y TE SUBE A DONDE TERMINE, DE NUEVO ASEGURATE QUE LA POSICION DE LAS ESCALERAS COINCIDA CON ESTAS CONDICIONES O MODIFICA LAS CONDICIONES A COMO NECESITES

function ladder(place_no,color_given,previous_player){
//SI CAES EN LA 3, TERMINAS EN LA 24
    if(place_no==3){
        document.getElementById("3").innerHTML=3;
        document.getElementById("3").style.color='black';
        document.getElementById("24").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
        document.getElementById("24").style.color=color_given;
        return 24;
    }
//SI CAES EN LA 13, TERMINAS EN LA 95
    else if(place_no==13){
        document.getElementById("13").innerHTML=13;
        document.getElementById("13").style.color='black';
        document.getElementById("95").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
        document.getElementById("95").style.color=color_given;
        return 95;
    }
//SI CAES EN LA 12, TERMINAS EN LA 52
   else if(place_no==12){
    document.getElementById("12").innerHTML=12;
    document.getElementById("12").style.color='black';
    document.getElementById("52").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
    document.getElementById("52").style.color=color_given;
    return 52;
   }
//SI CAES EN LA 61, TERMINAS EN LA 99
   else if(place_no==61){
    document.getElementById("61").innerHTML=61;
    document.getElementById("61").style.color='black';
    document.getElementById("99").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
    document.getElementById("99").style.color=color_given;
    return 99;
   }
//SI CAES EN LA 72, TERMINAS EN LA 91
   else if(place_no==72){
    document.getElementById("72").innerHTML=72;
    document.getElementById("72").style.color='black';
    document.getElementById("91").innerHTML="<i class='fas fa-chess-pawn' style=font-size:xx-large;></i>";
    document.getElementById("91").style.color=color_given;
    return 91;
   }
   else{
       return previous_player;
   }
}