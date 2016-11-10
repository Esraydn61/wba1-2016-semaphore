/****************************
Dieses Script Läd die startscreen.html Datei und 
schreibt sie in das Dokument. Dabei wird der Name, Id, Datum, 
Beschreibung, Author, des ausgewählten Quiz übergeben.

TODO: Wertübergabe fixen
*****************************/

console.log("Das Script createStartscreen wird ausgeführt..");

function createStartscreen(quizId){//id, name, author, date, counter, image, description){
    console.log("createStartscreeen wurde aufgerufen.");
    console.log("Übergabe: " + quizId);
    
        // Template injizieren
        document.getElementById("content").innerHTML = this.responseText;

        // Snippet ziehen 
        var snippetInfo = document.getElementById("snippetInfo");
        console.log("SnippetInfo wurde gefunden: " + snippetInfo);
        // Item im Wrap löschen
        snippetInfo.parentNode.removeChild(snippetInfo);

        // Hol das JSON
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var html;

                // JSON Merken
                var json = JSON.parse(this.responseText);

                // JSON verarbeiten
               
                var temp = snippetInfo.outerHTML;

                var quiz = json[quizId];


                temp = temp.replace(/{{quizname}}/, quiz.name);
                temp = temp.replace(/{{autor}}/, quiz.author);
                temp = temp.replace(/{{datum}}/, quiz.date);
                temp = temp.replace(/{{anzahl}}/, quiz.counter);
                temp = temp.replace(/{{src}}/, quiz.image);
                temp = temp.replace(/{{beschreibung}}/, quiz.description);

                var item = document.createElement("div");
                item.innerHTML = temp;

                // HTML in Wrap einfügen
                document.getElementById("content").appendChild(item.firstChild);
                }
            };
            xhttp.open("GET", jsons.quizubersicht, true);
            xhttp.send();

            return this.responseText;
        }

}