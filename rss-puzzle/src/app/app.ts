import createElement from './components/createElement';
import { loginFormModalWrapper } from './components/loginForm/loginForm';
import { checkUserLocalStorage } from './components/localStorage';
import logoutButton from './components/logoutButton/logoutButton';

export default function renderApp(): void {
  const container = createElement('div', 'container');
  document.body.append(container);
  container.append(loginFormModalWrapper, logoutButton);
}
checkUserLocalStorage(loginFormModalWrapper);
