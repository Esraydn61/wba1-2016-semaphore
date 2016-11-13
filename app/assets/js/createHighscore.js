/*******************************************************
Dieses Script läd ein highscore Json und das dazugehörige 
HTML Snippet. Anschließend wird der inhalt der Json 
in das Snippet geschrieben und in das Dokument geschrieben.

********************************************************/

console.log("Das createHighscore Scrip wird ausgeführt..");

function createHighscore(){
    console.log("createHighscore wurde aufgerufen.");
    
    // Stylesheet austauschen
	var sheeturl = urls["highscore"].replace(/\.html/, ".css");
	document.getElementById('css-for-view').setAttribute('href', sheeturl);
	
	var template = templates["highscore"];

    var quizze = jsondata["quizubersicht"];
    
    for(var i=0; i < quizze.length; i++){

        var option = "/{{option" + (i+1) + "}}/";

        var h_quiz = quizze["quiz"+i];

        template = template.replace(option, h_quiz.name);

    }

    var item = document.createElement("div");
    item.innerHTML = template;

    document.getElementById("content").replaceChild(item.firstChild, document.getElementById("content").firstChild);

}
