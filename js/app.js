"use strict"

import { quizData } from "./data.js";

const questionText = document.getElementById("questionText");
const questionA = document.getElementById("questionA");
const questionB = document.getElementById("questionB");
const questionC = document.getElementById("questionC");
const submitButton = document.getElementById("submitButton");

let currentQuizData = 0;

questionText.innerText = quizData[currentQuizData].question;
questionA.innerText = quizData[currentQuizData].a;
questionB.innerText = quizData[currentQuizData].b;
questionC.innerText = quizData[currentQuizData].c;


submitButton.addEventListener("click", () => {
    if(currentQuizData === 3) {
        alert("Quiz game has finished!");
        return;
    }

    currentQuizData += 1;

    questionText.innerText = quizData[currentQuizData].question;
    questionA.innerText = quizData[currentQuizData].a;
    questionB.innerText = quizData[currentQuizData].b;
    questionC.innerText = quizData[currentQuizData].c;

    const checkedInput = document.querySelector('input[name="answer"]:checked');
    checkedInput.checked = false;
})
