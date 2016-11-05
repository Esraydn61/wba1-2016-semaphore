// Funktion parsed die JSON welche alle Basis Informationen zu allen Quizes beinhaltet 
// Inhalt wird benötigt für Quizübersicht, Startscreen und Ranking
function parseQuizes(){
        
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		
			// JSON Merken
			var json = JSON.parse(this.responseText);
			console.log(json);
		
		}
	};
	xhttp.open("GET", "http://wba1-semaphore.christiannoss.de/app/data/quizuebersicht.json", true);
	xhttp.send();
        
}




// Funktion parsed eine von mehreren Ranking JSONS. Mit quizIdx wird angegeben von welchem Quiz genau man das Ranking braucht.
// Inhalt wird benötigt beim Startscreen und beim Highscorescreen
function parseRanking( quizIdx ){
        
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		
			// JSON Merken
			var json = JSON.parse(this.responseText);
			console.log(json);
		
		}
	};
// Bisher sind noch nicht alle quizspezifischen Ranking JSONS verfügbar. Nur die für Deutschland welches die Idx 1 hat. Dieses eine ist erreichbar unter folgender URL:
// http://wba1-semaphore.christiannoss.de/app/data/ranking-1.json
    
    xhttp.open("GET", "http://wba1-semaphore.christiannoss.de/app/data/ranking-" + quizIdx + ".json", true);
	xhttp.send();
        
}
