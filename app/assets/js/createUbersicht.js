/***************************************************
Dieses Script liest die Übersicht.html Seite, 
ersetzt die Platzhalter und erstellt dynamisch die
Quizelemente

****************************************************/

console.log("Das Script createUbersichtscreen wird ausgeführt..");

function createQuizOverview(){

    console.log("createUbersicht wurde aufgerufen.")
	
	// Stylesheet austauschen
	var sheeturl = urls["quizOverview"].replace(/\.html/, ".css");
	document.getElementById('css-for-view').setAttribute('href', sheeturl);
	
    // JSON Merken
    var json = JSON.parse(jsondata["quizubersicht"]);
	
	// Template einbauen
	var target = document.getElementById("content");
	target.innerHTML = templates["quizOverview"];
    
    // Kachel holen
    var snippet = document.getElementsByClassName("Quizkachel")[0];

	
    // JSON verarbeiten
    for(var quizId in json){
        var temp = snippet.outerHTML;
        var quiz = json[quizId];

        temp = temp.replace(/{{name}}/, quiz.name);
        temp = temp.replace(/{{author}}/, quiz.author);
        temp = temp.replace(/{{datum}}/, quiz.date);
        temp = temp.replace(/{{anzahl}}/, quiz.counter);
        temp = temp.replace(/{{src}}/, quiz.image);
        temp = temp.replace(/{{beschreibung}}/, quiz.description);

        var item = document.createElement("div");
        item.innerHTML = temp;
        item.firstChild.id = quizId;
        item.firstChild.onclick = function() {
            createStartscreen(this.id);
        };
        
        // Kachel in Wrap einfügen
        document.getElementById("snippetQuiz").appendChild(item.firstChild);
	}
	
	// Kacheltemplate loeschen
	document.getElementById("snippetQuiz").removeChild(document.getElementsByClassName("Quizkachel")[0]);
}