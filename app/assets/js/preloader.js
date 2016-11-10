
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

var jsons = {};
jsons.quizubersicht  = server + "/data/quizuebersicht.json";
//jsons.highscore      = server + "/data/ranking-1.json";


// In diesem Objekt werdne die Templates gespeichert
var templates = {};
var jsondata = {};

/* Functions
############################################# */

// Hier werden die Ajax Requests gemacht. AUfgerufen wird die funktion mit der QuizID und der Callback Funktion
function get(id, callback, urlliste) {
    
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		
		// Wenn der Ajax Request komplett ist, rufen wir die Callbackfunktion auf, übergeben das Ergebnis des Ajax Requests und die QuizID.
		if (this.readyState == 4) { callback.call(this, id); }
	};
    
    console.log("folgende url wird abgefragt: ");
    console.log(urlliste[id]);
	xhttp.open("GET", urlliste[id], true);
	xhttp.send();

}

//Hier werden die Jsons nacheinander gezogen
function getNextJson(){
    
    //hole den nächsten key aus den json urls
    var next_json = jsonurls.shift();
    
    //Falls es eine json url gibt ziehen wir die
    if(next_json){
        
        //Wir verwenden die Funktion get mit einer Callbackfunktion,
        //die aufgerufen wird wenn der Ajax Aufruf fertig ist.
        get(next_json, function(next_json){
            
            //wir speichern die Json unter der id im Objekt templates
            jsondata[next_json] = this.responseText;
            
            //rekursiver Aufruf von getNextJson
            getNextJson();
        }, jsons);
    }
}

// Hiermit werden die Templates nacheinander gezogen
function getNextTemplate(){

	// Wir suchen den nächsten Key(QuizId)
	var next_template = screenurls.shift();
    
	
	// Falls es noch eine template url gibt ziehen wir die
	if(next_template){
        
		// Dazu verwenden wir die Funktion get mit einer Callback Funktion.
		// Die Callback Funktion wird erst aufgerufen, wenn der Ajax Aufruf abgearbeitet ist.
		get(next_template,
			
			// Callback Funktion: wird erst aufgerufen, wenn der Ajax Request beendet ist und trägt in "this" das Ergebnis des Ajax Requests.
			function(next_template){
				
				// Wir speichern das Template unter der id im Objekt "templates".
				templates[next_template] = this.responseText;

                //console.log(templates["quizOverview"]);
				// Wir rufen die getNextQuiz-Funktion erneut auf.
				getNextTemplate();
			}, urls
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
    console.log(jsondata);
}

/* Main
############################################# */

// Wir holen uns die Keys des urls-Objects
var screenurls = Object.keys(urls);
var jsonurls = Object.keys(jsons);

// Jetzt starten wir die rekursive Funktion, die die Templates zieht,
// dann die jsons;

getNextJson();
getNextTemplate();