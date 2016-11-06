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

var server = "http://wba1-semaphore.christiannoss.de";

//Dateipfade für die jeweiligen HTML Dokumente
var urls = {};
urls.highscore      = server + "/quiz_app/highscore/highscore.html";
urls.quizrunde      = server + "/quiz_app/quizrunde/quizrunde.html";
urls.quizubersicht  = server + "/quiz_app/quizubersicht/quizubersicht.html";
urls.schlussscreen  = server + "/quiz_app/schlussscreen/schlussscreen.html";
urls.startscreen    = server + "/quiz_app/startscreen/startscreen.html";

var jsons = {};
jsons.quizubersicht  = server + "/data/quizuebersicht.json";
jsons.highscore      = server + "/data/ranking-1.json";

/*
//Diese Funktion läd den Text aus deiner Datei und gibt ihn zurück
function loadTemplate ( docLocation) {
    
    var xhttp = new XMLHttpRequest();
    
	xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        // console.log(xhttp.responseText);
            return xhttp.responseText;
    }

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