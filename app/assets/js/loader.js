/************************************************************************
Jetzt sind die wichtigsten Sachen für die Navigation vorhanden.
Allerdings ist der Content noch nicht eingebunden.
Dazu muss zu erst das HTML Template für die jeweilige Seite geladen werden.

TODO:
Laden und schreiben lässt sich nicht entkoppeln.
Erstmal nicht weiter machen, bis die Funktionalität
auf dem gekoppelten Weg den uns Noss gezeigt hat läuft.


Autor: Tim
*/

console.log("Das loader.js Script wird ausgeführt..")

//Dateipfade für die jeweiligen HTML Dokumente
var urls = {};
urls.highscore = "/quiz_app/highscore/highscore.html";
urls.quizrunde = "/quiz_app/quizrunde/quizrunde.html";
urls.quizubersicht = "/quiz_app/quizubersicht/quizubersicht.html";
urls.schlussscreen = "/quiz_app/schlussscreen/schlussscreen.html";
urls.startscreen = "/quiz_app/startscreen/startscreen.html";

var jsons = {};
jsons.quizubersicht = "/data/quizuebersicht.json";

/*
function returnResponseText() {
    if (this.readyState == 4 && this.status == 200) {
    // console.log(xhttp.responseText);
    returnResponseText = xhttp.responseText;
    }
};

//Diese Funktion läd den Text aus deiner Datei und gibt ihn zurück
function loadTemplate ( docLocation) {
    
    var xhttp = new XMLHttpRequest();
    
    var responseText;
    
	xhttp.onreadystatechange = returnResponseText();

    xhttp.open("GET", docLocation, false);
    xhttp.send();
    console.log(responseText);

}

document.onload = function (){
    var htmls = {};
    htmls.highscore = loadTemplate(urls.highscore);
    htmls.quizrunde = loadTemplate(urls.quizrunde);
    htmls.quizubersicht = loadTemplate(urls.quizubersicht);
    htmls.schlussscreen = loadTemplate(urls.schlussscreen);
    htmls.startscreen = loadTemplate(urls.startscreen);
}


console.log(loadTemplate(urls.highscore));
*/