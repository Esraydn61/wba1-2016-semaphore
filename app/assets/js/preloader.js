
/***************************************************
Dieses Script zieht sich alle notwendigen Templates
Die die Url namen werden doppelt benutzt und die Namne
müssen angeglichen werden.
****************************************************/

console.log("Das preloader.js Script wird ausgeführt..")

// Welcher Server stellt die Daten bereit?
var server = "http://wba1-semaphore.christiannoss.de/app";

// Zum Testen in diesem Branch
server = "";

var loaderisready = false;



//Dateipfade für die jeweiligen HTML Dokumente
var urls = {};
urls.highscore      = server + "/quiz_app/highscore/highscore.html";
urls.quizrunde      = server + "/quiz_app/quizrunde/quizrunde.html";
urls.quizOverview  = server + "/quiz_app/quizubersicht/quizubersicht.html";
urls.schlussscreen  = server + "/quiz_app/schlussscreen/schlussscreen.html";
urls.startscreen    = server + "/quiz_app/startscreen/startscreen.html";

urls.quizOverview = server + "/quiz_app/quizuebersicht/quizuebersicht.html";
urls.quizStart = server + "/quiz_app/startscreen/startscreen.html";

var jsons = {};
jsons.quizubersicht  = server + "/data/quizuebersicht.json";
jsons.highscore      = server + "/data/ranking-1.json";


// In diesem Objekt werdne die Templates gespeichert
var templates = {};

/* Functions
############################################# */

// Hier werden die Ajax Requests gemacht. AUfgerufen wird die funktion mit der QuizID und der Callback Funktion
function get(id, callback) {
    
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		
		// Wenn der Ajax Request komplett ist, rufen wir die Callbackfunktion auf, übergeben das Ergebnis des Ajax Requests und die QuizID.
		if (this.readyState == 4) { callback.call(this, id); }
	};
    
	xhttp.open("GET", urls[id], true);
	xhttp.send();

}

// Hiermit werden die Templates nacheinander gezogen
function getNextTemplate(){

	// Wir suchen den nächsten Key(QuizId)
	var next_template = screenurls.shift();
    
	
	// Falls es eine QuizID gibt, holen wir das Template dazu
	if(next_template){
		
		// Dazu verwenden wir die Funktion get mit einer Callback Funktion.
		// Die Callback Funktion wird erst aufgerufen, wenn der Ajax Aufruf abgearbeitet ist.
		get(next_template,
			
			// Callback Funktion: wird erst aufgerufen, wenn der Ajax Request beendet ist und trägt in "this" das Ergebnis des Ajax Requests.
			function(next_template){
				
				// Wir speichern das Template unter der QuizId im Objekt "templates".
				templates[next_template] = this.responseText;

				// Wir rufen die getNextQuiz-Funktion erneut auf.
				getNextTemplate();
			}
		);
		
	// Falls es keine Quiz-Id mehr gibt, machen wir irgend etwas anderes. Erst dann stehen die Templates zur Verfügung.
	}else{
		doSomething();
	}
}
	
// Hier geben wir aus Spaß mal das Template eines Quizzes aus.
function doSomething(){
    createQuizOverview();
	var hightscoreTemplate = templates["highscore"];   
	loaderisready = true;
}

/* Main
############################################# */

// Wir holen uns die Keys des urls-Objects
var screenurls = Object.keys(urls);

// Jetzt starten wir die rekursive Funktion, die die Templates zieht
getNextTemplate();