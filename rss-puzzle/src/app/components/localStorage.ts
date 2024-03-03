export function checkUserLocalStorage(element: HTMLElement): void {
  const firstName = localStorage.getItem('firstName');
  const surname = localStorage.getItem('surname');

  if (firstName && surname) {
    element.classList.remove('login-form-modal-wrapper--active');
  } else {
    element.classList.add('login-form-modal-wrapper--active');
  }
}
