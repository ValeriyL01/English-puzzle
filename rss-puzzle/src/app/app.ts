import createElement from './components/create-element';
import loginFormModalWrapper from './components/login-form/login-form';

export default function renderApp(): void {
  const container = createElement('div', 'container');
  document.body.append(container);
  container.append(loginFormModalWrapper);
}
