
var delayQ=0; // bestimmt die Verzögerung zwischen den Fragen. 1000=1sek
var delayA=0; //bestimmt die Länge der Verzögerung der Antworten, nachdem die Frage eingeblendet worden ist.

var punkte=0;  //aktuelle Punktzahl

var antworten= Array(10);
//  var random= math.random();


var $ele;
var antwortId;
var timer= null;
var i=10; // Zeit in Sekunden

var aktuelleFrage = 0;
var quizLogik = {}; // Quizdaten
quizLogik.data = {};
quizLogik.quiz = {};


function antwortPruefen(ele, answer){
//	var $ele = $(ele);
  $ele= $(ele);                              // cast zu jQuery
  antwortId = $(ele).attr("data-antwortId");

  console.log($ele);
  console.log("gegebene Antwort: " + antwortId);
  console.log("richtige Antwort: " + answer);

  if(answer === antwortId){
//  $("#rof").html("Richtig");
//  setTimeout(function() {$ele.css("background-color", "#40FF00")}, 2000);
//  $ele.css("background-color", "#FFFFFF");
// $ele.removeClass("antwort")
 //$ele.addClass("richtig"); //
 punkte+=i*5+50;
 console.log("Punkte: "+ punkte);
 antworten[aktuelleFrage]=true;


  } else {
//    $("#rof").html("falsch");
console.log("Punkte: "+punkte);
antworten[aktuelleFrage]=false;
//    setTimeout(function() {$ele.css("background-color", "#FF0000")}, 2000);
//    $ele.css("background-color", "#FFFFFF");

//$ele.removeClass("antwort")
//$ele.addClass("falsch")

  }



}

function count( ){
  i--;
    //  document.getElementById("text").innerHTML = i;
  console.log("Zeit: "+i);
  console.log(quizLogik.quiz);
  if(i===0){
          aktuelleFrage++;
          clearInterval(timer);
          if(aktuelleFrage<=9){

              setTimeout(function() {neueFrage(quizLogik.quiz.allQuestions[aktuelleFrage].question, aktuelleFrage)}, delayQ);
          }
          else{
              clearInterval(timer);
              $("#question").html("Quizrunde ist vorbei" + test++ );
          }
      }


}
function neueFrage( data, aktuelleFrage){


//  $("#antwort1").removeClass("richtig", "falsch");
//  $("#antwort2").removeClass("richtig", "falsch");
//  $("#antwort3").removeClass("richtig", "falsch");
//  $("#antwort4").removeClass("richtig", "falsch");

  $("#frage").html(data.question);
  $("#antwort1").html(" ");    // ändert per Id den Inhalt
  $("#antwort2").html(" ");    //$ signalisiert das jQuery Objekt, # ersetzt getElementbyId, .html signalisiert html Objekt(Inhalt)
  $("#antwort3").html(" ");
  $("#antwort4").html(" ");
  setTimeout(function() {

//  console.log(document.getElementbyId("antwort1"));
//  tausch($("#antwort1"), $("#antwort2"));
  $("#antwort1").html(data.options[0].option);    // ändert per Id den Inhalt
  $("#antwort2").html(data.options[1].option);    //$ signalisiert das jQuery Objekt, # ersetzt getElementbyId, .html signalisiert html Objekt(Inhalt)
  $("#antwort3").html(data.options[2].option);
  $("#antwort4").html(data.options[3].option);

  clearInterval(timer);
  i=10;
  timer = setInterval("count()", 1000);

      $("#question").html("Frage: " + (aktuelleFrage+1) +"/10");
    }, delayA);
  }

  function buttonKlick(quizIdx){
  $("#antworten").click(function(e){ //click-Funktion außerhalb von neueFrage schreiben,
  //	var cButton = e.target;
  if(i===0){



  }else
  {
  clearInterval(timer);
  antwortPruefen(e.target, quizLogik.quiz.allQuestions[aktuelleFrage].question.answer);    // Antwort
          aktuelleFrage++;
          console.log("aktuelle Frage: "+ aktuelleFrage);

          if(aktuelleFrage<=9){
              setTimeout(function() {neueFrage( quizLogik.quiz.allQuestions[aktuelleFrage].question, aktuelleFrage )}, delayQ);

          }
          else{
              //window.location="http://www.google.de";
              //document.getElementById("text").innerHTML = "Jetzt auf Endscreen leiten";

            console.log("Quizrunde ist vorbei");
              for(k=0; k<10;k++){
              console.log(antworten[k]);
            }
              createEndscreen(punkte, antworten, quizIdx);
          }

    }
  });
}
/*
function tausch(obj1, obj2){

  var temp = document.createElement("p");
  obj1.parentNode.insertBefore(temp, obj1);

  obj2.parentNode.insertBefore(obj1, obj2);

  temp.parentNode.insertBefore(obj2, temp);

  temp.parentNode.removeChild(temp);
}

function ballfüllen(){
  for(j=1;j<11; j++){
    if(antworten[j]===false)
      $("#ball"+j).addclass("ballFalsch");


  } */

//}

