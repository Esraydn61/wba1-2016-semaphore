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

	// Stylesheet austauschen
	var sheeturl = urls["startscreen"].replace(/\.html/, ".css");
	document.getElementById('css-for-view').setAttribute('href', sheeturl);
	
    // Snippet ziehen 
    var template = templates["startscreen"];
	
	var quizze = JSON.parse(jsondata["quizubersicht"]);
	var quiz = quizze[quizId];

	template = template.replace(/{{name}}/, quiz.name);
    template = template.replace(/{{author}}/, quiz.author);
    template = template.replace(/{{date}}/, quiz.date);
    template = template.replace(/{{counter}}/, quiz.counter);
    template = template.replace(/{{src}}/, quiz.image);
    template = template.replace(/{{description}}/, quiz.description);

	var item = document.createElement("div");
	item.innerHTML = template;
	item.firstChild.id = quizId;

	// HTML in Wrap einfügen
	document.getElementById("content").replaceChild(item.firstChild, document.getElementById("content").firstChild);
	
		document.getElementById("playButton").onclick = function(){
		initQuiz(quiz.quizIdx);
	}
}