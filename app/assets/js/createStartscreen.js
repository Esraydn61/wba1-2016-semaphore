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

    // Snippet ziehen 
    var template = templates["startscreen"];
	
	var quiz = JSON.parse(jsondata["quizubersicht"]);;

	template = template.replace(/{{quizname}}/, quiz.name);
    template = template.replace(/{{autor}}/, quiz.author);
    template = template.replace(/{{datum}}/, quiz.date);
    template = template.replace(/{{anzahl}}/, quiz.counter);
    template = template.replace(/{{src}}/, quiz.image);
    template = template.replace(/{{beschreibung}}/, quiz.description);

	var item = document.createElement("div");
	item.innerHTML = template;

	// HTML in Wrap einfügen
	document.getElementById("content").replaceChild(item.firstChild, document.getElementById("content").firstChild);
}