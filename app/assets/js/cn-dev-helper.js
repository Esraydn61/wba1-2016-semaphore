/*
	Kleines Helferscript zum Entwickeln, z.B: um direkt auf die Screens zu springen.
*/


// Footer mit direktnavi zu den Screens im kontext
var devnavi = document.createElement("ul");
devnavi.setAttribute("class", "devnavi");

// Quizübersicht
var item = document.createElement("li");
item.innerHTML = "Quizübersicht";
item.onclick = function(){ location.reload(); }
devnavi.appendChild(item);

// Quizstart
var item = document.createElement("li");
item.innerHTML = "Quizstart";
item.onclick = function(){ createStartscreen("quiz1"); }
devnavi.appendChild(item);

// Quizrunde
var item = document.createElement("li");
item.innerHTML = "Quizrunde";
item.onclick = function(){ initQuiz("1"); }
devnavi.appendChild(item);

// Quizende
var item = document.createElement("li");
item.innerHTML = "Quizende";
var dev_antworten = Array(10);
for(var i=0; i<dev_antworten.length;i++){
    dev_antworten[i] = false;
}
item.onclick = function(){ createEndscreen(100, dev_antworten, "quiz1"); }
devnavi.appendChild(item);

// Highscore
var item = document.createElement("li");
item.innerHTML = "Highscore";
item.onclick = function(){ createHighscore(); }
devnavi.appendChild(item);

document.body.appendChild(devnavi)
