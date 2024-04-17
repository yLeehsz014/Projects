const questions = [
    {
        question: "What is the approximate diameter of the Sun?",
        answers: [
            { text: "1,000,000 kilometers", correct: false },
            { text: "1,500,000 kilometers", correct: true },
            { text: "2,000,000 kilometers", correct: false },
            { text: "2,500,000 kilometers", correct: false },

        ]
    }, {
        question: "Who was the first human to travel into space?",
        answers: [
            { text: "Yuri Gagarin", correct: true },
            { text: "Neil Armstrong", correct: false },
            { text: "Alan Shepard", correct: false },
            { text: "John Glenn", correct: false },
        ]
    }
    , {
        question: "What is the name of the largest moon of Jupiter?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "What is the phenomenon where a massive star collapses and explodes?",
        answers: [
            { text: "Black Hole", correct: false },
            { text: "Neutron Star", correct: false },
            { text: "Supernova", correct: true },
            { text: "White Dwarf", correct: false },
        ]
    }
    ,
    {
        question: "What is the name of the mission that successfully landed the first humans on the Moon?",
        answers: [
            { text: "Apollo 11", correct: true },
            { text: "Mercury 7", correct: false },
            { text: "Gemini 4", correct: true },
            { text: "Apollo 13", correct: false },
        ]
    }
]

const questionElement = document.querySelector('#question')
const buttonElement = document.getElementById('answer-buttons')
const nextbtn = document.querySelector('#next-btn')
let i = 0;
let score = 0;
function startQuiz() {
    i = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion()
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[i];
    let numberQuestion = i + 1;
    questionElement.innerHTML = numberQuestion + " - " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        buttonElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct  = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(buttonElement.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block";
}

function resetState(){
    nextbtn.style.display = "none";
    while(buttonElement.firstChild){
        buttonElement.removeChild(buttonElement.firstChild);
    }
}


// function showScore(){

// }
// function handleNextBtn(){
//     i++;
//     if(i < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// }
// nextbtn.addEventListener('click',()=>{
//     if(i< questions.length){
//         handleNextBtn();
//     }else{
//         startQuiz();
//     }
// });
startQuiz();