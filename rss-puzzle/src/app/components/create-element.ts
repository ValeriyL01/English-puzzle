function createElement(tag: string, className?: string, text?: string): HTMLElement {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }

  return element;
}

export default createElement;
