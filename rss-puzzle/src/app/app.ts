import createElement from './components/createElement';
import { loginFormModalWrapper } from './components/loginForm/loginForm';
import { checkUserLocalStorage } from './components/localStorage';
import logoutButton from './components/logoutButton/logoutButton';
import { startScreen, startScreenButton } from './components/startScreen/startScreen';
import gamePages from './pages/gamePages';

const container = createElement('div', 'container');
export default function renderApp(): void {
  document.body.append(container);
  container.append(loginFormModalWrapper, logoutButton, startScreen);
}

function switchGamePages(page: HTMLElement): void {
  [loginFormModalWrapper, startScreen].forEach((element) => {
    container.removeChild(element);
  });
  container.append(logoutButton, page);
}
function switchLoginForm(): void {
  if (container.contains(gamePages)) {
    container.removeChild(gamePages);
  }
  [loginFormModalWrapper, startScreen].forEach((element) => {
    container.append(element);
  });
  container.append(logoutButton);
}
startScreenButton.addEventListener('click', () => {
  switchGamePages(gamePages);
});
logoutButton.addEventListener('click', () => {
  switchLoginForm();
});

checkUserLocalStorage(loginFormModalWrapper);
