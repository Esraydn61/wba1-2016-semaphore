var output = document.getElementById('output');
var ajaxhttp = new XMLHttpRequest();
var url = "http://www.coseon.com/logik/quizuebersicht.json";

ajaxhttp.open("GET", url, true);
ajaxhttp.setRequestHeader("content-type", "http://www.coseon.com/logik/quizuebersicht.json");
ajaxhttp.onreadystatechange = function () {
    if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
        
        var jcontent = JSON.parse(ajaxhttp.responseText);
        for (var myObj in jcontent){
            console.log(myObj);
            output.innerHTML += '<div>';
            output.innerHTML += '<h1>' + jcontent[myObj].name + '</h1>';
            output.innerHTML += '<img src="' + jcontent[myObj].image + '"><br>';
            output.innerHTML += '<span>von ' + jcontent[myObj].author + ' erstellt am ' + jcontent[myObj].date +'</span>';
            output.innerHTML += '<div>' + jcontent[myObj].description + '</div>';
            output.innerHTML += '<span>' + jcontent[myObj].counter + ' mal gespielt</span>';
            output.innerHTML += '</div>';
            
        }
        console.log(jcontent);
    }
}
ajaxhttp.send(null);




