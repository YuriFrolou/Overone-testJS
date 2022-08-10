const form = document.querySelector(".form");
const workspaceTask = document.querySelector(".workspace__task");
const formInput = document.querySelector(".form__input");
const workspaceResults = document.querySelector(".workspace__results");


let index = 0;
workspaceTask.innerHTML = getQuestion(0);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getData(index);
    form.reset();
    workspaceTask.innerHTML = getQuestion(++index);
    if (index >= questions.length) {
        form.removeEventListener("submit", () => {
        });
        workspaceResults.innerHTML = showTestResults();
        formInput.disabled = true;
        return 0;
    }
});


