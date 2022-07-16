import throttle from 'lodash.throttle';

import localStorageApi from './localstorage';

const form = document.querySelector('.feedback-form');

const feedbackFormState = {};

const fillFormFields = () => {
  const userDataFromLS = localStorageApi.load('feedback-form-state');

  if (userDataFromLS === undefined) {
    return;
  }

  const formElements = form.elements;

  for (const key in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(key)) {
      formElements[key].value = userDataFromLS[key];
    }
  }

  const val = {
    email: formElements.email.value,
    message: formElements.message.value,
  };

  console.log(val);
};

const onFormElChange = event => {
  const target = event.target;

  formElVal = target.value;
  formElName = target.name;

  feedbackFormState[formElName] = formElVal;

  localStorageApi.save('feedback-form-state', feedbackFormState);
};

const onFormSubmit = event => {
  event.preventDefault();

  localStorageApi.remove('feedback-form-state');

  event.currentTarget.reset();
};

form.addEventListener('input', throttle(onFormElChange, 500));
fillFormFields();

form.addEventListener('submit', onFormSubmit);
