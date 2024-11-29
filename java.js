function language(){
    var pergunt = prompt("Choose a language/Escolha uma Lingua(English/Portugues)")
    if(pergunt == "English")
        QuestionEn() 
    else if(pergunt == "Portugues")
        Question()
}


function Question() {
    var pergunta = prompt("Qual sua Pergunta")
    if(pergunta == "Oque posso perguntar?"){
        document.getElementById("consequenses").innerHTML = `${pergunta}`;
        alert("já gastou uma Pergunta")
    }
    else{
        document.getElementById("consequenses").innerHTML = `${pergunta}`;
        alert("infelizmente não tenho quase (nenhum conhecimento),Tente outra pergunta")
    }
}
function QuestionEn() {
    var pergunta = prompt("What do you want to ask?")
    if(pergunta == "I can make any question?"){
        document.getElementById("consequenses").innerHTML = `${pergunta}`;
        alert("This is your best question?")
    }
    else{
        document.getElementById("consequenses").innerHTML = `${pergunta}`;
        alert("I don't know a answer for this question")
    }
}