/***************************************************
Dieses Script liest die Übersicht.html Seite, 
ersetzt die Platzhalter und erstellt dynamisch die
Quizelemente

****************************************************/

function createUbersicht(){

    console.log("createUbersicht wurde aufgerufen.")
    
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
                        console.log(json);

                        temp = temp.replace(/{{quizId}}/, quizId)
                        temp = temp.replace(/{{quizname}}/, quiz.name);
                        temp = temp.replace(/{{autor}}/, quiz.author);
                        temp = temp.replace(/{{datum}}/, quiz.date);
                        temp = temp.replace(/{{anzahl}}/, quiz.counter);
                        temp = temp.replace(/{{src}}/, quiz.image);
                        temp = temp.replace(/{{beschreibung}}/, quiz.description);
			
                        var item = document.createElement("div");
                        item.innerHTML = temp;
                        item.firstChild.onclick = function(){ alert("asas"); };
			 			 
                        // HTML in Wrap einfügen
                        document.getElementById("content").appendChild(item.firstChild);
                    }
                }
            };
            xhttp.open("GET", jsons.quizubersicht, true);
            xhttp.send();
            
            return this.responseText;
        }
    };
    xhttp.open("GET", urls.quizubersicht, true);
    xhttp.send();
}