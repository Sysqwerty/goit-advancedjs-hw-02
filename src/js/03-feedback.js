import throttle from 'lodash.throttle';

const LS_FORM_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem(LS_FORM_KEY)) ?? {};

form.elements.email.value = formData.email ?? '';
form.elements.message.value = formData.message ?? '';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(evn) {
  formData[evn.target.name] = evn.target.value;
  localStorage.setItem(LS_FORM_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LS_FORM_KEY);
  console.log(formData);
}
