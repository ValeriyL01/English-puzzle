import createElement from './components/createElement';
import { loginFormModalWrapper } from './components/loginForm/loginForm';
import { checkUserLocalStorage } from './components/localStorage';
import logoutButton from './components/logoutButton/logoutButton';
import { startScreen, startScreenButton } from './components/startScreen/startScreen';
import gamePages from './pages/gamePages';
import { statisticsPages, continueButtonStatisticsPages } from './pages/statisticsPages';
import { observeResultBlockChanges } from './components/logicVictory';
import autoComplete from './components/autoCompleteButtonLogic';
import { autoCompleteButton, resultsButton } from './components/gameButtonsBlock/gameButtonsBlock';

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
function switchStatisticsPages(page: HTMLElement): void {
  if (container.contains(gamePages)) {
    container.removeChild(gamePages);
  }
  container.append(logoutButton, page);
}
function switchLoginForm(): void {
  if (container.contains(gamePages)) {
    container.removeChild(gamePages);
  }
  if (container.contains(statisticsPages)) {
    container.removeChild(statisticsPages);
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
resultsButton.addEventListener('click', () => {
  switchStatisticsPages(statisticsPages);
});

continueButtonStatisticsPages.addEventListener('click', () => {
  if (container.contains(statisticsPages)) {
    container.removeChild(statisticsPages);
  }
  container.append(logoutButton, gamePages);
});
checkUserLocalStorage(loginFormModalWrapper);
observeResultBlockChanges();
autoCompleteButton.addEventListener('click', () => {
  autoComplete();
  autoCompleteButton.disabled = true;
});
