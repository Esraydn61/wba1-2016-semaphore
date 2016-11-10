

function sortiertest (){
    
    
//console.log(jsondata[next_json]);
    var quiz = jsondata["quizubersicht"];
    
    
    for(var iterator in quiz){
    
        console.log(jsondata["quizubersicht"][iterator]);
        
    }
    /*
    // JSON verarbeiten
    for(var quizId in jsondata["quizubersicht"]){
        var quiz = json[quizId];
        temp = temp.replace(/{{quizname}}/, quiz.name);
        temp = temp.replace(/{{autor}}/, quiz.author);
        temp = temp.replace(/{{datum}}/, quiz.date);
        temp = temp.replace(/{{anzahl}}/, quiz.counter);
        temp = temp.replace(/{{src}}/, quiz.image);
        temp = temp.replace(/{{beschreibung}}/, quiz.description);
	
    };
      */                  
}