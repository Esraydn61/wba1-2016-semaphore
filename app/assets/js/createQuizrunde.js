function initQuiz(quizIdx){
	


	function getQuizJson( jsonurl, callback ){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			
			// Wenn der Ajax Request komplett ist, rufen wir die Callbackfunktion auf, übergeben das Ergebnis des Ajax Requests und die QuizID.
			if (this.readyState == 4) { callback.call(this, quizIdx); }
		};
	    
		xhttp.open("GET", jsonurl, true);
		xhttp.send();		
	
	}

	var jsonurl = jsonbasis + "/questions-" + quizIdx + ".json";
	getQuizJson(jsonurl, function(){  startQuiz(quizIdx, this.responseText); });
	
}


function startQuiz( quizIdx, json ){
	
//		data = quiz.allQuestions[0].question;
//buttonKlick();
//	neueFrage( data, aktuelleFrage );
	
    console.log("createStartscreeen wurde aufgerufen.");

	// Stylesheet austauschen
	var sheeturl = urls["quizrunde"].replace(/\.html/, ".css");
	document.getElementById('css-for-view').setAttribute('href', sheeturl);
	
    // Snippet ziehen 
    var template = templates["quizrunde"];
	
	quizLogik.quiz = JSON.parse(json);
	
	quizLogik.data = quizLogik.quiz.allQuestions[0].question

	/*template = template.replace(/{{quizname}}/, quiz.name);
    template = template.replace(/{{autor}}/, quiz.author);
    template = template.replace(/{{datum}}/, quiz.date);
    template = template.replace(/{{anzahl}}/, quiz.counter);
    template = template.replace(/{{src}}/, quiz.image);
    template = template.replace(/{{beschreibung}}/, quiz.description);*/

	/*var item = document.createElement("div");
	item.innerHTML = template;
	item.firstChild.id = quizIdx;*/


	
	
	document.getElementById("content").innerHTML = template;
	buttonKlick(quizIdx);
	neueFrage( quizLogik.data, aktuelleFrage);

	// HTML in Wrap einfügen
	//document.getElementById("content").replaceChild(item.firstChild, document.getElementById("content").firstChild);

}
