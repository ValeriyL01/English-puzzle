import './logoutButton.css';
import { loginFormModalWrapper } from '../loginForm/loginForm';
import createElement from '../createElement';

const logoutButton = createElement('div', 'button-logout', 'Logout');

function logout(): void {
  localStorage.removeItem('firstName');
  localStorage.removeItem('surname');
  loginFormModalWrapper.classList.add('login-form-modal-wrapper--active');
}
logoutButton.addEventListener('click', logout);
export default logoutButton;
