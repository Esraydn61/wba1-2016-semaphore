/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

/******************************************************
Dieses Script holt sich die Knöpfe aus der Navigation
und weist ihnen eine Funktion zu.
*******************************************************/

//Teste ob das Script läuft:
console.log("Das navi-eventhandler.js Script wird ausgeführt..");

//Schaltflächen der Navigation beziehen


var beenden = document.getElementById('beenden');
var quizze = document.getElementById('quizze');
var highscore = document.getElementById('highscore');
var uber = document.getElementById('uber');
var kontakt = document.getElementById('kontakt');
var einstellungen = document.getElementById('einstellungen');

//Teste ob alle Elemente gefunden wurden:
if (
    (beenden !== undefined && 
    quizze !== undefined && 
    highscore !== undefined && 
    uber !== undefined && 
    kontakt !== undefined && 
    einstellungen !== undefined) 
        &&
    (beenden != null && 
    quizze != null && 
    highscore != null && 
    uber != null && 
    kontakt != null && 
    einstellungen != null)
                                )
        console.log("Schaltfächen wurden gefunden. ");
    else  { 
        console.log("FEHLER: Nicht alle Schaltflächen wurden gefunden!");
    }

//Schaltfächen mit Eventlistenern ausstatten
beenden.addEventListener('click', function (event) {
    if(!loaderisready) console.log("Preloader war noch nicht fertig!!!");
    console.log("Die Beenden Schaltfäche wurde ausgelost.");
});

quizze.addEventListener('click', function (event) {
    if(loaderisready)
        if(!loaderisready) console.log("Preloader war noch nicht fertig!!!");
        console.log("Die Quizze Schaltfäche wurde ausgelost.");
        createUbersicht();


});

highscore.addEventListener('click', function (event) {
        if(!loaderisready) console.log("Preloader war noch nicht fertig!!!");
        console.log("Die Highscore Schaltfäche wurde ausgelost.");
        createHighscore();
});

uber.addEventListener('click',function (event) {
        if(!loaderisready) console.log("Preloader war noch nicht fertig!!!");
        console.log("Die Uber Schaltfäche wurde ausgelost.");
});

kontakt.addEventListener('click', function (event) {
    if(!loaderisready) console.log("Preloader war noch nicht fertig!!!");
    console.log("Die Kontak Schaltfäche wurde ausgelost.");
    console.log("Preloader war noch nicht fertig!!!")
});

einstellungen.addEventListener('click', function (event) {
    if(!loaderisready) console.log("Preloader war noch nicht fertig!!!");
    console.log("Die Einstellungen Schaltfäche wurde ausgelost.");
    console.log("Preloader war noch nicht fertig!!!")
});
