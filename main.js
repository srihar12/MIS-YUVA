const questions=[
    {
        question:"Which is largest animal in the world?",
        answers: [
            
                {text:"shark",correct:false},
                {text:"Blue whale",correct:true},
                {text:"Elephant",correct:false},
                {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is  smallest country in the world?",
        answers: [
            
                {text:"Nepal",correct:false},
                {text:"Bihar",correct:false},
                {text:"Srilanka",correct:false},
                {text:"Vatican City",correct:true},
        ]
    },
    {
        question:"Which is largest deserti n the world?",
        answers: [
            
                {text:"Kalahari",correct:false},
                {text:"Gobi",correct:true},
                {text:"Antarctica",correct:false},
                {text:"Sahana",correct:false},
        ]
    },
    {
        question:"Which is smallest animal in the world?",
        answers: [
            
                {text:"Asia",correct:false},
                {text:"Australia",correct:true},
                {text:"Arctic",correct:false},
                {text:"Africa",correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerbuttons=document.getElementById("answer-buttons");
const nextbutton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();

    let currentQuestion= questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct

        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct=="true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";

}
function showscore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();

    }else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();



 


