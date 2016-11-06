var urls = {};
urls.quizOverview = "/quiz_app/quizuebersicht/quizuebersicht.html";
urls.quizStart = "/quiz_app/startscreen/startscreen.html";

var jsons = {};
jsons.quizOverview = "http://wba1-semaphore.christiannoss.de/app/data/quizuebersicht.json";
jsons.quizStart = jsons.quizOverview;
jsons.quizRanking = "http://wba1-semaphore.christiannoss.de/app/data/ranking-";

var model = {};
model.data = {};



// Funktion parsed die JSON welche alle Basis Informationen zu allen Quizes beinhaltet 
// Inhalt wird benötigt für Quizübersicht, Startscreen und Ranking
function parseQuizes() {
    
    var uebersichtjson;

    
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
		
			// JSON Merken
            model.data.uebersichtjson = JSON.parse(this.responseText);
            
            //console.log(model.data.uebersichtjson);
                        
            //parse JSON
            for (var quizId in model.data.uebersichtjson){
                var temp = snippetquiz.outerHTML;
            
                var quiz = model.data.uebersichtjson[quizId];
                
                //console.log(model.data.uebersichtjson);


                temp = temp.replace(/{{quizIdx}}/, quiz.quizIdx);
                temp = temp.replace(/{{name}}/, quiz.name);
                temp = temp.replace(/{{author}}/, quiz.author);
                temp = temp.replace(/{{date}}/, quiz.date);
                temp = temp.replace(/{{counter}}/, quiz.counter);
                temp = temp.replace(/{{description}}/, quiz.description);
                temp = temp.replace(/{{image}}/, quiz.image);
                

                
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
function parseRanking(quizIdx, quizscreen) {

    var rankingjson
        
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

            // JSON Merken
            model.data.rankingjson = JSON.parse(this.responseText);
		
              for (var rankIdx in model.data.rankingjson["highscore"]){
                var temp = quizscreen;

                  var highscore = model.data.rankingjson.highscore[rankIdx];

               // console.log(model.data.rankingjson["rankIdx"]);
                 // console.log("counter" + " " + rankIdx);

                //console.log("object" + "  " + model.data.uebersichtjson);

                temp = temp.replace(/{{rankIdx}}/, highscore.rankIdx);
                temp = temp.replace(/{{player}}/, highscore.player);
                temp = temp.replace(/{{points}}/, highscore.points);
                temp = temp.replace(/{{date}}/, highscore.date);

                //console.log(temp);
                  var item = document.createElement("th");
                item.innerHTML = temp;

                //  console.log(temp);

                document.getElementById("content").appendChild(item.firstChild);


		}
        }
	};
// Bisher sind noch nicht alle quizspezifischen Ranking JSONS verfügbar. Nur die für Deutschland welches die Idx 1 hat. Dieses eine ist erreichbar unter folgender URL:
// http://wba1-semaphore.christiannoss.de/app/data/ranking-1.json
    
    xhttp.open("GET", jsons.quizRanking + quizIdx + ".json", true);
	xhttp.send();
        
}

function createQuizOverview() {
    
    // snippet holen
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        // init template
        document.getElementById("content").innerHTML = this.responseText;
        
        snippetquiz = document.getElementById("snippetQuiz");
        
        snippetquiz.parentNode.removeChild(snippetquiz);
        
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
    
    var data = model.data.uebersichtjson["quiz" + start[0].id];
    
    //console.log(quiz.getElementsByTagName("div"));
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        var template = this.responseText;
        
        console.log(this.responseText);
        
       // console.log(template);

       // console.log(quiz);

        template = template.replace(/{{name}}/, data.name);
        template = template.replace(/{{date}}/, data.date);
        template = template.replace(/{{image}}/, data.image);
        template = template.replace(/{{description}}/, data.description);


        parseRanking(start[0].id, template);
        
        document.getElementById("content").innerHTML = template;
        
        
       // return this.responseText;

    }
    };
    
    xhttp.open("GET", urls.quizStart, true);
    xhttp.send();
        
}
