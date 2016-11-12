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
item.onclick = function(){ alert("Noch nicht implementiert"); }
devnavi.appendChild(item);

document.body.appendChild(devnavi)
