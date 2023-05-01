import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    feedback: document.querySelector('[name="message"]'),
};
autocompleteInputFromLocalStorage();
const feedbackData = {};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFeedbackFormInput, 1000));

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');

}

function onFeedbackFormInput(event) {
    feedbackData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));

}


function autocompleteInputFromLocalStorage() {
    const dataInputs = localStorage.getItem('feedback-form-state');
    if (dataInputs) {
        const inputArray = JSON.parse(localStorage.getItem('feedback-form-state'));
        refs.email.value = inputArray.email;
        refs.feedback.value = inputArray.message;

        console.log(inputArray);

        console.log(refs.email.value);
        console.log(refs.feedback.value);
        
    }
 }


