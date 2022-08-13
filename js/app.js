"use strict"

import { quizData } from "./data.js";

const questionText = document.getElementById("questionText");
const questionA = document.getElementById("questionA");
const questionB = document.getElementById("questionB");
const questionC = document.getElementById("questionC");
const submitButton = document.getElementById("submitButton");

let currentQuizData = 0;
let score = 0;

questionText.innerText = quizData[currentQuizData].question;
questionA.innerText = quizData[currentQuizData].a;
questionB.innerText = quizData[currentQuizData].b;
questionC.innerText = quizData[currentQuizData].c;


submitButton.addEventListener("click", () => {
    const checkedInput = document.querySelector('input[name="answer"]:checked');

    if(checkedInput.value === quizData[currentQuizData].correct) {
        score += 1;
    }

    if(currentQuizData === 2) {
        alert("Quiz game has finished!");
        alert(`Score: ${score}`);
        return;
    }

    currentQuizData += 1;

    questionText.innerText = quizData[currentQuizData].question;
    questionA.innerText = quizData[currentQuizData].a;
    questionB.innerText = quizData[currentQuizData].b;
    questionC.innerText = quizData[currentQuizData].c;

    checkedInput.checked = false;
})
