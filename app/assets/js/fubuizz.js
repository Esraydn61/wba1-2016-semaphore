var jsons = {};
jsons.quizOverview = "http://wba1-semaphore.christiannoss.de/app/data/quizuebersicht.json";
jsons.quizStart = jsons.quizOverview;
jsons.quizRanking = "http://wba1-semaphore.christiannoss.de/app/data/ranking-";
jsons.quizQuestions = "http://wba1-semaphore.christiannoss.de/app/data/questions-";

var model = {};
model.data = {};



// Funktion anfordert und parsed die JSON welche alle Basis Informationen zu allen Quizes beinhaltet 
// Inhalt wird benötigt für Quizübersicht, Startscreen und Ranking
function parseQuizes() {
    
    // Speichern der Daten aus quizuebersicht.json
    var uebersichtjson;
    console.log("Parse quizzes");
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
		
			// JSON Merken
            model.data.uebersichtjson = JSON.parse(this.responseText);
            
            //console.log(model.data.uebersichtjson);
                        
            //parse JSON
            for (var quizId in model.data.uebersichtjson){
                //var temp = snippetquiz.outerHTML;
                var temp.innerHTML = templates["quizOverview"];
                console.log(temp);
                var quiz = model.data.uebersichtjson[quizId];

                temp = temp.replace(/{{quizIdx}}/, quiz.quizIdx);
                temp = temp.replace(/{{name}}/, quiz.name);
                temp = temp.replace(/{{author}}/, quiz.author);
                temp = temp.replace(/{{date}}/, quiz.date);
                temp = temp.replace(/{{counter}}/, quiz.counter);
                temp = temp.replace(/{{description}}/, quiz.description);
                temp = temp.replace(/{{image}}/, quiz.image);
                

                //Einzelne Quizze mit einem Div umschliessen
                var item = document.createElement("div");
                item.innerHTML = temp;
                item.firstChild.onclick = function() {createStart(this);};
                
                document.getElementById("content").appendChild(item.firstChild);
                
            }
		
		}
	};
	xhttp.open("GET", jsons.quizOverview , true);
	xhttp.send();
    

        
}


// Funktion parsed eine von mehreren Ranking JSONS. Mit quizIdx wird angegeben von welchem Quiz genau man das Ranking braucht.
// Inhalt wird benötigt beim Startscreen und beim Highscorescreen
function parseRanking( quizIdx, callback) {

    //Speichern der Daten aus ranking-X.json
    var rankingjson;
    console.log("parseRanking");
        
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
            model.data.rankingjson = JSON.parse(this.responseText);
			callback.call(this, quizIdx);
            //return this.responseText;
        }
	};
    
// Bisher sind noch nicht alle quizspezifischen Ranking JSONS verfügbar. Nur die für Deutschland welches die Idx 1 hat. Dieses eine ist erreichbar unter folgender URL:
// http://wba1-semaphore.christiannoss.de/app/data/ranking-1.json
    
    xhttp.open("GET", jsons.quizRanking + quizIdx + ".json", true);
	xhttp.send();
        
}


function parseQuestions( quizIdx, callback) {
    
    
    
    var rankingjson;
    console.log("parseQuestions");
        
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
            model.data.rankingjson = JSON.parse(this.responseText);
			callback.call(this, quizIdx);
            //return this.responseText;
        }
	};
    
    
    xhttp.open("GET", jsons.quizQuestions + quizIdx + ".json", true);
	xhttp.send();
}
    


function createQuizOverview() {
    
    // snippet holen
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        // init template
        document.getElementById("content").innerHTML = this.responseText;
        
        //Zu bearbeitenden Abschnitt holen
        //snippetquiz = templates["quizOverview"];
       /* snippetquiz = document.getElementById("snippetQuiz");
        console.log(snippetquiz);

        snippetquiz.parentNode.removeChild(snippetquiz);
        
        console.log(snippetquiz);
        
        */
        
        //JSON holen/speichern
        parseQuizes();
        
       // return this.responseText;
    }
    };
    xhttp.open("GET", urls.quizOverview, true);
    xhttp.send();
    
}

function createStart( quiz ) {
    
    // ID des zu startenden Quizzes heruasfinden
    var start = quiz.getElementsByTagName("div");
    
    //Daten des Quizzes holen, welches im Startscreen angezeigt werden soll
    var data = model.data.uebersichtjson["quiz" + start[0].id];
    
    // Rankings aus der JSON holen/speichern
    parseRanking(start[0].id, init);
    
    function init(){
	    
	    // JSON Merken
        model.data.rankingjson = JSON.parse(this.responseText);

		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        
		         document.getElementById("content").innerHTML = this.responseText;
		        
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
    };
    
    xhttp.open("GET", urls.startscreen, true);
    xhttp.send();
    }        
}
