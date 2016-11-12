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

 // JSON Merken
    var  model.data.rankingjson = JSON.parse(this.responseText);
		        
    document.getElementById("content").innerHTML = templates[quizubersicht];
		        
	//Snippet des gesamten Startscreens speichern
	snippetstart = document.getElementById("start");
    
	//Snippet der Ranking-Liste speichern
	snippetranking = document.getElementById("tabellenranking");
    //Snippet des Ranking_Headers speichern
	listhead = document.getElementById("listhead");
		
	//eventuelle "Eltern" löschen
	snippetstart.parentNode.removeChild(snippetstart);
	snippetranking.parentNode.removeChild(snippetranking);
	listhead.parentNode.removeChild(listhead);
		  
	//"reinen" Text in der Variable speichern
	var template = snippetstart.outerHTML;
    
	template = template.replace(/{{name}}/, data.name);
	template = template.replace(/{{date}}/, data.date);
	template = template.replace(/{{image}}/, data.image);
	template = template.replace(/{{description}}/, data.description);
	template = template.replace(/{{description}}/, data.description);
		        
	//"reinen" Text des Listen Headers speichern
	var htmlRankings = listhead.outerHTML;
		        
	//Schleife iteriert durch alle Highscoreeintr#ge des gewählten Quizzes
	for (var i= 0; i < model.data.rankingjson.highscore.length; i++){
		
        //"reinen" Text des Rankings speichern
        var temp = snippetranking.outerHTML;

        temp = temp.replace(/{{rankIdx}}/, model.data.rankingjson.highscore[i].rankIdx);
        temp = temp.replace(/{{player}}/, model.data.rankingjson.highscore[i].player);
        temp = temp.replace(/{{points}}/, model.data.rankingjson.highscore[i].points);
        temp = temp.replace(/{{date}}/, model.data.rankingjson.highscore[i].date);

        var item = document.createElement("tr");
        item.innerHTML = temp;

        htmlRankings += temp;
    }
	
    document.getElementById("content").innerHTML = template;
    document.getElementById("ranking").innerHTML = htmlRankings;
	  // return this.responseText;

    }
        
}

/***********
highscorecontent

{{rankIdx}}
{{player}}}
{{date}}
{{points}}
