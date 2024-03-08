import './gameButtonsBlock.css';
import createElement from '../createElement';

const gameButtonsContainer = createElement('div', 'buttons-container');
const continueButton = createElement('button', 'continue-button', 'Continue') as HTMLButtonElement;
const checkButton = createElement('button', 'check-button', 'Check') as HTMLButtonElement;
continueButton.disabled = true;
checkButton.disabled = true;
gameButtonsContainer.append(continueButton, checkButton);
export { gameButtonsContainer, continueButton, checkButton };
