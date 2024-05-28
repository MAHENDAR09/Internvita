const questions  = [
    {
        question : "Full form of HTML",
        answers : [
            { text :  "Hyper Text Markup Language",correct:true },
            { text :  "Hyper Text Makeup Language",correct:false },
            { text :  "Hyper Translate Markup Language",correct:false },
            { text :  "None of the above",correct:false },
        ]
    },
    {
        question : "Full form of CSS",
        answers : [
            {text : "Cascading Style Sheets",correct : true},
            {text : "Cascading Style Sheet",correct : false},
            {text : "Cascading Sigma Sheet",correct : false},
            {text : "none of the above",correct : false},
        ]
    },
    {
        question : "Full form of JVM",
        answers : [
            {text :"Java Virtual Machine",corrcet:true},
            {text :"Java Virtual Mike",corrcet:false},
            {text :"Java Vika Machine",corrcet:false},
            {text :"none of the above",corrcet:false},
        
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");


let questionIndex = 0;
let score  = 0;


function startQuizz() {
    questionIndex = 0;
    score = 0;
    nextButton.innerHtml = "next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let curquestion = questions[questionIndex];
    let qNo = questionIndex + 1;
    questionElement.innerHTML = qNo + ". "+ curquestion.question;
    curquestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of  ${questions.length} !`;
    nextButton.innerHTML = "playAgain";
    nextButton.style.display = "block";
}
function handleNextButton () {
    questionIndex++;
    if (questionIndex  < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click",()=> {
    if (questionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuizz();
    }});
startQuizz();