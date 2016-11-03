var urls = {};
urls.quizOverview = "/quiz_app/quizuebersicht/quizuebersicht-mobile.html";
urls.quizStart = "/quiz_app/startscreen/startscreen.html";

var jsons = {};
jsons.quizOverview = "/data/quiz-overview.json";
jsons.quizStart = jsons.quizOverview;

/*function geheZuQuiz( quizId ){
	location.href = "/quiz_app/quiz-start.html?quizId=" + quizId;
}*/

function showQuizStart( quizId ){
	
	console.log(quizId);
	/*location.href.match(/\?(.*)/);
	var querystring = RegExp.$1;
	var keyValue = querystring.split(/&/);
	for( var i=0; i< keyValue.length; i++){
		//keyValue[i]
		console.log(keyValue[i]);
	}*/
	
	// Quiz ID auslesen
	//location.href.match(/=(.*)/);
	//var quizId = RegExp.$1;

	// Hole das Snippet
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
		
		// Snippet merken
	    var template = this.responseText;
	    
	    // Hol das JSON
	    var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var html;
			
			// JSON Merken
			var json = JSON.parse(this.responseText);
			var quiz = json[quizId];
			
			template = template.replace(/{{quizId}}/, quizId)
			template = template.replace(/{{name}}/, quiz.name);
			template = template.replace(/{{author}}/, quiz.author);
			template = template.replace(/{{date}}/, quiz.date);
			template = template.replace(/{{image}}/, quiz.image)
			template = template.replace(/{{teasertext}}/, quiz.description);
			
			document.getElementById("content").innerHTML = template;
			
			// JSON verarbeiten
			/*for(var quizId in json){
				var temp = template;
				
				
				var quiz = json[quizId];
				console.log(quiz.name);
				
				temp = temp.replace(/{{quizId}}/, quizId)
				temp = temp.replace(/{{name}}/, quiz.name);
				temp = temp.replace(/{{author}}/, quiz.author);
				temp = temp.replace(/{{date}}/, quiz.date);
				temp = temp.replace(/{{image}}/, quiz.image);
				html += temp;
	
			}
			
			document.getElementById("content").innerHTML = html;*/
	
			//
		}
		};
		xhttp.open("GET", jsons.quizStart, true);
		xhttp.send();
	     
	     return this.responseText;
	    }
	  };
	  xhttp.open("GET", urls.quizStart, true);
	  xhttp.send();

}

function createQuizOverview() {
  
  // Hole das Snippet
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	
	// Template injizieren
    document.getElementById("content").innerHTML = this.responseText;
	
	// Snippet ziehen 
	var snippetQuizItem = document.getElementById("snippetQuizItem");
	
	// Item im Wrap löschen
	snippetQuizItem.parentNode.removeChild(snippetQuizItem);
    
    // Hol das JSON
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		
		var html;
		
		// JSON Merken
		var json = JSON.parse(this.responseText);
				
		// JSON verarbeiten
		for(var quizId in json){
			var temp = snippetQuizItem.outerHTML;
						
			var quiz = json[quizId];

			temp = temp.replace(/{{quizId}}/, quizId)
			temp = temp.replace(/{{name}}/, quiz.name);
			temp = temp.replace(/{{autor}}/, quiz.author);
			temp = temp.replace(/{{datum}}/, quiz.date);
			temp = temp.replace(/{{anzahlGespielt}}/, quiz.counter);
			temp = temp.replace(/{{src}}/, quiz.image);
			
			var item = document.createElement("div");
			item.innerHTML = temp;
			item.firstChild.onclick = function(){ alert("asas"); };
			 			 
			// HTML in Wrap einfügen
			document.getElementById("content").appendChild(item.firstChild);

		}
		//var quizzes = document.querySelectorAll(".Quizkachel");
		//console.log(quizzes);
		
	}
	};
	xhttp.open("GET", jsons.quizOverview, true);
	xhttp.send();
     
     return this.responseText;
    }
  };
  xhttp.open("GET", urls.quizOverview, true);
  xhttp.send();
}

