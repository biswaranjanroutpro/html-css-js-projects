const questions  = [
    {
        question: "Which HTML tag is used to display an image on a webpage?",
        answers: [
            {text: "<img>", correct: true},
            {text: "<image>", correct: false},
            {text: "<pic>", correct: false},
            {text: "<src>", correct: false},
        ]
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            {text: "<a>", correct: true},
            {text: "<link>", correct: false},
            {text: "<href>", correct: false},
            {text: "<url>", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to define the largest heading?",
        answers: [
            {text: "<h3>", correct: false},
            {text: "<h1>", correct: true},
            {text: "<heading>", correct: false},
            {text: "<head>", correct: false},
        ]
    },
    {
        question: "Which tag is used to insert a line break in HTML?",
        answers: [
            {text: "<break>", correct: false},
            {text: "<br>", correct: true},
            {text: "<lb>", correct: false},
            {text: "<hr>", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to define a table row?",
        answers: [
            {text: "<tr>", correct: true},
            {text: "<td>", correct: false},
            {text: "<th>", correct: false},
            {text: "<table-row>", correct: false},
        ]
    }
];

const question = document.querySelector("#question");
const answerBtns = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-btn");


let currentQuestionIdx = 0;
let score = 0;

function startQuiz() {
    currentQuestionIdx = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}


function showQuestion () {
    resetState();
    let currentQuestion = questions[currentQuestionIdx];
    let questionNo = currentQuestionIdx + 1;
    question.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener( "click", selectAnswer);
    });
}   

function resetState() {
    nextBtn.style.display = "none";
    while(answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    question.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = `Play Again`;
    nextBtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIdx++;
    if(currentQuestionIdx <questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextBtn.addEventListener("click", () => {
    if(currentQuestionIdx < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();

