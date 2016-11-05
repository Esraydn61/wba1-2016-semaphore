/***************************************************
Tim: Dieses Script liest die Übersicht.html Seite ein.
Ich hab das hier bis jetzt erst aus Noss' Order kopiert, 
die Dateipfade müssen noch angepasst werden.
Die Beschreibung des Quiz ist auch noch nicht drin, 
das mach ich morgen.

****************************************************/

function createUbersicht(){
    
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
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
  xhttp.open("GET", "/quiz_app/quizubersicht/quizubersicht.html", true);
  xhttp.send();
}