/*******************************************************
Dieses Script läd ein highscore Json und das dazugehörige 
HTML Snippet. Anschließend wird der inhalt der Json 
in das Snippet geschrieben und in das Dokument geschrieben.

********************************************************/

console.log("Das createHighscore Scrip wird ausgeführt..");

function createHighscore(){
    console.log("createHighscore wurde aufgerufen.");
    // Hole das Snippet
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	
	   // Template injizieren
        document.getElementById("content").innerHTML = this.responseText;
	
	   // Snippet ziehen 
	   var spielerScoreSnippetItem = document.getElementById("spielerScoreSnippet");
	
        // Item im Wrap löschen
        spielerScoreSnippetItem.parentNode.removeChild(spielerScoreSnippetItem);
    
        // Hol das JSON
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
		
                var html;
                
                // JSON Merken
                var json = JSON.parse(this.responseText);
				
                // JSON verarbeiten
                for(var i = 0; i < json.highscore.length; i++){
                    var temp = spielerScoreSnippetItem.outerHTML;
						
                    var rank = json.highscore[i];
                    
                    console.log(json.highscore[0].player);
                    
                    temp = temp.replace(/{{name}}/, rank.player);
                    temp = temp.replace(/{{date}}/, rank.date);
                    temp = temp.replace(/{{points}}/, rank.points);
			     
                    var item = document.createElement("div");
                    item.innerHTML = temp;
			 			 
                    // HTML in Wrap einfügen
                    document.getElementById("content").appendChild(item.firstChild);
                }
	       }
		};
		
		
		xhttp.open("GET", jsons.highscore, true);
		xhttp.send();
     
     return this.responseText;
    }
  };

  xhttp.open("GET", urls.highscore, true);
  xhttp.send();
}