import {calculate, getActivityIndex} from "./util.mjs";

let maleCheck = document.querySelector('#gender-male');

const ageInput = document.querySelector('#age');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');

const inputsGroup = document.querySelector('.inputs-group');
const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');

const resultBlock = document.querySelector('.counter__result');

const caloriesNorm = resultBlock.querySelector('#calories-norm');
const caloriesMinimal = resultBlock.querySelector('#calories-minimal');
const caloriesMaximal = resultBlock.querySelector('#calories-maximal');

const activityInput = document.querySelector('.radios-group');

let activityIndex = 1.2;

const calculateCalories = () => {
    const sexIndex = maleCheck.checked ? 5 : -161;
    const result = calculate(weightInput, heightInput, ageInput, activityIndex, sexIndex);

    caloriesNorm.textContent = result;
    caloriesMaximal.textContent = String(Math.round(result * 1.15));
    caloriesMinimal.textContent = String(Math.round(result * 0.85));
    resetButton.disabled = false;
}

const onSubmitButtonClick = (evt) => {
    evt.preventDefault();
    calculateCalories()
    resultBlock.classList.remove('counter__result--hidden');
};

const onResetButtonClick = () => {
    ageInput.value = '';
    heightInput.value = '';
    weightInput.value = '';
    resultBlock.classList.add('counter__result--hidden');
    resetButton.disabled = true
    submitButton.disabled = true;
};

const calculatorInit = () => {
    inputsGroup.addEventListener('input', () =>
        submitButton.disabled = !(ageInput.value > 0 && heightInput.value > 0 && weightInput.value > 0));

    activityInput.addEventListener('change', (evt) => {
        activityIndex = getActivityIndex(evt)
    });

    submitButton.addEventListener('click', onSubmitButtonClick);

    resetButton.addEventListener('click', onResetButtonClick);
}

export {calculatorInit};
