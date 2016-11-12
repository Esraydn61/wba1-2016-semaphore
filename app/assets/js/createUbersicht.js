/***************************************************
Hier wird der HTML Code dynamisch erzeugt und mit 
den Json Daten befüllt. Dieser Code wird dann
in das Dokument geschrieben.

****************************************************/

console.log("Das Script createUbersichtscreen wird ausgeführt..");

function createQuizOverview(){

    console.log("createUbersicht wurde aufgerufen.")
	
	// Stylesheet austauschen
	var sheeturl = urls["quizOverview"].replace(/\.html/, ".css");
	document.getElementById('css-for-view').setAttribute('href', sheeturl);
	
    // JSON Merken
    var json = jsondata["quizubersicht"];
	
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
        temp = temp.replace(/{{date}}/, quiz.date);
        temp = temp.replace(/{{counter}}/, quiz.counter);
        temp = temp.replace(/{{image}}/, quiz.image);
        temp = temp.replace(/{{description}}/, quiz.description);

        var item = document.createElement("div");
        item.innerHTML = temp;
        item.firstChild.id = quizId;
        item.firstChild.onclick = function() {
            console.log(this.id);
            createStartscreen(this.id);
        };
        
        // Kachel in Wrap einfügen
        document.getElementById("snippetQuiz").appendChild(item.firstChild);
	}
	
	// Kacheltemplate loeschen
	document.getElementById("snippetQuiz").removeChild(document.getElementsByClassName("Quizkachel")[0]);
}
