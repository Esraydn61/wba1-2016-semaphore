/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

/******************************************************
Dieses Script holt sich die Knöpfe aus der Navigation
und weist ihnen eine Funktion zu.

TODO:
Funktionen zuweisen.

Autor: Tim
*******************************************************/

//Teste ob das Script läuft:
console.log("Das navi-eventhandler.js Script wird ausgeführt..");

//Schaltflächen der Navigation beziehen
//Diese Methode gibt eine Liste von allen Elementen mit dem
//namen 'beenden' aus, wir wollen aber nur das erste (und einzige) 
//Element. Daher das '[0]'.

var beenden = document.getElementById('beenden');
var quizze = document.getElementById('quizze');
var highscore = document.getElementById('highscore');
var uber = document.getElementById('uber');
var kontakt = document.getElementById('kontakt');
var einstellungen = document.getElementById('einstellungen');

//Teste ob alle Elemente gefunden wurden:
if (beenden !== undefined && 
    quizze !== undefined && 
    highscore !== undefined && 
    uber !== undefined && 
    kontakt !== undefined && 
    einstellungen !== undefined)
        console.log("Schaltfächen wurden gefunden. ");
    else   
        console.log("Nicht alle Schaltflächen wurden gefunden!");

//Schaltfächen mit Eventlistenern ausstatten
beenden.addEventListener('click', function (event) {
    console.log("Die Beenden Schaltfäche wurde ausgelost.");
});

quizze.addEventListener('click', function (event) {
    console.log("Die Quizze Schaltfäche wurde ausgelost.");  
});

highscore.addEventListener('click', function (event) {
    console.log("Die Highscore Schaltfäche wurde ausgelost.");
});

uber.addEventListener('click',function (event) {
    console.log("Die Uber Schaltfäche wurde ausgelost.");
});

kontakt.addEventListener('click', function (event) {
    console.log("Die Kontak Schaltfäche wurde ausgelost.");
});

einstellungen.addEventListener('click', function (event) {
    console.log("Die Einstellungen Schaltfäche wurde ausgelost.");
});
