import './login-form.css';
import createElement from '../create-element';

const loginFormModalWrapper = createElement('div', 'login-form-modal-wrapper');
const loginFormModal = createElement('div', 'login-form-modal');
loginFormModalWrapper.append(loginFormModal);
const form = createElement('form', 'form');
const titleForm = createElement('h2', 'form-title', 'Login');
loginFormModal.append(titleForm, form);
const firstNameInput = createElement('input', 'first-name-input');
const surnameInput = createElement('input', 'surname-input');
const submitButton = createElement('button', 'button', 'Login');
form.append(
  createElement('p', '', 'First Name'),
  firstNameInput,
  createElement('p', '', 'Surname'),
  surnameInput,
  submitButton,
);

firstNameInput.setAttribute('type', 'text');
firstNameInput.setAttribute('name', 'first-name');
firstNameInput.setAttribute('placeholder', 'First Name');
surnameInput.setAttribute('type', 'text');
surnameInput.setAttribute('name', 'surname-name');
surnameInput.setAttribute('placeholder', 'Surname');
submitButton.setAttribute('type', 'submit');
export default loginFormModalWrapper;
