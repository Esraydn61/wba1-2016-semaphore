/****************************
Dieses Script Läd die schlussscreen.html Datei und
schreibt sie in das Dokument. Dabei wird die Punktzahl sowie
die richtigen/falschen Antworten übergeben.

*****************************/


function createEndscreen(punkte, antworten ){
    
    console.log("createStartscreeen wurde aufgerufen.");
    console.log("Übergabe: " + punkte + " " + antworten);

    // Stylesheet austauschen
    var sheeturl = urls["schlussscreen"].replace(/\.html/, ".css");
	document.getElementById('css-for-view').setAttribute('href', sheeturl);

    // Snippet ziehen
    template = templates["schlussscreen"];

    // JSON Daten holen
    var quizze = jsondata["quizubersicht"];

    /*  TODO: Random Quiz Vorschläge "füllen"

    template = template.replace(/{{name}}/, quiz.name);
    template = template.replace(/{{author}}/, quiz.author);
    template = template.replace(/{{date}}/, quiz.date);
    template = template.replace(/{{counter}}/, quiz.counter);
    template = template.replace(/{{image}}/, quiz.image);
    template = template.replace(/{{description}}/, quiz.description);
    */

    var item = document.createElement("div");
    item.innerHTML = template;

    document.getElementById("content").replaceChild(item.firstChild, document.getElementById("content").firstChild);

}
