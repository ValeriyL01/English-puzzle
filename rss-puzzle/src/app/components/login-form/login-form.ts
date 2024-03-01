import './login-form.css';
import createElement from '../create-element';

const loginFormModalWrapper = createElement('div', 'login-form-modal-wrapper');
const loginFormModal = createElement('div', 'login-form-modal');
loginFormModalWrapper.append(loginFormModal);
const form = createElement('form', 'form');
const titleForm = createElement('h2', 'form-title', 'Login');
loginFormModal.append(titleForm, form);
const firstNameInput = createElement('input', 'first-name-input', '', {
  type: 'text',
  name: 'first-name',
  placeholder: 'First Name',
  required: 'true',
});
const surnameInput = createElement('input', 'surname-input', '', {
  type: 'text',
  name: 'surname-name',
  placeholder: 'Surname',
  required: 'true',
});
const submitButton = createElement('button', 'button', 'Login', {
  type: 'submit',
});
form.append(
  createElement('p', '', 'First Name'),
  firstNameInput,
  createElement('p', '', 'Surname'),
  surnameInput,
  submitButton,
);

export default loginFormModalWrapper;
