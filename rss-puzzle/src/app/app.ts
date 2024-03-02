import createElement from './components/createElement';
import { loginFormModalWrapper } from './components/loginForm/loginForm';

export default function renderApp(): void {
  const container = createElement('div', 'container');
  document.body.append(container);
  container.append(loginFormModalWrapper);
}
