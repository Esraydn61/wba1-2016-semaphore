/*************************************
Dieses Script soll das Auswahlfeld mit Funktionalität belegen.
Bei dem wechseln der Auswahl soll das entsprechende Json geladen werden um
das den dazugehörigen Highscore zu laden

Das Problem ist noch, dass beim Laden der Highscore Seite dieses Script
nicht ausgeführt wird, es muss ordentlich in den DOM baum geschrieben werden.
**************************************/

console.log("Das highscore Script wird ausgeführt..");

var selector = documen.getElementById("auswahl");

if(selector !== undefined) console.log("Das Auswahlfeld wurde gefunden.");
    else   console.log("Das Auswahlfeld wurde nicht gefunden!!!");

selector.onclick = function (event){
    console.log(event.target.nodeValue);
}