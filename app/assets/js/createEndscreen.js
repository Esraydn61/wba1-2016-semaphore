/****************************
Dieses Script Läd die schlussscreen.html Datei und
schreibt sie in das Dokument. Dabei wird die Punktzahl sowie
die richtigen/falschen Antworten übergeben.

*****************************/


function createEndscreen(punkte, antworten, quizIdx){
    
    console.log("createStartscreeen wurde aufgerufen.");
    console.log("Übergabe: " + quizIdx + " " + punkte + " " + antworten);

    // Stylesheet austauschen
    var sheeturl = urls["schlussscreen"].replace(/\.html/, ".css");
	document.getElementById('css-for-view').setAttribute('href', sheeturl);

    // Snippet ziehen
    var template = templates["schlussscreen"];

    // JSON Daten holen
    var quizze = jsondata["quizubersicht"];
    var quiz = quizze["quiz"+quizIdx];

    // Gespieltes Quiz Informationen
    template = template.replace(/{{name}}/, quiz.name);
    template = template.replace(/{{image}}/, quiz.image);
    template = template.replace(/{{punkte}}/, punkte);

    // Zufallsquizze "füllen"
    var r_quizze = [0, 0 , 0];
    for(var i=0;i<3; i++){

        var rng = Math.floor(Math.random()*(10-1+1)+1);

        if(rng != quiz.quizIdx && r_quizze.indexOf(rng) == -1){

            r_quizze[i] = rng;
            var r_quiz = quizze["quiz"+rng];

            template = template.replace(/{{r_name}}/, r_quiz.name);
            template = template.replace(/{{r_image}}/, r_quiz.image);

        }
        else{
            i--;
            }
    }


    // Ball-Farben für die Antworten zuweisen
    for(var i=0; i< antworten.length; i++){

        var ball_src = "/{{ball" + (i+1) + "}}/";

        console.log(ball_src);

        if(antworten[i]){
            template = template.replace(ball_src,"../../assets/images/g_ball.png");
        }
        else
            template = template.replace(ball_src,"../../assets/images/r_ball.png");
    }


    var item = document.createElement("div");
    item.innerHTML = template;

    document.getElementById("content").replaceChild(item.firstChild, document.getElementById("content").firstChild);
}
