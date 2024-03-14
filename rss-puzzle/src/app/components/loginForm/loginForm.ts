import './loginForm.css';
import createElement from '../createElement';
import { checkUserLocalStorage } from '../localStorage';
import { startScreenName } from '../startScreen/startScreen';

const loginFormModalWrapper = createElement('div', 'login-form-modal-wrapper');
const loginFormModal = createElement('div', 'login-form-modal');
loginFormModalWrapper.append(loginFormModal);
const form = createElement('form', 'form-modal', '', { action: '' });
const titleForm = createElement('h2', 'form-title', 'Login');
loginFormModal.append(titleForm, form);
const firstNameInput = createElement('input', 'first-name-input', '', {
  type: 'text',
  name: 'first-name',
  placeholder: 'First Name',
  required: 'true',
}) as HTMLInputElement;
const surnameInput = createElement('input', 'surname-input', '', {
  type: 'text',
  name: 'surname-name',
  placeholder: 'Surname',
  required: 'true',
}) as HTMLInputElement;
const submitButton = createElement('button', 'button', 'Login', {
  type: 'submit',
  disabled: 'true',
}) as HTMLButtonElement;
const errorMessageFirstName = createElement('div', 'errorMessage', '');
const errorMessageSurname = createElement('div', 'errorMessage', '');
form.append(
  createElement('p', '', 'First Name'),
  firstNameInput,
  errorMessageFirstName,
  createElement('p', '', 'Surname'),
  surnameInput,
  errorMessageSurname,
  submitButton,
);

interface ShowError {
  (element: HTMLInputElement, errorElement: HTMLElement, errorMessage: string): void;
}

const showError: ShowError = (element, errorElement, errorMessage) => {
  const errorEl = errorElement;
  errorEl.innerText = errorMessage;
  element.classList.remove('input-valid');
  element.classList.add('input-invalid');
  submitButton.disabled = true;
};

function validation(
  input: HTMLInputElement,
  reg: RegExp,
  regUppercase: RegExp,
  minLen: number,
  errorElement: HTMLElement,
): boolean {
  let isValid = true;

  if (!reg.test(input.value)) {
    isValid = false;
    showError(input, errorElement, 'only english letters and hyphen');
  } else if (!regUppercase.test(input.value)) {
    isValid = false;
    showError(input, errorElement, 'first letters uppercase');
  } else if (input.value.length < minLen) {
    isValid = false;
    showError(input, errorElement, `minimum length ${minLen}`);
  }
  const errorEl = errorElement;
  if (isValid) {
    errorEl.innerText = '';
    input.classList.add('input-valid');
  }

  return isValid;
}

function handleInputValidation(): void {
  const valid1 = validation(firstNameInput, /^[A-Za-z-]+$/, /^[A-Z-][a-z-]*$/, 3, errorMessageFirstName);
  const valid2 = validation(surnameInput, /^[A-Za-z-]+$/, /^[A-Z-][a-z-]*$/, 4, errorMessageSurname);
  if (valid1 && valid2) {
    submitButton.disabled = false;
  }
}

firstNameInput.addEventListener('input', handleInputValidation);
surnameInput.addEventListener('input', handleInputValidation);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = firstNameInput.value;
  const surname = surnameInput.value;

  localStorage.setItem('firstName', firstName);
  localStorage.setItem('surname', surname);
  checkUserLocalStorage(loginFormModalWrapper);
  startScreenName.textContent = `${localStorage.getItem('firstName')} ${localStorage.getItem('surname')}`;
});
export { loginFormModalWrapper };
