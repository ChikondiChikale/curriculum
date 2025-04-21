let currentQuestionIndex = 0;
let score = 0;
let questions = [];

async function loadQuestions() {
    const response = await fetch("js.json"); // Load from external JSON
    questions = await response.json();
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= 10) { // Show results after 10 questions
        document.getElementById("question-container").style.display = "none";
        document.getElementById("next-button").style.display = "none";
        document.getElementById("result-container").style.display = "block";
        document.getElementById("score").innerText = `Your Score: ${score} / 10`;
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.question;
    
    let answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = ""; 

    questionData.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("btn");
        btn.onclick = () => selectAnswer(option, questionData.correct);
        answerButtons.appendChild(btn);
    });

    document.getElementById("next-button").style.display = "none";
}

function selectAnswer(selected, correct) {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        if (btn.innerText === correct) {
            btn.style.backgroundColor = "green";
        } else if (btn.innerText === selected) {
            btn.style.backgroundColor = "red";
        }
        btn.disabled = true;
    });

    if (selected === correct) {
        score++;
    }

    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    showQuestion();
}

loadQuestions();
