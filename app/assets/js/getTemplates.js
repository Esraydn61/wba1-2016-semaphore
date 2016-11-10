/***************************************************
Dieses Script zieht sich alle notwendigen Templates

****************************************************/

// In diesem Objekt werdne die Templates gespeichert
var templates = {};

/* Functions
############################################# */

// Hier werden die Ajax Requests gemacht. AUfgerufen wird die funktion mit der QuizID und der Callback Funktion
function get(quizId, callback) {
  
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		
		// Wenn der Ajax Request komplett ist, rufen wir die Callbackfunktion auf, übergeben das Ergebnis des Ajax Requests und die QuizID.
		if (this.readyState == 4) { callback.call(this, quizId); }
	};

	xhttp.open("GET", urls[quizId], true);
	xhttp.send();

}

// Hiermit werden die Templates nacheinander gezogen
function getNextQuiz(){

	// Wir suchen den nächsten Key(QuizId)
	var next_quiz = quizzes.shift();
	
	// Falls es eine QuizID gibt, holen wir das Template dazu
	if(next_quiz){
		
		// Dazu verwenden wir die Funktion get mit einer Callback Funktion.
		// Die Callback Funktion wird erst aufgerufen, wenn der Ajax Aufruf abgearbeitet ist.
		get(next_quiz,
			
			// Callback Funktion: wird erst aufgerufen, wenn der Ajax Request beendet ist und trägt in "this" das Ergebnis des Ajax Requests.
			function(quizId){
				
				// Wir speichern das Template unter der QuizId im Objekt "templates".
				templates[quizId] = this.responseText;

				// Wir rufen die getNextQuiz-Funktion erneut auf.
				getNextQuiz();
			}
		);
		
	// Falls es keine Quiz-Id mehr gibt, machen wir irgend etwas anderes. Erst dann stehen die Templates zur Verfügung.
	}else{
		doSomething();
	}
}
	
// Hier geben wir aus Spaß mal das Template eines Quizzes aus.
function doSomething(){
	var hightscoreTemplate = templates["highscore"];
	console.log(hightscoreTemplate);
	
}

/* Main
############################################# */

// Wir holen uns die Keys des urls-Objects
var quizzes = Object.keys(urls);
console.log("Keys: " + quizzes);

// Jetzt starten wir die rekursive Funktion, die die Templates zieht
getNextQuiz();