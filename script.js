const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Southern Ocean", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

function loadQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    btn1.innerText = currentQuestion.answers[0].text;
    btn1.dataset.correct = currentQuestion.answers[0].correct;
    btn2.innerText = currentQuestion.answers[1].text;
    btn2.dataset.correct = currentQuestion.answers[1].correct;
    btn3.innerText = currentQuestion.answers[2].text;
    btn3.dataset.correct = currentQuestion.answers[2].correct;
    btn4.innerText = currentQuestion.answers[3].text;
    btn4.dataset.correct = currentQuestion.answers[3].correct;
}

function resetState() {
    nextBtn.style.display = "none";
    btn1.classList.remove("correct", "wrong");
    btn2.classList.remove("correct", "wrong");
    btn3.classList.remove("correct", "wrong");
    btn4.classList.remove("correct", "wrong");
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        score++;
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("wrong");
    }
    nextBtn.style.display = "block";
}

function showScore() {
    scoreContainer.innerText = `Your score: ${score}/${questions.length}`;
}

btn1.addEventListener("click", selectAnswer);
btn2.addEventListener("click", selectAnswer);
btn3.addEventListener("click", selectAnswer);
btn4.addEventListener("click", selectAnswer);

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

loadQuestion();
