/****************************
Dieses Script Läd die startscreen.html Datei und 
schreibt sie in das Dokument. Dabei wird der Name, Id, Datum, 
Beschreibung, Author, des ausgewählten Quiz übergeben.

*****************************/

console.log("Das Script createStartscreen wird ausgeführt..");

function createStartscreen(quizId){
    console.log("createStartscreeen wurde aufgerufen.");
    console.log("Übergabe: " + quizId);

	// Stylesheet austauschen
	var sheeturl = urls["startscreen"].replace(/\.html/, ".css");
	document.getElementById('css-for-view').setAttribute('href', sheeturl);
	
    // Snippet ziehen 
    var template = templates["startscreen"];

	var quizze = jsondata["quizubersicht"];
	var quiz = quizze[quizId];

	template = template.replace(/{{name}}/, quiz.name);
    template = template.replace(/{{author}}/, quiz.author);
    template = template.replace(/{{date}}/, quiz.date);
    template = template.replace(/{{counter}}/, quiz.counter);
    template = template.replace(/{{image}}/, quiz.image);
    template = template.replace(/{{description}}/, quiz.description);

	var item = document.createElement("div");
	item.innerHTML = template;
	item.firstChild.id = quizId;

	// HTML in Wrap einfügen
	document.getElementById("content").replaceChild(item.firstChild, document.getElementById("content").firstChild);
	
	/*	document.getElementById("playButton").onclick = function(){
		initQuiz(quiz.quizIdx);
	}  */

    console.log("Übergabe: ");
    console.log(quizId);

    var ubersicht_parsedjson = jsondata["quizubersicht"];
    var currentrank_parsedjson = jsondata["ranking" + quizId];
    var currentinfo_object = ubersicht_parsedjson[quizId];


 // JSON Merken
  //  var  model.data.rankingjson = JSON.parse(this.responseText);

    var target = document.getElementById("content");
    target.innerHTML = templates["startscreen"];


	//Snippet des gesamten Startscreens speichern
	var snippetstart = document.getElementById("start");
	//Snippet der Ranking-Liste speichern
	var snippetranking = document.getElementById("tabellenranking");
    //Snippet des Ranking_Headers speichern
	var listhead = document.getElementById("listhead");

	//eventuelle "Eltern" löschen
	snippetstart.parentNode.removeChild(snippetstart);
	snippetranking.parentNode.removeChild(snippetranking);
	listhead.parentNode.removeChild(listhead);


    var info = currentinfo_object;
	//"reinen" Text in der Variable speichern
	var template = snippetstart.outerHTML;

	template = template.replace(/{{name}}/, info.name);
	template = template.replace(/{{date}}/, info.date);
	template = template.replace(/{{image}}/, info.image);
	template = template.replace(/{{description}}/, info.description);
	template = template.replace(/{{description}}/, info.description);

	//"reinen" Text des Listen Headers speichern
	var htmlRankings = listhead.outerHTML;

    var scoredata = currentrank_parsedjson.highscore;

	//Schleife iteriert durch alle Highscoreeintr#ge des gewählten Quizzes
	for (var i = 0; i < scoredata.length; i++){

        //"reinen" Text des Rankings speichern
        var temp = snippetranking.outerHTML;

        temp = temp.replace(/{{rankIdx}}/, scoredata[i].rankIdx);
        temp = temp.replace(/{{player}}/, scoredata[i].player);
        temp = temp.replace(/{{points}}/, scoredata[i].points);
        temp = temp.replace(/{{date}}/, scoredata[i].date);

        var item = document.createElement("tr");
        item.innerHTML = temp;

        htmlRankings += temp;
    }

    document.getElementById("content").innerHTML = template;
    document.getElementById("ranking").innerHTML = htmlRankings;
	  // return this.responseText;

    		document.getElementById("playButton").onclick = function(){
		initQuiz(quiz.quizIdx);
	}
}


/***********
highscorecontent

{{rankIdx}}
{{player}}}
{{date}}
{{points}}
*/

