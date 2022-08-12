function checkAnswer(index, answer) {

    if (questions[index].answer === answer.trim()) {
        rightAnswers.push({
            ...questions[index],
            answer: answer
        });
        console.log(answer);
        console.log(`Ответ правильный`);
        countRight++;
    } else if (questions[index].answer !== answer.trim()) {
        wrongAnswers.push({
            ...questions[index],
            answer: answer
        });
        console.log(answer);
        console.log(`Ответ неправильный`);
        countWrong++;
    }
}

function getQuestion(index) {
    if (index >= questions.length) {
        return questions[index - 1].description;
    }
    return questions[index].description;
}

function getData(index) {
    const formData = new FormData(form);
    const result = formData.get("input");
    checkAnswer(index, result);
}

function showTestResults() {
    let str = '';
    str += `<p class="results__text">Количество правильных ответов: ${countRight}</p>`;
    str += `<p class="results__text">Количество неправильных ответов: ${countWrong}</p>`;
    str += `<p class="results__text">Ваш результат: ${((countRight / questions.length) * 100).toFixed(1)}%</p>`;
    if (countWrong > 0) {
        str += `<p class="results__text">Неправильные ответы:</p>`
        for (let i = 0; i < wrongAnswers.length; i++) {
            str += `<p class="results__text"><b>Вопрос:</b><br>${wrongAnswers[i].description}</p>`;
            str += `<p class="results__text">Ваш ответ: ${wrongAnswers[i].answer}</p>`;
        }
    }

    return str;
}

